export default function numeroALetras(num) {
  if (
    typeof num !== "number" ||
    num < 1 ||
    num > 1000 ||
    !Number.isInteger(num)
  ) {
    return "Número fuera de rango (1-1000)";
  }

  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];

  const especiales = {
    10: "diez",
    11: "once",
    12: "doce",
    13: "trece",
    14: "catorce",
    15: "quince",
  };

  const decenas = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (num === 1000) return "mil";
  if (num === 100) return "cien";
  if (num <= 15) return especiales[num] || unidades[num];
  if (num < 20) return "dieci" + unidades[num - 10];
  if (num < 30) return "veinti" + unidades[num - 20];

  const u = num % 10;
  const d = Math.floor(num / 10) % 10;
  const c = Math.floor(num / 100);

  let texto = "";

  if (c > 0) texto += centenas[c] + " ";

  if (d > 2) {
    texto += decenas[d];
    if (u > 0) texto += " y " + unidades[u];
  } else if (d === 2) {
    texto += "veinti" + unidades[u];
  } else if (d === 1) {
    texto += especiales[num % 100] || "dieci" + unidades[u];
  } else {
    texto += unidades[u];
  }

  return texto.trim();
}
