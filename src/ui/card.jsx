// Cards para la seccion about
export default function CardAbout({ icono,title, description }) {
  return (
    <div className="card-about">
        <div className="icono">{icono}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


// Card para la sección de tecnologías
export function CardTecnologia({ icono, nombre }) {
  return (
    <div className="card-tecnologia">
      <div className="icono">{icono}</div>
      <h3>{nombre}</h3>
    </div>
  );
}

// Card para la sección de proyectos
export function CardProyecto({ imagen, titulo, descripcion, tecnologias, enlace }) {
  return (
    <div className="card-proyecto">
      <img src={imagen} alt={titulo} className="imagen-proyecto" />
      <h3>{titulo}</h3> 
        <p>{descripcion}</p>
        <div className="tecnologias">
            {tecnologias.map((tech, index) => (
                <span key={index} className="tecnologia">{tech}</span>
            ))}
        </div>
        <a href={enlace} target="_blank" rel="noopener noreferrer" className="enlace-proyecto">
            Ver proyecto
        </a>    
    </div>
  );
}