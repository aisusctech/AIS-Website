import React from "react";
import Header from "../components/Header";
import "./Event.css";
import UpComingEvents from "../components/UpComingEvents";
import AllEvents from "../components/AllEvents";
import Footer from "../components/Footer";

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
