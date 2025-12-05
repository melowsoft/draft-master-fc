const fs = require('fs');
const path = require('path');

console.log('🔍 Checking imports...\n');

const filesToCheck = [
  'app/auth/index.tsx',
  'app/(tabs)/_layout.tsx',
  'app/(tabs)/index.tsx',
  'app/(tabs)/my-lineups.tsx',
  'app/(tabs)/communities.tsx',
  'app/(tabs)/profile.tsx',
];

filesToCheck.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('use-theme')) {
      console.log(`❌ ${file} has incorrect import: use-theme`);
    } else if (content.includes('use-theme')) {
      console.log(`✅ ${file} has correct import: use-theme`);
    }
  } else {
    console.log(`⚠️  ${file} not found`);
  }
});