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

const audit = {
  inlineStyles: [],
  hardcodedHex: [],
  geometryViolations: [],
};

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  // Inline styles
  const inlineStyleMatches = [...content.matchAll(/style=\{\{([^}]+)\}\}/g)];
  if (inlineStyleMatches.length > 0) {
    inlineStyleMatches.forEach(match => {
        if (match[1].match(/background|color|margin|padding/i)) {
            audit.inlineStyles.push({ file, match: match[0] });
        }
    });
  }

  // Hardcoded hex or arbitrary colors (bg-[#...], text-[#...], border-[#...])
  const hardcodedHexMatches = [...content.matchAll(/\b(bg|text|border)-\[#[a-zA-Z0-9]+\]/g)];
  if (hardcodedHexMatches.length > 0) {
    hardcodedHexMatches.forEach(match => audit.hardcodedHex.push({ file, match: match[0] }));
  }

  // Geometry Violations
  const geometryMatches = [...content.matchAll(/\brounded-(xl|2xl|3xl|lg|md|sm|full)\b/g)];
  if (geometryMatches.length > 0) {
    geometryMatches.forEach(match => audit.geometryViolations.push({ file, match: match[0] }));
  }
});

console.log("=== AUDIT REPORT ===");
console.log(`Inline Styles found: ${audit.inlineStyles.length}`);
console.log(`Hardcoded Hex classes found: ${audit.hardcodedHex.length}`);
console.log(`Geometry Violations found: ${audit.geometryViolations.length}`);

// Sample 5 of each
console.log("\nSample Inline Styles:");
audit.inlineStyles.slice(0, 5).forEach(i => console.log(`${i.file}: ${i.match}`));

console.log("\nSample Hardcoded Hex:");
audit.hardcodedHex.slice(0, 5).forEach(i => console.log(`${i.file}: ${i.match}`));

console.log("\nSample Geometry Violations:");
audit.geometryViolations.slice(0, 5).forEach(i => console.log(`${i.file}: ${i.match}`));
