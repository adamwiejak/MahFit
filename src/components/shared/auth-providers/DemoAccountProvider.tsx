import useBoolean from "../../../hooks/useBoolean";
import Button from "../../UI/button/Button";
import Icon from "../../UI/Icon";
import type { IButton } from "../../UI/button/Button";
import Dialog from "../../modals/dialog/Dialog";
import DemoAccountForm from "../forms/demo-account-form/DemoAccountForm";
import { useEffect, useState } from "react";

/////////////////////////////////////////////////////

interface IDemoAccountProvider extends Omit<IButton, "icon"> {}

const initTimerValue = 0;

const DemoAccountProvider: React.FC<IDemoAccountProvider> = (props) => {
  const { text, ...rest } = props;
  const [timer, setTimer] = useState(initTimerValue);
  const [isModalOpen, toggleModal] = useBoolean(false);

  useEffect(() => {
    if (!isModalOpen && timer > 1) return setTimer(initTimerValue);

    const timeOut = setTimeout(() => {
      if (timer > 0) setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer, isModalOpen]);

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
        variant={timer > 1 ? "obligatory" : "important"}
        onClose={toggleModal}
        title="Test Demo  Account"
      >
        <DemoAccountForm timer={timer} />
      </Dialog>
    </>
  );
};

export default DemoAccountProvider;
