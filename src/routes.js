import { Switch, Route } from "react-router-dom";

import Main from "./pages";
import Login from "./pages/Login";
import Dashboards from "./pages/Dashboards";

export const paths = {
  home: "/",
  login: "/login",
  // dashboards: "/dashboards",
  bookings: { manage: '/bookings/manage', userData: '/bookings/userdata' },
  partners: '/partners',
  services: '/services',
  accounting: { 
    payment: {
      manage: '/accounting/payment/manage',
      verify: '/accounting/payment/verify',
    },
    statement: '/accounting/statement',
    manage: '/accounting/manage',
  },
  notifications: { bookings: '/notifications/bookings', support: '/notifications/support', user: '/notifications/user' },
  definitions: { settings: '/definitions/settings', user: '/definitions/user', password: '/definitions/password'},
};

export const routes = () => (
  <Switch>
    <Route exact path={paths.login} component={Login} />
    <Route path={paths.home} component={Main} />
  </Switch>
);

export const mainRoutes = () => (
  <Switch>
    <Route exact path={paths.home} component={Dashboards} />
  </Switch>
);
