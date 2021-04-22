import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    background: "#008690",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 20,
    border: "1px solid #77BEC4",
  },
  logo: {
    width: 140,
    height: 200,
  },
  header: {
    marginTop: -20,
    color: "#fff",
    marginBottom: 30,
  },
  formLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
  },
  label: {
    color: "#008690",
    background: "#fff",
    padding: '13px 5px',
    width: 90,
    fontSize: 14,
  },
  textField: {
    marginLeft: 10,
    background: "#fff",
  },
  button: {
    marginTop: 10,
  },
}));
