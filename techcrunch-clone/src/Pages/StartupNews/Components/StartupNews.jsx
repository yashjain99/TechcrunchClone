import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getStartupNews } from "../Redux/action";
import {
    Container,
    Box,
    Grid,
    Typography,
    Divider,
    makeStyles
} from "@material-ui/core";
import { Loader } from '../../Homepage/Components/Loader';
import { LargeNewsBlock } from '../../Homepage/Components/LargeNewsBlock';

const useStyles = makeStyles({
    fontWeight900: {
        fontWeight: "900",
    },
    marginTopWidth100: {
        marginTop: "40px",
        width: "100%",
    }
})

export function StartupNews() {
    const newsHeadlines = useSelector(state => state.home.newsHeadlines);
    const isLoading = useSelector(state => state.home.isLoading);
    const error = useSelector(state => state.home.error);
    
    const [animatedLoader, setAnimatedLoader] = useState(true);
    
    const dispatch = useDispatch();
    const history = useHistory();

    const classes = useStyles();
    
    useEffect(() => {
        setTimeout(() => {
            setAnimatedLoader(false)
        },1500)

        dispatch(getStartupNews())
        
    },[])
    return (
        <Container maxWidth = "xl">
            {
               animatedLoader ? (
                    <Loader />
                ) : (
                    <Box>
                        <Grid container>
                            <Grid item className = {classes.marginTopWidth100} >
                                <Typography gutterBottom variant="h2" className = {classes.fontWeight900} >
                                    Startups
                                </Typography>
                            </Grid>
                            {
                                newsHeadlines.map((item) => {
                                    return (
                                        <LargeNewsBlock 
                                            key = { item.id } 
                                            news = { item } 
                                        />
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                )
            }
        </Container>
    )
}