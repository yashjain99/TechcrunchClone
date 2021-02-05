import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventData } from '../Redux/actions';
import FeaturedEvents from './FeaturedEvents';
import { NextEvents } from './NextEvents';
import {PastEvents} from './PastEvents'
import {Loader} from '../../Homepage/Components/Loader';
import SideBar from '../../SideBar/Components/SideBar'
import { makeStyles } from '@material-ui/styles';
import {Box, Container} from '@material-ui/core'
const useStyles = makeStyles(theme =>({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        marginLeft: "0px",
        marginTop: "20px"
    }
}))
export const Events = () =>{
    const [animatedLoader, setAnimatedLoader] = useState(true)
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events)
    const classes = useStyles()
    useEffect(()=>{
        setTimeout(() => {
            setAnimatedLoader(false)
        },1500)

        dispatch(getEventData())
    },[])

 
    return(
        <Container maxWidth = "xl" className={classes.container}>
        <Box>
            <SideBar/>
        </Box>
        <Box>
        {
           animatedLoader ? (<Loader />) : (
            <Box className={classes.box}>
                <h1>Events</h1>
                <h2>Featured Events</h2>
                <Grid container spacing={2}>
                {
                    events.featuredEvents && 
                        events.featuredEvents.map(item=>(
                            <Grid key = {item.id} item xs={8} sm={4} xl={4}>
                                <FeaturedEvents data ={item}/>
                            </Grid>
                        ))
                }
                </Grid>
                <NextEvents events = {events} />
                <PastEvents events = {events} />
            </Box>
           )  
        }
           
            </Box>
        </Container>
    )
}