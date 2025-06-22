import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { Try } from "expo-router/build/views/Try";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useFonts } from "@/components/texts/useFonts";
import { StatusBar, useColorScheme } from "react-native";
import ToastApp from "@/components/toast/ToastApp";
import MainFallbackApp from "@/components/containers/error/MainFallbackApp";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <RootLayoutNav />
      <ToastApp />
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={theme}>
      <StatusBar
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        backgroundColor={theme.colors.background}
      />
      <Try catch={MainFallbackApp}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "red" },
            headerTintColor: "brown",
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Try>
    </ThemeProvider>
  );
}
