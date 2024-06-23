import { VariantType, enqueueSnackbar } from "notistack";
import { compareStrings } from "../helpers/functions/functions";

const FIREBASE_ERRORS_MAP: Map<any, string> = new Map([
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
  [undefined, "Something Went Wrong"],
]);

type TaskResponseOption = { variant: VariantType; statusCode: number };

export class TaskResponse {
  readonly message: string;
  readonly statusCode: number;
  private variant: VariantType;

  constructor(err: any, options?: Partial<TaskResponseOption>) {
    this.variant = options?.variant || "warning";
    this.statusCode = options?.statusCode || err.statusCode || err.status;
    this.message = err.statusText || FIREBASE_ERRORS_MAP.get(err.code);

    this.includes = this.includes.bind(this);
    this.displaySnackbar = this.displaySnackbar.bind(this);
  }

  setVariant(variant: VariantType) {
    this.variant = variant;
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

  displaySnackbar() {
    enqueueSnackbar(this.message, { variant: this.variant });
  }
}
