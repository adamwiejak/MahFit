import { Tab, Tabs, TabsProps } from "@mui/material";
import Icon from "../../UI/Icon";
import { useState } from "react";

interface IUserNavBar extends TabsProps {}

const UserNavBar: React.FC<IUserNavBar> = (props) => {
  const { ...rest } = props;
  const [value, setValue] = useState(0);

  function handleChange(e: React.SyntheticEvent, newValue: number) {
    console.log(e);
    setValue(newValue);
  }

  return (
    <Tabs {...rest} value={value} onChange={handleChange}>
      <Tab icon={<Icon icon="exercises" />} />
      <Tab icon={<Icon icon="group" />} />
      <Tab icon={<Icon icon="ranking" />} />
      <Tab icon={<Icon icon="calendar" />} />
    </Tabs>
  );
};

export default UserNavBar;
