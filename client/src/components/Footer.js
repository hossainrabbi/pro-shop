import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center my-4">Copyright &copy; ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
