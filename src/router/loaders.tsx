import { LoaderFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";

export function authLoader(args: LoaderFunctionArgs) {
  const task = args.params.task;
  const validTasks = ["login", "signup"];
  const isTaskValid = validTasks.some((t) => t === task);
  return isTaskValid ? task : redirect("/auth/login");
}

export function sectionLoader(args: LoaderFunctionArgs) {
  return null;
}
