"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Info, CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

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
              {["Historia Emocionante", "Ilustraciones de Alta Calidad", "Disponible en Digital y Físico"].map((feature, index) => {
                const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex flex-col items-center text-center p-8 bg-white/60 border border-[#F266C1] rounded-lg shadow-md backdrop-blur-lg"
                  >
                    <CheckCircle className="text-[#F22987] w-14 h-14 mb-4" />
                    <h3 className="text-2xl font-semibold text-[#BF5065]">{feature}</h3>
                    <p className="mt-3 text-gray-600">
                      {index === 0 ? "Sumérgete en una historia llena de romance, drama y giros inesperados." :
                       index === 1 ? "Disfruta de un arte impresionante con detalles vibrantes en cada página." :
                       "Elige cómo quieres disfrutarlo: en versión digital o impresa."}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <section id="reviews" className="bg-gray-100 py-20 px-6 text-gray-800">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-[#F22987]">Reseñas de los Lectores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[{
                name: "Mariana R.",
                date: "24/1/2025",
                rating: 5,
                review: "¡Todo llegó en perfecto estado! Me encanta todo.",
                image: "/imagenes/chica1.jpg",
                itemType: "Vol. 3"
              }, {
                name: "Sofía G.",
                date: "2/1/2025",
                rating: 4,
                review: "¡Estoy muy feliz con mi pedido! El manhwa llegó en perfectas condiciones.",
                image: "/imagenes/chica3.jpg",
                itemType: "Vol. 2"
              }, {
                name: "Carlos P.",
                date: "7/12/2024",
                rating: 5,
                review: "Casi todo llegó en buen estado. ¡Se veía muy lindo! Realmente satisfecho.",
                image: "/imagenes/chico2.jpg",
                itemType: "Vol. 1"
              }, {
                name: "Andrea M.",
                date: "15/2/2025",
                rating: 5,
                review: "El arte es increíble y la calidad del papel es excelente. ¡Definitivamente lo recomiendo!",
                image: "/imagenes/chica4.jpg",
                itemType: "Vol. 1"
              }].map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-6 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col md:flex-row items-center"
                >
                  <Image src={review.image} alt={review.name} width={120} height={120} className="rounded-lg mb-4 md:mb-0 md:mr-4" />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{review.name} <span className="text-sm text-gray-500">({review.date})</span></p>
                    <p className="text-yellow-500">{'⭐️'.repeat(review.rating)}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${review.rating * 20}%` }}></div>
                    </div>
                    <p className="mt-2 text-gray-600">{review.review}</p>
                    <p className="mt-1 text-sm text-gray-500">Tipo de artículo: {review.itemType}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}