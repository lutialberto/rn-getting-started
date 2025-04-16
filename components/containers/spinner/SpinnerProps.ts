import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native/types";

export interface SpinnerProps extends PropsWithChildren {
  visible: boolean;
  style: StyleProp<ViewStyle>;
  variant?: "default" | "overlap";
}
