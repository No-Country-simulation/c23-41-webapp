import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" style={{ textAlign: 'center', padding: '2rem' }}>
       <div style={{ flex: 1, paddingRight: '2rem' }}>
        <h2>¡Comenzá a conectar desde tu talento!</h2>
        <p>Forma parte de nuestra comunidad universitaria para el intercambio de habilidades. Aprende, enseña y crece junto a otros estudiantes y profesionales.</p>
       
      </div>
      <div style={{ flex: 1 }}>
      <img 
          src="/Header.png" 
          alt="Imagen del producto" 
          style={{ width: '100%', height: 'auto', maxWidth: '500px' }} 
        />
      </div>
    </section>
  );
};

export default Hero;
