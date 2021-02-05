import React, { useState } from "react";
import styled from "styled-components";
import ActivationsBlog from "./ActivationsBlog";
const Wrapper = styled.div`
  .gridclass {
    display: grid;
    grid-template-columns: 25% 55%;
    grid-template-rows: auto;
    grid-row-gap: 20px;
    border: "1px solid red";
  }
  .image {
    background-image: url("https://images.unsplash.com/photo-1541826966-0ef9752e18a2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwdGFsa2luZyUyMGNyb3dkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 600px;
  }
  .heading {
    margin-top: 5px;
    text-align: left;
    color: white;
    font-size: 50px;
    font-weight: bold;
  }
  .text {
    text-align: left;
    color: white;
    font-size: 20px;
    margin-top: 20px;
  }
  .buttonarea {
    text-align: left;
  }
  button {
    padding: 20px;
  }
  .smallerdiv {
    display: flex;
    justify-content: space-between;
    margin-top: 250px;
    color: green;
  }
  .smallerdiv1 {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    &:visited {
      color: black;
      text-decoration: underline;
    }
  }
  .page1 {
    float: left;
    clear: both;
  }
`;

const Advertise = () => {
  const [bool1, setBool1] = useState(false);
  const [bool2, setBool2] = useState(false);
  const [bool3, setBool3] = useState(false);
  const [bool4, setBool4] = useState(false);
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
  return (
    <Wrapper>
      <div class="image">
        <div class="gridclass">
          <div></div>
          <div>
            <div class="heading">
              Branded Content. Digital <br /> Media.
              {/* Virtual Events. */}
            </div>

            <div class="text">
              TechCrunch offers partners an unsurpassed platform to reach
              passionate and sophisticated tech audiences. TechCrunch hosts
              events that combine digital media and virtual activations, as well
              as many media-only specials centered on momentous tech events. We
              {/* create influential content that engages readers and establish
              brands as industry thought leaders.{" "}  */}
            </div>
          </div>

          <div></div>
          <div style={{ height: "5px" }}></div>
          <div></div>
          <div>
            <div class="buttonarea">
              <button>TCBrandStudio</button>
              <button style={{ marginLeft: "10px" }}>ContactUs</button>
            </div>
          </div>
          <div></div>
          <div class="smallerdiv">
            <div class="smallerdiv1" onClick={handleClick1}>
              TC Events
            </div>
            <div class="smallerdiv1" onClick={handleClick2}>
              TC Digital
            </div>
            <div class="smallerdiv1" onClick={handleClick3}>
              Industry Events
            </div>
            <div class="smallerdiv1" onClick={handleClick4}>
              Activations Blog
            </div>
          </div>
          <div></div>
          <div>
            <div style={{ ...style1 }} class="page1">
              <hr />
              <h1>2021 Calendar</h1>
              <div style={{ float: "left", fontSize: "30px" }}>
                <div>March 3: TC Sessions: Justice</div>
                <div>April 1-2: Early Stage (Part 1)</div>
                <div>June 9: TC Sessions: Mobility</div>
                <div>July 8-9: Early Stage (Part 2)</div>
                <div>September 21-23: Disrupt</div>
              </div>
              <div style={{ float: "right", height: "100px", width: "100px" }}>
                <img src="https://techcrunch.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-13-at-10.24.25-AM.png?w=400&crop=1" />
              </div>
              <button
                style={{
                  clear: "both",
                  float: "left",
                  background: "linear-gradient(to right,#01a663,#03d206)"
                }}
              >
                contactus
              </button>
            </div>
            <div></div>
            <div>
              <div style={{ ...style2 }}>
                <hr />
                <h1>DigitalMedia</h1>
                <div style={{ float: "left", fontSize: "20px" }}>
                  <div>Reaching Founders</div>
                  <ul>
                    <li>Native media</li>
                    <li>Newsletters</li>
                    <li>Podcasts</li>
                    <li>Display media</li>
                    <li>Site takeovers</li>
                    <li>Seasonal sponsorships</li>
                    <li>Event coverage sponsorships</li>
                    And more
                  </ul>
                </div>
                <div
                  style={{ float: "right", height: "100px", width: "100px" }}
                >
                  <img src="https://techcrunch.com/wp-content/uploads/2021/01/Screen-Shot-2021-01-08-at-9.11.07-AM.png?w=400&crop=1" />
                </div>
              </div>
            </div>
            <div style={{ ...style3 }}>
              <h1>Virtual Coverage in 2020</h1>
              <div style={{ float: "left", fontSize: "20px" }}>
                <div>CES, F8, Google IO, WWDC,</div>
                <div> and announcements from </div>
                <div>Amazon, Apple, Google, Microsoft,</div>
                <div> Samsung, Tesla, and others.</div>
              </div>
              <div
                style={{
                  marginLeft: "100px",
                  float: "left",
                  height: "100px",
                  width: "100px"
                }}
              >
                <img src="https://techcrunch.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-04-at-10.08.46-AM.png?w=400&crop=1" />
              </div>
            </div>

            <div style={{ ...style4 }}>
              <ActivationsBlog />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Advertise;
