import React from "react";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import { NavLink, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Grid,
  GridList,
  GridListTile,
  Paper,
  TextField,
  Modal,
  Box,
  Divider,
  Checkbox,
  Button,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Container,
} from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { useState } from "react";
import { Modal1 } from "./Modal1";
import { Modal2 } from "./Modal2";
import CloseIcon from "@material-ui/icons/Close";
import SideBar from "../../SideBar/Components/SideBar";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  title1: {
    flexGrow: 1,
    marginBottom: "25px",
  },
  register: {
    margin: "18px",
    textAlign: "center",
    color: "gray",
  },
  btn: {
    color: "white",
    background: "linear-gradient(45deg, limegreen 30%, lime 90%)",
    height: "35px",
    borderRadius: "0%",
    width: "90px",
  },
  modalPaper: {
    position: "absolute",
    width: 900,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  container: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "start",
    marginLeft: "230px",
    // marginTop: "20px",
    // marginRight: "310px",
    maxWidth: "890px",
  },
}));
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
export default function PaymentPage() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const body = (
  //   <div style={modalStyle} className={classes.modalPaper}>
  //     <PaymentFinal />
  //   </div>
  // );
  console.log("open", open);
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Box>
        <SideBar />
      </Box>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Event Title
          </Typography>
          <NavLink
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button color="inherit">Home</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Typography variant="h6" className={classes.register}>
        Register Now
      </Typography>

      {open ? <Modal2 /> : <Modal1 setOpen={setOpen} />}

      {/* <Modal open={open} onClose={handleClose}>
        {body}
      </Modal> */}
    </Container>
  );
}
