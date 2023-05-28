import { Palette } from "@mui/material";

export const defaultPalette: Partial<Palette> = {
  mode: "light",
  text: {
    primary: "#000000",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "",
  },
  primary: {
    dark: "#212DD4",
    light: "#667EFC",
    contrastText: "#FFFFFF ",
    main: "#434EE4",
  },
  error: {
    main: "#C64848",
    dark: "#C64848",
    light: "#C64848",
    contrastText: "",
  },
  secondary: {
    main: "#24272A",
    dark: "#000000",
    light: "#F5F5F5",
    contrastText: "",
  },
  action: {
    hover: "#E5E5E5",
    active: "#000",
    activatedOpacity: 0,
    focus: "",
    disabled: "rgba(0, 0, 0, 0.3)",
    disabledBackground: "",
    disabledOpacity: 0,
    focusOpacity: 0.5,
    hoverOpacity: 0,
    selected: "#fff",
    selectedOpacity: 0,
  },
};
