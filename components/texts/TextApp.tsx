import { Text } from "react-native";
import { useTextStyles } from "./useTextStyles";

export function TextApp(props: Text["props"]) {
  const { style, ...otherProps } = props;
  const { textStyles } = useTextStyles();

  return <Text style={[textStyles.textDefault, style]} {...otherProps} />;
}
