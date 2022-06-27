import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { Button } from "../Button.js";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
function NavbarComp() {
  const [click, setClick] = React.useState(false);
  const [form, setform] = React.useState(true);
  const logo = require("../../Libs/Icon/logo-index.png");
  const searchLogo = require("../../Libs/Icon/search-normal-navbar.png");
  let MenuView;

  const handleClickMenu = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  React.useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setform(false);
      } else {
        setform(true);
      }
    };
    window.addEventListener("resize", showButton);
  }, [form]);

  if (click) {
    MenuView = (
      <Form className="d-flex" style={{ width: 300 }}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    );
  } else {
    MenuView = (
      <>
        <Nav.Link href="/index/data">Index Data</Nav.Link>
        <Nav.Link href="/publikasi">Publikasi</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
        <Nav.Link href="/video">Video</Nav.Link>
      </>
    );
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo-header" alt="" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="side-menu">
              {MenuView}
              <Nav.Link onClick={handleClickMenu}>
                <img className="search-icon" alt="" src={searchLogo} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
