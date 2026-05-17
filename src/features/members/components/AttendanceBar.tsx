import { ProgressBar } from '../../../components/Elements/ProgressBar';

export function AttendanceBar({ attended, total }: { attended: number; total: number }) {
  const percentage = (attended / total) * 100;
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex justify-between items-center text-12 text-muted font-mono">
        <span>Attendance</span>
        <span>{attended} / {total} sessions</span>
      </div>
      <ProgressBar value={percentage} color={percentage >= 80 ? 'sage' : percentage >= 50 ? 'gold' : 'terracotta'} />
    </div>
  );
}
