import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import useThemeColor from "@/hooks/theme/useThemeColor";
import { IconAppName } from "@/components/texts/icon/IconAppProps";
import IconApp from "@/components/texts/icon/IconApp";

interface BottomTabsAppProps {
  tabItems: {
    name: string;
    title: string;
    icon: IconAppName;
  }[];
}

/**
 * @description BottomTabsApp component that renders a Bottom Tabs navigator with the provided tab items.
 * @param tabItems - A list of items, each containing a name, title, and icon.
 * @example - update your _layout.tsx file to include the new bottom tabs:
 * ```tsx
 * <BottomTabsApp
 *   tabItems={[
 *     { name: "index", title: "Tab One", icon: "code" },
 *     { name: "two", title: "Tab Two", icon: "code" },
 *   ]}
 * />
 * ```
 * @dependency useThemeColor
 */
const BottomTabsApp = (props: BottomTabsAppProps) => {
  const colors = useThemeColor();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
      }}
    >
      {props.tabItems.map((item) => (
        <Tabs.Screen
          key={item.name}
          name={item.name}
          options={{
            title: item.title,
            tabBarIcon: ({ color }) => (
              <IconApp
                name={item.icon}
                size={28}
                style={styles.icon}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default BottomTabsApp;

const styles = StyleSheet.create({
  icon: {
    marginBottom: -3,
  },
});
