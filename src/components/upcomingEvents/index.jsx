import React from "react";
import "./upComingEvents.css";

const UpComingEvents = () => {
  return (
    <div className='upcoming-events-container'>
      <h1>Upcoming Events</h1>
      <div className='image-grid'>
        <div
          className='event-div'
          style={{ backgroundImage: "url('/Assets/Images/diwali-1.svg')" }}
        >
          <div className='event-text'>
            <p>Ganesh Chaturthi</p>
            <p>15 September 2024</p>
          </div>
        </div>
        <div
          className='event-div'
          style={{ backgroundImage: "url('/Assets/Images/diwali-2.svg')" }}
        >
          <div className='event-text'>
            <p>Diwali</p>
            <p>15 September 2024</p>
          </div>
        </div>
        <div
          className='event-div'
          style={{ backgroundImage: "url('/Assets/Images/holi-2.svg')" }}
        >
          <div className='event-text'>
            <p>Garba</p>
            <p>15 September 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvents;
