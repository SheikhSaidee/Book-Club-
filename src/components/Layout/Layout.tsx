import {  useState, useEffect  } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '../../utils/index';
import { data } from '../../config/data';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Footer } from './Footer';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Members', path: '/members' },
  { name: 'Badges', path: '/badges' },
  { name: 'Sessions', path: '/sessions' },
  { name: 'Book', path: '/book' },
  { name: 'Certificate', path: '/certificate' },
];

export function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-primary text-ink">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-primary/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-[1200px] w-full mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <BookOpen className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" />
            <span className="font-serif text-24 font-semibold tracking-tight">{data.club.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-16 font-medium transition-colors relative',
                    active ? 'text-ink' : 'text-muted hover:text-ink'
                  )}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggle}
              className="p-2 text-muted hover:text-ink transition-colors rounded-full hover:bg-surface-elevated"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              className="md:hidden text-ink p-2 -mr-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-primary flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-ink p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-serif text-32 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main className="flex-1 pt-24 pb-12 w-full max-w-[1200px] mx-auto px-4 md:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
