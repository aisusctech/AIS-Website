import React from "react";
import { Carousel } from "react-bootstrap";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
      <h1>Testimonials</h1>
      <Carousel className='carousel'>
        <Carousel.Item>
          <div className='testimonial'>
            <div className='profile'>
              <img
                src='/Assets/Images/Profile Picture.svg'
                alt='John Doe'
                className='profile-picture'
              />
              <div className='profile-info'>
                <p className='name'>John Doe</p>
                <p className='designation'>Event Attendee</p>
              </div>
            </div>
            <p>"This is the best event I've ever attended!"</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='testimonial'>
            <div className='profile'>
              <img
                src='/Assets/Images/Profile Picture.svg'
                alt='Jane Smith'
                className='profile-picture'
              />
              <div className='profile-info'>
                <p className='name'>Jane Smith</p>
                <p className='designation'>Event Attendee</p>
              </div>
            </div>
            <p>"Amazing experience, will definitely come again."</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='testimonial'>
            <div className='profile'>
              <img
                src='/Assets/Images/Profile Picture.svg'
                alt='Alex Johnson'
                className='profile-picture'
              />
              <div className='profile-info'>
                <p className='name'>Alex Johnson</p>
                <p className='designation'>Event Attendee</p>
              </div>
            </div>
            <p>"A well-organized and fun event. Highly recommend!"</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
