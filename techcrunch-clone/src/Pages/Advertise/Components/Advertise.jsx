import React, { useState } from "react";
import styled from "styled-components";
import SideBar from "../../SideBar/Components/SideBar";
import ActivationsBlog from "./ActivationsBlog";
import FooterPage from "../../Footer/Components/FooterPage";
import { useHistory, Link } from "react-router-dom";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
`;
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
    border: 0px solid red;
    border-radius: 5px;
    font-weight: 700;
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
  const history = useHistory();
  console.log(history, "advertise");
  const handleRedirect = () => {
    history.push("/sponsor");
  };
  const [bool1, setBool1] = useState(true);
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
    <Cont>
      <div>
        <SideBar />
      </div>
      <div style={{ marginTop: "-120px" }}>
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
                  events that combine digital media and virtual activations, as
                  well as many media-only specials centered on momentous tech
                  events. We
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
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={handleRedirect}
                  >
                    ContactUs
                  </button>
                </div>
              </div>
              <div></div>
              <div
                class="smallerdiv"
                style={{ fontSize: "20px", fontWeight: "800" }}
              >
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
                  <h1
                    style={{
                      color: "black",
                      fontWeight: "900",
                      fontSize: "50px",
                    }}
                  >
                    2021 Calendar
                  </h1>

                  <div
                    style={{ float: "left", fontSize: "18px", color: "black" }}
                  >
                    <div>
                      <strong> March 3: </strong>TC Sessions: Justice
                    </div>
                    <div>
                      <strong>April 1-2:</strong> Early Stage (Part 1)
                    </div>
                    <div>
                      <strong>June 9: </strong>TC Sessions: Mobility
                    </div>
                    <div>
                      <strong>July 8-9:</strong> Early Stage (Part 2)
                    </div>
                    <div>
                      <strong>September 21-23:</strong> Disrupt
                    </div>
                    <div>
                      <strong>November 3:</strong> TC Sessions: SaaS
                    </div>

                    <p>
                      Visit the{" "}
                      <Link style={{ textDecoration: "none" }} to="/events">
                        TechCrunch Events Page
                      </Link>{" "}
                      for more information
                    </p>
                  </div>
                  <div
                    style={{
                      float: "right",
                      marginLeft: "500px",
                      marginTop: "-200px",
                    }}
                  >
                    <img
                      style={{ height: "350px", width: "350px" }}
                      src="https://techcrunch.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-13-at-10.24.25-AM.png?w=400&crop=1"
                    />
                  </div>
                  <button
                    onClick={handleRedirect}
                    style={{
                      clear: "both",
                      float: "left",
                      background: "linear-gradient(to right,#01a663,#03d206)",
                      color: "white",
                      letterSpacing: "1px",
                      marginTop: "-100px",
                    }}
                  >
                    contactus
                  </button>
                </div>
                <div></div>
                <div>
                  <div style={{ ...style2 }}>
                    <hr />
                    <h1
                      style={{
                        color: "black",
                        fontWeight: "900",
                        fontSize: "50px",
                      }}
                    >
                      DigitalMedia
                    </h1>
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
                      </ul>
                      <button
                        onClick={handleRedirect}
                        style={{
                          clear: "both",
                          float: "left",
                          background:
                            "linear-gradient(to right,#01a663,#03d206)",
                          color: "white",
                          letterSpacing: "1px",
                          margin: "20px",
                        }}
                      >
                        contactus
                      </button>
                    </div>
                    <div style={{ float: "right" }}>
                      <img
                        style={{ height: "350px", width: "350px" }}
                        src="https://techcrunch.com/wp-content/uploads/2021/01/Screen-Shot-2021-01-08-at-9.11.07-AM.png?w=400&crop=1"
                      />
                    </div>
                  </div>
                </div>
                <div style={{ ...style3 }}>
                  <hr />
                  <h1
                    style={{
                      color: "black",
                      fontWeight: "900",
                      fontSize: "50px",
                    }}
                  >
                    Virtual Coverage in 2020
                  </h1>
                  <h4
                    style={{
                      color: "black",
                      fontWeight: "900",
                      fontSize: "30px",
                    }}
                  >
                    Sponsor TechCrunch's coverage
                  </h4>
                  <div
                    style={{
                      float: "left",
                      fontSize: "16px",
                      fontWeight: "900",
                    }}
                  >
                    <div>CES, F8, Google IO, WWDC,</div>
                    <div> and announcements from </div>
                    <div>Amazon, Apple, Google, Microsoft,</div>
                    <div> Samsung, Tesla, and others.</div>
                  </div>
                  <div
                    style={{
                      marginLeft: "200px",
                      float: "left",
                      height: "100px",
                      width: "100px",
                    }}
                  >
                    <img
                      style={{ height: "300px", width: "400px" }}
                      src="https://techcrunch.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-04-at-10.08.46-AM.png?w=400&crop=1"
                    />
                  </div>
                </div>

                <div style={{ ...style4 }}>
                  <ActivationsBlog />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
        <div style={{ marginLeft: "250px", marginTop: "700px" }}>
          <FooterPage />
        </div>
      </div>
    </Cont>
  );
};
export default Advertise;
