import { useFonts as useFontsDefault } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";

/**
 * @description hook to load fonts
 * @depencies expo-font
 * @returns {Object} fontsLoaded: boolean, error: any
 */
export const useFonts = () => {
  return useFontsDefault({
    "Primary-Thin": require("@/assets/fonts/Inter-Thin.ttf"),
    "Primary-ExtraLight": require("@/assets/fonts/Inter-ExtraLight.ttf"),
    "Primary-Light": require("@/assets/fonts/Inter-Light.ttf"),
    "Primary-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
    "Primary-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
    "Primary-SemiBold": require("@/assets/fonts/Inter-SemiBold.ttf"),
    "Primary-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Primary-ExtraBold": require("@/assets/fonts/Inter-ExtraBold.ttf"),
    "Primary-Black": require("@/assets/fonts/Inter-Black.ttf"),
    ...FontAwesome.font,
  });
};
