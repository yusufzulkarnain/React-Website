import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import {
  createTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import HoverVideoPlayer from "react-hover-video-player";

import "./Video.css";
import { Button } from "bootstrap";
function Video() {
  // let navigate = useNavigate();
  const params = useParams();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container" style={{ paddingTop: 90, paddingBottom: 148 }}>
      <Container fluid>
        <Row className="heading-title">
          <div>
            <Typography variant="h5">Video</Typography>
          </div>
          <Row>
            <Col>
              <div className="path-text-row">
                <Link to={"/"} className="text-disable">
                  Home/
                </Link>
                <Link to={"/video"}>
                  <text className="text-active">Video</text>
                </Link>
              </div>
            </Col>
          </Row>
        </Row>
        <Row xs={8} md={8} lg={8}>
          <Col>
            <ReactPlayer
              url="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
              width="100%"
              height="100%"
              controls
            />
          </Col>
        </Row>
        <Row style={{ marginTop: 32 }}>
          <Col md={11} xs>
            <Typography
              variant="Body2"
              align="left"
              className="title-video-container"
              gutterBottom
            >
              Indeks Daya Saing Indonesia
            </Typography>
          </Col>
          <Col md={1} xs>
            <Typography
              gutterBottom
              align="left"
              className="date-text"
              variant="subtitle2"
            >
              6 Apr 2022
            </Typography>
          </Col>
        </Row>
        <Row style={{ marginTop: 14, marginBottom: 31 }}>
          <Col>
            <Typography
              variant="subtitle1"
              gutterBottom
              component="div"
              className="sub-video-text"
              align="justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolor Lorem ipsum dolor sit
              amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolor Lorem ipsum dolor sit amet, consectetur adipiscing
              elit
            </Typography>
          </Col>
        </Row>

        <Row
          xs={2}
          md={3}
          lg={3}
          className="g-4 justify-content-md-center"
          // style={{ margin: 12 }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <Col md={3} className="hover-video">
              <div>
                <HoverVideoPlayer
                  videoSrc="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
                  width="100%"
                  height={222}
                  controls
                  // muted={false}
                  // playIcon={<button>Play</button>}
                  // light="https://i.stack.imgur.com/zw9Iz.png"
                />
                <Typography
                  variant="h6"
                  className="text-video-grid"
                  align="justify"
                >
                  Badan Otorita IKN Dinilai Memiliki Kerancuan Wewenang, KPPOD:
                  Harus Dijawab dalam Perpres
                </Typography>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Video;
