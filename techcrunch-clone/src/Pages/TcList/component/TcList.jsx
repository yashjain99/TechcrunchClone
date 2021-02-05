import React from "react";

import Content from "./Content";
import Investors from "./Investors";
import styled from "styled-components";
import SideBar from "../../SideBar/Components/SideBar";
import FooterPage from "../../Footer/Components/FooterPage";

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;

    @media all and (max-width:600px){
        .sidebar{
            display:none;
        }
        
`;

const TcList = (props) => {
  return (
    <Wrapper>
      <div className="sidebar">
        <SideBar />
      </div>
      <div style={{marginTop:"-100px"}}>
        <Content />
        <Investors />
        <div style={{ marginLeft: "250px" }}>
          <FooterPage />
        </div>
      </div>
    </Wrapper>
  );
};

export default TcList;
