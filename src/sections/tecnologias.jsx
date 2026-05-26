import React from 'react';
import { CardTecnologia } from "../ui/card";
import tecnologias from "../data/tecnologias";

import "@/src/style/tec.css";
 
export default function Tecnologias() {
  return (
    <section id="tecnologias" className="section">
      <div className="container">
        <h2 className="section-title">Tecnologías</h2>
        <div className="cards">
        {tecnologias.map((tech) => (
          <CardTecnologia
            key={tech.nombre}
            icono={tech.icono}
            nombre={tech.nombre}
          />
        ))}
        </div>
      </div>
    </section>
  );
}