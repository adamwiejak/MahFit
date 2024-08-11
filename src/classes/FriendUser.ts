import { UserData } from "../utils/Firebase/database";
import User from "./User";

export class FriendUser extends User {
  fav: boolean;

  constructor(data: UserData, fav: boolean) {
    super(data);
    this.fav = fav;
  }

  isFav() {
    return this.fav;
  }
}
