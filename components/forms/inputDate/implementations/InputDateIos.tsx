import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { InputDateImplementationProps } from "./InputDateImplementationProps";

const InputDateIos = (props: InputDateImplementationProps) => {
  return (
    <>{props.visible && <RNDateTimePicker {...props.dateTimePickeckProps} />}</>
  );
};

export default InputDateIos;
