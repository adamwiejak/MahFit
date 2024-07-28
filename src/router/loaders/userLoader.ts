import { LoaderFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";
import Auth from "../../utils/Firebase/auth";

// const validTasks = ["login", "signup"];

export function userLoader(args: LoaderFunctionArgs) {
  const currUser = Auth.getCurrentUser();
  return currUser ? currUser : redirect("/auth/login");
}
