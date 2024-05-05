import { useState } from "react";
import { TaskResponse } from "../classes/TaskResponse";

type AsyncTask<T> = () => Promise<T>;

const useAsyncTask = () => {
  const [isLoading, setIsLoading] = useState(false);

  const asyncTaskHandler = async <T = unknown>(task: AsyncTask<T>) => {
    setIsLoading(true);

    try {
      return await task();
    } catch (err: any) {
      const response = new TaskResponse(err);
      throw response;
    } finally {
      setIsLoading(false);
    }
  };

  return { asyncTaskHandler, isLoading };
};

export default useAsyncTask;
