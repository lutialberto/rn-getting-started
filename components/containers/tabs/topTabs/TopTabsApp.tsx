import React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import useThemeColor from "@/hooks/theme/useThemeColor";
import { useTextStyles } from "@/components/texts/useTextStyles";

const { Navigator } = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

interface TopTabsAppProps {
  tabItems: {
    name: string;
    title: string;
  }[];
}

/**
 * @description TopTabsApp component that renders a Material Top Tabs navigator with the provided tab items.
 * @param tabItems - A list of items, each containing a name and title.
 * @example - update your _layout.tsx file to include the new top tabs:
 * ```tsx
 * <Stack.Screen name="(topTabs)" options={{ headerShown: false }} />
 * ```
 * @example - include the TopTabsApp in your layout:
 * ```tsx
 * <TopTabsApp
 *   tabItems={[
 *     { name: "default", title: "Solapa default" },
 *     { name: "tab1", title: "Solapa 2" },
 *     { name: "tab2", title: "Solapa 3" },
 *   ]}
 * />
 * ```
 */
const TopTabsApp = (props: TopTabsAppProps) => {
  const colors = useThemeColor();
  const { textStyles } = useTextStyles();

  return (
    <MaterialTopTabs
      screenOptions={{
        tabBarLabelStyle: [textStyles.textDefault, { fontSize: 12 }],
        tabBarIndicatorStyle: { backgroundColor: colors.primary, height: 3 },
      }}
    >
      {props.tabItems.map((item) => (
        <MaterialTopTabs.Screen
          key={item.name}
          name={item.name}
          options={{ title: item.title }}
        />
      ))}
    </MaterialTopTabs>
  );
};

export default TopTabsApp;
