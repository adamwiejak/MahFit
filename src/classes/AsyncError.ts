import { VariantType } from "notistack";

export class AsyncError {
  variant: VariantType;
  statusCode: number;
  message: string;

  constructor(err: any) {
    this.variant = "warning";
    this.statusCode = err.statusCode;
    this.message = err.message || err.statusTest || "Something went wrong";
    this.includes = this.includes.bind(this);
  }

  includes(phraze: string) {
    return this.message.includes(phraze);
  }
}
