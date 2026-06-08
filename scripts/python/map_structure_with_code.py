import os
import json
import re

# Regular expression to extract import/export paths in TypeScript/JavaScript
IMPORT_REGEX = re.compile(
    r'(?:import|export)\s+(?:type\s+)?(?:[^"\';]+?\s+from\s+)?["\']([^"\']+)["\']'
    r'|import\s*\(["\']([^"\']+)["\']\)'
)

def resolve_import(import_path, current_dir, root_dir):
    """
    Resolves an import path to a relative workspace path.
    Returns None if the import is an external library.
    """
    if import_path.startswith('@/'):
        # Alias import maps to src/
        base_path = import_path.replace('@/', 'src/', 1)
    elif import_path.startswith('./') or import_path.startswith('../'):
        # Relative import
        base_path = os.path.normpath(os.path.join(current_dir, import_path))
    else:
        # External library (e.g. 'react', 'next')
        return None

    # Normalize path to use forward slashes
    base_path = os.path.relpath(base_path, root_dir).replace('\\', '/')

    # List of extensions to check in order of preference
    extensions = ['.tsx', '.ts', '.jsx', '.js', '.css', '.json']

    # 1. Check if the path exists directly on disk
    full_path = os.path.join(root_dir, base_path)
    if os.path.isfile(full_path):
        return base_path

    # 2. Check if appending an extension resolves it to a file
    for ext in extensions:
        if os.path.isfile(full_path + ext):
            return base_path + ext

    # 3. Check if it points to a directory containing an index file
    for ext in extensions:
        index_path = os.path.join(full_path, 'index' + ext)
        if os.path.isfile(index_path):
            rel_index = os.path.relpath(index_path, root_dir).replace('\\', '/')
            return rel_index

    # Fallback to direct path check in case it's another asset type
    if os.path.exists(full_path):
        return base_path

    return None

def get_route_from_path(page_path):
    """
    Deduces the Next.js route from the page's file path.
    """
    parts = page_path.split('/')
    if len(parts) >= 2 and parts[0] == 'src' and parts[1] == 'app':
        route_parts = parts[2:-1]
        route_parts = [p for p in route_parts if not (p.startswith('(') and p.endswith(')'))]
        return '/' + '/'.join(route_parts)
    return '/'

def get_filename_from_path(page_path):
    """
    Returns a flat filename representing the page's relative path.
    e.g. 'src/app/cotizar/express/page.tsx' -> 'src_app_cotizar_express_page.json'
    """
    name, _ = os.path.splitext(page_path)
    flat_name = name.replace('/', '_').replace('\\', '_')
    return flat_name + ".json"

def build_dependency_tree(file_path, root_dir, current_stack=None, visited_global=None):
    """
    Recursively builds a tree of file dependencies (components, hooks, utils) including the source code.
    """
    if current_stack is None:
        current_stack = set()
    if visited_global is None:
        visited_global = set()

    abs_path = os.path.normpath(os.path.join(root_dir, file_path))
    
    node = {
        "path": file_path,
        "code": None,
        "dependencies": []
    }

    if abs_path in current_stack:
        node["circular"] = True
        return node

    if abs_path in visited_global:
        node["already_mapped"] = True
        return node

    visited_global.add(abs_path)
    current_stack.add(abs_path)

    try:
        with open(abs_path, 'r', encoding='utf-8') as f:
            content = f.read()
            node["code"] = content
    except Exception as e:
        node["error"] = f"Could not read file: {str(e)}"
        current_stack.remove(abs_path)
        return node

    import_paths = []
    for match in IMPORT_REGEX.finditer(content):
        val = match.group(1) or match.group(2)
        if val:
            import_paths.append(val)

    current_dir = os.path.dirname(file_path)
    resolved_paths = []
    
    for imp in import_paths:
        resolved = resolve_import(imp, current_dir, root_dir)
        if resolved and resolved not in resolved_paths:
            resolved_paths.append(resolved)

    for resolved in resolved_paths:
        child_node = build_dependency_tree(
            resolved, 
            root_dir, 
            current_stack.copy(), 
            visited_global
        )
        node["dependencies"].append(child_node)

    current_stack.remove(abs_path)
    return node

def find_all_pages(root_dir):
    """
    Walks src/app to find all Next.js App Router pages.
    """
    app_dir = os.path.join(root_dir, 'src', 'app')
    pages = []
    
    if not os.path.exists(app_dir):
        print(f"Error: App directory '{app_dir}' not found.")
        return pages

    for dirpath, _, filenames in os.walk(app_dir):
        for f in filenames:
            name, ext = os.path.splitext(f)
            if name == 'page' and ext in ['.tsx', '.ts', '.jsx', '.js']:
                rel_path = os.path.relpath(os.path.join(dirpath, f), root_dir)
                pages.append(rel_path.replace('\\', '/'))
                
    return sorted(pages)

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.abspath(os.path.join(script_dir, '..', '..'))
    
    print(f"Workspace Root: {root_dir}")
    
    # Ensure target directory docs/estructura/agregado_codigo exists
    dest_dir = os.path.join(root_dir, 'docs', 'estructura', 'agregado_codigo')
    os.makedirs(dest_dir, exist_ok=True)
    
    # 1. Find all pages in src/app
    pages = find_all_pages(root_dir)
    print(f"Found {len(pages)} pages to scan.")
    
    # 2. Build dependency tree and write to separate file for each page
    for page_path in pages:
        route = get_route_from_path(page_path)
        filename = get_filename_from_path(page_path)
        dest_file = os.path.join(dest_dir, filename)
        
        print(f"Scanning page (with code): {page_path} (Route: {route}) -> Writing to: {filename}")
        
        tree = build_dependency_tree(page_path, root_dir)
        
        page_structure = {
            "page": page_path,
            "route": route,
            "structure": tree
        }
        
        with open(dest_file, 'w', encoding='utf-8') as f:
            json.dump(page_structure, f, indent=2, ensure_ascii=False)
            
    print(f"\nSuccess! All individual page structures with code written to: {os.path.relpath(dest_dir, root_dir)}")

if __name__ == '__main__':
    main()
