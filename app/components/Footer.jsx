import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        backgroundColor: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        paddingBlock: 'var(--space-6)',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-secondary)',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-5)',
            marginBottom: 'var(--space-6)'
          }}
          className="footer-grid-chassis"
        >
          {/* Brand Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <a 
              href="#hero" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                color: 'var(--color-text-primary)',
                textDecoration: 'none'
              }}
            >
              <span 
                style={{ 
                  fontFamily: 'LogoFont',
                  fontSize: '2.6rem',
                  lineHeight: 1,
                  fontWeight: 'normal',
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.02em',
                  textTransform: 'none'
                }}
              >
                flowify.agency
              </span>
            </a>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
              Flowify engineers high-efficiency operational software, Tally ERP integrations, WhatsApp automations, and brand-amplification platforms for Indian businesses. We replace manual bottlenecks with persistent, self-healing code.
            </p>
          </div>

          {/* Workflow Layers */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Engine Classes
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
              <li><a href="#engines" className="ft-lnk">1. Attract</a></li>
              <li><a href="#engines" className="ft-lnk">2. Convert</a></li>
              <li><a href="#engines" className="ft-lnk">3. Deliver</a></li>
              <li><a href="#engines" className="ft-lnk">4. Retain</a></li>
            </ul>
          </div>

          {/* Integration Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Integration Relays
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
              <li>Tally ERP API Connect</li>
              <li>WhatsApp Business Cloud API</li>
              <li>Zoho Flow & Zoho CRM Relay</li>
              <li>Razorpay POS Webhooks</li>
              <li>IndiaMART & Justdial Ingest</li>
            </ul>
          </div>

          {/* Local Offices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Systems Chassis
            </h4>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.6 }}>
              Flowify Agency India Ltd.<br />
              Tier-1 Systems Dev Center: Pune / Delhi / Surat<br />
              <span style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '0.7rem', color: 'var(--color-accent)' }}>
                NODE: BLR_ACTIVE_09
              </span>
            </p>
          </div>
        </div>

        {/* Lower row details */}
        <div 
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: 'var(--space-4)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-3)',
            fontFamily: 'var(--font-heading-mono)',
            fontSize: '0.65rem'
          }}
        >
          <div>
            © {currentYear} FLOWIFY AGENCY // ALL PIPELINES PROTECTED.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>GSTIN: 27AAFCN8012E1ZS</span>
            <span>SECURERelay: active</span>
          </div>
        </div>
      </div>

      <style>{`
        .ft-lnk {
          transition: color var(--transition-fast);
        }
        .ft-lnk:hover {
          color: var(--color-text-primary) !important;
        }
      `}</style>
    </footer>
  );
};
