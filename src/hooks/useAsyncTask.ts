import { useState } from "react";
import { TaskError } from "../classes/TaskError";

const useAsyncTask = () => {
  const [isLoading, setIsLoading] = useState(false);

  const asyncTaskHandler = async <T = unknown>(promise: Promise<T>) => {
    setIsLoading(true);
    try {
      return await promise;
    } catch (err: any) {
      const errTask = new TaskError(err);
      throw errTask;
    } finally {
      setIsLoading(false);
    }
  };

  return { asyncTaskHandler, isLoading };
};

export default useAsyncTask;
export * from "../classes/TaskError";
