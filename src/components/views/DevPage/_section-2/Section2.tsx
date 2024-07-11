import * as styled from "./styles";
import Button from "../../../UI/button/Button";
import { Database } from "../../../../utils/Firebase";
import useAsyncTask from "../../../../hooks/useAsyncTask";
import CreateDummyUserForm from "../../../../_dev_tests/create-dummy-user/CreateDummyUser";
import { useContext, useState } from "react";
import UsersList from "../../../blocks/users-side-bar/UsersSideBar";
import { Divider } from "@mui/material";
import UserAPI, { User } from "../../../../API/User";
import { TaskResponse } from "../../../../classes/TaskResponse";
import { FilterFriendsContext } from "../../../../context/friends-filter";

const Section2 = () => {
  const { isLoading, asyncTaskHandler } = useAsyncTask();
  const { setFriendsList } = useContext(FilterFriendsContext);

  async function fetchdummyUsers() {
    try {
      const promise = Database.getColection<User[]>("dummy-users");
      const resoult = await asyncTaskHandler(promise);

      const list = resoult.map(({ base }) => {
        return { uid: base.uid, isFav: Math.random() > 0.5 };
      });

      setFriendsList(list);
    } catch (err: any) {
      console.log(err);
    }
  }

  async function fetchInvalidUSer() {
    try {
      await asyncTaskHandler(UserAPI.getUserFromDB("asdasdasdasa"));
    } catch (err) {
      console.log(err);
      const { displaySnackbar } = err as TaskResponse;
      displaySnackbar("error");
    }
  }

  return (
    <styled.Container>
      <styled.Card elevation={20}>
        <CreateDummyUserForm />
        <Divider />
        <UsersList />
        <Button
          sx={{ my: 3 }}
          inProgress={isLoading}
          text="Fetch Dummy Users"
          onClick={fetchdummyUsers}
        />
      </styled.Card>

      <Button
        text="Invalid User"
        inProgress={isLoading}
        onClick={fetchInvalidUSer}
      />
    </styled.Container>
  );
};

export default Section2;
