import os
import json
import re

# Regular expression to extract import/export paths in TypeScript/JavaScript
# Matches:
#   import { Foo } from 'path';
#   import Bar from "path";
#   import 'path';
#   import type { Baz } from 'path';
#   export * from 'path';
#   import('path') [dynamic imports]
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
        # External library (e.g. 'react', 'next', '@phosphor-icons/react')
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
    e.g. 'src/app/contacto/page.tsx' -> '/contacto'
    """
    parts = page_path.split('/')
    if len(parts) >= 2 and parts[0] == 'src' and parts[1] == 'app':
        # Get path segments between 'app' and the final 'page.tsx'
        route_parts = parts[2:-1]
        # Filter out route groups like (marketing)
        route_parts = [p for p in route_parts if not (p.startswith('(') and p.endswith(')'))]
        return '/' + '/'.join(route_parts)
    return '/'

def build_dependency_tree(file_path, root_dir, current_stack=None, visited_global=None):
    """
    Recursively builds a tree of file dependencies (components, hooks, utils).
    Avoids circular dependencies using current_stack.
    Avoids duplicate tree expansion using visited_global.
    """
    if current_stack is None:
        current_stack = set()
    if visited_global is None:
        visited_global = set()

    abs_path = os.path.normpath(os.path.join(root_dir, file_path))
    
    # Base node structure
    node = {
        "path": file_path,
        "dependencies": []
    }

    # Circular dependency protection
    if abs_path in current_stack:
        node["circular"] = True
        return node

    # If already fully expanded elsewhere in the tree, we only list its path
    # and mark it as already mapped to avoid giant nested logs.
    if abs_path in visited_global:
        node["already_mapped"] = True
        return node

    visited_global.add(abs_path)
    current_stack.add(abs_path)

    # Read and parse file content
    try:
        with open(abs_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        node["error"] = f"Could not read file: {str(e)}"
        current_stack.remove(abs_path)
        return node

    # Extract all imports/exports
    import_paths = []
    for match in IMPORT_REGEX.finditer(content):
        val = match.group(1) or match.group(2)
        if val:
            import_paths.append(val)

    # Resolve paths and recurse
    current_dir = os.path.dirname(file_path)
    resolved_paths = []
    
    for imp in import_paths:
        resolved = resolve_import(imp, current_dir, root_dir)
        if resolved and resolved not in resolved_paths:
            resolved_paths.append(resolved)

    for resolved in resolved_paths:
        # Build nested tree
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
            # Match files like page.tsx, page.ts, page.jsx, page.js
            if name == 'page' and ext in ['.tsx', '.ts', '.jsx', '.js']:
                rel_path = os.path.relpath(os.path.join(dirpath, f), root_dir)
                pages.append(rel_path.replace('\\', '/'))
                
    return sorted(pages)

def main():
    # Set workspace root directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Assuming script is in scripts/python/
    root_dir = os.path.abspath(os.path.join(script_dir, '..', '..'))
    
    print(f"Workspace Root: {root_dir}")
    
    # 1. Find all pages in src/app
    pages = find_all_pages(root_dir)
    print(f"Found {len(pages)} pages to scan.")
    
    # 2. Build dependency tree for each page separately
    pages_structure = []
    for page_path in pages:
        route = get_route_from_path(page_path)
        print(f"Scanning page: {page_path} (Route: {route})")
        
        # We initialize visited_global per-page to map dependencies fully for each page,
        # but avoid duplicating trees within the same page hierarchy.
        tree = build_dependency_tree(page_path, root_dir)
        
        pages_structure.append({
            "page": page_path,
            "route": route,
            "structure": tree
        })
        
    # 3. Ensure target directory docs/estructura exists
    dest_dir = os.path.join(root_dir, 'docs', 'estructura')
    os.makedirs(dest_dir, exist_ok=True)
    
    # 4. Write structure to paginas.json
    dest_file = os.path.join(dest_dir, 'paginas.json')
    with open(dest_file, 'w', encoding='utf-8') as f:
        json.dump(pages_structure, f, indent=2, ensure_ascii=False)
        
    print(f"\nSuccess! Page structure written to: {os.path.relpath(dest_file, root_dir)}")

if __name__ == '__main__':
    main()
