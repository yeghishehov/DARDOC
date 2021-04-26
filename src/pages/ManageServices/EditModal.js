// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from "./ManageServices.styles";

export default function EditModal({ dialogOpen, setDialogOpen, editForm, setEditForm }) {
  const classes = useStyles();

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleChangeTable = (e, id) => {
    setEditForm({
      ...editForm,
      table: editForm.table.map((tableItem) => (
        tableItem.id === id
          ? { ...tableItem, [e.target.name]: e.target.value }
          : tableItem
      ))
    })
  };

  const handleAddRow = () => {
    setEditForm({
      ...editForm,
      table: [
        ...editForm.table,
        {
          id: editForm.table.length,
          "Coverage Area": "",
          "Lab Partner": "",
          price: "",
          com: "",
          bufTime: "",
        }
      ],
    })
  }

  if(!editForm) return <div />

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={dialogOpen}
      onClose={handleCloseDialog}
    >
      <DialogContent>
        <div className={classes.modalTopRow}>
          <div className={classes.modalTopColLeft}>
            <label className={classes.label}>
              Service Name
              <TextField
                variant="outlined"
                value={editForm["Service Name"]}
                onChange={handleChange}
                name="Service Name"
                size="small"
              />
            </label>
            <label className={classes.label}>
              Variant
              <TextField
                variant="outlined"
                value={editForm["Variant"]}
                onChange={handleChange}
                name="Variant"
                size="small"
              />
            </label>
            <label className={classes.label}>
              Service Code
              <TextField
                variant="outlined"
                value={editForm["Service Code"]}
                onChange={handleChange}
                name="Service Code"
                size="small"
              />
            </label>
          </div>
          <div className={classes.modalTopColRight}>
            <label className={classes.label}>
              Acceptance
              <TextField
                className={classes.smallInput}
                variant="outlined"
                value={editForm["Acceptance"]}
                onChange={handleChange}
                name="Acceptance"
                size="small"
              />
            </label>
            <label className={classes.label}>
              Deadline
              <TextField
                className={classes.smallInput}
                variant="outlined"
                value={editForm["Deadline"]}
                onChange={handleChange}
                name="Deadline"
                size="small"
              />
            </label>
          </div>
        </div>
        <div className={classes.modalTopRow}>
          <div className={classes.modalTopColLeft}>
            <label className={classes.labelMultiline}>
              Brief Description
              <TextField
                className={classes.multiline}
                variant="outlined"
                value={editForm["Brief Description"]}
                onChange={handleChange}
                name="Brief Description"
                size="small"
                multiline
                rows={4}
              />
            </label>
          </div>
        </div>

        <div className={classes.modalTopRow}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.TableCellHeader}>Area Coverage</TableCell>
                <TableCell className={classes.TableCellHeader}>Lab Partner</TableCell>
                <TableCell align="center" className={classes.TableCellHeader}>Price</TableCell>
                <TableCell align="center" className={classes.TableCellHeader}>DD com%</TableCell>
                <TableCell align="center" className={classes.TableCellHeader}>Buffer Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {editForm.table.map((tableItem) => (
                <TableRow key={tableItem.id}> 
                  <TableCell>
                    <Select
                      variant="outlined"
                      value={tableItem["Coverage Area"]}
                      onChange={(e) => handleChangeTable(e, tableItem.id)}
                      name="Coverage Area"
                      classes={{ root: classes.selectRoot }}
                    >
                      <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
                      <MenuItem value="Dubai">Dubai</MenuItem>
                      <MenuItem value="Sharjah">Sharjah</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      variant="outlined"
                      value={tableItem["Lab Partner"]}
                      onChange={(e) => handleChangeTable(e, tableItem.id)}
                      name="Lab Partner"
                      classes={{ root: classes.selectRoot }}
                    >
                      <MenuItem value="Biogenic Diagnostic Lab">Biogenic Diagnostic Lab</MenuItem>
                      <MenuItem value="Al Enalh Medical Lab-LABCARE">Al Enalh Medical Lab-LABCARE</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      variant="outlined"
                      value={tableItem.price}
                      onChange={(e) => handleChangeTable(e, tableItem.id)}
                      name="price"
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      variant="outlined"
                      InputProps={{
                        endAdornment: <InputAdornment position="start">%</InputAdornment>,
                      }}
                      value={tableItem.com}
                      onChange={(e) => handleChangeTable(e, tableItem.id)}
                      name="com"
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="center">
                    <TextField
                      variant="outlined"
                      value={tableItem.bufTime}
                      onChange={(e) => handleChangeTable(e, tableItem.id)}
                      name="bufTime"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Button onClick={handleAddRow}>+ Add Row</Button>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleCloseDialog} variant="outlined">
          Add
        </Button>
        <Button onClick={handleCloseDialog} variant="outlined">
          Update
        </Button>
        <Button onClick={handleCloseDialog} variant="outlined">
          Delete
        </Button>
        <Button onClick={handleCloseDialog} variant="outlined">
          New
        </Button>
      </DialogActions>
    </Dialog>
  );
}
