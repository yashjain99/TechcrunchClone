import styles from "./style.module.css";
import React, { useEffect } from "react";
import Banner from "./Banner";
import Header from "./Header";
import Table from "./Table";
import { useDispatch } from "react-redux";
import { getLeaderboardData } from "../Redux/action";
import BattlefieldNews from "./BattlefieldNews";
import styled from "styled-components";
import SideBar from "../../SideBar/Components/SideBar";
import FooterPage from "../../Footer/Components/FooterPage"

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;

    @media all and (max-width:600px){
        .sidebar{
            display:none;
        }
        .content_wrap{
            transition: margin-right,margin-left .45s ease 75ms;
            -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
        }
    }
`;

const StartupBattleField = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getLeaderboardData("https://techcrunch-clone.herokuapp.com/leaderboard")
    );
  });
  return (
    <Wrapper>
      <div className="sidebar">
           <SideBar/>
      </div>
      <div className="content_wrap">
        <Banner />
        <Header />
        <div
          style={{
            borderBottom: "2px solid #888",
            margin: "auto",
            width: "800px",
          }}
        ></div>
        <Table />
        <div
          style={{
            borderBottom: "2px solid #888",
            margin: "auto",
            width: "800px",
          }}
        ></div>
        <BattlefieldNews />
        <div style={{marginLeft:"250px"}}> 
        <FooterPage/>
        </div>
      </div>
    </Wrapper>
  );
};

export default StartupBattleField;
