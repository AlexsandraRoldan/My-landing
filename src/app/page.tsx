"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Info, CheckCircle } from "lucide-react";

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
    <div>
      <div className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/imagenes/portada.jpg" 
            alt="Fondo" 
            layout="fill" 
            objectFit="cover" 
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
        </div>

        <nav className="relative z-10 flex justify-between items-center p-6 max-w-6xl mx-auto text-white">
          <h2 className="text-2xl font-bold">Operation True Love</h2>
          <div className="space-x-6">
            <a href="#features" className="hover:text-yellow-400">Características</a>
            <a href="#reviews" className="hover:text-yellow-400">Reseñas</a>
            <a href="#buy" className="hover:text-yellow-400">Comprar</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen max-w-6xl mx-auto p-6 text-white">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold leading-tight">Operacion verdadero amor </h1>
            <h2 className="mt-2 text-2xl text-pink-300 font-semibold">Una historia que te hará suspirar</h2>
            <p className="mt-4 text-lg">
              Los tomos digitales están disponibles ahora. Vive una historia única llena de emociones, secretos y giros inesperados.
            </p>

            <ul className="mt-4 space-y-2 text-lg">
              <li className="flex items-center gap-2">
                <CheckCircle className="text-yellow-300 w-6 h-6" /> Ilustraciones de alta calidad.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-yellow-300 w-6 h-6" /> Más de 22 millones de lectores.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="text-yellow-300 w-6 h-6" /> Disponible en formato digital y físico.
              </li>
            </ul>

            <p className="mt-6 italic text-gray-200">⭐⭐⭐⭐⭐ “Una historia emocionante que no podrás dejar de leer.”</p>

            <div className="mt-6 flex gap-4">
              <Button className="bg-yellow-400 text-black text-lg py-3 px-6 rounded-lg flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Comprar ahora
              </Button>
              <Button className="border border-white text-white text-lg py-3 px-6 rounded-lg flex items-center gap-2">
                <Info className="w-5 h-5" /> Más información
              </Button>
            </div>
          </div>

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
              width={400}
              height={600}
              className="shadow-lg rounded-lg"
            />
          </motion.div>
        </div>
      </div>

      <section id="features" className="bg-gradient-to-r from-[#BF5065] to-[#F2EBEC] text-gray-800 py-20 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-4xl font-bold mb-12 text-[#F22987]">Características del Libro</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-8 bg-white/60 border border-[#F266C1] rounded-lg shadow-md backdrop-blur-lg">
              <CheckCircle className="text-[#F22987] w-14 h-14 mb-4" />
              <h3 className="text-2xl font-semibold text-[#BF5065]">Historia Emocionante</h3>
              <p className="mt-3 text-gray-600">Sumérgete en una historia llena de romance, drama y giros inesperados.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white/60 border border-[#F266C1] rounded-lg shadow-md backdrop-blur-lg">
              <CheckCircle className="text-[#F22987] w-14 h-14 mb-4" />
              <h3 className="text-2xl font-semibold text-[#BF5065]">Ilustraciones de Alta Calidad</h3>
              <p className="mt-3 text-gray-600">Disfruta de un arte impresionante con detalles vibrantes en cada página.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white/60 border border-[#F266C1] rounded-lg shadow-md backdrop-blur-lg">
              <CheckCircle className="text-[#F22987] w-14 h-14 mb-4" />
              <h3 className="text-2xl font-semibold text-[#BF5065]">Disponible en Digital y Físico</h3>
              <p className="mt-3 text-gray-600">Elige cómo quieres disfrutarlo: en versión digital o impresa.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}