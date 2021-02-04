import React from "react";
import styles from "./style.module.css";

const Feedback = (props) => {
  return (
    <p className={styles.feedback_link}>
      <a href="mailto:list@techcrunch.com" target="_blank" style={{textDecoration:"none"}}>
        <svg
          className="icon icon--feedback icon--green"
          viewBox="0 0 22 22"
          version="1.1"
          aria-labelledby="title"
          width="22"
        >
          <title>feedback</title>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M22 0v16H6v-2h14V2H2v16h2v2H2v2H0V0h22zM6 16v2H4v-2h2zm12-7v2H4V9h14zm0-4v2H4V5h14z"
          ></path>
        </svg>
        Feedback
      </a>
    </p>
  );
};

export default Feedback;
