import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { data } from '../../config/data';

export function Footer() {
  return (
    <footer className="w-full bg-surface-elevated border-t border-border py-12 md:py-16 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand Section */}
        <div className="md:col-span-2 flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3 group mb-4">
            <BookOpen className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" />
            <span className="font-serif text-24 font-semibold tracking-tight text-ink">{data.club.name}</span>
          </Link>
          <p className="text-16 text-muted max-w-[400px] mb-6 leading-relaxed">
            A premium reading community by Deen School. Fostering deep contemplation, rigorous discussion, and a lifelong pursuit of knowledge.
          </p>
          <div className="flex items-center gap-4 text-14 text-muted font-medium">
            <span className="px-3 py-1 border border-border rounded-md bg-surface">
              Est. 2024
            </span>
            <span className="px-3 py-1 border border-border rounded-md bg-surface">
              {data.members.length} Members
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col">
          <h4 className="font-serif text-18 font-bold text-ink mb-6 uppercase tracking-widest text-14">Platform</h4>
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-16 text-muted hover:text-gold transition-colors">Home</Link>
            <Link to="/members" className="text-16 text-muted hover:text-gold transition-colors">Member Directory</Link>
            <Link to="/badges" className="text-16 text-muted hover:text-gold transition-colors">Badges & Honors</Link>
            <Link to="/sessions" className="text-16 text-muted hover:text-gold transition-colors">Session Archive</Link>
            <Link to="/book" className="text-16 text-muted hover:text-gold transition-colors">Current Book</Link>
          </nav>
        </div>

        {/* Philosophy/Quote */}
        <div className="flex flex-col">
          <h4 className="font-serif text-18 font-bold text-ink mb-6 uppercase tracking-widest text-14">Our Philosophy</h4>
          <blockquote className="border-l-2 border-gold pl-4 italic text-muted text-14 leading-relaxed">
            "Read! In the name of your Lord who created... Read! And your Lord is the Most Bountiful, He who taught by the pen—taught man that which he knew not."
          </blockquote>
        </div>

      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-14 text-muted">
          &copy; {new Date().getFullYear()} Deen School. All rights reserved.
        </p>
        <p className="text-14 text-muted flex items-center gap-2">
          Designed with purpose.
        </p>
      </div>
    </footer>
  );
}
