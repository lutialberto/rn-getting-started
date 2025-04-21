import { FontAwesome } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

export interface IconAppProps {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}
