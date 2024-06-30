import { Tab, Tabs, TabsProps } from "@mui/material";
import Icon from "../../UI/Icon";
import { useState } from "react";
import UserAvatar from "../user-avatar/UserAvatar";
import { getUserSlice } from "../../../store/Store";

interface IUserTabs extends TabsProps {}

const UserTabs: React.FC<IUserTabs> = (props) => {
  const { ...rest } = props;
  const [value, setValue] = useState(0);
  const { accessToken } = getUserSlice();

  function handleChange(e: React.SyntheticEvent, newValue: number) {
    setValue(newValue);
  }

  return (
    <>
      <Tabs {...rest} value={value} onChange={handleChange}>
        <Tab disabled={!accessToken} icon={<Icon icon="exercises" />} />
        <Tab disabled={!accessToken} icon={<Icon icon="group" />} />
        <Tab disabled={!accessToken} icon={<Icon icon="ranking" />} />
        <Tab disabled={!accessToken} icon={<Icon icon="calendar" />} />
      </Tabs>

      <UserAvatar />
    </>
  );
};

export default UserTabs;
