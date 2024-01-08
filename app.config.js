module.exports = {
  expo: {
    name: "Simple Delivery",
    slug: "testexpodelivery",
    version: "0.0.1", // npm version doesn't affect this value
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#d3d3d3",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.varvara.expoProject",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      permissions: [
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.FOREGROUND_SERVICE",
      ],
      package: "com.varvara.expoProject",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router", "expo-location"],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "f4418ea3-c49e-44d2-a804-a1790e52cbc2",
      },
      storybookEnabled: process.env.STORYBOOK_ENABLED,
    },
  },
};

// "projectId": "96118aa5-7988-42ba-884f-3d618056f104"
