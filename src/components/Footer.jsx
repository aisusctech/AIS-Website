import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-left'>
          <img
            src='/Assets/Images/ais_logo1.svg'
            alt='AIS Logo'
            className='ais-logo'
            width='60px'
            height='60px'
          />
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            &copy; 2025 Association of Indian Students
          </p>
          <div className='social-icons'>
            <img
              src='/Assets/Images/Instagram.svg'
              alt='Instagram'
              className='social-icon'
              width='20px'
              height='20px'
            />
            <img
              src='/Assets/Images/Facebook.svg'
              alt='Facebook'
              className='social-icon'
              width='20px'
              height='20px'
            />
            <img
              src='/Assets/Images/Youtube.svg'
              alt='YouTube'
              className='social-icon'
              width='20px'
              height='20px'
            />
            <img
              src='/Assets/Images/LinkedIn.svg'
              alt='LinkedIn'
              className='social-icon'
              width='20px'
              height='20px'
            />
            <img
              src='/Assets/Images/Twitter.svg'
              alt='Twitter'
              className='social-icon'
              width='20px'
              height='20px'
            />
          </div>
        </div>
        <div className='footer-right'>
          <p>Email Us!</p>
          <p>Join our newsletter</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
