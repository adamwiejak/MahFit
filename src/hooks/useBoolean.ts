import { useState, useCallback } from "react";

type UseBoolean = [
  boolean,
  () => void,
  React.Dispatch<React.SetStateAction<boolean>>
];

const useBoolean = (initialValue: boolean): UseBoolean => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = useCallback(() => setValue((prev) => !prev), [setValue]);
  return [value, toggleValue, setValue];
};

export default useBoolean;
