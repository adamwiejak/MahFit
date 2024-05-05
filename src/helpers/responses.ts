import { LoaderFunctionArgs } from "react-router-dom";

export const invalidRouteResponse = (args: LoaderFunctionArgs) => {
  const path = args.request.url
    .split("/")
    .filter((_, idx) => idx > 2)
    .join("/");

  throw new Response(`Error: No route matches URL "/${path}"`, {
    status: 404,
    statusText: "Not Found",
  });
};

export const unmachedPasswords = "Passwords do not match";
export const noDocument = "No Document Found";
export const noUser = "User Not Found In Database. You Will Be Logout.";
