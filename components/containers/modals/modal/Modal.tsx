import {
  Modal as RNModal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React from "react";
import { ModalProps } from "./ModalProps";
import { View } from "@/components/containers/View";
import { Text } from "@/components/texts/Text";
import { FontAwesome } from "@expo/vector-icons";
import useThemeColor from "@/hooks/theme/useThemeColor";

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
  const colors = useThemeColor();

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
            { backgroundColor: colors.lowOpacity },
          ]}
          onPress={modalProps.onDismiss}
        />
        <View
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
