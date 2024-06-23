import { ThemeOptions } from "@mui/material/styles";

export const components: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
  },

  MuiSelect: {
    defaultProps: { variant: "standard" },
  },

  MuiFormGroup: {
    styleOverrides: {
      root: {
        justifyContent: "space-around",
      },
    },
  },

  MuiFormLabel: {
    styleOverrides: {
      root: {
        textAlign: "start",
      },
    },
  },

  MuiDialog: {
    styleOverrides: {
      root: {
        backdropFilter: "blur(5px)",
      },
    },
  },

  MuiTypography: {
    styleOverrides: {
      root: {},
    },
  },
};
