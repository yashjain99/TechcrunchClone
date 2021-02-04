import React from 'react';
import {
    Box,
    Typography,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
    headline: {
        color: "#000000",
        fontWeight: "900",
        lineHeight: "20px",
        marginTop: "10px",

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
    filterOpacity: {
        "&:hover": {
            filter: "opacity(70%)"
        }
    }
})

export function SmallNewsBlock({ news }) {
    const classes = useStyles();

    return (
        <Box className = { classes.filterOpacity } >
            <Typography gutterBottom variant="h6" className = {classes.headline}>
                { news.title }
            </Typography>
            <Typography gutterBottom variant="subtitle2" className = {classes.author}>
                { news.author }
            </Typography>
        </Box>
    )
}
