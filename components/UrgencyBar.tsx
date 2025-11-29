import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

const UrgencyBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="bg-red-600 text-white py-2 px-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-center">
        <div className="flex items-center gap-2 font-semibold text-sm sm:text-base animate-pulse">
          <AlertCircle className="w-5 h-5" />
          <span>O Preço de Lançamento VAI EXPIRAR em breve!</span>
        </div>
        
        <div className="flex items-center gap-2 bg-red-800/50 px-4 py-1 rounded-full border border-red-400/30">
          <Clock className="w-4 h-4" />
          <span className="font-mono font-bold text-lg tracking-wider">
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;