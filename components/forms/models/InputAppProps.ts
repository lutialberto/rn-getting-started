import { FieldValues, UseControllerProps } from "react-hook-form";
import { ClearInputProps } from "./ClearInputProps";
import { StyleProp, ViewStyle } from "react-native";

export interface InputAppProps<T extends FieldValues> extends ClearInputProps {
  label?: string;
  error?: string;
  formControl: UseControllerProps<T>;
  containerStyle?: StyleProp<ViewStyle>;
}
