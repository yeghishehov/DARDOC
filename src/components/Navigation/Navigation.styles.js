import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 210;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#008690',
  },
  popover: {
    background: '#008690',
    color: '#fff',
    padding: 10,
  },
  menuItem: {
    marginBottom: 10,
  },
  menuItemDisabled: {
    marginBottom: 10,
    color: '#00000050',
  },
  toolbar: theme.mixins.toolbar,
  list: {
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkNotActive: {
    textDecoration: 'none',
    color: '#fff',
  },
  icon: {
    width: 25,
  },
  leftArrowIcon: {
    width: 15,
    marginLeft: 45,
  },
  badge: {
    background: '#fff',
    width: 30,
    height: 30,
    color: '#008690',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  }
}));
