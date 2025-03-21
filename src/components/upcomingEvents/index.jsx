import React from "react";
import GaneshChaturthi from "../../assets/diwali-1.svg";
import Diwali from "../../assets/diwali-2.svg";
import Holi from "../../assets/holi-2.svg";
import "./upComingEvents.css";

const UpComingEvents = () => {
  return (
    <div className='upcoming-events-container'>
      <h1>Upcoming Events</h1>
      <div className='image-grid'>
        <div
          className='event-div'
          style={{ backgroundImage: `url(${GaneshChaturthi})` }}
        >
          <div className='event-text'>
            <p>Ganesh Chaturthi</p>
            <p>27 August 2025</p>
          </div>
        </div>
        <div
          className='event-div'
          style={{ backgroundImage: `url(${Diwali})` }}
        >
          <div className='event-text'>
            <p>Diwali</p>
            <p>20 October 2025</p>
          </div>
        </div>
        <div
          className='event-div'
          style={{ backgroundImage: `url(${Holi})` }}
        >
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
