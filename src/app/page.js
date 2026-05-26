// Aquí se define la estructura principal del portafolio.

import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";

import Bienvenida from "@/src/sections/bienvenida";
import Hero from "@/src/sections/hero";
import About from "@/src/sections/about";
import Tecnologias from "@/src/sections/tecnologias";
import Proyectos from "@/src/sections/proyectos";
import Contacto from "@/src/sections/contacto";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Bienvenida />
        <Hero />
        <About />
        <Tecnologias />
        <Proyectos />
        <Contacto />
      </main>

      <Footer />
    </>
  );
}