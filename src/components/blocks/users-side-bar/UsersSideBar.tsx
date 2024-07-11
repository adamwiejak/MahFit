import * as styled from "./styles";
import { CardProps } from "@mui/material";
import SortUsersBar from "../../shared/sort-users-bar/SortUsersBar";
import SearchUsersBar from "../../shared/search-users-bar/SearchUsersBar";
import UsersList from "../../shared/users-list/UsersList";

interface IUsersSideBar extends CardProps {}

const UsersSideBar: React.FC<IUsersSideBar> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Container elevation={10} {...rest}>
      <SortUsersBar elevation={10} />
      <UsersList />
      <SearchUsersBar elevation={20} />
    </styled.Container>
  );
};

export default UsersSideBar;
