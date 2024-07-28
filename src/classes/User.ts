import {
  UserBaseInfo,
  UserData,
  UserDetailsInfo,
  WorkoutData,
} from "../API/User";

export default class User {
  private isDummy: boolean;
  private base: UserBaseInfo;
  private details: UserDetailsInfo;

  constructor(data: UserData) {
    this.base = data.base;
    this.isDummy = data?.isDummy || false;
    this.details = {
      records: data.details?.records || {},
      workouts: data.details?.workouts || [],
      friendsList: data.details?.friendsList || [],
    };
  }

  getIsDummy() {
    return this.isDummy;
  }

  getUid() {
    return this.base.uid;
  }

  getUserData(): UserData {
    return { isDummy: this.isDummy, details: this.details, base: this.base };
  }

  getGender() {
    return this.base.gender;
  }

  getNickname() {
    return this.base.nickname;
  }

  getRecords() {
    return this.details.records;
  }

  getFriendsList() {
    return this.details.friendsList;
  }

  getPhotoUrl() {
    return this.base.photoURL;
  }

  getWorkouts() {
    return this.details.workouts;
  }

  getWorkout(uid: WorkoutData["uid"]) {
    return this.details.workouts.find((w) => w.uid === uid);
  }
}
