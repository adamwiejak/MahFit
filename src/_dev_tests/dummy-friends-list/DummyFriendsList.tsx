import * as styled from "./styles";
import Button from "../../components/UI/button/Button";
import UsersSideBar from "../../components/blocks/user-side-bar/UsersSideBar";
import useAsyncTask from "../../hooks/useAsyncTask";
import { Query } from "firebase/firestore";
import Database, { dummyUsersQuery, UserData, usersQuery } from "../../utils/Firebase/database";

const DummyFriendsList = () => {
  const { isLoading, asyncTaskHandler } = useAsyncTask();

  async function fetchUsers(query: Query) {
    try {
      const { getColection } = Database;
      const promise = getColection<UserData[]>(query);
      const resoult = await asyncTaskHandler(promise);
      return resoult;
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <styled.Container>
      <UsersSideBar />
      <Button inProgress={isLoading} text="Fetch Dummy Users" onClick={() => fetchUsers(dummyUsersQuery)} />
      <Button inProgress={isLoading} text="Fetch All Users" onClick={() => fetchUsers(usersQuery)} />
    </styled.Container>
  );
};

export default DummyFriendsList;
