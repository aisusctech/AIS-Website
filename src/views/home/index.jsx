import React from "react";
import UpComingEvents from "../../components/upComingEvents";
import Sponsor from "../../components/sponsor";
import Testimonials from "../../components/testimonials";
import "./home.css";

const Home = () => {
  return (
    <div className='home-container'>
      <div class='background-image-div'>lorem ipsum a lot</div>
      <UpComingEvents />
      <div class='background-image-div1'></div>
      <Sponsor />
      <Testimonials />
    </div>
  );
};

export default Home;
