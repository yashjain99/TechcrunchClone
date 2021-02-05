import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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
import {
  IconButton,
  Avatar,
  Button,
  Grid,
  ButtonBase,
  GridList,
  GridListTile,
  Box,
  TextField,
  Container,
} from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";
import clsx from "clsx";

import styles from "./Events.module.css";
import SideBar from "../../SideBar/Components/SideBar";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 288,
    height: 228,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  btn: {
    color: "white",
    // background: "linear-gradient(45deg, limegreen 30%, lime 90%)",
    background: "linear-gradient(to right,#01a663,#03d206)",
    // backgroundColor: "lime",
    height: "50px",
    borderRadius: "0%",
    fontWeight: "bolder",
    width: "140px",
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

export const EventsCard = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [animatedLoader, setAnimatedLoader] = useState(true);

  const handleClick = () => {
    console.log(history);
    history.push("/payment");
  };

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Box>
        <SideBar />
      </Box>
      <Grid>
        <div className={styles.header}>
          {item.header.map((el) => (
            <div className={styles.headertitle}>{el} </div>
          ))}
          <Divider style={{ backgroundColor: "white" }} />
          <br />
          <br />
          <div className={styles.subHeader}>
            <Typography style={{ marginRight: "60px" }}>{item.date}</Typography>
            <Typography>{item.subtitle}</Typography>
          </div>
          <Grid style={{ textAlign: "center" }}>
            <br />
            <Button variant="contained" className={classes.btn}>
              Buy Tickets
            </Button>
          </Grid>
        </div>
      </Grid>
      <br />
      <br />
      <Typography variant="h3" style={{ fontWeight: "900" }} gutterBottom>
        {item.title}{" "}
      </Typography>
      <Divider />
      <br />
      <br />
      <Typography variant="h5" gutterBottom style={{ color: "gray" }}>
        {item.subtitle}{" "}
      </Typography>

      <br />

      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                style={{ fontWeight: "900" }}
              >
                {item.title2}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {item.subtitle2}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={item.avatar2} />
          </ButtonBase>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} src={item.avatar1} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h5"
                style={{ fontWeight: "900" }}
              >
                {item.title1}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {item.subtitle1}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <br />
      <Typography variant="h4" style={{ fontWeight: "900" }} gutterBottom>
        News
      </Typography>
      <Divider style={{ backgroundColor: "lightgray" }} />
      <Divider style={{ backgroundColor: "lightgray" }} />
      <br />
      <GridList className={classes.gridList} cols={3}>
        <GridListTile>
          <Typography variant="h5" gutterBottom style={{ fontWeight: "600" }}>
            {item.news.title}
          </Typography>
          <Typography>{item.news.author}</Typography>
          <Typography variant="caption" gutterBottom>
            {item.news.time}
          </Typography>
        </GridListTile>
        <GridListTile>
          <Typography gutterBottom>{item.news.subtitle}</Typography>
        </GridListTile>
        <GridListTile>
          <img src={item.news.avatar} />
        </GridListTile>
      </GridList>
      <br />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <br />
      <Typography variant="h4" style={{ fontWeight: "900" }} gutterBottom>
        Speakers
      </Typography>
      <GridList className={classes.gridList} cols={2.9}>
        {item.speakers.map((el) => (
          <div className={styles.speakers}>
            {/* <img src={el.avatar} style={{ borderRadius: "50%", width: "90px" }} /> */}
            <Avatar src={el.avatar} className={classes.large} />
            <div>
              <Typography style={{ fontWeight: "900" }} variant="subtitle2">
                {el.name}{" "}
              </Typography>
              <Typography variant="caption">{el.post} </Typography>
            </div>
          </div>
        ))}
      </GridList>
      <br />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <br />
      <Typography variant="h4" style={{ fontWeight: "900" }} gutterBottom>
        Tickets
      </Typography>
      <Typography>
        General Admission tickets are now available to attend this event:
        Justice! Grab yours today!
      </Typography>
      <div style={{ display: "flex" }}>
        {item.tickets.map((el) => (
          <div className={styles.tickets}>
            <h3> {el.title} </h3>
            <h1>{el.price} </h1>
            <div>{el.details} </div>
            <Button
              variant="contained"
              className={classes.btn}
              style={{ margin: "10px 0 0 30px" }}
              onClick={handleClick}
            >
              Buy
            </Button>
          </div>
        ))}
      </div>
      <br />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <br />
      <Typography variant="h4" style={{ fontWeight: "900" }} gutterBottom>
        Speaking Application
      </Typography>
      <Typography gutterBottom>
        TechCrunch editorial is accepting speaker recommendations for TC
        Sessions Justice 2021. There are limited speaking sessions available but
        we always appreciate recommendations that align with our content agenda.
        Applications will be open until January 31, 2021 and we will let all
        applicants know by February 28, 2021
      </Typography>
      <Button variant="contained" className={classes.btn}>
        Apply Now
      </Button>
      <br />

      <br />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <br />
      <Typography variant="h4" style={{ fontWeight: "900" }} gutterBottom>
        Sponsors{" "}
      </Typography>
      <Typography gutterBottom>
        TechCrunch offers many ways for partners to engage directly with our
        attendees and speakers before the show, at the show, and after the show,
        as well as online. If you're interested in learning more about how your
        company can sponsor TC Sessions: Justice, click below to get in touch.
      </Typography>
      <Button variant="contained" className={classes.btn}>
        Find More
      </Button>
      <br />
      <br />
      <Divider style={{ backgroundColor: "black" }} />
      <Divider style={{ backgroundColor: "black" }} />
      <br />
      <Typography variant="h6" style={{ fontWeight: "900" }} gutterBottom>
        Sign Up For More Information
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{ color: "gray" }}>
        {item.subtitle}{" "}
      </Typography>
      <Grid>
        <TextField size="small" label="Email Address:" required />
        <Button
          variant="contained"
          className={classes.btn}
          style={{ height: "45px", marginLeft: "20px" }}
        >
          Sign Up
        </Button>
      </Grid>
      <br />
      <br />
    </Container>
  );
};
