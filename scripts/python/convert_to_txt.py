import os
import shutil

def main():
    # Set workspace root directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.abspath(os.path.join(script_dir, '..', '..'))
    
    src_dir = os.path.join(root_dir, 'docs', 'estructura')
    dest_dir = os.path.join(root_dir, 'docs', 'estructura_txt')
    
    print(f"Source Directory: {src_dir}")
    print(f"Destination Directory: {dest_dir}")
    
    if not os.path.exists(src_dir):
        print(f"Error: Source directory '{src_dir}' does not exist.")
        return
        
    # Walk through the source directory
    copied_count = 0
    for dirpath, dirnames, filenames in os.walk(src_dir):
        for filename in filenames:
            # Full path to the source file
            src_file_path = os.path.join(dirpath, filename)
            
            # Determine the relative path to preserve subdirectories
            rel_path = os.path.relpath(src_file_path, src_dir)
            
            # Change the extension to .txt
            name, _ = os.path.splitext(rel_path)
            dest_rel_path = name + ".txt"
            
            # Full path to the destination file
            dest_file_path = os.path.join(dest_dir, dest_rel_path)
            
            # Ensure the destination parent directory exists
            os.makedirs(os.path.dirname(dest_file_path), exist_ok=True)
            
            # Copy the file content
            shutil.copy2(src_file_path, dest_file_path)
            copied_count += 1
            print(f"Copied: {rel_path} -> {dest_rel_path}")
            
    print(f"\nSuccess! Copied {copied_count} files to: {os.path.relpath(dest_dir, root_dir)}")

if __name__ == '__main__':
    main()
