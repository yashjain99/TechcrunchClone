import React from "react";
import styles from "./style.module.css";

const Header = (props) => {
  return (
    <div style={{ padding: "50px 300px" }}>
      <h2 className={styles.header_battlefield}>What is Battlefield?</h2>
      <div style={{ borderBottom: "2px solid #14c435", width: "80px" }}></div>
      <p className={styles.battlefield_description}>
        Startup Battlefield at brings the world’s top early stage startups
        together on one stage to compete for equity free prize money, and the
        attention of media and investors world wide. The judges include
        TechCrunch editors as well as top VCs and entrepreneurs, and past
        winners include names like Vurb, Dropbox, Mint, Yammer and many more.
        Participation is entirely free and open. Startup Battlefield Global
        winners receive $100,000 at Disrupt SF. Startup Battlefield regional
        competitions focus on highlighting ecosystems in specific areas around
        the world. TechCrunch has gone to Sub-Saharan Africa, Middle East &amp;
        North Africa, Australia, New Zealand, and Latin America.
      </p>
    </div>
  );
};

export default Header;
