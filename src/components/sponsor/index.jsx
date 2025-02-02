import React from "react";
import "./sponsor.css";

const Sponsor = () => {
  return (
    <div className='sponsor-container'>
      <h1>Sponsors</h1>
      <div className='sponsor-grid'>
        <div className='sponsor-div'>
          <div className='inner-div'>PLATINUM</div>
          <img
            src='/Assets/Images/Gradly.svg'
            alt='Sponsor 1'
            className='sponsor-image'
            style={{ width: "126px", height: "60px" }}
          />
          <img
            src='/Assets/Images/Tripalink.svg'
            alt='Sponsor 1'
            className='sponsor-image'
            style={{ width: "686px", height: "160px" }}
          />
        </div>
        <div className='sponsor-div'>
          <div className='inner-div'>BRONZE</div>
          <img
            src='/Assets/Images/EasyTransfer.svg'
            alt='Sponsor 1'
            className='sponsor-image'
            style={{ width: "686px", height: "160px" }}
          />
        </div>
        <div className='sponsor-div'>
          <div className='inner-div'>GROCERY PARTNER</div>
          <img
            src='/Assets/Images/Weee.svg'
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
