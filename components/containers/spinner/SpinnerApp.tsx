import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SpinnerAppProps } from "./SpinnerAppProps";
import useThemeColor from "@/hooks/theme/useThemeColor";

/**
 * @description Application spinner component
 * @snippet appSpinner
 * @example - Minimal Example
 * ```tsx
 * <SpinnerApp
 *  visible={true}
 *  style={{
 *   height: 100,//usar este
 *   flex: 1,//o este
 *  }}
 * />
 * ```
 * - Full Example
 * ```tsx
 * <SpinnerApp
 *  visible={true}
 *  style={{
 *   height: 100,//usar este
 *   flex: 1,//o este
 *  }}
 *  variant={'default'}
 * >
 *   <Text>Content</Text>
 * </SpinnerApp>
 * ```
 * @dependencies useThemeColor
 * @param visible - spinner visible
 * @param variant - spinner variant
 */
const SpinnerApp = ({
  visible,
  style,
  children,
  variant = "default",
}: SpinnerAppProps) => {
  const colors = useThemeColor();

  return (
    <View style={[style]}>
      {(variant === "overlap" || !visible) && children}
      <ActivityIndicator
        style={styles.overlay}
        animating={visible}
        color={colors.primary}
        size="large"
      />
    </View>
  );
};

export default SpinnerApp;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
});
