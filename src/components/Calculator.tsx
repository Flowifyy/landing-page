import React, { useState, useEffect } from 'react';

interface CalculatorProps {
  onOpenAudit: (computedLeak: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenAudit }) => {
  const [painPoints, setPainPoints] = useState({
    sync: true,   // Manual lead syncs
    sheets: true, // Siloed software
    leads: true,  // Slow WhatsApp reply
    social: true, // Manual promotions
    admin: false  // Delayed GST invoicing
  });

  const [hoursWasted, setHoursWasted] = useState(0);
  const [computedScore, setComputedScore] = useState(0);
  const [wastedLabor, setWastedLabor] = useState(0);
  const [leakedLeads, setLeakedLeads] = useState(0);
  const [adminDrain, setAdminDrain] = useState(0);
  const [totalAnnualLeak, setTotalAnnualLeak] = useState(0);

  const [verdictTitle, setVerdictTitle] = useState('SYSTEM STATE: OPTIMIZED');
  const [verdictColor, setVerdictColor] = useState('var(--color-accent)');
  const [verdictAdvice, setVerdictAdvice] = useState('');

  const handleToggle = (key: keyof typeof painPoints) => {
    setPainPoints((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    // 1. Compute wasted hours
    let hours = 0;
    if (painPoints.sync) hours += 5;
    if (painPoints.sheets) hours += 4;
    if (painPoints.leads) hours += 3;
    if (painPoints.social) hours += 4;
    if (painPoints.admin) hours += 6;
    setHoursWasted(hours);

    // 2. Compute checked count
    const checkedCount = Object.values(painPoints).filter(Boolean).length;

    if (checkedCount === 0) {
      setComputedScore(0);
      setWastedLabor(0);
      setLeakedLeads(0);
      setAdminDrain(0);
      setTotalAnnualLeak(0);
      setVerdictTitle('OPERATIONS: STREAMLINED');
      setVerdictColor('var(--color-accent)');
      setVerdictAdvice('Zero operational pain-points flagged. Your business operations are running smoothly with nominal manual overhead.');
      return;
    }

    // 3. Friction score calculations
    const baseScore = checkedCount * 20;
    const compoundFactor = 1 + ((hours - 12) * 0.02);
    const score = Math.min(100, Math.max(1, Math.round(baseScore * compoundFactor)));
    setComputedScore(score);

    // 4. Financial Calculations in INR (₹)
    // Average staff labor cost: ₹200/hr in local Tier 1/2 markets
    const labor = hours * 200 * 4; // Monthly wasted labor
    setWastedLabor(labor);

    let leadsLeak = 0;
    if (painPoints.leads) leadsLeak += 40000;  // lost local bookings
    if (painPoints.sync) leadsLeak += 15000;   // lead sync errors
    if (painPoints.sheets) leadsLeak += 12000; // inventoryPOS blocks
    setLeakedLeads(leadsLeak);

    let admLeak = 0;
    if (painPoints.social) admLeak += 5000;   // scheduling time gaps
    if (painPoints.admin) admLeak += 10000;    // delayed invoicing leaks
    setAdminDrain(admLeak);

    const monthlyLeak = labor + leadsLeak + admLeak;
    const annualLeak = monthlyLeak * 12;
    setTotalAnnualLeak(annualLeak);

    // 5. Diagnostics verdicts
    if (score <= 30) {
      setVerdictColor('var(--color-accent)');
      setVerdictTitle('OPERATIONS: RELATIVELY STEADY');
      setVerdictAdvice(`Friction Rating: Low (${score}%). Your workflow is relatively smooth, but introducing WhatsApp Business auto-replies and Tally syncs will save your staff up to ${hours * 4} hours per month.`);
    } else if (score <= 60) {
      setVerdictColor('var(--color-warning)');
      setVerdictTitle('OPERATIONS: LOSING INQUIRIES');
      setVerdictAdvice(`Friction Rating: Moderate (${score}%). Disconnected software and slow replies to Justdial/Google inquiries are costing you customers. Connecting your lead sources with automated WhatsApp replies will secure clients instantly.`);
    } else if (score <= 80) {
      setVerdictColor('var(--color-danger)');
      setVerdictTitle('OPERATIONS: STAFF BURNOUT');
      setVerdictAdvice(`Friction Rating: High (${score}%). Staff is wasting hours typing the same invoice data between Razorpay, your POS, and Tally. Automating GST invoicing and billing with custom portals is highly recommended to save time and errors.`);
    } else {
      setVerdictColor('var(--color-danger)');
      setVerdictTitle('OPERATIONS: CRITICAL DRAIN');
      setVerdictAdvice(`Friction Rating: Critical (${score}%). Severe operations drain. Your staff is drowning in copy-pasting between WhatsApp, Tally, and spreadsheets while delayed replies let hot inquiries slip to competitors. Immediate automation is highly recommended.`);
    }
  }, [painPoints]);

  const formatCurrency = (val: number) => `₹${val.toLocaleString('en-IN')}`;

  // SVG circular arc parameters: radius = 70. 2 * PI * 70 = 439.82
  const circumference = 440;
  const strokeDashoffset = circumference - (circumference * computedScore) / 100;

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
            When your staff spends hours manually managing leads, copy-pasting data, and chasing payments, you lose lakhs. Calculate your potential savings below.
          </p>
        </div>

        {/* Dynamic visual grid dashboard */}
        <div className="grid-layout" style={{ alignItems: 'start' }}>
          
          {/* Left panel: questionnaire inputs */}
          <div className="card-premium" style={{ backgroundColor: 'var(--color-surface)' }}>
            <h3 style={{ fontSize: 'var(--font-size-h3)', marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>
              Friction Checkpoints
            </h3>
            
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
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
                Select your current operational routines:
              </span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {[
                  { key: 'sync', title: 'Manual Lead Copying', desc: 'Copying customer inquiries from Justdial, IndiaMART, WhatsApp, or website forms into spreadsheets by hand.' },
                  { key: 'sheets', title: 'Double-entry in Tally', desc: 'Staff manually re-typing appointment details, Razorpay/POS collections, and customer records into Tally ERP.' },
                  { key: 'leads', title: 'Slow WhatsApp Response', desc: 'Customer inquiries sit unanswered for >15 minutes, losing clients to faster competitors.' },
                  { key: 'social', title: 'Manual Promo Publishing', desc: 'Staff wasting hours formatting and uploading deals across Justdial, Google Business Profile, and Instagram.' },
                  { key: 'admin', title: 'Chasing Pending Payments', desc: 'Hours spent manually drafting quotations, sending PDF bills, and chasing collections on WhatsApp at month-end.' }
                ].map((item) => (
                  <label 
                    key={item.key} 
                    style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      alignItems: 'start',
                      cursor: 'pointer',
                      border: `1px solid ${painPoints[item.key as keyof typeof painPoints] ? 'var(--color-border-high)' : 'var(--color-border)'}`,
                      padding: '12px',
                      backgroundColor: painPoints[item.key as keyof typeof painPoints] ? 'var(--color-surface-subtle)' : 'transparent',
                      transition: 'border-color var(--transition-fast), background-color var(--transition-fast)'
                    }}
                    className="checkbox-card-lbl"
                  >
                    <input 
                      type="checkbox" 
                      checked={painPoints[item.key as keyof typeof painPoints]}
                      onChange={() => handleToggle(item.key as keyof typeof painPoints)}
                      style={{ marginTop: '4px', accentColor: 'var(--color-accent)' }}
                    />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginTop: '2px', lineHeight: 1.4 }}>{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>

              {/* Total Hours Display */}
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
                <span>ESTIMATED WEEKLY TIME LOST:</span>
                <span style={{ fontWeight: 800, color: 'var(--color-warning)', fontSize: '1.2rem' }}>
                  {hoursWasted}h/week
                </span>
              </div>
            </form>
          </div>

          {/* Right panel: dynamic financial ledger reports & gauge dashboard */}
          <div 
            className="card-premium"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: computedScore > 0 ? 'var(--color-text-primary)' : 'var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
              transition: 'border-color var(--transition-normal)'
            }}
          >
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '12px'
              }}
            >
              <h4 style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '0.65rem', color: 'var(--color-text-secondary)', letterSpacing: '0.05em' }}>
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
                {computedScore > 0 ? 'POTENTIAL SAVINGS OPPORTUNITY' : 'OPERATIONS OPTIMIZED'}
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
                    stroke={verdictColor}
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset var(--transition-slow), stroke var(--transition-normal)' }}
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
                  <span style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '1.6rem', fontWeight: 800, color: verdictColor, transition: 'color var(--transition-normal)' }}>
                    {computedScore}%
                  </span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.55rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Chaos
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
                  <span>WASTED STAFF SALARY:</span>
                  <span style={{ fontWeight: 700, color: wastedLabor > 0 ? 'var(--color-danger)' : 'var(--color-accent)' }}>
                    {formatCurrency(wastedLabor)}/mo
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border)', paddingBottom: '4px' }}>
                  <span>LOST BOOKINGS:</span>
                  <span style={{ fontWeight: 700, color: leakedLeads > 0 ? 'var(--color-danger)' : 'var(--color-accent)' }}>
                    {formatCurrency(leakedLeads)}/mo
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--color-border)', paddingBottom: '4px' }}>
                  <span>ADMIN BILLING GAPS:</span>
                  <span style={{ fontWeight: 700, color: adminDrain > 0 ? 'var(--color-danger)' : 'var(--color-accent)' }}>
                    {formatCurrency(adminDrain)}/mo
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
                    backgroundColor: computedScore > 0 ? 'color-mix(in srgb, var(--color-danger) 8%, transparent)' : 'color-mix(in srgb, var(--color-accent) 8%, transparent)',
                    border: `1px solid ${computedScore > 0 ? 'color-mix(in srgb, var(--color-danger) 20%, transparent)' : 'color-mix(in srgb, var(--color-accent) 20%, transparent)'}`,
                    transition: 'background-color var(--transition-normal), border-color var(--transition-normal)'
                  }}
                >
                  <span style={{ fontWeight: 800, fontSize: '0.62rem', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>ANNUAL PROFIT LOST</span>
                  <span style={{ fontWeight: 800, fontSize: '1.25rem', color: computedScore > 0 ? 'var(--color-danger)' : 'var(--color-accent)', textShadow: computedScore > 0 ? '0 0 8px rgba(239, 68, 68, 0.2)' : 'none', fontFamily: 'var(--font-heading-mono)' }}>
                    {formatCurrency(totalAnnualLeak)}/yr
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

            {/* Launch Modal blueprint repair CTA */}
            <button 
              onClick={() => onOpenAudit(formatCurrency(totalAnnualLeak))}
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
};
