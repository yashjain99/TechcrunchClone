import React, { useState } from "react";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import LockIcon from "@material-ui/icons/Lock";
import styled from "styled-components";
const asd = "ads";

const Wrapper = styled.div`
  h3 {
    padding-bottom: 8px;
    color: #777;
    font-weight: 800;
  }
  .password {
    &:hover {
      cursor: pointer;
    }
  }
`;
const AccountDetailsPage = () => {
  const [booleanval, setBooleanval] = useState(false);
  const handleClick = () => {
    setBooleanval(!booleanval);
  };
  const visibilitystyle = {};
  if (booleanval) visibilitystyle.visibility = "hidden";
  else visibilitystyle.visibility = "visible";
  return (
    <>
      <Wrapper>
        <h1 style={{ color: "green" }}>Hi,Suneela</h1>
        <AccountCircleRoundedIcon style={{ fontSize: "100px" }} />
        <div class="password" style={{ color: "#00a562" }}>
          Change Password
          <LockIcon />
        </div>

        <div class="password" style={{ color: "#00a562" }}>
          {" "}
          Edit Account <EditOutlinedIcon />
        </div>

        <h3>Account Details</h3>
        <hr />
        <div style={{ display: "flex" }}>
          <div style={{ color: "#999", width: "120px" }}>Name</div>
          <div style={{ color: "#00a562" }}>Suneela</div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ color: "#999", width: "120px" }}>
            email
          </div>
          <div style={{ color: "#00a562" }}>Suneela.v@gmail.com</div>
        </div>
        <h3 class="password">Subscription Details</h3>
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
        <button style={{ float: "right", height: "40px" }}>logout</button>
      </Wrapper>
    </>
  );
};
export default AccountDetailsPage;
