import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { IconAppProps } from "./IconAppProps";

export default function TabBarIcon(props: IconAppProps) {
  return <FontAwesome {...props} />;
}
