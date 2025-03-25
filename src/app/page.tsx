"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const books = [
  { id: 1, image: "/imagenes/tomo_1.png", title: "Operation True Love - Tomo 1" },
  { id: 2, image: "/imagenes/tomo_2.png", title: "Operation True Love - Tomo 2" },
  { id: 3, image: "/imagenes/tomo_3.png", title: "Operation True Love - Tomo 3" },
];

export default function LandingPage() {
  const [currentBook, setCurrentBook] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBook((prev) => (prev + 1) % books.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">

      {/* Imagen de fondo con Next.js */}
      <Image 
        src="/imagenes/portada.jpg" 
        alt="Fondo" 
        layout="fill" 
        objectFit="cover" 
        className="absolute inset-0 -z-10"
      />

      {/* Capa de oscurecimiento y blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-6xl mx-auto text-white">
        <h2 className="text-2xl font-bold">Operation True Love</h2>
        <div className="space-x-6">
          <a href="#features" className="hover:text-yellow-400">Características</a>
          <a href="#reviews" className="hover:text-yellow-400">Reseñas</a>
          <a href="#buy" className="hover:text-yellow-400">Comprar</a>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen max-w-6xl mx-auto p-6 text-white">
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold leading-tight">Encuentra el amor verdadero</h1>
          <p className="mt-4 text-lg">Los tomos digitales están disponibles ahora. Vive una historia única llena de emociones.</p>
          <div className="mt-6 flex gap-4">
            <Button className="bg-yellow-400 text-black text-lg py-3 px-6 rounded-lg">Comprar ahora</Button>
            <Button className="border border-white text-white text-lg py-3 px-6 rounded-lg">Más información</Button>
          </div>
        </div>
        
        {/* Imagen con animación */}
        <motion.div
          key={books[currentBook].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <Image
            src={books[currentBook].image}
            alt={books[currentBook].title}
            width={300}
            height={450}
            className="shadow-lg rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
