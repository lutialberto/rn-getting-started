import { FontAwesome } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

export default interface IconAppProps {
  name: IconAppName;
  color: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}

export type IconAppName = React.ComponentProps<typeof FontAwesome>["name"];
