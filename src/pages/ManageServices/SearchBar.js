import TextField from "@material-ui/core/TextField";
// import Typography from "@material-ui/core/Typography";
import excelImage from '../../assets/excel.png';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import useStyles from "./ManageServices.styles";

export default function SearchBar({ search, setSearch }) {
  const classes = useStyles();

  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  if (!search) return <div />;
  return (
    <div className={classes.searchBar}>
      {/* <Typography variant="h5">Search bar</Typography> */}
      <div className={classes.searchBarTable}>
        <Table className={classes.table} size="small">
          <TableBody>
            <TableRow> 
              <TableCell
                align="center"
                className={classes.TableCellNoBorder}
              >
                <label className={classes.searchBarLabel}>
                  Service Code
                  <TextField
                    className={classes.searchBarInput}
                    variant="outlined"
                    value={search["Service Code"]}
                    onChange={handleSearch}
                    name="Service Code"
                    size="small"
                    type="search"
                  />
                </label>
              </TableCell>
              <TableCell
                align="center"
                className={classes.TableCellNoBorder}
              >
                <label className={classes.searchBarLabel}>
                  Area
                  <TextField
                    className={classes.searchBarInput}
                    variant="outlined"
                    value={search.Area}
                    onChange={handleSearch}
                    name="Area"
                    size="small"
                    type="search"
                  />
                </label>
              </TableCell>
              <TableCell
                align="center"
                className={classes.TableCellNoBorder}
              >
                <label className={classes.searchBarLabel}>
                  Test Name
                  <TextField
                    className={classes.searchBarInput}
                    variant="outlined"
                    value={search.Name}
                    onChange={handleSearch}
                    name="Name"
                    size="small"
                    type="search"
                  />
                </label>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell className={classes.TableCellNoBorder} />
              <TableCell className={classes.TableCellNoBorder} />
              <TableCell align="right" className={classes.TableCellNoBorder}>
                <Button
                  variant="outlined"
                  startIcon={
                    <img
                      className={classes.exportButtonIcon}
                      src={excelImage}
                      alt=""
                    />
                  }
                >
                  Export
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
