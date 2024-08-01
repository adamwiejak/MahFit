import * as styled from "./styles";
import * as config from "./config";
import { BoxProps, Card, Tab } from "@mui/material";
import Icon from "../../UI/Icon";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserSlice } from "../../../store";
import AuthForm from "../../blocks/auth-form/AuthForm";
import Image from "../image/Image";
import { workoutImageAsset } from "../../../assets/images/workout/asset";

interface IUserTabs extends BoxProps {
  disabeled?: boolean;
}

const UserTabs: React.FC<IUserTabs> = (props) => {
  const { disabeled, ...rest } = props;
  const navigate = useNavigate();
  const { accessToken, userData } = getUserSlice();
  const [value, setValue] = useState<string>(config.tabs[0]);

  function handleChange(e: React.SyntheticEvent, newValue: string) {
    setValue(newValue);
    navigate(newValue);
  }

  return (
    <styled.Wrapper {...rest}>
      <Card elevation={10}>
        <styled.Tabs value={disabeled ? null : value} onChange={handleChange}>
          {config.tabs.map((tab) => (
            <Tab
              key={tab}
              value={tab}
              disabled={disabeled}
              icon={<Icon icon={tab} />}
            />
          ))}
        </styled.Tabs>
      </Card>

      <styled.Content>
        <Image background imageAsset={workoutImageAsset} />
        {accessToken ? <Outlet /> : <AuthForm />}
      </styled.Content>
    </styled.Wrapper>
  );
};

export default UserTabs;
