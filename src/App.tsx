import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import {
  ContactUs,
  MainPage,
  Portfolio,
  Request,
  Story,
  AboutUs,
} from "./pages";

import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";
import CarrotCake from "./pages/CarrotCake";
import HoneyCake from "./pages/HoneyCake";
import MeringueRoll from "./pages/MeringueRoll";
import TresLeches from "./pages/TresLeches";

function App() {
  return (
    <div className={" body text-p font-extralight text-gray-dark"}>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/story" element={<Story />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/menus/CarrotCake" element={<CarrotCake />} />
        <Route path="/menus/HoneyCake" element={<HoneyCake />} />
        <Route path="/menus/MeringueRoll" element={<MeringueRoll />} />
        <Route path="/menus/TresLeches" element={<TresLeches />} />
        <Route path="/request" element={<Request />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
