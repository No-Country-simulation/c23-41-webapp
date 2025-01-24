import React, { useState } from "react";
import "../styles/howitwork.css";

const Howitwork: React.FC = () => {
  // Estado para manejar la apertura de los acordeones
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Función para alternar el estado del acordeón
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Datos de los pasos
  const steps = [
    { title: "01: Registrate e inicia sesion", details: "Aquí puedes agregar más detalles sobre el primer paso de tu proceso." },
    { title: "02: Completa tu perfil y cuentala a otros estudiantes que habilidades tienes para ofrecer", details: "Aquí puedes agregar más detalles sobre el segundo paso de tu proceso." },
    { title: "03: Qué habilidades estás buscando para mejorar tu tesis?", details: "Aquí puedes agregar más detalles sobre el tercer paso de tu proceso." },
    { title: "04: Matechea con la persona indicada que haga tu tesis realidad", details: "Aquí puedes agregar más detalles sobre el cuarto paso de tu proceso." },
    { title: "05: Deja comentarios y evaluaciones que tal te fue con tu match", details: "Aquí puedes agregar más detalles sobre el quinto paso de tu proceso." },
  ];

  return (
    <section id="howitwork">
      <h2>Cómo es el proceso de funcionamiento</h2>
      <div className="accordion-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`accordion ${openAccordion === index ? "open" : ""}`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{step.title}</h3>
              <span>
                {openAccordion === index ? (
                  <i className="bi bi-dash-circle"></i> /* Ícono de menos */
                ) : (
                  <i className="bi bi-plus-circle"></i> /* Ícono de más */
                )}
              </span>
            </div>
            {openAccordion === index && (
              <div className="accordion-content">
                <p>{step.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Howitwork;
