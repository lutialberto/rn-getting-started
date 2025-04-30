import { StyleProp, ViewStyle } from "react-native";

export interface InputWrapperAppProps {
  label?: string;
  error?: string;
  children: JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
}
