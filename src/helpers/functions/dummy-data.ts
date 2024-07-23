import { Query } from "firebase/firestore";
import UserAPI, { User, UserDetailsInfo, Workout } from "../../API/User";
import { dummyUsersQuery } from "../../API/User/user-api";
import { Database } from "../../utils/Firebase";
import { msPerDay } from "../data/const";
import { randomNumberBetween } from "./functions";

export function getRandomColor() {
  const colors = ["red", "green", "yellow", "blue"];
  const idx = randomNumberBetween(0, colors.length - 1);
  return colors[idx];
}

export function generateRandoMRecords() {
  return {
    benchPress: randomNumberBetween(30, 240),
    squat: randomNumberBetween(60, 260),
    deadLift: randomNumberBetween(80, 350),
  };
}

export function generateDummyWorkouts(amount: number) {
  const now = Date.now();
  const workouts: Record<number, Workout> = {};

  do {
    const daysOffset = randomNumberBetween(-amount, amount);
    const timeOffset = +randomNumberBetween(-6, 6) * (msPerDay / 24);
    const date = new Date(now + daysOffset * msPerDay + timeOffset);
    const day = date.getDate();

    if (workouts[day]) continue;

    workouts[day] = {
      title: `Workout on ${date.toLocaleDateString()}`,
      date: date.toISOString(),
      color: getRandomColor(),
      passed: Math.random() > 0.5,
    };
  } while (Object.keys(workouts).length < amount);

  return Object.values(workouts);
}

export async function fillDummyUser(userData: User) {
  const { getDocs } = Database;
  const friendsList: UserDetailsInfo["friendsList"] = [];
  const dummyfriendsSnapshot = await getDocs(dummyUsersQuery);
  const workouts = generateDummyWorkouts(randomNumberBetween(3, 10));

  dummyfriendsSnapshot.forEach((doc) => {
    const { base } = doc.data() as User;
    if (base.uid !== userData.base.uid)
      friendsList.push({ uid: base.uid, isFav: Math.random() > 0.5 });
  });

  userData.details = { ...userData.details, workouts, friendsList };
}
