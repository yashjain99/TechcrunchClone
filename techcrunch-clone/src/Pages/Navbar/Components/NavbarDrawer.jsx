import React,{useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchBar } from "../../SearchBar/Components/SearchBar";
import {getAccountDetails} from "../../AccountDetails/Redux/action.js"
import { NavLink, useHistory } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import CloseIcon from "@material-ui/icons/Close";

const drawerWidth = 240;

const links = [
    {
      link: "Startups",
      to: "/startup-news",
    },
    // {
    //   link: "Videos",
    //   to: "/videos",
    // },
    // {
    //   link: "Audio",
    //   to: "/audio",
    // },
    {
      link: "Newsletters",
      to: "/newsletters",
    },
    // {
    //   link: "Extra Crunch",
    //   to: "/extracrunch",
    // },
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
    {
      link: "Startup Battlefield",
      to: "/startup-battlefield",
    }
  ];
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

      },
    
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
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
        marginLeft: 0,
}));



export default function NavbarDrawer({ open, handleDrawerClose }) {
  const classes = useStyles();
  const theme = useTheme();
  const isAuth = useSelector((state) => state.login.isAuth);
  const userId = useSelector((state) => state.login.userId);
  const userData = useSelector((state) => state.account.userData);
  const [openSearchbar, setOpenSearchbar] = useState(false)
 

  const dispatch = useDispatch();
  const history = useHistory();

  const toggleSearchbar = () => {
    setOpenSearchbar(prev => !prev)
  }

  useEffect(() => {
    dispatch(getAccountDetails(userId))
  },[])

  return (
   
    <Drawer
      className={classes.drawer}
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div style={{ textAlign: "left", margin: "20px" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          
          <CloseIcon
            style={{
              fontSize: "35px",
              cursor: "pointer"
            }}
            onClick={handleDrawerClose}
          />
        </div>
        <br />
        <br />
        {/* <Button onClick={handleDrawerClose}>X</Button> */}
        {isAuth ? (
            <NavLink
            onClick={handleDrawerClose}
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
            onClick={handleDrawerClose}
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
              onClick={handleDrawerClose}
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
          {/* {["More"].map((text, index) => (
            <ListItem style={{ color: "gray" }} button key={text}>
              <ListItemText primary={text} onClick={() => setOpen(!open)} />
            </ListItem>
          ))} */}
        </List>
      <Divider />
    </Drawer>
  );
}
