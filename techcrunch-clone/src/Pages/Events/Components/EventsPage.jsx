import React, { Component } from "react";
import { EventsCard } from "./EventsCard";
import data from "./events.json";
class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...data],
    };
  }
  render() {
    // console.log(this.state.data);
    return (
      <div>
        {data?.map((item) => (
          <div>
            <EventsCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    );
  }
}

export default EventsPage;
