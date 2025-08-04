import React from "react";
import Gradly from '../../assets/Gradly.png';
import Wee from '../../assets/Wee.png';
import EasyTransfer from '../../assets/EasyTransfer.png';
import RadioEvents from '../../assets/RadioEvents.png';
import BIH from '../../assets/BIH.png';
import "./sponsor.css";

const Sponsor = () => {
  return (
    <div className='sponsor-container'>
      <h1>Sponsors</h1>
      <div className='sponsor-grid'>
        <div className='sponsor-div'>
          <div className='inner-div'>PLATINUM</div>
          <img
            src={Gradly}
            alt='Sponsor 1'
            className='sponsor-image'
          />
        </div>
        <div className='sponsor-div'>
          <div className='inner-div'>BRONZE</div>
          <img
            src={Wee}
            alt='Sponsor 1'
            className='sponsor-image'
          />
          <img
            src={EasyTransfer}
            alt='Sponsor 2'
            className='sponsor-image'
          />
        </div>
        <div className='sponsor-div'>
          <div className='inner-div'>MEDIA PARTNER</div>
          <img
            src={RadioEvents}
            alt='Sponsor 1'
            className='sponsor-image'
          />
          <img
            src={BIH}
            alt='Sponsor 2'
            className='sponsor-image'
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
