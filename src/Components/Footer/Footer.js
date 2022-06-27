import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import Background from "../../Libs/Image/element-1.png";
function Footer() {
  const indexLogo = require("../../Libs/Icon/image-27.png");
  const kinaraLogo = require("../../Libs/Icon/Logo-Kinara-Indonesia.png");
  const kppoadLogo = require("../../Libs/Icon/KPPOD-Logo.png");
  const terraLogo = require("../../Libs/Icon/terra-03.png");
  return (
    <>
      <Container
        fluid
        className="container-footer"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Row className="justify-content-md-center">
          <Col></Col>
          <Col className="col-index-logo">
            <img className="img-index-logo" alt="" src={indexLogo} />
          </Col>
          <Col></Col>
        </Row>
        <Row
          className="justify-content-md-center"
          style={{
            marginTop: 32,
            marginBottom: 20,
          }}
        >
          <Col
            className="col-index-logo1"
            md={2}
            style={{
              // backgroundColor: "red",
              display: "flex",
              // alignItems: "flex-end",
            }}
          >
            <img
              style={{ width: 100 }}
              className="kppod-logo"
              alt=""
              src={kppoadLogo}
            />
          </Col>
          <Col
            className="col-index-logo1"
            md={2}
            style={{
              display: "flex",
              // alignItems: "flex-end",
            }}
          >
            <img
              style={{ width: 100 }}
              className="kppod-logo"
              alt=""
              src={terraLogo}
            />
          </Col>
          <Col
            className="col-index-logo1"
            md={2}
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <img
              style={{ width: 100 }}
              className="kppod-logo"
              alt=""
              src={kinaraLogo}
            />
          </Col>
        </Row>
        <Row className="justify-content-md-center g-4">
          <Col className="col-index-logo" md={1}>
            <text className="text-footer">Index Data</text>
          </Col>
          <Col className="col-index-logo" md={1}>
            <text className="text-footer">Publikasi</text>
          </Col>
          <Col className="col-index-logo" md={1}>
            <text className="text-footer">News</text>
          </Col>
          <Col className="col-index-logo" md={1}>
            <text className="text-footer">Video</text>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
