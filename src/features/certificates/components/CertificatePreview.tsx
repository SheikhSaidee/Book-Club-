import React from 'react';
import type { Member, CurrentBook } from '../../../types/index';
import { BadgeIcon } from '../../badges/components/BadgeIcon';
import { Award, BookOpen } from 'lucide-react';

export function CertificatePreview({ member, book }: { member: Member; book: CurrentBook }) {
  return (
    <div 
      id="certificate" 
      className="bg-[#faf9f6] w-full max-w-[950px] aspect-[1.414] mx-auto relative shadow-2xl print:shadow-none overflow-hidden flex flex-col"
    >
      {/* Outer Border */}
      <div className="absolute inset-4 border-[6px] border-double border-gold/60 p-2 pointer-events-none">
        <div className="border border-gold/30 w-full h-full" />
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-[3px] border-l-[3px] border-[#1A1A2E]/80 pointer-events-none" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-[3px] border-r-[3px] border-[#1A1A2E]/80 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-[3px] border-l-[3px] border-[#1A1A2E]/80 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-[3px] border-r-[3px] border-[#1A1A2E]/80 pointer-events-none" />

      {/* Background Watermark/Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <BookOpen className="w-[450px] h-[450px]" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-12 sm:px-16 py-10 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-8 shrink-0">
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1A1A2E] tracking-tight">
            Tafakkur Readers
          </h1>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="w-16 h-px bg-gold/50" />
            <p className="text-10 sm:text-12 text-gold font-bold uppercase tracking-[0.3em]">Certificate of Completion</p>
            <div className="w-16 h-px bg-gold/50" />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4 max-w-[700px] mx-auto w-full">
          <p className="font-serif text-16 sm:text-18 text-[#1A1A2E]/80 italic">This proudly certifies that</p>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] w-full px-4 sm:px-8 py-2 border-b border-[#1A1A2E]/20 leading-tight">
            {member.name}
          </h2>

          <p className="font-serif text-16 sm:text-18 text-[#1A1A2E]/80 italic px-2 sm:px-4 leading-relaxed max-w-[550px]">
            has demonstrated dedication and commitment by successfully completing the reading and rigorous discussion of
          </p>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold w-full px-2 sm:px-4 leading-tight pt-2">
            {book.title}
          </h3>
          <p className="font-sans text-12 sm:text-14 uppercase tracking-widest text-[#6B6B6B] pb-2">by {book.author}</p>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-end mt-4 pt-4 border-t border-gold/20 relative shrink-0">
          
          {/* Badges */}
          <div className="w-1/3 flex flex-col">
            <p className="text-[10px] sm:text-10 uppercase tracking-widest text-[#6B6B6B] mb-2 font-semibold">Honors Achieved</p>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {member.badges.slice(0, 4).map((badge) => (
                <div key={badge} className="scale-75 sm:scale-100 origin-left">
                  <BadgeIcon tier={badge} size={40} />
                </div>
              ))}
              {member.badges.length > 4 && (
                <span className="text-12 text-[#6B6B6B] self-center ml-1 font-medium">+{member.badges.length - 4}</span>
              )}
            </div>
          </div>

          {/* Golden Seal */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center justify-end">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#D4AF37] to-[#8C640A] rounded-full flex items-center justify-center shadow-xl border-2 border-white/50 relative">
              <div className="absolute inset-1 border border-dashed border-white/40 rounded-full" />
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-90" />
              <div className="absolute -bottom-1 bg-white px-2 py-0.5 rounded text-[7px] sm:text-[8px] font-bold tracking-widest uppercase text-gold shadow-sm">
                Official
              </div>
            </div>
          </div>

          {/* Signatures */}
          <div className="w-1/3 flex flex-col items-end text-right">
            <div className="w-32 sm:w-40 border-b border-[#1A1A2E]/40 mb-1" />
            <p className="text-[10px] sm:text-12 uppercase tracking-widest font-semibold text-[#1A1A2E]/80">Authorized Signature</p>
            <p className="font-serif text-12 sm:text-14 text-[#6B6B6B] mt-1">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
