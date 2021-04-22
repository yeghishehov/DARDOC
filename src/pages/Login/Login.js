import { useState } from "react";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useAuthContext } from "../../hooks/auth.provider";
import { paths } from "../../routes";
import logoImg from "../../assets/logo.png";
import useStyles from "./Login.styles";

export default function Login() {
  const classes = useStyles();
  const { authorized, setAuthorized } = useAuthContext();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => setAuthorized(true);

  if(authorized) return <Redirect to={paths.home} />

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <img src={logoImg} alt="" className={classes.logo} />
        <Typography variant="body2" className={classes.header}>
          Healthcare Anytime, Anywhere
        </Typography>

        <FormLabel component="label" className={classes.formLabel}>
          <div className={classes.label}>User Name</div>
          <TextField
            variant="outlined"
            value={form.username}
            name="username"
            onChange={handleChange}
            className={classes.textField}
            size="small"
          />
        </FormLabel>
        <FormLabel component="label" className={classes.formLabel}>
          <div className={classes.label}>Password</div>
          <TextField
            variant="outlined"
            value={form.password}
            name="password"
            onChange={handleChange}
            className={classes.textField}
            size="small"
          />
        </FormLabel>
        <Button
          variant="contained"
          className={classes.button}
          onClick={handleLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
