import React, { useEffect, useState } from "react";
import styles from "../../TcList/Component/style.module.css";
import {useDispatch} from "react-redux"
 
import { getLeaderboardData } from "../Redux/action";
const FilterForm = ({page}) => {
  const [event,setEvent]=useState("")
  const [outcome,setOutcome]=useState("")
  const [status,setStatus]=useState("")
  const dispatch=useDispatch()
   console.log(page,"page")
  useEffect(()=>{
    if(event && outcome && status){
      dispatch(getLeaderboardData(`https://techcrunch-clone.herokuapp.com/leaderboard?_page=${page}&_limit=10&event=${event}&outcome=${outcome}&status=${status}`))
    }
    else if(event && status){
      dispatch(getLeaderboardData(`https://techcrunch-clone.herokuapp.com/leaderboard?_page=${page}&_limit=10&event=${event}&status=${status}`))
    }
    else if(outcome && status){
      dispatch(getLeaderboardData(`https://techcrunch-clone.herokuapp.com/leaderboard?_page=${page}&_limit=10&outcome=${outcome}&status=${status}`))
    }
    else if(event && outcome){
      dispatch(getLeaderboardData(`https://techcrunch-clone.herokuapp.com/leaderboard?_page=${page}&_limit=10&event=${event}&outcome=${outcome}`))
    }
    else if(status){
      dispatch(getLeaderboardData(`https://techcrunch-clone.herokuapp.com/leaderboard?_page=${page}&_limit=10&status=${status}`))
    }
    else if(outcome){
      dispatch(getLeaderboardData(`https://techcrunch-clone.herokuapp.com/leaderboard?_page=${page}&_limit=10&outcome=${outcome}`))
    }
    else if(event){
      dispatch(getLeaderboardData(`https://techcrunch-clone.herokuapp.com/leaderboard?_page=${page}&_limit=10&event=${event}`))
    }
    else {
      dispatch(getLeaderboardData(`https://techcrunch-clone.herokuapp.com/leaderboard?_page=${page}&_limit=10`))
    }
  },[event,outcome,status,page])
   const handleReset=()=>{
     setEvent("")
     setOutcome("")
     setStatus("")
   }
  return (
    <div className={styles.investors_filter_form}>
      <p style={{ color: "grey", fontSize: 15,marginLeft:"450px" }}>
        Filter by:{event && <span>{event}</span>}  {outcome && <span>,{outcome}</span>}  {status && <span>,{status}</span>}
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
          <h4 className={styles.event_title} style={{marginLeft:"450px"}} >Events</h4>
          <div>
            <select value={event} onChange={e=>setEvent(e.target.value)}>
              <option value=""></option>
              <option value="Disrupt 2020">Disrupt 2020</option>
              <option value="Disrupt SF 2015">Disrupt SF 2015</option>
              <option value="TC30 2006">TC30 2006</option>
              <option value="TC50 2008">TC50 2008</option>
              <option value="TC40 2007 ">TC40 2007 </option>
              <option value="Disrupt NY 2015">Disrupt NY 2015</option>
              <option value="Hardware Battlefield 2016">Hardware Battlefield 2016</option>
              <option value="Disrupt London 2016">Disrupt London 2016</option>
              <option value="Battlefield Africa">Battlefield Africa</option>
              <option value="Disrupt Berlin 2019">Disrupt Berlin 2019</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{display:"flex"}}>

        <div className={styles.filter_form_roundType}>
            <div  className={styles.event_filter_box}>
                <h4 className={styles.event_title} style={{marginLeft:"450px"}}>Outcomes</h4>
                <div>
                    <select value={outcome} onChange={e=>setOutcome(e.target.value)}>
                        <option value=""></option>
                        <option value="Runner UP">Runner UP</option>
                        <option value="Contestant">Contestant</option>
                        <option value="Audience Choice">Audience Choice</option>
                        <option value="Finalist">Finalist</option>
                        <option value="Winner">Winner</option>
                    </select>
                </div>
            </div>
        </div>
        <div className={styles.filter_form_location}>
        <div  className={styles.event_filter_box}>
                <h4 className={styles.event_title} style={{marginLeft:"20px"}} >Status</h4>
                <div>
                    <select value={status} onChange={e=>setStatus(e.target.value)}>
                        <option value=""></option>
                        <option value="Operating">Operating</option>
                        <option value="Closed">Closed</option>
                        <option value="Acquired">Acquired</option>
                        <option value="IPO">IPO</option>
                    </select>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
