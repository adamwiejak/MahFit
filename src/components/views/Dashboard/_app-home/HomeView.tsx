import { Typography } from "@mui/material";
import { getUserSlice } from "../../../../store/Store";
import * as styled from "./home-view.styled";

const HomeView = () => {
  const { userData } = getUserSlice();

  return (
    <styled.Page>
      <Typography variant="h2"> HOOME VIEW</Typography>
      <Typography> {JSON.stringify(userData)}</Typography>
    </styled.Page>
  );
};

export default HomeView;
