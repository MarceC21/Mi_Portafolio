import React from 'react';

import CardTecnologia from "../ui/card";


export default function Tecnologias() {
  return (
    <section id = "tecnologias">
      <h2>Tecnologías</h2>
      <div className="cards">
        <CardTecnologia
          icono="⚛️"
          nombre="React"
        />
        <CardTecnologia
          icono=""
          nombre="Next.js"
        />
        <CardTecnologia
          icono=""
          nombre="React Native"
        />
        <CardTecnologia
          icono="🐍"
          nombre="Python"
        />
        <CardTecnologia
          icono="☕"
          nombre="Java"
        />

        <CardTecnologia
          icono=""
          nombre="Javascript"
        />

        <CardTecnologia
          icono="💻"
          nombre="HTML"
        />

        <CardTecnologia
          icono="🎨"
          nombre="CSS"
        />

        <CardTecnologia
          icono=""
          nombre="Node.js"
        />

        <CardTecnologia
          icono="🐘"
          nombre="PostgreSQL"
        />

      </div>

    </section>

  );
}