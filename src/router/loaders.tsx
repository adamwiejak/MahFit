import { LoaderFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";

export function authLoader(args: LoaderFunctionArgs) {
  const tasks: AuthTask[] = ["login", "logout", "signup"];
  const task = args.params.task;
  const validTask = tasks.some((t) => t === task);
  return validTask ? task : redirect("/auth/login");
}

export function sectionLoader(args: LoaderFunctionArgs) {
  return null;
}
