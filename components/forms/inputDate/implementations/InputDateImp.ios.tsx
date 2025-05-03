import React from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { InputDateImpProps } from "./InputDateImpProps";

const InputDateImpIos = (props: InputDateImpProps) => {
  return (
    <>{props.visible && <RNDateTimePicker {...props.dateTimePickeckProps} />}</>
  );
};

export default InputDateImpIos;
