import { LoaderFunction, useLoaderData } from "react-router-dom";

const useRouteData = <T>() => {
  const data = useLoaderData() as Awaited<T>;
  return data;
};

export default useRouteData;
