import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TopBigGrid } from './TopBigGrid';
import { getNewsHeadlines } from "../Redux/action";
import {
    Container,
    Box,
    Grid,
    Typography,
    Divider,
    makeStyles
} from "@material-ui/core";
import { Loader } from './Loader';
import { LatestNews } from './LatestNews';
import { NewsletterSignUp } from './NewsletterSignUp';
import { LargeNewsBlock } from './LargeNewsBlock';

const useStyles = makeStyles({
    fontWeight900: {
        fontWeight: "900",
    },
    marginTopWidth100: {
        marginTop: "40px",
        width: "100%",
    }
})

export function Home() {
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
        },3000)

        dispatch(getNewsHeadlines())
        
    },[])
    
    return (
        <Container maxWidth = "xl">
            {
               animatedLoader ? (
                    <Loader />
                ) : (
                    <Box>
                        <Grid container>
                            <TopBigGrid 
                                newsOne = { newsHeadlines[0] }
                                newsTwo = { newsHeadlines[1] }
                                newsThree = { newsHeadlines[2] }
                                newsFour = { newsHeadlines[3] }
                                newsFive = { newsHeadlines[4] }
                            />
                            <Grid item className = {classes.marginTopWidth100} >
                                <Typography gutterBottom variant="h6" className = {classes.fontWeight900} >
                                    The Latest
                                </Typography>
                            </Grid>
                            <LatestNews
                                newsSix = { newsHeadlines[5] }
                                newsSeven = { newsHeadlines[6] }
                                newsEight = { newsHeadlines[7] }
                                newsNine = { newsHeadlines[8] }
                                newsTen = { newsHeadlines[9] }
                                newsEleven = { newsHeadlines[10] }
                                newsTweleve = { newsHeadlines[11] }
                                newsThirteen = { newsHeadlines[12] }
                                newsFourteen = {newsHeadlines[13]}
                            />
                            <NewsletterSignUp />
                            <LargeNewsBlock news = {newsHeadlines[14]} />
                            <LargeNewsBlock news = {newsHeadlines[15]} />
                        </Grid>
                    </Box>
                )
            }
        </Container>
    )
}
