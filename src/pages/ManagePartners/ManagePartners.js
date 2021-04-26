import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import EditModal from "./EditModal";
import SearchBar from "./SearchBar";
import excelImage from '../../assets/excel.png';
import useStyles, { customStyles } from "./ManagePartners.styles";

const columnOptionData = [
  "Partner ID",
  "Partner Name",
  "Partner Type",
  "Coverage Area",
  "Full Address",
  "Telephone Number",
  "Manager Name",
  "user name",
  "password",
  "TEAM",
];

const columnOptionDataPartner = [
  "Title",
  "Person Name",
  "Organization",
  "Designation",
  "Mobile No.",
  "Email Address",
  "Nationality",
  "Gender",
  "Languages",
  "Profile",
];

const data = [
  {
    id: 0,
    [columnOptionData[0]]: "Lab 002/21",
    [columnOptionData[1]]: "Dar El Mouasah Lab",
    [columnOptionData[2]]: "Diagnostic Lab",
    [columnOptionData[3]]: "Abu Dhabi",
    [columnOptionData[4]]: "City, detailed address",
    [columnOptionData[5]]: {
      phone: "00971 2 4469664",
      email: "info@labcare.me",
    },
    [columnOptionData[6]]: {
      name: "Fawaz Khatabeal",
      phone: "00971 56 1157799",
      email: "jsaadeh@labcare.com",
    },
    [columnOptionData[7]]: "jihad",
    [columnOptionData[8]]: "4f658H",
    [columnOptionData[8]]: "4f658H",
  },
  {
    id: 1,
    [columnOptionData[0]]: "Lab 002/21",
    [columnOptionData[1]]: "Dar El Mouasah Lab",
    [columnOptionData[2]]: "Diagnostic Lab",
    [columnOptionData[3]]: "Abu Dhabi",
    [columnOptionData[4]]: "City, detailed address",
    [columnOptionData[5]]: {
      phone: "00971 2 4469664",
      email: "info@labcare.me",
    },
    [columnOptionData[6]]: {
      name: "Fawaz Khatabeal",
      phone: "00971 56 1157799",
      email: "jsaadeh@labcare.com",
    },
    [columnOptionData[7]]: "jihad",
    [columnOptionData[8]]: "4f658H",
  },
  {
    id: 2,
    [columnOptionData[0]]: "Lab 002/21",
    [columnOptionData[1]]: "Dar El Mouasah Lab",
    [columnOptionData[2]]: "Diagnostic Lab",
    [columnOptionData[3]]: "Abu Dhabi",
    [columnOptionData[4]]: "City, detailed address",
    [columnOptionData[5]]: {
      phone: "00971 2 4469664",
      email: "info@labcare.me",
    },
    [columnOptionData[6]]: {
      name: "Fawaz Khatabeal",
      phone: "00971 56 1157799",
      email: "jsaadeh@labcare.com",
    },
    [columnOptionData[7]]: "jihad",
    [columnOptionData[8]]: "4f658H",
  },
  {
    id: 4,
    [columnOptionData[0]]: "Lab 002/21",
    [columnOptionData[1]]: "Dar El Mouasah Lab",
    [columnOptionData[2]]: "Diagnostic Lab",
    [columnOptionData[3]]: "Abu Dhabi",
    [columnOptionData[4]]: "City, detailed address",
    [columnOptionData[5]]: {
      phone: "00971 2 4469664",
      email: "info@labcare.me",
    },
    [columnOptionData[6]]: {
      name: "Fawaz Khatabeal",
      phone: "00971 56 1157799",
      email: "jsaadeh@labcare.com",
    },
    [columnOptionData[7]]: "jihad",
    [columnOptionData[8]]: "4f658H",
  },
];

const dataPartner = [
  {
    id: 0,
    [columnOptionDataPartner[0]]: "Mr.",
    [columnOptionDataPartner[1]]: "Samer Masri",
    [columnOptionDataPartner[2]]: "Lab Care",
    [columnOptionDataPartner[3]]: "Lab Technician",
    [columnOptionDataPartner[4]]: "00791 55 6702344",
    [columnOptionDataPartner[5]]: "jsadeh@gmail.com",
    [columnOptionDataPartner[6]]: "Jordan",
    [columnOptionDataPartner[7]]: "Male",
    [columnOptionDataPartner[8]]: "Arabic, English",
  },
  {
    id: 1,
    [columnOptionDataPartner[0]]: "Mr.",
    [columnOptionDataPartner[1]]: "Samer Masri",
    [columnOptionDataPartner[2]]: "Lab Care",
    [columnOptionDataPartner[3]]: "Lab Technician",
    [columnOptionDataPartner[4]]: "00791 55 6702344",
    [columnOptionDataPartner[5]]: "jsadeh@gmail.com",
    [columnOptionDataPartner[6]]: "Jordan",
    [columnOptionDataPartner[7]]: "Male",
    [columnOptionDataPartner[8]]: "Arabic, English",
  },
  {
    id: 2,
    [columnOptionDataPartner[0]]: "Mr.",
    [columnOptionDataPartner[1]]: "Samer Masri",
    [columnOptionDataPartner[2]]: "Lab Care",
    [columnOptionDataPartner[3]]: "Lab Technician",
    [columnOptionDataPartner[4]]: "00791 55 6702344",
    [columnOptionDataPartner[5]]: "jsadeh@gmail.com",
    [columnOptionDataPartner[6]]: "Jordan",
    [columnOptionDataPartner[7]]: "Male",
    [columnOptionDataPartner[8]]: "Arabic, English",
  },
  {
    id: 3,
    [columnOptionDataPartner[0]]: "Mr.",
    [columnOptionDataPartner[1]]: "Samer Masri",
    [columnOptionDataPartner[2]]: "Lab Care",
    [columnOptionDataPartner[3]]: "Lab Technician",
    [columnOptionDataPartner[4]]: "00791 55 6702344",
    [columnOptionDataPartner[5]]: "jsadeh@gmail.com",
    [columnOptionDataPartner[6]]: "Jordan",
    [columnOptionDataPartner[7]]: "Male",
    [columnOptionDataPartner[8]]: "Arabic, English",
  },
];

