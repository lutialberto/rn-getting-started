import { TouchableOpacity } from "react-native";
import React from "react";
import { TextApp } from "@/components/texts/TextApp";
import { ButtonAppProps } from "./ButtonAppProps";
import { useButtonStyles } from "./useButtonStyles";

/**
 * @description Application button component
 * @snippet appButton
 * @example - Minimal Example
 * ```tsx
 * <ButtonApp onPress={() => { }} />
 * ```
 * - Full Example
 * ```tsx
 * <ButtonApp
 *  variant={'default'}
 *  enabled={true}
 *  onPress={() => { }}
 *  label={'Button'}
 *  icon={<Icon name={'check'} />}
 *  containerStyle={styles.container}
 *  labelStyle={styles.label}
 * />
 * ```
 * @dependencies Text, useButtonStyles
 * @param variant - button variant
 * @param enabled - button enabled
 * @param onPress - function to execute when the button is pressed and enabled
 * @param label - button label
 * @param icon - button icon
 * @param containerStyle - style of the button container
 * @param labelStyle - style of the button label
 */

const ButtonApp = ({
  variant = "default",
  enabled = true,
  containerStyle,
  labelStyle,
  onPress,
  icon = <></>,
  label = "",
}: ButtonAppProps) => {
  const { containerStyle: containerStyleFinal, labelStyle: labelStyleFinal } =
    useButtonStyles({
      containerStyle,
      labelStyle,
      variant,
      enabled,
    });

  return (
    <TouchableOpacity
      onPress={enabled ? onPress : () => {}}
      style={containerStyleFinal}
      disabled={!enabled}
    >
      <>
        {icon}
        {<TextApp style={labelStyleFinal}>{label}</TextApp>}
      </>
    </TouchableOpacity>
  );
};

export default ButtonApp;
