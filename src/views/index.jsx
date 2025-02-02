import React from "react";
import Header from "../components/header";
import UpComingEvents from "../components/upComingEvents";
import Sponsor from "../components/sponsor";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer";
import "./home.css";

// create home component and use the header component
const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <div class='background-image-div'>lorem ipsum a lot</div>
      <UpComingEvents />
      <div class='background-image-div1'></div>
      <Sponsor />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
