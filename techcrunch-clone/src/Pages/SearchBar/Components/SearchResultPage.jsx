import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { SearchBar } from './SearchBar';
import { Loader } from '../../Homepage/Components/Loader';
import { LargeNewsBlock } from '../../Homepage/Components/LargeNewsBlock';
import FooterPage from '../../Footer/Components/FooterPage';
import { getNewsBySearch } from '../Redux/action';
import {
    Container,
    Grid,
    Box,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        marginTop: "20px"
    }
})

export function SearchResultPage() {
    const news = useSelector(state => state.search.news);
    const [animatedLoader, setAnimatedLoader] = useState(true);
    
    const dispatch = useDispatch();

    const classes = useStyles();

    const query = useParams();

    useEffect(() => {
        setTimeout(() => {
            setAnimatedLoader(false)
        },3000)
        console.log(query.id)

        dispatch(getNewsBySearch(query.id))
    }, [])
    
    return (
        <Container maxWidth = "xl" className = {classes.container}>
            <Grid container direction = "row" justify = "space-around" >
                <Grid item xl={5} lg={5} md={7} sm={9} xs={10}>
                    <SearchBar />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={2} >
                    <img
                        style={{ width: "100px" }}
                        alt = "techcrunch"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png"
                    />
                </Grid>
            </Grid>
            <hr />
            <Box>
                {
                    animatedLoader ? (
                        <Loader />
                    ) : (
                        <Box>
                            <Grid container>
                                {
                                    news.title && news.map((item) => {
                                        return (
                                            <LargeNewsBlock 
                                                key = { item.id }
                                                news = { item }
                                            />
                                        )
                                    })
                                }
                                <FooterPage />
                            </Grid>
                        </Box>
                    )
                }
            </Box>
        </Container>
    )
}
