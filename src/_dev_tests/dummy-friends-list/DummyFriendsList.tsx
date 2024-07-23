import { useContext } from "react";
import Button from "../../components/UI/button/Button";
import UsersSideBar from "../../components/blocks/user-side-bar/UsersSideBar";
import useAsyncTask from "../../hooks/useAsyncTask";
import UserAPI, { User } from "../../API/User";
import { FilterFriendsContext } from "../../context/friends-filter";
import { Query } from "firebase/firestore";
import { Database } from "../../utils/Firebase";

const allUsers = Database.query(Database.createColectionRef("users"));

const DummyFriendsList = () => {
  const { initFriends } = useContext(FilterFriendsContext);
  const { isLoading, asyncTaskHandler } = useAsyncTask();

  async function fetchUsers(query: Query) {
    try {
      const promise = Database.getColection<User[]>(query);
      const resoult = await asyncTaskHandler(promise);

      const list = resoult.map((user) => {
        return { uid: user.base.uid, isFav: Math.random() > 0.5 };
      });
      initFriends(list);
      return resoult;
    } catch (err: any) {
      console.log(err);
    }
  }

  async function cleanupUsers() {
    try {
      const promise = Database.getColection<User[]>(allUsers);
      const users = await asyncTaskHandler(promise);
      const undummyFilter = users?.filter((u) => u.isDummy !== true);
      console.log(undummyFilter);

      undummyFilter.forEach(async ({ base: { uid } }) => {
        const docRef = Database.createDocumentRef(`users/${uid}`);
        await Database.deleteDocument(docRef);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <UsersSideBar />

      <Button
        inProgress={isLoading}
        text="Fetch Dummy Users"
        onClick={() => fetchUsers(UserAPI.dummyUsersQuery)}
      />

      <Button
        inProgress={isLoading}
        text="Fetch All Users"
        onClick={() => fetchUsers(allUsers)}
      />

      <Button
        inProgress={isLoading}
        onClick={cleanupUsers}
        text="Remove Undummy Users/Authentication"
      />
    </>
  );
};

export default DummyFriendsList;
