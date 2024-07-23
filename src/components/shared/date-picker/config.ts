import { FieldValues } from "react-hook-form";

export type DateInput = {
  day?: number;
  month?: number;
  year?: number;
};

export interface T extends FieldValues {
  date: Date;
}
