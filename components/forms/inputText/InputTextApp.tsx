import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FieldValues, useController } from "react-hook-form";
import { InputTextAppProps } from "./InputTextAppProps";
import { useTextStyles } from "@/components/texts/useTextStyles";
import InputWrapperApp from "../inputWrapper/InputWrapperApp";
import useThemeColor from "@/hooks/theme/useThemeColor";
import IconApp from "@/components/texts/icon/IconApp";

/**
 * @description Application input text component
 * @example
 * <InputTextApp
 *  formControl={{ control: control, name: 'genericName' }}
 *  textInput={{ placeholder: 'GenericPlaceholder' }}
 *  label='GenericLabel'
 *  error='GenericError'
 * />
 * @dependencies InputWrapperApp, useTextStyles, react-hook-form, IconApp
 * @param formControl - form control of the input text
 * @param textInput - text input props
 * @param label - input wrapper label
 * @param error - input wrapper error
 */
export default function InputTextApp<T extends FieldValues>(
  props: InputTextAppProps<T>,
) {
  const [isFocused, setIsFocused] = useState(false);
  const { field } = useController(props.formControl);
  const { textStyles } = useTextStyles();
  const colors = useThemeColor();

  return (
    <InputWrapperApp
      label={props.label}
      error={props.error}
      containerStyle={props.containerStyle}
      childrenContainerStyle={[
        styles.containerStyle,
        isFocused && { borderColor: colors.primary },
      ]}
    >
      <TextInput
        {...props.textInput}
        style={[textStyles.textDefault, styles.input, props.textInput?.style]}
        value={field.value}
        cursorColor={colors.text}
        onBlur={() => {
          setIsFocused(false);
          field.onBlur();
        }}
        onFocus={() => setIsFocused(true)}
        onChangeText={(value) => field.onChange(value)}
        ref={field.ref}
      />
      {!!field.value && (
        <Pressable onPress={props.clearInput}>
          <IconApp
            color={colors.text}
            name="close"
            size={textStyles.textDefault.fontSize}
          />
        </Pressable>
      )}
    </InputWrapperApp>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    height: 40,
    borderRadius: 4,
    flex: 1,
    outlineColor: "transparent",
  },
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    gap: 4,
  },
});
