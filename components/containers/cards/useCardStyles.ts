import { StyleSheet } from "react-native";
import { CardVariant, CardSize } from "./CardAppProps";
import { ColorsProps } from "@/hooks/theme/Colors";

interface UseCardStylesProps {
  variant: CardVariant;
  size: CardSize;
  colors: ColorsProps;
}

export const useCardStyles = ({
  variant,
  size,
  colors,
}: UseCardStylesProps) => {
  const baseStyles = StyleSheet.create({
    container: {
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
    },
  });

  const variantStyles = StyleSheet.create({
    default: {
      backgroundColor: colors.background,
      shadowColor: colors.text,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    outlined: {
      backgroundColor: colors.background,
      borderWidth: 1,
      borderColor: colors.primary,
    },
    elevated: {
      backgroundColor: colors.background,
      shadowColor: colors.text,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 6,
    },
    flat: {
      backgroundColor: colors.background,
      shadowOpacity: 0,
      elevation: 0,
    },
  });

  const sizeStyles = StyleSheet.create({
    small: {
      padding: 8,
      minHeight: 80,
    },
    medium: {
      padding: 16,
      minHeight: 120,
    },
    large: {
      padding: 20,
      minHeight: 160,
    },
  });

  return {
    container: [baseStyles.container, variantStyles[variant], sizeStyles[size]],
    content: baseStyles.content,
  };
};
