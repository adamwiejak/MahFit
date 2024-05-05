import { Tab, Tabs } from "@mui/material";
import Icon from "../../UI/Icon";
import { useState } from "react";

const UserNavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      color="secondary"
      sx={{ height: "100%", placeSelf: "end" }}
    >
      <Tab icon={<Icon icon="exercises" />} />
      <Tab icon={<Icon icon="group" />} />
      <Tab icon={<Icon icon="ranking" />} />
    </Tabs>
  );
};

export default UserNavBar;
