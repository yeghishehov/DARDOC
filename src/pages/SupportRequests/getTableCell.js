import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { paths } from "../../routes";

export default function getTableCell (dataItem, columnOptionItem, handleClickManage) {
  if(!dataItem || !columnOptionItem) {
    return null
  }
  switch (columnOptionItem) {
    case "Booking REF": return (
      <div style={{ display: "block" }}>
        <Typography align="left">
          {dataItem[columnOptionItem].number}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].date}
        </Typography>
      </div>
    );
    case "Service Type": return (
      <div style={{ display: "block" }}>
        <Typography align="left">
          {dataItem[columnOptionItem].number}
        </Typography>
        <Typography align="left" style={{ color: "#008690" }}>
          {dataItem[columnOptionItem].service}
        </Typography>
        {dataItem[columnOptionItem].isFast
          ? (
            <Typography align="left" style={{ color: "#C00000" }}>
              Fast Track
            </Typography>
          ) : null
        }
      </div>
    );
    case "Unit Price": return (
      <div style={{ display: "block" }}>
        <Typography align="left">
          {`AED${dataItem[columnOptionItem].price}`}
        </Typography>
        <Typography align="left" style={{ color: "#C00000" }}>
          {`PC ${dataItem[columnOptionItem].pc}%`}
        </Typography>
      </div>
    );
    case "Invoiced Price": return (
      <div style={{ display: "block" }}>
        <Typography align="left">
          {`AED${dataItem[columnOptionItem].toFixed(2)}`}
        </Typography>
      </div>
    );
    case "Appointment": return (
      <div style={{ display: "block" }}>
        <Typography align="left">
          {dataItem[columnOptionItem]}
        </Typography>
      </div>
    );
    case "Patient Name": return (
      <div style={{ display: "block" }}>
        <Typography align="left">
          {dataItem[columnOptionItem].number}
        </Typography>
        <Typography align="left" style={{ fontWidth: 'bold' }}>
          {dataItem[columnOptionItem].name}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].date}
          {', '}
          {dataItem[columnOptionItem].sex}
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].state}
        </Typography>
        {dataItem[columnOptionItem].passport
          ? (
            <Typography align="left">
              {`Passport- ${dataItem[columnOptionItem].passport}`}
            </Typography>
          ) : (
            <Typography align="left">
              {`E ID: ${dataItem[columnOptionItem].passport}`}
            </Typography>
          )
        }
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
        </Typography>
        <Typography align="left">
          {dataItem[columnOptionItem].home}
        </Typography>
      </div>
    );
    case "Lab Partner": return (
      <div style={{ display: "block" }}>
        {dataItem[columnOptionItem]
          ? (
            <Typography align="left">
              {dataItem[columnOptionItem]}
            </Typography>
          ) : null
        }
      </div>
    );
    case "STATUS ALERT": return (
      <Link to={paths.bookings.manage} style={{ textDecoration: 'none' }}>
        <div style={{ display: "block" }}>
        {dataItem[columnOptionItem].toLowerCase().includes("require")
          ? (
            <Typography align="left" style={{ color: "#C00000" }}>
              {dataItem[columnOptionItem]}
            </Typography>
          ) : (
            <Typography align="left">
              {dataItem[columnOptionItem]}
            </Typography>
          )
        }
        </div>
      </Link>
    );
    default: return null;
  }
}