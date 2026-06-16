"use client";

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Chaos vs Flow', anchor: '#friction' },
  { name: 'What We Do', anchor: '#engines' },
  { name: 'How It Works', anchor: '#process' },
  { name: 'Profit Calculator', anchor: '#audit-tool' },
  { name: 'Get Started', anchor: '#build-spec' }
];

export const Header = ({ onOpenAudit }) => {
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize and track theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
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
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span 
              style={{ 
                fontFamily: 'LogoFont',
                fontSize: isScrolled ? '1.8rem' : '2.6rem',
                lineHeight: 1,
                fontWeight: 'normal',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                textTransform: 'none',
                transition: 'font-size var(--transition-normal)'
              }}
            >
              flowify.agency
            </span>
            <div
              style={{
                maxHeight: isScrolled ? 0 : '20px',
                opacity: isScrolled ? 0 : 1,
                overflow: 'hidden',
                transition: 'max-height var(--transition-normal), opacity var(--transition-normal)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'var(--font-heading-mono)', 
                  fontSize: '0.48rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.04em', 
                  color: 'var(--color-text-secondary)', 
                  marginTop: '4px',
                  textTransform: 'uppercase'
                }}
              >
                AUTOMATE YOUR DAILY OPERATIONS
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Link Track */}
        <nav className="desktop-links" style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center' }}>
          {navLinks.map((link) => {
            return (
              <a 
                key={link.name} 
                href={link.anchor}
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
                {link.name}
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
            Free Operations Audit
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
            boxShadow: 'var(--shadow-lg)',
            padding: 'var(--space-5)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            zIndex: 999
          }}
        >
          {navLinks.map((link) => {
            return (
              <a 
                key={link.name} 
                href={link.anchor}
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
                {link.name}
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
            Free Operations Audit
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
        .mobile-slide-drawer {
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: top;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </header>
  );
};
