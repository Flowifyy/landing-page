import React, { useState } from 'react';

interface EngineService {
  num: string;
  title: string;
  desc: string;
  stack: string;
}

const engines: EngineService[] = [
  {
    num: '01',
    title: 'Custom Apps & Portals',
    desc: 'Software built exactly for your business. No more adjusting your daily operations around rigid, expensive off-the-shelf software. We build simple custom portals, admin dashboards, and mobile apps so your team can manage orders, inventory, and staff in one clean screen.',
    stack: 'React / Next.js / PostgreSQL / Zoho Creator / Custom Admin Panels'
  },
  {
    num: '02',
    title: 'Tally & WhatsApp Sync',
    desc: 'Stop manual copy-paste between systems. We connect your daily business tools—Tally, WhatsApp Business, Zoho, and spreadsheets—so customer billing, inventory levels, and lead updates sync automatically in the background without human errors.',
    stack: 'WhatsApp Business API / Tally API / Zoho Flow / Make / Zapier'
  },
  {
    num: '03',
    title: 'Leads & Payment Checkouts',
    desc: 'Get high-intent customer inquiries flowing directly to your sales team. We launch high-converting Meta & Instagram campaigns, auto-sync Google Maps and Justdial profiles, and connect Razorpay or Shiprocket checkouts so customers can book and pay instantly.',
    stack: 'Meta & Instagram Ads / Google Profile Sync / Razorpay Checkout / Shiprocket'
  },
  {
    num: '04',
    title: 'Social Media Auto-Post',
    desc: 'Keep your business profiles active with zero effort. We build automated social dashboards that format and post your promotions, deals, and updates across Instagram, LinkedIn, and Google Business simultaneously, keeping your customers engaged while you focus on operations.',
    stack: 'WhatsApp Status / Meta API / Google Business Profile / Justdial / Custom Social Dashboards'
  }
];

const engineBorderColors = ['#F59E0B', '#10B981', '#EF4444', '#0A84FF'];

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="engines" style={{ borderBottom: '1px solid var(--color-border)', paddingBlock: 'var(--space-8)' }}>
      <div className="container">
        <div className="services-container-grid">
          {/* Left Sticky Pane */}
          <div className="services-sticky-header">
            <h2 
              style={{
                fontSize: 'var(--font-size-h2)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: 'var(--space-3)'
              }}
            >
              Four ways we automate your <span className="editorial-serif" style={{ color: 'var(--color-accent)' }}>daily business chaos</span>.
            </h2>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '440px' }}>
              We don't sell generic software subscriptions. We build custom operations setups that work exactly the way you do. Hover over each setup below to see what it handles.
            </p>
          </div>
          
          {/* Right Pane: Wide Interactive Strip Accordion */}
          <div className="services-stack">
            {engines.map((engine, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;
              const activeColor = engineBorderColors[index];

              return (
                <div 
                  key={engine.num} 
                  className={`engine-strip ${isHovered ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    opacity: isAnyHovered && !isHovered ? 0.35 : 1,
                    transform: isHovered ? 'scale(1.01) translateY(-2px)' : 'none',
                    borderColor: isHovered ? activeColor : 'var(--color-border)',
                    boxShadow: isHovered ? `0 12px 32px rgba(0, 0, 0, 0.2), inset 4px 0 0 ${activeColor}` : 'none'
                  }}
                >
                  <div className="engine-strip-top">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <span 
                        className="engine-index"
                        style={{
                          color: isHovered ? activeColor : 'var(--color-text-muted)',
                        }}
                      >
                        {engine.num}
                      </span>
                      <h3 className="engine-title">{engine.title}</h3>
                    </div>
                    <div className="engine-indicator-arrow" style={{ transform: isHovered ? 'rotate(45deg)' : 'none', color: isHovered ? activeColor : 'var(--color-text-muted)' }}>
                      →
                    </div>
                  </div>

                  <div className="engine-strip-body" style={{ maxHeight: isHovered ? '600px' : '0px' }}>
                    <div className="engine-strip-content">
                      <p className="engine-desc">{engine.desc}</p>
                      <div className="engine-stack-wrapper">
                        <span className="engine-stack-label" style={{ color: activeColor }}>WHAT WE USE:</span>
                        <p className="engine-stack-tech">{engine.stack}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .services-container-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-6);
          align-items: start;
        }

        .services-sticky-header {
          position: relative;
        }

        .services-stack {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .engine-strip {
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: var(--space-4) var(--space-5);
          transition: all var(--transition-normal);
          cursor: pointer;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .engine-strip-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .engine-index {
          font-family: var(--font-heading-mono);
          font-weight: 700;
          font-size: 0.85rem;
          transition: color var(--transition-normal);
        }

        .engine-title {
          font-family: var(--font-heading);
          font-size: clamp(1.1rem, 1rem + 1vw, 1.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .engine-indicator-arrow {
          font-family: var(--font-heading-mono);
          font-size: 1.2rem;
          transition: all var(--transition-normal);
        }

        .engine-strip-body {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .engine-strip-content {
          padding-top: var(--space-4);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .engine-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          margin: 0;
        }

        .engine-stack-wrapper {
          border-top: 1px solid var(--color-border);
          padding-top: var(--space-3);
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .engine-stack-label {
          font-family: var(--font-heading-mono);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .engine-stack-tech {
          font-family: var(--font-heading-mono);
          font-size: 0.75rem;
          color: var(--color-text-muted);
          margin: 0;
        }

        @media (min-width: 860px) {
          .services-container-grid {
            grid-template-columns: 4.5fr 5.5fr;
            gap: var(--space-7);
          }

          .services-sticky-header {
            position: sticky;
            top: 120px;
          }
        }
      `}</style>
    </section>
  );
};
