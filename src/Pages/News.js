import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import Pagination from "./Pagination";
import "./News.css";
import {
  createTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";

function News() {
  const navigate = useNavigate();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const newsthumb2 = require("../Libs/Image/Rectangle-20.png");
  const imageNewsContainer = require("../Libs/Image/reading-news.png");
  const Data = [
    {
      id: 1,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 2,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 3,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 4,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 5,
      image: imageNewsContainer,
      title:
        "Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan Penjabat Kepala Daerah Ditunggu",
    },
    {
      id: 6,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 8,
      image: newsthumb2,
      title:
        "Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan Penjabat Kepala Daerah Ditunggu",
    },
    {
      id: 9,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 10,
      image: imageNewsContainer,
      title:
        "Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan Penjabat Kepala Daerah Ditunggu",
    },
    {
      id: 1,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 2,
      image: imageNewsContainer,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 3,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 4,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 5,
      image: imageNewsContainer,
      title:
        "Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan Penjabat Kepala Daerah Ditunggu",
    },
    {
      id: 6,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 8,
      image: newsthumb2,
      title:
        "Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan Penjabat Kepala Daerah Ditunggu",
    },
    {
      id: 9,
      image: newsthumb2,
      title: "KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang Tepat",
    },
    {
      id: 10,
      image: imageNewsContainer,
      title:
        "Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan Penjabat Kepala Daerah Ditunggu",
    },
    {
      id: 10,
      image: imageNewsContainer,
      title:
        "Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan Penjabat Kepala Daerah Ditunggu",
    },
    {
      id: 10,
      image: imageNewsContainer,
      title:
        "Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan Penjabat Kepala Daerah Ditunggu",
    },
    {
      id: 10,
      image: imageNewsContainer,
      title:
        "Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan Penjabat Kepala Daerah Ditunggu",
    },
  ];
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(12);
  const indexOfLastIndex = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastIndex - postsPerPage;
  const currentPost = Data.slice(indexOfFirstPost, indexOfLastIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid className="container-news">
        <Row>
          <Col md={12}>
            <img alt="" src={imageNewsContainer} className="img-banner" />
          </Col>
        </Row>
      </Container>
      <div className="news-grid-conatiner">
        <text className="news-title">News</text>
        <Row>
          <Col>
            <div className="path-text-row">
              <Breadcrumb>
                <Breadcrumb.Item href="/" className="text-disable">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="text-active" active>
                  News
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Row xs={1} md={3} style={{ marginTop: 26 }}>
          {currentPost.map((i, index) => (
            <Col className="col-news-grid">
              <Card
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/detailnews/" + i.title)}
              >
                <Card.Img
                  variant="top"
                  src={i.image}
                  className="img-thumbnail-grid"
                />
                <Card.Body>
                  <MuiThemeProvider theme={theme}>
                    <Card.Text>
                      <Typography
                        style={{ fontWeight: "bold" }}
                        variant="body1"
                        className="text-title-grid"
                        gutterBottom
                      >
                        {i.title}
                      </Typography>
                    </Card.Text>
                  </MuiThemeProvider>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="pagination-row">
          <Pagination
            postPerPage={postsPerPage}
            totalPosts={Data.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
}

export default News;
