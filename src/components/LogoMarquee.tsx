import React from 'react';

interface Partner {
  name: string;
  emoji: string;
  color: string;
  tag: string;
}

const partners: Partner[] = [
  { name: 'Tally ERP', emoji: '📊', color: '#10B981', tag: 'FINANCE' },
  { name: 'Razorpay', emoji: '💳', color: '#0A84FF', tag: 'GATEWAY' },
  { name: 'Zoho CRM', emoji: '📦', color: '#F59E0B', tag: 'PIPELINES' },
  { name: 'WhatsApp Biz', emoji: '📱', color: '#25D366', tag: 'COMMUNICATION' },
  { name: 'Google Maps', emoji: '📍', color: '#EF4444', tag: 'LOCAL SEO' },
  { name: 'Justdial', emoji: '🔍', color: '#FF7A00', tag: 'LEAD GENERATION' },
  { name: 'Shiprocket', emoji: '🚚', color: '#64D2FF', tag: 'LOGISTICS' },
  { name: 'Shopify India', emoji: '🛍️', color: '#96bf48', tag: 'E-COMMERCE' },
  { name: 'Meta Business', emoji: '📰', color: '#1877F2', tag: 'GROWTH ADS' },
  { name: 'IndiaMART', emoji: '🏭', color: '#3B5998', tag: 'B2B INGEST' }
];

export const LogoMarquee: React.FC = () => {
  // Duplicate array once for seamless infinite loop wrap-around
  const list = [...partners, ...partners];

  return (
    <div 
      className="logo-marquee-ribbon"
      style={{
        borderBlock: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
        paddingBlock: 'var(--space-4)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)'
      }}
    >
      <div 
        style={{
          fontFamily: 'var(--font-heading-mono)',
          fontSize: '0.6rem',
          fontWeight: 700,
          color: 'var(--color-text-muted)',
          letterSpacing: '0.15em',
          textAlign: 'center',
          textTransform: 'uppercase',
          marginBottom: 'var(--space-1)'
        }}
      >
        ACTIVE INTEGRATION NODES // MULTI-CHANNEL SYNC
      </div>

      <div 
        className="marquee-viewport"
        style={{
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)'
        }}
      >
        <div 
          className="marquee-track"
          style={{
            display: 'flex',
            gap: 'var(--space-4)',
            width: 'max-content',
            animation: 'marqueeLoop 24s linear infinite',
            willChange: 'transform'
          }}
        >
          {list.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`}
              className="marquee-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-sm)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'border-color var(--transition-fast)'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{partner.emoji}</span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 800,
                    color: 'var(--color-text-primary)'
                  }}
                >
                  {partner.name}
                </span>
                <span 
                  style={{
                    fontFamily: 'var(--font-heading-mono)',
                    fontSize: '0.5rem',
                    color: partner.color,
                    letterSpacing: '0.05em'
                  }}
                >
                  {partner.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marqueeLoop {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - (var(--space-4) / 2))); }
        }
        .marquee-item:hover {
          border-color: var(--color-border-high) !important;
        }
      `}</style>
    </div>
  );
};
