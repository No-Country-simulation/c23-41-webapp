import React from 'react';
import '../styles/global.css';


const Proposal: React.FC = () => {
  return (
    <section id="proposal">
    
     
      <div style={{ flex: 1, paddingRight: '2rem' }}>
            <h2>Hagamos que las cosas sucedan</h2>
            <p>Contactanos hoy para aprender a cómo nuestros servicios pueden ayudarte de la mejor forma.</p>
      </div>

      <div style={{ flex: 1 }}>
          <img 
              src="/Illustration.png" 
              alt="Imagen del producto" 
              style={{ width: '100%', height: 'auto', maxWidth: '500px' }} 
            />
      </div>
    </section>
    

    
  );
};

export default Proposal;
