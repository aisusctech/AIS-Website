import React from "react";
import Header from "../../components/header";
import UpComingEvents from "../../components/upComingEvents";
import AllEvents from "../../components/events";
import Footer from "../../components/footer";
import "./event.css";

const Events = () => {
  return (
    <div className='home-container'>
      <Header />
      <div class='background-image-div2'></div>
      <UpComingEvents />
      <AllEvents />
      <Footer />
    </div>
  );
};

export default Events;
