import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BlogWrapper = styled.div`
  .outer {
    width: 700px;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-row-gap: 20px;
    padding: 5px;
    margin-bottom: 5px;
  }
  .hovering {
    &:hover {
      color: grey;
      cursor: pointer;
    }
  }
  .inner {
    display: flex;
    flex-direction: column;
  }
  .inner2 {
    font: 1.77 Helvetica Neue, Helvetica, Arial, sans-serif;
  }
`;

const BattlefieldNews = (props) => {
  const data = useSelector((state) => state.home.newsHeadlines);
  console.log(data, "dtat");
  return (
    <div style={{ marginLeft: "300px", marginRight: "300px" }}>
      <h1 style={{ color: "black", fontWeight: 700, margin: "50px 0" }}>
        Battlefield News
      </h1>
      <div>
        {data.filter((item)=>item.id<=8).map((item) => (
          <BlogWrapper key={item.id}>
            <div className="outer hovering">
              <div className="inner">
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {item.title}
                </div>
                <div>{item.author}</div>
                <div>{item.date} </div>
              </div>
              <div>{item.description}</div>
              <img src={item.urlToImage} alt="" style={{ width: "250px" }} />
            </div>
            <hr/>
          </BlogWrapper>
        ))}
      </div>
    </div>
  );
};

export default BattlefieldNews;
