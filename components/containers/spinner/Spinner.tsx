import React from "react";
import { ActivityIndicator, StyleSheet, useColorScheme } from "react-native";
import { useThemeColor, View } from "@/components/Themed";
import { SpinnerProps } from "./SpinnerProps";
import Colors from "@/constants/Colors";

/**
 * @description Application spinner component
 * @example Minimal Example
 * <Spinner
 *  visible={true}
 *  style={{
 *   height: 100,//usar este
 *   flex: 1,//o este
 *  }}
 * />
 * @example Full Example
 * <Spinner
 *  visible={true}
 *  style={{
 *   height: 100,//usar este
 *   flex: 1,//o este
 *  }}
 *  variant={'default'}
 * >
 *   <Text>Content</Text>
 * </Spinner>
 * @dependencies useThemeColor
 * @param visible - spinner visible
 * @param variant - spinner variant
 */
const Spinner = ({
  visible,
  style,
  children,
  variant = "default",
}: SpinnerProps) => {
  const colorScheme = useColorScheme();
  const colorTheme = Colors[colorScheme ?? "light"];

  return (
    <View style={[style]}>
      {(variant === "overlap" || !visible) && children}
      <ActivityIndicator
        style={styles.overlay}
        animating={visible}
        color={colorTheme.primary}
        size="large"
      />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
});
