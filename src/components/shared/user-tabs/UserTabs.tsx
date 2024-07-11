import * as styled from "./styles";
import * as config from "./config";
import { Tab, TabsProps } from "@mui/material";
import Icon from "../../UI/Icon";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface IUserTabs extends TabsProps {}

const UserTabs: React.FC<IUserTabs> = (props) => {
  const { ...rest } = props;
  const navigate = useNavigate();
  const [value, setValue] = useState<string>(config.tabs[0]);

  function handleChange(e: React.SyntheticEvent, newValue: string) {
    setValue(newValue);
    navigate(newValue);
  }

  return (
    <>
      <styled.Wrapper elevation={5}>
        <styled.Tabs {...rest} value={value} onChange={handleChange}>
          {config.tabs.map((tab) => (
            <Tab key={tab} value={tab} icon={<Icon icon={tab} />} />
          ))}
        </styled.Tabs>
      </styled.Wrapper>

      <Outlet />
    </>
  );
};

export default UserTabs;
