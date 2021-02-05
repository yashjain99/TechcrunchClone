import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import { NavLink, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Popover from "@material-ui/core/Popover";

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
} from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";

import { Pin } from "./Pin";
import { useDispatch, useSelector } from "react-redux";
import { addEventDetails } from "../Redux/action";

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
    margin: "25px",
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
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

export const Modal2 = ({ qty, item, price }) => {
  const classes = useStyles();
  const [pin, setPin] = useState("");
  const [otp, setOtp] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const userData = useSelector((state) => state.account.userData);
  // console.log(userData);

  const handleSubmit = () => {
    const payload = {
      title: item.title,
      price: price,
    };
    dispatch(addEventDetails(payload, userData.id));
    history.push(`/my-account/${userData.id}`);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {/* <h2 id="simple-modal-title">Text in a modal</h2> */}
      <p id="simple-modal-description">Payment Successful.</p>
      {/* <SimpleModal /> */}
      <Button
        variant="contained"
        className={classes.btn}
        style={{
          height: "40px",
          width: "100px",
          margin: "30px 10px 10px 10px",
          fontWeight: "600",
        }}
        onClick={handleSubmit}
      >
        Got it
      </Button>
    </div>
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBack = () => {
    history.goBack();
  };

  const handleOtp = () => {
    setOtp(true);
  };
  console.log(pin);

  return (
    <Box>
      {/* <Button
        variant="outlined"
        className={classes.btn}
        onClick={handleBack}
        style={{ height: "44px", width: "150px" }}
      >
        Back
      </Button> */}
      <Paper
        style={{
          border: "1px solid black",
          // height: "300px",
          width: "95%",
          margin: "auto",
          backgroundColor: "#E8E8E8",
        }}
      >
        <Grid>
          <AppBar
            style={{ backgroundColor: "seagreen", height: "40px" }}
            position="static"
          >
            <Toolbar>
              <Typography variant="body1" className={classes.title1}>
                Order Summary
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid
            style={{
              // border: "1px solid red",
              height: "40px",
              margin: "0px 12px 0px 12px",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6} sm={5} style={{ marginLeft: "50px" }}>
                <Typography variant="caption">TICKET TYPE</Typography>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography variant="caption">PRICE</Typography>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography variant="caption">QTY</Typography>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography variant="caption">SUBTOTAL</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            style={{
              border: "1px solid gray",
              height: "40px",
              margin: "0 12px 18px 12px",
            }}
          >
            <Grid container spacing={2} style={{ marginTop: "0.3px" }}>
              <Grid item xs={6} sm={5} style={{ marginLeft: "50px" }}>
                <Typography
                  variant="caption"
                  style={{
                    fontWeight: "700",
                  }}
                  gutterBottom
                >
                  General Admission Ticket
                </Typography>
                <br />
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography variant="caption"> ${price} </Typography>
              </Grid>
              <Grid item xs={6} sm={2}>
                <Typography variant="caption"> {qty} </Typography>
              </Grid>
              <Grid item xs={10} sm={2}>
                <Typography variant="caption">
                  {" "}
                  ${Number(price) * Number(qty)}{" "}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Divider />
        </Grid>
      </Paper>
      <br />
      <Divider variant="middle" />
      <br />
      <Paper
        style={{
          border: "1px solid gray",
          // height: "300px",
          width: "95%",
          margin: "auto",
          backgroundColor: "#E8E8E8",
        }}
      >
        <Grid>
          <AppBar
            style={{ backgroundColor: "seagreen", height: "40px" }}
            position="static"
          >
            <Toolbar>
              <Typography variant="body1" className={classes.title1}>
                {item && item.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid style={{ marginLeft: "10px" }}>
            <form noValidate autoComplete="off">
              <TextField
                label="Name"
                type="text"
                name="name"
                margin="normal"
                variant="outlined"
                required
                // autoFocus
                size="small"
              />
              <Grid style={{ display: "flex" }}>
                <Pin
                  len={4}
                  boxLen={5}
                  setOtp={setOtp}
                  onChange={(val) => setPin(val)}
                />
                {pin.length == 16 ? (
                  <TextField
                    label="Enter OTP"
                    type="number"
                    name="otp"
                    margin="normal"
                    variant="outlined"
                    required
                    size="small"
                    style={{ marginTop: "23px" }}
                  />
                ) : null}
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid style={{ display: "flex" }}>
          <Checkbox defaultChecked color="primary" />
          <Typography variant="caption" style={{ marginTop: "15px" }}>
            By checking this box, you also agree to all TechCrunch Terms &
            Conditions and TC's Event Terms & Conditions.
          </Typography>
        </Grid>
        <Button
          variant="contained"
          className={classes.btn}
          style={{
            height: "40px",
            width: "120px",
            margin: "0 0 10px 10px",
            fontWeight: "600",
          }}
          onClick={handleOpen}
        >
          Buy Now
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </Paper>
    </Box>
  );
};
