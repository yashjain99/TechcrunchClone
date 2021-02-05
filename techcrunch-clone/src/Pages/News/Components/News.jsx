import React,{useEffect,useState} from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentBox } from './CommentBox';
import {Content} from './Content'
import { getNewsData } from '../Redux/actions';
import {getNewsHeadlines} from '../../Homepage/Redux/action'
import { Link, useParams } from 'react-router-dom';
import {CardComponent} from './CardComponent'
import {Grid, Box} from '@material-ui/core';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import SideBar from '../../SideBar/Components/SideBar';
import FooterPage from '../../Footer/Components/FooterPage';
import {Loader} from '../../Homepage/Components/Loader'

const useStyles = makeStyles({
    CommentIcon:{
        marginTop: 15,
        color: "green"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        marginLeft: "-50px",
        marginTop: "20px"
    }
})

const Container = styled.div`
   width: 95%;
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
    const [animatedLoader, setAnimatedLoader] = useState(true);
    const news = useSelector(state => state.news.news)
    const AllNewsData = useSelector(state => state.home.newsHeadlines)
    console.log(AllNewsData);
    const id = useParams();
    console.log(id)
    console.log(news);
    let cardId = 1
    if(Number(id.id) >= 1 && Number(id.id) <19){
        cardId = Number(id.id) + 1
    }
    console.log(cardId);
    let cardData = AllNewsData.find(item => Number(item.id) === Number(cardId))
                       
    console.log(cardData);
    
    useEffect( ()=>{
        setTimeout(() => {
         setAnimatedLoader(false)
     },3000)

        dispatch(getNewsData(id.id))
        
       dispatch(getNewsHeadlines())
       window.scrollTo(0, 0)
    },[id.id])
    console.log(news);
    return news && news.title ? (
        <Container maxWidth = "xl" className = { classes.container }>
        <Box>
            <SideBar/>
        </Box>
        <Box>
        {
        animatedLoader ? (
                        <Loader />
                    ) :(
                    <Grid container >

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
                        <FooterPage/>
                    </Grid>
                )
        }
        </Box>
        </Container>
    ) : ""
}