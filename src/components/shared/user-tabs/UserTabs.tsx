import * as styled from "./.styles";
import * as config from "./config";
import { BoxProps, Card, Tab } from "@mui/material";
import Icon from "../../UI/Icon";
import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getUserSlice } from "../../../store";
import { scheduleImageAsset } from "../../../assets/images/schedule/asset";

interface IUserTabs extends BoxProps {}

const UserTabs: React.FC<IUserTabs> = (props) => {
  const { ...rest } = props;
  const navigate = useNavigate();
  const { accessToken } = getUserSlice();
  const [value, setValue] = useState<string>(config.tabs[0]);

  function handleChange(e: React.SyntheticEvent, newValue: string) {
    setValue(newValue);
    navigate(newValue);
  }

  return (
    <styled.Wrapper {...rest}>
      <Card elevation={10}>
        <styled.Tabs value={value} onChange={handleChange}>
          {config.tabs.map((tab) => (
            <Tab key={tab} value={tab} disabled={!accessToken} icon={<Icon icon={tab} />} />
          ))}
        </styled.Tabs>
      </Card>

      <styled.Content>
        <styled.Background imageAsset={scheduleImageAsset} />

        {accessToken ? <Outlet /> : <Navigate to="/auth/login" />}
      </styled.Content>
    </styled.Wrapper>
  );
};

export default UserTabs;
