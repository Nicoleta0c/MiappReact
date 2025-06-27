import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        style={{
          backgroundColor: "#222",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        {open ? "Cerrar Menu" : "Abrir Menu"}
      </button>

      {open && (
        <nav
          style={{
            background: "#222",
            color: "white",
            padding: "20px",
            borderRadius: "4px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link style={{ color: "white" }} to="/home" onClick={() => setOpen(false)}>
                Portada
              </Link>
            </li>
             <li>
              <Link style={{ color: "white" }} to="/personajes" onClick={() => setOpen(false)}>
                Personajes
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/momentos" onClick={() => setOpen(false)}>
                momentos
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/acerca" onClick={() => setOpen(false)}>
                acerca del creador
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/vida" onClick={() => setOpen(false)}>
                En mi vida
              </Link>
            </li>
            <li>
              <Link style={{ color: "white" }} to="/conctactame" onClick={() => setOpen(false)}>
                Contratame
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Menu;
