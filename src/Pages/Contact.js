// import React from 'react';

// export default function Component() {
//   return (
//     <div style={{ padding: "100px", textAlign: "center" }}><h2>📞 Contact Page</h2></div>
//   );
// }

import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fffaf3, #ffe3e3)",
        minHeight: "100vh",
        padding: "60px 0",
      }}
    >
      <Container>
        <Card className="shadow-lg p-4 border-0 rounded-4">
          <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
            Contact Us
          </h2>
          <p
            className="text-center mb-5"
            style={{ fontSize: "16px", maxWidth: "700px", margin: "0 auto" }}
          >
            Have questions, suggestions, or want to connect with our spiritual
            guides? We’re here to help you on your divine journey. Reach out
            using the form or details below.
          </p>
          <Row>
            {/* Contact Form */}
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message..."
                  />
                </Form.Group>

                <div className="text-center d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
                <Button variant="success" type="submit">
                  Send Message
                </Button>
                 <a
                  href="https://wa.me/919518399882"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success"
                 >
                 Need Support
                 </a>
                </div>
              </Form>
            </Col>

            {/* Contact Info */}
            <Col md={6} className="mt-5 mt-md-0">
              <div className="ps-md-4">
                <h5 className="mb-2">📞 Phone</h5>
                <p style={{ marginBottom: "1.2rem" }}>+91 9518399882</p>

                <h5 className="mb-2">📧 Email</h5>
                <p style={{ marginBottom: "1.2rem" }}>support@pranverse.com</p>

                <h5 className="mb-2">📍 Address</h5>
                <p style={{ marginBottom: "1.2rem" }}>
                 Prachi Deshpande - Reiki Classes,<br/>
                 Reiki Healing, Reiki Music, Reiki Coins, Reiki Bracelets,<br/>
                 Unit 21, first floor, Abhinav Mahavidyalay, Avaanti Residences by ABIL Group,<br/>
                 Tilak Road, chowk, Pune, Maharashtra 411002
                </p>

                <h5 className="mb-3">🔗 Follow Us</h5>
                <div style={{ display: "flex", gap: "25px", fontSize: "28px" }}>
                  <a
                    href="https://www.facebook.com/share/15PuCntnxi/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#4267B2" }}
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/goodbyestress"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#0A66C2" }}
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://youtube.com/@pranverse2808?feature=shared"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#FF0000" }}
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Contact;
