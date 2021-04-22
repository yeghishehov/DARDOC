import accountingImage from "../../assets/accounting.png";
import bookingsImage from "../../assets/bookings.png";
import dashboardsImage from "../../assets/dashboards.png";
import definitionsImage from "../../assets/definitions.png";
import notificationsImage from "../../assets/notifications.png";
import partnersImage from "../../assets/partners.png";
import reportsImage from "../../assets/reports.png";
import servicesImage from "../../assets/services.png";
import leftArrowImage from "../../assets/leftArrow.png";
import { paths } from "../../routes";

export const getLinks = () => [
  {
    id: 0,
    icon: dashboardsImage,
    label: "Dashboards",
    menuItems: [
      { id: "01", to: paths.home, label: "Dar Lab Dashboards" },
      { id: "02", label: "Dar Nurse Dashboards" },
      { id: "03", label: "Dar Telehealth Dashboards" },
    ],
  },
  {
    id: 1,
    icon: bookingsImage,
    label: "Bookings",
    menuItems: [
      { id: 11, to: paths.bookings.manage, label: "Manage Bookings" },
      { id: 12, to: paths.bookings.userData, label: "Users Data Base" },
    ],
  },
  {
    id: 2,
    icon: partnersImage,
    label: "Partners",
    menuItems: [{ id: 21, to: paths.partners, label: "Manage Partners" }],
  },
  {
    id: 3,
    icon: servicesImage,
    label: "Services",
    menuItems: [{ id: 31, to: paths.services, label: "Manage Services" }],
  },
  {
    id: 4,
    icon: accountingImage,
    label: "Accounting",
    menuItems: [
      {
        id: 41,
        menuItems: [
          {
            id: 411,
            label: "Payment Order",
            leftArrowIcon: leftArrowImage, 
            menuItems: [
              {
                id: 4111,
                label: "Manage Payment Order",
                to: paths.accounting.payment.manage,
              },
              {
                id: 4112,
                to: paths.accounting.payment.verify,
                label: "Verify Payment Order",
              },
            ]
          },
        ],
      },
      { id: 42, to: paths.accounting.statement, label: "Account Statement" },
      { id: 43, to: paths.accounting.manage, label: "Manage Invoices" },
    ],
  },
  {
    id: 5,
    icon: reportsImage,
    label: "Reports",
    menuItems: [
      { id: 51, label: "System Reports" },
      { id: 52, label: "Partner KPIs Reports" },
    ],
  },
  {
    id: 6,
    icon: notificationsImage,
    label: "Notifications",
    menuItems: [
      {
        id: 61,
        to: paths.notifications.bookings,
        label: "Bookings Alerts",
        badge: 3,
      },
      {
        id: 62,
        to: paths.notifications.support,
        label: "Support Requests",
        badge: 1,
      },
      { id: 63, to: paths.notifications.user, label: "User Alerts", badge: 2 },
    ],
  },
  {
    id: 7,
    icon: definitionsImage,
    label: "Definitions",
    menuItems: [
      { id: 61, to: paths.definitions.settings, label: "DarDoc Settings" },
      { id: 62, to: paths.definitions.user, label: "Manage Users" },
      { id: 63, to: paths.definitions.password, label: "Change Password" },
    ],
  },
];
