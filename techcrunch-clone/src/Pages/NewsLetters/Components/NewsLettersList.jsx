import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        flexWrap :"wrap",
        flexBasis: "94%",
        flexDirection: "row",
    },
  listItem:{
      width : "100%",
      background:"#F9F9F9",
      margin : "0px"
  },
  span:{
      background:"#DCA946",
      padding : "25% 0 0 0",
      marginRight: "10px",
      width:8
  },
  checkbox:{
    width: "16px",
    height: "16px"
  }
}));

export default function NewsLettersList({newslettersData, state, handleChange}) {
    console.log(newslettersData);
    let data = newslettersData.filter(item => !item.premium)
    console.log(data);
    let premiumData = newslettersData.filter(item => item.premium)
  const classes = useStyles();


  return (
   
      <Grid container >
          
        <List className={classes.root}>
        {
            newslettersData && data.map((value) => (
                <Grid item  key={value.id} xl={6} lg={6} md={6} sm={6} xs={12} className={classes.grid}>
                    <ListItem button className={classes.listItem}>
                    <span >
                      <ListItemText   className={classes.text} id={value.id} primary={value.title} />
                      <ListItemText id={value.id} secondary={value.subTitle} />

                    </span>
                      <ListItemSecondaryAction >
                        <Checkbox
                          edge="end"
                          className={classes.Checkbox}
                          onChange={handleChange}
                          checked={state.id}
                          name ={value.id}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                </Grid>
                   
                
            ) )
        }
    </List>
        <List className={classes.root}>
        {
            newslettersData && premiumData.map((value) => (
                <Grid item  key={value.id} xl={6} lg={6} md={6} sm={6} xs={12}>
                    <ListItem button className={classes.listItem}>
                    <span className={classes.span}>
              
                    </span>
                    <span >
                      <ListItemText   className={classes.text} id={value.id} primary={value.title} />
                      <ListItemText id={value.id} secondary={value.subTitle} />

                    </span>
                      <ListItemSecondaryAction  edge="end">
                        <input type="checkbox" className={classes.checkbox}/>
                      </ListItemSecondaryAction>
                    </ListItem>
                </Grid>
                   
                
            ) )
        }
    </List>
    </Grid>
  );
}