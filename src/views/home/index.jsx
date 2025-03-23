import React, { useEffect, useState } from "react";
import UpComingEvents from "@/components/upComingEvents";
import Sponsor from "@/components/sponsor";
import Testimonials from "@/components/testimonials";
import Spinner from 'react-bootstrap/Spinner';
import "./home.css";

const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={`home-container ${loading ? 'no-scroll' : ''}`}>
      {
      loading && <div className="loader"><Spinner animation="grow" role="status" /><span style={{marginLeft: "10px"}}>Loading...</span></div>
      }
      <div class='background-image-div'><p>Celebrating Culture, Connecting Communities!</p></div>
      <UpComingEvents />
      <div class='background-image-div1'></div>
      <Sponsor />
      <Testimonials />
    </div>
  );
};

export default Home;
