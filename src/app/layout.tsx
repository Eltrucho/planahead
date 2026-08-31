import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quécomo - Planificador de Menús",
  description: "Planifica tus comidas de la semana con IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#e9e6df] text-zinc-800 antialiased transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}