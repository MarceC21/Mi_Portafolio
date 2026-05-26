// Aqui es para el footer

import React from 'react';
import "./footer.css";


export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Marcela Castillo. Todos los derechos reservados.</p>
    </footer>
  );
}