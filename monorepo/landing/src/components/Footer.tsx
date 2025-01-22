import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <p>© 2025 Mi Landing Page. Todos los derechos reservados.</p>
      <p>
        <a href="mailto:contacto@miempresa.com" style={{ color: '#fff' }}>contacto@miempresa.com</a>
      </p>
    </footer>
  );
};

export default Footer;
