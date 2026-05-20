import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import {
  ContactUs,
  MainPage,
  Portfolio,
  GetAQuote,
  Story,
  AboutUs,
  Merengue,
  Menu,
} from "./pages";

import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";

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
        <Route path="/menus/merengue" element={<Merengue />} />
        <Route path="/menus/menu" element={<Menu />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
