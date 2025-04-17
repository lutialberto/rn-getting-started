import { Text as DefaultText } from "react-native";
import { useTextStyles } from "./useTextStyles";

export function Text(props: DefaultText["props"]) {
  const { style, ...otherProps } = props;
  const { textStyles } = useTextStyles();

  return (
    <DefaultText style={[textStyles.textDefault, style]} {...otherProps} />
  );
}
