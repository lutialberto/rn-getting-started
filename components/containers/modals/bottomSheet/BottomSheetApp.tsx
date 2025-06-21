import { StyleSheet } from "react-native";
import React from "react";
import ModalApp from "../modal/ModalApp";
import { TextApp } from "@/components/texts/TextApp";
import { ModalAppProps } from "../modal/ModalAppProps";
import useThemeColor from "@/hooks/theme/useThemeColor";

/**
 * @description Application modal component
 * @snippet appBottomSheet
 * @example - Minimal Example
 * ```tsx
 * <BottomSheet modalProps={{ visible: true, onDismiss: () => { } }} >
 *  <Text>GenericModal</Text>
 * </BottomSheet>
 * ```
 * - Full Example
 * ```tsx
 * <BottomSheet
 *  modalProps={{ visible: true, onDismiss: () => { } }}
 *  visibleContainerStyle={styles.visibleContainer}
 *  childrenContainerStyle={styles.childrenContainer}
 * >
 *  <Text>GenericModal</Text>
 * </BottomSheet>
 * ```
 * @dependencies Modal, useThemeColor
 * @param modalProps - modal props
 * @param children - modal children
 * @param childrenContainerStyle - style of the children container
 * @param visibleContainerStyle - style of the visible container
 */
const BottomSheetApp = ({
  modalProps,
  children,
  childrenContainerStyle,
  visibleContainerStyle,
}: ModalAppProps) => {
  const colors = useThemeColor();

  return (
    <ModalApp
      modalProps={modalProps}
      visibleContainerStyle={[
        {
          ...styles.visibleContainer,
          backgroundColor: colors.background,
        },
        visibleContainerStyle,
      ]}
      childrenContainerStyle={childrenContainerStyle}
      variant="bottomSheet"
    >
      {children ?? <TextApp> GenericModal</TextApp>}
    </ModalApp>
  );
};

export default BottomSheetApp;

const styles = StyleSheet.create({
  visibleContainer: {
    width: "100%",
    padding: 10,
    borderRadius: 15,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
});
