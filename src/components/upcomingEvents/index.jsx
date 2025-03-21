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
            <p>27 August 2025</p>
          </div>
        </div>
        <div className='event-div'>
          <div className='mask-bg event-2'></div>
          <div className='event-text'>
            <p>Diwali</p>
            <p>20 October 2025</p>
          </div>
        </div>
        <div className='event-div'>
          <div className='mask-bg event-3'></div>
          <div className='event-text'>
            <p>Garba</p>
            <p>30 September 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingEvents;