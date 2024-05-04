import * as styled from "./styles";
import { globalSliceActions as G } from "../../../store/_global-slice/slice";
import { SwitchProps, Tooltip } from "@mui/material";
import { getGlobalSlice, useAppDispatch } from "../../../store/Store";

const ThemeSwitcher: React.FC<SwitchProps> = (props) => {
  const dispatch = useAppDispatch();
  const { theme } = getGlobalSlice();

  const switchThemeHandler = (t: EventTarget) => {
    dispatch(G.toggleTheme(theme === "dark" ? "light" : "dark"));
  };

  return (
    <Tooltip title="switch theme">
      <styled.ThemeSwitcher
        size="small"
        checked={theme === "dark"}
        onClick={(e) => switchThemeHandler(e.target)}
        {...props}
      />
    </Tooltip>
  );
};

export default ThemeSwitcher;
