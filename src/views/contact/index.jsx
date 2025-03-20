import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Holi from "../../assets/Holi.png";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import Youtube from "../../assets/Youtube.svg";
import Linkedin from "../../assets/LinkedIn.svg";
import Twitter from "../../assets/Twitter.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <Container
      fluid
      className='p-0'
    >
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
            <img
              src={Instagram}
              alt='Instagram'
              className='social-icon'
              style={{ width: "50px", height: "50px" }}
            />
            <img
              src={Facebook}
              alt='Facebook'
              className='social-icon'
              style={{ width: "50px", height: "50px" }}
            />
            <img
              src={Youtube}
              alt='YouTube'
              className='social-icon'
              style={{ width: "50px", height: "50px" }}
            />
            <img
              src={Linkedin}
              alt='LinkedIn'
              className='social-icon'
              style={{ width: "50px", height: "50px" }}
            />
            <img
              src={Twitter}
              alt='Twitter'
              className='social-icon'
              style={{ width: "50px", height: "50px" }}
            />
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
