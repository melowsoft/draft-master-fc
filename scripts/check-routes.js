const fs = require('fs');
const path = require('path');

console.log('🔍 Checking route structure...\n');

const appDir = path.join(__dirname, '../app');

function checkRoutes(dir, prefix = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    if (item.startsWith('.')) return;
    
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (item.startsWith('(') && item.endsWith(')')) {
        console.log(`📁 ${prefix}${item} (route group)`);
      } else {
        console.log(`📁 ${prefix}${item} (route)`);
      }
      checkRoutes(fullPath, prefix + '  ');
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      console.log(`📄 ${prefix}${item}`);
    }
  });
}

checkRoutes(appDir);