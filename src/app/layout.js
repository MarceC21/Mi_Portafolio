import "./globals.css";

export const metadata = {
  title: "Marcela Castillo Portafolio",
  description: "Portafolio personal de desarrollo web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
