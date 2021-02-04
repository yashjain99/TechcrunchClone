import React from 'react';
import {List, ListItem, ListItemText, ListItemSecondaryAction} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme =>({
    list:{
        width : "92%",
        margin : "auto"
    },
    title:{
        color: "#029F00",
    },
    error : {
        fontSize: "25px",
        color : "red",
        fontWeight : 700,
        textAlign : "center"
    }
}))
export const PastEventsList = ({data}) =>{
    const classes = useStyles()
    return(
        <List className={classes.list}>
        {
            data.length === 0 ?
            (<p className={classes.error}>No Events Found</p>):(
            <>
            {    
                data.map(item =>(
                    <ListItem key={item.id}>
                        <ListItemText
                          primary={item.title}
                          className={classes.title}
                        />
                        <ListItemSecondaryAction>
                          <ListItemText
                            primary={item.date}
                          />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))
            }
            </>
            )
        }
          
      </List>
    )
}
