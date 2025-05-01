import { FieldValues } from "react-hook-form";
import { InputAppProps } from "../models/InputAppProps";

export interface InputSelectAppProps<T extends FieldValues>
  extends InputAppProps<T> {
  options: InputSelectAppOptionProps[];
}
export interface InputSelectAppOptionProps {
  label: string;
  value: string;
}
