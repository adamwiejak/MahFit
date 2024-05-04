import styled from "./styles";
import { FormState, UseFormReturn } from "react-hook-form";
import { dev } from "../../../store/Store";
import Button from "../../../components/primitives/Button";

interface FormAutoFillProps {
  formFunctions: Omit<UseFormReturn<any>, "formState">;
  formState: FormState<any>;
  dummyValues?: Record<string, string>;
}

const FormAutoFill: React.FC<FormAutoFillProps> = (props) => {
  const { formFunctions, formState, dummyValues = {} } = props;

  const autoFill = () => {
    const setter = formFunctions.setValue;
    const keys = Object.keys(dummyValues);
    keys.forEach((k) => setter(k, dummyValues[k]));
  };

  const printFomState = () => console.log(formState);

  const prinFieldsFalues = () => {
    const geter = formFunctions.getValues;
    const keys = Object.keys(dummyValues);
    const data: Record<string, string> = {};
    keys.forEach((k) => (data[k] = geter(k)));
    console.log(data);
  };

  return !dev ? null : (
    <styled.Container>
      <Button
        text="dev-autofill"
        size="small"
        variant="outlined"
        onClick={autoFill}
      />

      <Button
        text="dev-print-form"
        size="small"
        variant="outlined"
        onClick={prinFieldsFalues}
        onDoubleClick={printFomState}
      />
    </styled.Container>
  );
};

export default FormAutoFill;
