import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const FrictionFlow = () => {
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
            Manual e-commerce operations are <span className="editorial-serif" style={{ color: 'var(--color-danger)' }}>holding you back</span>. Here&apos;s why.
          </h2>
          <p style={{ maxWidth: '520px', fontSize: 'var(--font-size-sm)' }}>
            Most brands try to solve scale bottlenecks by hiring more customer service and logistics staff. We solve it permanently with automated workflows.
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
                { title: 'Manual Stock Adjustments', desc: 'Logging into Shopify, Amazon, Myntra, and warehouses to edit stock counts one-by-one, risking overselling.' },
                { title: 'Slow Fulfillment Dispatch', desc: 'Staff copying addresses to Shiprocket/Delhivery manually, printing labels, and typing tracking links.' },
                { title: 'Flooded Support Inbox', desc: 'Support agents spent all day manually answering customer chats asking "Where is my order?" (WISMO tickets).' },
                { title: 'Abandoned Cart Leaks', desc: 'Losing 70%+ of potential checkouts by failing to follow up on abandoned baskets and payment failures.' }
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
                { title: 'Real-Time Inventory Sync', desc: 'Automatically adjust stock counts across Shopify, Amazon, and ERPs down to the second to prevent overselling.' },
                { title: 'Instant Shiprocket Dispatch', desc: 'Auto-assign couriers, trigger shipping labels in bulk, and auto-dispatch customer tracking status.' },
                { title: 'WhatsApp AI Deflection', desc: 'Instantly deflect 70%+ of WISMO tickets, return queries, and basic support chats with a connected Shopify AI bot.' },
                { title: 'Automated Recovery Flows', desc: 'Trigger automated WhatsApp recovery messages after cart drops and checkout failures, reclaiming 15%+ revenue.' }
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
