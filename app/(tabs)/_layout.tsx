import BottomTabsApp from "@/components/containers/tabs/bottomTabs/BottomTabsApp";

export default function TabLayout() {
  return (
    <BottomTabsApp
      tabItems={[
        { name: "index", title: "Tab One", icon: "code" },
        { name: "two", title: "Tab Two", icon: "code" },
      ]}
    />
  );
}
