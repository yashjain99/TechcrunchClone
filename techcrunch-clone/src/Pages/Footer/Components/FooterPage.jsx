import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import styled from "styled-components";

const Trial=styled.div`

&:hover{
    text-decoration:underline;
    cursor: pointer;
    
  }

`
const Colorchange=styled.div`

&:hover{
    color:red
    
  }

`

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "left",
    color: theme.palette.text.secondary,
    cursor: "default"
   
  },
 
heading: {
    fontWeight: "bold"
  },
 text:{
   marginTop:"20px"
 }
}));

export default function FooterPage() {
  const classes = useStyles();

  return (
    <>
   
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3} lg={2}>
          <Paper className={classes.paper} elevation={0}>
         
            <span className={classes.heading}>About</span>
            <br /><br/>
           <Trial>
            <span className={classes.pointer}>Tech Crunch</span></Trial>
            <br />
            <Trial>
            <span  >Staff</span>
            </Trial>
            <br />
            <Trial>
            <span>Contact Us</span>
           </Trial>
            <br />
            <Trial>
            <span>Advertise</span>
          </Trial>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} lg={2}>
          <Paper className={classes.paper} elevation={0}>
            <span className={classes.heading}>Legal</span>
            <br /><br/>
            <Trial>
            <span>PrivacyPolicy</span>
            </Trial>
            <br/>
            <Trial>
<span>Terms Of Service</span>
</Trial>
            <br />
            <Trial>
            <span>Extra Crunch</span>
           </Trial>
           
            <br />
            <Trial>
            <span>Terms</span>
            </Trial>
            <br />
            <Trial>
            <span>Code Of conduct</span>
            </Trial>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} lg={2}>
          <Paper className={classes.paper} elevation={0}>
            <span className={classes.heading}>Read Anywhere</span>
            <br /><br/>
<Trial>
            <span>App Store</span></Trial>            <br />
           <Trial> <span>Google Play</span></Trial>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} lg={2}>
          <Paper className={classes.paper} elevation={0}>
            <span className={classes.heading}>International</span>
            <br /><br/>
           <Trial> <span>Japan</span></Trial>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} lg={2}>
          <Paper className={classes.paper} elevation={0}>
            <h4>
              <FacebookIcon /><Trial> Facebook</Trial>
            </h4>
            <h4>
              <LinkedInIcon /><Trial> LinkedIn</Trial>
            </h4>
            <h4>
              <TwitterIcon /><Trial> Twitter</Trial>
            </h4>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3} lg={2}>
          <Paper className={classes.paper} elevation={0}>
          
         
          <h4 >
            <YouTubeIcon/>
            <Trial>
           YouTube
           </Trial>
          </h4 >
                    <h4 >
          <Colorchange>  <InstagramIcon /></Colorchange>
            <Trial>Instagram</Trial>
          </h4>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </>
  );
}
