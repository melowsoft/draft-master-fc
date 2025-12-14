module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./",
            "@/app": "./app",
            "@/components": "./components",
            "@/constants": "./constants",
            "@/hooks": "./hooks",
            "@/services": "./services",
            "@/data": "./data",
            "@/assets": "./assets",
            "@/navigation": "./navigation"
          },
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};