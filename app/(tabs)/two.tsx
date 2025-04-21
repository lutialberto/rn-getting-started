import { StyleSheet } from "react-native";
import { ViewApp } from "@/components/containers/ViewApp";
import { TextApp } from "@/components/texts/TextApp";

export default function TabTwoScreen() {
  return (
    <ViewApp style={styles.container}>
      <TextApp style={styles.title}>Tab Two</TextApp>
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
});
