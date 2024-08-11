import { Lift, UserBaseInfo, UserDetails } from "../API/User";
import { UserData, WorkoutData } from "../utils/Firebase/database";

export default class User {
  private isDummy: boolean;
  private base: UserBaseInfo;
  private details: UserDetails;

  constructor(data: { base: UserBaseInfo; details?: UserDetails; isDummy?: boolean }) {
    this.base = data.base;
    this.isDummy = data.isDummy || false;
    this.details = {
      workouts: data.details?.workouts || [],
      records: data.details?.records || new Map(),
      friendsList: data.details?.friendsList || [],
    };
  }

  getUid() {
    return this.base.uid;
  }

  getBaseInfo() {
    return this.base;
  }

  getDetailsInfo() {
    return this.details;
  }

  getIsDummy() {
    return this.isDummy;
  }

  getUserData(): UserData {
    return { isDummy: this.isDummy, details: this.details, base: this.base };
  }

  getRecords() {
    return this.details!.records;
  }

  getCurrRecord(lift: Lift) {
    const liftRecords = Object.values(this.details!.records?.get(lift) || {});
    return Math.max(...liftRecords) || 0;
  }

  getFriendsList() {
    return this.details!.friendsList;
  }

  getWorkouts() {
    return this.details!.workouts || [];
  }

  getWorkout(uid: WorkoutData["uid"]) {
    return this.details!.workouts?.find((w) => w.uid === uid);
  }
}
