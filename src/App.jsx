import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Header />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
