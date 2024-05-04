import { CSSProperties } from "@mui/material/styles/createMixins";

declare module "@mui/material/styles" {
  interface Mixins {
    boxCenter: CSSProperties;
    glassMorphed: CSSProperties;
  }
}

export const mixins = {
  boxCenter: {
    display: "grid",
    placeItems: "center",
  },

  glassMorphed: {
    backdropFilter: "blur(4px) brightness(1.05)",
  },
};
