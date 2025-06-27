import React from "react";

const Contactame = () => (
  <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
    <h2 style={{ color: "#e63946", textAlign: "center" }}>Contratame</h2>
    <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 20 }}>
      <img
        src="https://media.discordapp.net/attachments/805203337909764146/1374050116423516170/PXL_20240310_152653942.jpg?ex=685ebc64&is=685d6ae4&hm=f1e72f738ee53bc92c79e94060db17deca36394c18d6f92be72e4c2e27bb9719&=&format=webp&width=698&height=930"
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
          <strong>Matrícula:</strong> 2023-1075
        </p>
        <p>
          <strong>Correo para contactarme:</strong> 20231075@itla.edu.do
        </p>
      </div>
    </div>
  </div>
);

export default Contactame;
