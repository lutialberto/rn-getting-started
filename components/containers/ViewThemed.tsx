import useThemeColor from "@/hooks/theme/useThemeColor";
import { View } from "react-native";

export function ViewThemed(props: View["props"]) {
  const { style, ...otherProps } = props;
  const colors = useThemeColor();

  return (
    <View
      style={[{ backgroundColor: colors.background }, style]}
      {...otherProps}
    />
  );
}
