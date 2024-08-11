import { ThemeOptions } from "@mui/material/styles";

export const components: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
      fullWidth: true,
    },
  },

  MuiSelect: {
    // defaultProps: { variant: "standard" },
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
        backdropFilter: "blur(8px) brightness(0.75)",
      },
    },
  },

  MuiTypography: {
    styleOverrides: {
      root: {},
    },
  },
};
