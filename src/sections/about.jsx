import React from 'react';


import CardAbout from "../ui/card";


export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2 className="section-title">Un poco sobre mí</h2>
        <div className="cards">
        <CardAbout 
          icono="👩‍💻" 
          title="Quién soy" 
          description="
          Estudiante de Ingeniería en Computación apasionada por el desarrollo de software y el diseño web." 
        />
        <CardAbout 
          icono="🎯" 
          title="Intereses profesionales" 
          description="Desarrollo web tanto frontend como backend, diseño UI/UX y tecnologías emergentes." 
        />
        <CardAbout 
          icono="📚" 
          title="Áreas que deseo seguir aprendiendo" 
          description="Computación en la nube, ciberseguridad y mejores prácticas de desarrollo." 
        />
        </div>
      </div>
    </section>
  );
}