import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { TopBigGrid } from './TopBigGrid';
import { getNewsHeadlines } from "../Redux/action";
import {
    Container,
    Box,
    Grid
} from "@material-ui/core";
import { Loader } from './Loader';

export function Home() {
    const newsHeadlines = useSelector(state => state.home.newsHeadlines);
    const isLoading = useSelector(state => state.home.isLoading);
    const error = useSelector(state => state.home.error);
    
    const [animatedLoader, setAnimatedLoader] = useState(true);
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    
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
                        </Grid>
                    </Box>
                )
            }
        </Container>
    )
}
