import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { paths } from "../../routes";

export default function getTableCell (dataItem, columnOptionItem) {
  if(!dataItem || !columnOptionItem) {
    return null
  }
  switch (columnOptionItem) {
    case "Identification": return (
      <div style={{ display: "block" }}>
        <Typography align="left" style={{ fontWeight: "bold" }}>
          {dataItem[columnOptionItem].name}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].birthday}
          {', '}
          {dataItem[columnOptionItem].sex}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].state}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].passport
            ? `Passport- ${dataItem[columnOptionItem].passport}`
            : `E ID: ${dataItem[columnOptionItem].EID}`
          }
        </Typography>
      </div>
    );
    case "Contact": return (
      <div style={{ display: "block" }}>
        <Typography align="left">
          {dataItem[columnOptionItem].phone}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].email}
        </Typography>
      </div>
    );
    case "Address": return (
      <div style={{ display: "block" }}>
        <Typography align="left">
          {dataItem[columnOptionItem].state}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].city}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].street}
          {', '}
          {dataItem[columnOptionItem].home}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].details}
        </Typography>
      </div>
    );
    case 'Manage': return (
      <div style={{ display: "block" }}>
        <Link to={paths.bookings.manage}>
          View Transactions
        </Link>
      </div>
    );
    default: return null;
  }
}