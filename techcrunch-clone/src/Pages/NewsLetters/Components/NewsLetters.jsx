import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getNewsLettes, addNewsLetters } from "../Redux/actions";
import NewsLettersList from "./NewsLettersList";
import { makeStyles } from "@material-ui/styles";
import { Loader } from "../../Homepage/Components/Loader";
import { getUserSignup, notOpened } from "../../Login/redux/action";


const useStyles = makeStyles(theme =>({
    icon :{
        top : 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        outline : "none",
        border : 0,
        outline: "none",
        border: "none",
        height: "50px",
        "&:hover":{
            background : "transparent",

        }
    }
}))
const NewslettersWrapper = styled.div`
  background: linear-gradient(to right, #01a663, #03d206);
  width: 100%;
  padding: 20px;
`;
// width : ${props => props.media ? "90%" : "65%"};
const FormWrapper = styled.div`
  width: 68%;
  background: white;
  margin: auto;
  & a {
    display: flex;
    justify-content: center;
  }
`;
const Header = styled.div`
  display: flex;
  & div {
    width: 90%;
    text-align: center;
    & img {
      width: 70px;
    }
    & p {
      font-size: 20px;
      margin-top: 0;
    }
  }
`;
const Button = styled.div`
  width: 100%;
  & button {
    width: 30%;
    height: 55px;
    background: #29a720;
    margin: 30px 32%;
    border: 0;
    color: white;
    outline: none;
  }
`;
const Block = styled.div`
  width: 62%;
  margin: auto;
  font-size: 15px;
  text-align: center;
  & p {
    margin: 20px 0;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  & div {
    background: #dca946;
    width: 5px;
    padding: 2px;
    height: 25px;
    margin-right: 5px;
  }
  & p {
    font-size: 18px;

    margin: 0;
    & span {
      text-decoration: underline;
    }
  }
`;
export const Newsletters = () =>{
    const newslettersData = useSelector(state => state.newsletters.newsLettersData)
    const [animatedLoader, setAnimatedLoader] = useState(true)
    const [showMsg, setShowMsg] = useState(false)
    const [state, setState] = React.useState({
        1 : false,
        2 : false,
        3 : false,
        4 : false,
        5 : false,
        6 : false,
        7 : false,
        8 : false,
        9 : false,
        10 : false,
        11 : false,
        12 : false,
        13 : false
      });
      
      //login info from login reducer
     const userData = useSelector(state => state.account.userData)
     const isAuth = useSelector(state => state.login.isAuth)
      const history = useHistory()
      const classes = useStyles()
      const dispatch = useDispatch()
      
      useEffect(()=>{
          setTimeout(() => {
              setAnimatedLoader(false)
            },2000)
            dispatch(getNewsLettes())
            dispatch(getUserSignup())
        },[])
       
        
        console.log(state);
        let arr = []
        newslettersData && newslettersData.map(item=>{
          let id = item.id;
          let stateVals = Object.values(state)
          if(stateVals[Number(id)-1]){
              arr.push(item)
          }
      })
      console.log(arr);
      if(userData.newsLetters) {
         arr = [...userData.newsLetters, ...arr]
      }
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
      
    };

    const handleAddNewsLetters = () =>{
        console.log("handleAddNewsLetters func called");
       dispatch(addNewsLetters(userData.id, arr))
       setShowMsg(true)

       setTimeout(() => {
        history.push(`/my-account/${userData.id}`)
       },2000)
    }
    console.log(window.innerWidth);
    return(
       <Box>
        {
            animatedLoader ? (
                <Box style = {{display: "flex", margin: "20px 0 0 -300px"}} >
                    <Loader/>
                </Box>
                ) : (
                    <NewslettersWrapper>
    
                    <FormWrapper >
                        <Header>
                            <div>
                                <img src="https://media.sailthru.com/134/1k2/c/l/5c1d5733871c3.png" alt="logo"/>
                                <h2>Newsletters</h2>
                                {
                                    showMsg ? <h4 style={{color:"green"}}>Thanks for submit it is added in you account page</h4>:null
                                }
                                {
                                    isAuth ? 
                                    <p>Hey there, <span>{userData.email}</span>!</p>
                                    : null
                                }
        
                            </div>
                            <IconButton className={classes.icon} onClick={() => history.push("/")}>
                                <CloseIcon />
                            </IconButton>
                        </Header>
                        <NewsLettersList state={state} handleChange={handleChange} newslettersData={newslettersData}/>
                        <Button>
                        {
                            isAuth ? 
                            <button onClick={handleAddNewsLetters}>UPDATE</button> :
                            <button onClick={() => history.push("/login")}>Login</button>
                        }
                        </Button>
                        <hr/>
                        <Block>
                            <p>If you want to stop receiving all email from us click the "Unsubscribe All" button below.
                            It may sting for a while, but we'll get over it eventually.
                            </p>
                            
                        </Block>
                        <Button>
                        {
                            isAuth ? 
                            <button style={{background:"black"}}>UNSBSCRIBE ALL</button>:
                            <button style={{background:"black", opacity: "0.4"}} disabled>UNSBSCRIBE ALL</button>}
                        </Button>
                        <Footer>
                        <div></div>
                        <p>
                            Extra Crunch newsletter.<span>Learn more</span>
                        </p>
                        </Footer>
                        <a href="#">Terms of Service</a>
                </FormWrapper>
        </NewslettersWrapper>
      )}
    </Box>
  );
};
