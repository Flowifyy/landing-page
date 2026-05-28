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
    title: 'Bespoke Applications',
    desc: 'Proprietary interfaces tailored to your team. We design and construct clean web and mobile applications. Stop bending your business around rigid off-the-shelf software; we write custom portals, databases, and admin dashboards designed strictly for your daily operations.',
    stack: 'React / Next.js / Node.js / PostgreSQL / Zoho Creator'
  },
  {
    num: '02',
    title: 'Intelligent Automations',
    desc: 'Resilient API relays replacing manual copy-paste. We link your daily software tools—Tally, Zoho, WhatsApp—with silent, self-healing pipelines that autonomously sync customer billing, inventory registers, and lead files.',
    stack: 'WhatsApp Business API / Make / Zapier / Zoho Flow / Tally API'
  },
  {
    num: '03',
    title: 'Growth Marketing',
    desc: 'Social media campaigns and integrated ad funnels that capture high-intent prospects first. We construct high-converting Instagram & Meta campaigns, programmatic SEO networks, automated Google Maps profile optimization, integrated Razorpay checkouts, and custom analytics dashboards that turn traffic into bookings.',
    stack: 'Meta Ads Manager / Instagram API / Google Analytics / Search Console / Razorpay / Shiprocket'
  },
  {
    num: '04',
    title: 'Social Engine',
    desc: 'Automated brand syndication dashboards. We structure social media publishing grids that format and post graphics across Instagram, Twitter, and LinkedIn, keeping listings updated with zero human overhead.',
    stack: 'WhatsApp Business API / Meta API / Google Business / Justdial / Custom Automations'
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
              Four operational <span className="editorial-serif" style={{ color: 'var(--color-accent)' }}>engines</span> built for your business.
            </h2>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: '440px' }}>
              We do not sell boxed SaaS subscriptions. We engineer bespoke, resilient operations machinery. Hover over each engine to inspect its schematic.
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

                  <div className="engine-strip-body" style={{ maxHeight: isHovered ? '300px' : '0px' }}>
                    <div className="engine-strip-content">
                      <p className="engine-desc">{engine.desc}</p>
                      <div className="engine-stack-wrapper">
                        <span className="engine-stack-label" style={{ color: activeColor }}>ACTIVE INFRASTRUCTURE:</span>
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
