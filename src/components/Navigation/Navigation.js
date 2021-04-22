import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "material-ui-popup-state/HoverPopover";
import {
  usePopupState,
  bindHover,
  bindPopover,
} from "material-ui-popup-state/hooks";

import { useAuthContext } from "../../hooks/auth.provider";
import { getLinks } from "./getLinks";
import logoutImage from "../../assets/logout.png";
import useStyles from "./Navigation.styles";

const MenuItemComponent = ({ link }) => {
  const classes = useStyles();
  const popupState = usePopupState({
    popupId: link.label,
    variant: 'popover',
    deferOpenClose: true,
  });

  return (
    <>
      <ListItem button className={classes.link} {...bindHover(popupState)}>
        {link.icon
          ? (
            <ListItemIcon>
              <img src={link.icon} alt="" className={classes.icon} />
            </ListItemIcon>
          ) : null}
        <ListItemText primary={link.label} />
        {link.leftArrowIcon
          ? (
            <ListItemIcon>
              <img src={link.leftArrowIcon} alt="" className={classes.leftArrowIcon} />
            </ListItemIcon>
          ) : null}
      </ListItem>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{
          paper: classes.popover,
        }}
        disableRestoreFocus
      >
        {link.menuItems.map((item) => (
          item.menuItems
            ? item.menuItems.map((menuItem) => (
               <MenuItemComponent link={menuItem} key={menuItem.id} />
            )) : item.to
              ? (
                <Link to={item.to} className={classes.link} key={item.id}>
                  <MenuItem className={classes.menuItem} onClick={popupState.close}>
                    {item.label}
                  </MenuItem>
                  {item.badge !== undefined ? <div className={classes.badge}>{item.badge}</div> : null}
                </Link>
              ) : (
                <MenuItem className={classes.menuItemDisabled} onClick={popupState.close} key={item.id}>
                  {item.label}
                </MenuItem>
              )
        ))}
      </Popover>
    </>
  );
};

export default function Navigation() {
  const classes = useStyles();
  const { setAuthorized } = useAuthContext();
  const links = getLinks();

  const handleLogOut = () => {
    setAuthorized(false);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <List className={classes.list}>
        {links.map((link) => (
          <MenuItemComponent key={link.id} link={link} />
        ))}
        <ListItem button className={classes.link} onClick={handleLogOut}>
          <ListItemIcon>
            <img src={logoutImage} alt="" className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </Drawer>
  );
}
