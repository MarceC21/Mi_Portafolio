// Cards para la seccion about
export default function CardAbout({ icono, title, description }) {
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
export function CardProyecto({ imagen, titulo, descripcion, tecnologias, repositorio, demo }) {
  return (
    <div className="card-proyecto">
      <div className="card-proyecto-imagen">
        {imagen ? (
          <img
            src={imagen}
            alt={`Captura de ${titulo}`}
            className="imagen-proyecto"
          />
        ) : (
          <div className="imagen-placeholder">
            Proyecto en desarrollo. ¡Pronto habrá una imagen aquí!
          </div>
        )}
      </div>

      <div className="card-proyecto-body">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>

        <div className="tecnologias">
          {tecnologias.map((tech, index) => (
            <span key={index} className="tecnologia">{tech}</span>
          ))}
        </div>

        <div className="card-proyecto-links">
          {repositorio && (
            <a
              href={repositorio}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-repo"
            >
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-demo"
            >
              Ver demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}