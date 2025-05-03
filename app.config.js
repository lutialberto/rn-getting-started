const IS_DEV = process.env.APP_VARIANT === "development";
const IS_TEST = process.env.APP_VARIANT === "test";

export default {
  expo: {
    name: "RN Getting Started" + (IS_DEV ? " - Dev" : IS_TEST ? " - Test" : ""),
    slug: "rn-getting-started",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package:
        "com.alberto_luti.rngettingstarted" +
        (IS_DEV ? ".dev" : IS_TEST ? ".test" : ""),
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      "expo-secure-store",
      "expo-font",
      "expo-web-browser",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "d04f6226-4367-41b4-ba48-3299ae8ec70b",
      },
    },
    owner: "alberto_luti",
  },
};
