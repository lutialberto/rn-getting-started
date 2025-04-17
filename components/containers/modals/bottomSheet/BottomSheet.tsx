import { StyleSheet, useColorScheme } from "react-native";
import React from "react";
import Modal from "../modal/Modal";
import { Text } from "@/components/texts/Text";
import { ModalProps } from "../modal/ModalProps";
import { useThemeColor } from "@/components/Themed";

/**
 * @description Application modal component
 * @example Minimal Example
 * <BottomSheet modalProps={{ visible: true, onDismiss: () => { } }} >
 *  <Text>GenericModal</Text>
 * </BottomSheet>
 * @example Full Example
 * <BottomSheet
 *  modalProps={{ visible: true, onDismiss: () => { } }}
 *  visibleContainerStyle={styles.visibleContainer}
 *  childrenContainerStyle={styles.childrenContainer}
 * >
 *  <Text>GenericModal</Text>
 * </BottomSheet>
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
}: ModalProps) => {
  const colors = useThemeColor();

  return (
    <Modal
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
      {children ?? <Text> GenericModal</Text>}
    </Modal>
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
