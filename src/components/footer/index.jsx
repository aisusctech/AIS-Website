import React from "react";
import AISLogo from "../../assets/ais_logo.png";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import Youtube from "../../assets/Youtube.svg";
import Linkedin from "../../assets/LinkedIn.svg";
import Twitter from "../../assets/Twitter.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-left'>
          <img
            src={AISLogo}
            alt='AIS Logo'
            className='ais-logo'
            width='60px'
            height='60px'
          />
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            &copy; 2025 Association of Indian Students
          </p>
          <div className='social-icons'>
            <a
              href='https://www.instagram.com/aisusc/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={Instagram}
                alt='Instagram'
                className='social-icon'
                width='20px'
                height='20px'
              />
            </a>
            <a
              href='https://www.facebook.com/usc/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={Facebook}
                alt='Facebook'
                className='social-icon'
                width='20px'
                height='20px'
              />
            </a>
            <a
              href='https://www.youtube.com/user/USC'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={Youtube}
                alt='YouTube'
                className='social-icon'
                width='20px'
                height='20px'
              />
            </a>
            <a
              href='https://www.linkedin.com/groups/13693061/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={Linkedin}
                alt='LinkedIn'
                className='social-icon'
                width='20px'
                height='20px'
              />
            </a>
            <a
              href='https://x.com/usc'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={Twitter}
                alt='Twitter'
                className='social-icon'
                width='20px'
                height='20px'
              />
            </a>
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
