import React from 'react';
import { Heart, Sparkles, BookOpen } from 'lucide-react';

const StorySection: React.FC = () => {
  // Função inteligente para garantir o carregamento da imagem (igual ao Hero)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const currentSrc = img.src;

    if (currentSrc.includes('lh3.googleusercontent.com')) {
      const id = currentSrc.split('/d/')[1];
      if (id) {
        // Tenta carregar a versão thumbnail em alta resolução
        img.src = `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
        return;
      }
    }
    // Fallback final
    img.src = "https://images.unsplash.com/photo-1544776193-ade277d75387?q=80&w=800&auto=format&fit=crop";
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-yellow rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-blue rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <img 
              src="https://lh3.googleusercontent.com/d/1hdtO6NvouQF6hfCXqVeMmW7ui11l8x2_" 
              onError={handleImageError}
              alt="Criança colorindo feliz com os eBooks Grandes Amigos de Jesus" 
              className="rounded-3xl shadow-2xl border-4 border-white relative z-10 w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg z-20">
              <p className="text-brand-purple font-bold italic">"Mamãe, Jesus é colorido igual meu desenho?"</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 text-brand-purple font-bold mb-4 uppercase tracking-wider text-sm">
              <Heart className="w-5 h-5 fill-current" />
              A História por trás
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Mais que tinta no papel,<br />uma conexão com o Divino.
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Tudo começou com uma pergunta simples do meu filho, <strong className="text-brand-orange">Pedrinho</strong>, enquanto assistia a um desenho agitado na TV: <em>"Por que ninguém fala oi pra Jesus aqui?"</em>.
              </p>
              <p>
                Naquele momento, percebi que o tempo de tela estava roubando não apenas a criatividade dele, mas a oportunidade de conhecer o Amor verdadeiro.
              </p>
              <p>
                A coleção <strong>Grandes Amigos de Jesus</strong> nasceu desse desejo: criar um momento de paz, onde cada traço colorido se torna uma oração silenciosa. Inspirado na estética vibrante e amigável (estilo <em>"Bob Gods"</em>), trouxemos Jesus não como uma figura distante, mas como um <strong>melhor amigo</strong> pronto para brincar.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
               <div className="flex items-center gap-3 bg-brand-yellow/10 p-4 rounded-lg border border-brand-yellow/20">
                  <Sparkles className="w-6 h-6 text-brand-orange" />
                  <span className="font-semibold text-slate-800">Estilo Vibrante & Alegre</span>
               </div>
               <div className="flex items-center gap-3 bg-brand-blue/10 p-4 rounded-lg border border-brand-blue/20">
                  <BookOpen className="w-6 h-6 text-brand-blue" />
                  <span className="font-semibold text-slate-800">Revisado por Pedagogos</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StorySection;