import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Typography from "@material-ui/core/Typography";

import EditModal from "./EditModal";
import SearchBar from "./SearchBar";
import getTableCell from './getTableCell';
import useStyles, { customStyles } from "./ManageBookings.styles";

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
  "Current STATUS",
  "Performance",
  "Invoice/ Payment Details",
  "Manage Delayed Bookings",
];

const data = [
  {
    id: 0,
    "Booking REF": { number: 'DLS00001', date: "14.03.2021 01:15 PM" },
    "Service Type": { number: 'DL102', service: 'COVID 19 RT-PCR Test', isFast: true },
    "Unit Price": { price: 250, pc: 100 },
    "Invoiced Price": 250,
    "Appointment": "15.03.2021 12:00 PM",
    "Patient Name": { number: "DLS00001", name: "Ahmad Izzat Arikat", date: "27/03/1980", sex: 'Male', state: "Lebanan", passport: "T1090987", EID: "784 1973 4908325 9" },
    "Contact": { phone: "00971 58 1157799", email: "ahmad@gmail.com" },
    "Address": { state: "Abu Dhabi", city: 'Al Wahda', street: 'Al Wahda Tower', home: "Flat 1203" },
    "Lab Partner": "LAB002/21 Lab Care",
    "Current STATUS": "Reported",
    "Performance": "On Time",
    "Invoice/ Payment Details": { number: "DLS00001/21", date: "14.03.2021", price: 250, TRF: "TRF 1232256089", status: "Received" },
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
    "Current STATUS": "Reported",
    "Performance": "Delayed R",
    "Invoice/ Payment Details": { number: "DLS00001/21", date: "14.03.2021", price: 250, TRF: "TRF 1232256089", status: "Received" },
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
    "Current STATUS": "Reported",
    "Performance": "On Time",
    "Invoice/ Payment Details": { number: "DLS00001/21", date: "14.03.2021", price: 250, TRF: "TRF 1232256089", status: "Received" },
  },
];

export default function ManageBookings() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [search, setSearch] = useState({
    LabName: "",
    phone: "",
    bookingDateInterval: "",
    bookingStatus: "",
    city: "",
    invoiceNumber: "",
  });

  const handleClickManage = () => {
    setDialogOpen(true);
  };

  const columns = useMemo(() =>
    columnOptionData.map((columnOptionItem) => ({
      name: columnOptionItem,
      selector: columnOptionItem,
      cell: (dataItem) => getTableCell(dataItem, columnOptionItem, handleClickManage),
    }))
  );

  return (
    <>
      <Typography align="left" variant="h4" className={classes.header}>
        Manage Bookings
      </Typography>

      <SearchBar search={search} setSearch={setSearch} />

      <DataTable
        keyField="id"
        columns={columns}
        data={data}
        highlightOnHover
        customStyles={customStyles}
        pagination
      />

      <EditModal dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} />
    </>
  );
}
