import React, { useState } from 'react';
import { Monitor, Cpu, TrendingUp, Share2, Compass } from 'lucide-react';

interface SpecBuilderProps {
  onSubmitInquiry: (name: string, email: string, modules: string[], bottleneck: string) => void;
}

export const SpecBuilder: React.FC<SpecBuilderProps> = ({ onSubmitInquiry }) => {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bottleneck, setBottleneck] = useState('');

  const toggleModule = (moduleName: string) => {
    setSelectedModules((prev) => 
      prev.includes(moduleName) 
        ? prev.filter((m) => m !== moduleName) 
        : [...prev, moduleName]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedModules.length === 0) {
      alert("Oops! Please select at least one automation module below before submitting.");
      return;
    }

    onSubmitInquiry(name, email, selectedModules, bottleneck);

    // Reset Form
    setName('');
    setEmail('');
    setBottleneck('');
    setSelectedModules([]);
  };

  const modulesList = [
    { name: 'Custom Apps & Portals', label: 'CUSTOM PORTALS', icon: Monitor },
    { name: 'Tally & WhatsApp Sync', label: 'TALLY & WHATSAPP SYNC', icon: Cpu },
    { name: 'Leads & Payment Checkouts', label: 'LEADS & PAYMENTS', icon: TrendingUp },
    { name: 'Social Media Auto-Post', label: 'SOCIAL AUTO-POST', icon: Share2 },
    { name: 'Operational Consulting', label: 'EXPERT OPERATION AUDIT', icon: Compass }
  ];

  return (
    <section id="build-spec">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <h2 
            style={{
              fontSize: 'var(--font-size-h2)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-2)'
            }}
          >
            Design your <span className="editorial-serif">automation setup</span>
          </h2>
          <p style={{ maxWidth: '520px', fontSize: 'var(--font-size-sm)' }}>
            Choose the areas you want to automate in your business to get a custom roadmap and proposal.
          </p>
        </div>

        {/* Spec Configurator Card */}
        <div className="card-premium" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-text-primary)' }}>
          <h3 style={{ fontSize: 'var(--font-size-h3)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)' }}>
            What do you want to automate?
          </h3>

          {/* Module interactive button grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-5)'
            }}
          >
            {modulesList.map((mod) => {
              const Icon = mod.icon;
              const isSelected = selectedModules.includes(mod.name);
              return (
                <button
                  key={mod.name}
                  type="button"
                  onClick={() => toggleModule(mod.name)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: 'var(--space-4) var(--space-3)',
                    border: `1.5px dashed ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    backgroundColor: isSelected ? 'var(--color-accent-muted)' : 'var(--color-bg)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'border-color var(--transition-fast), background-color var(--transition-fast)'
                  }}
                  className="spec-config-btn"
                >
                  <Icon size={24} style={{ color: isSelected ? 'var(--color-accent)' : 'var(--color-text-muted)', transition: 'color var(--transition-fast)' }} />
                  <span 
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 800,
                      color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {mod.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Configuration Readout */}
          <div 
            style={{
              border: '1px solid var(--color-border)',
              padding: '12px var(--space-4)',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--color-bg)',
              fontFamily: 'var(--font-heading-mono)',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2) var(--space-4)',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-5)'
            }}
          >
            <span style={{ color: 'var(--color-text-muted)' }}>YOUR SELECTION:</span>
            <span style={{ color: selectedModules.length > 0 ? 'var(--color-text-primary)' : 'var(--color-text-muted)', fontWeight: 700 }}>
               {selectedModules.length > 0 ? selectedModules.join(' + ').toUpperCase() : 'NONE SELECTED'}
            </span>
          </div>

          {/* Core Contact Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--space-4)'
              }}
              className="form-grid-fields"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="spec-name" style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-sm)', fontWeight: 800, color: 'var(--color-text-secondary)' }}>
                  Your Name *
                </label>
                <input 
                  type="text" 
                  id="spec-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  placeholder="Rajesh Sharma"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    padding: 'var(--space-3)',
                    color: 'var(--color-text-primary)',
                    borderRadius: 'var(--radius-sm)',
                    outline: 'none'
                  }}
                  className="spec-field-input"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="spec-email" style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-sm)', fontWeight: 800, color: 'var(--color-text-secondary)' }}>
                  Your Email *
                </label>
                <input 
                  type="email" 
                  id="spec-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  placeholder="rajesh@yourbusiness.in"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    padding: 'var(--space-3)',
                    color: 'var(--color-text-primary)',
                    borderRadius: 'var(--radius-sm)',
                    outline: 'none'
                  }}
                  className="spec-field-input"
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="spec-bottleneck" style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-sm)', fontWeight: 800, color: 'var(--color-text-secondary)' }}>
                What is the biggest operational headache in your business? *
              </label>
              <textarea 
                id="spec-bottleneck"
                value={bottleneck}
                onChange={(e) => setBottleneck(e.target.value)}
                required
                placeholder="e.g., We waste 3 hours copy-pasting leads or manually re-entering invoices in Tally..."
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  padding: 'var(--space-3)',
                  color: 'var(--color-text-primary)',
                  borderRadius: 'var(--radius-sm)',
                  minHeight: '140px',
                  resize: 'vertical',
                  outline: 'none'
                }}
                className="spec-field-input"
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--space-4)' }}>
              <button 
                type="submit" 
                className="btn-core btn-pixel-brutal"
                style={{ fontWeight: 800 }}
              >
                Send Automation Request →
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .spec-config-btn:hover {
          border-color: var(--color-border-high) !important;
        }
        .spec-field-input {
          transition: border-color var(--transition-fast), background-color var(--transition-fast);
        }
        .spec-field-input:focus {
          border-color: var(--color-accent) !important;
          background-color: color-mix(in srgb, var(--color-accent) 2%, var(--color-bg)) !important;
        }
        @media (min-width: 768px) {
          .form-grid-fields {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
