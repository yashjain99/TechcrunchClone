import React from "react";
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
} from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import { useState } from "react";

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
}));

export const Modal1 = ({ setOpen, item, price, qty, setQty }) => {
  const classes = useStyles();
  // const [qty, setQty] = useState(1);
  const handleChange = (e) => {
    setQty(e.target.value);
  };
  return (
    <Paper
      style={{
        border: "1px solid gray",
        height: "370px",
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
        <Grid
          style={{
            // border: "1px solid red",
            height: "40px",
            margin: "20px 12px 0px 12px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} sm={7} style={{ marginLeft: "50px" }}></Grid>
            <Grid item xs={6} sm={1}>
              <Typography variant="body1">PRICE</Typography>
            </Grid>
            <Grid item xs={6} sm={1}>
              <Typography variant="body1">TOTAL</Typography>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Typography variant="body1">QTY</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          style={{
            border: "1px solid gray",
            height: "110px",
            margin: "0 12px 30px 12px",
          }}
        >
          <Grid container spacing={3} style={{ marginTop: "2px" }}>
            <Grid item xs={6} sm={7} style={{ marginLeft: "50px" }}>
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
              <Typography variant="caption">
                Includes access to all days of TC Sessions Justice including
                videos on demand and ability to network and hold 1:1 meetings
                with other attendees via CrunchMatch.
              </Typography>
            </Grid>
            <Grid item xs={6} sm={1}>
              <Typography variant="body1">${price}</Typography>
            </Grid>
            <Grid item xs={6} sm={1}>
              <Typography variant="body1">
                ${Number(price) * Number(qty)}
              </Typography>
            </Grid>
            <Grid item xs={10} sm={2}>
              <TextField
                select
                // label="Native select"
                value={qty}
                size="small"
                onChange={handleChange}
                variant="outlined"
              >
                {[1, 2, 3, 4, 5].map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid style={{ textAlign: "right", marginRight: "12px" }}>
          <TextField size="small" label="Promo Code" />
          <Button
            variant="contained"
            className={classes.btn}
            style={{ margin: "9px 0 0 20px" }}
          >
            Apply
          </Button>
        </Grid>
        <br />
        <Grid style={{ textAlign: "right", marginRight: "12px" }}>
          <CreditCardIcon fontSize="large" />
          <Button
            variant="contained"
            className={classes.btn}
            style={{ height: "44px", width: "150px", marginLeft: "20px" }}
            onClick={() => setOpen(true)}
            // onClick={handleOpen}
          >
            Buy Now
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
