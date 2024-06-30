import * as styled from "./styles";
import Button from "../../../UI/button/Button";
import { Database } from "../../../../utils/Firebase";
import useAsyncTask from "../../../../hooks/useAsyncTask";
import { TaskResponse } from "../../../../classes/TaskResponse";
import UsersList from "../../../shared/users-list/UsersList";
import LocalImageFile from "../../../../_dev_tests/local-image-file/LocalImageFile";
import CreateDummyUserForm from "../../../../_dev_tests/create-dummy-user/CreateDummyUser";

const Section2 = () => {
  const { isLoading, asyncTaskHandler } = useAsyncTask();

  async function getInvalidDoc() {
    try {
      await asyncTaskHandler(Database.getDocument("asdasd/asdsd"));
    } catch (err) {
      console.log(err);
      const { displaySnackbar } = err as TaskResponse;
      displaySnackbar("error");
    }
  }

  return (
    <styled.Container>
      <styled.Card elevation={20}>
        <CreateDummyUserForm />
        <UsersList />
      </styled.Card>

      <styled.Card elevation={20}>
        <LocalImageFile />
        <Button
          inProgress={isLoading}
          text="Get Invalid Doc"
          onClick={getInvalidDoc}
        />
      </styled.Card>
    </styled.Container>
  );
};

export default Section2;
