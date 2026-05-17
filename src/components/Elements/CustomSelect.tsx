import {  useState, useRef, useEffect  } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export function CustomSelect({ value, onChange, options }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between min-w-[160px] bg-surface border border-border hover:border-gold/50 rounded-md px-4 py-2 text-14 text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-gold/30 shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{value}</span>
        <ChevronDown className={`w-4 h-4 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute z-50 top-full right-0 mt-2 w-full min-w-[160px] bg-surface border border-border rounded-md shadow-lg overflow-hidden origin-top-right animate-in fade-in slide-in-from-top-2 duration-200"
          role="listbox"
        >
          {options.map((option) => (
            <button
              key={option}
              role="option"
              aria-selected={value === option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-14 text-left hover:bg-surface-elevated transition-colors"
            >
              <span className={`${value === option ? 'text-ink font-semibold' : 'text-muted'}`}>
                {option}
              </span>
              {value === option && <Check className="w-4 h-4 text-gold" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
