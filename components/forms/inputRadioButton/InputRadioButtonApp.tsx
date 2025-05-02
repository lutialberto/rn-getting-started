import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  InputSelectAppOptionProps,
  InputSelectAppProps,
} from "../inputSelect/InputSelectAppProps";
import { FieldValues, useController } from "react-hook-form";
import IconApp from "@/components/texts/icon/IconApp";
import { useTextStyles } from "@/components/texts/useTextStyles";
import InputWrapperApp from "../inputWrapper/InputWrapperApp";
import { TextApp } from "@/components/texts/TextApp";

/**
 * @description Application input radio button component
 * @example
 * <InputRadioButtonApp
 *   formControl={{
 *     control,
 *     name: "options",
 *     rules: { required: "The input field is required" },
 *   }}
 *   label={"Opciones"}
 *   error={errors.options?.message}
 *   containerStyle={{ minWidth: 250 }}
 *   options={[
 *     { label: "Option 1", value: "option1" },
 *     { label: "Option 2", value: "option2" },
 *     { label: "Option 3", value: "option3" },
 *   ]}
 * />
 * @dependencies InputSelectAppProps, InputWrapperApp, TextApp, IconApp, react-hook-form
 * @param options - options to select
 * @param formControl - form control of the input text
 * @param label - input wrapper label
 * @param error - input wrapper error
 * @param containerStyle - input wrapper container style
 */
export default function InputRadioButtonApp<T extends FieldValues>({
  options,
  formControl,
  label,
  error,
  containerStyle,
}: InputSelectAppProps<T> & Omit<InputSelectAppProps<T>, "clearInput">) {
  const { field } = useController(formControl);
  const { textStyles, colors } = useTextStyles();
  return (
    <InputWrapperApp
      label={label}
      error={error}
      containerStyle={containerStyle}
      childrenContainerStyle={[styles.childrenContainer]}
    >
      <>
        {options.map((option) => (
          <Pressable
            onPress={() => field.onChange(option.value)}
            key={option.value}
            style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
          >
            <IconApp
              color={
                field.value === option.value ? colors.primary : colors.text
              }
              name={field.value === option.value ? "circle" : "circle-o"}
              size={textStyles.textDefault.fontSize}
            />
            <TextApp>{option.label}</TextApp>
          </Pressable>
        ))}
      </>
    </InputWrapperApp>
  );
}

const styles = StyleSheet.create({
  childrenContainer: {
    borderBottomWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    gap: 12,
    flexWrap: "wrap",
  },
});
