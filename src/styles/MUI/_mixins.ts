import { CSSProperties } from "@mui/material/styles/createMixins";

declare module "@mui/material/styles" {
  interface Mixins {
    boxCenter: CSSProperties;
    glassMorphed: CSSProperties;
    hoverUp: CSSProperties;
  }
}

export const mixins = {
  boxCenter: {
    display: "grid",
    placeItems: "center",
  },

  glassMorphed: {
    backgroundColor: "rgba(200,200,200,0.3)",
    border: "solid rgba(255,255,255,0.5) 1px",
    backdropFilter: "blur(8px) brightness(1.05) saturate(30%)",
    boxShadow: "0 8px 32px 0 rgba( 0, 0, 0, 0.37 )",
  },

  hoverUp: {
    transform: "scale(0.98)",
    transition: "transform 0.15s ease-in-out",

    "&:hover": {
      cursor: "pointer",
      transform: "scale(1)",
    },

    "&:active": {
      transform: "scale(0.98)",
    },
  },
};
