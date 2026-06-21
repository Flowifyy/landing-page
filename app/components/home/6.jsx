"use client";

import React from 'react';
import { Mail, Calendar, ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

export const Section6 = () => {
  const [revealRef, isVisible] = useReveal(0.1);

  return (
    <section
      id="contact-section"
      ref={revealRef}
      className={`reveal ${isVisible ? 'visible' : ''} mobile-contact-section`}
      style={{
        paddingTop: 'calc(var(--space-8) * 1.5)',
        paddingBottom: 'calc(var(--space-8) * 1.5)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Mobile Header Block (Visible only on mobile) */}
        <div 
          className="mobile-header-block" 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center' 
          }}
        >
          <span className="section-tag" style={{ marginBottom: 'var(--space-3)' }}>
            Get In Touch
          </span>
          <h2
            className="contact-heading"
            style={{
              fontSize: '2.0rem',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}
          >
            Any Queries? <span className="editorial-serif" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading-serif)' }}>Contact Us</span>
          </h2>
          <div style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)', marginBottom: 'var(--space-4)' }} />
          <p 
            className="contact-description"
            style={{ 
              fontSize: 'var(--font-size-body)', 
              lineHeight: 'var(--line-height-body)', 
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--space-5)'
            }}
          >
            You can have any question or set up a meeting for your current workflow to improve your efficiency.
          </p>
        </div>

        <div className="contact-grid-layout">
          
          {/* Contact Details (Left Column) */}
          <div 
            className="contact-text-container"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}
          >
            {/* Desktop Header Block (Visible only on desktop) */}
            <div className="desktop-header-block">
              <span className="section-tag" style={{ marginBottom: 'var(--space-3)' }}>
                Get In Touch
              </span>
              <h2
                className="contact-heading"
                style={{
                  fontSize: 'var(--font-size-h2)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  marginBottom: 'var(--space-4)',
                  color: 'var(--color-text-primary)'
                }}
              >
                Any Queries? <span className="editorial-serif" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading-serif)' }}>Contact Us</span>
              </h2>
              <div style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)', marginBottom: 'var(--space-5)' }} />
              <p 
                className="contact-description"
                style={{ 
                  fontSize: 'var(--font-size-body)', 
                  lineHeight: 'var(--line-height-body)', 
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--space-5)',
                  maxWidth: '520px'
                }}
              >
                You can have any question or set up a meeting for your current workflow to improve your efficiency.
              </p>
            </div>

            {/* Email Contact Block */}
            <div 
              className="contact-email-block"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                marginBottom: 'var(--space-5)',
                padding: '12px 18px',
                border: '1.5px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                fontFamily: 'var(--font-heading-mono)',
                fontSize: '1rem',
                fontWeight: 600,
                width: '100%'
              }}
            >
              <Mail size={18} style={{ color: 'var(--color-accent)' }} />
              <a 
                href="mailto:flowifyy.agency@gmail.com?subject=Operational Inquiry" 
                style={{ color: 'var(--color-text-primary)', textDecoration: 'none' }}
                className="hover-underline"
              >
                flowifyy.agency@gmail.com
              </a>
            </div>

            {/* Call to Action Button */}
            <a 
              href="mailto:flowifyy.agency@gmail.com?subject=Set Up a Meeting Inquiry"
              className="btn-core btn-pixel-brutal contact-btn"
              style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                gap: '8px',
                padding: '12px 24px',
                fontSize: '0.85rem'
              }}
            >
              <Calendar size={16} />
              Set Up a Meeting <ArrowRight size={14} />
            </a>
          </div>

          {/* Animated SVG Graphic (Right Column) */}
          <div className="contact-svg-container" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/idk/Question.svg" 
              alt="Queries Illustration" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxWidth: '440px', 
                display: 'block' 
              }} 
            />
          </div>

        </div>
      </div>

      <style>{`
        .contact-grid-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: var(--space-6);
          align-items: center;
        }

        .mobile-header-block {
          display: none;
        }

        .desktop-header-block {
          display: block;
        }

        .contact-email-block {
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .contact-email-block:hover {
          border-color: var(--color-text-primary);
          box-shadow: 4px 4px 0px var(--color-text-primary);
        }
        .hover-underline:hover {
          text-decoration: underline !important;
          text-underline-offset: 4px;
        }
        
        @media (max-width: 767px) {
          .mobile-contact-section {
            padding-top: var(--space-5) !important;
            padding-bottom: var(--space-5) !important;
          }
          
          .mobile-header-block {
            display: block !important;
            margin-bottom: var(--space-4) !important;
          }

          .desktop-header-block {
            display: none !important;
          }

          .contact-grid-layout {
            grid-template-columns: 1fr 1fr !important;
            gap: 16px !important;
            align-items: center !important;
          }

          .contact-heading {
            font-size: 1.8rem !important;
            line-height: 1.15 !important;
            margin-bottom: 8px !important;
          }

          .contact-description {
            font-size: 11px !important;
            line-height: 1.4 !important;
            margin-bottom: 0 !important;
          }

          .contact-email-block {
            font-size: 7.5px !important;
            padding: 4px 6px !important;
            margin-bottom: 8px !important;
            gap: 4px !important;
            border-width: 1px !important;
            width: 100% !important;
          }
          .contact-email-block svg {
            width: 9px !important;
            height: 9px !important;
          }
          .contact-btn {
            font-size: 7.5px !important;
            padding: 6px 10px !important;
            gap: 4px !important;
            border-width: 1.5px !important;
            box-shadow: 2px 2px 0px var(--color-text-primary) !important;
            width: 100% !important;
            text-align: center !important;
          }
          .contact-btn:hover {
            box-shadow: 1px 1px 0px var(--color-text-primary) !important;
            transform: translate(1px, 1px) !important;
          }
          .contact-btn svg {
            width: 9px !important;
            height: 9px !important;
          }
          .contact-svg-container img {
            width: 140px !important;
            max-width: none !important;
            transform: translateX(10px) !important;
          }
        }
      `}</style>
    </section>
  );
};
