import useThemeColor from "@/hooks/theme/useThemeColor";
import { View as DefaultView } from "react-native";

export function View(props: DefaultView["props"]) {
  const { style, ...otherProps } = props;
  const colors = useThemeColor();

  return (
    <DefaultView
      style={[{ backgroundColor: colors.background }, style]}
      {...otherProps}
    />
  );
}
