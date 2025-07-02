import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

// Images
import HomePage1 from "../Images/HomePage1.png";
import HomePage2 from "../Images/HomePage2.png";
import AstrologyImg from "../Images/astrology.png";
import ReikiImg from "../Images/reiki.png";
import VastuImg from "../Images/vastu.png";
import YantraImg from "../Images/yantra.png";

function TopNavbar() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowModal(false);
    setIsLogin(true);
  };

  const handleShow = () => setShowModal(true);
  const toggleForm = () => setIsLogin(!isLogin);

  const services = [
    {
      title: "Astrology",
      image: AstrologyImg,
      description: "Explore your life's path with expert astrology guidance and birth chart analysis.",
      link: "/astrology",
    },
    {
      title: "Reiki",
      image: ReikiImg,
      description: "Experience energy healing through Reiki for body, mind, and soul balance.",
      link: "/reiki",
    },
    {
      title: "Vastu",
      image: VastuImg,
      description: "Re-align your living space with the natural flow using Vastu principles.",
      link: "/vastu",
    },
    {
      title: "Divine Yantras",
      image: YantraImg,
      description: "Invoke divine energy through powerful Yantras for abundance and protection.",
      link: "/yantras",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">PRANVERSE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="../Pages/About.js">About us</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#astrology">Astrology</NavDropdown.Item>
                <NavDropdown.Item href="#reiki">Reiki</NavDropdown.Item>
                <NavDropdown.Item href="#vastu">Vastu</NavDropdown.Item>
                <NavDropdown.Item href="#yantras">Divine Yantras</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="outline-primary" onClick={handleShow}>
              Login / Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? "Login" : "Register"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {isLogin ? (
              <>
                <Form.Group className="mb-3" controlId="loginEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
                <div className="mt-3 text-center">
                  <small>
                    Don't have an account?{" "}
                    <span style={{ color: "blue", cursor: "pointer" }} onClick={toggleForm}>
                      Register
                    </span>
                  </small>
                </div>
              </>
            ) : (
              <>
                <Form.Group className="mb-3" controlId="registerName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>
                <Button variant="success" type="submit" className="w-100">
                  Register
                </Button>
                <div className="mt-3 text-center">
                  <small>
                    Already have an account?{" "}
                    <span style={{ color: "blue", cursor: "pointer" }} onClick={toggleForm}>
                      Login
                    </span>
                  </small>
                </div>
              </>
            )}
          </Form>
        </Modal.Body>
      </Modal>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={HomePage1}
            alt="First Slide"
            style={{ height: "800px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={HomePage2}
            alt="Second Slide"
            style={{ height: "800px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>

      {/* Service Cards */}
      <Container className="mt-5 mb-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row xs={1} md={2} className="g-4">
          {services.map((service, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={service.image} style={{ height: "220px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button variant="primary" onClick={() => navigate(service.link)}>
                    Explore {service.title}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default TopNavbar;
