import Toast, { ToastType } from "react-native-toast-message";

interface ToastAppProps {
  type?: ToastType | "custom";
  title: string;
  message: string;
}

/**
 * @description Hook to show toasts
 * @example
 * ```tsx
 * const {showToast} = useToastsApp();
 * ```
 * @dependencies useTextStyles, useThemeColor, react-native-root-toast
 */
export const useToastApp = () => {
  const showToast = ({ type = "custom", title, message }: ToastAppProps) => {
    Toast.show({
      type,
      text1: title,
      text2: message,
    });
  };

  return { showToast };
};
