import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Divider,
    makeStyles,
    FormGroup,
    FormControlLabel,
    Checkbox,
    createMuiTheme,
    TextField,
    Button,
    CircularProgress
} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#00a562",
        }
    },
  });

const useStyles = makeStyles({
    headline: {
        color: "#000000",
        fontWeight: "900",
        lineHeight: "20px"
    },
    InputText: {
        width: "250px"
    },
    SubmitButton: {
        width: "110px",
        height: "48px",
        color: "#FFFFFF",
        borderRadius: "0px",
        backgroundColor: "#000000",

        "&:hover": {
            backgroundColor: "#000000"
        }
    },
    marginBottom20: {
        marginBottom: "20px"
    },
    marginTop10: {
        marginTop: "10px"
    }
})

export function NewsletterSignUp() {
    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        
        setTimeout(() => {
            setSubmit(true);
            setLoading(false)
        },2000)

    }

    return (
        <ThemeProvider theme = {theme}>
            <Grid item container direction = "column" spacing = {3} className = {classes.marginBottom20} >
                <Grid item xl={8} lg={8} md={8} sm={12} xs={12} >
                    <Divider />
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="h6" className = {classes.headline} >
                        Sign up for Newsletters
                    </Typography>
                </Grid>
                <Grid item>
                    <form onSubmit = { handleSubmit }>
                        <FormGroup>
                            <Grid container>
                                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                                    <FormControlLabel 
                                        control = {<Checkbox color = "primary" /> }
                                        label = "The Daily Crunch"
                                    />
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                                    <FormControlLabel 
                                        control = {<Checkbox color = "primary" /> }
                                        label = "Week in Review"
                                    />
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                                    <FormControlLabel 
                                        control = {<Checkbox color = "primary" /> }
                                        label = "Startups Weekly"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                                    <FormControlLabel 
                                        control = {<Checkbox color = "primary" /> }
                                        label = "Event Updates"
                                    />
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                                    <FormControlLabel 
                                        control = {<Checkbox color = "primary" /> }
                                        label = "Human Capital"
                                    />
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                                    <FormControlLabel 
                                        control = {<Checkbox color = "primary" /> }
                                        label = "Sponsorship Insider"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                                    <FormControlLabel 
                                        control = {<Checkbox color = "primary" /> }
                                        label = "Extra Crunch Announcements"
                                    />
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                                    <FormControlLabel 
                                        control = {<Checkbox color = "primary" /> }
                                        label = "Extra Crunch Events"
                                    />
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={4} xs={11}>
                                    <FormControlLabel 
                                        control = {<Checkbox color = "primary" /> }
                                        label = "Extra Crunch Roundups"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container spacing = {2} className = {classes.marginTop10} >
                                <Grid item xl={3} lg={3} md={3} sm={5} xs={8}>
                                    <TextField 
                                        type = "email"
                                        label="Email"
                                        required
                                        value = { email }
                                        onChange = {(e) => setEmail(e.target.value) }
                                        className = {classes.InputText}
                                    />
                                </Grid>
                                <Grid item xl={3} lg={3} md={3} sm={2} xs={4}>
                                    <Button type = "submit" className = {classes.SubmitButton}>
                                        Subscribe
                                    </Button>
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </form>
                </Grid>
                {
                    submit ? (
                        <Grid item>
                            <Typography gutterBottom variant="subtitle2" color = "primary" >
                                Congratulations! You've been subscribed.
                            </Typography>
                        </Grid>
                    ) : ""
                }
                {
                    loading ? (
                        <CircularProgress color = "primary" />
                    ) : ""
                }
            </Grid>
        </ThemeProvider>
    )
}
