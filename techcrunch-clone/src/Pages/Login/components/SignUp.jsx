import React, { useState } from "react";
import styles from "./login.module.css";
import { Button, Grid,  TextField } from "@material-ui/core";
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import {useDispatch} from "react-redux"
import { addUserSignup, signIn } from "../Redux/action";

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
        width: '25ch',
      }, 
  }));
  const ColorButton = withStyles((theme) => ({
    root: {
        width:"350px", 
        color: "#fff",
      backgroundColor: green[700],
      '&:hover': {
        backgroundColor: green[400],
      },
    },
  }))(Button);
const SignUp = (props) => {
    const classes=useStyles()
    const dispatch=useDispatch()
  const [state,setState]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"1234",
    birthyear:""
  })

  const handleChange=(e)=>{
    const {value,name}=e.target
    setState((prevstate)=>({
        ...prevstate,
        [name]:value
    }))
  }
  const hanldeSignup=()=>{
     dispatch(addUserSignup(state))
  }
  const handleSignIn=()=>{
    dispatch(signIn())
  }
  return (
    <div className={styles.login_box}>
      <div className={styles.login_head}>
        <img style={{marginLeft:"180px"}}
          src="https://s.yimg.com/wm/assets/images/ns/techcrunch-logov0.0.2.png"
          alt="TechCrunch"
          width="70"
        />
      </div>
      <div className={styles.challenge}>
        <div className={styles.challenge_header}>Hi, there!</div>
        <h2 className={styles.challenge_heading}>Create an account</h2>
         
           <div className={clsx(classes.margin, classes.textField)}>
               <Grid container spacing={1} alignItems="flex-end" >
                   <Grid item><AccountBoxOutlinedIcon/></Grid>
                   <Grid item><TextField label="Firstname" name="firstname" value={state.firstname} onChange={handleChange}  /></Grid>
               </Grid>
           </div>
           <div className={clsx(classes.margin, classes.textField)}>
               <Grid container spacing={1} alignItems="flex-end">
                   <Grid item><AccountBoxOutlinedIcon/></Grid>
                   <Grid item><TextField label="Lastname" name="lastname" value={state.lastname} onChange={handleChange}/></Grid>
               </Grid>
           </div>
           <div className={clsx(classes.margin, classes.textField)}>
               <Grid container spacing={1} alignItems="flex-end">
                   <Grid item><MailOutlineIcon/></Grid>
                   <Grid item><TextField label="Email Address" name="email" value={state.email} onChange={handleChange}/></Grid>
               </Grid>
           </div>
           <div  >
               <Grid container spacing={1} alignItems="flex-end">
                   <Grid item><CakeOutlinedIcon/></Grid>
                   <Grid item><TextField label="Birth Year" name="birthyear" value={state.birthyear} onChange={handleChange}/></Grid>
               </Grid>
           </div>
           <p className={styles.secondary_text}>By clicking "Next", you agree to the <span className={styles.span_color}>Terms</span> and <span className={styles.span_color}>Privacy Policy</span> to create a TechCrunch account</p>
         <ColorButton variant="contained" color="primary" className={classes.margin} onClick={hanldeSignup}>Sign Up</ColorButton>
         <div className={styles.secondary_text}><span className={styles.span_color} onClick={handleSignIn}>Sign in</span> or continue with</div>
         <div className={classes.margin} >
             <Button variant="outlined" className={classes.margin}>Yahoo</Button>
             <Button variant="outlined" className={classes.margin}>Google</Button>
         </div>
      </div>
    </div>
  );
};

export default SignUp;
