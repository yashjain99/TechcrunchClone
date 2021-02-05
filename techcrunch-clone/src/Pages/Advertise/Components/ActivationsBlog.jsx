import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
const BlogWrapper = styled.div`
  .outer {
    width: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-row-gap: 20px;

    padding: 20px;
    margin-bottom: 10px;
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
const ActivationsBlog = () => {
  const data=useSelector(state=>state.home.newsHeadlines)
  const history=useHistory()
  const handleRedirect=(id)=>{
    history.push(`/news/${id}`)
  }
  console.log(data,"activationsblog")
  return (
    <>
     {data.map((item) => (
          <BlogWrapper key={item.id}>
            <div className="outer hovering" onClick={()=>handleRedirect(item.id)}>
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
    </>
  );
};
export default ActivationsBlog;
