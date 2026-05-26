import React from 'react';
import { CardTecnologia } from "../ui/card";
import tecnologias from "../data/tecnologias";
 
export default function Tecnologias() {
  return (
    <section id="tecnologias">
      <h2>Tecnologías</h2>
      <div className="cards">
        {tecnologias.map((tech, index) => (
          <CardTecnologia
            key={index}
            icono={tech.icono}
            nombre={tech.nombre}
          />
        ))}
      </div>
    </section>
  );
}