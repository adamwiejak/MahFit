import { Workout } from "../../API/User/types";
import { todayPlusDays } from "../functions/dummy-functions";

export const DUMMY_EVENTS: Workout[] = [
  { title: "event 1", date: todayPlusDays(-11), color: "red" },
  { title: "event 2", date: todayPlusDays(-9), color: "red" },
  { title: "event 3", date: todayPlusDays(-5), color: "red" },
  { title: "event 4", date: todayPlusDays(-1), color: "blue" },
  { title: "event 5", date: todayPlusDays(2), color: "green" },
  { title: "event 6", date: todayPlusDays(4), color: "green" },
  { title: "event 7", date: todayPlusDays(11), color: "green" },
  { title: "event 8", date: todayPlusDays(8), color: "green" },
  { title: "event 9", date: todayPlusDays(23), color: "yellow" },
];
