import * as styled from "./styles";
import { Divider } from "@mui/material";
import FilterFriendsContextProvider from "../../../../context/friends-filter";
import CreateDummyUserForm from "../../../../_dev_tests/create-dummy-user/CreateDummyUser";
import DummyFriendsList from "../../../../_dev_tests/dummy-friends-list/DummyFriendsList";

const Section2 = () => {
  return (
    <styled.Container>
      <styled.Card elevation={20}>
        <CreateDummyUserForm />
        <Divider />

        <FilterFriendsContextProvider>
          <DummyFriendsList />
        </FilterFriendsContextProvider>
      </styled.Card>
    </styled.Container>
  );
};

export default Section2;
