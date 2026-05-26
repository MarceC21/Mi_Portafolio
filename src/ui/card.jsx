// Aqui estan todas las card 

import React from 'react';

import "@/src/style/proyect.css";


// Cards para la seccion about
export default function CardAbout({
  icono,
  title,
  description,
}) {
  return (
    <div className="card">

      <div className="card-header">
        <span className="card-icon">{icono}</span>

        <h3>{title}</h3>
      </div>

      <p>{description}</p>

    </div>
  );
}
// Card para la sección de tecnologías
export function CardTecnologia({ icono, nombre }) {
  return (
    <div className="card card-tecnologia">
      <div className="icono">{icono}</div>
      <h3>{nombre}</h3>
    </div>
  );
}



// Card para la sección de proyectos
export function CardProyecto({
  imagen,
  titulo,
  descripcion,
  tecnologias,
  repositorio,
  demo,
}) {
  return (
    <article className="card proyecto-card">

      {/* Imagen o placeholder */}
      {imagen ? (
        <img
          src={imagen}
          alt={titulo}
          className="proyecto-img"
        />
      ) : (
        <div className="proyecto-placeholder">
          <span>🚀</span>
        </div>
      )}

      {/* Contenido */}
      <div className="proyecto-content">

        <h3>{titulo}</h3>

        <p>{descripcion}</p>

        <div className="proyecto-tech">
          {tecnologias.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="proyecto-links">

          {repositorio && (
            <a
              href={repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Demo
            </a>
          )}

        </div>
      </div>
    </article>
  );
}