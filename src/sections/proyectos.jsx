import React from 'react';
import { CardProyecto } from "../ui/card";
import proyectos from "../data/proyectos";

export default function Proyectos() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="cards-proyectos">
        {proyectos.map((proyecto) => (
          <CardProyecto
            key={proyecto.id}
            imagen={proyecto.imagen}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            repositorio={proyecto.repositorio}
            demo={proyecto.demo}
          />
        ))}
        </div>
      </div>
    </section>
  );
}