import React from "react";

const Home = () => (
  <div style={{ maxWidth: 600, margin: "auto" }}>
    <h2>Datos Personales</h2>
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <img
        src="https://media.discordapp.net/attachments/805203337909764146/1374050116423516170/PXL_20240310_152653942.jpg?ex=68430ce4&is=6841bb64&hm=e9ed99b366f90f8d7f3c12c500b83356e637ad50416729f52d6e2b4d05eaf8dd&=&format=webp&width=698&height=930"
        alt="Foto personal"
        style={{ width: 100, height: 100, borderRadius: 8, objectFit: "cover" }}
      />
      <div style={{ fontSize: 18 }}>
        <p>
          <strong>Nombre:</strong> Nicolle
        </p>
        <p>
          <strong>Apellido:</strong> Rosa Andujar
        </p>
        <p>
          <strong>Matricula:</strong> 2023-1075
        </p>
        <p>
          <strong>Correo:</strong> 20231075@itla.edu.do
        </p>
      </div>
    </div>
  </div>
);

export default Home;
