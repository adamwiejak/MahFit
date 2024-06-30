import { VariantType, enqueueSnackbar } from "notistack";
import { compareStrings } from "../helpers/functions/functions";

const ERRORS_MAP: Map<any, string> = new Map([
  ["storage/object-not-found", "Item not found in storage"],
  ["auth/email-already-in-use", "Email already in use"],
  ["auth/invalid-email", "Invalid email"],
  ["auth/operation-not-allowed", "Operation not allowed"],
  ["auth/weak-password", "Weak password"],
  ["auth/user-disabled", "User disabled"],
  ["auth/user-not-found", "User not found"],
  ["auth/wrong-password", "Wrong password"],
  ["auth/argument-error", "Argument error"],
  ["auth/app-deleted", "App deleted"],
  ["auth/app-not-authorized", "App not authorized"],
  ["auth/app-not-installed", "App not installed"],
  ["auth/app-not-registered", "App not registered"],
  ["auth/credential-already-in-use", "Credential already in use"],
  ["auth/credential-mismatch", "Credential mismatch"],
]);

function getError(err: any) {
  return ERRORS_MAP.get(err.code) || `Something went wrong, ${err.message}`;
}

export class TaskResponse {
  readonly err: unknown;
  readonly message: string;
  readonly statusCode: number;

  constructor(err: any) {
    this.err = err;
    this.statusCode = err.statusCode || err.status;
    this.message = err.statusText || getError(err);

    this.includes = this.includes.bind(this);
    this.displaySnackbar = this.displaySnackbar.bind(this);
  }

  includes(phraze: string) {
    const phrazeLong = phraze.length;
    const letters = this.message.split("");
    const strings: string[] = [];
    for (let i = 0; i <= letters.length - phrazeLong; i++) {
      strings.push(this.message.substring(i, i + phrazeLong));
    }
    return compareStrings(phraze, strings);
  }

  displaySnackbar(variant?: VariantType) {
    enqueueSnackbar(this.message, { variant });
  }
}
