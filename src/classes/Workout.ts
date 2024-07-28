import { Uid, WorkoutData, WorkoutType } from "../API/User";
import { randomNumberBetween } from "../helpers/functions/functions";

const randonmColor = () => {
  const colors = ["red", "green", "blue", "yellow"];
  return colors[randomNumberBetween(0, colors.length)];
};

export default class Workout {
  start: Date;
  author: Uid;
  uid: string;
  title: string;
  outDated: boolean;
  type: WorkoutType;
  backgroundColor: string;

  constructor(data: WorkoutData) {
    this.uid = data.uid;
    this.type = data.type;
    this.title = data.title;
    this.author = data.author;
    this.start = new Date(data.start);
    this.outDated = this.start < new Date();
    this.backgroundColor = randonmColor();
  }

  getUid() {}

  getData() {
    // exlue methods
    return this;
  }
}
