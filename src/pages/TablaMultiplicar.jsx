import React, { useState } from "react";

const TablaMultiplicar = () => {
  const [num, setNum] = useState(1);

  const filas = [];
  for (let i = 1; i <= 13; i++) {
    filas.push(
      <li key={i}>
        {num} × {i} = {num * i}
      </li>
    );
  }

  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <h2>Tabla de Multiplicar hasta 13</h2>
      <input
        type="number"
        min="1"
        max="13"
        value={num}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (val >= 1 && val <= 13) setNum(val);
        }}
        style={{ padding: 8, fontSize: 16, width: "100%", marginBottom: 10 }}
      />
      <ul>{filas}</ul>
    </div>
  );
};

export default TablaMultiplicar;
