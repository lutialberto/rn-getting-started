import { StyleSheet } from "react-native";
import { ViewApp } from "@/components/containers/ViewApp";
import { TextApp } from "@/components/texts/TextApp";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <ViewApp style={styles.container}>
      <TextApp style={styles.title}>Tab One</TextApp>
      <Link href="/modal">
        <TextApp>Go to modal</TextApp>
      </Link>
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
