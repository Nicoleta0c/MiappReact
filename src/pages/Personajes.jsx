import React, { useState } from 'react';

const personajes = [
  {
    nombre: 'Lightning McQueen',
    imagen: 'https://i.pinimg.com/736x/72/09/52/720952adb09fbe4f85c9baa69a509c3d.jpg',
    descripcion: 'Un joven y ambicioso auto de carreras que sueña con ganar la Copa Pistón. Al principio es arrogante, pero su estadía en Radiador Springs lo transforma profundamente. Aprende que la victoria no lo es todo y que los amigos son más valiosos que los trofeos.',
    datos: [
      'Número: 95',
      'Color: Rojo con rayos',
      'Frase icónica: "¡Ka-chow!"',
      'Mentor: Doc Hudson',
    ],
  },
  {
    nombre: 'Sally Carrera',
    imagen: 'https://i.pinimg.com/736x/f5/e5/0a/f5e50a23b779ce586a085f2c46397a09.jpg',
    descripcion: 'Una Porsche 911 azul, ex-abogada de ciudad que decidió mudarse a Radiador Springs por su encanto. Sally es inteligente, compasiva y se convierte en la voz de conciencia de McQueen.',
    datos: [
      'Modelo: Porsche 911 Carrera',
      'Color: Azul cielo',
      'Rol: Abogada y dueña del Cozy Cone Motel',
      'Personalidad: Inteligente, comprensiva, decidida',
    ],
  },
  {
    nombre: 'Mate (Mater)',
    imagen: 'https://i.pinimg.com/736x/f5/f2/23/f5f2232ecf4441da7d9b06d4232491d1.jpg',
    descripcion: 'Una grúa oxidada pero fiel, con un corazón enorme. Aunque es algo ingenuo y torpe, siempre está ahí para ayudar. Es el mejor amigo de McQueen y uno de los personajes más queridos por su humor y ternura.',
    datos: [
      'Trabajo: Grúa de rescate',
      'Color: Óxido marrón',
      'Frase icónica: "¡No necesito dientes para divertirme!"',
      'Le encanta: Remolcar y pasar tiempo con McQueen',
    ],
  },
];

const Personajes = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#e63946' }}>Personajes de Cars</h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {personajes.map((p, index) => (
          <li key={index}>
            <button
              onClick={() => setSeleccionado(p)}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px',
                margin: '10px 0',
                fontSize: '1.2em',
                backgroundColor: '#e63946', 
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#d62828')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#e63946')}
            >
              {p.nombre}
            </button>
          </li>
        ))}
      </ul>

      {seleccionado && (
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            border: '2px solid #e63946',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#fff3f3',
          }}
        >
          <img
            src={seleccionado.imagen}
            alt={seleccionado.nombre}
            style={{ width: '300px', maxWidth: '100%', borderRadius: '10px' }}
          />
          <h2 style={{ color: '#d62828' }}>{seleccionado.nombre}</h2>
          <p style={{ fontSize: '1.1em' }}>{seleccionado.descripcion}</p>
          <ul style={{ textAlign: 'left', marginTop: '15px' }}>
            {seleccionado.datos.map((d, i) => (
              <li key={i} style={{ marginBottom: '5px' }}>🔹 {d}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Personajes;
