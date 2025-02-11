import React from "react";
import Gradly from '../../assets/Gradly.svg';
import Tripalink from '../../assets/Tripalink.svg';
import EasyTransfer from '../../assets/EasyTransfer.svg';
import Weee from '../../assets/Weee.svg';
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
            style={{ width: "126px", height: "60px" }}
          />
          <img
            src={Tripalink}
            alt='Sponsor 1'
            className='sponsor-image'
            style={{ width: "686px", height: "160px" }}
          />
        </div>
        <div className='sponsor-div'>
          <div className='inner-div'>BRONZE</div>
          <img
            src={EasyTransfer}
            alt='Sponsor 1'
            className='sponsor-image'
            style={{ width: "686px", height: "160px" }}
          />
        </div>
        <div className='sponsor-div'>
          <div className='inner-div'>GROCERY PARTNER</div>
          <img
            src={Weee}
            alt='Sponsor 1'
            className='sponsor-image'
            style={{ width: "686px", height: "160px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
