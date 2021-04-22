import { Redirect } from "react-router-dom";

import { mainRoutes } from "../routes";
import Navigation from "../components/Navigation";
import { useAuthContext } from "../hooks/auth.provider";
import { paths } from "../routes";
import useStyles from "./page.styles";

export default function Main() {
  const classes = useStyles();
  const { authorized } = useAuthContext();

  if (!authorized) return <Redirect to={paths.login} />;

  return (
    <div className={classes.root}>
      <Navigation />
      <main className={classes.main}>{mainRoutes()}</main>
    </div>
  );
}
