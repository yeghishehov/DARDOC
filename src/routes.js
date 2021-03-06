import { Switch, Route } from "react-router-dom";

import Main from "./pages";
import Login from "./pages/Login";
import Dashboards from "./pages/Dashboards";
import ManagePartners from "./pages/ManagePartners";
import ManageServices from "./pages/ManageServices";
import ManageBookings from "./pages/ManageBookings";
import UserDataBase from "./pages/UserDataBase";
import BookingsAlerts from "./pages/BookingsAlerts";
import SupportRequests from "./pages/SupportRequests";
import UsersAlerts from "./pages/UsersAlerts";
import ChangePassword from "./pages/ChangePassword";
import ManageUsers from "./pages/ManageUsers";
import Settings from "./pages/Settings";

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
    <Route exact path={paths.partners} component={ManagePartners} />
    <Route exact path={paths.services} component={ManageServices} />
    <Route exact path={paths.bookings.manage} component={ManageBookings} />
    <Route exact path={paths.bookings.userData} component={UserDataBase} />
    <Route exact path={paths.notifications.bookings} component={BookingsAlerts} />
    <Route exact path={paths.notifications.support} component={SupportRequests} />
    <Route exact path={paths.notifications.user} component={UsersAlerts} />
    <Route exact path={paths.definitions.password} component={ChangePassword} />
    <Route exact path={paths.definitions.user} component={ManageUsers} />
    <Route exact path={paths.definitions.settings} component={Settings} />
  </Switch>
);
