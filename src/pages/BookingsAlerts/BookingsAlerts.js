import { useMemo, } from "react";
import DataTable from "react-data-table-component";
import Typography from "@material-ui/core/Typography";

import getTableCell from './getTableCell';
import useStyles, { customStyles } from "./BookingsAlerts.styles";

const columnOptionData = [
  "Booking REF",
  "Service Type",
  "Unit Price",
  "Invoiced Price",
  "Appointment",
  "Patient Name",
  "Contact",
  "Address",
  "Lab Partner",
  "STATUS ALERT",
];

const data = [
  {
    id: 0,
    "Booking REF": { number: 'DLS00001', date: "14.03.2021 01:15 PM" },
    "Service Type": { number: 'DL102', service: 'COVID 19 RT-PCR Test', isFast: true },
    "Unit Price": { price: 250, pc: 100 },
    "Invoiced Price": 250,
    "Appointment": "15.03.2021 12:00 PM",
    "Patient Name": { number: "DLS00001", name: "Ahmad Izzat Arikat", date: "27/03/1980", sex: 'Male', state: "Lebanan", EID: "784 1973 4908325 9" },
    "Contact": { phone: "00971 58 1157799", email: "ahmad@gmail.com" },
    "Address": { state: "Abu Dhabi", city: 'Al Wahda', street: 'Al Wahda Tower', home: "Flat 1203" },
    "Lab Partner": "LAB002/21 Lab Care",
    "STATUS ALERT": "Exceeded ACCEPTANCE Time",
  },
  {
    id: 1,
    "Booking REF": { number: 'DLS00001', date: "14.03.2021 01:15 PM" },
    "Service Type": { number: 'DL102', service: 'COVID 19 RT-PCR Test', isFast: true },
    "Unit Price": { price: 250, pc: 100 },
    "Invoiced Price": 250,
    "Appointment": "15.03.2021 12:00 PM",
    "Patient Name": { number: "DLS00001", name: "Ahmad Izzat Arikat", date: "27/03/1980", sex: 'Male', state: "Lebanan", passport: "T1090987" },
    "Contact": { phone: "00971 58 1157799", email: "ahmad@gmail.com" },
    "Address": { state: "Abu Dhabi", city: 'Al Wahda', street: 'Al Wahda Tower', room: "Flat 1203" },
    "Lab Partner": "LAB002/21 Lab Care",
    "STATUS ALERT": "Processing",
  },
  {
    id: 2,
    "Booking REF": { number: 'DLS00001', date: "14.03.2021 01:15 PM" },
    "Service Type": { number: 'DL102', service: 'COVID 19 RT-PCR Test', isFast: true },
    "Unit Price": { price: 250, pc: 100 },
    "Invoiced Price": 250,
    "Appointment": "15.03.2021 12:00 PM",
    "Patient Name": { number: "DLS00001", name: "Ahmad Izzat Arikat", date: "27/03/1980", sex: 'Male', state: "Lebanan", passport: "T1090987" },
    "Contact": { phone: "00971 58 1157799", email: "ahmad@gmail.com" },
    "Address": { state: "Abu Dhabi", city: 'Al Wahda', street: 'Al Wahda Tower', room: "Flat 1203" },
    "Lab Partner": "LAB002/21 Lab Care",
    "STATUS ALERT": "Rejected by Partner",
  },
];

export default function BookingsAlerts() {
  const classes = useStyles();

  const columns = useMemo(() =>
    columnOptionData.map((columnOptionItem) => ({
      name: columnOptionItem,
      selector: columnOptionItem,
      cell: (dataItem) => getTableCell(dataItem, columnOptionItem),
    }))
  );

  return (
    <>
      <Typography align="left" variant="h4" className={classes.header}>
        Bookings Alerts
      </Typography>

      <DataTable
        keyField="id"
        columns={columns}
        data={data}
        highlightOnHover
        customStyles={customStyles}
        pagination
      />
    </>
  );
}
