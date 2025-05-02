import { Pressable } from "react-native";
import React from "react";
import IconApp from "@/components/texts/icon/IconApp";
import { useTextStyles } from "@/components/texts/useTextStyles";

/**
 * @description clear input value icon component
 * @dependencies useTextStyles, IconApp
 * @param clearInput - function to clear the input
 * @param value - input value
 */
const InputClearIconApp = (props: { value: any; clearInput?: () => void }) => {
  const { textStyles, colors } = useTextStyles();
  return (
    <>
      {!!props.value && props.clearInput && (
        <Pressable
          onPress={props.clearInput}
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 1,
            paddingHorizontal: 3,
            backgroundColor: colors.disabledColor,
            borderRadius: 50,
          }}
        >
          <IconApp color={colors.text} name="close" size={14} />
        </Pressable>
      )}
    </>
  );
};

export default InputClearIconApp;