export default function ManagePartners() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    "Partner ID": "",
    "Partner Name": "",
    "Partner Type": "",
    "Coverage Area": "",
    "Full Address": "",
    "Telephone Number": "",
    "Manager Name": "",
    "user name": "",
    password: "",
    TEAM: "",
  });
  const [search, setSearch] = useState({
    partner: "",
    language: "",
    phone: "",
  });

  const handleOpenEdit = (rowForm) => {
    setEditForm({ ...editForm, ...rowForm });
    setDialogOpen(true);
  };

  const columns = useMemo(() =>
    columnOptionData.map((columnOptionItem) => ({
      name: columnOptionItem,
      selector: columnOptionItem,
      // sortable: true,
      // wrap: true,
      cell: (dataItem) => {
        switch (columnOptionItem) {
          case columnOptionData[0]: return (
            <Typography
              style={{ fontWeight: 600 }}
              align="left"
              onClick={() => handleOpenEdit(dataItem)}
            >
              {dataItem[columnOptionItem]}
            </Typography>
          );
          case columnOptionData[5]: return (
            <div
              style={{ display: "block" }}
              onClick={() => handleOpenEdit(dataItem)}
            >
              <Typography align="left">
                {dataItem[columnOptionItem].phone}
              </Typography>
              <Typography align="left">
                {dataItem[columnOptionItem].email}
              </Typography>
            </div>
          );
          case columnOptionData[6]: return (
            <div
              style={{ display: "block" }}
              onClick={() => handleOpenEdit(dataItem)}
            >
              <Typography align="left">
                {dataItem[columnOptionItem].name}
              </Typography>
              <Typography style={{ whiteSpace: "nowrap" }} align="left">
                {dataItem[columnOptionItem].phone}
              </Typography>
              <Typography align="left">
                {dataItem[columnOptionItem].email}
              </Typography>
            </div>
          );
          case "TEAM": return <Link>View Team</Link>;
          case "password": return (
            <TextField
              type="password"
              value={dataItem[columnOptionItem]}
              InputProps={{ disableUnderline: true }}
              onClick={() => handleOpenEdit(dataItem)}
            />
          );
          default: return (
            <Typography align="left" onClick={() => handleOpenEdit(dataItem)}>
              {dataItem[columnOptionItem]}
            </Typography>
          );
        }
      },
    }))
  );

  const columnsPartner = useMemo(() =>
    columnOptionDataPartner.map((columnOptionItem) => ({
      name: columnOptionItem,
      selector: columnOptionItem,
      // sortable: true,
      wrap: true,
      cell: (dataItem) => (
        columnOptionItem === 'Profile'
          ? <Link>View</Link>
          : (
            <Typography align="left">
              {dataItem[columnOptionItem]}
            </Typography>
          )
      ),
    }))
  );

  return (
    <>
      <Typography align="left" variant="h4" className={classes.header}>
        Manage Partners
      </Typography>

      <Button
        variant="outlined"
        className={classes.exportButton}
        startIcon={<img className={classes.exportButtonIcon} src={excelImage} alt="" />}
      >
        Export
      </Button>

      <DataTable
        keyField="id"
        columns={columns}
        data={data}
        highlightOnHover
        customStyles={customStyles}
        pagination
        onRowClicked={handleOpenEdit}
      />

      <Typography align="left" variant="h5" className={classes.header2}>
        Partners Team Members
      </Typography> 

      <SearchBar search={search} setSearch={setSearch} />

      <DataTable
        keyField="id"
        columns={columnsPartner}
        data={dataPartner}
        // highlightOnHover
        customStyles={customStyles}
        pagination
        // onRowClicked={handleOpenEdit}
      />

      <EditModal
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        editForm={editForm}
        setEditForm={setEditForm}
      />
    </>
  );
}
