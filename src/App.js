import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import About from "./Pages/About";
import News from "./Pages/News";
import ErrorPage from "./Pages/ErrorPage";
import NavbarComp from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import DetailNews from "./Pages/DetailNews";
import DetailIndex from "./Pages/DetailIndex";
import Publikasi from "./Pages/Publikasi";
import Video from "./Pages/Video";
import Maps from "./Pages/Maps";
// import ScrollTop from "./ScrollTop";
export default function App() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/detailnews/:title" element={<DetailNews />} />
        <Route path="/index/data" element={<DetailIndex />} />
        <Route path="/publikasi" element={<Publikasi />} />
        <Route path="/video" element={<Video />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
