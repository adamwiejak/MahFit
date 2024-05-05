import { VariantType, enqueueSnackbar } from "notistack";
import { compareStrings } from "../helpers/functions/functions";

export class TaskResponse {
  message: string;
  statusCode: number;
  variant: VariantType;

  constructor(err: any, variant?: VariantType) {
    this.variant = variant || "warning";
    this.statusCode = err.statusCode;
    this.message = err.message || err.statusText || "Something went wrong";
    this.includes = this.includes.bind(this);
  }

  includes(phraze: string) {
    const phrazeLong = phraze.length;
    const letters = this.message.split("");

    const strings: string[] = [];

    for (let i = 0; i <= letters.length - phrazeLong; i++) {
      strings.push(this.message.substring(i, i + phrazeLong));
    }

    console.log(phraze.toLocaleUpperCase(), strings);
    return compareStrings(phraze, strings);
  }

  getMessage() {
    return this.message;
  }

  displaySnackbar() {
    enqueueSnackbar(this.message, { variant: this.variant });
  }
}
