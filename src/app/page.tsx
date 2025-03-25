"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const books = [
  { id: 1, image: "/images/tomo_1.png", title: "Operation True Love - Tomo 1" },
  { id: 2, image: "/images/tomo_2.png", title: "Operation True Love - Tomo 2" },
  { id: 3, image: "/images/tomo_3.png", title: "Operation True Love - Tomo 3" },
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-400 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mt-10">Operation True Love</h1>
      <p className="text-lg mt-2">Los tomos digitales están disponibles ahora.</p>
      <motion.div
        key={books[currentBook].id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative w-64 h-96 mt-10"
      >
        <Image
          src={books[currentBook].image}
          alt={books[currentBook].title}
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
      <Button className="mt-6 bg-yellow-400 text-black text-lg py-2 px-6 rounded-lg">
        Comprar ahora
      </Button>
    </div>
  );
}

