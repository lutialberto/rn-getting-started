import { TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "@/components/Themed";
import { ButtonProps } from "./ButtonProps";
import { useButtonStyles } from "./useButtonStyles";

/**
 * @description Application button component
 * @snippet appButton
 * @example Minimal Example
 * <Button onPress={() => { }} />
 * @example Full Example
 * <Button
 *  variant={'default'}
 *  enabled={true}
 *  onPress={() => { }}
 *  label={'Button'}
 *  icon={<Icon name={'check'} />}
 *  containerStyle={styles.container}
 *  labelStyle={styles.label}
 * />
 * @dependencies Text, useButtonStyles
 * @param variant - button variant
 * @param enabled - button enabled
 * @param onPress - function to execute when the button is pressed and enabled
 * @param label - button label
 * @param icon - button icon
 * @param containerStyle - style of the button container
 * @param labelStyle - style of the button label
 */

const Button = ({
  variant = "default",
  enabled = true,
  containerStyle,
  labelStyle,
  onPress,
  icon = <></>,
  label = "",
}: ButtonProps) => {
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
        {<Text style={labelStyleFinal}>{label}</Text>}
      </>
    </TouchableOpacity>
  );
};

export default Button;
