import * as styled from "./styles";
import { iconsAsset } from "../../../assets/icons/iconsAsset";
import IconButton from "../../UI/IconButton";
import { CardProps, Divider } from "@mui/material";
import CreateDummyUserForm from "../../../_dev_tests/create-dummy-user/CreateDummyUser";
import UsersList from "../../blocks/users-list/UsersList";
import Button from "../../UI/button/Button";
import { Storage } from "../../../utils/Firebase";
import useAsyncTask from "../../../hooks/useAsyncTask";
import LocalImageFile from "../../../_dev_tests/local-image-file/LocalImageFile";

const DevbPage: React.FC<CardProps> = (props) => {
  const { ...rest } = props;
  const { asyncTaskHandler, isLoading } = useAsyncTask();

  return (
    <styled.Page {...rest}>
      <styled.IconsContainer>
        {Object.entries(iconsAsset).map((entry: any) => (
          <IconButton
            tip={entry[0].toString()}
            icon={entry[0]}
            key={entry[0]}
            size="large"
            color="default"
          />
        ))}
      </styled.IconsContainer>

      <styled.FormsContainer elevation={20} sx={{ gridArea: "users" }}>
        <CreateDummyUserForm />
        <Divider />
        <UsersList />
      </styled.FormsContainer>

      <styled.FormsContainer elevation={20}>
        <LocalImageFile />
      </styled.FormsContainer>
    </styled.Page>
  );
};

export default DevbPage;
