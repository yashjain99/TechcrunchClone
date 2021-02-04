import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { useSelector } from "react-redux";
import { Loader } from "../../Homepage/Components/Loader";

const Table = (props) => {
  const tcData = useSelector((state) => state.tcList.tcData);
  const [animatedLoader,setAnimatedLoader]=useState(true)
  console.log( tcData);

  useEffect(()=>{
    setTimeout(()=>{
      setAnimatedLoader(false)
    },5000)
  })
  return (
    <div style={{ padding: "0 250px" }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Company</td>
            <td>Verticals</td>
            <td>Round Type</td>
            <td>Location</td>
            <td>Portfolio</td>
          </tr>
        </thead>

        <tbody>
         
          { animatedLoader?(<Loader/>):  tcData &&
            tcData.map((item) => (
              <tr key={item.id}>
                <td style={{ color: "#00a562" }}>
                  <span>
                    <img src={item.profileUrl} width="35px" />
                  </span>
                  {item.name}
                </td>
                <td style={{ color: "#00a562" }}>
                  <span>
                    <img src={item.companyUrl} width="35px" />
                  </span>
                  {item.company}
                </td>
                <td style={{ color: "#00a562" }}>{item.verticals}</td>
                <td>{item.roundType}</td>
                <td>{item.Location}</td>
                <td>{item.portfolio.join("\n")}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
