
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import NavbarDrawer from './NavbarDrawer'
import { useHistory } from 'react-router-dom';

const NavbarWrapper = styled.div`
    background : white;
    width : 100%
`;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    background: "transparent"
  },
  menuButton: {
      color: "green",
      outline: "none",
      border: 0,
      cursor:"pointer",
    position: 'absolute',
    right: 25,
    top : 5
  },
  img:{
      width : 70,
      cursor:"pointer"
  }
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };
  
  const redirectToHome = () => {
    history.push("/")
  }
  return (
    // xs, sm, md, lg, and xl.
    <Box display={{ xs: 'block',sm : 'block',  md: 'none', xl: 'none', lg : 'one' }} className={classes.root}>
      <NavbarWrapper position="static">
        <Toolbar>
        <div edge="start" onClick={redirectToHome}>
            <img className={classes.img} src="https://media.sailthru.com/134/1k2/c/l/5c1d5733871c3.png" alt="logo"/>
        </div>

        <MenuIcon edge="end" className={classes.menuButton} onClick={handleOpen}/>
        
 
        </Toolbar>
      </NavbarWrapper>
      <NavbarDrawer open={open} handleDrawerClose={handleClose} />
    </Box>
  );
}
