import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Mariana Souza",
      role: "Mãe do João, 5 anos",
      image: "https://i.pravatar.cc/150?u=mariana",
      text: "Meu filho parou de pedir o tablet para colorir as Histórias de Jesus! É impressionante como ele grava os versículos enquanto pinta. Simplesmente amamos!"
    },
    {
      name: "Pr. Carlos Mendes",
      role: "Líder do Ministério Infantil",
      image: "https://i.pravatar.cc/150?u=carlos",
      text: "Material de excelente qualidade teológica e pedagógica. Usamos na escola dominical e as crianças ficaram encantadas com o estilo dos desenhos."
    },
    {
      name: "Fernanda Lima",
      role: "Mãe de 3",
      image: "https://i.pravatar.cc/150?u=fernanda",
      text: "O melhor investimento que fiz este mês. Imprimi várias cópias e fizemos um concurso de pintura em família no domingo. Foi um tempo de qualidade incrível."
    }
  ];

  return (
    <section className="py-20 bg-brand-blue/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          O que as famílias estão dizendo?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-xl relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-blue/10 fill-brand-blue/10" />
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-blue/20" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <span className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;