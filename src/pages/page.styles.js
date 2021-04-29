import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 210;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  main: {
    width: `calc(100% - ${drawerWidth}px)`,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
    boxSizing: 'border-box',
  },
}));
