import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "./DetailNews.css";
import "./News.css";
import {
  createTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";

function DetailNews() {
  // let navigate = useNavigate();
  const params = useParams();
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const imageContainer = require("../Libs/Image/image-47.png");
  return (
    <div className="container-detail" style={{ paddingTop: 120 }}>
      <div className="container">
        <MuiThemeProvider theme={theme}>
          <Typography variant="h4" gutterBottom align="center">
            {params.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom align="center">
            BY JOHN DOE, FIRST PUBLISHED IN TODAY, 16 Februari 2022
          </Typography>
        </MuiThemeProvider>
        <Row xs md={12}>
          <Col className="centerd-img">
            {" "}
            <img alt="" src={imageContainer} className="img-banner" />
          </Col>
        </Row>
        <Row>
          <div className="body-news">
            <MuiThemeProvider theme={theme}>
              <Typography variant="body1" align="left" paragraph>
                Komite Pemantauan Pelaksanaan Otonomi Daerah (KPPOD) mengkritisi
                momen penetapan pemindahan Ibu Kota Negara (IKN). KPPOD menilai
                penetapan tersebut kurang tepat dari segi waktu.
                <br /> <br />
                “Kalau kita melihat momen kita mendiskusikan dan juga menetapkan
                pemindahan ibu kota ini, kami melihat dari sisi waktu agak
                kurang pas,” ujar Direktur Eksekutif KPPOD, Armand Suparman saat
                diskusi virtual dengan tajuk "Otorita IKN: Pemerintah Daerah
                Khusus?" yang disiarkan melalui Youtube KPPOD Jakarta, Selasa
                (15/2/2022).
                <br />
                <br />
                Armand beralasan, di tengah pandemi Covid-19 yang tengah melanda
                Indonesia, pemerintah pusat telah mengeluarkan dua undang-undang
                (UU) strategis yakni UU Cipta Kerja dan UU Hubungan Keuangan
                Pusat dan Daerah. Menurutnya, kedua UU tersebut memperkenalkan
                paradigma yang baru.
                <br />
                <br />
                Selain itu, kedua UU tersebut juga memerlukan respons kebijakan
                dan kelembagaan yang baru dari tingkat pusat maupun daerah.
                Armand memandang, butuh sebuah energi yang besar untuk menyikapi
                perkembangan tersebut.
                <br />
                <br />
                “Kemudian di sisi lain kita juga masih meraba-raba sampai kapan
                titik akhir dari pandemi. Dalam konteks momen seperti ini,
                proses pemindahan ini menurut kami membutuhkan energi yang besar
                juga dan tentu mendapatkan banyak tantangan ke depan,” tuturnya.
                <br />
                <br />
                Meski demikian, Armand tetap memandang pemindahan IKN sebagai
                hal yang positif. Dia mengapresiasi UU IKN yang menurutnya
                memiliki tujuan mulia yakni membangun IKN yang berkelanjutan
                serta dapat merepresentasikan Indonesia di kancah global. Armand
                menyebutkan salah satu tujuan dari pemindahan ibu kota adalah
                untuk meningkatkan pemerataan pembangunan di Indonesia. Selain
                itu, langkah tersebut juga bertujuan untuk memajukan
                daerah-daerah dalam konteks desentralisasi dan otonomi daerah.
              </Typography>
            </MuiThemeProvider>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default DetailNews;
