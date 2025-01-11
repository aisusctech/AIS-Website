import React from "react";
import "./AllEvents.css";

const AllEvents = () => {
  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>All Events</h1>
      <div className='all-events-container'>
        <div className='eventpage-div'>
          <img
            src='/Assets/Images/diwali-1.svg'
            alt='Event 1'
            className='eventpage-image'
          />
          <p>Ganesh Chaturthi</p>
        </div>
        <div className='eventpage-div'>
          <img
            src='/Assets/Images/diwali-2.svg'
            alt='Event 2'
            className='eventpage-image'
          />
          <p>Diwali</p>
        </div>
        <div className='eventpage-div'>
          <img
            src='/Assets/Images/holi-2.svg'
            alt='Event 3'
            className='eventpage-image'
          />
          <p>Holi</p>
        </div>
        <div className='eventpage-div'>
          <img
            src='/Assets/Images/diwali-1.svg'
            alt='Event 4'
            className='eventpage-image'
          />
          <p>Garba</p>
        </div>
        <div className='eventpage-div'>
          <img
            src='/Assets/Images/holi-2.svg'
            alt='Event 5'
            className='eventpage-image'
          />
          <p>DPS - Chat Over Chaat</p>
        </div>
      </div>

      <div className='all-events-container1'>
        <div className='eventpage-div'>
          <img
            src='/Assets/Images/diwali-1.svg'
            alt='Event 1'
            className='eventpage-image'
          />
          <p>Janmashthami</p>
        </div>
        <div className='eventpage-div'>
          <img
            src='/Assets/Images/diwali-2.svg'
            alt='Event 2'
            className='eventpage-image'
          />
          <p>Something</p>
        </div>
        <div className='eventpage-div'>
          <img
            src='/Assets/Images/holi-2.svg'
            alt='Event 3'
            className='eventpage-image'
          />
          <p>Something</p>
        </div>
        <div className='eventpage-div'>
          <img
            src='/Assets/Images/diwali-1.svg'
            alt='Event 4'
            className='eventpage-image'
          />
          <p>Something</p>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
