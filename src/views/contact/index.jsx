import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Holi from "../../assets/Holi.png";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import Youtube from "../../assets/Youtube.svg";
import Linkedin from "../../assets/LinkedIn.svg";
import Twitter from "../../assets/Twitter.svg";
import "./Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Container
      fluid
      className={`p-0 ${loading ? "no-scroll" : ""}`}
    >
      {loading && (
        <div className='loader'>
          <Spinner
            animation='grow'
            role='status'
          />
          <span style={{ marginLeft: "10px" }}>Loading...</span>
        </div>
      )}
      <Row
        className='align-items-center justify-content-center text-center g-0 mb-0'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${Holi})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          color: "white",
        }}
      >
        <Col xs={12}>
          <h1
            className='mb-3'
            style={{
              fontFamily: "Lalezar",
              fontSize: "3rem",
            }}
          >
            Become a part of AIS!
          </h1>
          <h4
            className='mb-3'
            style={{
              fontFamily: "Lalezar",
              fontSize: "2rem",
            }}
          >
            Join our newsletter
          </h4>
          <h5
            className='mb-4'
            style={{
              fontFamily: "Lalezar",
              fontSize: "1.5rem",
            }}
          >
            Follow us on
          </h5>
          <div className='d-flex justify-content-center gap-3'>
            <a
              href='https://www.instagram.com/aisusc/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={Instagram}
                alt='Instagram'
                className='social-icon'
                width='55px'
                height='55px'
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
                width='55px'
                height='55px'
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
                width='55px'
                height='55px'
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
                width='55px'
                height='55px'
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
                width='55px'
                height='55px'
              />
            </a>
          </div>
        </Col>
      </Row>

      {/* Contact Form Section */}
      <Row className='flex-column align-items-center contact-section'>
        <Col
          xs={12}
          md={8}
          lg={6}
          className='contact-form-container'
        >
          <h2 className='text-center mb-4 contact-title'>Contact Us</h2>
          <Form>
            <Form.Group
              className='mb-3'
              controlId='formName'
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your name'
                required
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='formEmail'
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter your email'
                required
              />
            </Form.Group>

            <Form.Group
              className='mb-3'
              controlId='formMessage'
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={4}
                placeholder='Enter your message'
                required
              />
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              className='w-100'
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
