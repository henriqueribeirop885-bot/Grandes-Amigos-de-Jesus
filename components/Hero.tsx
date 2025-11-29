import React, { useState } from 'react';
import Button from './Button';
import { Star, Eye, X, ZoomIn } from 'lucide-react';

const Hero: React.FC = () => {
  // Alterado de booleano para número (1, 2, 3) para saber qual volume está aberto
  const [activePreview, setActivePreview] = useState<number | null>(null);

  // Função inteligente para garantir o carregamento da imagem com múltiplos fallbacks
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const currentSrc = img.src;

    // Se já estiver mostrando o placeholder final, pare para evitar loop.
    if (currentSrc.includes('placehold.co')) return;

    // Tenta extrair o ID do arquivo do Google Drive da URL atual
    let id = '';
    if (currentSrc.includes('/d/')) {
        // Suporta formatos como lh3.googleusercontent.com/d/ID ou drive.google.com/file/d/ID
        id = currentSrc.split('/d/')[1]?.split('?')[0]?.split('/')[0];
    } else if (currentSrc.includes('id=')) {
        // Suporta formato drive.google.com/thumbnail?id=ID
        id = currentSrc.split('id=')[1]?.split('&')[0];
    }

    // Lógica de Fallback: LH3 -> Thumbnail -> Placeholder
    if (id) {
       if (!currentSrc.includes('thumbnail')) {
          // Tentativa 2: Se o link direto falhou (ex: é um PDF), tenta gerar thumbnail
          img.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
       } else {
          // Tentativa 3: Se até o thumbnail falhou, mostra placeholder de erro
          img.src = "https://placehold.co/800x600/f1f5f9/64748b?text=Visualizacao+Indisponivel";
       }
    } else {
       // Se não conseguiu extrair ID
       img.src = "https://placehold.co/800x600/f1f5f9/64748b?text=Erro+na+Imagem";
    }
  };

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dados dos Volumes para o Modal
  const volumes = {
    1: {
      title: "Volume 1: O Azul da Esperança",
      color: "text-brand-blue",
      previewImage: "https://lh3.googleusercontent.com/d/1gBeamClbIaOG3IRAXeKFgsWMA_LQ4oO8",
      link: "https://go.hotmart.com/U103191555L" // Link do Hotmart para o Volume 1
    },
    2: {
      title: "Volume 2: O Abraço do Perdão",
      color: "text-brand-purple",
      previewImage: "https://lh3.googleusercontent.com/d/13m4RKv693X5Ssd3zWWrYeRkIFuWdqVSH",
      link: "https://go.hotmart.com/A103194109D" // Link do Hotmart para o Volume 2
    },
    3: {
      title: "Volume 3: A Semente Gigante",
      color: "text-brand-green",
      previewImage: "https://lh3.googleusercontent.com/d/16u5JgWpbDCbqxHgFOfMNWix1ryonN8mh",
      link: "https://go.hotmart.com/S103194933T" // Link do Hotmart para o Volume 3
    }
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 overflow-hidden bg-brand-blue/10">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-brand-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-brand-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-72 h-72 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-brand-blue/20">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
            ))}
          </div>
          <span className="text-sm font-semibold text-slate-600">Aprovado por +1.200 famílias</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Cansado de Telas? Transforme <span className="text-brand-purple">10 Minutos</span> em <br className="hidden md:block"/>
          <span className="text-brand-blue bg-white/50 px-2 rounded-lg">Fé e Diversão Profunda.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          A coleção de eBooks de colorir que ensina seu filho sobre <span className="font-bold text-slate-800">Jesus, Amor e Humildade</span>, longe dos desenhos vazios e agitados da TV.
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <Button 
            text="Ver Opções de Compra" 
            subtext="Volumes a partir de R$ 30,00"
            variant="primary"
            onClick={scrollToOffer}
          />
          <p className="text-xs text-slate-500 mt-2">
            🔒 Compra 100% Segura • Garantia de 7 dias
          </p>
        </div>

        {/* Hero Image / Mockup - COMPACTADO */}
        <div className="mt-12 relative mx-auto max-w-3xl">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 items-start transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              
              {/* VOLUME 1 - INTERATIVO (Preview) */}
              <div 
                className="group relative bg-white p-1.5 rounded-xl shadow-xl transform md:translate-y-8 flex flex-col cursor-pointer transition-all hover:scale-105 hover:ring-4 hover:ring-brand-blue/50"
                onClick={() => setActivePreview(1)}
              >
                 <div className="relative overflow-hidden rounded-lg">
                   <img 
                    src="https://lh3.googleusercontent.com/d/1C_AoqXNdZXJgRU3JcTz1i7kQlfx8tCFg" 
                    onError={handleImageError}
                    alt="Capa Grandes Amigos de Jesus Volume 1 - O Azul da Esperança" 
                    className="w-full h-auto shadow-sm"
                    referrerPolicy="no-referrer" 
                   />
                   {/* Overlay de Hover */}
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-sm">
                      <Eye className="w-8 h-8 mb-2" />
                      <span className="font-bold text-xs bg-brand-blue px-2 py-1 rounded-full">Ver por dentro</span>
                   </div>
                 </div>
                 <p className="mt-2 font-bold text-brand-blue text-xs md:text-sm flex items-center justify-center gap-1">
                    Vol. 1: O Azul da Esperança
                    <ZoomIn className="w-3 h-3 text-slate-400 group-hover:text-brand-blue" />
                 </p>
              </div>
              
              {/* VOLUME 2 - INTERATIVO (Preview) */}
              <div 
                className="group relative bg-white p-1.5 rounded-xl shadow-2xl z-20 transform md:-translate-y-4 md:scale-105 flex flex-col cursor-pointer transition-all hover:scale-110 hover:ring-4 hover:ring-brand-purple/50"
                onClick={() => setActivePreview(2)}
              >
                 <div className="relative overflow-hidden rounded-lg">
                   <img 
                    src="https://lh3.googleusercontent.com/d/1Pfx01vehIzuZCLdaZuP2t2qDOtKQEfRF" 
                    onError={handleImageError}
                    alt="Capa Grandes Amigos de Jesus Volume 2 - O Abraço do Perdão" 
                    className="rounded-lg w-full h-auto shadow-sm" 
                    referrerPolicy="no-referrer"
                   />
                    {/* Overlay de Hover */}
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-sm">
                      <Eye className="w-8 h-8 mb-2" />
                      <span className="font-bold text-xs bg-brand-purple px-2 py-1 rounded-full">Ver por dentro</span>
                   </div>
                 </div>
                 <p className="mt-2 font-bold text-brand-purple text-xs md:text-sm flex items-center justify-center gap-1">
                    Vol. 2: O Abraço do Perdão
                    <ZoomIn className="w-3 h-3 text-slate-400 group-hover:text-brand-purple" />
                 </p>
              </div>
              
              {/* VOLUME 3 - INTERATIVO (Preview) */}
              <div 
                className="group relative bg-white p-1.5 rounded-xl shadow-xl transform md:translate-y-8 flex flex-col cursor-pointer transition-all hover:scale-105 hover:ring-4 hover:ring-brand-green/50"
                onClick={() => setActivePreview(3)}
              >
                 <div className="relative overflow-hidden rounded-lg">
                   <img 
                    src="https://lh3.googleusercontent.com/d/1Jgks_oBR5c-W33kYd55BxQndU6X8Z5Iz" 
                    onError={handleImageError}
                    alt="Capa Grandes Amigos de Jesus Volume 3 - A Semente Gigante" 
                    className="rounded-lg w-full h-auto shadow-sm"
                    referrerPolicy="no-referrer" 
                   />
                   {/* Overlay de Hover */}
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-sm">
                      <Eye className="w-8 h-8 mb-2" />
                      <span className="font-bold text-xs bg-brand-green px-2 py-1 rounded-full">Ver por dentro</span>
                   </div>
                 </div>
                 <p className="mt-2 font-bold text-brand-green text-xs md:text-sm flex items-center justify-center gap-1">
                    Vol. 3: A Semente Gigante
                    <ZoomIn className="w-3 h-3 text-slate-400 group-hover:text-brand-green" />
                 </p>
              </div>
           </div>
           {/* Shadow effect */}
           <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/20 blur-2xl rounded-full -z-10"></div>
        </div>

      </div>

      {/* MODAL DE PREVIEW */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm" onClick={() => setActivePreview(null)}>
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in" onClick={e => e.stopPropagation()}>
            
            {/* Header do Modal */}
            <div className="sticky top-0 bg-white border-b border-slate-100 p-4 flex justify-between items-center z-10">
              <div>
                <h3 className={`text-lg font-bold ${volumes[activePreview as 1|2|3].color}`}>
                    Espiada Virtual: {volumes[activePreview as 1|2|3].title}
                </h3>
                <p className="text-xs text-slate-500">Veja algumas páginas do livro</p>
              </div>
              <button 
                onClick={() => setActivePreview(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>

            {/* Conteúdo do Modal (Imagem de Preview) */}
            <div className="p-4 bg-slate-50 flex justify-center">
              <img 
                // Usando LH3 como primário, com fallback no onError para Thumbnail
                src={volumes[activePreview as 1|2|3].previewImage}
                onError={handleImageError}
                alt={`Preview das páginas internas do ${volumes[activePreview as 1|2|3].title}`} 
                className="w-full h-auto rounded-lg shadow-sm border border-slate-200"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Footer do Modal */}
            <div className="p-4 border-t border-slate-100 bg-white flex justify-center">
              {volumes[activePreview as 1|2|3].link ? (
                /* Botão Link direto (Volume 1, 2 e 3) */
                <a 
                  href={volumes[activePreview as 1|2|3].link!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green hover:bg-green-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-green-500/20 transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  Gostei! Quero comprar agora
                </a>
              ) : (
                /* Botão Padrão (Scroll para oferta) - Fallback */
                <button 
                  onClick={() => { setActivePreview(null); scrollToOffer(); }}
                  className="bg-brand-green hover:bg-green-500 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-green-500/20 transition-all transform hover:-translate-y-1"
                >
                  Gostei! Quero comprar agora
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;