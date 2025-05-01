import React, { useEffect } from "react";
import {
  DateTimePickerAndroid,
  AndroidNativeProps,
} from "@react-native-community/datetimepicker";
import { InputDateImplementationProps } from "./InputDateImplementationProps";

const InputDateAndroid = (props: InputDateImplementationProps) => {
  useEffect(() => {
    if (props.visible) {
      DateTimePickerAndroid.open(
        props.dateTimePickeckProps as AndroidNativeProps,
      );
    }
  }, [props.visible]);

  return <></>;
};

export default InputDateAndroid;
