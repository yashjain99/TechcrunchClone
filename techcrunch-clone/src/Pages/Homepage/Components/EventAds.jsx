import React from 'react';
import {
    Grid,
    makeStyles,
    Typography,
    Button
} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        background: "linear-gradient(to right,#01a663,#03d206)",
        padding: "20px",
        margin: "20px 0"
    },
    headline: {
        color: "#FFFFFF",
        fontWeight: "900"
    },
    date: {
        color: "#FFFFFF",
        lineHeight: "32px"
    },
    description: {
        color: "#FFFFFF",
        lineHeight: "20px"
    },
    BuyNowButton: {
        width: "110px",
        height: "60px",
        color: "#FFFFFF",
        border: "2px solid white",
        borderRadius: "0px"
    }
})

export function EventAds() {
    const classes = useStyles();

    return (
        <Grid item container xl={8} lg={8} md={8} sm={12} xs={12} className = {classes.container} >
            <Grid item container direction = "row" justify = "space-between" >
                <Typography gutterBottom variant="h6" className = {classes.headline} >
                    TC Sessions: Justice 2021
                </Typography>
                <Typography gutterBottom variant="subtitle1" className = {classes.date}>
                    Apr 1-2
                </Typography>
            </Grid>
            <Grid item container direction = "row" justify = "space-between" >
                <Grid item xl={8} lg={8} md={8} sm={8} xs={8} >
                    <Typography gutterBottom variant="subtitle1" className = {classes.description}>
                        Get insights directly from the experts in fundraising,
                        branding, PR and growth management.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant = "outlined" className = {classes.BuyNowButton}>
                        Buy Now
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
