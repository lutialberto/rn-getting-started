import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet } from "react-native";
import { InputSelectAppProps } from "./InputSelectAppProps";
import { FieldValues, useController } from "react-hook-form";
import { useTextStyles } from "@/components/texts/useTextStyles";
import useThemeColor from "@/hooks/theme/useThemeColor";
import InputWrapperApp from "../inputWrapper/InputWrapperApp";
import { TextApp } from "@/components/texts/TextApp";
import ModalApp from "@/components/containers/modals/modal/ModalApp";
import IconApp from "@/components/texts/icon/IconApp";

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
  const { textStyles } = useTextStyles();
  const colors = useThemeColor();

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
        {!!field.value && clearInput && (
          <Pressable onPress={clearInput}>
            <IconApp
              color={colors.text}
              name="close"
              size={textStyles.textDefault.fontSize}
            />
          </Pressable>
        )}
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
