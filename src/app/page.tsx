"use client";

import { useState, useEffect, useRef  } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Info, CheckCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronUp, ChevronDown } from "lucide-react";
import PaymentModal from "@/components/ui/modal"; // Asegúrate de que el archivo esté en la ruta correcta.

const faqs = [
  {
    id: 1,
    question: "¿Qué hace especial la segunda temporada de 'Operation True Love'?",
    answer: "La segunda temporada profundiza más en los personajes y presenta giros inesperados que mantendrán a los fans cautivados.",
  },
  {
    id: 2,
    question: "¿La segunda temporada está disponible solo en formato digital?",
    answer: "Sí, la segunda temporada de 'Operation True Love' está disponible exclusivamente en formato digital.",
  },
  {
    id: 3,
    question: "¿Puedo acceder a un adelanto de la segunda temporada antes de comprarla?",
    answer: "Sí, puedes encontrar un adelanto gratuito en nuestra página oficial antes de realizar tu compra.",
  },
  {
    id: 4,
    question: "¿Habrá más temporadas o contenido adicional después de esta?",
    answer: "Estamos considerando posibles continuaciones y contenido adicional, pero por el momento nos enfocamos en esta temporada.",
  },
  {
    id: 5,
    question: "¿Puedo ver la segunda temporada en varios dispositivos?",
    answer: "Sí, el contenido digital está disponible para ver en múltiples dispositivos compatibles.",
  },
];
<script src="https://www.paypal.com/sdk/js?client-id=Acybs4rYD_3aWC989hf1IHFXNW6BOaW46PpFMoE3FGYXx38iBn4VuvJxjwLmnSLWRIMBkxcFZ8Pc9zf_&components=buttons"></script>

