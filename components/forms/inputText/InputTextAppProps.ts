import { TextInputProps } from "react-native";
import { FieldValues } from "react-hook-form";
import { InputAppProps } from "../models/InputAppProps";

export interface InputTextAppProps<T extends FieldValues>
  extends InputAppProps<T> {
  textInput?: TextInputProps;
}
