import React, { useState } from 'react';

const momentos = [
  {
    titulo: 'Momento con Sally 💙',
    imagen: 'https://i.pinimg.com/736x/de/3e/b3/de3eb3fa97fcbbce19f14d49cc3932a4.jpg',
    descripcion: 'McQueen y Sally disfrutan de un paseo por Radiador Springs, conociendo el pueblo y compartiendo un momento sincero.',
    video: 'https://www.youtube.com/embed/BWEHnPH4Yks',
  },
  {
    titulo: 'La gran carrera 🏁',
    imagen: 'https://images.coches.com/_news_/2020/08/coches.com_quien-es-rayo-mcqueen-cars-20.jpeg',
    descripcion: 'McQueen corre por la Copa Pistón enfrentándose a sus rivales, demostrando coraje y velocidad.',
    video: 'https://www.youtube.com/embed/IOwjUoYGuGk',
  },
  {
    titulo: 'Cambio de ruedas ⚙️',
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8_u-yx2-gpKtU5dKjANVROvNISTsYC2PQg&s",
    descripcion: 'Luigi y Guido realizan el cambio de ruedas mas rapido jamas visto, la mejor escena wow.',
    video: 'https://www.youtube.com/embed/Ev3H_pa61Qc',
  },
];

const Momentos = () => {
  const [seleccionado, setSeleccionado] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#e63946' }}>Momentos Favoritos</h1>

      <div style={{ display: 'grid', gap: '20px' }}>
        {momentos.map((m, i) => (
          <div
            key={i}
            style={{
              background: '#ffe5e5',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <img src={m.imagen} alt={m.titulo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h2 style={{ margin: '0 0 10px', color: '#d62828' }}>{m.titulo}</h2>
              <button
                onClick={() => setSeleccionado(m)}
                style={{
                  padding: '10px',
                  width: '100%',
                  backgroundColor: '#e63946',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1em',
                  cursor: 'pointer',
                }}
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {seleccionado && (
        <div
          style={{
            marginTop: '40px',
            padding: '20px',
            backgroundColor: '#fff3f3',
            borderRadius: '10px',
            border: '2px solid #e63946',
          }}
        >
          <h2 style={{ color: '#d62828' }}>{seleccionado.titulo}</h2>
          <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>{seleccionado.descripcion}</p>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              src={seleccionado.video}
              title="Video de momento"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Momentos;
