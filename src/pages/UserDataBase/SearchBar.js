import TextField from "@material-ui/core/TextField";
import excelImage from '../../assets/excel.svg';
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import useStyles from "./UserDataBase.styles";

export default function SearchBar({ search, setSearch }) {
  const classes = useStyles();

  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  if (!search) return <div />;

  return (
    <div className={classes.searchBar}>
      <div className={classes.searchBarTable}>
        <Table className={classes.table} size="small">
          <TableBody>
            <TableRow> 
              <TableCell
                align="center"
                className={classes.TableCellNoBorder}
              >
                <label className={classes.searchBarLabel}>
                  Name
                  <TextField
                    variant="outlined"
                    value={search.name}
                    onChange={handleSearch}
                    name="name"
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
                  ID Type
                  <TextField
                    variant="outlined"
                    value={search.idType}
                    onChange={handleSearch}
                    name="idType"
                    size="small"
                    type="search"
                  />
                </label>
              </TableCell>
              <TableCell
                align="center"
                className={classes.TableCellNoBorder}
              >
                <label className={classes.searchBarLabelAgeWrapper}>
                  Age range
                  <label className={classes.searchBarLabelAge}>
                    From
                    <TextField
                      variant="outlined"
                      value={search.ageFrom}
                      onChange={handleSearch}
                      name="ageFrom"
                      size="small"
                      type="search"
                      className={classes.inputAge}
                    />
                  </label>
                  <label className={classes.searchBarLabelAge}>
                    To
                    <TextField
                      variant="outlined"
                      value={search.ageTo}
                      onChange={handleSearch}
                      name="ageTo"
                      size="small"
                      type="search"
                      className={classes.inputAge}
                    />
                  </label>
                </label>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                align="center"
                className={classes.TableCellNoBorder}
              >
                <label className={classes.searchBarLabel}>
                  ID Number
                  <TextField
                    variant="outlined"
                    value={search.idNumber}
                    onChange={handleSearch}
                    name="idNumber"
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
