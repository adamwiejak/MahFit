import { LoaderFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";
import UserAPI from "../../API/User";

const validTasks = ["login", "signup"];

export function userLoader(args: LoaderFunctionArgs) {
  const currUser = UserAPI.getCurrentUser();
  return currUser ? currUser : redirect("/auth/login");
}
