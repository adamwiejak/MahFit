import gsap from "gsap";
import { getGlobalSlice } from "../../store/Store";
import MUIThemeProvider from "@mui/material/styles/ThemeProvider";
import { createTheme } from "@mui/material/styles";
import { breakpoints } from "./_breakpoints";
import { components } from "./_components";
import { customPalette } from "./_palettes";
import { spacing } from "./_spacing";
import { bordering } from "./_bordering";
import { transitions } from "./_transitions";
import { useEffect } from "react";
import { mixins } from "./_mixins";

const ThemeProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const { theme } = getGlobalSlice();

  useEffect(() => {
    const backgroundColor = theme === "dark" ? "#212121" : "#ffffff";
    gsap.to("html", { backgroundColor });
  }, [theme]);

  const themeValue = createTheme({
    mixins: mixins,
    spacing: spacing,
    bordering: bordering,
    components: components,
    breakpoints: breakpoints,
    transitions: transitions,
    palette: customPalette[theme || "light"],
  });

  return (
    <MUIThemeProvider theme={themeValue}>{props.children}</MUIThemeProvider>
  );
};

export default ThemeProvider;
