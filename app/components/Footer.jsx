import React from 'react';
import dynamic from 'next/dynamic';

const SoftAurora = dynamic(() => import('./SoftAurora'), { ssr: false });

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        backgroundColor: 'color-mix(in srgb, var(--color-bg) 80%, transparent)',
        borderTop: '1px solid var(--color-border)',
        paddingBlock: 'var(--space-6)',
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-secondary)',
        position: 'relative',
        zIndex: 5,
        overflow: 'hidden'
      }}
    >
      {/* WebGL Animated Background */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 1, 
          pointerEvents: 'none', 
          opacity: 0.6
        }}
      >
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1.0}
          color1="#047857"
          color2="#047857"
          noiseFrequency={2.5}
          noiseAmplitude={1.0}
          bandHeight={0.5}
          bandSpread={1.0}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1.0}
          enableMouseInteraction={true}
          mouseInfluence={0.25}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
