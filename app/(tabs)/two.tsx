import { StyleSheet } from "react-native";
import { ViewThemed } from "@/components/containers/ViewThemed";
import { TextApp } from "@/components/texts/TextApp";

export default function TabTwoScreen() {
  return (
    <ViewThemed style={styles.container}>
      <TextApp style={styles.title}>Tab Two</TextApp>
    </ViewThemed>
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
