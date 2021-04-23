import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "./ManagePartners.styles";

export default function EditModal({ dialogOpen, setDialogOpen, editForm, setEditForm }) {
  const classes = useStyles();

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  if(!editForm) return <div />

  return (
    <Dialog
      maxWidth="xs"
      fullWidth
      open={dialogOpen}
      onClose={handleCloseDialog}
    >
      <DialogContent>
        <label className={classes.label}>
          Partner Type
          <Select
            variant="outlined"
            value={editForm["Partner Type"]}
            onChange={handleChange}
            name="Partner Type"
            classes={{ root: classes.selectRoot }}
          >
            <MenuItem value="Diagnostic Lab">Diagnostic Lab</MenuItem>
            <MenuItem value="DarDoc Lab">DarDoc Lab</MenuItem>
            <MenuItem value="Lab">Lab</MenuItem>
          </Select>
        </label>
        <label className={classes.label}>
          Name
          <TextField
            variant="outlined"
            value={editForm["Partner Name"]}
            onChange={handleChange}
            name="Partner Name"
            size="small"
          />
        </label>
        <DialogTitle>Address</DialogTitle>
        <label className={classes.label}>
          City
          <Select
            variant="outlined"
            value={editForm["Full Address"]}
            onChange={handleChange}
            name="Full Address"
            classes={{ root: classes.selectRoot }}
          >
            <MenuItem value="Abu Dhabai">Sharjah</MenuItem>
            <MenuItem value="Dubai">Dubai</MenuItem>
            <MenuItem value="Sharjah">Sharjah</MenuItem>
            <MenuItem value="Ajman">Ajman</MenuItem>
            <MenuItem value="Aj Ain">Aj Ain</MenuItem>
            <MenuItem value="Fujairah">Fujairah</MenuItem>
            <MenuItem value="Ras Al Khaima">Ras Al Khaima</MenuItem>
            <MenuItem value="Um Al Quwain">Um Al Quwain</MenuItem>
          </Select>
        </label>
        <label className={classes.label}>
          Location Details
          <TextField
            className={classes.multiline}
            variant="outlined"
            value={editForm["location details"]}
            onChange={handleChange}
            name="location details"
            size="small"
            multiline
            rows={5}
          />
        </label>
        <DialogTitle />
        <label className={classes.label}>
          P.O.Box
          <TextField
            variant="outlined"
            value={editForm["box"]}
            onChange={handleChange}
            name="box"
            size="small"
          />
        </label>
        <label className={classes.label}>
          Land line
          <TextField
            variant="outlined"
            value={editForm["land"]}
            onChange={handleChange}
            name="land"
            size="small"
          />
        </label>
        <label className={classes.label}>
          Fax
          <TextField
            variant="outlined"
            value={editForm["fax"]}
            onChange={handleChange}
            name="fax"
            size="small"
          />
        </label>
        <label className={classes.label}>
          Email
          <TextField
            variant="outlined"
            value={editForm["Email"]}
            onChange={handleChange}
            name="Email"
            size="small"
          />
        </label>
        <label className={classes.label}>
          Status
          <TextField
            variant="outlined"
            value="ACTIVE"
            onChange={handleChange}
            name="Status"
            size="small"
            InputProps={{
              className: classes.inputColor,
            }}
          />
        </label>
        <div
          style={{
            border: "1px solid #000",
            display: "flex",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <Typography>Opening hours</Typography>
          <div>
            <label className={classes.label}>
              Open
              <TextField
                variant="outlined"
                // value="ACTIVE"
                // onChange={handleChange}
                // name="Status"
                size="small"
                InputProps={{
                  className: classes.inputWidth,
                }}
              />
            </label>
            <label className={classes.label}>
              Close
              <TextField
                variant="outlined"
                // value="ACTIVE"
                // onChange={handleChange}
                // name="Status"
                size="small"
                InputProps={{
                  className: classes.inputWidth,
                }}
              />
            </label>
            <label className={classes.label}>
              Off Day/s
              <TextField
                variant="outlined"
                // value="ACTIVE"
                // onChange={handleChange}
                // name="Status"
                size="small"
                InputProps={{
                  className: classes.inputWidth,
                }}
              />
            </label>
          </div>
        </div>

        <DialogTitle>Manager Details</DialogTitle>
        <label className={classes.label}>
          Title
          <TextField
            variant="outlined"
            value={editForm["Title"]}
            onChange={handleChange}
            name="Title"
            size="small"
          />
        </label>
        <label className={classes.label}>
          First Name
          <TextField
            variant="outlined"
            value={editForm["First Name"]}
            onChange={handleChange}
            name="First Name"
            size="small"
          />
        </label>
        <label className={classes.label}>
          Last Name
          <TextField
            variant="outlined"
            value={editForm["Last Name"]}
            onChange={handleChange}
            name="Last Name"
            size="small"
          />
        </label>
        <label className={classes.label}>
          Mobile No
          <TextField
            variant="outlined"
            value={editForm["Mobile No"]}
            onChange={handleChange}
            name="Mobile No"
            size="small"
          />
        </label>
        <label className={classes.label}>
          Email
          <TextField
            variant="outlined"
            value={editForm["Manager Email"]}
            onChange={handleChange}
            name="Manager Email"
            size="small"
          />
        </label>
        <DialogTitle />
        <label className={classes.label}>
          username
          <TextField
            variant="outlined"
            value={editForm["user name"]}
            onChange={handleChange}
            name="user name"
            size="small"
          />
        </label>
        <label className={classes.label}>
          password
          <TextField
            variant="outlined"
            value={editForm["password"]}
            onChange={handleChange}
            name="password"
            size="small"
          />
        </label>
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
