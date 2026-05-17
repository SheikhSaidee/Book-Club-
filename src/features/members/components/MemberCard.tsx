import type { Member } from '../../../types/index';
import { BadgeIcon } from '../../badges/components/BadgeIcon';
import { StreakBadge } from './StreakBadge';
import { AttendanceBar } from './AttendanceBar';

export function MemberCard({ member }: { member: Member }) {
  const initials = member.name.split(' ').map((n) => n[0]).join('');

  return (
    <div className="bg-surface rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gold relative group flex flex-col h-full mt-4">
      <div className="absolute -top-3 -right-2 z-10">
        <StreakBadge count={member.currentStreak} />
      </div>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-20 font-serif font-bold shadow-sm"
            style={{ backgroundColor: member.avatarColor }}
          >
            {initials}
          </div>
          <div>
            <h3 className="font-serif text-20 text-ink">{member.name}</h3>
            <p className="text-12 text-muted">Joined {new Date(member.joinedDate).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        {member.assignedTopic && (
          <div className="mb-4 bg-surface-elevated rounded-md p-3">
            <p className="text-12 text-muted uppercase tracking-wider mb-1">Current Topic</p>
            <p className="text-14 font-medium text-ink">{member.assignedTopic}</p>
          </div>
        )}

        <div className="mb-6">
          <p className="text-12 text-muted uppercase tracking-wider mb-2">Badges</p>
          <div className="flex flex-wrap gap-2">
            {member.badges.map((badge) => (
              <BadgeIcon key={badge} tier={badge} size={32} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-border">
        <AttendanceBar attended={member.attendance.attended} total={member.attendance.total} />
      </div>
    </div>
  );
}
