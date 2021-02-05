import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  div {
    width: 600px;
    display: grid;
    grid-template-columns: 55% 1% 24%;
    grid-template-rows: auto;
    grid-row-gap: 20px;
  }
  button {
    background: linear-gradient(to right, #01a663, #03d206);
    height: 40px;
    border: 0;
  }
  input {
    width: 250px;
    marginleft: -100px;
  }
  label{
    font-weight:"500"
  }
`;
const SponsorPage = () => {
  const history=useHistory()
  const handleRedirect=()=>{
    history.push("/response")
  }
  return (
    <>
      <div style={{ margin: "50px 300px" }}>
        <img src="https://info.techcrunch.com/rs/270-WRY-762/images/Tab_TC_Logo.jpg" />
        <h1 style={{ color: "black", fontWeight: "900", fontSize: "40px" }}>
          TechCrunch Advertising Inquiries
        </h1>
      </div>
      <Form>
        <div style={{ margin: "50px 300px",fontWeight:"700" }}>
          <label>First Name:</label>
          <label>*</label>
          <input required />
          <label>Last Name:</label>
          <label>*</label>
          <input required />
          <label>Company:</label>
          <label>*</label>
          <input required />
          <label>Email Address:</label>
          <label>*</label>
          <input required />
          <label>Phone Number:</label>
          <label>*</label>
          <input required />
          <label>City:</label>
          <label>*</label>
          <input required />
          <label>Country:</label>
          <label>*</label>
          <select>
            <option>select...</option>
            {["india", "srilanka"].map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <label>Primary Enquiry:</label>
          <label>*</label>
          <select>
            <option>select...</option>
            {[
              "Event Sponsorship",
              "Display Media",
              "Branded Content",
              "Other",
            ].map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <label>Inquiry details</label>
          <label>*</label>
          <input style={{ height: "100px" }} />
          <label> </label>
          <label> </label>
          <button onClick={handleRedirect}
            style={{
              borderRadius: "5px",
              color: "white",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            submit
          </button>
        </div>
      </Form>
      <div style={{marginLeft:"300px"}}>
        <p>
          <span style={{fontFamily:"aktiv-grotesk,sans-serif", fontWeight: "800"}}>
            Data Protection
          </span>
          <br />
          By completing this form, you also agree to all TechCrunch{" "}
          <a
            href="https://docs.google.com/document/d/1yihdcQUcN4AhD68BR6ijLiILtPhSca53dwvaYw1S2GU"
            target="_blank"
            id=""
          >
            Terms and Conditions
            <br/>
          </a>{" "}
          and are subject to{" "}
          <a href="https://www.verizonmedia.com/policies/ie/en/verizonmedia/privacy/mydata/index.html#meetoath">
            Verizon Media's Privacy Policies
          </a>
          .
        </p>
      </div>
    </>
  );
};
export default SponsorPage;
