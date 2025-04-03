import React, { useEffect, useState } from "react";
import UpComingEvents from "../../components/upComingEvents";
import AllEvents from "../../components/events";
import { Spinner } from "react-bootstrap";
import "./events.css";

const Events = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={`home-container ${loading ? 'no-scroll' : ''}`}>
      {
        loading && <div className="loader"><Spinner animation="grow" role="status" /><span style={{ marginLeft: "10px" }}>Loading...</span></div>
      }
      <div className='background-image-div2'></div>
      <UpComingEvents />
      <AllEvents />
    </div>
  );
};

export default Events;
