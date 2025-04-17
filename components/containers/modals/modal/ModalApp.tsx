import { Modal, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ModalAppProps } from "./ModalAppProps";
import { ViewApp } from "@/components/containers/ViewApp";
import { TextApp } from "@/components/texts/TextApp";
import { FontAwesome } from "@expo/vector-icons";
import useThemeColor from "@/hooks/theme/useThemeColor";

/**
 * @description Application modal component
 * @example Minimal Example
 * <ModalApp modalProps={{ visible: true, onDismiss: () => { } }} >
 *  <Text>GenericModal</Text>
 * </ModalApp>
 * @example Full Example
 * <ModalApp
 *  modalProps={{ visible: true, onDismiss: () => { } }}
 *  visibleContainerStyle={styles.visibleContainer}
 *  childrenContainerStyle={styles.childrenContainer}
 * >
 *  <Text>GenericModal</Text>
 * </ModalApp>
 * @dependencies Text, useThemeColor
 * @param modalProps - modal props
 * @param children - modal children
 * @param childrenContainerStyle - style of the children container
 * @param visibleContainerStyle - style of the visible container
 */
const ModalApp = ({
  visibleContainerStyle,
  childrenContainerStyle,
  variant = "modal",
  modalProps,
  children,
}: ModalAppProps) => {
  const colors = useThemeColor();

  return (
    <Modal {...modalProps} transparent onRequestClose={modalProps.onDismiss}>
      <ViewApp
        style={[
          styles.mainContainer,
          { justifyContent: variant == "modal" ? "center" : "flex-end" },
        ]}
      >
        <Pressable
          style={[
            styles.transparentArea,
            { backgroundColor: colors.lowOpacity },
          ]}
          onPress={modalProps.onDismiss}
        />
        <ViewApp
          style={[
            {
              ...styles.visibleContainer,
              backgroundColor: colors.background,
            },
            variant === "modal"
              ? styles.visibleContainerModal
              : styles.visibleContainerBottomsheet,
            visibleContainerStyle,
          ]}
        >
          <TouchableOpacity
            style={styles.closeIconContainer}
            onPress={modalProps.onDismiss}
          >
            <FontAwesome name="close" size={14} color={colors.text} />
          </TouchableOpacity>
          <ViewApp style={childrenContainerStyle}>
            {children ? children : <TextApp>GenericModal</TextApp>}
          </ViewApp>
        </ViewApp>
      </ViewApp>
    </Modal>
  );
};

export default ModalApp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  transparentArea: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.8,
  },
  visibleContainerBottomSheetType: {
    width: "100%",
  },
  closeIconContainer: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  visibleContainer: {
    borderRadius: 15,
    padding: 15,
  },
  visibleContainerModal: {
    width: "75%",
  },
  visibleContainerBottomsheet: {
    width: "100%",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
