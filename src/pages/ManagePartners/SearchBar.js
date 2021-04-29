import TextField from "@material-ui/core/TextField";
// import Typography from "@material-ui/core/Typography";
import excelImage from '../../assets/excel.svg';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./ManagePartners.styles";

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
                  Partner Name
                  <Select
                    variant="outlined"
                    value={search.partner}
                    onChange={handleSearch}
                    name="partner"
                    classes={{ root: classes.selectRoot }}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="Partner 1">Partner 1</MenuItem>
                    <MenuItem value="Partner 2">Partner 2</MenuItem>
                    <MenuItem value="Partner 3">Partner 3</MenuItem>
                  </Select>
                </label>
              </TableCell>
              <TableCell
                align="center"
                className={classes.TableCellNoBorder}
              >
                <label className={classes.searchBarLabel}>
                  Language
                  <TextField
                    variant="outlined"
                    value={search.language}
                    onChange={handleSearch}
                    name="language"
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
                  Mobile Number
                  <TextField
                    variant="outlined"
                    value={search.phone}
                    onChange={handleSearch}
                    name="phone"
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
