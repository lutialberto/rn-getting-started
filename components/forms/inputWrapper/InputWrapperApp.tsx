import { StyleSheet, View } from "react-native";
import React from "react";
import { InputWrapperAppProps } from "./InputWrapperAppProps";
import { ColorsProps } from "@/hooks/theme/Colors";
import useThemeColor from "@/hooks/theme/useThemeColor";
import { TextApp } from "@/components/texts/TextApp";
import { useTextStyles } from "@/components/texts/useTextStyles";

/**
 * @description Application input wrapper component
 * @example
 * ```tsx
 * <InputWrapperApp
 *  label='GenericInputWrapper'
 *  error='GenericError'
 * >
 *  <Text>GenericInputWrapper</Text>
 * </InputWrapperApp>
 * ```
 * @dependencies TextApp, useThemeColors, useTextStyles
 * @param children - input wrapper children
 * @param error - input wrapper error
 * @param label - input wrapper label
 */
const InputWrapperApp = ({
  children,
  containerStyle,
  childrenContainerStyle,
  label = "",
  error = "",
}: InputWrapperAppProps) => {
  const colors = useThemeColor();
  const styles = getStyles(colors);
  const { textStyles } = useTextStyles();

  return (
    <View style={containerStyle}>
      {label !== "" && <TextApp style={textStyles.inputLabel}>{label}</TextApp>}
      <View
        style={[
          styles.children,
          childrenContainerStyle,
          !!error && { borderBottomColor: colors.error },
        ]}
      >
        {children}
      </View>
      {error !== "" && <TextApp style={textStyles.inputError}>{error}</TextApp>}
    </View>
  );
};

export default InputWrapperApp;

const getStyles = (colors: ColorsProps) =>
  StyleSheet.create({
    children: {
      borderBottomColor: colors.text,
      borderBottomWidth: 1,
    },
  });
