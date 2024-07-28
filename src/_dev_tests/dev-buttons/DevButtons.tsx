import * as styled from "./dev-btn.styled";
import { getStore, useAppDispatch } from "../../store";
import { globalSliceActions as G } from "../../store/_global-slice";
import IconButton from "../../components/UI/IconButton";
import useBoolean from "../../hooks/useBoolean";
import useAsyncTask from "../../hooks/useAsyncTask";
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/Firebase/auth";
import UserAPI from "../../API/User";
import { Card } from "@mui/material";

let t: NodeJS.Timeout;
const cl = (data: any) => () => console.log(data);

const DevButtons: React.FC = () => {
  const store = getStore();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [hovered, toggleHoverd] = useBoolean(false);
  const { asyncTaskHandler } = useAsyncTask();

  const goToPage = (path: string) => () => navigate(path);
  const toggleTheme = () => dispatch(G.toggleTheme());
  const onLogout = () => asyncTaskHandler(UserAPI.logoutUser());
  const toggleInProgress = () => dispatch(G.toggleInProgress());

  return (
    <styled.Container
      role="Dev Btns"
      hovered={hovered}
      onMouseEnter={toggleHoverd}
      onMouseLeave={toggleHoverd}
    >
      <IconButton icon="data" tip="Store" onClick={cl(store)} />
      <IconButton icon="theme" tip="Theem" onClick={toggleTheme} />
      <IconButton icon="wait" tip="Global" onClick={toggleInProgress} />
      <IconButton icon="user" tip="auth" onClick={cl(Auth.getCurrentUser())} />
      <IconButton icon="logout" tip="Hard Logout" onClick={onLogout} />

      <Card elevation={20}>
        <IconButton icon="userSettings" tip="dev" onClick={goToPage("/_dev")} />
        <IconButton icon="home" tip="dev" onClick={goToPage("/home")} />
      </Card>
    </styled.Container>
  );
};

export default DevButtons;
