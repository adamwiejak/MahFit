import { v4 as uuidv4 } from "uuid";
import { Gender, User } from "../../utils/User/types";

export function todayPlusDays(daysOffset: number) {
  const ms = Date.now() + daysOffset * 24 * 60 * 60 * 1000;
  return new Date(ms).toISOString();
}

export const generateRandoMRecords = () => {
  return {
    benchPress: randomNumberBetween(30, 240),
    squat: randomNumberBetween(60, 260),
    deadLift: randomNumberBetween(80, 350),
  };
};

export const generateDummyUser = (nickname: string, gender: Gender): User => {
  const uid = uuidv4();
  const email = `${nickname}@example.com`;
  const personalRecords = generateRandoMRecords();
  const base = { uid, email, nickname, gender, dupa: "dupa" };
  return { base, details: { personalRecords } };
};

export function renderLoremIpsum(paragraphsAmount: number) {
  const paragraph = `Sint Lorem irure aliquip cupidatat esse ad elit magna nulla. Amet ipsum officia excepteur ut aliqua duis commodo commodo. Commodo et eu ex anim laborum aliqua amet amet commodo reprehenderit aliquip velit reprehenderit. Ea ullamco elit Lorem dolor ad est elit sint. Est et adipisicing exercitation nisi cupidatat cillum.`;
  const array = [];
  for (let i = 0; i < paragraphsAmount; i++) {
    array.push(paragraph);
  }
  return array.join();
}

export function randomNumberBetween(min: number, max: number) {
  return Math.round(Math.random() * (max - min)) + min;
}

export async function awaitTime(time: number) {
  await new Promise((resolve) => setTimeout(resolve, time));
}
