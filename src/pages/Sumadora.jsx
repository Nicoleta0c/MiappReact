import React, { useState } from "react";

const inputStyle = {
  padding: 8,
  margin: "5px 5px 15px 0",
  fontSize: 16,
  width: 150,
};

const btnStyle = {
  padding: "8px 15px",
  fontSize: 16,
  cursor: "pointer",
};

const Sumadora = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (!isNaN(n1) && !isNaN(n2)) setResultado(n1 + n2);
    else setResultado("Por favor ingrese números válidos");
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Sumadora</h2>
      <input
        type="number"
        placeholder="Numero 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={inputStyle}
      />
      <input
        type="number"
        placeholder="Numero 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={inputStyle}
      />
      <br />
      <button onClick={sumar} style={btnStyle}>
        Sumar
      </button>
      {resultado !== null && (
        <p style={{ marginTop: 20 }}>
          <strong>Resultado:</strong> {resultado}
        </p>
      )}
    </div>
  );
};

export default Sumadora;
