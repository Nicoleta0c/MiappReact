import React from "react";

const Experiencia = () => (
  <div style={{ maxWidth: 600, margin: "auto" }}>
    <h2>Video de Experiencia Personal</h2>
    <video
      controls
      style={{ width: "100%", borderRadius: 8 }}
      src="https://www.w3schools.com/html/mov_bbb.mp4"
    >
      Tu navegador no soporta el elemento de video.
    </video>
  </div>
);

export default Experiencia;
