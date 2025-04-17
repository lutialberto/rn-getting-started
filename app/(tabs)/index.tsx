import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { ViewApp } from "@/components/containers/ViewApp";
import { TextApp } from "@/components/texts/TextApp";

export default function TabOneScreen() {
  return (
    <ViewApp style={styles.container}>
      <TextApp style={styles.title}>Tab One</TextApp>
      <ViewApp style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </ViewApp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
