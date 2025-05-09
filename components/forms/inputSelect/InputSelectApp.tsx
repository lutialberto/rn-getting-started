import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { InputSelectAppProps } from "./InputSelectAppProps";
import { FieldValues, useController } from "react-hook-form";
import InputWrapperApp from "../inputWrapper/InputWrapperApp";
import { TextApp } from "@/components/texts/TextApp";
import ModalApp from "@/components/containers/modals/modal/ModalApp";
import InputClearIconApp from "../inputClear/InputClearIconApp";

/**
 * @description Application input select component
 * @example
 * <InputSelectApp
 *   formControl={{
 *     control: control,
 *     name: "option",
 *     rules: { required: "The input field is required" },
 *   }}
 *   label={"Opciones"}
 *   error={errors.option?.message}
 *   containerStyle={{ minWidth: 250 }}
 *   clearInput={() => setValue("option", null)}
 *   options={[
 *     { label: "Option 1", value: "option1" },
 *     { label: "Option 2", value: "option2" },
 *     { label: "Option 3", value: "option3" },
 *   ]}
 * />
 * @dependencies InputAppProps, InputClearIconApp, InputWrapperApp, ModalApp, TextApp, IconApp, react-hook-form
 * @param options - options to select
 * @param formControl - form control of the input text
 * @param label - input wrapper label
 * @param error - input wrapper error
 * @param containerStyle - input wrapper container style
 * @param clearInput - function to clear the input
 */
export default function InputSelectApp<T extends FieldValues>({
  options,
  formControl,
  label,
  error,
  containerStyle,
  clearInput,
}: InputSelectAppProps<T>) {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const { field } = useController(formControl);

  return (
    <InputWrapperApp
      label={label}
      error={error}
      containerStyle={containerStyle}
      childrenContainerStyle={[styles.containerStyle]}
    >
      <>
        <Pressable onPress={() => setOptionsVisible(true)} style={{ flex: 1 }}>
          <TextApp>{field.value?.label}</TextApp>
        </Pressable>
        <InputClearIconApp clearInput={clearInput} value={field.value} />
        <ModalApp
          modalProps={{
            visible: optionsVisible,
            onDismiss: () => setOptionsVisible(false),
          }}
        >
          <ScrollView>
            {options?.map((option) => (
              <Pressable
                key={option.value}
                onPress={() => {
                  field.onChange(option);
                  setOptionsVisible(false);
                }}
              >
                <TextApp style={styles.itemStyle}>{option.label}</TextApp>
              </Pressable>
            ))}
          </ScrollView>
        </ModalApp>
      </>
    </InputWrapperApp>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    gap: 4,
  },
  itemStyle: {
    paddingVertical: 10,
  },
});
