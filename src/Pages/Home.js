import React from "react";
import "./Home.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import background from "../Libs/Icon/Mask-group.png";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import Indonesia from "@svg-maps/indonesia";
import CountUp from "react-countup";
import AOS from "aos";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import {
  createTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";
import "leaflet/dist/leaflet.css";
function Home() {
  const lingkunganIcon = require("../Libs/Icon/lingkungan-icon.png");
  const ekonomiIcon = require("../Libs/Icon/ekonomi-icon.png");
  const sosialIcon = require("../Libs/Icon/sosial-icon.png");
  const tatakelolaIcon = require("../Libs/Icon/tatakelola-icon.png");
  const petaIcon = require("../Libs/Icon/Peta.png");
  const cloudIcon = require("../Libs/Icon/cloud-notif.png");
  const statusUp = require("../Libs/Icon/status-up.png");
  const buildings = require("../Libs/Icon/buildings.png");
  const frame = require("../Libs/Icon/frame.png");
  const chartIcon = require("../Libs/Icon/chart.png");
  const reportIcon = require("../Libs/Icon/document-text.png");
  const dataIcon = require("../Libs/Icon/search-normal.png");
  const customerIcon = require("../Libs/Icon/Group-21.png");
  const news1 = require("../Libs/Image/image-22.png");
  const newsthumb = require("../Libs/Image/Rectangle-1.png");
  const newsthumb2 = require("../Libs/Image/Rectangle-20.png");
  const newsgrid1 = require("../Libs/Image/image-91.png");
  const newsgrid2 = require("../Libs/Image/image-90.png");
  const newsgrid3 = require("../Libs/Image/image-92.png");
  const center = [-2.54893, 118.01486];
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 20000 });
  }, []);
  const data = [
    {
      data: {
        bdg: 0.7,
        kab_bojo: 0.8,
        kab_tababan: 0.9,
        kab_kediri: 0.67,
        kab_tana_tidung: 0.8,
        kab_musi_banyu_asin: 0.54,
      },
      meta: { color: "blue" },
    },
    {
      data: {
        bdg: 0.6,
        kab_bojo: 0.85,
        kab_tababan: 0.5,
        kab_kediri: 0.6,
        kab_tana_tidung: 0.7,
        kab_musi_banyu_asin: 0.54,
      },
      meta: { color: "red" },
    },
  ];

  const data2 = [
    {
      data: {
        bdg: 0.7,
        kab_bojo: 0.8,
        kab_tababan: 0.9,
        kab_kediri: 0.67,
        kab_tana_tidung: 0.8,
        kab_musi_banyu_asin: 0.54,
      },
      meta: { color: "#b3d257" },
    },
  ];

  const captions = {
    // columns
    bdg: "Kota Bandung",
    kab_bojo: "Kab.Bojonegoro",
    kab_tababan: "Kab.Tababan",
    kab_kediri: "Kab.kediri",
    kab_tana_tidung: "Kab.Tana Tidung",
    kab_musi_banyu_asin: "Kab.Musi Banyu Asin",
  };
  return (
    <div className="banner" responsive>
      <Container>
        <Row className="row-b">
          <Col className="col1-b">
            <div className="banner-content">
              <text className="text-banner">
                Pantau kelola ekonomi/fiskal dan praktik
                <br /> penyelenggaraan pemerintahan yang <br /> akuntabel,
                efektif dan demokratis
              </text>
              <Button variant="primary" className="button-banner">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </Col>
          <Col className="colimg-b">
            {/* <img className="img-diagram" alt="" src={DiagPng} /> */}
            <RadarChart captions={captions} data={data} size={450} />
          </Col>
        </Row>
      </Container>
      <section>
        <Container className="container-content-2">
          <Row className="row-percent-data" xs={2} md={4} lg={8}>
            <Col>
              <div className="col-text-grid">
                <text className="text-grid-header">
                  <CountUp start={0} end={6720790126} separator="," />
                </text>

                <text className="text-grid-body">Events processed</text>
              </div>
            </Col>
            <Col>
              <div className="col-text-grid">
                <text className="text-grid-header">
                  <CountUp start={0} end={312191455} separator="," />
                </text>
                <text className="text-grid-body">
                  Number of users (cumulative)
                </text>
              </div>
            </Col>
            <Col>
              <div className="col-text-grid">
                <text className="text-grid-header">
                  <CountUp start={0} end={3307} separator="," />
                </text>
                <text className="text-grid-body">
                  Number of campaigns processed
                </text>
              </div>
            </Col>
            <Col>
              <div className="col-text-grid">
                <text className="text-grid-header">
                  <CountUp start={0} end={9.9} />%
                </text>
                <text className="text-grid-body">Average conversion rate</text>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <MuiThemeProvider theme={theme}>
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <div className="div-col-keberlanjutan">
              <Typography variant="h4" className="text-title">
                Apa itu Keberkelanjutan
              </Typography>
            </div>
            <div className="container div-col-text-content">
              <Typography
                className="text-col-content"
                variant="Body1"
                align="justify"
              >
                Keberlanjutan adalah proses perubahan yang memuat seluruh
                aktivitas sumber daya,arah investasi, perubahan kelembagaan, dan
                lain-lain dalam porsi seimbang untuk meningkatkan potensi masa
                kini maupun masa datang.
              </Typography>
            </div>
          </AnimationOnScroll>
        </MuiThemeProvider>
      </section>

      <section>
        <Container className="row-grid-menu container" fluid>
          <AnimationOnScroll animateIn="animate__fadeInDown" delay={1000}>
            <Row xs={1} md={4} lg={8} className="g-4">
              <Col>
                <Card className="box-menu">
                  <Card.Body>
                    <div className="box-menu-content">
                      <img className="icon-menu" alt="" src={lingkunganIcon} />
                    </div>
                    <Card.Subtitle className="title-menu">
                      Lingkungan
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="box-menu">
                  <Card.Body>
                    <div className="box-menu-content">
                      <img className="icon-menu" alt="" src={ekonomiIcon} />
                    </div>
                    <Card.Subtitle className="title-menu">
                      Ekonomi
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="box-menu">
                  <Card.Body>
                    <div className="box-menu-content">
                      <img className="icon-menu" alt="" src={sosialIcon} />
                    </div>
                    <Card.Subtitle className="title-menu">Sosial</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="box-menu">
                  <Card.Body>
                    <div className="box-menu-content">
                      <img className="icon-menu" alt="" src={tatakelolaIcon} />
                    </div>
                    <Card.Subtitle className="title-menu">
                      Tata Kelola
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </AnimationOnScroll>
        </Container>
      </section>

      <section className="section-maping">
        <AnimationOnScroll animateIn="animate__fadeInDown">
          <div className="div-col-keberlanjutan">
            <MuiThemeProvider theme={theme}>
              <Typography variant="h4" className="text-title-berkelanjuntan">
                Apa tujuan indeks daya saing berkelanjutan
              </Typography>
            </MuiThemeProvider>
          </div>
        </AnimationOnScroll>
        <Container style={{ width: "80%" }}>
          <Row xs={1} md={2}>
            <AnimationOnScroll animateIn="animate__fadeInTopLeft">
              <Col>
                <SVGMap map={Indonesia} />
                {/* <img className="img-map" alt="" src={petaIcon} /> */}
                {/* <MapContainer center={center} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                  url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=W1lbPSGLhrPWACvg6XQS"
                  attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
              </MapContainer> */}
              </Col>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInTopRight">
              <Col>
                <ul className="list">
                  <li className="text-list">
                    Merumuskan kerangka indeks yang merupakan ukuran daya saing
                    daerah berkelanjutan di Indonesia
                  </li>
                  <li className="text-list">
                    Melakukan pengukuran indeks daya saing daerah berkelanjutan
                    di seluruh kabupaten di Indonesia
                  </li>
                  <li className="text-list">
                    Menganalisis tipologi elemen pendukung dan penghambat daya
                    saing daerah berkelanjutan pada tingkat kabupaten di
                    Indonesia
                  </li>
                </ul>
              </Col>
            </AnimationOnScroll>
          </Row>
        </Container>
        <Container fluid className="container-5">
          <Row className="row-maping" xs={1} md={2}>
            <Col>
              <div className="col-section-5">
                <text className="text-title-daerah">
                  Daya Saing Daerah Berkelanjutan
                </text>
                <text className="sub-title-daerah-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </text>
                <text className="sub-title-daerah">sed do eiusmod tempor.</text>
              </div>
              <div className="col-section-5-table">
                <div className="row-section-5-table">
                  <div>
                    <img className="cloud-icon" alt="" src={cloudIcon} />
                  </div>
                  <div className="coloum-title">
                    <text className="title-content">Lingkungan Lestari</text>
                    <text className="sub-title" style={{ textAlign: "left" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </text>
                  </div>
                </div>
                <br />
                <div className="row-section-5-table">
                  <div>
                    <img className="cloud-icon" alt="" src={statusUp} />
                  </div>
                  <div className="coloum-title">
                    <text className="title-content">Ekonomi Tangguh</text>
                    <text className="sub-title" style={{ textAlign: "left" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </text>
                  </div>
                </div>
                <br />
                <div className="row-section-5-table">
                  <div>
                    <img className="cloud-icon" alt="" src={frame} />
                  </div>
                  <div className="coloum-title">
                    <text className="title-content">Tata Kelola</text>
                    <text className="sub-title" style={{ textAlign: "left" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </text>
                  </div>
                </div>
                <br />
                <div className="row-section-5-table">
                  <div>
                    <img className="cloud-icon" alt="" src={buildings} />
                  </div>
                  <div className="coloum-title">
                    <text className="title-content">Sosial Inklusif</text>
                    <text className="sub-title" style={{ textAlign: "left" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </text>
                  </div>
                </div>
                <Button variant="primary" className="button-lern">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </Col>
            <Col className="radar-2">
              {/* <img className="img-group" alt="" src={Group34} /> */}
              <RadarChart captions={captions} data={data2} size={500} />
            </Col>
          </Row>
        </Container>

        <div
          style={{
            flexDirection: "column",
            backgroundImage: `url(${background})`,
            backgroundColor: "#0f75bc",
            marginTop: 83,
          }}
        >
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <div className="wording-metode-title">
              <text className="text-title-metode">Metode Pengambilan Data</text>
            </div>
            <Container>
              <Row className="justify-content-md-center">
                <Col xs lg="2"></Col>
                <Col md="6">
                  <p className="text-desc-metode">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </Col>
                <Col xs lg="2"></Col>
              </Row>
            </Container>
          </AnimationOnScroll>
          <Container className="row-grid-menu-metode" fluid>
            <Row xs={1} md={4} lg={8} className="justify-content-md-center g-4">
              <Col md={2}>
                <AnimationOnScroll animateIn="animate__bounceIn">
                  <Card className="box-menu-metode">
                    <text className="number-box-menu">01</text>
                    <Card.Body>
                      <div className="box-menu-content">
                        <img
                          className="icon-menu-metode"
                          alt=""
                          src={chartIcon}
                        />
                      </div>
                      <Card.Subtitle style={{ marginTop: 12 }}>
                        <MuiThemeProvider theme={theme}>
                          <Typography
                            variant="h6"
                            className="title-menu-metode"
                          >
                            Data Collection
                          </Typography>
                        </MuiThemeProvider>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </AnimationOnScroll>
              </Col>

              <Col md={2}>
                <AnimationOnScroll animateIn="animate__bounceIn" delay={300}>
                  <Card className="box-menu-metode">
                    <text className="number-box-menu">02</text>
                    <Card.Body>
                      <div className="box-menu-content">
                        <img
                          className="icon-menu-metode"
                          alt=""
                          src={dataIcon}
                        />
                      </div>
                      <Card.Subtitle style={{ marginTop: 12 }}>
                        <MuiThemeProvider theme={theme}>
                          <Typography
                            variant="h6"
                            className="title-menu-metode"
                          >
                            Data Analysis
                          </Typography>
                        </MuiThemeProvider>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </AnimationOnScroll>
              </Col>
              <Col md={2}>
                <AnimationOnScroll animateIn="animate__bounceIn" delay={400}>
                  <Card className="box-menu-metode">
                    <text className="number-box-menu">03</text>
                    <Card.Body>
                      <div className="box-menu-content">
                        <img
                          className="icon-menu-metode"
                          alt=""
                          src={customerIcon}
                        />
                      </div>
                      <Card.Subtitle style={{ marginTop: 12 }}>
                        <MuiThemeProvider theme={theme}>
                          <Typography
                            variant="h6"
                            className="title-menu-metode"
                          >
                            Customer grouping
                          </Typography>
                        </MuiThemeProvider>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </AnimationOnScroll>
              </Col>
              <Col md={2}>
                <AnimationOnScroll animateIn="animate__bounceIn" delay={500}>
                  <Card className="box-menu-metode">
                    <text className="number-box-menu">04</text>
                    <Card.Body>
                      <div className="box-menu-content">
                        <img
                          className="icon-menu-metode"
                          alt=""
                          src={reportIcon}
                        />
                      </div>
                      <Card.Subtitle style={{ marginTop: 12 }}>
                        <MuiThemeProvider theme={theme}>
                          <Typography
                            variant="h6"
                            className="title-menu-metode"
                          >
                            Report creation
                          </Typography>
                        </MuiThemeProvider>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </AnimationOnScroll>
              </Col>
            </Row>
          </Container>
        </div>

        <div
          style={{
            flexDirection: "column",
            marginTop: 86,
          }}
        >
          <Col className="wording-index-table">
            <text className="text-title-index-table">
              Peringkat Indeks Daya Saing Daerah Berkelanjutan
            </text>
          </Col>
          <div className="container-table">
            <Table striped bordered responsive style={{ textAlign: "center" }}>
              <thead>
                <tr className="row-table-index">
                  <td>RANGKING</td>
                  <td>KABUPATEN</td>
                  <td>LINGKUNGAN</td>
                  <td>EKONOMI</td>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr className="row-table-index">
                    <td style={{ paddingTop: 26 }} key={index}>
                      {index + 1}
                    </td>
                    <td style={{ paddingTop: 26 }} key={index}>
                      Kabupaten {index}
                    </td>
                    <td style={{ paddingTop: 26 }} key={index}>
                      lingkungan {index}
                    </td>
                    <td style={{ paddingTop: 26 }} key={index}>
                      ekonomi {index}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="wording-index-table">
              <Button variant="primary" className="button-table">
                Lihat Semua
              </Button>
            </div>
          </div>
        </div>
        <div className="div-news">
          <Row className="row-title-news" xs={1}>
            <Col md="10" style={{ marginTop: 5 }}>
              <text className="text-publikasi">Publikasi</text>
            </Col>
            <Col md="2">
              <Button variant="primary" className="button-news-all" size="sm">
                Pelajari lebih Lanjut
              </Button>
            </Col>
          </Row>
        </div>
        <div className="news-content">
          <Row className="row-title-news" xs={1}>
            <Col md={6}>
              <img className="img-news-col" alt="" src={news1} />
              <text className="title-news-col">
                Galang Kekuatan Kepala Desa Muluskan 3 Periode Jokowi
              </text>
              <p className="desc-news-col">
                Agenda Jokowi 3 Periode merupakan kelanjutan dari wacana
                penundaan Pemilu 2024 yang digulirkan oleh beberapa ketua umum
                parpol pro-pemerintah sejak....
              </p>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={3} style={{ padding: 0 }}>
                  <img
                    // className="img-news-thumb"
                    alt=""
                    src={newsthumb2}
                    class="img-thumbnail"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
                <Col style={{ padding: 0 }}>
                  <div className="div-news-thumb-row">
                    <text className="title-news-thumb">
                      KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang
                      Tepat
                    </text>
                    <p className="desc-news-thumb">
                      Komite Pemantauan Pelaksanaan Otonomi Daerah (KPPOD)
                      mengk.....
                    </p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={3} style={{ padding: 0 }}>
                  <img
                    // className="img-news-thumb"
                    alt=""
                    src={newsthumb}
                    class="img-thumbnail"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
                <Col style={{ padding: 0 }}>
                  <div className="div-news-thumb-row">
                    <text className="title-news-thumb">
                      Waktu Kian Sempit, Peraturan Pemerintah Pengangkatan
                      Penjabat Kepala Daerah Ditunggu
                    </text>
                    <p className="desc-news-thumb">
                      Pada 15 Mei 2022, ada lima kepala daerah yang masa
                      jabatannya berakhir. Namun, hingga saat ini belum ada
                      aturan te.....
                    </p>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={3} style={{ padding: 0, backgroundColor: "yellow" }}>
                  <img
                    // className="img-news-thumb"
                    alt=""
                    src={newsthumb2}
                    class="img-thumbnail"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Col>
                <Col style={{ padding: 0 }}>
                  <div className="div-news-thumb-row">
                    <text className="title-news-thumb">
                      KPPOD Nilai Waktu Penetapan Pemindahan Ibu Kota Kurang
                      Tepat
                    </text>
                    <p className="desc-news-thumb">
                      Komite Pemantauan Pelaksanaan Otonomi Daerah (KPPOD)
                      mengk.....
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="div-title-infografis">
          <Row className="row-title-news" xs={1}>
            <Col>
              <text className="text-publikasi">Infografis</text>
            </Col>
          </Row>
        </div>
        <div className="div-infografis">
          <Row className="row-infografis g-4" xs={1} md={3}>
            <Col>
              <Card>
                <Card.Img variant="top" src={newsgrid1} />
                <Card.Body>
                  <Card.Text className="text-infografis">
                    Klaster Administrasi Pemerintahan RUU Cipta Kerja
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={newsgrid2} />
                <Card.Body>
                  <Card.Text className="text-infografis">
                    Studi dan Advokasi RUU Peningkatan Pendapatan Asli Daerah
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={newsgrid3} />
                <Card.Body>
                  <Card.Text className="text-infografis">
                    Pelayanan Perizinan Terbaik 2018 (Kategori Kota)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default Home;
