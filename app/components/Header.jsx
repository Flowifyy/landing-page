"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
 
];

export const Header = ({ onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll height shrink trigger
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="mobile-header-container"
      style={{
        position: 'fixed',
        top: isScrolled ? '12px' : '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)',
        maxWidth: '1200px',
        zIndex: 1000,
        transition: 'top 0.3s cubic-bezier(0.16, 1, 0.3, 1), width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <header 
        className="mobile-header-wrapper"
        style={{
          width: '100%',
          border: '2px solid var(--color-text-primary)',
          backgroundColor: 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '6px 6px 0px var(--color-text-primary)',
          borderRadius: 'var(--radius-sm)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div 
          className="mobile-header-inner"
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            height: isScrolled ? '64px' : '76px',
            paddingInline: 'var(--space-4)',
            transition: 'height 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img 
              className="mobile-logo"
              src="/in-line-flowify.svg" 
              alt="Flowify" 
              style={{
                height: isScrolled ? '24px' : '30px',
                width: 'auto',
                display: 'block',
                transition: 'height 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </a>

          {/* Desktop Navigation Link Track */}
          <nav className="desktop-links" style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
            {navLinks.map((link) => {
              return (
                <a 
                  key={link.name} 
                  href={link.anchor}
                  className="nav-anchor-brutal"
                  style={{
                    fontFamily: 'var(--font-heading-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                    transition: 'all 0.15s ease',
                    padding: '8px 12px',
                    border: '1px solid transparent'
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Global Controls & Call to Action */}
          <div className="mobile-controls-gap" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            {/* Book Audit Direct Trigger */}
            <button 
              onClick={onOpenAudit}
              className="btn-brutal-nav desktop-only"
              style={{
                fontFamily: 'var(--font-heading-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                backgroundColor: 'var(--color-accent)',
                color: '#070709',
                border: '2px solid var(--color-text-primary)',
                boxShadow: '4px 4px 0px var(--color-text-primary)',
                padding: '8px 16px',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '6px 6px 0px var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-text-primary)';
              }}
            >
              Free Operations Audit
            </button>

            {/* Mobile hamburger menu */}
            <button 
              className="mobile-hamburger-brutal"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '38px', 
                height: '38px', 
                border: '1px solid var(--color-text-primary)', 
                color: 'var(--color-text-primary)',
                boxShadow: '2px 2px 0px var(--color-text-primary)',
                backgroundColor: 'var(--color-surface)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-1px, -1px)';
                e.currentTarget.style.boxShadow = '3px 3px 0px var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '2px 2px 0px var(--color-text-primary)';
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Drawer Navigation Overlay (Expanding inner container) */}
        {mobileMenuOpen && (
          <div 
            className="mobile-slide-drawer-brutal"
            style={{
              borderTop: '2px solid var(--color-text-primary)',
              padding: 'var(--space-4)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
              backgroundColor: 'var(--color-surface)'
            }}
          >
            {navLinks.map((link) => {
              return (
                <a 
                  key={link.name} 
                  href={link.anchor}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: 'var(--font-heading-mono)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-text-primary)',
                    border: '1px solid var(--color-border)',
                    padding: '12px var(--space-3)',
                    backgroundColor: 'var(--color-bg)',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-text-primary)';
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-subtle)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.backgroundColor = 'var(--color-bg)';
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
              style={{
                width: '100%',
                marginTop: 'var(--space-2)',
                fontFamily: 'var(--font-heading-mono)',
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                backgroundColor: 'var(--color-accent)',
                color: '#070709',
                border: '2px solid var(--color-text-primary)',
                boxShadow: '4px 4px 0px var(--color-text-primary)',
                padding: '12px 16px',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-2px, -2px)';
                e.currentTarget.style.boxShadow = '6px 6px 0px var(--color-text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-text-primary)';
              }}
            >
              Free Operations Audit
            </button>
          </div>
        )}
      </header>
      
      {/* Brutalist styling variables & hover definitions */}
      <style>{`
        .desktop-only { display: none; }
        @media (min-width: 768px) {
          .desktop-only { display: inline-flex; }
          .mobile-hamburger-brutal { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-links { display: none !important; }
          
          /* Mobile style overrides with !important to defeat inline styles */
          .mobile-header-container {
            top: 8px !important;
            width: calc(100% - 16px) !important;
          }
          .mobile-header-wrapper {
            box-shadow: 4px 4px 0px var(--color-text-primary) !important;
          }
          .mobile-header-inner {
            height: 52px !important;
            padding-inline: var(--space-3) !important;
          }
          .mobile-logo {
            height: 20px !important;
          }
          .mobile-controls-gap {
            gap: var(--space-2) !important;
          }
          .mobile-hamburger-brutal {
            width: 32px !important;
            height: 32px !important;
          }
          .mobile-hamburger-brutal svg {
            width: 16px !important;
            height: 16px !important;
          }
          .mobile-slide-drawer-brutal {
            padding: var(--space-3) !important;
            gap: var(--space-2) !important;
          }
        }
        
        /* Brutalist link hover effects */
        .nav-anchor-brutal:hover {
          color: var(--color-text-primary) !important;
          background-color: var(--color-surface-subtle);
          border-color: var(--color-text-primary);
          box-shadow: 2px 2px 0px var(--color-text-primary);
          transform: translate(-1px, -1px);
        }
        
        .mobile-slide-drawer-brutal {
          animation: slideDownBrutal 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: top;
        }
        
        @keyframes slideDownBrutal {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};
