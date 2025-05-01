import {
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ModalAppProps } from "./ModalAppProps";
import { ViewThemed } from "@/components/containers/ViewThemed";
import { TextApp } from "@/components/texts/TextApp";
import useThemeColor from "@/hooks/theme/useThemeColor";
import IconApp from "@/components/texts/icon/IconApp";

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
      <View
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
        <ViewThemed
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
            <IconApp name="close" size={22} color={colors.text} />
          </TouchableOpacity>
          <View style={childrenContainerStyle}>
            {children ? children : <TextApp>GenericModal</TextApp>}
          </View>
        </ViewThemed>
      </View>
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
    top: 12,
    right: 12,
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
