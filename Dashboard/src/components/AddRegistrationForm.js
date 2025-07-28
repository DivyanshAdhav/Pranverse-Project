import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddRegistrationForm() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/registration'); 
  };

  return (
    <Container>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={handleAddClick}>
          View Registration
        </Button>
      </div>

      <Card>
        <Card.Header>
          <h4>Registration Form</h4>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" placeholder="Enter role" />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" >
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddRegistrationForm;
