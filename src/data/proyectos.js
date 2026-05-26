// Datos de proyectos 
// Se pueden agregar más 



const proyectos = [
  {
    id: 1,
    titulo: "Web Styling & Interactive Storytelling",
    descripcion:
      "Proyecto enfocado en diseño visual con CSS. Incluye dos partes: una personalización completa de Wikipedia usando Stylus (ricing) para crear una interfaz más moderna y limpia, y After Closing Hours, una historia interactiva desarrollada en HTML y CSS donde el usuario explora un centro comercial abandonado tomando decisiones que afectan el final.",
    tecnologias: ["HTML", "CSS", "Stylus", "NGINX"],
    imagen: "/imagenesProyectos/Lab2.png",
    repositorio: "https://github.com/MarceC21/Lab2_Web",
    demo: "", // No hay deploy
  },
  {
    id: 2,
    titulo: "API Testing & Documentation – The Cat API",
    descripcion:
      "Proyecto enfocado en consumo y validación de APIs REST utilizando The Cat API. Se realizaron pruebas funcionales y escenarios de error con Postman y HTTPie, documentando endpoints, autenticación, respuestas exitosas y errores comunes para simular un proceso real de onboarding técnico de una API externa.",
    tecnologias: ["Postman", "HTTPie", "The Cat API", "REST API"],
    imagen: "/imagenesProyectos/Lab3.png",
    repositorio: "https://github.com/MarceC21/Lab3_Web",
    demo: "", // No hay deploy
  },

  {
    id: 3,
    titulo: "Disci-App – Habit Tracker with Gamification",
    descripcion:
      "Aplicación web enfocada en creación de hábitos usando principios de gamification. Permite registrar misiones diarias, asignar dificultad y experiencia (XP), completar tareas y visualizar progreso en tiempo real mediante niveles y estadísticas dinámicas.",
    tecnologias: ["HTML", "CSS","JavaScript"],
    imagen: "/imagenesProyectos/Lab4.png",
    repositorio: "https://github.com/MarceC21/Dsci-app",
    demo: "", // No hay deploy
  },



  {
    id: 4,
    titulo: "Mini Blog – Posts Dashboard",
    descripcion:
      "Aplicación web tipo mini blog desarrollada con JavaScript puro que consume la API pública de DummyJSON. Permite listar publicaciones, buscar posts en tiempo real y crear nuevas entradas mediante peticiones HTTP, implementando además distintos estados de interfaz para mejorar la experiencia del usuario.",
    tecnologias: ["HTML", "CSS","JavaScript", "Fetch API", "DummyJSON"],
    imagen: "/imagenesProyectos/Lab5.png",
    repositorio: "https://github.com/MarceC21/Lab5_Web_MiniBlog",
    demo: "https://marcec21.github.io/Lab5_Web_MiniBlog/",
  },

  {
    id: 5,
    titulo: "Dynamic Blog Platform",
    descripcion:
      "Aplicación web tipo blog desarrollada en equipo con JavaScript Vanilla, enfocada en consumo de APIs y gestión dinámica de contenido. Permite consultar publicaciones, ver detalles individuales, crear nuevos posts, aplicar filtros y guardar favoritos, utilizando una arquitectura modular organizada por responsabilidades.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Fetch API", "DummyJSON"],
    imagen: "/imagenesProyectos/Blog.png",
    repositorio: "https://github.com/MarceC21/Proyecto1_P-ginaWeb",
    demo: "", // No hay deploy
  },

  {
    id: 6,
    titulo: "Not-Balatro",
    descripcion:
      "Creación de una versión simplificada de Balatro, en proceso",
    tecnologias: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    imagen: "",
    repositorio: "",
    demo: "", // No hay deploy
  },



];
 
export default proyectos;