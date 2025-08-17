import { ArrowLeft, Star, Heart, Book, Users, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useFileExists } from "@/hooks/use-fileexists.tsx";
import { Link } from "react-router-dom";
import { useState } from "react";  
import { storiesData } from "../assets/data/stories.js"; 
import Logo from "/src/assets/logo.png";

const stories  = [...storiesData].sort((a, b) => a.id - b.id);

const ConoceATralkan = () => {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);


  const currentStory = stories.find(story => story.id === selectedStory);

  const nextImage = () => {
    if (currentStory) {
      setCurrentImageIndex((prev) => (prev + 1) % currentStory.images.length);
    }
  };

  const prevImage = () => {
    if (currentStory) {
      setCurrentImageIndex((prev) => (prev - 1 + currentStory.images.length) % currentStory.images.length);
    }
  };

  const closeModal = () => {
    setSelectedStory(null);
    setCurrentImageIndex(0);
    setShowCarousel(false);
  };

  const handleFinishReading = () => {
    setShowCarousel(true);
  }; 

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-10 to-red-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
          
          <div className="flex items-center gap-3"> 
          <img
              src={Logo}
              alt="Tralkán Logo"
              className="h-10 w-auto bg-white"
            /> 
          <h1 className="font-trajan text-2xl font-bold text-gray-900">TRALKÁN</h1>
        </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="font-trajan text-4xl font-bold text-gray-900 mb-4">RELATOS</h2>
            <p className="text-lg text-gray-600">Explora las leyendas ancestrales del mundo mapuche</p>
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story) => (
              <div 
                key={story.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" 
                  style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${story.image})`}}/> 
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-trajan text-2xl font-bold text-white mb-2">{story.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedStory(story.id)}
                      className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                    >
                      Relato
                    </button>  
                     {
                     useFileExists(`/relato/${story.video}.mp4`) && (
                        <a
                          href={`/relato/${story.video}`}
                          target="_blank"
                          className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors">
                          Audiolibro
                        </a>
                     )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedStory && currentStory && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="font-trajan text-2xl font-bold text-gray-900">{currentStory.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 lg:flex max-h-[calc(90vh-120px)]">
              {/* Desktop Layout (lg and up) */}
              <div className="hidden lg:flex gap-8 h-[calc(90vh-120px)]">  
                
                {/* Image Carousel - Left Column */}
                <div className="flex-1 flex flex-col"> 
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <img
                        src={currentStory.images[currentImageIndex]}
                        alt={`${currentStory.title} - Imagen ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="flex justify-center mt-4 gap-2">
                      {currentStory.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                  </div>
                </div> 

                {/* Text Content - Right Column */}
                <div className="flex-1 overflow-y-auto pr-2 h-[calc(80vh-120px)]">
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <div dangerouslySetInnerHTML={{ __html: currentStory.fullText }} />
                  </div> 
                </div>
              </div>

              {/* Mobile Layout (below lg) */}
              <div className="lg:hidden">
                {!showCarousel ? ( 
                  <div className="flex-1 overflow-y-auto pr-2 h-[calc(80vh-120px)]">
                    <div className="prose prose-lg max-w-none mb-6">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line" dangerouslySetInnerHTML={{ __html: currentStory.fullText }}  /> 
                    </div>
                    <div className="text-center">
                      <button
                        onClick={handleFinishReading}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Ver Imágenes
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64 sm:h-80 mb-4">
                      <img
                        src={currentStory.images[currentImageIndex]}
                        alt={`${currentStory.title} - Imagen ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="flex justify-center gap-2 mb-4">
                      {currentStory.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-center">
                      <button
                        onClick={() => setShowCarousel(false)}
                        className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                      >
                        Volver al Texto
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConoceATralkan;