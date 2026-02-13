
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const ValentineRequest: React.FC<{ onYes: () => void }> = ({ onYes }) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isNoHovered, setIsNoHovered] = useState(false);

  const handleNoHover = () => {
    const newX = (Math.random() - 0.5) * 300;
    const newY = (Math.random() - 0.5) * 300;
    setNoPosition({ x: newX, y: newY });
    setIsNoHovered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-md rounded-3xl shadow-xl border border-rose-100 max-w-md w-full mx-auto relative z-10 transition-all duration-500 hover:shadow-rose-200/50">
      <div className="mb-6 animate-bounce">
        <Heart className="w-16 h-16 text-rose-500 fill-rose-500" />
      </div>
      <h2 className="text-3xl font-serif-elegant text-rose-800 text-center mb-8">
        Will you be my Valentine, Bestie? 👯‍♀️
      </h2>
      <div className="flex gap-6 relative h-16 w-full justify-center items-center">
        <button
          onClick={onYes}
          className="px-8 py-3 bg-rose-500 text-white rounded-full font-bold shadow-lg shadow-rose-200 hover:bg-rose-600 transform hover:scale-110 transition-all active:scale-95"
        >
          YES! ✨
        </button>
        <button
          onMouseEnter={handleNoHover}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
          }}
          className="px-8 py-3 bg-gray-100 text-gray-500 rounded-full font-bold transition-all duration-200"
        >
          No
        </button>
      </div>
      {isNoHovered && (
        <p className="mt-4 text-xs text-rose-400 font-medium italic animate-pulse">
          Nice try, soulmates can't say no! 😉
        </p>
      )}
    </div>
  );
};

export default ValentineRequest;
