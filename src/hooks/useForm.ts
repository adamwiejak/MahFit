import { FieldValues } from "react-hook-form";
import { useForm as useReactHookForm } from "react-hook-form";
import type { Path } from "react-hook-form";

const useForm = <T extends FieldValues>() => {
  const { formState, ...form } = useReactHookForm<T>();

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
