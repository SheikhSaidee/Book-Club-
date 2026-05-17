import { cn } from '../../../utils/index';
import type { BadgeTier } from '../../../types/index';

interface BadgeIconProps {
  tier: BadgeTier;
  size?: number;
  earned?: boolean;
  className?: string;
}

export function BadgeIcon({ tier, size = 80, earned = true, className }: BadgeIconProps) {
  const badgeColors: Record<BadgeTier, { fill: string, stroke: string, glow: string }> = {
    first_spark: { fill: '#E8F3EB', stroke: '#4A7C59', glow: 'rgba(74, 124, 89, 0.4)' },
    rising_reader: { fill: '#E6F0FF', stroke: '#3A7CA5', glow: 'rgba(58, 124, 165, 0.4)' },
    steady_climber: { fill: '#FFF4E6', stroke: '#D98324', glow: 'rgba(217, 131, 36, 0.4)' },
    deep_diver: { fill: '#F3E8FF', stroke: '#6B4C9A', glow: 'rgba(107, 76, 154, 0.4)' },
    club_legend: { fill: '#FCF8E8', stroke: '#C9A84C', glow: 'rgba(201, 168, 76, 0.4)' }
  };

  const { fill, stroke, glow } = badgeColors[tier];

  const style = earned ? {
    filter: `drop-shadow(0 0 8px ${glow})`
  } : {
    filter: 'grayscale(100%) opacity(40%)'
  };

  const renderIcon = () => {
    switch (tier) {
      case 'first_spark':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill={fill} stroke={stroke} strokeWidth="2" />
            <path d="M48 60L46 80H54L52 60" fill={stroke} />
            <path d="M50 30C45 40 40 45 45 55C50 60 55 55 55 50C55 45 55 40 50 30Z" fill={stroke} />
          </svg>
        );
      case 'rising_reader':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="80" height="80" rx="16" fill={fill} stroke={stroke} strokeWidth="2" />
            <path d="M30 70C30 70 40 60 50 65C60 60 70 70 70 70V40C70 40 60 30 50 35C40 30 30 40 30 40V70Z" stroke={stroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M50 65V35" stroke={stroke} strokeWidth="4" strokeLinecap="round"/>
            <path d="M50 20L50 15M50 15L45 20M50 15L55 20" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'steady_climber':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10L90 80H10L50 10Z" fill={fill} stroke={stroke} strokeWidth="2" strokeLinejoin="round"/>
            <path d="M30 45L40 55L50 40L60 60L75 40" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M50 10V25" stroke={stroke} strokeWidth="3" strokeLinecap="round"/>
            <path d="M50 15H65L60 20L65 25H50" fill={stroke} />
          </svg>
        );
      case 'deep_diver':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,50 50,90 10,50" fill={fill} stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
            <circle cx="50" cy="30" r="4" fill={stroke} />
            <circle cx="30" cy="50" r="3" fill={stroke} />
            <circle cx="70" cy="60" r="5" fill={stroke} />
            <circle cx="45" cy="70" r="3" fill={stroke} />
            <path d="M50 30L30 50L45 70L70 60L50 30" stroke={stroke} strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        );
      case 'club_legend':
        return (
          <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" fill={fill} stroke={stroke} strokeWidth="2" />
            <path d="M20 50C20 66 33 80 50 80C66 80 80 66 80 50" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
            <path d="M40 70L50 30L60 50" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M45 40L55 45L48 55L45 40Z" fill={stroke} />
          </svg>
        );
    }
  };

  return (
    <div className={cn('relative inline-flex items-center justify-center transition-transform duration-300 hover:-translate-y-1', className)} style={style} title={tier.replace('_', ' ')}>
      {renderIcon()}
      {!earned && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      )}
    </div>
  );
}
