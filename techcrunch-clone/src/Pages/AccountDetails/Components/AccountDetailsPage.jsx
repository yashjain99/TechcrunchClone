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
    width: "100%",
  },
});

const AccountDetailsPage = () => {
  const [bool1, setBool1] = useState(true);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);
  const [bool4, setBool4] = useState(false);

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
  };
  const handleClick2 = () => {
    setBool1(false);
    setBool2(!bool2);
    setBool3(false);
    setBool4(false);
  };
  const handleClick3 = () => {
    setBool1(false);
    setBool2(false);
    setBool3(!bool3);
    setBool4(false);
  };
  const handleClick4 = () => {
    setBool1(false);
    setBool2(false);
    setBool3(false);
    setBool4(!bool4);
  };

  const style1 = {};
  if (bool1) style1.display = "inline";
  else style1.display = "none";
  const style2 = {};
  if (bool2) style2.display = "inline";
  else style2.display = "none";
  const style3 = {};
  if (bool3) style3.display = "inline";
  else style3.display = "none";
  const style4 = {};
  if (bool4) style4.display = "inline";
  else style4.display = "none";

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
      <Box style={{ display: "flex", flexDirection: "column" }}>
        {animatedLoader ? (
          <Loader />
        ) : (
          <Wrapper>
            <h1 style={{ color: "green" }}>
              {`Hi, ${userData.firstname} ${userData.lastname}`}
            </h1>
            <br />
            <AccountCircleRoundedIcon style={{ fontSize: "100px" }} />
            <br />
            <br />
            <div className="password" style={{ color: "#00a562" }}>
              Change Password
              <LockIcon />
            </div>
            <div className="password" style={{ color: "#00a562" }}>
              {" "}
              Edit Account <EditOutlinedIcon />
            </div>
            <br />
            <h3>Account Details</h3>
            <hr />
            <div style={{ display: "flex", fontSize: "18px" }}>
              <div style={{ color: "#999", width: "120px" }}>Name</div>
              <div style={{ color: "#000000", fontWeight: "900" }}>
                {`${userData.firstname} ${userData.lastname}`}
              </div>
            </div>
            <div style={{ display: "flex", fontSize: "18px" }}>
              <div style={{ color: "#999", width: "120px" }}>Email</div>
              <div style={{ color: "#00a562" }}>{userData.email}</div>
            </div>
            <br />
            <h3> Subscription Details </h3>
            <br />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                onClick={handleClick1}
                style={{
                  height: "50px",
                  width: "120px",
                  backgroundColor: "lightgrey",
                  outline: "none",
                }}
              >
                Newsletter
              </button>
              <button
                onClick={handleClick2}
                style={{
                  height: "50px",
                  width: "120px",
                  backgroundColor: "lightgrey",
                  outline: "none",
                }}
              >
                Events Booked
              </button>
              <button
                onClick={handleClick3}
                style={{
                  height: "50px",
                  width: "120px",
                  backgroundColor: "lightgrey",
                  outline: "none",
                }}
              >
                User Activity
              </button>
              <button
                onClick={handleClick4}
                style={{
                  height: "50px",
                  width: "120px",
                  backgroundColor: "lightgrey",
                  outline: "none",
                }}
              >
                Support
              </button>
            </div>
            <div
              style={{
                fontSize: "18px",
                height: "300px",
                width: "700px",
                margin: "13px 0",
                border: "1px solid #03d206",
                padding: "15px",
              }}
            >
              {userData.newsLetters?.map((item, index) => {
                return (
                  <div key={item.id} style={style1}>
                    {`${index + 1} ${item.title}`}
                  </div>
                );
              })}
              {/* {
                        userData.events?.map((item, index) => {
                          return(
                            <div key = {item.id} style = {style2} >
                              {`${index + 1} ${item.title} ${item.price}`}
                            </div>
                          )
                        })
                      } */}
              {userCommentsData?.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    style={style3}
                    onClick={() => redirectToNews(item.id)}
                  >
                    {`${index + 1} ${item.title}`}
                  </div>
                );
              })}
              <div style={style4}>
                <div style={{ fontSize: "20px" }}>
                  <b>Customer Support</b>
                </div>
                <br />
                <div>
                  For information on frequently asked questions, please visit
                  our <a href="">Help Center</a>.
                </div>
                <br />
                <div>
                  To contact our customer support team directly, please send an
                  email to <a href="">extracrunch@techcrunch.com</a>.
                </div>
                <br />
                <div>
                  Please visit our <a href="">feedback forum</a> to let us know
                  how we can improve your Extra Crunch experience.
                </div>
              </div>
            </div>
            <button
              style={{
                float: "right",
                height: "50px",
                width: "120px",
                backgroundColor: "lightgrey",
              }}
              onClick={handleLogout}
            >
              Logout ❘➜
            </button>
            <FooterPage />
          </Wrapper>
        )}
      </Box>
    </Container>
  ) : (
    <Redirect to="/" />
  );
};
export default AccountDetailsPage;
