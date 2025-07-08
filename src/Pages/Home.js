
import React from 'react';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import HomePage1 from '../Images/HomePage1.png';
import HomePage2 from '../Images/HomePage2.png';
import AstrologyImg from '../Images/astrology.png';
import ReikiImg from '../Images/reiki.png';
import VastuImg from '../Images/vastu.png';
import YantraImg from '../Images/yantra.png';

const services = [
  {
    title: "Astrology",
    image: AstrologyImg,
    description: "Explore your life's path with expert astrology guidance.",
  },
  {
    title: "Reiki",
    image: ReikiImg,
    description: "Experience healing through Reiki for body, mind, and soul.",
  },
  {
    title: "Vastu",
    image: VastuImg,
    description: "Align your living space with Vastu principles.",
  },
  {
    title: "Divine Yantras",
    image: YantraImg,
    description: "Invoke divine energy through Yantras for protection.",
  },
];

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={HomePage1} alt="First slide" style={{ height: '600px', objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={HomePage2} alt="Second slide" style={{ height: '600px', objectFit: 'cover' }} />
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row xs={1} md={2} className="g-4">
          {services.map((service, index) => (
            <Col key={index}>
              <Card className="h-100">
                <Card.Img variant="top" src={service.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="primary">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center my-5">
          <h3>Watch Our Reiki for Students Video</h3>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
              width="960"
              height="515"
              src="https://www.youtube.com/embed/I2Os4tQ5m40?si=Juix_pLd_mDv-04v"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
