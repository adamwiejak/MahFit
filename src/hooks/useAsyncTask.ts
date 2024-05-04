import { useState } from "react";
import { dev } from "../store/Store";
import { AsyncError } from "../classes/AsyncError";
import { useSnackbar } from "notistack";

type AsyncInput<T> = (() => Promise<T>) | Promise<T>;

const useAsyncTask = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);

  const asyncHandler = async <T = unknown>(input: AsyncInput<T>) => {
    setIsLoading(true);

    try {
      const resoult = input instanceof Promise ? await input : await input();
      if (dev) console.log("ASYNC HANDLER RESOULT:", resoult);
      return resoult;
    } catch (err: any) {
      const asyncError = new AsyncError(err);
      if (dev) console.log("ASYNC HANDLER ERROR:", asyncError);
      enqueueSnackbar(asyncError.message, { variant: asyncError.variant });
      throw asyncError;
    } finally {
      setIsLoading(false);
    }
  };

  return { asyncHandler, isLoading };
};

export default useAsyncTask;
