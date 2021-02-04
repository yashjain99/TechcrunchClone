import React from 'react';
import {
    Grid,
    Typography,
    CardMedia,
    makeStyles,
    Divider
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    container: {
        padding: "10px",

        "&:hover": {
            filter: "opacity(70%)",
            cursor: "pointer"
        },
        "& p": {
            "&:hover": {
                color: "#016602",
            }
        } 
    },
    headline: {
        color: "#000000",
        fontWeight: "900",
        lineHeight: "20px"
    },
    author: {
        color: "#4c3333",
        fontWeight: "500"
    },
    publishedTime: {
        color: "#6f5b5b",
        lineHeight: "20px"
    },
    newsImage: {
        width: "200px"
    }
})

export function LargeNewsBlock({ news }) {
    const classes = useStyles();

    const history = useHistory();

    const handleNewsRedirect = (id) => {
        // console.log(news)
        history.push(`/news/${id}`)
    }

    return news && news.title && (
        <Grid item container onClick = {() => handleNewsRedirect(news.id) }>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <hr />
            </Grid>
            <Grid item container direction = "row" spacing = {4}  className = {classes.container} >
                <Grid item xl={3} lg={3} md={3} sm={4} xs={11} >
                    <Typography gutterBottom variant="h6" className = {classes.headline} >
                        { news.title }
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" component = "p" className = {classes.author} >
                        { news.author }
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" className = {classes.publishedTime} >
                        { news.publishedAt }
                    </Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                    <Typography gutterBottom variant="subtitle2" className = {classes.publishedTime} >
                        { news.description }
                    </Typography>
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                    <CardMedia
                        component = "img"
                        alt = { news.title }
                        image = { news.urlToImage }
                        className = {classes.newsImage}
                    />
                </Grid>

            </Grid>
        </Grid>
    )
}