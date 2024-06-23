import * as styled from "./styles";
import { useState } from "react";
import { Database as DB } from "../../../utils/Firebase";
import { User } from "../../../API/User";
import useAsyncTask from "../../../hooks/useAsyncTask";
import UserWidget from "../../shared/user-widget/UserWidget";
import Button from "../../UI/button/Button";
import Icon from "../../UI/Icon";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { asyncTaskHandler, isLoading } = useAsyncTask();

  async function fetchdummyUsers() {
    try {
      const resoult = await asyncTaskHandler<User[]>(
        DB.getColection("dummy-users")
      );
      setUsers(resoult);
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <styled.Wrapper>
      <styled.List>
        {users?.map((u) => (
          <UserWidget userData={u} />
        ))}
      </styled.List>

      <Button
        variant="outlined"
        inProgress={isLoading}
        onClick={fetchdummyUsers}
        endIcon={<Icon icon="group" />}
        text="Fetch Dummy Users Colection"
      />
    </styled.Wrapper>
  );
};

export default UsersList;
