import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activelink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activelink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#upcoming"
              className={
                activelink === "upcoming" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("upcoming")}
            >
              Upcoming
            </Nav.Link>
            <Nav.Link
              href="#releases"
              className={
                activelink === "releases" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("releases")}
            >
              New Releases
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/jadhav-tejas">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/jadhav-tejas">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://github.com/jadhav-tejas">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => console.log("let us connect")}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
