import {
  IOSNativeProps,
  AndroidNativeProps,
  WindowsNativeProps,
} from "@react-native-community/datetimepicker";
import { FieldValues } from "react-hook-form";
import { InputAppProps } from "../models/InputAppProps";

export interface InputDateAppProps<T extends FieldValues>
  extends InputAppProps<T> {
  dateInput?: {
    formatDate?: (date: Date | undefined) => string;
    datePickerConfig?: DatePickerConfigProps;
  };
}

export type DatePickerConfigProps =
  | IOSNativeProps
  | AndroidNativeProps
  | WindowsNativeProps;
