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
    },
    marginLeft: {
        marginLeft: "15%"
    },
    logo: {
        paddingLeft: "10px",
        width: "100px",
        "&:hover": {
            cursor: "pointer"
        }
    }
})

export function SearchResultPage() {
    const news = useSelector(state => state.search.news);
    const [animatedLoader, setAnimatedLoader] = useState(true);
    
    const dispatch = useDispatch();
    const history = useHistory();

    const classes = useStyles();

    const query = useParams();

    const redirectToHomePage = () => {
        history.push("/");
    }

    useEffect(() => {
        setTimeout(() => {
            setAnimatedLoader(false)
        },1500)
        console.log(query.id)

        dispatch(getNewsBySearch(query.id))
    }, [query.id])
    console.log(news, "result")
    return (
        <Container maxWidth = "xl" className = {classes.container}>
            <Grid container direction = "row" justify = "space-around" style = {{marginBottom: "10px"}} >
                <Grid item xl={5} lg={5} md={7} sm={9} xs={10}>
                    <SearchBar suggestionWidth = "40%" />
                </Grid>
                <Grid item xl={3} lg={3} md={3} sm={3} xs={2} >
                    <img
                        className = {classes.logo}
                        alt = "techcrunch"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/1200px-TechCrunch_logo.svg.png"
                        onClick = { redirectToHomePage }
                    />
                </Grid>
            </Grid>
            <Box style = {{marginTop: "10px"}} >
                {
                    animatedLoader ? (
                        <Loader />
                    ) : (
                        <Box>
                            <Grid container justify = "center" >
                                <Grid item xl={10} lg={10} md={10} sm={12} xs={12} >
                                    {
                                        news.map((item) => {
                                            return (
                                                <LargeNewsBlock 
                                                    key = { item.id }
                                                    news = { item }

                                                />
                                            )
                                        })
                                    }
                                </Grid>
                            </Grid>
                            <FooterPage />
                        </Box>
                    )
                }
            </Box>
        </Container>
    )
}
