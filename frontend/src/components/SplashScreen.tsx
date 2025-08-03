import { useEffect, useState } from "react";
import gunelve from "/src/assets/gunelve.svg";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-gradient-to-br from-stone-900 via-blue-800 to-stone-900 
        flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Decorative elements */}
      <div className="text-center space-y-8">
        <div className="animate-scale-in">
          <div className="opacity-50"> 
            <img src={gunelve} className="w-20 h-20  mx-auto"></img> 
          </div> 
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl text-white animate-fade-in">
            Tralkán
          </h1> 
        </div>
        
        <div className="flex justify-center animate-fade-in animation-delay-500">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;