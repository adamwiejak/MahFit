import User from "./User";
import { UserData } from "../API/User";

export class FriendUser extends User {
  isFav: boolean;

  constructor(data: UserData, isFav: boolean) {
    super(data);
    this.isFav = isFav;
  }

  getIsFav() {
    return this.isFav;
  }
}
