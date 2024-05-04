import useBoolean from "../../../hooks/useBoolean";
import Button from "../../primitives/Button";
import Icon from "../../primitives/Icon";
import type { ButtondProps } from "../../primitives/Button";
import Dialog from "../../modals/dialog/Dialog";
import OpenDemoForm from "../forms/demo-account-form/OpenDemoForm";

interface IDemoAccountProvider extends Omit<ButtondProps, "text" | "icon"> {
  text?: string;
  icon?: "end" | "start";
}

const header = "Open Locall Demo Account?";
const paragraphs = [
  <>
    You are logging in to a demo account. It works locally but still needs
    network connetcion to provide you full expirience.
  </>,
  <>
    All changes will be saved locally, and will disappear after you logout. We
    recommend create your own full account, it's totally <span>FREE.</span>
  </>,
  <>Do you want to continue?</>,
];

const DemoAccountProvider: React.FC<IDemoAccountProvider> = (props) => {
  const { text, icon, ...rest } = props;
  const [isModalOpen, toggleModal] = useBoolean(false);

  return (
    <>
      <Button
        {...rest}
        onClick={toggleModal}
        text={text || "Local Demo Account"}
        endIcon={icon === "end" && <Icon icon="user" />}
        startIcon={<Icon icon="user" />}
      />

      <Dialog open={isModalOpen}>
        <OpenDemoForm />
        <Button text="Cancel" onClick={toggleModal} />
      </Dialog>
    </>
  );
};

export default DemoAccountProvider;
