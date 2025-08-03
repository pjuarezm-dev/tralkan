import TralkanLogo from "/src/assets/tralkan-logo.png";
import MinCap from "/src/assets/mincap-footer.svg";

const Footer = () => {
  return ( 

    <footer className="bg-black text-white py-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
    {/* Logo izquierda */}
    <div className="flex-shrink-0">
      <img src={TralkanLogo} alt="Tralkán Logo" className="h-12" />
    </div>

    {/* Texto centro */}
    <p className="text-sm text-center  leading-snug">
      Tralkán Cómic - Susurros de la ÑukeMapu, Una historia de tradición y cultura mapuche. <br/>Proyecto financiado por el Fondo de Cultura del Ministerio de las Culturas, las Artes y el Patrimonio.
    </p>

    {/* Logo derecha */}
    <div className="flex-shrink-0">
      <img src={MinCap} alt="Ministerio de las Culturas, las Artes y el Patrimonio" className="h-12" />
    </div>
  </div>
</footer>

  );
};

export default Footer;
