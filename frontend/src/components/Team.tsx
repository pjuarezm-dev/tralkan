
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import millapan from "@/assets/perfiles/millapan.webp";
import moraga from "@/assets/perfiles/moraga.webp";
import munoz from "@/assets/perfiles/munoz.webp";

const Team = () => {
  const teamMembers = [
    {
      name: "Javier Millapán", 
      bio: "Javier Millapán Obando es profesor de educación general básica, investigador y recopilador de leyendas de la zona centro-sur de Chile. Creador de Hualve Literatura, una plataforma dedicada a la divulgación del patrimonio oral, la historia de Chile y la literatura vinculada a la cultura mapuche. En el proyecto Tralkán, se encargó de recopilar y narrar las historias que dan vida a este universo, aportando su conocimiento y pasión por las tradiciones orales.",
      image: millapan,
      socialLinks: {
        instagram: "hualve_literatura" 
      }
    },
    {
      name: "Víctor Moraga", 
      bio: "Víctor Moraga es arquitecto titulado en 2020 e ilustrador autodidacta, cuya obra refleja su fascinación por las artes gráficas y la memoria colectiva. Con interés en el patrimonio cultural y natural, explora su influencia en la identidad. Nacido en Doñihue, su entorno rural inspira su trabajo, complementado por su paso por Santiago. A través de su arte, busca conectar pasado y presente, invitando a reflexionar sobre el territorio y la memoria.",
      image: moraga,
      socialLinks: { 
        instagram: "zurdaka.art"
      }
    },
    {
      name: "David Muñoz", 
      bio: "David Muñoz Guzmán, alias Fingolin, es dibujante e ilustrador freelance. Veterinario de profesión y padre a tiempo completo, nunca abandonó su pasión por crear y dibujar. Su vínculo con la fantasía y la ciencia ficción lo llevó a explorar la mitología y el folclore en su obra. En \"Tralkán, Susurros de la Ñukemapu\", aporta su visión artística para dar vida a la cosmovisión Mapuche, fusionando tradición y cómic en un relato visual único.",
      image: munoz,
      socialLinks: { 
        instagram: "fingolin_ee" 
      }
    },
  ];

  return (
    <section id="equipo" className="relative py-20 bg-white overflow-hidden">      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-trajan text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-6">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a las personas apasionadas que dan vida a cada relato visual.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="group text-center bg-white p-2 transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <Avatar className="w-32 h-32 mx-auto group-hover:scale-110 transition-transform duration-300 border-4 border-blue-100">
                  <AvatarImage 
                    src={member.image} 
                    alt={`${member.name}`}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <h3 className="font-trajan text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {member.name}
              </h3> 
              
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-6">
                {member.bio}
              </p>
              
              <div className="flex justify-center">  
                   <a
                    href={`https://www.instagram.com/${member.socialLinks.instagram}/`}
                    target="_blank"
                    className="flex flex-col items-center text-gray-700 hover:text-pink-600 transition-all duration-300 hover:scale-110"
                    rel="noopener noreferrer"
                    title={`Ver Instagram de ${member.name}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    <span className="text-lg">{member.socialLinks.instagram}</span>
                </a> 
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Organic mountain silhouette transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 -mb-1 z-30">
        <svg viewBox="0 0 1200 120" className="w-full h-full fill-black" preserveAspectRatio="none">
          <path d="M0,120 C25,120 45,80 80,75 C115,70 150,90 190,85 C230,80 260,60 300,65 C340,70 370,85 410,80 C450,75 480,95 520,90 C560,85 590,70 630,75 C670,80 700,95 740,90 C780,85 810,65 850,70 C890,75 920,90 960,85 C1000,80 1030,95 1070,90 C1110,85 1140,70 1170,75 C1185,78 1200,85 1200,90 L1200,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Team;
