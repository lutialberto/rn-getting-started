import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { ViewThemed } from "@/components/containers/ViewThemed";
import { TextApp } from "@/components/texts/TextApp";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ViewThemed style={styles.container}>
        <TextApp style={styles.title}>This screen doesn't exist.</TextApp>

        <Link href="/" style={styles.link}>
          <TextApp style={styles.linkText}>Go to home screen!</TextApp>
        </Link>
      </ViewThemed>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
