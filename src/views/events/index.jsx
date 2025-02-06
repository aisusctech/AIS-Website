import React from "react";
import UpComingEvents from "../../components/upComingEvents";
import AllEvents from "../../components/events";
import "./events.css";

const Events = () => {
  return (
    <div className='home-container'>
      <div class='background-image-div2'></div>
      <UpComingEvents />
      <AllEvents />
    </div>
  );
};

export default Events;
