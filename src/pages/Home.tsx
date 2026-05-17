import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/Layout/PageTransition';
import { data } from '../config/data';
import { StatCounter } from '../components/Elements/StatCounter';
import { MemberCard } from '../features/members/components/MemberCard';
import { SessionCard } from '../features/sessions/components/SessionCard';
import { ProgressBar } from '../components/Elements/ProgressBar';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { BookCover } from '../features/books/components/BookCover';
import { useTitle } from '../hooks/useTitle';

export function Home() {
  useTitle('Home');
  const nextSession = data.sessions.find(s => s.status === 'upcoming');
  const activeMembers = [...data.members].sort((a, b) => b.attendance.attended - a.attendance.attended).slice(0, 4);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <section className="py-12 md:py-20 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-surface-elevated px-4 py-2 rounded-md border border-border shadow-sm relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-terracotta" />
          <Calendar className="w-4 h-4 text-terracotta ml-1" />
          <span className="text-14 font-medium text-ink">Next session in 3 days</span>
        </div>
        <h1 className="font-serif text-48 md:text-[72px] font-bold text-ink leading-tight mb-4">
          {data.club.name}
        </h1>
        <p className="font-serif text-24 text-gold italic mb-16">
          Currently reading: {data.currentBook.title}
        </p>

        <div className="w-full flex justify-between px-4 md:px-16 border-y border-border py-8 mb-16 max-w-[800px] overflow-hidden">
          <StatCounter value={data.members.length} label="Members" />
          <StatCounter value={data.club.booksCompleted} label="Books" />
          <StatCounter value={data.club.totalSessions} label="Sessions" />
          <StatCounter value={data.members.reduce((acc, m) => acc + m.badges.length, 0)} label="Badges" />
        </div>
      </section>

      <section className="mb-24">
        <div className="bg-surface rounded-lg p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center border border-transparent hover:border-gold/30 transition-colors duration-300">
          <BookCover 
            title={data.currentBook.title} 
            author={data.currentBook.author} 
            coverColor={data.currentBook.coverColor} 
            className="w-[200px] h-[300px] shrink-0" 
          />
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {data.currentBook.genre.map(g => (
                <span key={g} className="px-3 py-1 bg-surface-elevated text-ink text-12 uppercase tracking-wider rounded-md font-medium">
                  {g}
                </span>
              ))}
            </div>
            <h2 className="font-serif text-32 font-bold mb-2">{data.currentBook.title}</h2>
            <p className="text-16 text-muted mb-6">{data.currentBook.description}</p>
            
            <div className="mb-6">
              <div className="flex justify-between text-14 font-medium mb-2">
                <span>Session {data.currentBook.currentSession} of {data.currentBook.totalSessions}</span>
                <span>{Math.round((data.currentBook.currentSession / data.currentBook.totalSessions) * 100)}%</span>
              </div>
              <ProgressBar value={(data.currentBook.currentSession / data.currentBook.totalSessions) * 100} color="sage" />
            </div>

            <Link to="/book" className="inline-flex items-center gap-2 text-gold font-medium hover:text-ink transition-colors group">
              View session topics
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-32 font-bold mb-2">Member Spotlight</h2>
            <p className="text-muted">Most active readers this week.</p>
          </div>
          <Link to="/members" className="text-gold font-medium hover:underline hidden md:block">
            View all members
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeMembers.map((member, idx) => (
            <div key={member.id} className="relative">
              {idx === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-12 font-bold px-3 py-1 rounded-md z-10 whitespace-nowrap shadow-md">
                  Most Active
                </div>
              )}
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </section>

      {nextSession && (
        <section className="mb-24">
          <h2 className="font-serif text-32 font-bold mb-8">Upcoming Session</h2>
          <SessionCard session={nextSession} />
        </section>
      )}

      {data.pastBooks && data.pastBooks.length > 0 && (
        <section className="mb-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-serif text-32 font-bold mb-2">Library of Past Reads</h2>
              <p className="text-muted">Books we've completed and discussed.</p>
            </div>
          </div>
          <div className="relative group">
            {/* Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

            {/* Left Button */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-2 sm:left-4 top-[160px] -translate-y-1/2 z-20 bg-surface/80 backdrop-blur-sm text-ink w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 focus:opacity-100 hover:bg-surface"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Right Button */}
            <button 
              onClick={() => scroll('right')}
              className="absolute right-2 sm:right-4 top-[160px] -translate-y-1/2 z-20 bg-surface/80 backdrop-blur-sm text-ink w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 focus:opacity-100 hover:bg-surface"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory hide-scrollbar relative px-8 sm:px-16"
            >
              {data.pastBooks.map((book) => (
                <div key={book.id} className="snap-center sm:snap-start shrink-0 relative group/book cursor-default">
                  <BookCover 
                    title={book.title} 
                    author={book.author} 
                    coverColor={book.coverColor} 
                    className="w-[200px] sm:w-[220px] h-[300px] sm:h-[320px] group-hover/book:-translate-y-2 transition-transform duration-300 shadow-md group-hover/book:shadow-xl" 
                  />
                  <div className="mt-4 text-center">
                    <p className="text-12 uppercase tracking-widest text-muted">{book.sessions} Sessions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
