import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import EditModal from "./EditModal";
import useStyles, { customStyles } from "./ManageUsers.styles";

const columnOptionData = [
  "ID",
  "User Name",
  "Password",
  "Status",
];

const data = [
  {
    ID: 1,
    "User Name": "Samer",
    Password: "adsf45",
    Status: "Active",
  },
  {
    ID: 2,
    "User Name": "Keswin",
    Password: "adsf45",
    Status: "Active",
  },
  {
    ID: 3,
    "User Name": "Aditya",
    Password: "adsf45",
    Status: "Active",
  },
];

export default function ManageUsers() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    userName: '',
    password: '',
    status: '',
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    111: false,
    112: false,
    113: false,
    114: false,
    115: false,
    116: false,
    117: false,
    118: false,
    119: false,
    1111: false,
    1112: false,
    1113: false,
    1114: false,
  });

  const handleOpenEdit = (rowForm) => {
    setEditForm({
      ...editForm,
      userName: rowForm["User Name"],
      password: rowForm.Password,
      status: rowForm.Status,
    });
    setDialogOpen(true);
  };

  const columns = useMemo(() =>
    columnOptionData.map((columnOptionItem) => ({
      name: columnOptionItem,
      selector: columnOptionItem,
      cell: (dataItem) => {
        switch (columnOptionItem) {
          case 'Password': return (
            <div
              style={{ display: "block" }}
              onClick={() => handleOpenEdit(dataItem)}
            >
              <TextField
                type="password"
                value={dataItem[columnOptionItem]}
                InputProps={{ disableUnderline: true }}
              />
            </div>
          );
          default: return (
            <Typography
              align="left"
              onClick={() => handleOpenEdit(dataItem)}
            >
              {dataItem[columnOptionItem]}
            </Typography>
          );
        }
      },
    }))
  );

  return (
    <>
      <Typography align="left" variant="h4" className={classes.header}>
        Manage Users
      </Typography>

      <DataTable
        keyField="ID"
        columns={columns}
        data={data}
        highlightOnHover
        customStyles={customStyles}
        pagination
        onRowClicked={handleOpenEdit}
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
