import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
    
      <img 
          src="/Logo.png" 
          alt="Logo de Mi Landing Page" 
          style={{ height: '50px' }} 
        />
        <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
          <li><a href="#hero">Sobre nosotros</a></li>
          <li><a href="#features">Servicios</a></li>
          <li><a href="#contact">Use Cases</a></li>
          <li><a href="#contact">Inirse ahora</a></li>
          <button >Inicar sesión</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
