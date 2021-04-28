import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { paths } from "../../routes";

export default function getTableCell (dataItem, columnOptionItem) {
  if(!dataItem || !columnOptionItem) {
    return null
  }
  switch (columnOptionItem) {
    case "Total Amount": return (
      <Link to={paths.definitions.user} style={{ textDecoration: 'none' }}>
        <div style={{ display: "block" }}>
          <Typography align="left" style={{ fontWeight: "bold" }}>
            {`AED${dataItem[columnOptionItem]}`}
          </Typography>
        </div>
      </Link>
    );
    default: return (
      <Link to={paths.definitions.user} style={{ textDecoration: 'none' }}>
        <div style={{ display: "block" }}>
          <Typography align="left">
            {dataItem[columnOptionItem]}
          </Typography>
        </div>
      </Link>
    );
  }
}