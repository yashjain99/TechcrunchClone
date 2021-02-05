import React from "react";
import styles from "./style.module.css";

const Banner = (props) => {
  return (
    <div  style={{marginTop:"-100px"}} className={styles.content}>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <h1 style={{fontSize:"120px",fontWeight:"800"}}>
            Startup <br /> Battlefield
          </h1>
          <h4 style={{fontSize:"30px",fontWeight:"400"}}>TechCrunch's Premiere Startup Competition</h4>
          <hr/>
          <ul style={{display:"flex"}}>
            <li>
              <span className={styles.label}>COMPANIES</span>
              <span className={styles.value}>902</span>
            </li>
            <li style={{borderRight:"3px solid white",marginTop:"-10px",height:"80px",margin:"0 20px"}}></li>
            <li>
              <span className={styles.label}>TOTAL FUNDS RAISED</span>
              <span className={styles.value}>9 BILLION</span>
            </li>
            <li style={{borderRight:"3px solid white",marginTop:"-10px",height:"80px",margin:"0 20px"}}></li>
            <li>
              <span className={styles.label}>TOTAL EXITS</span>
              <span className={styles.value}>115</span>
              <span className={styles.disclaimer}>(as of January 2020)</span>
            </li>
          </ul>
        </div>
        <div className={styles.background_wrapper}>
           
          {/* <img
            src="https://techcrunch.com/wp-content/uploads/2018/02/bfbg.jpg?w=730&crop=1"
            width="1379px"
            height="868px"
            alt="banner"
          /> */}
        </div>
         
      </div>
    </div>
  );
};

export default Banner;
