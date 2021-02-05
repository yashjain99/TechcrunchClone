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
      flexDirection: "row",
      justifyContent: "start",
      marginLeft: "-50px",
      marginTop: "20px",
      width: "100%;"
  }
})

const AccountDetailsPage = () => {
  const [booleanval, setBooleanval] = useState(false);
  const [animatedLoader, setAnimatedLoader] = useState(true);
  const userData = useSelector(state => state.account.userData);
  const isAuth = useSelector(state => state.login.isAuth);

  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const params = useParams();
  const id = params.id;

  const handleClick = () => {
    setBooleanval(!booleanval);
  };

  const visibilitystyle = {};
  if (booleanval) visibilitystyle.visibility = "hidden";
  else visibilitystyle.visibility = "visible";

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  useEffect(() => {
    setTimeout(() => {
        setAnimatedLoader(false)
    },1500)

    dispatch(getAccountDetails(id));

},[])
  
  return isAuth ? (
    <Container maxWidth = "xl" className = { classes.container }>
      <Box>
          <SideBar />
      </Box>
      <Box>
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
                    <div style = {{display: "flex", flexDirection: "column", backgroundColor: "#f9f9f9"}} >
                        <div>
                          Newsletters
                        </div>
                        <div>
                          Events
                        </div>
                        <div>
                          User Activity
                        </div>
                        <div>
                          Support
                        </div>
                    </div>
                    <button onClick={handleClick} style={{ height: "40px" }}>
                      Subscriptions
                    </button>
                    <div
                      style={{
                        ...visibilitystyle,
                        height: "40px",
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <span
                        style={{
                          font: "1rem/1.77 Helvetica Neue,Helvetica,Arial,sans-serif"
                        }}
                      >
                        MySubscriptions
                      </span>
                      <span>Active | Expired</span>
                    </div>
                    <button style={{ float: "right", height: "40px" }} onClick = { handleLogout } >
                      Logout ❘➜
                    </button>
                  </Wrapper>
                )
              }
          </Box>
      </Container>
  ) : ( <Redirect to = "/" /> )
}
export default AccountDetailsPage;
