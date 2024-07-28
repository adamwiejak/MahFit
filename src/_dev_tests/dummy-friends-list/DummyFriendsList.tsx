import * as styled from "./styles";
import Button from "../../components/UI/button/Button";
import UsersSideBar from "../../components/blocks/user-side-bar/UsersSideBar";
import useAsyncTask from "../../hooks/useAsyncTask";
import { Friend, UserData } from "../../API/User";
import { Query } from "firebase/firestore";
import Database from "../../utils/Firebase/database";
import { useState } from "react";

const DummyFriendsList = () => {
  const [list, setList] = useState<Friend[]>([]);
  const { isLoading, asyncTaskHandler } = useAsyncTask();

  async function fetchUsers(query: Query) {
    try {
      const { getColection } = Database;
      const promise = getColection<UserData[]>(query);
      const resoult = await asyncTaskHandler(promise);
      const list = resoult.map((user) => {
        return { uid: user.base.uid, isFav: Math.random() > 0.5 };
      });
      setList(list);
      return resoult;
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <styled.Container>
      <UsersSideBar friendsList={list} />

      <Button
        inProgress={isLoading}
        text="Fetch Dummy Users"
        onClick={() => fetchUsers(Database.dummyUsersQuery)}
      />

      <Button
        inProgress={isLoading}
        text="Fetch All Users"
        onClick={() => fetchUsers(Database.usersQuery)}
      />
    </styled.Container>
  );
};

export default DummyFriendsList;
