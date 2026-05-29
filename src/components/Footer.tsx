import React from 'react';

export const Footer: React.FC = () => {
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
              <svg 
                width="110" 
                height="26" 
                viewBox="0 0 40 10" 
                fill="currentColor" 
                style={{ flexShrink: 0, display: 'block' }}
              >
                {/* F */}
                <path d="M0,0 h2 v9 h-2 z M2,0 h4 v2 h-4 z M2,3 h3 v2 h-3 z" />
                {/* l */}
                <path d="M7,0 h2 v9 h-2 z" />
                {/* o */}
                <path d="M10,3 h2 v5 h-2 z M14,3 h2 v5 h-2 z M12,3 h2 v2 h-2 z M12,6 h2 v2 h-2 z" />
                {/* w */}
                <path d="M17,3 h2 v4 h-2 z M23,3 h2 v4 h-2 z M20,5 h2 v2 h-2 z M17,7 h8 v1 h-8 z" />
                {/* i */}
                <path d="M26,3 h2 v5 h-2 z M26,0 h2 v2 h-2 z" />
                {/* f */}
                <path d="M29,3 h4 v2 h-4 z M30,1 h2 v7 h-2 z M31,0 h2 v2 h-2 z" />
                {/* y */}
                <path d="M34,3 h2 v2 h-2 z M38,3 h2 v2 h-2 z M36,5 h2 v2 h-2 z M35,7 h2 v1 h-2 z M34,8 h2 v1 h-2 z M33,9 h2 v1 h-2 z" />
              </svg>
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
              <li><a href="#engines" className="ft-lnk">Bespoke Applications</a></li>
              <li><a href="#engines" className="ft-lnk">Intelligent Automations</a></li>
              <li><a href="#engines" className="ft-lnk">Growth Marketing Grids</a></li>
              <li><a href="#engines" className="ft-lnk">Local Social Engines</a></li>
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
