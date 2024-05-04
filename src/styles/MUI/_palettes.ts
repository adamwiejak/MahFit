import type { CommonColors, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CommonColors {
    facebook: string;
    google: string;
    unactive: string;
  }
}

const common: Partial<CommonColors> = {
  facebook: "#1197F5",
  google: "#DB4437",
  unactive: "#808080",
};

const paletteLight: PaletteOptions = {
  mode: "light",
  common: common,
  // primary: {
  //   light: "#8559a1",
  //   main: "#67308a",
  //   dark: "#482160",
  //   contrastText: "#ffffff",
  // },
  // secondary: {
  //   light: "#8559a1",
  //   main: "#67308a",
  //   dark: "#482160",
  //   contrastText: "#ffffff",
  // },
  // background: { default: "#ffffff", paper: "#efefef" },
};

const paletteDark: PaletteOptions = {
  mode: "dark",
  common: common,
  // primary: {
  //   main: "#ac9271",
  // },
  // secondary: {
  //   main: "#c88933",
  // },
};

export const customPalette = {
  light: paletteLight,
  dark: paletteDark,
};
