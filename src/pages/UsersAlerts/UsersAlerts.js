import { useMemo, } from "react";
import DataTable from "react-data-table-component";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { paths } from "../../routes";
import getTableCell from './getTableCell';
import useStyles, { customStyles } from "./UsersAlerts.styles";

const columnOptionData = [
  "ID#",
  "Total Amount",
  "Date",
];

const data = [
  {
    id: 0,
    "ID#": "PV/DL/095/21",
    "Total Amount": 8750,
    "Date": "24/03/2021",
  },
  {
    id: 1,
    "ID#": "PV/DL/095/21",
    "Total Amount": 8750,
    "Date": "24/03/2021",
  },
  {
    id: 2,
    "ID#": "PV/DL/095/21",
    "Total Amount": 8750,
    "Date": "24/03/2021",
  },
];

export default function UsersAlerts() {
  const classes = useStyles();
  const history = useHistory();

  const handleRedirect = () => {
    history.push(paths.definitions.user);
  }

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
        Users Alerts
      </Typography>

      <DataTable
        keyField="id"
        columns={columns}
        data={data}
        highlightOnHover
        customStyles={customStyles}
        onRowClicked={handleRedirect}
        pagination
      />
    </>
  );
}
