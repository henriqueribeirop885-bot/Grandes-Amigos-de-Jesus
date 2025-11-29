
import React from 'react';
import Button from './Button';
import { Check, Shield, BookOpen, Star } from 'lucide-react';

interface OfferProps {
  onBuySingle: () => void;
}

const Offer: React.FC<OfferProps> = ({ onBuySingle }) => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden" id="oferta">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Escolha a melhor opção para sua família
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comece com um volume ou leve a coleção completa com um desconto especial de lançamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto">
          
          {/* Card 1: Volume Único */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-slate-100 hover:border-slate-300 transition-colors order-2 md:order-1 relative">
            <h3 className="text-xl font-bold text-slate-800 mb-1">Volume Avulso</h3>
            <p className="text-slate-500 text-xs mb-5">Escolha o seu preferido (Vol. 1, 2 ou 3)</p>
            
            <div className="flex items-baseline gap-1 mb-5">
              <span className="text-sm text-slate-500 font-medium">Por apenas</span>
              <span className="text-4xl font-extrabold text-slate-900">R$ 30</span>
              <span className="text-slate-500">,00</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <BookOpen className="w-5 h-5 text-brand-blue" />
                <span>1 eBook (+20 Páginas)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Check className="w-5 h-5 text-brand-blue" />
                <span>Histórias e Versículos</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Shield className="w-5 h-5 text-brand-blue" />
                <span>Garantia de 7 Dias</span>
              </div>
            </div>

            <Button 
              text="Comprar 1 Volume" 
              variant="secondary"
              fullWidth
              onClick={onBuySingle}
            />
          </div>

          {/* Card 2: Coleção Completa (Destaque) */}
          <div className="bg-slate-900 rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-brand-green/30 relative order-1 md:order-2 transform md:scale-105 z-10">
            
            {/* Badge de Melhor Valor */}
            <div className="absolute top-0 right-0 bg-brand-green text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
              Melhor Custo-Benefício
            </div>

            <div className="flex items-center gap-2 mb-2 text-brand-yellow">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-xs uppercase tracking-wide">Recomendado</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Coleção Completa</h3>
            <p className="text-slate-400 text-xs mb-5">Leve os 3 livros da série</p>
            
            <div className="flex flex-col mb-6">
               <span className="text-slate-400 line-through text-xs">De R$ 90,00</span>
               <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white">R$ 50</span>
                <span className="text-xl text-slate-300 font-medium">,00</span>
               </div>
               <span className="text-brand-green text-xs font-semibold mt-1">Você economiza R$ 40,00</span>
            </div>

            <div className="space-y-3 mb-6 border-t border-slate-700 pt-5">
              <div className="flex items-start gap-3">
                <div className="bg-brand-green p-1 rounded-full mt-0.5"><Check className="w-3 h-3 text-white" /></div>
                <span className="text-slate-200 text-sm"><strong>Todos os 3 Volumes</strong> (+60 Páginas)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-brand-green p-1 rounded-full mt-0.5"><Check className="w-3 h-3 text-white" /></div>
                <span className="text-slate-200 text-sm">Versículos e Ensinamentos em cada página</span>
              </div>
            </div>

            <Button 
              text="Comprar Coleção Completa" 
              subtext="Economize 45% agora"
              variant="primary"
              fullWidth
              href="https://go.hotmart.com/F103195486X"
            />
            
            <p className="text-center text-slate-500 text-[10px] mt-4 flex items-center justify-center gap-1">
               <Shield className="w-3 h-3" /> Satisfação Garantida ou seu dinheiro de volta
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offer;
