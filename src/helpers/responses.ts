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

export const refNotAttachedResponse = (message?: string) => {
  throw new Response(``, {
    status: 404,
    statusText: `Referance Not Attached: ${message}`,
  });
};

export const noDatabaseDocument = () =>
  new Response(null, {
    status: 404,
    statusText: "No Document Found",
  });
