import React from 'react';
import { Cockpit } from './Cockpit';

interface HeroProps {
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  return (
    <section 
      id="hero" 
      style={{
        paddingTop: 'calc(var(--space-8) * 1.8)',
        paddingBottom: 'var(--space-8)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div className="grid-layout">
          {/* Hero Left: Editorial Heading Copy */}
          <div className="fade-in-staged" style={{ animationDelay: '0.1s' }}>
            
            <h1 
              style={{
                fontSize: 'var(--font-size-hero)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-3)',
                color: 'var(--color-text-primary)'
              }}
            >
              We automate your <span className="editorial-serif" style={{ color: 'var(--color-accent)' }}>daily operations</span> so you can focus on <span className="editorial-serif">growth</span>.
            </h1>

            <div style={{ width: '64px', height: '2px', backgroundColor: 'var(--color-accent)', marginBottom: 'var(--space-3)' }} />
            
            <p 
              style={{
                fontSize: 'var(--font-size-body)',
                fontFamily: 'var(--font-body)',
                color: 'var(--color-text-secondary)',
                fontWeight: 300,
                lineHeight: 1.7,
                marginBottom: 'var(--space-5)'
              }}
            >
              <strong>Stop wasting hours on daily business chaos.</strong> Every hour your staff spends manually copying inquiries from Justdial & IndiaMART, re-keying invoices in Tally, or chasing staff for updates is profit leaking from your pocket. Flowify builds <strong>simple, self-running automations</strong> to handle your daily operations—no coding or technical degrees needed.
            </p>
            
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenAudit}
                className="btn-core btn-pixel-brutal"
                style={{ fontWeight: 800 }}
              >
                Run Operations Audit →
              </button>
              <a 
                href="#build-spec" 
                className="btn-core btn-pixel-brutal"
                style={{ fontWeight: 800 }}
              >
                Explore Custom Setups
              </a>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: 'var(--space-6)', 
              marginTop: 'var(--space-5)',
              paddingTop: 'var(--space-4)',
              borderTop: '1px solid var(--color-border)'
            }}>
              {[
                { value: '200+', label: 'Indian Businesses Automated' },
                { value: '₹2.1Cr+', label: 'Leaks Plugged' },
                { value: '<3 mins', label: 'Leads Captured & Handled' }
              ].map((stat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-heading-mono)', 
                    fontSize: 'clamp(1.1rem, 1rem + 1vw, 1.5rem)', 
                    fontWeight: 800, 
                    color: 'var(--color-accent)',
                    letterSpacing: '-0.02em'
                  }}>{stat.value}</span>
                  <span style={{ 
                    fontFamily: 'var(--font-heading-mono)', 
                    fontSize: 'clamp(0.7rem, 0.65rem + 0.2vw, 0.78rem)', 
                    fontWeight: 700, 
                    color: 'var(--color-text-secondary)', 
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.05em'
                  }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Hero Right: Interactive Dashboard Cockpit */}
          <div className="fade-in-staged" style={{ animationDelay: '0.3s' }}>
            <Cockpit />
          </div>
        </div>
      </div>
    </section>
  );
};
