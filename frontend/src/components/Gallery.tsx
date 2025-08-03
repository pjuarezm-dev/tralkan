import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import I01 from "/src/assets/galeria/20240604_111014.webp";
import I02 from "/src/assets/galeria/20240604_111036.webp";
import I03 from "/src/assets/galeria/20240604_111049.webp";
import I04 from "/src/assets/galeria/20240604_111101.webp";
import I05 from "/src/assets/galeria/20240604_111158.webp";
import I06 from "/src/assets/galeria/20240605_174551.webp";
import I07 from "/src/assets/galeria/Diseno_abuela.webp";
import I08 from "/src/assets/galeria/Diseno_abuelo.webp";
import I09 from "/src/assets/galeria/Estudio_rostros_01.webp";
import I10 from "/src/assets/galeria/Estudio_rostros_02.webp";
import I11 from "/src/assets/galeria/planificacion_machi_03.webp";
import I12 from "/src/assets/galeria/Planificacion_machi.webp";
import I13 from "/src/assets/galeria/Planificacion_portada.webp";
import I14 from "/src/assets/galeria/Planificacion_wekufe01.webp";
import I15 from "/src/assets/galeria/Planificacion_wekufe02.webp"


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const images = [I01,I02,I03,I04,I05,I06,I07,I08,I09,I10,I11,I12,I13,I14,I15];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="galeria" className="relative py-20 bg-gray-50 overflow-hidden">      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-trajan text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6">
            Proceso de Trabajo
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestro archivo visual y descubre el trabajo detrás de cada relato.
          </p>
        </div>
        
        {/* Desktop Gallery Grid - hidden on mobile */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                  Ver imagen
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - visible only on mobile */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5">
                  <div 
                    className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                        Ver imagen
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300 z-10"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={48} />
          </button>
          
          <img
            src={images[selectedImage]}
            alt={`Gallery image ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain animate-scale-in"
          />
        </div>
      )}
      
      {/* Organic mountain silhouette transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 -mb-1 z-30">
        <svg viewBox="0 0 1200 120" className="w-full h-full fill-white" preserveAspectRatio="none">
          <path d="M0,120 C30,120 50,85 85,80 C120,75 155,95 195,90 C235,85 265,65 305,70 C345,75 375,90 415,85 C455,80 485,60 525,65 C565,70 595,85 635,80 C675,75 705,95 745,90 C785,85 815,70 855,75 C895,80 925,95 965,90 C1005,85 1035,65 1075,70 C1115,75 1145,90 1175,85 C1190,82 1200,88 1200,92 L1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Gallery;
