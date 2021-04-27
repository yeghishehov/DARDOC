import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Typography from "@material-ui/core/Typography";

import EditModal from "./EditModal";
import SearchBar from "./SearchBar";
import useStyles, { customStyles } from "./ManageServices.styles";

const columnOptionData = [
  "Service Code",
  "Name",
  "Variant",
  "Deadline",
  "Area",
  "Price",
];

const data = [
  {
    id: 0,
    [columnOptionData[0]]: "DL 101",
    [columnOptionData[1]]: "COVID 19 RT Test",
    [columnOptionData[2]]: "Fast Track: Result within 12-24 hours",
    [columnOptionData[3]]: "24 hours",
    areaPrice: [{ state: 'Abu Dhabi', price: 300 }, { state: 'Dubai', price: 350 }],
  },
  {
    id: 1,
    [columnOptionData[0]]: "DL 101",
    [columnOptionData[1]]: "COVID 19 RT Test",
    [columnOptionData[2]]: "Fast Track: Result within 12-24 hours",
    [columnOptionData[3]]: "24 hours",
    areaPrice: [{ state: 'Abu Dhabi', price: 300 }, { state: 'Dubai', price: 350 }],
  },
  {
    id: 2,
    [columnOptionData[0]]: "DL 101",
    [columnOptionData[1]]: "COVID 19 RT Test",
    [columnOptionData[2]]: "Fast Track: Result within 12-24 hours",
    [columnOptionData[3]]: "24 hours",
    areaPrice: [{ state: 'Abu Dhabi', price: 300 }, { state: 'Dubai', price: 350 }],
  },
  {
    id: 3,
    [columnOptionData[0]]: "DL 101",
    [columnOptionData[1]]: "COVID 19 RT Test",
    [columnOptionData[2]]: "Fast Track: Result within 12-24 hours",
    [columnOptionData[3]]: "24 hours",
    areaPrice: [{ state: 'Abu Dhabi', price: 300 }, { state: 'Dubai', price: 350 }],
  }
];

export default function ManageServices() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    "Service Name": "",
    Variant: "",
    "Service Code": "",
    "Brief Description": "",
    Acceptance: "",
    Deadline: "",
    table: [
      { id: 0, "Coverage Area": 'Abu Dhabi', "Lab Partner": 'Biogenic Diagnostic Lab', price: 300, com: 25, bufTime: 1 },
      { id: 1, "Coverage Area": 'Dubai', "Lab Partner": 'Al Enalh Medical Lab-LABCARE', price: 350, com: 20, bufTime: 1 },
      { id: 2, "Coverage Area": 'Sharjah', "Lab Partner": 'Al Enalh Medical Lab-LABCARE', price: 350, com: 20, bufTime: 1 },
    ]
  });
  const [search, setSearch] = useState({
    "Service Code": "",
    Name: "",
    Area: "",
  });

  const handleOpenEdit = (rowForm) => {
    setEditForm({
      ...editForm,
      "Service Name": rowForm.Name,
      Variant: rowForm.Variant,
      "Service Code": rowForm["Service Code"],
      Acceptance: 1,
      Deadline: rowForm.Deadline,
      table: rowForm.areaPrice.map((item, index) => ({
        id: index,
        "Coverage Area": item.state,
        "Lab Partner": 'Biogenic Diagnostic Lab',
        price: item.price,
        com: 25,
        bufTime: 1,
      })),
    });
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
          case columnOptionData[4]: return (
            <div
              style={{ display: "block" }}
              onClick={() => handleOpenEdit(dataItem)}
            >
              {dataItem.areaPrice.map((item) => (
                <Typography key={item.state} align="left">
                  {item.state}
                </Typography>
              ))}
            </div>
          );
          case columnOptionData[5]: return (
            <div
              style={{ display: "block" }}
              onClick={() => handleOpenEdit(dataItem)}
            >
              {dataItem.areaPrice.map((item) => (
                <Typography key={item.price} align="left">
                  {item.price}
                </Typography>
              ))}
            </div>
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

  return (
    <>
      <Typography align="left" variant="h4" className={classes.header}>
        Manage Services
      </Typography>

      <SearchBar search={search} setSearch={setSearch} />

      <DataTable
        keyField="id"
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
