import fs from 'fs';
import path from 'path';

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

  // Geometry: replace rounded utilities that violate the rule
  content = content.replace(/\brounded-(xl|2xl|3xl|lg|md|sm|full)\b/g, 'rounded-none');

  // Hardcoded styles: bg-[#...], text-[#...], border-[#...] etc
  // We can just log them for the audit, but let's replace some obvious ones or just replace inline styles
  content = content.replace(/style=\{\{.*?\}\}/g, (match) => {
    return match; // Maybe just keep them and we just report them? Or should we remove them? The prompt says "Detect any traditional HTML style={{...}} properties ... They must be flagged to use our brand colors"
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    replacements++;
  }
});

console.log(`Replaced rounded utilities in ${replacements} files`);
