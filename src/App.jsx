import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Menu from "./components/Menu";

import Home from "./pages/Home";
import Momentos from "./pages/Momentos"; 
import Personajes from "./pages/Personajes";
import AcercaDe from "./pages/AcercaDe";
import EnMiVida from "./pages/EnMiVida";
import Contactame from "./pages/Contactame";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <Menu open={menuOpen} toggle={toggleMenu} />
      <div style={{ marginLeft: menuOpen ? 220 : 0, transition: "margin-left 0.3s ease" }}>
        <main style={{ padding: 20 }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/momentos" element={<Momentos />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/acerca" element={<AcercaDe />} />
            <Route path="/vida" element={<EnMiVida />} />
             <Route path="/conctactame" element={<Contactame/>} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
