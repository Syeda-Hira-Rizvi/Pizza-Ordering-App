import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Policy.css"; // Import CSS file for color styles

const Policy = () => {
  return (
    <>
      <Container className="policy-container">
        {/* Title */}
        <h1 className="policy-title">Terms and Policy</h1>
        <div className="main">
          <Row>
            <Col md={10} className="policy-content">
              {/* Privacy Policy Section */}
              <Row>
                <Col>
                  <div className="policy-section">
                    <h6 className="policy-section-title">Privacy Policy</h6>
                    <p className="policy-text-content">
                      Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
                    </p>
                  </div>
                </Col>
              </Row>
              {/* Data Collection Section */}
              <Row>
                <Col>
                  <div className="policy-section">
                    <h6 className="policy-section-title">Data Collection</h6>
                    <p className="policy-text-content">
                      We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
                    </p>
                  </div>
                </Col>
              </Row>
              {/* Information Usage Section */}
              <Row>
                <Col>
                  <div className="policy-section">
                    <h6 className="policy-section-title">Information Usage</h6>
                    <p className="policy-text-content">
                      We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Policy;
