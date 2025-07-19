const fs = require('fs');
const path = require('path');

// Simple file listing function (since zip is not available)
function listProjectFiles(dir = '.', prefix = '') {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    // Skip node_modules, dist, .git, and other build artifacts
    if (['node_modules', 'dist', '.git', '.next', 'build'].includes(item)) {
      continue;
    }
    
    const fullPath = path.join(dir, item);
    const relativePath = path.join(prefix, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...listProjectFiles(fullPath, relativePath));
    } else {
      // Skip log files and .env files
      if (!item.endsWith('.log') && item !== '.env') {
        files.push(relativePath);
      }
    }
  }
  
  return files;
}

console.log('📦 Soul Travel App - Project Files:');
console.log('=====================================');

const projectFiles = listProjectFiles();
projectFiles.forEach(file => {
  console.log(`✓ ${file}`);
});

console.log(`\n📊 Total files: ${projectFiles.length}`);
console.log('\n💡 Note: Since zip command is not available, here\'s the complete file listing.');
console.log('You can download individual files or copy the entire project folder.');