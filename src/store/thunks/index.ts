import { onLoginUser } from "./onLoginUser";
import { onLogoutUser } from "./onLogoutUser";

const thunks = {
  onLoginUser,
  onLogoutUser,
};

export default thunks;
export * from "./onLoginUser";
export * from "./onLogoutUser";
