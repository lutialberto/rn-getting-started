import {
  IOSNativeProps,
  AndroidNativeProps,
  WindowsNativeProps,
} from "@react-native-community/datetimepicker";
import { FieldValues, UseControllerProps } from "react-hook-form";
import { StyleProp, ViewStyle } from "react-native";
import { ClearInputProps } from "../models/ClearInputProps";

export interface InputDateAppProps<T extends FieldValues>
  extends ClearInputProps {
  formControl: UseControllerProps<T>;
  dateInput?: {
    formatDate?: (date: Date | undefined) => string;
    datePickerConfig?: DatePickerConfigProps;
  };
  error?: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export type DatePickerConfigProps =
  | IOSNativeProps
  | AndroidNativeProps
  | WindowsNativeProps;
