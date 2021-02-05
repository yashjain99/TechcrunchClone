import React, { useEffect, useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import styles from "./login.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getUserSignup,isOpened } from '../redux/action'
import MuiAlert from '@material-ui/lab/Alert';
import { Button, Snackbar, TextField } from "@material-ui/core";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Login = (props) => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUserSignup())
    })
    const isSigned=useSelector(state=>state.login.isSigned)
    const isOpen=useSelector(state=>state.login.isOpen)
    const handleClose=()=>{
        dispatch(isOpened())
    } 
    return (
        <div className = {styles.cont}>
            <div className={{...styles.login_body,...styles.property_content,...styles.body}}>
                <div className={styles.login_box_container}>
                <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="error">
          User is not signed up 
        </Alert>
      </Snackbar>
                    {isSigned?<SignIn/>:<SignUp/>}
                </div>
                <div className={styles.property_container}> 
                <img src="./Login.png" alt="banner"/>
                </div>
            </div>
        </div>
    )
}

export default Login
