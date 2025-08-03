
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCaptcha = (token: string | null) => {
      setCaptchaToken(token);
    };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try { 
      // @ts-ignore: grecaptcha está en el scope global
      const token = await window.grecaptcha.execute('6LcY0ZgrAAAAAAIa6qvsHGqB-AdLRkzQLuKRG3R4', { action: 'submit' });

      const dataToSend = {
        ...formData,
        token,
      };

      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await fetch(`${apiUrl}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const result = await res.json(); 
      setResponseMessage(result.message || 'Gracias por tu mensaje 🙂');
    } catch (error) {
      setResponseMessage("Hubo un problema al enviar el mensaje.");
    }

    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contacto" className="relative py-20 bg-black overflow-hidden">      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-trajan text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Contáctanos
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Introduction Text */}
          <div className="animate-fade-in animation-delay-300">
            <p className="text-lg sm:text-xl text-yellow-400 mb-4">
              ¡Atención, amantes de la mitología y los cómics!
            </p>
            <p className="text-lg text-white">
              🌿 <span className="font-semibold">Tralkán, susurros de la Ñukemapu</span> 🌿 te llevará a un viaje épico por las leyendas mapuches.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-fade-in animation-delay-500">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-md  text-white mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-black"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-md  text-white mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-black"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-md  text-white mb-2">
                Comentario o mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-black"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send size={20} />
                  <span>Enviar</span>
                </>
              )}
            </button> 

            {responseMessage && (
              <p className="text-lg text-white mt-4">{responseMessage}</p>
            )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
