
// import React from 'react';
// import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
// import HomePage1 from '../Images/HomePage1.png';
// import HomePage2 from '../Images/HomePage2.png';
// import AstrologyImg from '../Images/astrology.png';
// import ReikiImg from '../Images/reiki.png';
// import VastuImg from '../Images/vastu.png';
// import YantraImg from '../Images/yantra.png';

// const services = [
//   {
//     title: "Astrology",
//     image: AstrologyImg,
//     description: "Explore your life's path with expert astrology guidance.",
//   },
//   {
//     title: "Reiki",
//     image: ReikiImg,
//     description: "Experience healing through Reiki for body, mind, and soul.",
//   },
//   {
//     title: "Vastu",
//     image: VastuImg,
//     description: "Align your living space with Vastu principles.",
//   },
//   {
//     title: "Divine Yantras",
//     image: YantraImg,
//     description: "Invoke divine energy through Yantras for protection.",
//   },
// ];

// function Home() {
//   return (
//     <>
//       <Carousel>
//         <Carousel.Item>
//           <img className="d-block w-100" src={HomePage1} alt="First slide" style={{ height: '600px', objectFit: 'cover' }} />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img className="d-block w-100" src={HomePage2} alt="Second slide" style={{ height: '600px', objectFit: 'cover' }} />
//         </Carousel.Item>
//       </Carousel>

//       <Container className="mt-5">
//         <h2 className="text-center mb-4">Our Services</h2>
//         <Row xs={1} md={2} className="g-4">
//           {services.map((service, index) => (
//             <Col key={index}>
//               <Card className="h-100">
//                 <Card.Img variant="top" src={service.image} style={{ height: '200px', objectFit: 'cover' }} />
//                 <Card.Body>
//                   <Card.Title>{service.title}</Card.Title>
//                   <Card.Text>{service.description}</Card.Text>
//                   <Button variant="primary">Explore</Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         <div className="text-center my-5">
//           <h3>Watch Our Reiki for Students Video</h3>
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <iframe
//               width="960"
//               height="515"
//               src="https://www.youtube.com/embed/I2Os4tQ5m40?si=Juix_pLd_mDv-04v"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default Home;

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaYinYang,
  FaHandsHelping,
  FaLeaf,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

import reikiImage from "../Images/reiki_session.jpg";
import tarotImage from "../Images/meditation_silhouette.jpg";
import healingImage from "../Images/energy_transmission.jpg";
import consultationImage from "../Images/life_problem.jpeg";
import meditationImage from "../Images/meditation.jpeg";
import chakraOverlay from "../Images/chakraOverlay.png";
import sacredGeometryOverlay from "../Images/meditation_silhouette.jpg";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#fffaf3", fontFamily: "Poppins, sans-serif" }}>
     {/* Hero Section */}
      <section
  style={{
    backgroundImage: `linear-gradient(to bottom right, rgba(135, 76, 204, 0.8), rgba(255, 240, 245, 0.8)), url(${chakraOverlay})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "120px 20px",
    color: "#fff",
    textAlign: "center",
    position: "relative",
  }}
>
  <Container>
    <h1 className="display-3 fw-bold" style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.3)" }}>
      ✨ Heal Your Energy & Energy of Your Space ✨
    </h1>
    <p className="lead mt-3" style={{ fontSize: "20px", color: "#fdfdfd" }}>
      Transform your life through sacred healing, reiki, tarot, and guided meditation 🌿
    </p>

    <div className="mt-4">
      <Button as={Link} to="/courses" variant="light" size="lg" className="me-3">
        🌟 Explore Courses
      </Button>
      <Button href="https://wa.me/919405602223" target="_blank" variant="outline-light" size="lg">
        📲 Chat on WhatsApp
      </Button>
    </div>

    {/* Optional: glowing image below buttons */}
    <img
      src={sacredGeometryOverlay}
      alt="Healing Energy"
      className="img-fluid mt-5 shadow"
      style={{ maxWidth: "300px", borderRadius: "12px", boxShadow: "0 0 30px rgba(255, 255, 255, 0.4)" }}
    />
  </Container>
</section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 text-purple">✨ What We Offer</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center shadow">
                <Card.Img variant="top" src={reikiImage} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>💫 Reiki Healing</Card.Title>
                  <Card.Text>Channel divine energy to restore emotional, physical, and mental balance.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center shadow">
                <Card.Img variant="top" src={tarotImage} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>🔮 Tarot Guidance</Card.Title>
                  <Card.Text>Unlock clarity through sacred symbols and intuitive guidance.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center shadow">
                <Card.Img variant="top" src={healingImage} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>🌈 Energy Transmission</Card.Title>
                  <Card.Text>Receive spiritual downloads and chakra cleansing through advanced practices.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Consultation Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={consultationImage} alt="Consultation" className="img-fluid rounded shadow" />
            </Col>
            <Col md={6}>
              <h2 className="text-purple"><FaHandsHelping className="me-2" />Need Personal Guidance?</h2>
              <p>We offer 1:1 consultations to help with:</p>
              <ul>
                <li>❤️ Relationships & Emotional Healing</li>
                <li>💸 Money Blocks & Career Confusion</li>
                <li>🧠 Anxiety, Stress, Depression</li>
                <li>🧘‍♀️ Spiritual Awakening & Energy Imbalance</li>
              </ul>
              <Button variant="success" href="https://wa.me/919405602223" target="_blank">
                <FaWhatsapp className="me-2" /> Book Consultation on WhatsApp
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Meditation Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="text-purple"><FaLeaf className="me-2" />Free Meditation Sessions</h2>
              <p>
                Join us every <strong>Tuesday & Thursday</strong> for free chakra healing meditations.
                Experience peace, balance, and relaxation in just 30 minutes.
              </p>
              <Button variant="outline-success" href="https://wa.me/919405602223" target="_blank">
                Join Now on WhatsApp
              </Button>
            </Col>
            <Col md={6}>
              <img src={meditationImage} alt="Meditation" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* YouTube Embed Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center text-purple mb-4">🎥 Learn About Energy Healing</h2>
          <Row className="justify-content-center">
            <Col md={8}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe
                  src="https://www.youtube.com/embed/I2Os4tQ5m40"
                  title="Reiki & Tarot Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  }}
                />
              </div>
              <p className="mt-3 text-center text-muted">By Prachi Deshpande – Founder, Pranverse</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 text-center" style={{ backgroundColor: '#EBD9FF' }}>
        <Container>
          <h2 className="mb-4">🌟 Ready to Begin Your Spiritual Journey?</h2>
          <p>Enroll in Reiki & Tarot Courses Today and Heal from Within!</p>
          <Link to="/courses">
            <Button size="lg" variant="primary">
              View All Courses <FaArrowRight className="ms-2" />
            </Button>
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default Home;
