import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    width: "80%",
    background: "transparent",
    display: "flex",
    margin: "20px 0",
  },
  media: {
    height: 140,
  },
  CardActions: {
    display: "flex",
    flexDirection: "column",
    height: "120px",
    justifyContent: "space-around"
  },
  title: {
    color: "white",
    fontWeight: "600",
  },
  btn1: {
    width: "150px",
    height: "45px",
    backgroundColor: "#DDDDDD",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: "#DDDDDD",
    },
  },
  btn2: {
    border: "1px solid black",
    width: "150px",
    height: "45px",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  date: {
    color: "white",
  },
});

export default function EventCard({ data, props }) {
  const classes = useStyles();
  const viewEvent = (id) => {
    console.log(id, props);
    const { history } = props;
    const { url } = props.match;
    // console.log(`${url}/${id}`);
    history.push(`${url}/${id}`);
  };
  return (
    <Card className={classes.root} onClick={() => viewEvent(data.id)}>
      <CardActionArea>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.date}
          >
            {data.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h4"
            className={classes.title}
          >
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Button variant="outlined" className={classes.btn1}>
          Buy Tickets
        </Button>
        <Button variant="outlined" className={classes.btn2}>
          Be a Sponsor
        </Button>
      </CardActions>
    </Card>
  );
}
