import tralkanIllustration from "@/assets/tralkan-illustration.webp";
import Chemamul from "@/assets/ChemamulB.png";
import { Link } from "react-router-dom";
import Gunelve from "/src/assets/gunelve.svg";

const Story = () => {
  return (
    <section id="relatos" className="relative py-20 bg-gradient-to-b from-blue-600 to-blue-800 overflow-hidden">      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-center"> 
          <div className="flex items-start gap-6 lg:col-span-3">
            {/* Pilar Chemamul */}
            <div className="shrink-0 hidden md:block"> 
              <img 
                src={Chemamul} 
                alt="Ilustración de Chemamul"
                className="h-100 w-auto object-contain"  
              />
            </div>

            {/* Texto */}
            <div className="text-white space-y-6 animate-fade-in">
              <h2 className="font-trajan text-3xl sm:text-4xl md:text-5xl leading-tight">
                Descubre la historia de <span className="block">Tralkán</span>
              </h2>
    
              <div className="space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                En lo más profundo del Wallmapu, Tralkán da vida a las historias de 
                Nawel, un joven que descubre la sabiduría de sus ancestros.
              </p>
              <p>
                Entre mitos y tradiciones, su camino estará marcado por la conexión 
                con los espíritus y la naturaleza.
              </p>
            </div>

            <Link 
              to="/conoce-a-tralkan" 
              className="inline-flex items-center gap-3 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">              
              <img src={Gunelve} className="w-7 h-7 fill-current" />
              Conoce a Tralkán
            </Link>
          </div>
        </div>

          {/* Ilustración */}
          <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div>
              <img 
                src={tralkanIllustration} 
                alt="Ilustración de Tralkán"
                className="w-2/3 sm:w-1/2 md:w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Organic mountain silhouette transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 -mb-1 z-30">
        <svg viewBox="0 0 1200 120" className="w-full h-full fill-gray-50" preserveAspectRatio="none">
          <path d="M0,120 C20,120 40,90 70,85 C100,80 130,95 170,90 C210,85 240,70 280,75 C320,80 350,95 390,90 C430,85 460,65 500,70 C540,75 570,90 610,85 C650,80 680,60 720,65 C760,70 790,85 830,80 C870,75 900,90 940,85 C980,80 1010,95 1050,90 C1090,85 1120,70 1150,75 C1180,80 1200,90 1200,95 L1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Story;
