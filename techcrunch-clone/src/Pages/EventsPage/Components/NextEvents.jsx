import React, { useState } from "react";
import styled from "styled-components";
import EventCard from "./EventCard";
import SelectBox from "./SelectBox";

const NextEventsWrapper = styled.div`
  background: linear-gradient(to right, #01a663, #03d206);
  opacity: 0.7;
  width: 100% !important;
  height: auto;
  color: white;
  padding-left: 10px;
`;
const Header = styled.h1`
  font-weight: 900;
  font-size: 35px;
`;
const Body = styled.div``;
const ErrorMsg = styled.h2`
  color: white;
  margin: 30px 0;
`;
export const NextEvents = ({ events, props }) => {
  const [selectText, setSelectText] = useState("");

  const handleChange = (e) => {
    setSelectText(e.target.value);
  };
  let filterData =
    selectText !== ""
      ? events.nextEvents.filter((item) => item.name === selectText)
      : null;
  console.log(filterData);

  return (
    <NextEventsWrapper>
      <Header>Where we'll Be Next</Header>
      <Body>
        <p>Filter by:</p>
        <h5>Event Type</h5>
        <SelectBox
          events={events}
          selectText={selectText}
          handleChange={handleChange}
        />
        {selectText === "" ? (
          events.nextEvents &&
          events.nextEvents.map((item) => (
            <div key={item.id}>
              <EventCard data={item} props={props} />
            </div>
          ))
        ) : filterData.length === 0 ? (
          <ErrorMsg>No Events Found</ErrorMsg>
        ) : (
          filterData.map((item) => (
            <div key={item.id}>
              <EventCard data={item} props={props} />
            </div>
          ))
        )}
      </Body>
    </NextEventsWrapper>
  );
};
