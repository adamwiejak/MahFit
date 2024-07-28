import * as styled from "./styles";
import { FilterFriendsContextProvider } from "../../../../context/friends-filter";
import CreateDummyUserForm from "../../../../_dev_tests/create-dummy-user/CreateDummyUser";
import DummyFriendsList from "../../../../_dev_tests/dummy-friends-list/DummyFriendsList";

const Section2 = () => {
  return (
    <styled.Container>
      <FilterFriendsContextProvider>
        <DummyFriendsList />
      </FilterFriendsContextProvider>

      <CreateDummyUserForm />
    </styled.Container>
  );
};

export default Section2;
