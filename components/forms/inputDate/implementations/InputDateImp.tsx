import React, { useEffect } from "react";
import { InputDateImpProps } from "./InputDateImpProps";
import { Platform } from "react-native";
import { useToastApp } from "@/components/toast/useToast";

const InputDateImpDefault = (_props: InputDateImpProps) => {
  const { showToast } = useToastApp();
  useEffect(() => {
    showToast({
      title: "Date Picker",
      message: `Not supported for ${Platform.OS}`,
      type: "error",
    });
  }, []);

  return <></>;
};

export default InputDateImpDefault;
