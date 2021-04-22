import { Redirect } from "react-router-dom";

import { mainRoutes } from "../routes";
import Navigation from "../components/Navigation";
import { useAuthContext } from "../hooks/auth.provider";
import { paths } from "../routes";

export default function Main() {
  const { authorized } = useAuthContext();

  if(!authorized) return <Redirect to={paths.login} />;

  return (
    <>
      <Navigation />
      <main>{mainRoutes()}</main>
    </>
  );
}
