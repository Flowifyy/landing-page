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
            Your staff is <span className="editorial-serif" style={{ color: 'var(--color-danger)' }}>burning out</span>. Here's why.
          </h2>
          <p style={{ maxWidth: '520px', fontSize: 'var(--font-size-sm)' }}>
            Most businesses treat operational friction with more hires. We replace the friction itself with automated infrastructure.
          </p>
        </div>
        
        {/* Comparison grid */}
        <div className="grid-layout" style={{ alignItems: 'start' }}>
          {/* Card A: Friction Status Quo */}
          <div className="card-premium" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
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
                backgroundColor: 'var(--color-bg)'
              }}
            >
              SYSTEM FRICTION // HIGH LATENCY
            </div>
            
            <h3 style={{ fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-4)', color: 'var(--color-text-secondary)' }}>
              The Status Quo
            </h3>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[
                { title: 'Manual Lead Syncs', desc: 'Copying customer inquiries from Justdial, Google Maps, WhatsApp, and Instagram into spreadsheets by hand.' },
                { title: 'Siloed Tally & POS', desc: 'Staff re-typing appointment data, Razorpay payments, and Tally invoices across disconnected systems.' },
                { title: 'Delayed WhatsApp Reply', desc: 'Justdial and Instagram inquiries sit unanswered for hours, causing prospects to call competitors.' },
                { title: 'Tedious Promo Updates', desc: 'Hours spent formatting and uploading offers manually across Google Business Profile, Justdial, and Social Media.' }
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
          <div className="card-premium" style={{ borderColor: 'var(--color-accent)', backgroundColor: 'var(--color-surface-subtle)', boxShadow: '0 8px 32px rgba(16, 185, 129, 0.04)' }}>
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
                backgroundColor: 'var(--color-bg)'
              }}
            >
              SYSTEM FLOW // FULL ENGINE SYNC
            </div>
            
            <h3 style={{ fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>
              The Flowify Solution
            </h3>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[
                { title: 'Autonomous Ingest', desc: 'Justdial, WhatsApp, and Instagram inquiries route instantly into Zoho CRM, notifying staff on WhatsApp Business within seconds.' },
                { title: 'Integrated Systems', desc: 'Razorpay payments automatically update Tally ERP, trigger GST-compliant invoices, and sync customer records across all systems.' },
                { title: 'Instant WhatsApp Reply', desc: 'Google Business and Justdial leads trigger automated WhatsApp booking links within 3 minutes, securing bookings first.' },
                { title: 'Programmatic Local Promos', desc: 'One centralized dashboard formats and pushes offers across Google Business Profile, Justdial & Instagram automatically.' }
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
