import React from 'react';
import {Dialog, DialogTitle, DialogActions, Button, IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme =>({
  root: {
    width: "400px !important",
    height: "200px"
  },
  button:{
    margin: "auto"
  }
   
}))

export const DialogBox = ({handleClose, open}) =>{
    const classes = useStyles()
    const history = useHistory()
    const handleLoginRoute = ()=>{
        history.push("/login")
    }
    return(
      <div className={classes.root}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle>
          {"Please login to comment"}
          <IconButton onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
        </DialogTitle>
        
        <DialogActions className={classes.button}>
          <Button onClick={handleLoginRoute} color="primary" variant="contained" autoFocus>
            Login / Create Account
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}