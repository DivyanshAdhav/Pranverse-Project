    import React from 'react';
    import { Container, Row, Col, Card } from 'react-bootstrap';

    function DashboardContent() {
      return (
        <Container fluid className="p-4">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Metric 1</Card.Title>
                  <Card.Text>Value: 1234</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Metric 2</Card.Title>
                  <Card.Text>Value: 5678</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Metric 3</Card.Title>
                  <Card.Text>Value: 9101</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    }
    export default DashboardContent;