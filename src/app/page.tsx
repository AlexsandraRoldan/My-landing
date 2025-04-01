"use client";

import { useState, useEffect, useRef  } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Info, CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronUp, ChevronDown } from "lucide-react";




interface Book {
  id: number;
  image: string;
  title: string;
  details: string;
}

const books = [
  
  { 
    id: 1, 
    image: "/imagenes/tomo_1.png", 
    title: "Operation True Love - Tomo 1", 
    summary: "Sujeong, atrapada en una relación tóxica con su novio, descubre una aplicación misteriosa que podría cambiar su destino amoroso. Sin embargo, el precio a pagar podría ser más alto de lo que imagina.",
    details: "Primer volumen del exitoso manhwa, incluye ilustraciones exclusivas.",
    publication: "20 de septiembre, 2024",
    specs: "320 páginas | 150×210×20mm",
    isbn: "9788931477054"
  },
  { 
    id: 2, 
    image: "/imagenes/tomo_2.png", 
    title: "Operation True Love - Tomo 2", 
    summary: "Después de enfrentarse a la dura verdad sobre su relación, Sujeong empieza a cuestionar sus sentimientos. Mientras tanto, un nuevo personaje entra en su vida, desafiando todo lo que creía saber sobre el amor verdadero.",
    details: "Segunda parte de la historia con más giros impactantes y arte mejorado.",
    publication: "20 de septiembre, 2024",
    specs: "320 páginas | 150×210×20mm",
    isbn: "9788931477061"
  },
  { 
    id: 3, 
    image: "/imagenes/tomo_3.png", 
    title: "Operation True Love - Tomo 3", 
    summary: "Sujeong se encuentra en medio de un dilema emocional. Entre recuerdos dolorosos y nuevas oportunidades, debe decidir si seguirá el camino que el destino le impone o si tomará las riendas de su propia historia de amor.",
    details: "Última entrega de la serie, con un desenlace emocionante y contenido extra.",
    publication: "20 de septiembre, 2024",
    specs: "320 páginas | 150×210×20mm",
    isbn: "9788931477078"
  }
];
const tomos = [
  { id: 1, src: "/imagenes/tomo1_sin.png", alt: "Tomo 1" },
  { id: 2, src: "/imagenes/tomo2_sin.png", alt: "Tomo 2" },
  { id: 3, src: "/imagenes/tomo3_sin.png", alt: "Tomo 3" },
];
const faqs = [
  {
    id: 1,
    question: "¿Qué hace especial a 'Operation True Love' en comparación con otras historias de romance?",
    answer: "Esta historia se destaca por su narrativa profunda, ilustraciones detalladas y giros inesperados que mantienen a los lectores enganchados.",
  },
  {
    id: 2,
    question: "¿Los tomos incluyen contenido exclusivo o extra?",
    answer: "Sí, algunos tomos tienen ilustraciones inéditas, escenas extendidas y notas del autor.",
  },
  {
    id: 3,
    question: "¿Cada cuánto tiempo se lanzan nuevos tomos?",
    answer: "Los lanzamientos varían, pero generalmente cada 6 meses se publica un nuevo tomo.",
  },
  {
    id: 4,
    question: "¿Puedo leer un adelanto antes de comprarlo?",
    answer: "Sí, puedes encontrar una vista previa gratuita en nuestra página oficial.",
  },
  {
    id: 5,
    question: "¿Es una historia autoconclusiva o tendrá continuaciones?",
    answer: "Actualmente la historia principal está cerrada, pero hay planes para spin-offs y contenido adicional.",
  },
];
export default function LandingPage() {
  const [currentBook, setCurrentBook] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({

    triggerOnce: true,
    threshold: 0.2,
  });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenIndex((prevIndex) => (prevIndex === id ? null : id));
  };
  
  const nextBook = () => {
    setIsPaused(true); // Pausa el carrusel
    setCurrentBook((prev) => (prev + 1) % books.length);
  
    setTimeout(() => {
      setIsPaused(false); // Lo reanuda después de 5 segundos
    }, 5000);
  };
  
  const prevBook = () => {
    setIsPaused(true); // Pausa el carrusel
    setCurrentBook((prev) => (prev - 1 + books.length) % books.length);
  
    setTimeout(() => {
      setIsPaused(false); // Lo reanuda después de 5 segundos
    }, 5000);
  };
  useEffect(() => {
    setVisible(true);
    if (isPaused) return;
  
    const interval = setInterval(() => {
      setCurrentBook((prev) => (prev + 1) % books.length);
    }, 7000); // Espera 7 segundos antes de cambiar
  
    return () => clearInterval(interval);
  }, [currentBook, isPaused]);
  

  return (
<div>
  <div className="relative min-h-screen flex flex-col">
    {/* Fondo con blur */}
    <div className="absolute inset-0 -z-10">
      <Image 
        src="/imagenes/portada.jpg" 
        alt="Fondo" 
        layout="fill" 
        objectFit="cover" 
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
    </div>

    {/* Navbar */}
    <nav className="relative z-10 flex justify-between items-center p-6 max-w-6xl mx-auto text-white">
      <h2 className="text-2xl font-bold">Operación Verdadero Amor - Temporada 2</h2>
      <div className="space-x-6">
        <a href="#books" className="hover:text-yellow-400">Detalles</a>
        <a href="#features" className="hover:text-yellow-400">Características</a>
        <a href="#reviews" className="hover:text-yellow-400">Reseñas</a>
        <a href="#buy" className="hover:text-yellow-400">Comprar</a>
      </div>
    </nav>

    {/* Contenido principal */}
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen max-w-6xl mx-auto p-6 text-white">
      {/* Sección de texto */}
      <div className="md:w-1/2 text-center md:text-left md:pr-10">
        <h1 className="text-5xl font-bold leading-tight">Operación Verdadero Amor - Segunda Temporada</h1>
        <h2 className="mt-2 text-2xl text-pink-300 font-semibold">Una historia llena de nuevas emociones</h2>
        <p className="mt-4 text-lg">
          La segunda temporada de este emocionante manhwa ya está disponible. Sumérgete en una historia de amor, secretos y decisiones difíciles.
        </p>
        <ul className="mt-4 space-y-2 text-lg">
          <li className="flex items-center gap-2">
            <CheckCircle className="text-yellow-300 w-6 h-6" /> Ilustraciones mejoradas y vibrantes.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-yellow-300 w-6 h-6" /> Más giros inesperados y desarrollo de personajes.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-yellow-300 w-6 h-6" /> Disponible en formato digital.
          </li>
        </ul>
        <p className="mt-6 italic text-gray-200">⭐⭐⭐⭐⭐ “Una historia aún más intensa y atrapante.”</p>
        <div className="mt-6 flex gap-4">
          <Button className="bg-yellow-400 text-black text-lg py-3 px-6 rounded-lg flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" /> Comprar ahora
          </Button>
          <Button className="border border-white text-white text-lg py-3 px-6 rounded-lg flex items-center gap-2">
            <Info className="w-5 h-5" /> Más información
          </Button>
        </div>
      </div>
      
      {/* Sección de ilustraciones */}
      <div className="relative h-[700px] w-[400px] mt-10 md:mt-0 flex items-center justify-center md:ml-50">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          <img
            src="/imagenes/portadalibro.jpg" 
            alt="Portada Temporada 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  </div>



      
  <section className="py-16 bg-white text-center" id="details">
      <h2 className="text-3xl font-semibold mb-8">Características de la Temporada 2</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Característica 1 */}
        <div className="p-6 border rounded-lg shadow-md bg-gray-50">
          <img
            src="/imagenes/imagen1.jpeg"
            alt="Ilustración exclusiva"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">Contenido Exclusivo</h3>
          <p className="text-gray-600">
            Capítulos exclusivos solo disponibles para los primeros compradores de la temporada 2.
          </p>
        </div>

        {/* Característica 2 */}
        <div className="p-6 border rounded-lg shadow-md bg-gray-50">
          <img
            src="/imagenes/imagen2.jpg"
            alt="Ilustración inédita"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">Ilustraciones Inéditas</h3>
          <p className="text-gray-600">
            Disfruta de ilustraciones originales y nunca antes vistas que complementan la historia.
          </p>
        </div>

        {/* Característica 3 */}
        <div className="p-6 border rounded-lg shadow-md bg-gray-50">
          <img
            src="/imagenes/imagen3.jpg"
            alt="Acceso anticipado"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">Acceso Anticipado</h3>
          <p className="text-gray-600">
            Obtén acceso anticipado a la temporada completa antes de que se publique oficialmente.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg font-semibold">
          ¡No te pierdas esta increíble temporada! Obtén la temporada 2 ahora y sé parte de la historia.
        </p>
      </div>
    </section>

      <section id="faq" className="py-20 px-6 bg-gradient-to-b from-[#f8c8dc] to-[#f6a5c0] text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#F22987] mb-12">Preguntas Frecuentes</h2>

        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4">
            <button
              onClick={() => toggleFAQ(faq.id)}
              className={`w-full flex justify-between items-center text-left text-lg font-semibold bg-white shadow-lg rounded-lg px-6 py-4 transition-all duration-300 border-2 ${
                openIndex === faq.id ? "border-[#F22987]" : "border-transparent"
              }`}
            >
              <span>{faq.question}</span>
              {openIndex === faq.id ? (
                <ChevronUp className="text-[#F22987] w-6 h-6" />
              ) : (
                <ChevronDown className="text-[#F22987] w-6 h-6" />
              )}
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === faq.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {openIndex === faq.id && (
                <div className="bg-white rounded-lg px-6 py-4 mt-2 shadow-inner text-gray-700">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>

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
            <p className="text-gray-600 mb-4">Mostrando las reseñas más relevantes</p>
            
            {/* Resumen de valoraciones */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md mb-8 text-left"
            >
              <h3 className="text-3xl font-bold text-gray-800">4.4</h3>
              <p className="text-yellow-500 text-2xl">⭐⭐⭐⭐☆</p>
              <p className="text-gray-600">Todo desde compras verificadas</p>
              <div className="mt-4 space-y-2">
                {[5, 4, 3, 2, 1].map((stars, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="text-gray-800 w-20">{stars} Estrellas</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5 ml-2">
                      <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${stars * 20}%` }}></div>
                    </div>
                    <span className="text-gray-600 ml-2">{stars * 50}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
              }].map((review, index) => {
                const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
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
                );
              })}
            </div>
          </div>
        </section>
    </div>
  );
}