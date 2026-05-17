import React from 'react';
import { PageTransition } from '../components/Layout/PageTransition';
import { BadgeIcon } from '../features/badges/components/BadgeIcon';
import { data } from '../config/data';
import type { BadgeTier } from '../types/index';
import { useTitle } from '../hooks/useTitle';

export function Badges() {
  useTitle('Badges');
  const badgeInfo: Record<BadgeTier, { name: string, condition: string, colorClass: string }> = {
    first_spark: { name: 'First Spark', condition: 'Attend your first club session', colorClass: 'bg-sage/10 text-sage' },
    rising_reader: { name: 'Rising Reader', condition: 'Maintain a 3-session attendance streak', colorClass: 'bg-blue-100 text-blue-700' },
    steady_climber: { name: 'Steady Climber', condition: 'Attend 20 club sessions total', colorClass: 'bg-amber-100 text-amber-700' },
    deep_diver: { name: 'Deep Diver', condition: 'Read 10 complete books with the club', colorClass: 'bg-purple-100 text-purple-700' },
    club_legend: { name: 'Club Legend', condition: 'Attend 50 club sessions and become a pillar of the community', colorClass: 'bg-gold/20 text-gold font-bold' }
  };

  const badgeOrder: BadgeTier[] = ['first_spark', 'rising_reader', 'steady_climber', 'deep_diver', 'club_legend'];

  const earnedCount = (tier: BadgeTier) => data.members.filter(m => m.badges.includes(tier)).length;
  const earners = (tier: BadgeTier) => data.members.filter(m => m.badges.includes(tier));

  return (
    <PageTransition>
      <div className="text-center mb-16">
        <h1 className="font-serif text-48 md:text-[64px] font-bold mb-4">Earn your place in the library</h1>
        <p className="text-20 text-muted max-w-[600px] mx-auto">Collect badges by participating, presenting, and maintaining streaks. Badges are displayed on your member card.</p>
      </div>

      <div className="space-y-8 max-w-[800px] mx-auto relative">
        <div className="absolute left-16 top-0 bottom-0 w-1 bg-border hidden md:block" />
        
        {badgeOrder.map((tier, idx) => {
          const info = badgeInfo[tier];
          const membersWithBadge = earners(tier);
          
          return (
            <div key={tier} className="bg-surface rounded-lg p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center border border-transparent hover:border-gold/30 transition-all duration-300 relative group">
              <div className="relative z-10 bg-primary rounded-full p-4 md:p-0 md:bg-transparent shrink-0 md:-ml-4">
                <BadgeIcon tier={tier} size={100} earned={true} className="group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2 justify-center md:justify-start">
                  <h2 className="font-serif text-24 font-bold">{info.name}</h2>
                  <span className={`px-2 py-0.5 rounded text-12 uppercase tracking-wider ${info.colorClass}`}>
                    Tier {idx + 1}
                  </span>
                </div>
                
                <p className="text-16 text-muted mb-6">{info.condition}</p>
                
                <div className="flex items-center gap-4 justify-center md:justify-start pt-4 border-t border-border w-full">
                  <span className="text-14 font-medium">{earnedCount(tier)} members earned this</span>
                  <div className="flex -space-x-3">
                    {membersWithBadge.map(m => {
                      const initials = m.name.split(' ').map((n) => n[0]).join('');
                      return (
                        <div 
                          key={m.id} 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-12 text-white font-bold border-2 border-surface relative group/avatar"
                          style={{ backgroundColor: m.avatarColor }}
                        >
                          {initials}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-ink text-white text-12 px-2 py-1 rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                            {m.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageTransition>
  );
}