export default function LandingPage() {
  const [currentBook, setCurrentBook] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({

    triggerOnce: true,
    threshold: 0.2,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (id: number) => {
    setOpenIndex((prevIndex) => (prevIndex === id ? null : id));
  };
  
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
    <h2 className="text-2xl font-bold ml-[-1px]">Operación Verdadero Amor - Temporada 2</h2>
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
    
    {/* Precio de la temporada */}
    <p className="mt-6 text-3xl font-semibold text-yellow-300">S/ 80.00</p>

    <div className="mt-6 flex gap-4">
      <Button onClick={openModal} className="bg-yellow-400 text-black py-3 px-6 rounded-lg">
        Comprar Ahora
      </Button>

      <Button className="border border-white text-white text-lg py-3 px-6 rounded-lg flex items-center gap-2">
        <Info className="w-5 h-5" /> Más información
      </Button>
    </div>
  {/* Modal de pago */}
  <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
</div>


      
      {/* Sección de ilustraciones */}
      <div className="relative h-[700px] w-[400px] mt-90 md:mt-0 flex items-center justify-center md:ml-50">
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

    {/* Característica 4 */}
    <div className="p-6 border rounded-lg shadow-md bg-gray-50">
      <img
        src="/imagenes/imagen2.jpeg"
        alt="Edición digital"
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">Edición Digital</h3>
      <p className="text-gray-600">
        Disfruta de la temporada 2 en formato digital para que la puedas leer en cualquier lugar.
      </p>
    </div>

    {/* Característica 5 */}
    <div className="p-6 border rounded-lg shadow-md bg-gray-50">
      <img
        src="/imagenes/imagen4.jpeg"
        alt="Material complementario"
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">Material Complementario</h3>
      <p className="text-gray-600">
        Accede a material exclusivo, como arte conceptual y entrevistas con los creadores.
      </p>
    </div>

    {/* Característica 6 */}
    <div className="p-6 border rounded-lg shadow-md bg-gray-50">
      <img
        src="/imagenes/portada.jpg"
        alt="Optimización para dispositivos"
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">Optimización para Dispositivos</h3>
      <p className="text-gray-600">
        La temporada 2 está optimizada para que la disfrutes en cualquier dispositivo, desde móvil hasta PC.
      </p>
    </div>
  </div>

  <div className="mt-8">
    <p className="text-lg font-semibold">
      ¡No te pierdas esta increíble temporada! Obtén la temporada 2 ahora y sé parte de la historia.
    </p>
  </div>
</section>



    <section id="conoce-autores" className="py-20 px-6 relative text-white">
  <div className="absolute inset-0 bg-cover bg-center bg-opacity-50" style={{ backgroundImage: "url('/imagenes/fondoo.gif')" }}></div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#F22987] mb-12">Conoce a los Autores</h2>
    
    <div className="flex flex-col md:flex-row gap-12 justify-center">
      {/* Información de Lee Na-Na */}
      <div className="flex flex-col items-center bg-gradient-to-r from-[#fbc0d5] to-[#f8a2c4] p-8 rounded-2xl shadow-xl bg-opacity-90 w-full md:w-1/2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-[#F22987] border-4 border-transparent hover:bg-gradient-to-l">
        <h3 className="text-3xl font-semibold text-[#F22987] mb-4">Lee Na-Na</h3>
        
        <p className="text-lg text-gray-800 mb-4 text-center">
          Lee Na-Na es una escritora surcoreana destacada en el género del manhwa romántico y dramático. Con un estilo único, ha creado historias profundas que exploran emociones complejas en las relaciones humanas.
        </p>
        <p className="text-lg text-gray-800 text-center">
          Aclamada por su habilidad para transmitir la vulnerabilidad de los personajes, su obra más conocida, *Operation True Love*, ha ganado el corazón de miles de lectores.
        </p>
      </div>

      {/* Información de Han Seung-Ryung */}
      <div className="flex flex-col items-center bg-gradient-to-r from-[#fbc0d5] to-[#f8a2c4] p-8 rounded-2xl shadow-xl bg-opacity-90 w-full md:w-1/2 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-[#F22987] border-4 border-transparent hover:bg-gradient-to-l">
        <h3 className="text-3xl font-semibold text-[#F22987] mb-4">Han Seung-Ryung</h3>
        
        <p className="text-lg text-gray-800 mb-4 text-center">
          Han Seung-Ryung es un ilustrador surcoreano conocido por su estilo detallado y su capacidad para capturar las emociones a través de sus dibujos. Su trabajo en *Operation True Love* ha sido clave para dar vida a los personajes y la atmósfera de la historia.
        </p>
        <p className="text-lg text-gray-800 text-center">
          Con su estilo expresivo, ha logrado crear escenas que reflejan tanto momentos románticos como dramáticos, enriqueciendo la narrativa visualmente.
        </p>
      </div>
    </div>

    <p className="text-lg text-gray-800 mt-8 max-w-3xl mx-auto text-center">
      Juntos, Lee Na-Na y Han Seung-Ryung han creado una obra que ha capturado la atención global, y su colaboración sigue siendo un referente en el mundo del manhwa.
    </p>
  </div>
</section>

      <section id="garantia" className="py-20 px-6 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#F22987] mb-8">Garantía de Satisfacción</h2>
          <div className="bg-transparent p-8">
            <p className="text-lg text-gray-700 mb-6">
              ¡Estamos completamente seguros de que te encantará nuestro libro digital! Si por cualquier razón no estás satisfecho con tu compra, ofrecemos una garantía de devolución de 30 días. 
              Sin preguntas, sin complicaciones. Si no quedas feliz con tu compra, solo tienes que contactarnos y procesaremos la devolución de tu dinero.
            </p>
            <p className="text-lg text-gray-700">
             Nuestro objetivo es brindarte la mejor experiencia de lectura. Si tienes alguna pregunta sobre el producto o la política de devolución, no dudes en contactarnos. 
              ¡Tu satisfacción es nuestra prioridad!
            </p>
          </div>
        </div>
      </section>


      <section id="reviews" className="bg-[#FCE4EC] py-20 px-6 text-gray-800">
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
            <h3 className="text-3xl font-bold text-gray-800">4.7</h3>
            <p className="text-yellow-500 text-2xl">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600">Basado en descargas verificadas</p>
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
                  <span className="text-gray-600 ml-2">{stars * 30}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Mariana R.",
                date: "24/1/2025",
                rating: 5,
                review: "La descarga fue súper rápida y el formato digital es excelente. ¡Muy recomendado!",
                image: "/imagenes/chica1.jpg"
              },
              {
                name: "Sofía G.",
                date: "2/1/2025",
                rating: 4,
                review: "Buena calidad, lo ame!.",
                image: "/imagenes/chica3.jpg"
              },
              {
                name: "Carlos P.",
                date: "7/12/2024",
                rating: 5,
                review: "Me encanta la historia y la presentación en digital. Fácil de leer y con una interfaz muy cómoda.",
                image: "/imagenes/chico2.jpg"
              },
              {
                name: "Andrea M.",
                date: "15/2/2025",
                rating: 5,
                review: "Todo genial. La descarga fue instantánea y el manhwa se ve increíble en mi tablet.",
                image: "/imagenes/chica4.jpg"
              }
            ].map((review, index) => {
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
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-white text-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#F22987] mb-12">Preguntas Frecuentes</h2>

    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="bg-white rounded-lg shadow-lg">
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full text-left flex justify-between items-center p-6 bg-[#f28bb3] text-white font-semibold rounded-lg"
          >
            <span>{faq.question}</span>
            {openIndex === faq.id ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={openIndex === faq.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {openIndex === faq.id && (
              <div className="p-6 text-gray-700 bg-[#f9f9f9] rounded-b-lg">
                {faq.answer}
              </div>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>


      <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Sección de enlaces principales */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces principales</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Comprar ahora</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Términos y condiciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Política de privacidad</a></li>
            </ul>
          </div>

          {/* Sección de redes sociales */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i> {/* Icono de Facebook */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i> {/* Icono de Twitter */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i> {/* Icono de Instagram */}
              </a>
            </div>
          </div>

          {/* Sección de contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <p className="text-gray-400">Correo: contacto@operationtruelove.com</p>
            <p className="text-gray-400">Teléfono: +51 964 157 256</p>
          </div>

          {/* Sección de suscripción */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suscríbete</h3>
            <p className="text-gray-400 mb-4">Recibe las últimas noticias y actualizaciones.</p>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="bg-gray-800 text-white py-2 px-4 mb-4 w-full border border-gray-600 rounded-md"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md w-full">
              Suscribirse
            </button>
          </div>

        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-600 mt-8">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} *Operation True Love* | Todos los derechos reservados.
        </p>
      </div>
    </footer>
    </div>
  );
}
