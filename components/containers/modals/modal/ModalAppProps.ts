import {
  ModalProps as OGModalProps,
  StyleProp,
  ViewStyle,
} from "react-native/types";

export interface ModalAppProps {
  modalProps: OGModalProps;
  children?: React.ReactNode | JSX.Element[];
  visibleContainerStyle?: StyleProp<ViewStyle>;
  childrenContainerStyle?: StyleProp<ViewStyle>;
  variant?: "modal" | "bottomSheet";
}
