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
    height: "100%",
    background: "#FFFFFF",
  },
  media: {
    height: 140,
  },
  CardActions: {
    display: "flex",
    flexDirection: "column",
    height: "120px",
    justifyContent: "space-around",
    background: "#FFFFFF"
  },
  title: {
    color: "#1BB46C",
    fontWeight: "700",
    backgroundColor: "#FFFFFF",
    "@media only screen and (min-width: 600px)": {
      height: "200px"
    },
    "@media only screen and (min-width: 768px)": {
      height: "180px"
    },
    "@media only screen and (min-width: 992px)": {
      height: "200px"
    },
    "@media only screen and (min-width: 1200px)": {
      height: "140px"
    }
  },
  btn1: {
    color: "white",
    width: "150px",
    height: "45px",
    backgroundColor: green[700],
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: green[400],
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
});

export default function FeaturedEvents({ data, props }) {
  const classes = useStyles();
  const viewEvent = (id) => {
    console.log(id, props);
    const { history } = props;
    const { url } = props.match;
    // console.log(`${url}/${id}`);
    history.push(`${url}/${id}`);
  };

  const redirectToSponsorPage = () => {
    const { history } = props;
    history.push("/sponsor")
  }
  return (
    <Card className={classes.root} >
      <CardActionArea onClick={() => viewEvent(data.id)}>
        <CardMedia className={classes.media} image={data.img} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className={classes.title}
          >
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
        <Button variant="outlined" className={classes.btn1} onClick={() => viewEvent(data.id)}>
          Buy Tickets
        </Button>
        <Button variant="outlined" className={classes.btn2}  onClick={ redirectToSponsorPage } >
          Be a Sponsor
        </Button>
      </CardActions>
    </Card>
  );
}
