import { LoaderFunctionArgs } from "react-router-dom";
import { TaskResponse } from "../classes/TaskResponse";

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
// export const noUser = "User Not Found In Database. You Will Be Logout.";

export const noDocumentResponse = new Response(null, {
  status: 404,
  statusText: "No Document Found",
});

export const noColectionResponse = new Response(null, {
  status: 404,
  statusText: "No Colection Found",
});
