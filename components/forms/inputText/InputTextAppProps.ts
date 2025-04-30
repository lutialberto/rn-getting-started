import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { FieldValues, UseControllerProps } from "react-hook-form";
import { ClearInputProps } from "../models/ClearInputProps";

export interface InputTextAppProps<T extends FieldValues>
  extends ClearInputProps {
  textInput?: TextInputProps;
  formControl: UseControllerProps<T>;
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
}
