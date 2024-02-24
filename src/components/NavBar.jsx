import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const [activelink, setActiveLink] = useState("home");
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={""} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/jadhav-tejas">
                <img src={""} alt="" />
              </a>
              <a href="https://github.com/jadhav-tejas">
                <img src={""} alt="" />
              </a>
              <a href="https://github.com/jadhav-tejas">
                <img src={""} alt="" />
              </a>
            </div>
          </span>
          <button className="vvd" onClick={() => console.log("let us connect")}>
            <span>Let's Connect</span>
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
