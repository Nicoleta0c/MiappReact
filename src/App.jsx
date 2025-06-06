import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Menu from "./components/Menu";
import Header from "./components/Header";

import Home from "./pages/Home";
import Sumadora from "./pages/Sumadora";
import Traductor from "./pages/Traductor";
import TablaMultiplicar from "./pages/TablaMultiplicar";
import Experiencia from "./pages/Experiencia";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <Menu open={menuOpen} toggle={toggleMenu} />
      <div style={{ marginLeft: menuOpen ? 220 : 0, transition: "margin-left 0.3s ease" }}>
        <Header toggleMenu={toggleMenu} />
        <main style={{ padding: 20 }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sumadora" element={<Sumadora />} />
            <Route path="/traductor" element={<Traductor />} />
            <Route path="/tabla" element={<TablaMultiplicar />} />
            <Route path="/experiencia" element={<Experiencia />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
