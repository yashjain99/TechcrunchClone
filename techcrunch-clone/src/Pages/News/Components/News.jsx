import React,{useEffect} from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentBox } from './CommentBox';
import {Content} from './Content'
import { getNewsData } from '../Redux/actions';
import {getNewsHeadlines} from '../../Homepage/Redux/action'
import {CardComponent} from './CardComponent'
import {Grid} from '@material-ui/core';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

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
export const News = ({id = 1}) =>{
    //after merge get id from props
    const classes = useStyles()
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news)
    const AllNewsData = useSelector(state => state.home.newsHeadlines)
    console.log(AllNewsData);
    let cardId = 1
    if(Number(id) <= 1 && Number(id) <19){
        cardId = Number(id) + 1
    }
    console.log(cardId);
    let cardData = AllNewsData.find(item => Number(item.id) === Number(cardId))
                       
    console.log(cardData);
    
    useEffect( ()=>{
        dispatch(getNewsData(id))
        
       dispatch(getNewsHeadlines())
       
    },[])
    console.log(news);
    return(
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
            {
                cardData && 
                        <CardComponent  cardData={cardData}/>
                
            }
                {/* <CardComponent/> */}
            </section>
            <CommentBox data={news}/>
            </Grid>
        </Container>
        {/* </NewsWrapper> */}
        </Grid>
    )
}