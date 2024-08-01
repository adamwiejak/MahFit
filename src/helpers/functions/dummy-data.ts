import { v4 as uuidv4 } from "uuid";
import { Friend, Uid, UserData, WorkoutData } from "../../API/User";
import Database from "../../utils/Firebase/database";
import { msPerDay, msPerHour } from "../data/const";
import { workoutTypesMockup } from "../data/mockups";
import { randomNumberBetween } from "./functions";

export function getRandomType() {
  const idx = randomNumberBetween(0, workoutTypesMockup.length - 1);
  return workoutTypesMockup[idx];
}

export function generateRandomRecords() {
  const f = randomNumberBetween(30, 180);
  return {
    benchPress: Math.floor(f * 1),
    squat: Math.floor(f * 1.2),
    deadLift: Math.floor(f * 1.5),
  };
}

export function generateDummyWorkouts(amount: number, author: Uid) {
  const now = Date.now();
  const workouts: Record<number, WorkoutData> = {};

  do {
    const hoursOffset = +randomNumberBetween(-12, 12) * msPerHour;
    const daysOffset = randomNumberBetween(-amount / 2, amount / 2) * msPerDay;
    const date = new Date(now + daysOffset + hoursOffset);
    const day = date.getDate();

    if (workouts[day]) continue;

    workouts[day] = {
      author,
      uid: uuidv4(),
      type: getRandomType(),
      start: date.toDateString(),
      title: `Workout of ${author} on ${date.toLocaleDateString()}`,
    };
  } while (Object.keys(workouts).length < amount);

  return Object.values(workouts);
}

export async function fillDummyUser(userData: UserData) {
  const { getDocs } = Database;
  const friendsList: Friend[] = [];
  const userUid = userData.base.uid;
  const workouts = generateDummyWorkouts(randomNumberBetween(3, 10), userUid);

  try {
    const dummyfriendsSnapshot = await getDocs(Database.dummyUsersQuery);
    dummyfriendsSnapshot.forEach((doc) => {
      const { base } = doc.data() as UserData;
      const isFav = Math.random() > 0.5;
      if (base.uid !== userUid) friendsList.push({ uid: base.uid, isFav });
    });

    userData.details = { ...userData.details, workouts, friendsList };
  } catch (err) {
    throw err;
  }
}
