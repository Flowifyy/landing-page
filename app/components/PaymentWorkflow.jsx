import React from 'react';

export const PaymentWorkflow = () => {
  return (
    <section 
      id="payment-workflow" 
      style={{
        paddingTop: 'var(--space-8)',
        paddingBottom: 'var(--space-8)',
        borderBottom: '1px solid var(--color-border)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <div className="grid-layout" style={{ alignItems: 'center' }}>
          {/* Left Side: SVG Illustration */}
          <div className="fade-in-staged" style={{ animationDelay: '0.2s', display: 'flex', justifyContent: 'center' }}>
            <div 
              className="card-premium"
              style={{
                width: '100%',
                maxHeight: '450px',
                padding: 'var(--space-4)',
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-text-primary)',
                borderWidth: '2px',
                boxShadow: '8px 8px 0px var(--color-text-primary)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'none', /* Disable hover translate for this graphic container */
                cursor: 'default'
              }}
            >
              <img 
                src="/home/3e5ab138-1163-11ee-bef7-d79ccf7d7698.svg" 
                alt="Payment Workflow Automation Diagram" 
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '380px',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>

          {/* Right Side: Editorial Heading Copy */}
          <div className="fade-in-staged" style={{ animationDelay: '0.1s' }}>
            <h2 
              style={{
                fontSize: 'var(--font-size-hero)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-3)',
                color: 'var(--color-text-primary)'
              }}
            >
              We automate your <span className="editorial-serif" style={{ color: 'var(--color-accent)' }}>whole payment</span> workflow.
            </h2>

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
              Stop manual reconciliation, invoicing, and customer follow-ups. Flowily connects directly with your banks, payment gateways, and accounting ledgers to sync status dynamically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
