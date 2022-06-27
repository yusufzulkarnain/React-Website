import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Pagination from "./Pagination";
import "./DetailNews.css";
import "./Publikasi.css";
import {
  createTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";

function Publikasi() {
  const params = useParams();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const Data = [
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
    {
      tanggal: "15 Februari 2022",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    },
  ];
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(5);
  const indexOfLastIndex = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastIndex - postsPerPage;
  const currentPost = Data.slice(indexOfFirstPost, indexOfLastIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const imageContainer = require("../Libs/Image/newspaper-article.png");
  const download = require("../Libs/Icon/document-download.png");

  return (
    <div style={{ paddingTop: 90, paddingBottom: 64 }}>
      <img alt="" src={imageContainer} className="image-container" />
      <div className="container">
        <Row className="heading-title">
          <div>
            <Typography variant="h5">Publication</Typography>
          </div>
          <Row>
            <Col>
              <div className="path-text-row">
                <Link to={"/"} className="text-disable">
                  Home/
                </Link>
                <Link to={"/publikasi"}>
                  <text className="text-active">Publication</text>
                </Link>
              </div>
            </Col>
          </Row>
        </Row>
      </div>
      <div className="container" style={{ marginTop: 34 }}>
        {currentPost.map((item, index) => (
          <Row className="list-publish">
            <Col xs md={10}>
              <div>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="date-publish"
                >
                  {item.tanggal}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className="title-pubslih"
                >
                  {item.deskripsi}
                </Typography>
              </div>
            </Col>
            <Col xs md={2} className="download">
              <Link to={"#"}>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="text-download"
                >
                  Download
                  <img alt="" src={download} className="img-download" />
                </Typography>
              </Link>
            </Col>
          </Row>
        ))}
        <div className="pagination-row">
          <Pagination
            postPerPage={postsPerPage}
            totalPosts={Data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Publikasi;
