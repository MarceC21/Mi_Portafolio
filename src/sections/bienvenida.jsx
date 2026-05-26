import React from "react";

export default function Bienvenida() {
  return (
    <section id="bienvenida" className="section">
      <div className="container">

        <h1>Marcela Castillo</h1>

        <h2>Computer Science Student & Web Developer</h2>

        <p>
          Soy una apasionada estudiante de informática a quien le gusta
          aprender nuevas tecnologías y convertir ideas en experiencias
          digitales funcionales.
        </p>

        <div className="social-links">

          <a
            href="https://www.linkedin.com/in/marcela-castillo-80573b399/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/MarceC21"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}