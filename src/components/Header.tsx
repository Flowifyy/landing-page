import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenAudit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize and track theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    setTheme(initialTheme);
    if (initialTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Scroll height shrink trigger
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`site-header-nav ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: isScrolled ? '64px' : '90px',
        zIndex: 1000,
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'color-mix(in srgb, var(--color-bg) 85%, transparent)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transition: 'height var(--transition-normal), background-color var(--transition-normal), border-color var(--transition-normal)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={() => setMobileMenuOpen(false)}
          style={{ display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-heading-mono)', fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.04em' }}
        >
          FLOWIFY
          <span style={{ fontSize: '0.55rem', fontWeight: 400, letterSpacing: '0.05em', color: 'var(--color-text-secondary)', marginTop: '-2px' }}>
            THE BUSINESS ENGINE<span style={{ animation: 'blink 1.5s infinite steps(2)' }}>_</span>
          </span>
        </a>

        {/* Desktop Navigation Link Track */}
        <nav className="desktop-links" style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center' }}>
          {['Friction', 'Engines', 'Process', 'Audit Tool', 'Build Spec'].map((linkName) => {
            const anchor = '#' + linkName.toLowerCase().replace(' ', '-');
            return (
              <a 
                key={linkName} 
                href={anchor}
                className="nav-anchor"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 700,
                  color: 'var(--color-text-secondary)',
                  transition: 'color var(--transition-fast)',
                  padding: '4px 8px'
                }}
              >
                {linkName}
              </a>
            );
          })}
        </nav>

        {/* Global Controls & Call to Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          {/* Light/Dark Toggle */}
          <button 
            onClick={toggleTheme}
            aria-label="Toggle visual theme"
            className="theme-switch"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
              transition: 'border-color var(--transition-fast)'
            }}
          >
            {theme === 'light' ? (
              <Moon size={16} strokeWidth={2.5} style={{ color: 'var(--color-text-primary)' }} />
            ) : (
              <Sun size={16} strokeWidth={2.5} style={{ color: 'var(--color-text-primary)' }} />
            )}
          </button>

          {/* Book Audit Direct Trigger */}
          <button 
            onClick={onOpenAudit}
            className="btn-core btn-secondary-action btn-sm-action desktop-only"
            style={{ fontWeight: 700 }}
          >
            Book Audit
          </button>

          {/* Mobile hamburger menu */}
          <button 
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '38px', height: '38px', border: '1px solid var(--color-border)', color: 'var(--color-text-primary)' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide Drawer Navigation Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-slide-drawer"
          style={{
            position: 'absolute',
            top: isScrolled ? '64px' : '90px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-surface)',
            borderBottom: '1px solid var(--color-border)',
            padding: 'var(--space-5)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            zIndex: 999
          }}
        >
          {['Friction', 'Engines', 'Process', 'Audit Tool', 'Build Spec'].map((linkName) => {
            const anchor = '#' + linkName.toLowerCase().replace(' ', '-');
            return (
              <a 
                key={linkName} 
                href={anchor}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  borderBottom: '1px solid var(--color-border)',
                  paddingBottom: '8px'
                }}
              >
                {linkName}
              </a>
            );
          })}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAudit();
            }}
            className="btn-core btn-primary-action"
            style={{ width: '100%', marginTop: 'var(--space-2)' }}
          >
            Book Workflow Audit
          </button>
        </div>
      )}
      
      {/* Dynamic Styling injected natively */}
      <style>{`
        .desktop-only { display: none; }
        @media (min-width: 768px) {
          .desktop-only { display: inline-flex; }
          .mobile-hamburger { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-links { display: none !important; }
        }
        .nav-anchor:hover {
          color: var(--color-text-primary) !important;
        }
        .theme-switch:hover {
          border-color: var(--color-text-primary) !important;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </header>
  );
};
