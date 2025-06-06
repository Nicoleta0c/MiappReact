import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px 0",
  fontSize: "18px",
};

const Menu = ({ open, toggle }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: open ? 0 : "-220px",
      width: 220,
      height: "100%",
      backgroundColor: "#222",
      color: "white",
      transition: "left 0.3s ease",
      paddingTop: 60,
      boxSizing: "border-box",
      zIndex: 1000,
    }}
  >
    <button
      onClick={toggle}
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        background: "transparent",
        border: "none",
        color: "white",
        fontSize: 24,
        cursor: "pointer",
      }}
      aria-label="Cerrar menú"
    >
      ×
    </button>
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: 20,
      }}
    >
      <Link to="/home" onClick={toggle} style={linkStyle}>
        Pagina Inicial
      </Link>
      <Link to="/sumadora" onClick={toggle} style={linkStyle}>
        Sumadora
      </Link>
      <Link to="/traductor" onClick={toggle} style={linkStyle}>
        Traductor Numero a Letras
      </Link>
      <Link to="/tabla" onClick={toggle} style={linkStyle}>
        Tabla de Multiplicar
      </Link>
      <Link to="/experiencia" onClick={toggle} style={linkStyle}>
        Experiencia Personal
      </Link>
    </nav>
  </div>
);

export default Menu;
