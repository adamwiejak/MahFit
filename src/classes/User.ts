import { UserBaseInfo, UserDetailsInfo } from "../API/User";

export class User {
  isDummy?: boolean;
  base: UserBaseInfo;
  details?: UserDetailsInfo;

  constructor(baseData: UserBaseInfo) {
    this.base = baseData;
  }
}
