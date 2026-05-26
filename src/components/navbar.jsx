export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Nombre / logo */}
      <div className="logo">
        <a href="#bienvenida" aria-label="Ir al inicio">
           Marcela
        </a>
      </div>

      {/* Navegación */}
      <ul className="nav-links">

        <li className="nav-item">
          <a href="#bienvenida">Inicio</a>
        </li>

        <li className="nav-item">
          <a href="#sobre-mi">Sobre mí</a>
        </li>

        <li className="nav-item">
          <a href="#tecnologias">Tecnologías</a>
        </li>

        <li className="nav-item">
          <a href="#proyectos">Proyectos</a>
        </li>

        <li className="nav-item">
          <a href="#contacto">Contacto</a>
        </li>

      </ul>
    </nav>
  );
}