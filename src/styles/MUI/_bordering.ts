declare module "@mui/material/styles" {
  interface Theme {
    bordering: (idx: number) => string;
  }

  interface ThemeOptions {
    bordering: (idx: number) => string;
  }
}

const borderingArray = ["solid 1px", "solid 2px", "dotted 10px red"];

export const bordering = (idx: number) => borderingArray[idx];
