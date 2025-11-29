import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  subtext?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  subtext, 
  onClick, 
  variant = 'primary', 
  fullWidth = false,
  href
}) => {
  const baseClasses = "group relative inline-flex flex-col items-center justify-center px-8 py-4 text-center transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl rounded-2xl cursor-pointer overflow-hidden no-underline";
  
  const variants = {
    primary: "bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/30 border-b-4 border-green-700",
    secondary: "bg-brand-orange hover:bg-orange-400 text-white shadow-lg shadow-orange-500/30 border-b-4 border-orange-700"
  };

  const Content = () => (
    <>
      <div className="flex items-center gap-2 text-xl font-bold uppercase tracking-wide">
        {text}
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </div>
      {subtext && (
        <span className="text-xs font-medium opacity-90 mt-1">
          {subtext}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
        onClick={onClick}
      >
        <Content />
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
    >
      <Content />
    </button>
  );
};

export default Button;