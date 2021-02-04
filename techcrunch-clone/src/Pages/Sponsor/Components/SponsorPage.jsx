import React from "react"
import styled from "styled-components"

const Form=styled.form`

div{
 width:600px;
  display:grid;
  grid-template-columns:55% 1% 24%;
  grid-template-rows:auto;
  grid-row-gap:20px
}
button{
 background: linear-gradient(to right,#01a663,#03d206);
 height:40px;
 border:0
}

`
const SponsorPage=()=>{
  return(
    <>
    <div style={{width:"600px"}}>
    <img src="https://info.techcrunch.com/rs/270-WRY-762/images/Tab_TC_Logo.jpg"/>
       <h1>TechCrunch Sponsorship Inquiries</h1>
    </div>
    <Form>
   
      <div>
        <label>First Name:</label>
        <label>*</label>
        <input required/>
        <label>Last Name:</label>
        <label>*</label>
        <input required/>
        <label>Company:</label>
        <label>*</label>
        <input required/>
        <label>Email Address:</label>
        <label>*</label>
        <input required/>
        <label>Phone Number:</label>
        <label>*</label>
        <input required/>
        <label>City:</label>
        <label>*</label>
        <input required/>
        <label>Country:</label>
        <label>*</label>
        <select>
          <option>select...</option>
          {["india","srilanka"].map(item =><option>{item}</option>)}
        </select>
        <label>Primary Enquiry:</label>
        <label>*</label>
        <select>
          <option>select...</option>
          {["Event Sponsorship","Display Media","Branded Content","Other"].map(item =><option>{item}</option>)}
        </select>
       <label>Inquiry details</label>
       <label>*</label>
       <input style={{height:"100px"}}/>
       <label> </label>
       <label> </label>
       <button >submit</button>
        </div> 
         
      </Form>
    </>
  )
}
export default SponsorPage