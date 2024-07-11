import { ErrorResponse } from "@remix-run/router";

export function notImplemented() {
  throw new ErrorResponse(404, "Not Implemented", {
    message: " This Part of applicaton is stil in development",
  });
}
