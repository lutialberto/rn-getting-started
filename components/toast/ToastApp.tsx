import { View } from "react-native";
import React from "react";
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from "react-native-toast-message";
import { useTextStyles } from "../texts/useTextStyles";
import { TextApp } from "../texts/TextApp";
import { Fonts } from "../texts/Fonts";

/**
 * @description Put this component in the root of your app as the last element to use the toast component.
 * @snippet hookToast
 * @example
 * ```tsx
 * return (
 *  <>
 *  {...}
 *  <ToastApp />
 *  </>
 * )
 * ```
 * @dependencies TextApp, react-native-toast-message
 */
const ToastApp = () => {
  const { textStyles, colors } = useTextStyles();
  return (
    <Toast
      config={{
        success: (props) => (
          <BaseToast
            {...props}
            style={{ borderLeftColor: colors.primary }}
            text1Style={textStyles.textDefault}
            text2Style={textStyles.textDefault}
          />
        ),
        info: (props) => (
          <InfoToast
            {...props}
            style={{ borderLeftColor: "yellow" }}
            text1Style={textStyles.textDefault}
            text2Style={textStyles.textDefault}
          />
        ),
        error: (props) => (
          <ErrorToast
            {...props}
            style={{ borderLeftColor: colors.error }}
            text1Style={textStyles.textDefault}
            text2Style={textStyles.textDefault}
          />
        ),
        custom: ({ text1, text2 }) => (
          <View
            style={{
              backgroundColor: colors.background,
              padding: 10,
              borderRadius: 10,
              width: "90%",
              shadowColor: colors.text,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 15,
            }}
          >
            <TextApp style={{ fontFamily: Fonts.PrimaryBold }}>{text1}</TextApp>
            <TextApp>{text2}</TextApp>
          </View>
        ),
      }}
    />
  );
};

export default ToastApp;
