import { StyleSheet } from "react-native";
import { TextApp } from "@/components/texts/TextApp";
import { ViewThemed } from "@/components/containers/ViewThemed";

export default function TabOneScreen() {
  return (
    <ViewThemed style={styles.container}>
      <TextApp style={styles.title}>Tab One</TextApp>
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
