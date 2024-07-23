import useBoolean from "../../../hooks/useBoolean";
import Button from "../../UI/button/Button";
import Icon from "../../UI/Icon";
import type { IButton } from "../../UI/button/Button";
import Dialog from "../../modals/dialog/Dialog";
import DemoAccountForm from "../forms/demo-account-form/DemoAccountForm";
import useTimer from "../../../hooks/useTimer";

/////////////////////////////////////////////////////

const initTimerValue = 5;
interface IDemoAccountProvider extends Omit<IButton, "icon"> {}

const DemoAccountProvider: React.FC<IDemoAccountProvider> = (props) => {
  const { text, ...rest } = props;
  const [isModalOpen, toggleModal] = useBoolean(false);
  const [timer, setTimer] = useTimer(initTimerValue, [isModalOpen]);

  if (!isModalOpen && timer > 1 && timer < initTimerValue) {
    setTimer(initTimerValue);
  }

  return (
    <>
      <Button
        {...rest}
        onClick={toggleModal}
        text={text || "Demo Account"}
        startIcon={<Icon icon="user" />}
      />

      <Dialog
        fullWidth
        transition="slide"
        open={isModalOpen}
        variant="important"
        onClose={toggleModal}
        title="Test Demo  Account"
      >
        <DemoAccountForm timer={timer} />
      </Dialog>
    </>
  );
};

export default DemoAccountProvider;
