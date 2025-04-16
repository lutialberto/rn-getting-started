import {
  Modal as RNModal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React from "react";
import { ModalProps } from "./ModalProps";
import { Text, useThemeColor, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

/**
 * @description Application modal component
 * @example Minimal Example
 * <Modal modalProps={{ visible: true, onDismiss: () => { } }} >
 *  <Text>GenericModal</Text>
 * </Modal>
 * @example Full Example
 * <Modal
 *  modalProps={{ visible: true, onDismiss: () => { } }}
 *  visibleContainerStyle={styles.visibleContainer}
 *  childrenContainerStyle={styles.childrenContainer}
 * >
 *  <Text>GenericModal</Text>
 * </Modal>
 * @dependencies Text, useThemeColor
 * @param modalProps - modal props
 * @param children - modal children
 * @param childrenContainerStyle - style of the children container
 * @param visibleContainerStyle - style of the visible container
 */
const Modal = ({
  visibleContainerStyle,
  childrenContainerStyle,
  variant = "modal",
  modalProps,
  children,
}: ModalProps) => {
  const colorScheme = useColorScheme();
  const colorTheme = Colors[colorScheme ?? "light"];

  return (
    <RNModal {...modalProps} transparent onRequestClose={modalProps.onDismiss}>
      <View
        style={[
          styles.mainContainer,
          { justifyContent: variant == "modal" ? "center" : "flex-end" },
        ]}
      >
        <Pressable
          style={[
            styles.transparentArea,
            { backgroundColor: colorTheme.lowOpacity },
          ]}
          onPress={modalProps.onDismiss}
        />
        <View
          style={[
            {
              ...styles.visibleContainer,
              backgroundColor: colorTheme.background,
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
            <FontAwesome name="close" size={14} color={colorTheme.text} />
          </TouchableOpacity>
          <View style={childrenContainerStyle}>
            {children ? children : <Text>GenericModal</Text>}
          </View>
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;

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
