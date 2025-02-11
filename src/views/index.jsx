import React from "react";
import Home from "./home";
import Header from "../components/header";
import Footer from "../components/footer";
import Events from "./events";
import Resources from "./resources";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Events" element={<Events />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Resources" element={<Resources />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
