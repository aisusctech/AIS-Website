import React from "react";
import "./upComingEvents.css";

const UpComingEvents = () => {
  return (
    <div className='upcoming-events-container'>
      <h1>Upcoming Events</h1>
      <div className='image-grid'>
        <div className='event-div'>
          <div className='mask-bg event-1'></div>
          <div className='event-text'>
            <p>Ganesh Chaturthi</p>
            <p>06 September 2025</p>
          </div>
        </div>
        <div className='event-div'>
          <div className='mask-bg event-3'></div>
          <div className='event-text'>
            <p>Garba</p>
            <p>26 September 2025</p>
          </div>
        </div>
        <div className='event-div'>
          <div className='mask-bg event-2'></div>
          <div className='event-text'>
            <p>Diwali</p>
            <p>01 November 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvents;