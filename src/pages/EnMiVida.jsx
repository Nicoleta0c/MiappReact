import React from "react";

const EnMiVida = () => {
  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#e63946" }}>En Mi Vida</h1>
      <p style={{ fontSize: "1.2em", marginBottom: 20 }}>
        Es mi pelicula favorita porrque sencillamente amo los autos y las carreras, mcqueen si lo vemos desde otra perspectiva es simplemente buenisimo. Lo recomiendo para los amantes de autos.
     </p>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
        <iframe
          src="https://www.youtube.com/embed/hwOmbZ0ULhs"
          title="Video En Mi Vida"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default EnMiVida;
