import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./Event.css";

const events = [
  {
    title: "Ganesh Chaturthi",
    date: "15 September 2024",
    img: "/Assets/Images/HomePage.png", // Replace with your image path
  },
  {
    title: "Diwali",
    date: "15 September 2024",
    img: "/Assets/Images/HomePage.png", // Replace with your image path
  },
  {
    title: "Garba",
    date: "15 September 2024",
    img: "/Assets/Images/HomePage.png", // Replace with your image path
  },
];

const Home = () => {
  return (
    <Container>
      <div
        style={{
          textAlign: "center",
          backgroundImage: "url('/Assets/Images/HomePage.png')",
          width: "100%",
          height: "500px",
        }}
      >
        <h1>Home Page</h1>
      </div>

      <Container
        style={{
          backgroundColor: "#151515",
          width: "100%",
          height: "50px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ color: "white" }}>Upcoming Events</h1>
        <Row className='g-4'>
          {events.map((event, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
            >
              <Card className='event-card text-white'>
                <Card.Img
                  src={event.img}
                  alt={event.title}
                  className='card-img'
                />
                <Card.ImgOverlay className='d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-50'>
                  <Card.Title className='fs-4'>{event.title}</Card.Title>
                  <Card.Text className='fs-6'>{event.date}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
