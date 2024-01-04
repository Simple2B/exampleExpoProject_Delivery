// // Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname, {
//   // [Web-only]: Enables CSS support in Metro.
//   isCSSEnabled: true,
// });

// module.exports = config;

const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  let defaultConfig = await getDefaultConfig(__dirname);
  defaultConfig.resolver.resolverMainFields.unshift("sbmodern");
  return defaultConfig;
})();
