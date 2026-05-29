import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const FrictionFlow: React.FC = () => {
  return (
    <section id="friction" style={{ position: 'relative' }}>
      <div className="container">
        {/* Editorial Heading */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2 
            style={{
              fontSize: 'var(--font-size-h2)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-2)'
            }}
          >
            Manual operations are <span className="editorial-serif" style={{ color: 'var(--color-danger)' }}>holding you back</span>. Here's why.
          </h2>
          <p style={{ maxWidth: '520px', fontSize: 'var(--font-size-sm)' }}>
            Most business owners try to solve daily operations chaos by hiring more staff. We solve it permanently by making your software work for you.
          </p>
        </div>
        
        {/* Comparison grid */}
        <div className="grid-layout" style={{ alignItems: 'start' }}>
          {/* Card A: Friction Status Quo */}
          <div className="card-premium" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface-subtle)' }}>
            <div 
              style={{
                fontFamily: 'var(--font-heading-mono)',
                fontSize: '0.65rem',
                fontWeight: 700,
                color: 'var(--color-danger)',
                border: '1px solid var(--color-border)',
                padding: '2px 6px',
                display: 'inline-block',
                marginBottom: 'var(--space-4)',
                backgroundColor: 'var(--color-surface)'
              }}
            >
              DAILY CHAOS // MANUAL WORK
            </div>
            
            <h3 style={{ fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
              The Old Way (Manual Chaos)
            </h3>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[
                { title: 'Manual Lead Copying', desc: 'Copying customer inquiries from Justdial, Google Maps, WhatsApp, and IndiaMART into Excel sheets one-by-one.' },
                { title: 'Tally Double-Entry', desc: 'Staff wasting hours typing Razorpay payments, customer details, and invoices manually into Tally ERP.' },
                { title: 'Missed & Delayed Leads', desc: 'Justdial and Google inquiries sit unanswered for hours, letting hot leads slip away to faster competitors.' },
                { title: 'Chasing Staff for Updates', desc: 'Calling and messaging staff constantly to track order statuses, pending bills, and customer updates.' }
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'start' }}>
                  <XCircle size={18} style={{ color: 'var(--color-danger)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* VS Divider */}
          <div 
            className="vs-divider"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-3)'
            }}
          >
            <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-border)' }} />
            <span style={{
              fontFamily: 'var(--font-heading-mono)',
              fontSize: '0.7rem',
              fontWeight: 800,
              color: 'var(--color-text-muted)',
              padding: '4px 12px',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-bg)'
            }}>VS</span>
            <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-border)' }} />
          </div>
 
          {/* Card B: Flowify Solution */}
          <div className="card-premium" style={{ borderColor: 'var(--color-accent)', backgroundColor: 'var(--color-surface)', boxShadow: '0 8px 32px rgba(16, 185, 129, 0.08)' }}>
            <div 
              style={{
                fontFamily: 'var(--font-heading-mono)',
                fontSize: '0.65rem',
                fontWeight: 700,
                color: 'var(--color-accent)',
                border: '1px solid var(--color-accent)',
                padding: '2px 6px',
                display: 'inline-block',
                marginBottom: 'var(--space-4)',
                backgroundColor: 'var(--color-surface-subtle)'
              }}
            >
              FLOWIFY WAY // 100% AUTOMATED
            </div>
            
            <h3 style={{ fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>
              The Flowify Way (Automated Operations)
            </h3>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[
                { title: '100% Auto-Capture Leads', desc: 'Justdial, IndiaMART, and website leads route instantly to your sales team with automatic WhatsApp alerts.' },
                { title: 'Automatic Tally Sync', desc: 'Razorpay and website payments automatically create correct invoices and sync customer files directly in Tally ERP.' },
                { title: 'Instant Auto-WhatsApp replies', desc: 'Inquiries get an automatic WhatsApp welcome message and booking link within 3 minutes, securing customers first.' },
                { title: 'All-in-One Live Dashboard', desc: 'A single, clean screen displays real-time orders, pending staff tasks, and collections so you always know what\'s happening.' }
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'start' }}>
                  <CheckCircle size={18} style={{ color: 'var(--color-accent)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .vs-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
