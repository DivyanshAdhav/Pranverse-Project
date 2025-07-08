import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Modal,
  Form,
  // Carousel,
  // Card,
  // Col,
  // Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import HomePage1 from "../Images/HomePage1.png";
// import HomePage2 from "../Images/HomePage2.png";
// import AstrologyImg from "../Images/astrology.png";
// import ReikiImg from "../Images/reiki.png";
// import VastuImg from "../Images/vastu.png";
// import YantraImg from "../Images/yantra.png";

function TopNavbar() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    setIsLogin(true);
  };

  const handleShow = () => setShowModal(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-light shadow-sm py-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">PRANVERSE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
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

      {/* Login/Register Modal */}
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
    </>
  );
}

export default TopNavbar;
