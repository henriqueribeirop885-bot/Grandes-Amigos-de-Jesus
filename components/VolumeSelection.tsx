
import React, { useEffect } from 'react';
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react';

interface VolumeSelectionProps {
  onBack: () => void;
}

const VolumeSelection: React.FC<VolumeSelectionProps> = ({ onBack }) => {
  // Rola para o topo da página assim que o componente é montado
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const volumes = [
    {
      id: 1,
      title: "O Azul da Esperança",
      subtitle: "Volume 1",
      color: "text-brand-blue",
      bgColor: "bg-brand-blue",
      borderColor: "border-brand-blue",
      // Mesmo link usado no Hero
      image: "https://lh3.googleusercontent.com/d/1C_AoqXNdZXJgRU3JcTz1i7kQlfx8tCFg",
      desc: "Ensina sobre confiar em Deus e manter a calma em momentos difíceis.",
      link: "https://go.hotmart.com/U103191555L" // Link adicionado conforme solicitado
    },
    {
      id: 2,
      title: "O Abraço do Perdão",
      subtitle: "Volume 2",
      color: "text-brand-purple",
      bgColor: "bg-brand-purple",
      borderColor: "border-brand-purple",
      // Mesmo link usado no Hero
      image: "https://lh3.googleusercontent.com/d/1Pfx01vehIzuZCLdaZuP2t2qDOtKQEfRF",
      desc: "Histórias emocionantes sobre amizade, reconciliação e o amor que une.",
      link: "https://go.hotmart.com/A103194109D" // Link adicionado para o Volume 2
    },
    {
      id: 3,
      title: "A Semente Gigante",
      subtitle: "Volume 3",
      color: "text-brand-green",
      bgColor: "bg-brand-green",
      borderColor: "border-brand-green",
      // Mesmo link usado no Hero
      image: "https://lh3.googleusercontent.com/d/1Jgks_oBR5c-W33kYd55BxQndU6X8Z5Iz",
      desc: "Lições sobre fé, crescimento espiritual e pequenos gestos que mudam o mundo.",
      link: "https://go.hotmart.com/S103194933T" // Link adicionado para o Volume 3
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://placehold.co/600x800/f1f5f9/64748b?text=Capa+Indisponivel";
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        
        {/* Header de Navegação */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-600 hover:text-brand-blue font-bold mb-6 transition-colors text-sm"
        >
          <div className="bg-white p-1.5 rounded-full shadow-sm group-hover:shadow-md border border-slate-200">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Voltar para a página principal
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            Escolha seu volume preferido
          </h2>
          <p className="text-slate-600 text-sm">
            Cada livro contém histórias únicas e ensinamentos valiosos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {volumes.map((vol) => (
            <div key={vol.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 flex flex-col">
              
              {/* Imagem - Altura controlada para ser mais compacto */}
              <div className="relative h-56 bg-slate-50 overflow-hidden border-b border-slate-100">
                <img 
                  src={vol.image} 
                  onError={handleImageError}
                  alt={`Capa ${vol.title}`}
                  className="w-full h-full object-contain p-2"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-3 left-3 ${vol.bgColor} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide`}>
                  {vol.subtitle}
                </div>
              </div>

              {/* Conteúdo - Padding reduzido */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className={`text-lg font-bold ${vol.color} mb-1 leading-tight`}>{vol.title}</h3>
                <p className="text-slate-600 text-xs mb-4 flex-1 leading-relaxed">
                  {vol.desc}
                </p>
                
                <div className="border-t border-slate-100 pt-3 mb-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Check className="w-3 h-3 text-brand-green" />
                    <span>Arquivo PDF Alta Qualidade</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Check className="w-3 h-3 text-brand-green" />
                    <span>+20 Páginas de Conteúdo</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Check className="w-3 h-3 text-brand-green" />
                    <span>Entrega Imediata no E-mail</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 line-through">R$ 45,00</span>
                    <span className="text-xl font-extrabold text-slate-900">R$ 30,00</span>
                  </div>
                </div>

                <a 
                  href={vol.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 px-4 rounded-lg font-bold text-white text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 ${vol.bgColor} hover:opacity-90 no-underline`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Comprar Agora
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-xl mx-auto">
          <p className="text-slate-600 text-sm mb-3">
            Quer economizar e levar todos os volumes?
          </p>
          <button 
            onClick={onBack}
            className="text-brand-blue font-bold hover:underline text-sm"
          >
            Voltar e ver a oferta do Combo Completo (3 livros por R$ 50)
          </button>
        </div>

      </div>
    </div>
  );
};

export default VolumeSelection;
