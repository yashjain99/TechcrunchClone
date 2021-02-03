import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTcListData } from "../redux/action";
import Content from "./Content";
import Investors from "./Investors";

const TcList = (props) => {
   
  return (
    <div>
      <Content />
      <Investors />
    </div>
  );
};

export default TcList;
