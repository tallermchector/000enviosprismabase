const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'O_DIRECT' || err.code === 'ENOENT') return;
    }
  });
  return filelist;
};

const files = [...walkSync('src/app'), ...walkSync('src/components')].filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

let replacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace rounded utilities
  content = content.replace(/\brounded-(xl|2xl|3xl|lg|md|sm|full)\b/g, 'rounded-none');

  // Replace arbitrary colors and specific tailwind colors with brand colors or variables
  // Actually, replacing all bg-[#...] with bg-blue-brand etc might be hard without knowing context.
  // The prompt asks to "identify hardcoded design anti-patterns" and "lay out the migration path".
  // Maybe I don't need to fix all of them programmatically but just provide an audit report?

  if (content !== original) {
    fs.writeFileSync(file, content);
    replacements++;
  }
});

console.log(`Replaced in ${replacements} files`);
