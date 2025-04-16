import { StyleSheet, useColorScheme } from "react-native";
import Colors, { ColorsProps } from "@/constants/Colors";
import { Fonts } from "./Fonts";

/**
 * @description - This hook is used to get the styles for the text component
 * @returns - styles and colors
 * @example - const { textStyles, colors } = useTextStyles();
 * @depencies useTheme
 */
export const useTextStyles = () => {
  const colorsScheme = useColorScheme();
  const colorsTheme = Colors[colorsScheme ?? "light"];
  const styles = getStyles(colorsTheme);

  return {
    textStyles: styles,
    colors: colorsTheme,
  };
};

const getStyles = (colors: ColorsProps) => {
  return StyleSheet.create({
    textDefault: {
      color: colors.text,
      fontSize: 16,
      fontFamily: Fonts.PrimaryRegular,
    },
    inputError: {
      color: colors.error,
      fontSize: 12,
    },
    inputLabel: {
      color: colors.text,
      fontSize: 14,
      fontFamily: Fonts.PrimaryBold,
      textTransform: "uppercase",
      letterSpacing: 2,
    },
    screenTitle: {
      fontSize: 24,
      textAlign: "center",
    },
  });
};
