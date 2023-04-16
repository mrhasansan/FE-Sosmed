import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return <h1>Page not found</h1>;
}
