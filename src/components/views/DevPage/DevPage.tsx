import * as styled from "./styles";
import { CardProps } from "@mui/material";
import Section1 from "./Section1";
import Section2 from "./_section-2/Section2";
import FilterFriendsContextProvider from "../../../context/friends-filter";

const DevbPage: React.FC<CardProps> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Page {...rest}>
      <Section1 />
      <FilterFriendsContextProvider>
        <Section2 />
      </FilterFriendsContextProvider>
    </styled.Page>
  );
};

export default DevbPage;
