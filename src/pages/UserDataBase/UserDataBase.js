import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Typography from "@material-ui/core/Typography";

import SearchBar from "./SearchBar";
import getTableCell from './getTableCell';
import useStyles, { customStyles } from "./UserDataBase.styles";

const columnOptionData = [
  "Identification",
  "Contact",
  "Address",
  "Manage",
];

const data = [
  {
    id: 0,
    "Identification": { name: 'Ahmad Izzat Arikat', birthday: "27/03/1980", sex: 'Male', state: 'Lebanon', passport: 'T1090987' },
    "Contact": { phone: '00971 56 1157799', email: 'ahmad@gmail.com' },
    "Address": { state: "Abu Dhabi", city: "Al Wahda", street: "Al Wahda Tower", home: "Flat 1203", details: "" },
  },
  {
    id: 1,
    "Identification": { name: 'Ahmad Izzat Arikat', birthday: "27/03/1980", sex: 'Male', state: 'Lebanon', EID: '784 1973 4908325 9' },
    "Contact": { phone: '00971 56 1157799', email: 'ahmad@gmail.com' },
    "Address": { state: "Abu Dhabi", city: "Al Reem Island", street: "Sea View Tower", home: "G Floor", details: "V12" },
  },
  {
    id: 2,
    "Identification": { name: 'Ahmad Izzat Arikat', birthday: "27/03/1980", sex: 'Male', state: 'Lebanon', EID: '784 1973 4908325 9' },
    "Contact": { phone: '00971 56 1157799', email: 'ahmad@gmail.com' },
    "Address": { state: "Abu Dhabi", city: "Al Reem Island", street: "Sea View Tower", home: "G Floor", details: "V12" },
  },
];

export default function ManageBookings() {
  const classes = useStyles();
  const [search, setSearch] = useState({
    name: "",
    idType: "",
    idNumber: "",
    phone: "",
    ageFrom: "",
    ageTo: "",
  });

  const columns = useMemo(() =>
    columnOptionData.map((columnOptionItem) => ({
      name: columnOptionItem === 'Manage' ? '' : columnOptionItem,
      selector: columnOptionItem,
      cell: (dataItem) => getTableCell(dataItem, columnOptionItem),
    }))
  );

  return (
    <>
      <Typography align="left" variant="h4" className={classes.header}>
        User Data Base
      </Typography>

      <SearchBar search={search} setSearch={setSearch} />

      <DataTable
        keyField="id"
        title="Customer Information"
        columns={columns}
        data={data}
        highlightOnHover
        customStyles={customStyles}
        pagination
      />
    </>
  );
}
