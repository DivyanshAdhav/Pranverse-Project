import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import Registration from './components/Registration';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRegistrationForm from './components/AddRegistrationForm'

function App() {
  return (
    <Router>
      <Header />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0 m-0">
            <Sidebar />
          </Col>
          <Col md={10} className="p-3">
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/add-registration" element={<AddRegistrationForm />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
