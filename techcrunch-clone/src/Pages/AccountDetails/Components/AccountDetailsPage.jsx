import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import LockIcon from "@material-ui/icons/Lock";
import styled from "styled-components";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { Loader } from "../../Homepage/Components/Loader";
import SideBar from "../../SideBar/Components/SideBar";
import { getAccountDetails } from "../Redux/action";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import { logoutUser } from "../../Login/redux/action";
import FooterPage from "../../Footer/Components/FooterPage";
import { getNewsHeadlines } from "../../Homepage/Redux/action";

const Wrapper = styled.div`
  width: 100%;
  h3 {
    color: #777;
    font-weight: 800;
  }
  .password {
    &:hover {
      cursor: pointer;
    }
  }
`;

const useStyles = makeStyles({
  container: {
      display: "flex",
      // flexDirection: "row",
      justifyContent: "start",
      marginLeft: "0px",
      marginTop: "20px",
      width: "100%"
  },
  subscriptionButton: {
    height: "50px", 
    width: "150px",
    color: "white",
    fontSize: "18px",
    fontWeight: "900",
    textAlign: "center",
    lineHeight: "50px",
    background: "linear-gradient(to right,#01a663,#03d206)",

    "&:hover" : {
      cursor: "pointer",
    }
  }
})

const AccountDetailsPage = () => {
  const [bool1, setBool1] = useState(true);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);
  const [bool4, setBool4] = useState(false);

  const [bool5, setBool5] = useState(true);
  const [bool6, setBool6] = useState(false);
  const [bool7, setBool7] = useState(false);
  const [bool8, setBool8] = useState(false);
  
  const [animatedLoader, setAnimatedLoader] = useState(true);
  const userData = useSelector((state) => state.account.userData);
  const isAuth = useSelector((state) => state.login.isAuth);
  const newsData = useSelector((state) => state.home.newsHeadlines);

  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const params = useParams();
  const id = params.id;

  const handleClick1 = () => {
    setBool1(!bool1);
    setBool2(false);
    setBool3(false);
    setBool4(false);
    setBool5(!bool5);
    setBool6(false);
    setBool7(false);
    setBool8(false);

  };
  const handleClick2 = () => {
    setBool1(false);
    setBool2(!bool2);
    setBool3(false);
    setBool4(false);
    setBool5(false);
    setBool6(!bool6);
    setBool7(false);
    setBool8(false);
  };
  const handleClick3 = () => {
    setBool1(false);
    setBool2(false);
    setBool3(!bool3);
    setBool4(false);
    setBool5(false);
    setBool6(false);
    setBool7(!bool7);
    setBool8(false);
  };
  const handleClick4 = () => {
    setBool1(false);
    setBool2(false);
    setBool3(false);
    setBool4(!bool4);
    setBool5(false);
    setBool6(false);
    setBool7(false);
    setBool8(!bool8);
  };

  const style1 = {};
  if (bool1) {
    style1.display = "inline";
  }
  else {
    style1.background = "none";
    style1.display = "none";
  }

  const style2 = {};
  if (bool2) {
    style2.display = "inline";
  }
  else {
    style2.background = "none";
    style2.display = "none";
  }
  const style3 = {};
  if (bool3) {
    style3.display = "inline";
  }
  else {
    style3.background = "none";
    style3.display = "none";
  }
  const style4 = {};
  if (bool4) {
    style4.display = "inline";
  }
  else {
    style4.background = "none";
    style4.display = "none";
  }

  const style5 = {};
  if (!bool5) {
    style5.background = "none";
    style5.color = "black";

  }

  const style6 = {};
  if (!bool6) {
    style6.background = "none";
    style6.color = "black";
  }

  const style7 = {};
  if (!bool7) {
    style7.background = "none";
    style7.color = "black";
  }

  const style8 = {};
  if (!bool8) {
    style8.background = "none";
    style8.color = "black";
  }

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const redirectToNews = (id) => {
    history.push(`/news/${id}`);
  };

  let userCommentsData = [];
  let flag = false;

  newsData.map((item) => {
    item.comments.map((item) => {
      if (item.email == userData.email) {
        flag = true;
        return;
      } else {
        flag = false;
      }
    });
    if (flag) {
      userCommentsData.push(item);
    }
    flag = false;
  });

  console.log(userCommentsData);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedLoader(false);
    }, 1500);

    dispatch(getAccountDetails(id));
    dispatch(getNewsHeadlines());
  }, []);
  console.log(userData.newsLetters);
  return userData && isAuth ? (
    <Container maxWidth="xl" className={classes.container}>
      <Box>
        <SideBar />
      </Box>
      <Box style = {{display: "flex", flexDirection: "column"}} >
          {
          animatedLoader ? (
                  <Loader />
              ) : (
                  <Wrapper>
                    <h1 style={{ color: "green" }}>
                      {
                        `Hi, ${userData.firstname} ${userData.lastname}`
                      }
                    </h1>
                    <br/>
                    <AccountCircleRoundedIcon style={{ fontSize: "100px" }} />
                    <br/>
                    <br/>
                    <div className="password" style={{ color: "#00a562" }}>
                      Change Password
                      <LockIcon />
                    </div>
                    <div className="password" style={{ color: "#00a562" }}>
                      {" "}
                      Edit Account <EditOutlinedIcon />
                    </div>
                    <br/>
                    <h3>Account Details</h3>
                    <hr />
                    <div style={{ display: "flex", fontSize: "18px"}}>
                      <div style={{ color: "#999", width: "120px" }}>Name</div>
                      <div style={{ color: "#000000", fontWeight: "900"}}>
                        {
                          `${userData.firstname} ${userData.lastname}`
                        }
                      </div>
                    </div>
                    <div style={{ display: "flex", fontSize: "18px" }}>
                      <div style={{ color: "#999", width: "120px" }}>
                        Email
                      </div>
                      <div style={{ color: "#00a562" }}>
                        {userData.email}
                      </div>
                    </div>
                    <br/>
                    <h3> Subscription Details </h3>
                    <br/>
                    <div style = {{display: "flex", justifyContent: "space-between"}} >
                      <div onClick={handleClick1} className = {classes.subscriptionButton} style = {style5}  >
                        Newsletter
                      </div>
                      <div onClick={handleClick2} className = {classes.subscriptionButton} style = {style6} >
                        Events Booked
                      </div>
                      <div onClick={handleClick3} className = {classes.subscriptionButton} style = {style7} >
                        User Activity
                      </div>
                      <div onClick={handleClick4} className = {classes.subscriptionButton} style = {style8} >
                        Support
                      </div>
                    </div>
                    <div style = {{overflow: "hidden"}} >
                      <div style = {{ fontSize: "18px", height: "300px", width: "700px", margin: "13px 0", padding: "15px", overflowY: "scroll"}} >
                        {
                          userData.newsLetters?.map((item, index) => {
                            return(
                              <div key = {item.id} style = {style1} className = "password" >
                                <b>{index + 1 + "."}</b>  {item.title} <hr/>
                              </div>
                            )
                          })
                        }
                        {
                          userData.eventsBooked?.map((item, index) => {
                            return(
                              <div key = {item.id} style = {style2} className = "password" >
                                <b>{index + 1 + "."}</b> {item.title}  {item.price} <hr/>
                              </div>
                            )
                          })
                        }
                        {
                          userCommentsData?.map((item, index) => {
                            return(
                              <div key = {item.id} style = {style3} className = "password" onClick = {() => redirectToNews(item.id)} >
                                <b>{index + 1 + "."}</b> {item.title} <hr/>
                              </div>
                            )
                          })
                        }
                        <div style = {style4} >
                          <div style = {{fontSize: "20px"}}><b>Customer Support</b></div>
                          <br/>
                          <div>
                            For information on frequently asked questions, please visit our <a href = "">Help Center</a>.
                          </div>
                          <br/>
                          <div>
                            To contact our customer support team directly, please send an email to <a href = "">extracrunch@techcrunch.com</a>.
                          </div>
                          <br/>
                          <div>
                            Please visit our <a href = "">feedback forum</a> to let us know how we can improve your Extra Crunch experience.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className = {classes.subscriptionButton} onClick = { handleLogout } >
                      Logout ❘➜
                    </div>
                    <FooterPage />
                  </Wrapper>
                )
              }
          </Box>
      </Container>
  ) : ( <Redirect to = "/" /> )
}
export default AccountDetailsPage;
