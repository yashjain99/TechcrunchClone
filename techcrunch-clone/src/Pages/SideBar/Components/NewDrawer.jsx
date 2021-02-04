import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const moreLinks = [
  {
    link: "Startup Battlefield",
    to: "/startup-battlefield",
  },
  {
    link: "Sponsored Content",
    to: "/sponsoredcontent",
  },
  {
    link: "Include",
    to: "/include",
  },
  {
    link: "Crunchbase",
    to: "/crunchbase",
  },
  {
    link: "Crunchboard",
    to: "/crunchboard",
  },
  {
    link: "Apply to Startup Programs",
    to: "/apply",
  },
  {
    link: "Contact Us",
    to: "/contact",
  },
];

export default function NewDrawer({ open, handleDrawerClose }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div style={{ textAlign: "left", margin: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            style={{ width: "45px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png"
          />
          <CloseIcon
            style={{
              // marginRight: "0px",
              // textAlign: "right",
              fontSize: "35px",
            }}
            onClick={handleDrawerClose}
          />
        </div>
        <br />
        <br />
        {/* <Button onClick={handleDrawerClose}>X</Button> */}
        <Typography style={{ fontWeight: "bold" }}>More TechCrunch</Typography>
      </div>
      {/* <Divider /> */}
      <List>
        {moreLinks.map((text, index) => (
          <ListItem button key={text.link}>
            <NavLink
              style={{
                color: "gray",
                textDecoration: "none",
                fontSize: "18px",
              }}
              to={text.to}
            >
              {text.link}{" "}
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
