import { LoaderFunctionArgs } from "react-router-dom";
import { redirect } from "react-router-dom";
import { getCurrentUser } from "../../utils/Firebase/_auth";

const validTasks = ["login", "signup"];

export function userLoader(args: LoaderFunctionArgs) {
  const currUser = getCurrentUser();
  return currUser ? currUser : redirect("/auth/login");
}
