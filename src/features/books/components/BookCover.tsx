import React from 'react';

interface BookCoverProps {
  title: string;
  author: string;
  coverColor?: string;
  className?: string;
}

export function BookCover({ title, author, coverColor = '#C0674A', className }: BookCoverProps) {
  return (
    <div 
      className={`relative rounded-md overflow-hidden flex flex-col justify-between p-6 ${className}`}
      style={{ 
        background: `linear-gradient(135deg, ${coverColor}, ${coverColor}dd)`,
        boxShadow: `
          inset 4px 0 10px rgba(0,0,0,0.1),
          inset -1px 0 2px rgba(255,255,255,0.3),
          5px 5px 15px rgba(0,0,0,0.15),
          -1px -1px 2px rgba(255,255,255,0.5)
        `
      }}
    >
      {/* Book spine/binding indent */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/40 via-transparent to-black/10 z-0" />
      <div className="absolute left-4 top-0 bottom-0 w-px bg-white/30 shadow-[1px_0_2px_rgba(0,0,0,0.3)] z-0" />
      <div className="absolute left-6 top-0 bottom-0 w-px bg-black/10 z-0" />

      {/* Pages edge right side */}
      <div className="absolute right-0 top-1 bottom-1 w-1 bg-white/80 rounded-l shadow-inner border-y border-r border-black/10 z-0" />

      {/* Ribbon Bookmark */}
      <div className="absolute top-0 right-6 w-5 h-16 bg-gold shadow-md origin-top transform z-0" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }} />

      {/* Title */}
      <div className="relative z-10 text-white pl-6 pr-2 text-center mt-8 w-full flex-grow flex items-center justify-center">
        <h2 className="font-serif text-[1.25rem] md:text-[1.5rem] font-bold leading-snug drop-shadow-lg break-words text-balance max-w-full" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{title}</h2>
      </div>
      
      {/* Author */}
      <div className="relative z-10 text-white/90 text-center pl-6 pr-2 mb-4 w-full">
        <div className="w-12 h-px bg-white/50 mx-auto mb-3 shadow-sm" />
        <p className="font-sans text-10 md:text-12 tracking-widest uppercase text-white font-medium break-words px-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>{author}</p>
      </div>
    </div>
  );
}
