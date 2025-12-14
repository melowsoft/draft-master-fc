// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add these resolutions
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  'expo-auth-session': require.resolve('expo-auth-session'),
};

// Enable symlinks
config.resolver.unstable_enableSymlinks = true;

// Force resolution to specific versions if needed
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'expo-auth-session') {
    return {
      filePath: require.resolve('expo-auth-session'),
      type: 'sourceFile',
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;