import React from "react"; // Importing React library
import { Navbar, Nav, Container } from "react-bootstrap"; // Importing specific components from react-bootstrap library
import { LinkContainer } from "react-router-bootstrap"; // Importing LinkContainer component from react-router-bootstrap for navigation
import { MdLocalOffer } from "react-icons/md"; // Importing MdLocalOffer icon from react-icons library
import "./TopBar.css"; // Importing CSS file for styling

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6 className="text-light">
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Home
            Delivery on Order Above Rupees 500/-
          </h6>
          <Nav className="ms-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
              { to: "/policy", label: "Terms and Conditions" }
            ].map((link, index) => (
              <LinkContainer
                to={link.to}
                activeClassName=""
                key={index} // Adding key prop to avoid React warning
              >
                <Nav.Link>{link.label}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;

