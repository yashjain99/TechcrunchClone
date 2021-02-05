import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      width : "230px",
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    }
  
  }))(InputBase);
const useStyles = makeStyles(theme =>({
    root : {
       
    }
}))

  export default function SelectBox({events, selectText, handleChange}){
      console.log(events);
      const classes = useStyles()
      return(
        
        <FormControl className={classes.root}>
            <NativeSelect
              id="customized-select-native"
              value={selectText}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
                <option aria-label="None" value=""/>
            {
                events && events.allEvents && events.allEvents.map(item =>(
                    
                    <option value={item.name} key={item.id}>{item.name}</option>
                ))
                
            }
            </NativeSelect>
        </FormControl>
      )
  }