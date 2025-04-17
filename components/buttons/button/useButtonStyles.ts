import {
  StyleProp,
  StyleSheet,
  TextStyle,
  useColorScheme,
  ViewProps,
  ViewStyle,
} from "react-native";
import { useButtonVariants } from "./useButtonVariants";
import { Variant } from "./Constants";
import { useThemeColor } from "@/components/Themed";

/**
 * @description This is a helper hook to get the styles of the button variants
 * @param containerStyle The container style of the button
 * @param labelStyle The label style of the button
 * @param variant The variant of the button
 * @param enabled The enabled state of the button
 * @returns The styles of the button
 */
export function useButtonStyles({
  containerStyle,
  labelStyle,
  variant,
  enabled,
}: {
  variant: Variant;
  enabled: boolean;
  containerStyle: StyleProp<ViewProps>;
  labelStyle: StyleProp<TextStyle>;
}) {
  const colors = useThemeColor();

  const { getContainerStyle, getLabelStyle } = useButtonVariants<Variant>({
    baseStyles: {
      container: styles.baseContainer as StyleProp<ViewStyle>,
      label: {
        ...styles.baseLabel,
        color: colors.text,
      } as StyleProp<TextStyle>,
    },
    containerStyles: {
      default: {
        container: {
          backgroundColor: colors.primary,
        } as StyleProp<ViewStyle>,
        containerDisabled: {
          backgroundColor: colors.disabledColor,
        } as StyleProp<ViewStyle>,
      },
      outline: {
        container: {
          ...styles.outlineContainer,
          borderColor: colors.primary,
        } as StyleProp<ViewStyle>,
        containerDisabled: {
          borderColor: colors.disabledColor,
        } as StyleProp<ViewStyle>,
      },
      textOnly: {
        containerDisabled: {
          borderColor: colors.disabledColor,
        } as StyleProp<ViewStyle>,
      },
    },
    labelStyles: {
      default: {},
      outline: {
        label: {
          color: colors.primary,
        } as StyleProp<TextStyle>,
        labelDisabled: {
          color: colors.primary,
        } as StyleProp<TextStyle>,
      },
      textOnly: {
        label: {
          color: colors.primary,
        } as StyleProp<TextStyle>,
        labelDisabled: {
          color: colors.disabledColor,
        } as StyleProp<TextStyle>,
      },
    },
  });

  return {
    containerStyle: getContainerStyle(enabled, variant, containerStyle),
    labelStyle: getLabelStyle(enabled, variant, labelStyle),
  };
}

const styles = StyleSheet.create({
  baseContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 6,
    flexDirection: "row",
  },
  baseLabel: {
    marginLeft: 2,
    textAlign: "center",
  },
  outlineContainer: {
    backgroundColor: "transparent",
    borderWidth: 1,
  },
});
