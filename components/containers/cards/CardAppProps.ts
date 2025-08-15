import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type CardVariant = "default" | "outlined" | "elevated" | "flat";
export type CardSize = "small" | "medium" | "large";

export interface CardAppProps {
  children: ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}
