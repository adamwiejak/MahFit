import { useState } from "react";
import { TaskResponse } from "../classes/TaskResponse";

const useAsyncTask = () => {
  const [isLoading, setIsLoading] = useState(false);

  const asyncTaskHandler = async <T>(promise: Promise<T>) => {
    setIsLoading(true);
    try {
      const resoult = await promise;
      return resoult;
    } catch (err: any) {
      const errResponse = new TaskResponse(err);
      throw errResponse;
    } finally {
      setIsLoading(false);
    }
  };

  return { asyncTaskHandler, isLoading };
};

export default useAsyncTask;
