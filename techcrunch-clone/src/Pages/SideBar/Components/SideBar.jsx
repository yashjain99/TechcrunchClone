import React , {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Avatar } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import clsx from "clsx";
import NewDrawer from "./NewDrawer";
import styles from "./SideBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { SearchBar } from "../../SearchBar/Components/SearchBar";
import {getAccountDetails} from "../../AccountDetails/Redux/action.js"

const drawerWidth = 240;

const links = [
  {
    link: "Startups",
    to: "/startup-news",
  },
  {
    link: "Videos",
    to: "/videos",
  },
  {
    link: "Audio",
    to: "/audio",
  },
  {
    link: "Newsletters",
    to: "/newsletters",
  },
  {
    link: "Extra Crunch",
    to: "/extracrunch",
  },
  {
    link: "The TC List",
    to: "/thetcList",
  },
  {
    link: "Advertise",
    to: "/advertise",
  },
  {
    link: "Events",
    to: "/events",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // appBar: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  // },
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
  drawerHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(5, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  contentHeader: {
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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    // marginLeft: "400px",
  },
  sliderDrawerPaper: {
    // width: "300px",
    // marginLeft: "240px",
  },

  // necessary for content1 to be below app bar
  toolbar: theme.mixins.toolbar,
  content1: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flex: 1,
  },
  buttonNavbar: {
    padding: 10,
  },
  searchButton: {
    color: "gray", 
    textDecoration: "none", 
    fontSize: "18px", 
    padding: "10px 0 10px 15px",
    marginTop: "0",
    marginBottom: "0",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f2f2f2"
    }
  },
  clear: {
    color: "#ffffff",
    backgroundColor: "#333333",
    padding: "10px 0 10px 5px",
    width: "100%",
    fontSize: "18px",
    "&:hover": {
      cursor: "pointer",
    }
  },
  logo: {
    width: "50px",
    "&:hover": {
      cursor: "pointer"
    }
  }
}));

export default function SideBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const isAuth = useSelector((state) => state.login.isAuth);
  const userId = useSelector((state) => state.login.userId);
  const userData = useSelector((state) => state.account.userData);
  const [openSearchbar, setOpenSearchbar] = useState(false)

  const dispatch = useDispatch();
  const history = useHistory();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleSearchbar = () => {
    setOpenSearchbar(prev => !prev)
  }

  const redirectToHome = () => {
    history.push("/")
  }

  useEffect(() => {
    dispatch(getAccountDetails(userId))
  },[])

  return (
    <Box display={{ xs: 'none', md: 'block' }}>
    <div className={classes.root} >
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        style={{ position: "absolute" }}
      >
        <div style={{ margin: "20px 0 0 15px", textAlign: "left" }}>
          <img
            className = {classes.logo}
            onClick = { redirectToHome }
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png"
          />
          <br />
          <br />
          <Typography style={{ color: "tomato", fontWeight: "bold" }}>
            Join extra crunch
          </Typography>
          <br />
          {isAuth ? (
            <NavLink
              to={{
                pathname: `/my-account/${userId}`,
              }}
              activeStyle={{ color: "seagreen" }}
              style={{
                color: "gray",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              { userData.firstname }
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              activeStyle={{ color: "seagreen" }}
              style={{
                color: "gray",
                textDecoration: "none",
                fontSize: "18px",
              }}
            >
              Login
            </NavLink>
          )}
        </div>
        <List>
          {
            openSearchbar ? (
              <div>
                <div style = {{display: "flex"}}>
                  <div className = {classes.clear}  onClick = { toggleSearchbar }>
                    Close Search
                  </div>
                  <div className = {classes.clear} style = {{paddingRight: "0px"}} onClick = { toggleSearchbar }  > 
                    X 
                  </div>
                </div>
                <div style = {{width: "100%"}} >
                  <SearchBar suggestionWidth = "100%" />
                </div>
              </div>
            ) : (
              <div className = {classes.searchButton} onClick = { toggleSearchbar }>
                Search
              </div>
            )
          }
          {links.map((text, index) => (
            <ListItem button key={text.link}>
              <NavLink
                activeStyle={{ color: "seagreen" }}
                style={{
                  color: "gray",
                  textDecoration: "none",
                  fontSize: "18px",
                }}
                to={text.to}
              >
                {text.link}
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["More"].map((text, index) => (
            <ListItem style={{ color: "gray" }} button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} onClick={() => setOpen(!open)} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content1}>
        <div className={classes.toolbar} />
      </main>
      <NewDrawer open={open} handleDrawerClose={handleDrawerClose} />
    </div>
    </Box>
  );
}
