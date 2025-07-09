import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLeaf, FaHeart, FaMagic, FaWhatsapp } from 'react-icons/fa';
import founderImg from '../Images/founder.png';
import aboutBg from '../Images/aboutBg.jpg';

const About = () => {
  return (
    <div style={{ backgroundColor: '#fffaf3', fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: `linear-gradient(rgba(135, 76, 204, 0.8), rgba(135, 76, 204, 0.8)), url(${aboutBg}) center/cover no-repeat`,
        }}
      >
        <Container>
          <h1 className="display-5 fw-bold">🌿 About Pranverse</h1>
          <p className="lead">Healing Hearts, Empowering Souls</p>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={founderImg}
                alt="Founder"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '450px', objectFit: 'cover' }}
              />
            </Col>
            <Col md={6}>
              <h2 className="text-purple">Meet Our Founder – Prachi Deshpande</h2>
              <p>
                With a calling for energy healing and spiritual awakening, Prachi started Pranverse to guide others in
                their journey toward peace, abundance, and clarity. She blends traditional Reiki wisdom, Tarot
                intuition, and vibrational practices to restore balance in the lives of her students and clients.
              </p>
              <p>
                💫 Her vision is to build a world where healing is simple, accessible, and soulful. Every course and
                session reflects this belief.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Vision */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <FaHeart size={40} className="text-purple mb-2" />
              <h5>Empathy & Love</h5>
              <p>We believe true healing starts from compassion—for yourself and others.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaLeaf size={40} className="text-success mb-2" />
              <h5>Natural Energy</h5>
              <p>We use Reiki, breathwork, and holistic methods to heal the mind, body & spirit.</p>
            </Col>
            <Col md={4} className="text-center">
              <FaMagic size={40} className="text-pink mb-2" />
              <h5>Spiritual Growth</h5>
              <p>Our mission is to awaken divine potential and foster inner clarity.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 text-center">
        <Container>
          <h3 className="mb-4">Ready to Start Your Healing Journey?</h3>
          <Button variant="primary" className="me-3" href="/courses">✨ Explore Courses</Button>
          <Button variant="success" href="https://wa.me/919405602223" target="_blank">
            <FaWhatsapp className="me-2" /> Chat on WhatsApp
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default About;
