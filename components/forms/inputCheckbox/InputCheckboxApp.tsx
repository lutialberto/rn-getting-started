import { View } from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";
import { useTextStyles } from "@/components/texts/useTextStyles";
import { TextApp } from "@/components/texts/TextApp";
import { InputAppProps } from "../models/InputAppProps";
import { FieldValues, useController } from "react-hook-form";

/**
 * @description Application input text component
 * @example
 * <InputCheckboxApp
 *  formControl={{ control, name: 'checkbox' }}
 *  label='Checkbox'
 *  error='errors.checkbox?.message'
 * />
 * @dependencies TextApp, useTextStyles, react-hook-form,
 * @param formControl - form control of the input
 * @param label - input label
 * @param error - input error
 */
export default function InputCheckboxApp<T extends FieldValues>(
  props: InputAppProps<T> & Omit<InputAppProps<T>, "clearInput">,
) {
  const { field } = useController(props.formControl);
  const { colors, textStyles } = useTextStyles();
  const color = !!props.error ? colors.error : colors.primary;

  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Checkbox
          style={{ borderColor: color }}
          value={field.value}
          onValueChange={field.onChange}
          color={color}
        />
        <TextApp style={textStyles.inputLabel}>{props.label}</TextApp>
      </View>
      {props.error !== "" && (
        <TextApp style={textStyles.inputError}>{props.error}</TextApp>
      )}
    </View>
  );
}
