import React from "react";
import { View } from "react-native";
import { CardAppProps } from "./CardAppProps";
import { useCardStyles } from "./useCardStyles";
import useThemeColor from "@/hooks/theme/useThemeColor";

/**
 * @description Application card component - versatile container for content
 * @snippet appCard
 * @example - Basic Card
 * ```tsx
 * <CardApp>
 *   <TextApp>Card content</TextApp>
 * </CardApp>
 * ```
 * - Complete Card with all features
 * ```tsx
 * <CardApp
 *   variant="outlined"
 *   size="medium"
 *   containerStyle={styles.customCard}
 * >
 *   <TextApp>Main content goes here</TextApp>
 * </CardApp>
 * ```
 * @dependencies useCardStyles, useThemeColor
 * @param variant - visual style of the card
 * @param size - size preset for the card
 * @param containerStyle - custom styles for the card container
 * @param contentStyle - custom styles for the card content
 * @param children - content to display inside the card
 */
const CardApp: React.FC<CardAppProps> = ({
  variant = "default",
  size = "medium",
  containerStyle,
  contentStyle,
  children,
}) => {
  const colors = useThemeColor();
  const cardStyles = useCardStyles({
    variant,
    size,
    colors,
  });

  return (
    <View style={[cardStyles.container, containerStyle]}>
      <View style={[cardStyles.content, contentStyle]}>{children}</View>
    </View>
  );
};

export default CardApp;
