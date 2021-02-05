import Table from "./Table";
import React from "react";
import Feedback from "./Feedback";
import FilterForm from "./FilterForm";
 

const Investors = (props) => {
  return (
    <div>
      <FilterForm />
      <Feedback />
      <Table />
      <Feedback />
    </div>
  );
};

export default Investors;
