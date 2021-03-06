import React, { useState } from "react";
import styles from "./login.module.css";
import { Button, Snackbar, TextField } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import clsx from "clsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { isAuth, notOpened, signUp } from "../redux/action";
import {   AlertTitle } from '@material-ui/lab';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: "350px",
  },
}));
const ColorButton = withStyles((theme) => ({
  root: {
    width: "350px",
    color: "#fff",
    backgroundColor: green[700],
    "&:hover": {
      backgroundColor: green[400],
    },
  },
}))(Button);
const SignIn = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const history = useHistory();
  const userData = useSelector((state) => state.login.userData);
  const dispatch = useDispatch();
  

  const handleLogin = () => {
    const checkUser = userData.find((item) => item.email == email);
    // console.log(checkUser);
    if (checkUser) {
      dispatch(isAuth(checkUser.id))
      history.push("/");
    } else {
      dispatch(notOpened())
      dispatch(signUp());
      
    }
  };
   
  const handleSignUp=()=>{
    dispatch(signUp())
  }
  return (
    <div className={styles.login_box}>
        
      <div className={styles.login_head}>
        <img
          style={{ marginLeft: "180px" }}
          src="https://s.yimg.com/wm/assets/images/ns/techcrunch-logov0.0.2.png"
          alt="TechCrunch"
          width="70"
        />
      </div>
      <div className={styles.challenge}>
        <h2 className={styles.challenge_heading} style={{ marginTop: 50 }}>
          Sign In
        </h2>

        <div>
          <TextField
            label="Email Address"
            name="email"
            className={clsx(classes.margin, classes.textField)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
            onClick={handleLogin}
          >
            Login
          </ColorButton>
          <div style={{ display: "flex" }}>
            <FormControlLabel
              control={<GreenCheckbox checked={true} name="checked" />}
              label="Stay Signed In"
            />
            <div
              style={{
                color: "green",
                marginTop: "8px",
                marginLeft: "40px",
                fontSize: "15px",
              }}
            >
              Forget Username?
            </div>
          </div>
          <button className={styles.btn} onClick={handleSignUp}>Create an account</button>
          <p style={{ fontSize: "15px", color: "grey" }}>or, continue with</p>
          <div className={classes.margin}>
            <Button variant="outlined" className={classes.margin}>
              Yahoo
            </Button>
            <Button variant="outlined" className={classes.margin}>
              Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
