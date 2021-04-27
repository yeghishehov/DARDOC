import { useState } from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import useStyles from "./ChangePassword.styles";

export default function UsersAlerts() {
  const classes = useStyles();

  const [form, setForm] = useState({
    userName: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setForm({ 
      userName: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
     });
  }

  return (
    <div className={classes.root}>
      <Typography align="left" variant="h4" className={classes.header}>
        Change Password
      </Typography>
      
      <div className={classes.container}>
        <label className={classes.label}>
          User Name
          <TextField
            variant="outlined"
            value={form.userName}
            onChange={handleChange}
            name="userName"
            size="small"
          />
        </label>
        <label className={classes.label}>
          Old Password
          <TextField
            variant="outlined"
            value={form.oldPassword}
            onChange={handleChange}
            name="oldPassword"
            size="small"
          />
        </label>
        <label className={classes.label}>
          New Password
          <TextField
            variant="outlined"
            value={form.newPassword}
            onChange={handleChange}
            name="newPassword"
            size="small"
          />
        </label>
        <label className={classes.label}>
          Confirm Password
          <TextField
            variant="outlined"
            value={form.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            size="small"
          />
        </label>
      </div>
      <Button
        onClick={handleSubmit}
        variant="outlined"
        className={classes.submit}
      >
        UPDATE
      </Button>
    </div>
  );
}
