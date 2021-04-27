import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  header: {
    marginBottom: 50,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 400,
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    margin: 5,
    width: '100%',
  },
  submit: {
    marginLeft: 182,
  },
}));
