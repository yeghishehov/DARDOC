// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useStyles from "./ManageBookings.styles";

export default function EditModal({ dialogOpen, setDialogOpen }) {
  const classes = useStyles();

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={dialogOpen}
      onClose={handleCloseDialog}
    >
      <DialogTitle align="center">Manage</DialogTitle>
      <DialogContent>
        <Button
          variant="outlined"
          onClick={handleCloseDialog}
          style={{ color: "#008690" }}
          className={classes.manageButton}
        >
          Issue Prmo Code % for next service
          <div className={classes.containedPercent}>100%</div>
        </Button>

        <Button
          variant="outlined"
          onClick={handleCloseDialog}
          style={{ color: "#008690" }}
          className={classes.manageButton}
        >
          Refund payment %
          <div className={classes.containedPercent}>100%</div>
        </Button>

        <Button
          variant="outlined"
          onClick={handleCloseDialog}
          style={{ color: "#C00000" }}
          className={classes.manageButton}
        >
          Cancel Booking & fully Refund payment 
        </Button>

        <Button
          variant="outlined"
          onClick={handleCloseDialog}
          style={{ color: "#2E75B6" }}
          className={classes.manageButton}
        >
          Apply Penalty on Partner
          <div className={classes.containedPercent}>50%</div>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
