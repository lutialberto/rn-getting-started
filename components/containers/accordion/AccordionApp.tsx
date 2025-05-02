import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import useThemeColor from "@/hooks/theme/useThemeColor";
import { ColorsProps } from "@/hooks/theme/Colors";
import { TextApp } from "@/components/texts/TextApp";
import IconApp from "@/components/texts/icon/IconApp";

interface AccordionAppProps {
  containerStyle?: StyleProp<ViewStyle>;
  items: {
    title: string;
    titleContainerStyle?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    startCollapsed?: boolean;
    body: React.ReactNode;
  }[];
}

/**
 * @description Application accordion component
 * @example
 * <AccordionApp
 *   containerStyle={{ width: "90%" }}
 *   items={[1, 2, 3].map(item => ({
 *     title: "Accordion Item " + item,
 *     body: <TextApp>Accordion Item Body{item}</TextApp>,
 *   }))}
 * />
 * @dependencies useThemeColor, IconApp, TextApp
 * @param items - accordion items title and body
 * @param containerStyle - style of the accordion container
 */
const AccordionApp = (props: AccordionAppProps) => {
  const [collapsed, setCollapsed] = React.useState<boolean[]>(
    props.items.map((item) => item.startCollapsed ?? true),
  );
  const colors = useThemeColor();
  const styles = getStyles(colors);

  const toggleItem = (indexToToggle: number) => () =>
    setCollapsed((prevState) =>
      prevState.map((item, index) => (index === indexToToggle ? !item : item)),
    );

  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.items.map((item, index) => (
        <View key={item.title}>
          <Pressable
            onPress={toggleItem(index)}
            style={[styles.itemContainer, item.titleContainerStyle]}
          >
            <TextApp style={item.titleStyle}>{item.title}</TextApp>
            <IconApp
              color={colors.text}
              name={collapsed[index] ? "chevron-right" : "chevron-down"}
              size={12}
            />
          </Pressable>
          {!collapsed[index] && item.body}
        </View>
      ))}
    </View>
  );
};

export default AccordionApp;

const getStyles = (colors: ColorsProps) =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: colors.background,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    itemContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: colors.background,
    },
  });
