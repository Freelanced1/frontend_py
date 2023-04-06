import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from './freelanced_logo.gif'

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="nav-logo">
          <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <div className="pe-5">
              <InputGroup className="mb-3 mt-3 slider-input">
                <Form.Control
                  style={{
                    border: "unset",
                    padding: "9px",
                    background: "transparent",
                  }}
                  aria-label="Last name"
                  placeholder="Find services"
                />
                <InputGroup.Text
                  style={{
                    background: "transparent",
                    border: "unset",
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup>
            </div>

            <Nav.Link className="nav-item pe-5" href="#home">
              Business
            </Nav.Link>
            <Nav.Link className="nav-item pe-5" href="#home">
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to="/login-register" className="nav-item pe-5">
            <Button variant="outline-primary" className="nav-btn" size="sm">
              Log in 
            </Button>
            </Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavbarComponent;
