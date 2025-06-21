import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React, { useState } from "react";
import PagerView from "react-native-pager-view";
import useThemeColor from "@/hooks/theme/useThemeColor";
import { ColorsProps } from "@/hooks/theme/Colors";
import { ViewThemed } from "../ViewThemed";

interface CarrouselAppProps {
  items: React.ReactNode[];
  carrouselContainerStyle?: StyleProp<ViewStyle>;
  itemContainerStyle?: StyleProp<ViewStyle>;
}

/**
 * @description Application carrousel component
 * @snippet appCarrousel
 * @example
 * ```tsx
 * <CarrouselApp
 *   items={(<Text>Page 1 content</Text>, <Text>Page 2 content</Text>)}
 *   carrouselContainerStyle={{
 *     width: 300,
 *     height: 200,
 *   }}
 * />
 * ```
 * @dependencies useThemeColor, react-native-pager-view
 * @param items - pages of the carrousel
 * @param itemContainerStyle - style of a page container
 * @param carrouselContainerStyle - style of the carrousel container
 */
const CarrouselApp = (props: CarrouselAppProps) => {
  const colors = useThemeColor();
  const styles = getStyles(colors);
  const [active, setActive] = useState(0);

  return (
    <View style={props.carrouselContainerStyle}>
      <PagerView
        style={styles.viewPager}
        initialPage={active}
        onPageScroll={(e) => setActive(e.nativeEvent.position)}
      >
        {props.items.map((item, index) => (
          <ViewThemed
            style={[styles.itemContainer, props.itemContainerStyle]}
            key={index}
          >
            {item}
          </ViewThemed>
        ))}
      </PagerView>
      <View style={styles.indexContainer}>
        {props.items.map((_item, index) => (
          <View
            style={[
              styles.index,
              index === active && {
                backgroundColor: colors.primary,
              },
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default CarrouselApp;

const indexWidth = 10;
const getStyles = (colors: ColorsProps) =>
  StyleSheet.create({
    viewPager: {
      flex: 1,
    },
    itemContainer: {
      flex: 1,
      margin: 10,
      padding: 10,
      borderRadius: 10,
      // Sombra para iOS
      shadowColor: colors.text,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      // Sombra para Android
      elevation: 5,
    },
    indexContainer: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 5,
    },
    index: {
      borderRadius: indexWidth,
      width: indexWidth,
      aspectRatio: 1,
      backgroundColor: colors.disabledColor,
    },
  });
