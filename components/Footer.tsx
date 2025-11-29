import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Não perca a chance de pintar o coração de seu filho com o <span className="text-brand-blue">amor que dura para sempre.</span>
        </h2>
        
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto">
          A infância passa rápido. Aproveite hoje para plantar as sementes que florescerão por toda a vida.
        </p>

        <div className="flex justify-center mb-16">
          <Button 
            text="Sim! Quero a Coleção Agora" 
            variant="secondary"
          />
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2024 Grandes Amigos de Jesus. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;