import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import StickyIcon from "./components/stickyIcon";

function App() {
  return (
    <Router>
      <Header />
      <StickyIcon />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
