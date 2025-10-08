import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import EBoardPage from "./pages/EBoardPage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactStrip from "./components/ContactStrip";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/eboard" element={<EBoardPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
        <ContactStrip/>
      </div>
    </Router>
  );
}
