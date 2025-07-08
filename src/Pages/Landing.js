// src/Pages/Landing.js

import React, { useState, useEffect } from "react";
import { Container, Card, Button, Modal, Form, Row, Col, Accordion } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaStar, FaLeaf, FaArrowUp, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import FounderVideos from "./FounderVideos";
import './Landing.css';

import reikiSession from "../Images/reiki_session.jpg";
import calmingTouch from "../Images/calming_touch.jpg";
import energyTransmission from "../Images/energy_transmission.jpg";
import meditation from "../Images/meditation.jpeg";
import life_problem from "../Images/life_problem.jpeg";

const Landing = () => {
  const [showForm, setShowForm] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
  const whatsappSupportLink = "https://wa.me/919405602223";

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "#fffaf3", fontFamily: "Poppins, sans-serif" }}>
      <section id="hero" className="text-center text-white hero-banner py-5 px-3" style={{ backgroundColor: '#874CCC' }}>
        <Container>
          <motion.h1 className="display-5 fw-bold" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>✨ Heal, Grow & Transform with Reiki ✨</motion.h1>
          <motion.p className="lead mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.3 }}>
            "If there is to be peace in the home, there must be peace in the HEART..." — Lao Tzu
          </motion.p>
          <motion.p className="mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.5 }}>
            Someone once asked, <i>Why Reiki?</i> Because Reiki brings peace in the heart 💖
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.7 }}>
            <Button variant="light" size="lg" href="#courses" className="mt-4">Explore Courses</Button>
          </motion.div>
        </Container>
      </section>

      <FounderVideos />

      <motion.section className="py-5 bg-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}><img src={life_problem} alt="Life Issues" className="img-fluid rounded shadow" /></Col>
            <Col md={6} className="mt-4 mt-md-0">
              <h3 className="text-purple">Do you face any of these?</h3>
              <ul>
                <li>Relationship struggles or heartbreak?</li>
                <li>Financial instability or career block?</li>
                <li>Constant anxiety or emotional imbalance?</li>
                <li>Lack of clarity or spiritual disconnect?</li>
              </ul>
              <p><strong>🌈 Our courses help turn pain into purpose, and blocks into breakthroughs.</strong></p>
            </Col>
          </Row>
        </Container>
      </motion.section>

      <motion.section className="py-5" style={{ backgroundColor: '#eaf4f4' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="text-purple"><FaLeaf className="me-2" />Free Meditation Sessions</h2>
              <p>Join free weekly meditations on <strong>Tuesday & Thursday</strong>. Relax, recharge and realign your chakras through guided healing.</p>
              <Button href={whatsappSupportLink} variant="outline-success">Join Free Session</Button>
            </Col>
            <Col md={6}>
              <img src={meditation} alt="Meditation" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </motion.section>

      <motion.section id="courses" className="py-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Container>
          <h2 className="text-center text-purple mb-4">📚 Our Healing Courses</h2>
          <Row>
            {[{
              title: "🌟 Reiki Level 1: Hands-on Healing",
              description: "Basics of Reiki, chakras & emotional healing. Includes attunement, real case studies, and hands-on practice.",
              price: "₹5,900",
              img: reikiSession
            }, {
              title: "🌐 Reiki Level 2: Distance Healing",
              description: "Send healing across time/space, heal past traumas, shield energy. Deepen your Reiki practice.",
              price: "₹11,800",
              img: calmingTouch
            }, {
              title: "⚡ Reiki Level 3: Advanced Techniques",
              description: "Use Reiki symbols for spiritual growth, aura cleansing, deep chakra healing. Prepares for mastership.",
              price: "₹17,000",
              img: energyTransmission
            }, {
              title: "👑 Reiki Level 4: Reiki Master",
              description: "Become a certified Reiki Master. Learn to initiate others, conduct attunements, and grow as a spiritual guide.",
              price: "₹21,000",
              img: reikiSession
            }, {
              title: "🔮 Tarot Mastery (Beginner–Advanced)",
              description: "Learn intuitive Tarot reading, signs from the universe, daily rituals, and card spreads.",
              price: "Live on WhatsApp – ₹7,999",
              img: calmingTouch
            }, {
              title: "🎁 Combo Offer: Reiki 1+2+Tarot",
              description: "Complete energy & divination mastery. Save with our bundled combo!",
              price: "Combo Price: ₹16,000",
              img: energyTransmission
            }].map((course, idx) => (
              <Col md={6} lg={4} className="mb-4" key={idx}>
                <Card className="h-100 shadow">
                  <Card.Img variant="top" src={course.img} style={{ height: '250px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <p><strong>{course.price}</strong></p>
                    <Button variant="primary" className="me-2" onClick={handleShowForm}>Enroll Now</Button>
                    <Button variant="outline-success" href={whatsappSupportLink} target="_blank">Need Support</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      <motion.section className="py-5 bg-light" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Container>
          <h2 className="text-center text-purple mb-4"><FaQuestionCircle className="me-2" />FAQs</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is prior experience required?</Accordion.Header>
              <Accordion.Body>No, these courses are designed for both beginners and those with spiritual background.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>What is the mode of training?</Accordion.Header>
              <Accordion.Body>Live training via WhatsApp with real-time guidance and Q&A.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Are certificates provided?</Accordion.Header>
              <Accordion.Body>Yes, you will receive a digital certificate upon completion.</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </motion.section>

      <motion.section className="py-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Container>
          <h2 className="text-center text-purple mb-4"><FaStar className="me-2" />Testimonials</h2>
          <Row>
            {["Reiki Level 1 helped me sleep peacefully for the first time in years!", "I connected to my intuition deeply through Tarot."].map((text, i) => (
              <Col md={6} key={i}>
                <Card className="shadow mb-3">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>“{text}”</p>
                      <footer className="blockquote-footer">Verified Student</footer>
                    </blockquote>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </motion.section>

      <Modal show={showForm} onHide={handleCloseForm} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enroll in Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>
            <hr />
            <p className="text-center">
              <strong>Pay using UPI:</strong><br />
              <span style={{ fontSize: "18px", color: "#874CCC" }}>9405602223@superyes</span><br />
              <em>UPI Display Name: <strong>PRANVERSE</strong></em>
            </p>
            <p className="text-center text-muted small">After payment, you will be contacted via WhatsApp</p>
            <Button variant="success" className="w-100 mt-3" href={whatsappSupportLink} target="_blank">I’ve Paid - Contact Support</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <motion.section className="footer bg-purple text-white py-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Container className="text-center">
          <p>Follow us on</p>
          <div>
            <a href="#" className="text-white me-3"><FaFacebook /></a>
            <a href="#" className="text-white me-3"><FaInstagram /></a>
            <a href={whatsappSupportLink} className="text-white"><FaWhatsapp /></a>
          </div>
          <small className="d-block mt-2">&copy; 2025 Pranverse. All rights reserved.</small>
        </Container>
      </motion.section>

      {showTop && (
        <Button variant="dark" className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </Button>
      )}
    </div>
  );
};

export default Landing;

// src/Pages/Landing.js

// import React, { useState, useEffect } from "react";
// import { Container, Card, Button, Modal, Form, Row, Col, Accordion } from "react-bootstrap";
// import { motion } from "framer-motion";
// import { FaQuestionCircle, FaStar, FaLeaf, FaArrowUp, FaFacebook, FaInstagram, FaWhatsapp, FaCertificate } from "react-icons/fa";
// import FounderVideos from "./FounderVideos";
// import './Landing.css';

// import reikiSession from "../Images/reiki_session.jpg";
// import calmingTouch from "../Images/calming_touch.jpg";
// import energyTransmission from "../Images/energy_transmission.jpg";
// import meditationImage from "../Images/meditation.jpeg";
// import lifeProblems from "../Images/life_problem.jpeg";

// const Landing = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [showTop, setShowTop] = useState(false);
//   const handleShowForm = () => setShowForm(true);
//   const handleCloseForm = () => setShowForm(false);
//   const whatsappSupportLink = "https://wa.me/919405602223";

//   useEffect(() => {
//     const handleScroll = () => setShowTop(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const courseData = [
//     {
//       title: "🌟 Reiki Level 1: Hands-on Healing",
//       description: "Master chakra basics, energy scanning, and healing practice with live attunement and mentorship.",
//       price: "₹5,900",
//       img: reikiSession,
//     },
//     {
//       title: "🌐 Reiki Level 2: Distance Healing",
//       description: "Learn sacred symbols, time-space energy transfer, shielding techniques, and healing ancestral karma.",
//       price: "₹11,800",
//       img: calmingTouch,
//     },
//     {
//       title: "⚡ Reiki Level 3: Advanced Techniques",
//       description: "Deep chakra cleanse, aura expansion, spiritual bypass work, and intuitive development.",
//       price: "₹17,000",
//       img: energyTransmission,
//     },
//     {
//       title: "👑 Reiki Level 4: Reiki Master",
//       description: "Become a guide and mentor. Learn attunement rituals, teaching methods, and lineage mastery.",
//       price: "₹21,000",
//       img: reikiSession,
//     },
//     {
//       title: "🔮 Tarot Mastery (Beginner–Advanced)",
//       description: "Decode the language of symbols. Gain daily clarity using Tarot intuition practices and spreads.",
//       price: "Live on WhatsApp – ₹7,999",
//       img: calmingTouch,
//     },
//     {
//       title: "🎁 Combo Offer: Reiki 1+2+Tarot",
//       description: "Your gateway to energy & divination. Learn foundational healing + Tarot mastery at a bundled rate!",
//       price: "Combo Price: ₹16,000",
//       img: energyTransmission,
//     },
//   ];

//   return (
//     <div style={{ backgroundColor: "#fffaf3", fontFamily: "Poppins, sans-serif" }}>
//       <section id="hero" className="text-center text-white hero-banner py-5 px-3" style={{ backgroundColor: '#874CCC' }}>
//         <Container>
//           <motion.h1 className="display-5 fw-bold" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>✨ Heal, Grow & Transform with Reiki ✨</motion.h1>
//           <motion.p className="lead mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.3 }}>
//             "If there is to be peace in the home, there must be peace in the HEART..." — Lao Tzu
//           </motion.p>
//           <motion.p className="mt-3" initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.5 }}>
//             Someone once asked, <i>Why Reiki?</i> Because Reiki brings peace in the heart 💖
//           </motion.p>
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, delay: 0.7 }}>
//             <Button variant="light" size="lg" href="#courses" className="mt-4">Explore Courses</Button>
//           </motion.div>
//         </Container>
//       </section>

//       <FounderVideos />

//       <motion.section id="courses" className="py-5 bg-white" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
//         <Container>
//           <h2 className="text-center text-purple mb-4">📚 Our Healing Courses</h2>
//           <p className="text-center text-muted mb-5">Choose your path to spiritual alignment and personal empowerment.</p>
//           <Row className="g-4">
//             {courseData.map((course, idx) => (
//               <Col md={6} lg={4} key={idx}>
//                 <motion.div whileHover={{ scale: 1.03 }} className="h-100">
//                   <Card className="shadow-lg border-0 h-100">
//                     <Card.Img variant="top" src={course.img} style={{ height: '240px', objectFit: 'cover', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }} />
//                     <Card.Body className="d-flex flex-column justify-content-between">
//                       <div>
//                         <Card.Title className="text-purple fw-bold fs-5">{course.title}</Card.Title>
//                         <Card.Text className="text-muted" style={{ minHeight: "100px" }}>{course.description}</Card.Text>
//                       </div>
//                       <div className="mt-3">
//                         <p className="fw-semibold text-dark mb-2">{course.price}</p>
//                         <Button variant="primary" size="sm" className="me-2" onClick={handleShowForm}>Enroll Now</Button>
//                         <Button variant="outline-success" size="sm" href={whatsappSupportLink} target="_blank">Need Help</Button>
//                       </div>
//                     </Card.Body>
//                   </Card>
//                 </motion.div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </motion.section>

//       <section className="bg-light py-5">
//         <Container>
//           <h2 className="text-center text-purple mb-4">😔 Life Problems We Help With</h2>
//           <Row>
//             <Col md={6} className="mb-3">
//               <img src={lifeProblems} alt="Life Problems" className="img-fluid rounded shadow" />
//             </Col>
//             <Col md={6}>
//               <ul className="fs-5">
//                 <li>💔 Relationship Confusion</li>
//                 <li>💸 Financial Blockages</li>
//                 <li>💼 Career Anxiety</li>
//                 <li>🧠 Emotional Imbalance</li>
//                 <li>👩‍👧‍👦 Family Conflicts</li>
//                 <li>🌌 Lack of Life Purpose</li>
//               </ul>
//               <p className="mt-3">✨ Through Reiki & Tarot, we help you realign your energy and clear blocks.</p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="bg-white py-5">
//         <Container>
//           <h2 className="text-center text-purple mb-4">🧘 Free Meditation Sessions</h2>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <img src={meditationImage} alt="Meditation" className="img-fluid rounded shadow" />
//             </Col>
//             <Col md={6}>
//               <p className="fs-5">Join our live meditation sessions every <strong>Tuesday</strong> and <strong>Thursday</strong>.</p>
//               <p className="text-muted">Relax your mind, recharge your spirit, and align your energy through guided breathwork and visualizations.</p>
//               <Button variant="success" href={whatsappSupportLink} target="_blank">Join via WhatsApp</Button>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="bg-light py-5">
//         <Container>
//           <h2 className="text-center text-purple mb-4">💬 Testimonials</h2>
//           <Row className="g-4">
//             <Col md={6} lg={4}>
//               <Card className="border-0 shadow-sm">
//                 <Card.Body>
//                   <FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" />
//                   <Card.Text className="mt-3">“After Reiki Level 1, I sleep better, feel grounded & handle stress calmly.”</Card.Text>
//                   <Card.Subtitle className="text-muted">– Priya R.</Card.Subtitle>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={6} lg={4}>
//               <Card className="border-0 shadow-sm">
//                 <Card.Body>
//                   <FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" />
//                   <Card.Text className="mt-3">“The Tarot course opened my intuition like magic. I trust myself more now.”</Card.Text>
//                   <Card.Subtitle className="text-muted">– Kavita M.</Card.Subtitle>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="bg-white py-5">
//         <Container>
//           <h2 className="text-center text-purple mb-4">❓ FAQs</h2>
//           <Accordion>
//             <Accordion.Item eventKey="0">
//               <Accordion.Header>Do I need prior experience for Reiki?</Accordion.Header>
//               <Accordion.Body>No. All courses start from the basics and build your skill step-by-step.</Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="1">
//               <Accordion.Header>Is the course live or recorded?</Accordion.Header>
//               <Accordion.Body>Courses are mostly live. You'll receive recordings too for lifetime access.</Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="2">
//               <Accordion.Header>Will I get certified?</Accordion.Header>
//               <Accordion.Body>Yes. You’ll receive a Reiki certificate after attunement and practice completion.</Accordion.Body>
//             </Accordion.Item>
//           </Accordion>
//         </Container>
//       </section>

//       <footer className="bg-purple text-white text-center py-4">
//         <Container>
//           <p className="mb-1">© 2025 Pranverse. All rights reserved.</p>
//           <div>
//             <FaFacebook className="me-3" />
//             <FaInstagram className="me-3" />
//             <FaWhatsapp />
//           </div>
//         </Container>
//       </footer>
//     </div>
//   );
// };

// export default Landing;
