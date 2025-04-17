import { StyleProp, TextStyle, ViewStyle } from "react-native/types";
import { Variant } from "./Constants";

export interface ButtonAppProps {
  variant?: Variant;
  onPress: () => void;
  label?: string;
  enabled?: boolean;
  icon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}
