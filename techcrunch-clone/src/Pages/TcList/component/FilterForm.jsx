import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import {useDispatch} from "react-redux"
 
import { getTcListData } from "../redux/action";
const FilterForm = (props) => {
  const [vertical,setVertical]=useState("")
  const [roundType,setRoundType]=useState("")
  const [location,setLocation]=useState("")
  const dispatch=useDispatch()
   
  useEffect(()=>{
    if(vertical && roundType && location){
      dispatch(getTcListData(`https://techcrunch-clone.herokuapp.com/tcList?&verticals=${vertical}&roundType=${roundType}&Location=${location}`))
    }
    else if(vertical && location){
      dispatch(getTcListData(`https://techcrunch-clone.herokuapp.com/tcList?&verticals=${vertical}&Location=${location}`))
    }
    else if(roundType && location){
      dispatch(getTcListData(`https://techcrunch-clone.herokuapp.com/tcList?&roundType=${roundType}&Location=${location}`))
    }
    else if(vertical && roundType){
      dispatch(getTcListData(`https://techcrunch-clone.herokuapp.com/tcList?&verticals=${vertical}&roundType=${roundType}`))
    }
    else if(location){
      dispatch(getTcListData(`https://techcrunch-clone.herokuapp.com/tcList?&Location=${location}`))
    }
    else if(roundType){
      dispatch(getTcListData(`https://techcrunch-clone.herokuapp.com/tcList?&roundType=${roundType}`))
    }
    else if(vertical){
      dispatch(getTcListData(`https://techcrunch-clone.herokuapp.com/tcList?&verticals=${vertical}`))
    }
    else {
      dispatch(getTcListData(`https://techcrunch-clone.herokuapp.com/tcList`))
    }
  },[vertical,roundType,location])
   const handleReset=()=>{
     setVertical("")
     setRoundType("")
     setLocation("")
   }
  return (
    <div className={styles.investors_filter_form}>
      <p style={{ color: "grey", fontSize: 15,marginLeft:"450px" }}>
        Filter by:{vertical && <span>{vertical}</span>}  {roundType && <span>,{roundType}</span>}  {location && <span>,{location}</span>}
        <button className={styles.investors_clear_button} onClick={handleReset}>
          <svg
            className="icon icon--close icon--green"
            viewBox="0 0 20 20"
            version="1.1"
            aria-labelledby="title"
          >
            <title>Close</title>
            <path d="M0,2.9h2.9V0H0V2.9z M2.9,5.7h2.9V2.9H2.9V5.7z M5.7,8.6h2.9V5.7H5.7V8.6z M8.6,11.4h2.9V8.6H8.6V11.4z M5.7,14.3h2.9v-2.9H5.7V14.3z M2.9,17.1h2.9v-2.9H2.9V17.1z M0,20h2.9v-2.9H0V20z M11.4,14.3h2.9v-2.9h-2.9V14.3z M14.3,17.1h2.9v-2.9h-2.9V17.1zM17.1,20H20v-2.9h-2.9V20z M11.4,8.6h2.9V5.7h-2.9V8.6z M14.3,5.7h2.9V2.9h-2.9V5.7z M17.1,2.9H20V0h-2.9V2.9z"></path>
          </svg>
          Clear Filters
        </button>
      </p>

      <div className={styles.filter_form_vertical}>
        <div className={styles.event_filter_box}>
          <h4 className={styles.event_title} style={{marginLeft:"450px"}} >Vertical</h4>
          <div>
            <select value={vertical} onChange={e=>setVertical(e.target.value)}>
              <option value=""></option>
              <option value="Fintech">Fintech</option>
              <option value="Enterprise Infrastructure">Enterprise Infrastructure</option>
              <option value="Digital Biotech">Digital Biotech</option>
              <option value="AI">AI</option>
              <option value="Media">Media</option>
              <option value="Enterprise Applications">Enterprise Applications</option>
              <option value="Space Tech">Space Tech</option>
              <option value="Food">Food</option>
              <option value="Space Tech">Space Tech</option>
              <option value="Consumer Health">Consumer Health</option>
              <option value="Edtech">Edtech</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{display:"flex"}}>

        <div className={styles.filter_form_roundType}>
            <div  className={styles.event_filter_box}>
                <h4 className={styles.event_title} style={{marginLeft:"450px"}}>Round Type</h4>
                <div>
                    <select value={roundType} onChange={e=>setRoundType(e.target.value)}>
                        <option value=""></option>
                        <option value="pre-seed">pre-seed</option>
                        <option value="Seed">Seed</option>
                        <option value="Early Stage">Early Stage</option>
                    </select>
                </div>
            </div>
        </div>
        <div className={styles.filter_form_location}>
        <div  className={styles.event_filter_box}>
                <h4 className={styles.event_title} style={{marginLeft:"20px"}} >Location</h4>
                <div>
                    <select value={location} onChange={e=>setLocation(e.target.value)}>
                        <option></option>
                        <option>New York City (NYC) / United States</option>
                        <option>San Francisco Bay Area (SF) / United States</option>
                        <option>Tel Aviv / Israel</option>
                        <option>Washington DC / United States</option>
                        <option>London / United Kingdom (UK) / Europe</option>
                        <option>Minneapolis / United States</option>
                        <option>New York City (NYC) / United States</option>
                        <option>San Francisco Bay Area (SF) / United States</option>
                        <option>Tel Aviv / Israel</option>
                    </select>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
