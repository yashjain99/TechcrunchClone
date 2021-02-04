import React,{useState, useEffect} from  'react';
import { Link, useParams } from 'react-router-dom';
import {CardComponent} from './CardComponent'
import {DialogBox} from './DialogBox'
import {CircularProgress,Grid} from '@material-ui/core';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';

import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import { CommentBox } from './CommentBox';
import {Content} from './Content'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsData } from '../Redux/actions';

const useStyles = makeStyles({
    CommentIcon:{
        marginTop: 15,
        color: "green"
    }
})

const Container = styled.div`
   width: 80%;
   margin-left: 10px;
`
const Header = styled.div`
    & h1{
        
        font-size: 25px;
        font-weight: 800;
    }
    & div{
        display: flex;
        justify-content: space-between;
        & a{
            display: flex;
            text-decoration: none;
        }
    }
`;
const Img = styled.div`
    & img{
        width: 95%;
    }
`;
export const News = () =>{
    //after merge get id from props
    const classes = useStyles()
    const dispatch = useDispatch();
    const news = useSelector(state => state.news)

    const id = useParams();
    console.log(id)
    console.log(news);
    // let cardData = news.filter(item => Number(item.id) !== Number(id))
    //                     .filter((item,index) => index < 2)
    
    useEffect( ()=>{
        dispatch(getNewsData(id.id))
    },[])
    console.log(news);
    return news && news.title ? (
            <Grid container >
        {/* <NewsWrapper> */}
        <Container>
            <Grid item xs={12} sm={8}>
            <Header>
                <h1>{news.title}</h1>
           
                <div>
                    <p>{news.author}</p>
                    <p>{news.publishedAt}</p>
                    <a href="#comment">
                        <ModeCommentOutlinedIcon className={classes.CommentIcon}/>
                        <p>Comment</p>
                    </a>
                </div>
            </Header>
            <Img>
                <img src={news.urlToImage} alt="img"/>
            </Img>
            <div>
                <Content content={news.content}/>
            </div>
            <section>
                <CardComponent/>
                <CardComponent/>
            </section>
            <CommentBox data={news}/>
            </Grid>
        </Container>
        {/* </NewsWrapper> */}
        </Grid>
    ) : ""
}