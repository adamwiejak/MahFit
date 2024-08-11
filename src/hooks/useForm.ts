import { FieldValues } from "react-hook-form";
import { useForm as useReactHookForm } from "react-hook-form";
import type { Path } from "react-hook-form";

// TODO: Fix props type (provide default values)
const useForm = <T extends FieldValues>(props?: any) => {
  const { formState, ...form } = useReactHookForm<T>(props);

  function onInputClear(inputName: Path<T>) {
    return () => {
      form.resetField(inputName);
      form.setFocus(inputName);
    };
  }

  return {
    formState,
    form: { ...form, onInputClear },
  };
};

export default useForm;
