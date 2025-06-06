import React from "react";

const Header = ({ toggleMenu }) => (
  <header
    style={{
      height: 50,
      backgroundColor: "#007acc",
      color: "white",
      display: "flex",
      alignItems: "center",
      paddingLeft: 15,
      boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
      position: "sticky",
      top: 0,
      zIndex: 500,
    }}
  >
    <button
      onClick={toggleMenu}
      style={{
        fontSize: 24,
        color: "white",
        background: "none",
        border: "none",
        cursor: "pointer",
        marginRight: 15,
      }}
      aria-label="Abrir menú"
    >
      ☰
    </button>
    <h1 style={{ margin: 0, fontSize: 22 }}>Mi App</h1>
  </header>
);

export default Header;
