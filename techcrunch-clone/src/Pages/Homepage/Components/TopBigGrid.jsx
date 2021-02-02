import React from 'react';
import {
    Grid,
    Box,
    Typography,
    CardMedia,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
    headline: {
        color: "#000000",
        fontWeight: "900"
    },
    author: {
        color: "#4c3333",
        fontWeight: "500"
    },
    svgExtraCrunchImage: {
        fill: "#e6b74a"
    },
    extraCrunchText: {
        color: "#e6b74a",
        lineHeight: "20px",
        float: "left"
    }
})

export function TopBigGrid({ newsOne, newsTwo, newsThree, newsFour, newsFive }) {
    const classes = useStyles();

    return (
        <Grid item container direction = "row" spacing = {3} >
            <Grid item xl={5} lg={5} md={6} sm={7} xs={11}>
                <Typography gutterBottom variant="h4" className = {classes.headline} >
                    { newsOne.title}
                </Typography>
                <Typography gutterBottom variant="body2" className = {classes.author} >
                    { newsOne.author }
                </Typography>
                <CardMedia
                    component = "img"
                    alt = { newsOne.title }
                    height = "300"
                    image = { newsOne.urlToImage }
                />
            </Grid>
            <Grid item>
                <svg style = {{width: "20px", height: "30px", paddingTop: "3px", float: "left"}} >
                    <path className = { classes.svgExtraCrunchImage } d="M0 12.667V3.333h2.333v2.334H7V8H2.333v2.333H7v2.334H0zM2.333 1H7v2.333H2.333V1z"></path>
                </svg>
                <Typography gutterBottom variant="h6" className = {classes.extraCrunchText} >
                    Extra Crunch
                </Typography>
            </Grid>
        </Grid>
    )
}
