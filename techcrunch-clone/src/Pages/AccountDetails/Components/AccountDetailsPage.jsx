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
import {
  Box,
  Container,
  Grid,
  makeStyles
} from "@material-ui/core";
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
      marginLeft: "-50px",
      marginTop: "20px",
      width: "100%"
  }
})

const AccountDetailsPage = () => {
  const [booleanval, setBooleanval] = useState(false);
  const [eventsFlag, setEventsFlag] = useState(false);
  const [userActivity, setUserActivity] = useState(false);
  const [support, setSupport] = useState(false);
  const [animatedLoader, setAnimatedLoader] = useState(true);
  const userData = useSelector(state => state.account.userData);
  const isAuth = useSelector(state => state.login.isAuth);
  const newsData = useSelector(state => state.home.newsHeadlines);

  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const params = useParams();
  const id = params.id;

  const handleNewslettersClick = () => {
    setBooleanval(!booleanval);
    setEventsFlag(false);
    setUserActivity(false);
    setSupport(false);
  };

  const handleEventsClick = () => {
    setBooleanval(false);
    setEventsFlag(!eventsFlag);
    setUserActivity(false);
    setSupport(false);
  };

  const handleUserActivityClick = () => {
    setBooleanval(false);
    setEventsFlag(false);
    setUserActivity(!userActivity);
    setSupport(false);
  };

  const handleSupportClick = () => {
    setBooleanval(false);
    setEventsFlag(false);
    setUserActivity(false);
    setSupport(!support);
  };

  const visibilityNewsletter = {};
  const visibilityEvents = {};
  const visibilityUserActivity = {};
  const visibilitySupport = {};

  if (booleanval) visibilityNewsletter.visibility = "hidden";
  else visibilityNewsletter.visibility = "visible";

  if (eventsFlag) visibilityEvents.visibility = "hidden";
  else visibilityEvents.visibility = "visible";

  if (userActivity) visibilityUserActivity.visibility = "hidden";
  else visibilityUserActivity.visibility = "visible";

  if (support) visibilitySupport.visibility = "hidden";
  else visibilitySupport.visibility = "visible";

  const handleLogout = () => {
    dispatch(logoutUser())
  }



  useEffect(() => {
    setTimeout(() => {
        setAnimatedLoader(false)
    },1500)

    dispatch(getAccountDetails(id));
    dispatch(getNewsHeadlines());

},[])
console.log(userData.newsLetters)
  return isAuth ? (
    <Container maxWidth = "xl" className = { classes.container }>
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
                    <div style = {{display: "flex", justifyContent: "space-around"}} >
                      <button onClick={handleNewslettersClick} style={{height: "50px", width: "120px", backgroundColor: "lightgrey", outline: "none"  }}>
                        Newsletter
                      </button>
                      <button onClick={handleEventsClick} style={{height: "50px", width: "120px", backgroundColor: "lightgrey", outline: "none"  }}>
                        Events Booked
                      </button>
                      <button onClick={handleUserActivityClick} style={{height: "50px", width: "120px", backgroundColor: "lightgrey", outline: "none"  }}>
                        User Activity
                      </button>
                      <button onClick={handleSupportClick} style={{height: "50px", width: "120px", backgroundColor: "lightgrey", outline: "none"  }}>
                        Support
                      </button>
                    </div>
                    <div style = {{ fontSize: "18px"}} >
                      {
                        userData.newsLetters?.map((item) => {
                          return(
                            <div key = {item.id} style = {visibilityNewsletter} >
                              {item.subTitle}
                            </div>
                          )
                        })
                      }
                      {
                        userData.events?.map((item) => {
                          return(
                            <div key = {item.id} style = {visibilityEvents} >
                              {item.subTitle}
                            </div>
                          )
                        })
                      }
                      {
                        userData.comments?.map((item) => {
                          return(
                            <div key = {item.id} style = {visibilityUserActivity} >
                              {item.subTitle}
                            </div>
                          )
                        })
                      }
                      <div style = {{...visibilitySupport,}} >
                        Customer Support
                        For information on frequently asked questions, please visit our Help Center.

                        To contact our customer support team directly, please send an email to extracrunch@techcrunch.com.

                        Please visit our feedback forum to let us know how we can improve your Extra Crunch experience.
                      </div>
                    </div>
                    <button style={{ float: "right", height: "50px", width: "120px", backgroundColor: "lightgrey", outline: "none" }} onClick = { handleLogout } >
                      Logout ❘➜
                    </button>
                    <FooterPage />
                  </Wrapper>
                )
              }
          </Box>
      </Container>
  ) : ( <Redirect to = "/" /> )
}
export default AccountDetailsPage;
