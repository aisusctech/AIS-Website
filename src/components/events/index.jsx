import React from "react";
import GaneshChathurti from '../../assets/diwali-1.svg';
import Diwali from '../../assets/diwali-2.svg';
import Holi from '../../assets/holi-2.svg';
import Garba from '../../assets/diwali-1.svg';
import DPSCoc from '../../assets/holi-2.svg';
import Janmashtami from '../../assets/diwali-1.svg';
import "./events.css";

const AllEvents = () => {
  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>All Events</h1>
      <div className='all-events-container'>
        <div className='eventpage-div'>
          <img
            src={GaneshChathurti}
            alt='Event 1'
            className='eventpage-image'
          />
          <p>Ganesh Chaturthi</p>
        </div>
        <div className='eventpage-div'>
          <img
            src={Diwali}
            alt='Event 2'
            className='eventpage-image'
          />
          <p>Diwali</p>
        </div>
        <div className='eventpage-div'>
          <img
            src={Holi}
            alt='Event 3'
            className='eventpage-image'
          />
          <p>Holi</p>
        </div>
        <div className='eventpage-div'>
          <img
            src={Garba}
            alt='Event 4'
            className='eventpage-image'
          />
          <p>Garba</p>
        </div>
        <div className='eventpage-div'>
          <img
            src={DPSCoc}
            alt='Event 5'
            className='eventpage-image'
          />
          <p>DPS - Chat Over Chaat</p>
        </div>
      </div>

      <div className='all-events-container1'>
        <div className='eventpage-div'>
          <img
            src={Janmashtami}
            alt='Event 1'
            className='eventpage-image'
          />
          <p>Janmashthami</p>
        </div>
        <div className='eventpage-div'>
          <img
            src={Janmashtami}
            alt='Event 2'
            className='eventpage-image'
          />
          <p>TBD</p>
        </div>
        <div className='eventpage-div'>
          <img
            src={Janmashtami}
            alt='Event 3'
            className='eventpage-image'
          />
          <p>TBD</p>
        </div>
        <div className='eventpage-div'>
          <img
            src={Janmashtami}
            alt='Event 4'
            className='eventpage-image'
          />
          <p>TBD</p>
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
