import { Platform, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FieldValues, useController } from "react-hook-form";
import { DatePickerConfigProps, InputDateAppProps } from "./InputDateAppProps";
import InputDateAndroid from "./implementations/InputDateAndroid";
import InputDateIos from "./implementations/InputDateIos";
import InputWrapperApp from "../inputWrapper/InputWrapperApp";
import useThemeColor from "@/hooks/theme/useThemeColor";
import { TextApp } from "@/components/texts/TextApp";
import {
  AndroidNativeProps,
  DateTimePickerEvent,
  IOSNativeProps,
} from "@react-native-community/datetimepicker";
import InputClearIconApp from "../inputClear/InputClearIconApp";

/**
 * @description Application input date component
 * @example
 * <InputDateApp
 *  formControl={{ name: 'date', control }}
 *  label='Date'
 *  error={errors.date?.message}
 *  containerStyle={{ minWidth: 250 }}
 *  clearInput={() => setValue("date", null)}
 * />
 * @dependencies InputAppProps, InputClearIconApp, InputWrapperApp, TextApp, IconApp, InputDateIos, InputDateAdroid, react-hook-form, @react-native-community/datetimepicker
 * @param formControl - form control of the input date
 * @param dateInput - date input props
 */
function InputDateApp<T extends FieldValues>({
  formControl,
  label,
  error,
  containerStyle,
  dateInput,
  clearInput,
}: InputDateAppProps<T>) {
  const { field } = useController(formControl);
  const [visible, setVisible] = useState(false);
  const colors = useThemeColor();

  const handleChange = (event: DateTimePickerEvent, date?: Date) => {
    const updateValue = event.type !== "dismissed";
    if (updateValue) {
      field.onChange(date);
    }
    setVisible(false);
  };

  const dateTimeConfig: DatePickerConfigProps = {
    ...dateInput?.datePickerConfig,
    value: field.value ?? new Date(),
    onChange: handleChange,
    display: "spinner",
    is24Hour: true,
    design: "default",
    positiveButton: {
      textColor: colors.text,
    },
    negativeButton: {
      textColor: colors.text,
    },
  };

  const formatDate = (date?: Date) => {
    if (date === undefined) return "";
    if (dateInput?.formatDate) return dateInput?.formatDate(date);
    return date?.toLocaleDateString();
  };

  const renderDatePicker = () => {
    switch (Platform.OS) {
      case "android":
        return (
          <InputDateAndroid
            visible={visible}
            value={field.value}
            dateTimePickeckProps={dateTimeConfig as AndroidNativeProps}
          />
        );
      case "ios":
        return (
          <InputDateIos
            visible={visible}
            value={field.value}
            dateTimePickeckProps={dateTimeConfig as IOSNativeProps}
          />
        );
      default:
        return (
          <TextApp>Unsupported platform for date picker: {Platform.OS}</TextApp>
        );
    }
  };

  return (
    <InputWrapperApp
      label={label}
      error={error}
      containerStyle={containerStyle}
      childrenContainerStyle={[styles.containerStyle]}
    >
      <>
        <Pressable
          style={styles.textContainer}
          onPress={() => setVisible(true)}
        >
          <TextApp>{formatDate(field.value)}</TextApp>
        </Pressable>
        <InputClearIconApp clearInput={clearInput} value={field.value} />
        {renderDatePicker()}
      </>
    </InputWrapperApp>
  );
}

export default InputDateApp;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    gap: 4,
  },
  textContainer: {
    flex: 1,
  },
});
