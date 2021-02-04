import styles from "./style.module.css";
import React from "react";

const Content = (props) => {
  return (
    <div className={styles.article_content}>
      <p className={styles.speakable_summary}>
        <img
          src="https://techcrunch.com/wp-content/uploads/2020/05/the-techcrunch-list-logo.png"
          alt=""
          width="550"
          height="281"
        />
      </p>
      <p>
        Welcome to <strong>The TechCrunch List</strong> — a directory of the
        most active and engaged investors in the VC industry today as
        recommended by founders.
      </p>
      <p>
        <strong>
          Please head to our{" "}
          <a href="https://techcrunch.com/pages/the-techcrunch-list-faq/">
            frequently asked questions
          </a>{" "}
          page{" "}
        </strong>
        to learn more about&nbsp;what this List is, its methodology, the
        qualifications to be added, how to ask for changes or corrections, and
        how to send feedback.
      </p>
      <p>
        <strong>
          If you are a founder and want to{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScYuKc3aZfXlHq-7bOAhIbHKtbn7nJEbbqKoi4iPQWSCYn1oQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            submit a recommendation
          </a>
        </strong>
        , please help us out!
      </p>
      <h3>Some tips:</h3>
      <ul>
        <li>
          <strong>Use the three filters</strong> (“Vertical”, “Round Type”, and
          “Location”) to find the most relevant investors.
        </li>
        <li>
          <strong>“Verticals”</strong> lists the market verticals that an
          investor has the most depth in based on recommendations from founders
          and our data. Investors often invest outside of their main areas of
          expertise, so think of this as a key clue to an investor’s interests
          and not as a limitation on their thesis. We have 22 verticals
          available.
        </li>
        <li>
          <strong>“Round Type”&nbsp;</strong>can be “Pre-seed / Seed”, “Early
          Stage” or “Growth Stage”.
        </li>
        <li>
          <strong>“Location” </strong>is the “home base” of an investor. It is
          not meant to imply the only location that a listed VC invests in.
          Obviously, many investors invest nationally and globally even though
          they live in, say, San Francisco. We list only one location per
          investor.
        </li>
        <li>
          <strong>“Portfolio”</strong>&nbsp;lists the founders and portfolio
          companies that provide evidence for an investor’s inclusion on the
          list. A first name with an “@” symbol indicates a direct founder
          recommendation. Just a company indicates a publicly verified portfolio
          company that we believe the investor led a check into. We list a
          maximum of 5 companies under this heading.
        </li>
        <li>
          Given the width of the table, it is best viewed on a desktop computer.
        </li>
      </ul>
      <p>
        <strong>
          The TechCrunch List was most recently updated on Monday November 30,
          2020
        </strong>
        .
      </p>
      <p>
        <em>
          Remember a&nbsp;<strong>Cardinal Rule</strong> about venture
          capitalists: every investor is ultimately opportunistic. Seed
          investors sometimes participate in growth rounds. New York investors
          sometimes invest in London. Consumer investors sometimes invest in
          enterprise startups and vice versa. The TechCrunch List shows where
          people generally focus, but that should&nbsp;never imply that they
          don’t do anything outside of their main interests.
        </em>
      </p>
    </div>
  );
};

export default Content;
