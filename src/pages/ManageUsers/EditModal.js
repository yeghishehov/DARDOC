import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from "./ManageUsers.styles";

const table = [
  { id: 0, category: 'Dar Lab Dashboards', permissions: [
    { id: 11, name: "Page Access" }
  ] },
  { id: 1, category: 'Manage Bookings', permissions: [
    { id: 12, name: "Page Access" }, 
    { id: 13, name: "Manage Delayed Booking" }
  ] },
  { id: 2, category: 'Users Data Base', permissions: [
    { id: 14, name: "Page Access" }
  ] },
  { id: 3, category: 'Manage Partners', permissions: [
    { id: 15, name: "Page Access/ view only" },
    { id: 16, name: "Add new partner" },
    { id: 17, name: "Edit partner details" },
    { id: 18, name: "Delete partner" },
    { id: 19, name: "Change partner status (Active & Inactive)" },
    { id: 111, name: "View Partners Team members" },
  ] },
  { id: 4, category: 'Manage Services', permissions: [
    { id: 112, name: "Page Access/ view only" },
    { id: 113, name: "Add new service" },
    { id: 114, name: "Update service details" },
    { id: 115, name: "Delete service" },
  ] },
  { id: 5, category: 'Manage Payment Order', permissions: [
    { id: 116, name: "Page Access/ view only" },
    { id: 117, name: "Extract Excel list" },
    { id: 118, name: "Print List" },
    { id: 119, name: "Generate payment order" },
    { id: 1111, name: "Print payment order" },
  ] },
  { id: 6, category: 'Verify Payment order', permissions: [
    { id: 1112, name: "Page Access" },
    { id: 1113, name: "Approve payment order" },
    { id: 1114, name: "Reject payment order" },
  ] },
];

export default function EditModal({ dialogOpen, setDialogOpen, editForm, setEditForm }) {
  const classes = useStyles();

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleChangeTable = (e, permissionId) => {
    setEditForm({ ...editForm, [permissionId]: e.target.checked })
  };

  if(!editForm) return <div />
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={dialogOpen}
      onClose={handleCloseDialog}
    >
      <DialogContent>
        <div className={classes.modalTopRow}>
          <label className={classes.label}>
            User Name
            <TextField
              variant="outlined"
              value={editForm.userName}
              onChange={handleChange}
              name="userName"
              size="small"
            />
          </label>
          <label className={classes.label}>
            Password
            <TextField
              variant="outlined"
              value={editForm.password}
              onChange={handleChange}
              name="password"
              size="small"
            />
          </label>
          <label className={classes.label}>
            Status
            <Select
              variant="outlined"
              value={editForm.status}
              onChange={handleChange}
              name="status"
              classes={{ root: classes.selectRoot }}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Active..">....</MenuItem>
              <MenuItem value="Active...">....</MenuItem>
            </Select>
          </label>
        </div>

        <div className={classes.modalTopRow}>
          <DialogTitle>Add Permissions</DialogTitle>
          <Table className={classes.table} size="small">
            <TableBody>
              {table.map((tableItem) => (
                <TableRow key={tableItem.id} className={classes.tableRow}> 
                  <TableCell align="left">
                    <div className={classes.row}>
                      <Typography className={classes.permissionName}>{tableItem.category}</Typography>
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    {tableItem.permissions.map((permission) => (
                      <div className={classes.row} key={permission.id}>
                        <Typography className={classes.permissionName}>
                          {permission.name}
                        </Typography>
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {tableItem.permissions.map((permission) => (
                      <div className={classes.row} key={permission.id}>
                        <Checkbox
                          checked={editForm[permission.id]}
                          onChange={(e) => handleChangeTable(e, permission.id)}
                        />
                      </div>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
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
