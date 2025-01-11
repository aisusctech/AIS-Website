import React from "react";
import Header from "../components/Header";
import UpComingEvents from "../components/UpComingEvents";
import "./Home.css";
import Sponsor from "../components/Sponsor";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

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
