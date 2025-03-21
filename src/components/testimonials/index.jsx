import React from "react";
import { Carousel } from "react-bootstrap";
import Profile from "../../assets/profile.svg";
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
                src={Profile}
                alt='John Doe'
                className='profile-picture'
              />
              <div className='profile-info'>
                <p className='name'>Dr. Yannis C. Yortsos</p>
                <p className='designation'>Dean of USC Viterbi School of Engineering</p>
              </div>
            </div>
            <p>
              Every academic year the Association of Indian Students holds a number of great events
              that celebrate community, friendship, and Indian culture that tie as closer together
              while constantly opening our hearts and minds. It is wonderful to participate in these
              celebrations and cherish the indomitable spirit of our Indian students and friends, at
              Viterbi and across USC.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='testimonial'>
            <div className='profile'>
              <img
                src={Profile}
                alt='Jane Smith'
                className='profile-picture'
              />
              <div className='profile-info'>
                <p className='name'>Dr. Varun Soni</p>
                <p className='designation'>Dean of Religious Life</p>
              </div>
            </div>
            <p>
              Thank you for your leadership in bringing us together at a time when we needed it
              most, Through your many cultural celebrations, opportunity, and events, you really
              created a "home away from home" environment right here on campus. Congratulations on a
              very successful year and looking forward to the next one!
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='testimonial'>
            <div className='profile'>
              <img
                src={Profile}
                alt='Alex Johnson'
                className='profile-picture'
              />
              <div className='profile-info'>
                <p className='name'>Yadi Wang</p>
                <p className='designation'>Event Attendee</p>
              </div>
            </div>
            <p>
              It has been a great pleasure to work closely with AIS to create a home away from home
              for Indian students and scholars. From new students transition, campus involvement,
              cultural diversity, safety education to immigration advisement, AIS is one of my
              irreplaceable sources to know students' needs and enhance their engagement here at
              Viterbi
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='testimonial'>
            <div className='profile'>
              <img
                src={Profile}
                alt='Alex Johnson'
                className='profile-picture'
              />
              <div className='profile-info'>
                <p className='name'>Sudha Kumar</p>
                <p className='designation'>Director, USC Viterbi India Office</p>
              </div>
            </div>
            <p>
              Being part of the start of the journey of our graduate Indian students to USC Viterbi,
              It gives me great joy when I see the success of our students and their potential being
              realized. Do keep in touch with me, especially if you plan to return to India so that
              I can connect you to the Trojan family in India. I plan on following your many
              successes with great interest. Fight On!
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
