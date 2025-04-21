import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import useThemeColor from "@/hooks/theme/useThemeColor";
import IconApp from "@/components/texts/icon/IconApp";

export default function TabLayout() {
  const colors = useThemeColor();
  const iconSize = 28;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
      }}
    >
      <Tabs.Screen
        name="one"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => (
            <IconApp
              name="code"
              size={iconSize}
              style={styles.icon}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => (
            <IconApp
              name="code"
              size={iconSize}
              style={styles.icon}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});
