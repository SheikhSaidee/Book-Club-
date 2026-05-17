import {  useState  } from 'react';
import { PageTransition } from '../components/Layout/PageTransition';
import { data } from '../config/data';
import { MemberCard } from '../features/members/components/MemberCard';
import { Filter } from 'lucide-react';
import { useTitle } from '../hooks/useTitle';
import { CustomSelect } from '../components/Elements/CustomSelect';

export function Members() {
  useTitle('Members');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Name');

  const filteredMembers = data.members.filter(m => {
    if (filter === 'Active streak') return m.currentStreak > 0;
    if (filter === 'Presenter this session') return m.assignedSession === data.currentBook.currentSession;
    return true;
  });

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    if (sort === 'Name') return a.name.localeCompare(b.name);
    if (sort === 'Attendance') return b.attendance.attended - a.attendance.attended;
    if (sort === 'Badges earned') return b.badges.length - a.badges.length;
    return 0;
  });

  return (
    <PageTransition>
      <div className="mb-12">
        <h1 className="font-serif text-48 font-bold mb-4">Members</h1>
        <p className="text-16 text-muted">Meet the minds behind the discussion.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 pb-4 border-b border-border items-center justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <Filter className="w-5 h-5 text-muted shrink-0" />
          {['All', 'Active streak', 'Presenter this session'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-md text-14 whitespace-nowrap transition-all duration-300 ${filter === f ? 'bg-ink text-white font-medium shadow-sm' : 'bg-surface hover:bg-surface-elevated text-ink border border-border hover:border-gold/50'}`}
            >
              {f}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className="text-14 text-muted shrink-0">Sort by:</span>
          <CustomSelect 
            value={sort}
            onChange={setSort}
            options={['Name', 'Attendance', 'Badges earned']}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedMembers.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
      
      {sortedMembers.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-4 bg-surface-elevated rounded-full flex items-center justify-center">
            <Filter className="w-8 h-8 text-muted" />
          </div>
          <h3 className="font-serif text-24 font-bold text-ink mb-2">No members found</h3>
          <p className="text-muted">Try adjusting your filters.</p>
        </div>
      )}
    </PageTransition>
  );
}
