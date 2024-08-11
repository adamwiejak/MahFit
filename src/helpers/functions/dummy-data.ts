import { v4 as uuidv4 } from "uuid";
import { Friend, Records, Uid, UserDetails } from "../../API/User";
import Database, { dummyUsersQuery } from "../../utils/Firebase/database";
import { dummyRecordsAmount, dummyWorkoutsAmount, msPerDay, msPerHour } from "../data/const";
import { workoutTypesMockup } from "../data/mockups";
import { randomNumberBetween } from "./functions";
import { UserData, WorkoutData } from "../../utils/Firebase/database/types";

export function getRandomWorkoutType() {
  const idx = randomNumberBetween(0, workoutTypesMockup.length - 1);
  return workoutTypesMockup[idx];
}

export function generateRandomDate(dayOffset: number, entryDate?: Date, justPast?: boolean) {
  const entry = entryDate?.getMilliseconds() || Date.now();
  const hoursOffset = +randomNumberBetween(justPast ? 0 : -12, 12) * msPerHour;
  const daysOffset = randomNumberBetween(justPast ? 0 : -dayOffset, dayOffset) * msPerDay;
  return new Date(entry + daysOffset + hoursOffset);
}

export function generateRandomRecords(): Records {
  const { min, max } = dummyRecordsAmount;
  const f = randomNumberBetween(30, 180);
  const now = Date.now();

  const recordsSquat = { [now]: randomNumberBetween(0, 100) };
  const recordsDeadlift = { [now]: randomNumberBetween(0, 100) };
  const recordsBenchPress = { [now]: randomNumberBetween(0, 100) };

  return new Map([
    ["squat", recordsSquat],
    ["deadLift", recordsDeadlift],
    ["benchPress", recordsBenchPress],
  ]);
}

export function generateDummyWorkouts(amount: number, author: Uid) {
  const workouts: { [day: number]: WorkoutData } = {};

  do {
    const randomDate = generateRandomDate(amount);
    const day = randomDate.getDate();
    if (workouts[day]) continue;

    workouts[day] = {
      author,
      uid: uuidv4(),
      type: getRandomWorkoutType(),
      start: randomDate.toDateString(),
      title: `Workout of ${author} on ${randomDate.toLocaleDateString()}`,
    };
  } while (Object.keys(workouts).length < amount);

  return Object.values(workouts);
}

export async function fillDummyUser(userData: UserData) {
  const { min, max } = dummyWorkoutsAmount;
  const { getDocs } = Database;
  const friendsList: Friend[] = [];
  const userUid = userData.base.uid;
  const records = generateRandomRecords();
  const workouts = generateDummyWorkouts(randomNumberBetween(min, max), userUid);

  try {
    const dummyfriendsSnapshot = await getDocs(dummyUsersQuery);
    dummyfriendsSnapshot.forEach((doc) => {
      const isFav = Math.random() > 0.5;
      const { base } = doc.data() as UserData;
      if (base.uid !== userUid) friendsList.push({ uid: base.uid, isFav });
    });

    userData.details = { ...userData.details, workouts, friendsList, records };
  } catch (err) {
    throw err;
  }
}
