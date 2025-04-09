import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X } from "lucide-react";

declare global {
  interface Window {
    MercadoPago: any;
  }
}

const PaymentModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const publicKey = "TEST-e0d73612-9fe7-471f-88b0-0543dff0f78c"; // Tu public key de test
  const amount = 10.00; // Cambia esto al precio real del libro

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.async = true;

      script.onload = async () => {
        const mp = new window.MercadoPago(publicKey, { locale: "es-PE" });
        const bricksBuilder = mp.bricks();

        bricksBuilder.create("payment", "mp-payment-brick", {
          initialization: {
            amount: amount,
          },
          customization: {
            paymentMethods: {
              ticket: "all",
              bankTransfer: "all",
              creditCard: "all",
            },
          },
          callbacks: {
            onReady: () => {
              console.log("Brick listo");
            },
            onSubmit: (data: any) => {
              console.log("Datos enviados:", data);
              // Aquí deberías enviar los datos al backend si tienes uno
            },
            onError: (error: any) => {
              console.error("Error:", error);
            },
          },
        });
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        const brick = document.getElementById("mp-payment-brick");
        if (brick) brick.innerHTML = ""; // Limpieza del brick
      };
    }
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    const myWhatsAppNumber = "964157256";
    const whatsappLink = `https://wa.me/${myWhatsAppNumber}?text=Hola! deseo comprar la Segunda temporada de *Operación verdadero amor*.`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-6 w-[90vw] max-w-[600px] max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-black">Realizar Pago</h2>
              <button onClick={onClose} className="text-gray-500">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-6 flex gap-4">
              <Button
                className="bg-green-500 text-white py-3 px-6 rounded-lg flex items-center gap-2 w-full"
                onClick={handleWhatsAppClick}
              >
                Comprar en WhatsApp
              </Button>
            </div>

            {/* Contenedor del Brick de Mercado Pago */}
            <div className="mt-4">
              <div id="mp-payment-brick" className="w-full"></div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PaymentModal;
