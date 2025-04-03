import React from "react";
import Home from "./home";
import Header from "../components/header";
import Footer from "../components/footer";
import Events from "./events";
import Resources from "./resources";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadMemberDetails from "./uploadmemberdetails";
import { Analytics } from '@vercel/analytics/react';

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
          <Route path="/Upload" element={<UploadMemberDetails />}></Route>
        </Routes>
        <Analytics />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
