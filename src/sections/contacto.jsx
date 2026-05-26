
// Si no se pone esto, Next.js asume que el componente es estático y no puede usar hooks ni interactividad
// Esto es necesario para que el formulario de contacto pueda manejar eventos (aunque en este caso no envíe datos a ningún lado)
"use client";


import React from 'react';


export default function Contacto() {
  return (
    <section id="contacto">
      <h2>Contacto</h2>

      <div className="contacto-wrapper">

        {/* Info de contacto */}
        <div className="contacto-info">
          <p className="contacto-intro">
            ¿Tienes un proyecto en mente o quieres conectar? ¡Escríbeme!
          </p>

          <ul className="contacto-links">
            <li>
              <a href="mailto:tu.correo@example.com" className="contacto-link">
                <span className="contacto-icon">✉️</span>
                tu.correo@example.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MarceC21"
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-link"
              >
                <span className="contacto-icon">🐙</span>
                github.com/MarceC21
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/marcela-castillo-80573b399/"
                target="_blank"
                rel="noopener noreferrer"
                className="contacto-link"
              >
                <span className="contacto-icon">💼</span>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Formulario visual (no funcional — solo presentación) */}
        <form className="contacto-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              autoComplete="off"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              rows={5}
              placeholder="Cuéntame sobre tu proyecto o idea..."
            />
          </div>

          <button type="submit" className="btn-enviar">
            Enviar mensaje 🚀
          </button>
        </form>

      </div>
    </section>
  );
}