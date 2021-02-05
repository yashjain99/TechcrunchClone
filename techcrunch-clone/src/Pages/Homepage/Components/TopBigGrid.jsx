import React from 'react';
import { SmallNewsBlock } from './SmallNewsBlock';
import { useHistory } from "react-router-dom";
import {
    Grid,
    Typography,
    CardMedia,
    makeStyles,
    Divider
} from "@material-ui/core";

const useStyles = makeStyles({
    headline: {
        color: "#000000",
        fontWeight: "900",
        
        "&:hover": {
            cursor: "pointer"
        }
    },
    author: {
        color: "#4c3333",
        fontWeight: "500",
        
        "&:hover": {
            color: "#016602",
            cursor: "pointer"
        }
    },
    svgExtraCrunchImage: {
        fill: "#e6b74a"
    },
    extraCrunchText: {
        color: "#e6b74a",
        lineHeight: "20px",
        float: "left"
    },
    marginRightBottom30FilterOpacity: {
        marginRight: "30px",
        marginBottom: "25px",

        "&:hover": {
            filter: "opacity(70%)"
        }
    },
    cursorPointer: {
        "&:hover": {
            cursor: "pointer"
        }
    },
    filterOpacity: {
        "&:hover": {
            filter: "opacity(70%)"
        }
    }
})

export function TopBigGrid({ newsOne, newsTwo, newsThree, newsFour, newsFive }) {
    const classes = useStyles();
    const history = useHistory();

    const handleNewsRedirect = (id) => {
        // console.log(news)
        history.push(`/news/${id}`)
    }

    return newsOne.title && (
        <Grid item container direction = "row">
            <Grid item xl={5} lg={5} md={6} sm={7} xs={11} className = {classes.marginRightBottom30FilterOpacity} onClick = {() => handleNewsRedirect(newsOne.id)} >
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
                    className = {classes.cursorPointer} 
                />
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={4} xs={11} container >
                <Grid item >
                    <svg style = {{width: "15px", height: "20px", paddingTop: "3px", float: "left"}} >
                        <path className = { classes.svgExtraCrunchImage } d="M0 12.667V3.333h2.333v2.334H7V8H2.333v2.333H7v2.334H0zM2.333 1H7v2.333H2.333V1z"></path>
                    </svg>
                    <Typography gutterBottom variant="h6" className = {classes.extraCrunchText} >
                        Extra Crunch
                    </Typography>
                </Grid>
                <Grid item>
                    <SmallNewsBlock handleNewsRedirect = { handleNewsRedirect } news = { newsTwo } />
                    <hr />
                </Grid>
                <Grid item>
                    <SmallNewsBlock handleNewsRedirect = { handleNewsRedirect } news = { newsThree } />
                    <hr />
                </Grid>
                <Grid item>
                    <SmallNewsBlock handleNewsRedirect = { handleNewsRedirect } news = { newsFour } />
                    <hr />
                </Grid>
                <Grid item>
                    <SmallNewsBlock handleNewsRedirect = { handleNewsRedirect } news = { newsFive } />
                </Grid>
            </Grid>
        </Grid>
    )
}