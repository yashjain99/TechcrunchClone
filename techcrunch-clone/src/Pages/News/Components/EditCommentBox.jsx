import React from 'react';
import {Dialog, DialogTitle, DialogActions, Button, IconButton, DialogContent, Typography, TextField} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
  root: {
    width: "400px !important"
  },
  button:{
    margin: "auto"
  }
   
}))

export const EditCommentBox = ({open, handleChange, handleClose, handleEditComment, commentText,id}) =>{
    const classes = useStyles()
    return(
      <div className={classes.root}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle>
          {"Edit comment"}
          <IconButton onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
        </DialogTitle>
        <DialogContent>
            <TextField value={commentText}
                        onChange={handleChange}
                        variant="outlined"/>
        </DialogContent>
        <DialogActions className={classes.button}>
          <Button onClick={()=>handleEditComment(id)} color="primary" variant="contained" autoFocus>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}