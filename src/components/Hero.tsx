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
              We build the <span className="editorial-serif" style={{ color: 'var(--color-accent)' }}>engines</span> that run your <span className="editorial-serif">business</span>.
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
              <strong>Stop leaking margin on repetitive tasks.</strong> Every hour your staff spends copying Justdial leads, rekeying bills in Tally, or scheduling Instagram bookings manually is capital leaking from your business. Flowify constructs <strong>autonomous API relays</strong> and custom portals to plug these leaks permanently.
            </p>
            
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenAudit}
                className="btn-core btn-pixel-brutal"
                style={{ fontWeight: 800 }}
              >
                Run Workflow Audit →
              </button>
              <a 
                href="#spec-builder" 
                className="btn-core btn-secondary-action"
                style={{ fontWeight: 700 }}
              >
                Explore Engines
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
                { value: '200+', label: 'Automations Built' },
                { value: '₹2.1Cr', label: 'Leaks Plugged' },
                { value: '<3min', label: 'Avg Response Time' }
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
                    fontSize: '0.6rem', 
                    color: 'var(--color-text-muted)', 
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
