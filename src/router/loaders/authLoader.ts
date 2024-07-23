import { LoaderFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";
import { getCurrentUser } from "../../utils/Firebase/_auth";

const validTasks = ["login", "signup"];

export function authLoader(args: LoaderFunctionArgs) {
  const task = args.params.task;
  const currUser = getCurrentUser();
  const isTaskValid = validTasks.some((t) => t === task);

  if (!currUser) redirect("/auth/login");

  return isTaskValid ? task : redirect("/auth/login");
}
