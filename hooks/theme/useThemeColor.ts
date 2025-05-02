import Colors from "@/hooks/theme/Colors";
import { useColorScheme } from "react-native";

/**
 * @description This hook returns the theme color based on the current color scheme of the device.
 * @config
 * On the root app component, wrap the app with the ThemeProvider and set the theme based on the color scheme of the device.
 * @example
 * return (
 *   <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
 *     <Stack>
 *       {...}
 *     </Stack>
 *   </ThemeProvider>
 * )
 * @example
 * const themeColor = useThemeColor();
 */
export default function useThemeColor() {
  const theme = useColorScheme() ?? "light";

  return Colors[theme];
}
