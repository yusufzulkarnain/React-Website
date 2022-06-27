import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import Table from "react-bootstrap/Table";
import "./DetailIndex.css";

const blue = {
  50: "#B3D257",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#B3D257",
  500: "#FFFFFF",
  600: "#000000",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
  1000: "#999999",
};

const Tab = styled(TabUnstyled)`
  font-family: "Roboto";
  color: ${blue[1000]};
  cursor: pointer;
  font-size: 0.875rem;
  /* font-weight: bold; */
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
    border-radius: 20px;
    color: ${blue[600]};
  }

  &:focus {
    color: #fff;
    border-radius: 20px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: "Roboto";
  font-size: 0.875rem;
  /* margin: auto; */
  /* background: ${blue[500]}; */
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${blue[500]};
  border-radius: 30px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  width: 90%;
  margin: auto;
`;

export default function DetailIndex() {
  const petaIcon = require("../Libs/Icon/Peta.png");
  const cloudI = require("../Libs/Icon/cloud-notif-i.png");
  const frameI = require("../Libs/Icon/frame-i.png");
  const buildingsI = require("../Libs/Icon/buildings-i.png");
  const statusupI = require("../Libs/Icon/status-up-i.png");
  return (
    <div className="container-index" style={{ marginTop: 90 }}>
      <h2 className="title-index">Indeks Daya Saing Daerah Berkelanjutan</h2>
      <h6 className="sub-title">
        Indeks umum DSDB dibentuk sebagai resultan dari kinerja pilar lingkungan
        lestari, ekonomi tangguh, sosial inklusif, dan tata kelola yang baik.
      </h6>
      <div className="container">
        <TabsUnstyled defaultValue={0}>
          <TabsList>
            <Tab>
              {/* <img alt="" src={cloudI} className="icon-tab" /> */}
              Lingkungan Lestari
            </Tab>
            <Tab>
              {/* <img alt="" src={statusupI} className="icon-tab" /> */}
              Ekonomi Tangguh
            </Tab>
            <Tab>
              {/* <img alt="" src={frameI} className="icon-tab" /> */}
              Tata Kelola
            </Tab>
            <Tab>
              {/* <img alt="" src={buildingsI} className="icon-tab" /> */}
              Tata Kelola
            </Tab>
          </TabsList>
          <TabPanel style={{ marginTop: 37 }} value={0}>
            {/* <img alt="" src={petaIcon} className="image-contain" /> */}
            <div className="table-conten-index">
              <Table
                striped
                bordered
                responsive
                style={{ textAlign: "center" }}
              >
                <thead className="heading-table">
                  <tr>
                    <td colSpan={4}>Kualitas Lingkungan Hidup</td>
                    <td colSpan={3}>Pengelolaan SDA Lingkungan</td>
                    <td colSpan={1}>Resiliensi lingkungan</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Wilayah</td>
                    <td>BANJIR</td>
                    <td>LONGSOR</td>
                    <td>KEBAKARAN</td>
                    <td>Desa yang memiliki Bank sampah</td>
                    <td>Normalisasi sungai kanal dan waduk</td>
                    <td>Sanitasi Layak</td>
                    <td>Mitigasi Bencana</td>
                  </tr>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabPanel>
          <TabPanel style={{ marginTop: 37 }} value={1}>
            <img alt="" src={petaIcon} className="image-contain" />
            <div className="table-conten-index">
              <Table
                striped
                bordered
                responsive
                style={{ textAlign: "center" }}
              >
                <thead className="heading-table">
                  <tr>
                    <td colSpan={4}>Kualitas Lingkungan Hidup</td>
                    <td colSpan={3}>Pengelolaan SDA Lingkungan</td>
                    <td colSpan={1}>Resiliensi lingkungan</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Wilayah</td>
                    <td>BANJIR</td>
                    <td>LONGSOR</td>
                    <td>KEBAKARAN</td>
                    <td>Desa yang memiliki Bank sampah</td>
                    <td>Normalisasi sungai kanal dan waduk</td>
                    <td>Sanitasi Layak</td>
                    <td>Mitigasi Bencana</td>
                  </tr>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabPanel>
          <TabPanel style={{ marginTop: 37 }} value={2}>
            <img alt="" src={petaIcon} className="image-contain" />
            <div className="table-conten-index">
              <Table
                striped
                bordered
                responsive
                style={{ textAlign: "center" }}
              >
                <thead className="heading-table">
                  <tr>
                    <td colSpan={4}>Kualitas Lingkungan Hidup</td>
                    <td colSpan={3}>Pengelolaan SDA Lingkungan</td>
                    <td colSpan={1}>Resiliensi lingkungan</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Wilayah</td>
                    <td>BANJIR</td>
                    <td>LONGSOR</td>
                    <td>KEBAKARAN</td>
                    <td>Desa yang memiliki Bank sampah</td>
                    <td>Normalisasi sungai kanal dan waduk</td>
                    <td>Sanitasi Layak</td>
                    <td>Mitigasi Bencana</td>
                  </tr>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabPanel>
          <TabPanel style={{ marginTop: 37 }} value={3}>
            <img alt="" src={petaIcon} className="image-contain" />
            <div className="table-conten-index">
              <Table
                striped
                bordered
                responsive
                style={{ textAlign: "center" }}
              >
                <thead className="heading-table">
                  <tr>
                    <td colSpan={4}>Kualitas Lingkungan Hidup</td>
                    <td colSpan={3}>Pengelolaan SDA Lingkungan</td>
                    <td colSpan={1}>Resiliensi lingkungan</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Wilayah</td>
                    <td>BANJIR</td>
                    <td>LONGSOR</td>
                    <td>KEBAKARAN</td>
                    <td>Desa yang memiliki Bank sampah</td>
                    <td>Normalisasi sungai kanal dan waduk</td>
                    <td>Sanitasi Layak</td>
                    <td>Mitigasi Bencana</td>
                  </tr>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                      <td key={index}>{index + 1}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabPanel>
        </TabsUnstyled>
      </div>
    </div>
  );
}
