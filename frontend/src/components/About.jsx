import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="about-heading">Who We Are?</h1>
            <p className="about-text">
              At Pizza Palace, we're more than just a pizza shop. We're a passionate team of food lovers dedicated to crafting the perfect pizza experience for our customers.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="about-heading">Our Team</h1>
            <p className="about-text">
              Our team is made up of passionate individuals who share a love for great food and hospitality.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className="about-heading">Our Speciality</h1>
            <p className="about-text">
              Our specialty lies in our commitment to quality and innovation.
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={10}>
            <h1 className="about-heading text-center">Our Values</h1>
            <Table bordered striped responsive className="about-table">
              <thead>
                <tr>
                  <th className="table-heading">Quality</th>
                  <th className="table-heading">Innovation</th>
                  <th className="table-heading">Community</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="about-text">
                    We are committed to using the freshest ingredients and maintaining the highest standards of quality in everything we do.
                  </td>
                  <td className="about-text">
                    Innovation is at the heart of what we do. We're constantly exploring new flavors, ingredients, and cooking techniques.
                  </td>
                  <td className="about-text">
                    Community is important to us. We believe in giving back and supporting local initiatives.
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <div className="decoration-1"></div>
      <div className="decoration-2"></div>
    </div>
  );
};

export default About;
