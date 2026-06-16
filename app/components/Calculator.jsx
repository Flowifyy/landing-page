"use client";

import React, { useState } from 'react';

const formatCurrency = (val) => `₹${val.toLocaleString('en-IN')}`;

export const Calculator = ({ onOpenAudit }) => {
  const [orderVolume, setOrderVolume] = useState(5000);
  const [channels, setChannels] = useState({
    shopify: true,
    amazon: true,
    myntra: false,
    shiprocket: true,
    whatsapp: true
  });

  const handleToggleChannel = (key) => {
    setChannels((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 1. Calculate costs: Manual is ₹60/order, Automated is ₹12/order
  const manualCost = orderVolume * 60;
  const automatedCost = orderVolume * 12;
  const monthlySavings = manualCost - automatedCost;
  const annualSavings = monthlySavings * 12;

  // 2. Set diagnostics verdicts based on order volume
  let verdictTitle = 'SYSTEM STATE: STEADY';
  let verdictColor = 'var(--color-accent)';
  let verdictAdvice = '';

  if (orderVolume <= 1000) {
    verdictColor = 'var(--color-accent)';
    verdictTitle = 'SCALE SCALE: BOUTIQUE BRAND';
    verdictAdvice = `Friction Rating: Low. Manual operations are still manageable at ${orderVolume} orders/month. However, transitioning to stock syncs and dispatch automation will still save you up to ${formatCurrency(annualSavings)}/yr in overhead and errors.`;
  } else if (orderVolume <= 5000) {
    verdictColor = 'var(--color-warning)';
    verdictTitle = 'SCALE SCALE: GROWING BRAND';
    verdictAdvice = `Friction Rating: Moderate. At ${orderVolume.toLocaleString()} orders/month, manual copy-pasting addresses and stock counts creates frequent oversells. Automating Shiprocket and stock syncing will plug up to ${formatCurrency(annualSavings)}/yr in leaks.`;
  } else if (orderVolume <= 15000) {
    verdictColor = 'var(--color-danger)';
    verdictTitle = 'SCALE SCALE: HIGH-GROWTH BRAND';
    verdictAdvice = `Friction Rating: High. Handing ${orderVolume.toLocaleString()} orders/month manually is a major operational drain. Your staff is likely drowning in Shiprocket label creation and WhatsApp support chats. Syncing APIs saves ${formatCurrency(annualSavings)}/yr.`;
  } else {
    verdictColor = 'var(--color-danger)';
    verdictTitle = 'SCALE SCALE: CRITICAL OVERLOAD';
    verdictAdvice = `Friction Rating: Critical. Processing ${orderVolume.toLocaleString()}+ orders/month manually causes severe shipping delays, high support tickets, and lost revenue. Upgrading to real-time sync engines saves over ${formatCurrency(annualSavings)}/yr.`;
  }

  // Circular gauge circumference
  const circumference = 440;
  // Cost reduction efficiency score is always 80% (60 to 12 is 80% reduction)
  const efficiencyScore = 80;
  const strokeDashoffset = circumference - (circumference * efficiencyScore) / 100;

  return (
    <section id="audit-tool" style={{ borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Header Block */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2 
            style={{
              fontSize: 'var(--font-size-h2)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-2)'
            }}
          >
            Calculate how much <span className="editorial-serif">time and money you are losing</span>
          </h2>
          <p style={{ maxWidth: '520px', fontSize: 'var(--font-size-sm)' }}>
            Processing orders manually, managing stock on spreadsheets, and manually typing customer dispatches leaks profit. Calculate your savings below.
          </p>
        </div>

        {/* Dynamic visual grid dashboard */}
        <div className="grid-layout" style={{ alignItems: 'start' }}>
          
          {/* Left panel: questionnaire inputs */}
          <div className="card-premium" style={{ backgroundColor: 'var(--color-surface)' }}>
            <h3 style={{ fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>
              Order Volume & Stack Inputs
            </h3>
            
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              
              {/* Order Volume Slider */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="volume-range" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-text-secondary)' }}>
                    Monthly Order Volume
                  </label>
                  <span style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                    {orderVolume.toLocaleString()} orders
                  </span>
                </div>
                
                <input 
                  type="range" 
                  id="volume-range"
                  min="500" 
                  max="50000" 
                  step="500"
                  value={orderVolume} 
                  onChange={(e) => setVolumeVolumeSafe(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '6px',
                    backgroundColor: 'var(--color-surface-subtle)',
                    borderRadius: '3px',
                    outline: 'none',
                    cursor: 'pointer',
                    accentColor: 'var(--color-accent)'
                  }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-heading-mono)', fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
                  <span>500 orders</span>
                  <span>25,000 orders</span>
                  <span>50,000 orders</span>
                </div>
              </div>

              {/* Toggles for Sales Channels & Shipping */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-2)' }}>
                <span 
                  style={{
                    fontFamily: 'var(--font-heading-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: 'var(--color-text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Configure your automation blueprint nodes:
                </span>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                  {[
                    { key: 'shopify', label: 'Shopify Store' },
                    { key: 'amazon', label: 'Amazon Sync' },
                    { key: 'myntra', label: 'Myntra Sync' },
                    { key: 'shiprocket', label: 'Shiprocket Dispatch' },
                    { key: 'whatsapp', label: 'WhatsApp AI Bot' }
                  ].map((item) => (
                    <label 
                      key={item.key} 
                      style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                        cursor: 'pointer',
                        border: `1.5px solid ${channels[item.key] ? 'var(--color-accent)' : 'var(--color-border)'}`,
                        padding: '8px 12px',
                        backgroundColor: channels[item.key] ? 'var(--color-accent-muted)' : 'transparent',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        transition: 'border-color var(--transition-fast), background-color var(--transition-fast)'
                      }}
                      className="checkbox-card-lbl"
                    >
                      <input 
                        type="checkbox" 
                        checked={channels[item.key]}
                        onChange={() => handleToggleChannel(item.key)}
                        style={{ accentColor: 'var(--color-accent)' }}
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Estimated overhead information */}
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'var(--space-3)',
                  borderTop: '1px solid var(--color-border)',
                  paddingTop: 'var(--space-3)',
                  fontFamily: 'var(--font-heading-mono)',
                  fontSize: 'var(--font-size-sm)'
                }}
              >
                <span>ESTIMATED OPERATIONAL EFFICIENCY:</span>
                <span style={{ fontWeight: 800, color: 'var(--color-accent)', fontSize: '1.2rem' }}>
                  +{efficiencyScore}% UP
                </span>
              </div>
            </form>
          </div>

          {/* Right panel: cost ledger reports & gauge dashboard */}
          <div 
            className="card-premium"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-text-primary)',
              borderWidth: '2px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
              boxShadow: '8px 8px 0px var(--color-text-primary)'
            }}
          >
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '2px solid var(--color-text-primary)',
                paddingBottom: '12px'
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '0.65rem', color: 'var(--color-text-primary)', letterSpacing: '0.05em', fontWeight: 800 }}>
                ANNUAL LOSS REPORT
              </h4>
              
              <span 
                style={{
                  fontFamily: 'var(--font-heading-mono)',
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  backgroundColor: verdictColor,
                  color: '#070709',
                  padding: '2px 6px',
                  borderRadius: '1px'
                }}
              >
                POTENTIAL SAVINGS OPPORTUNITY
              </span>
            </div>

            {/* Circular Gauge + Ledger Grid Layout */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: 'var(--space-4)',
                alignItems: 'center'
              }}
            >
              {/* Dynamic SVG Radial Gauge */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-sm)',
                  position: 'relative',
                  width: '140px',
                  height: '140px',
                  marginInline: 'auto'
                }}
              >
                <svg viewBox="0 0 160 160" style={{ width: '100px', height: '100px', transform: 'rotate(-90deg)' }}>
                  <circle 
                    cx="80" 
                    cy="80" 
                    r="70" 
                    fill="transparent" 
                    stroke="var(--color-border)"
                    strokeWidth="8"
                  />
                  <circle 
                    cx="80" 
                    cy="80" 
                    r="70" 
                    fill="transparent" 
                    stroke="var(--color-accent)"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset var(--transition-slow)' }}
                  />
                </svg>
                <div 
                  style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-accent)' }}>
                    -{efficiencyScore}%
                  </span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.55rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Cost cut
                  </span>
                </div>
              </div>

              {/* Cost ledger readout */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontFamily: 'var(--font-heading-mono)',
                  fontSize: '0.8rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border)', paddingBottom: '4px' }}>
                  <span>MANUAL OPS COST:</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-danger)' }}>
                    {formatCurrency(manualCost)}/mo
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border)', paddingBottom: '4px' }}>
                  <span>AUTOMATED OPS COST:</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>
                    {formatCurrency(automatedCost)}/mo
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border)', paddingBottom: '4px' }}>
                  <span>ESTIMATED SAVINGS:</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>
                    {formatCurrency(monthlySavings)}/mo
                  </span>
                </div>
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '4px',
                    marginTop: '8px',
                    padding: '12px',
                    backgroundColor: 'color-mix(in srgb, var(--color-accent) 8%, transparent)',
                    border: '1.5px solid var(--color-accent)',
                  }}
                >
                  <span style={{ fontWeight: 800, fontSize: '0.62rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>ESTIMATED ANNUAL SAVINGS</span>
                  <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--color-accent)', textShadow: '0 0 8px rgba(16, 185, 129, 0.2)', fontFamily: 'var(--font-heading-mono)' }}>
                    {formatCurrency(annualSavings)}/yr
                  </span>
                </div>
              </div>
            </div>

            {/* Diagnostic Advice */}
            <div 
              style={{
                border: '1px solid var(--color-border)',
                padding: 'var(--space-3)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-bg)',
                minHeight: '84px'
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-sm)', fontWeight: 800, color: verdictColor, transition: 'color var(--transition-normal)' }}>
                {verdictTitle}
              </h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', marginTop: '4px', lineHeight: 1.4 }}>
                {verdictAdvice}
              </p>
            </div>

            {/* Claim Free Operations Blueprint CTA */}
            <button 
              onClick={() => onOpenAudit(formatCurrency(annualSavings))}
              className="btn-core btn-pixel-brutal"
              style={{ width: '100%', paddingBlock: '12px', fontSize: 'var(--font-size-sm)', textAlign: 'center', fontWeight: 800 }}
            >
              Claim Free Operations Blueprint →
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .checkbox-card-lbl:hover {
          border-color: var(--color-border-high) !important;
        }
      `}</style>
    </section>
  );

  function setVolumeVolumeSafe(val) {
    if (isNaN(val)) return;
    setOrderVolume(val);
  }
};
