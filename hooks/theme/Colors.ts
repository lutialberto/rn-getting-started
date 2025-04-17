const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export type ColorsProps = {
  text: string;
  background: string;
  tint: string;
  tabIconDefault: string;
  tabIconSelected: string;
  primary: string;
  disabledColor: string;
  lowOpacity: string;
  error: string;
};

type Themes = {
  light: ColorsProps;
  dark: ColorsProps;
};

const Colors: Themes = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    primary: "#007bff",
    disabledColor: "#ccc",
    lowOpacity: "#00000033",
    error: "#ff0000",
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    primary: "#007bff",
    disabledColor: "#555",
    lowOpacity: "#ffffff33",
    error: "#ff0000",
  },
};

export default Colors;
