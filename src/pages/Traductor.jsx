import React, { useState } from "react";
import numeroALetras from "../utils/numeroALetras";

const Traductor = () => {
  const [numero, setNumero] = useState("");
  const [texto, setTexto] = useState("");

  const convertir = () => {
    const n = parseInt(numero);
    setTexto(numeroALetras(n));
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Traductor de Número a Letras</h2>
      <input
        type="number"
        placeholder="Ingresa un numero 1-1000"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        style={{ padding: 8, fontSize: 16, width: "100%", marginBottom: 10 }}
      />
      <button onClick={convertir} style={{ padding: "8px 15px", fontSize: 16 }}>
        Convertir
      </button>
      {texto && (
        <p style={{ marginTop: 20 }}>
          <strong>En letras:</strong> {texto}
        </p>
      )}
    </div>
  );
};

export default Traductor;
