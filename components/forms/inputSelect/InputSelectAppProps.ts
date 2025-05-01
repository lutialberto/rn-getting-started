import { FieldValues, UseControllerProps } from "react-hook-form";
import { ClearInputProps } from "../models/ClearInputProps";
import { StyleProp, ViewStyle } from "react-native";

export interface InputSelectAppProps<T extends FieldValues>
  extends ClearInputProps {
  formControl: UseControllerProps<T>;
  label?: string;
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
  options: InputSelectAppOptionProps[];
}
export interface InputSelectAppOptionProps {
  label: string;
  value: string;
}
