import React from 'react';
import { Sun, Smile, BookHeart, Printer, ShieldCheck } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Smile className="w-8 h-8 text-white" />,
      color: "bg-brand-orange",
      title: "Exclusivo: Valores Reais",
      desc: "Desenvolve a Humildade, o Perdão e a Esperança através de histórias visuais que ficam na memória."
    },
    {
      icon: <Sun className="w-8 h-8 text-white" />,
      color: "bg-brand-yellow",
      title: "Prático: Hora da Calma",
      desc: "A atividade perfeita para desacelerar, reduzir a ansiedade e tirar as crianças das telas."
    },
    {
      icon: <BookHeart className="w-8 h-8 text-white" />,
      color: "bg-brand-purple",
      title: "Educacional & Espiritual",
      desc: "Cada desenho acompanha um versículo curto e fácil de memorizar, gerando diálogos em família."
    },
    {
      icon: <Printer className="w-8 h-8 text-white" />,
      color: "bg-brand-blue",
      title: "Economia Inteligente",
      desc: "Arquivo digital vitalício! Imprima quantas vezes quiser para todos os filhos, sobrinhos e netos."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Não venda apenas tinta, <span className="text-brand-green">construa memórias.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubra por que mais de 1.200 famílias trocaram o tablet pelos lápis de cor com a coleção Grandes Amigos de Jesus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-slate-200 hover:border-brand-blue hover:-translate-y-2 transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-md rotate-3`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2 text-slate-500 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-brand-green" />
                <span className="font-medium">Conteúdo 100% Seguro e Cristão</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;