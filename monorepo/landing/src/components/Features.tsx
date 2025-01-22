import React from 'react';

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  { title: 'Característica 1', description: 'Descripción breve 1' },
  { title: 'Característica 2', description: 'Descripción breve 2' },
  { title: 'Característica 3', description: 'Descripción breve 3' },
];

const Features: React.FC = () => {
  return (
    <section id="features" style={{ padding: '2rem', backgroundColor: '#eef' }}>
      <h3>Nuestras Características</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {features.map((feature, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
