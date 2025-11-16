import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import "./style.css"; // Import CSS file

const Contact = () => {
  return (
    <Container className="contact-container">
      {/* Heading and description */}
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <div>
            {/* Main heading */}
            <h1 className="heading">Cheesy Lava Pizza Shop</h1>
            {/* Description */}
            <p className="contact-text">
              Welcome to Cheesy Lava, your ultimate destination for mouthwatering pizzas! We take pride in serving delicious pizzas made with the finest ingredients and authentic flavors. Whether you're craving a classic Margherita or a gourmet specialty pizza, we've got something to tantalize your taste buds. Join us for a slice of cheesy goodness today!
            </p>
          </div>
        </Col>
      </Row>

      {/* Contact details */}
      <Row className="justify-content-center">
        <Col md={8}>
          <div>
            {/* Subheading for contact details */}
            <h2 className="subheading text-center">Contact Details</h2>
            {/* Table to display contact details */}
            <Table bordered striped responsive className="contact-details-table">
              {/* Table body */}
              <tbody>
                {/* Row for phone contact */}
                <tr>
                  {/* Icon for phone contact */}
                  <td className="table-cell">
                    <FiPhoneCall /> Phone
                  </td>
                  {/* Phone number */}
                  <td className="table-cell">0123-456789</td>
                </tr>
                {/* Row for mobile contact */}
                <tr>
                  {/* Icon for mobile contact */}
                  <td className="table-cell">
                    <ImMobile /> Mobile
                  </td>
                  {/* Mobile number */}
                  <td className="table-cell">1234567890</td>
                </tr>
                {/* Row for email contact */}
                <tr>
                  {/* Icon for email contact */}
                  <td className="table-cell">
                    <AiOutlineMail /> Email
                  </td>
                  {/* Email address */}
                  <td className="table-cell">help@cheesylava.com</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      {/* Follow us section */}
      <Row className="justify-content-center">
        <Col md={8} className="text-center follow-us">
          {/* Subheading for follow us section */}
          <h2 className="subheading">Follow Us</h2>
          {/* Description with social media links */}
          <p className="contact-text">
            Stay connected with us on social media for updates, promotions, and more:
            <br />
            Facebook: @cheesylavapizza | Instagram: @cheesylavapizza | Twitter: @cheesylavapizza
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
