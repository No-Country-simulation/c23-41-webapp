import React from 'react';
import '../styles/features.css';

const features = [
  {  description: 'Conectá con estudiantes de otras carreras y universidades', buttonText: 'Learn more', imageUrl: '/card1.png',buttonImage: '/buttonLearnMore.png',backgroundColor: '#FFFFFF' },
  {  description: 'Enseñá tus habilidades a otros estudiantes', buttonText: 'Learn more',imageUrl: '/card2.png',buttonImage: '/buttonLearnMore.png' ,backgroundColor: '#B9FF66'},
  {  description: 'Realizá comentarios', buttonText: 'Learn more',imageUrl: '/card3.png',buttonImage: '/buttonLearnMore.png',backgroundColor: '#000000' },
  {  description: 'Participa en talleres, webinars y actividades únicas.', buttonText: 'Learn more',imageUrl: '/card1.png',buttonImage: '/buttonLearnMore.png',backgroundColor: '#FFFFFF'},
];

const Features: React.FC = () => {
  return (
    <section id="features">
      <h3>Servicios</h3>
      
      <div className="cards">
        {features.map((feature, index) => (
          <div key={index} className="card"  style={{ backgroundColor: feature.backgroundColor }}>
              <div className="card-content">
              <p>{feature.description}</p>
              <img src={feature.imageUrl} className="card-image" alt="Feature" />
          </div>
            <button 
              onClick={() => alert(`${feature.buttonText} clickeado`)} 
              className="card-button"
            >
              <img 
                src={feature.buttonImage} 
                alt={feature.buttonText} 
                className="button-image" 
              />
            </button>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Features;
