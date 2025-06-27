import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Home = () => {
  const images = [
    'https://i.pinimg.com/736x/d5/dd/d9/d5ddd99032f5d804f3dcf39639c188d5.jpg',
    'https://i.pinimg.com/736x/20/ed/0c/20ed0c8504094c06633a47278ab6ea5c.jpg',
    'https://i.pinimg.com/736x/56/5e/f7/565ef74fa83d063c250cf2e91220bc27.jpg',
    'https://i.pinimg.com/736x/36/c0/16/36c0165aa1b559e4f352b64f673c85de.jpg',
  ];

  const irAPersonajes = () => {
    window.location.href = '/personajes';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>
       Cars 1: McQueen
      </h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                height: '60vh',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={irAPersonajes}
        style={{
          marginTop: '20px',
          width: '100%',
          padding: '10px',
          fontSize: '1em',
          backgroundColor: '#e63946',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Explorar
      </button>
    </div>
  );
};

export default Home;
