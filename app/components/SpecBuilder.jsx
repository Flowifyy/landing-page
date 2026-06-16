"use client";

import React, { useState } from 'react';
import { ShoppingBag, Truck, Cpu, MessageSquare, Bot } from 'lucide-react';

export const SpecBuilder = ({ onSubmitInquiry }) => {
  const [selectedModules, setSelectedModules] = useState(['Shopify Store', 'Shiprocket Connect', 'Real-Time Stock Sync']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bottleneck, setBottleneck] = useState('');

  const toggleModule = (moduleName) => {
    setSelectedModules((prev) => 
      prev.includes(moduleName) 
        ? prev.filter((m) => m !== moduleName) 
        : [...prev, moduleName]
    );
  };

  const handleSubmit = (e) => {
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
    setSelectedModules(['Shopify Store', 'Shiprocket Connect', 'Real-Time Stock Sync']);
  };

  const modulesList = [
    { name: 'Shopify Store', label: 'SHOPIFY STORE', icon: ShoppingBag, category: 'PLATFORM' },
    { name: 'WooCommerce Store', label: 'WOOCOMMERCE', icon: ShoppingBag, category: 'PLATFORM' },
    { name: 'Shiprocket Connect', label: 'SHIPROCKET WMS', icon: Truck, category: 'LOGISTICS' },
    { name: 'Delhivery Connect', label: 'DELHIVERY API', icon: Truck, category: 'LOGISTICS' },
    { name: 'Real-Time Stock Sync', label: 'STOCK SYNC ENGINE', icon: Cpu, category: 'AUTOMATION' },
    { name: 'Shipping Dispatch Flow', label: 'AUTO-SHIPPING DISPATCH', icon: Truck, category: 'AUTOMATION' },
    { name: 'WhatsApp AI support Bot', label: 'WHATSAPP AI BOT', icon: MessageSquare, category: 'AUTOMATION' },
    { name: 'Cart Recovery Flow', label: 'CART RECOVERY', icon: Bot, category: 'AUTOMATION' }
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
            Design your <span className="editorial-serif">automation stack</span>
          </h2>
          <p style={{ maxWidth: '520px', fontSize: 'var(--font-size-sm)' }}>
            Choose the e-commerce channels, courier APIs, and automation flows you want to integrate to compile your setup scheme.
          </p>
        </div>

        {/* Spec Configurator Card */}
        <div className="card-premium" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-text-primary)', borderWidth: '2px', boxShadow: '8px 8px 0px var(--color-text-primary)' }}>
          <h3 style={{ fontSize: 'var(--font-size-h3)', fontFamily: 'var(--font-heading)', marginBottom: 'var(--space-4)', color: 'var(--color-text-primary)', fontWeight: 800 }}>
            Configure E-Commerce Pipeline Nodes
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
                    border: `2px dashed ${isSelected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    backgroundColor: isSelected ? 'var(--color-accent-muted)' : 'var(--color-bg)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'border-color var(--transition-fast), background-color var(--transition-fast)'
                  }}
                  className="spec-config-btn"
                >
                  <Icon size={24} style={{ color: isSelected ? 'var(--color-accent)' : 'var(--color-text-muted)', transition: 'color var(--transition-fast)' }} />
                  <div style={{ textAlign: 'center' }}>
                    <span 
                      style={{
                        fontFamily: 'var(--font-heading-mono)',
                        fontSize: '0.55rem',
                        fontWeight: 700,
                        color: 'var(--color-text-muted)',
                        display: 'block',
                        marginBottom: '2px'
                      }}
                    >
                      {mod.category}
                    </span>
                    <span 
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'var(--font-size-xs)',
                        fontWeight: 800,
                        color: isSelected ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                        letterSpacing: '0.02em',
                        display: 'block'
                      }}
                    >
                      {mod.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Configuration Readout */}
          <div 
            style={{
              border: '1.5px solid var(--color-text-primary)',
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
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 700 }}>SELECTED BLUEPRINT PATHWAYS:</span>
            <span style={{ color: selectedModules.length > 0 ? 'var(--color-accent)' : 'var(--color-text-muted)', fontWeight: 800 }}>
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
                  placeholder="Vikram Patel"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1.5px solid var(--color-text-primary)',
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
                  Work Email *
                </label>
                <input 
                  type="email" 
                  id="spec-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  placeholder="vikram@brand.com"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    border: '1.5px solid var(--color-text-primary)',
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
                What is your biggest manual operations headache? *
              </label>
              <textarea 
                id="spec-bottleneck"
                value={bottleneck}
                onChange={(e) => setBottleneck(e.target.value)}
                required
                placeholder="e.g. We waste hours copying tracking links, or stock counts frequently oversell across Amazon and Shopify..."
                style={{
                  backgroundColor: 'var(--color-bg)',
                  border: '1.5px solid var(--color-text-primary)',
                  padding: 'var(--space-3)',
                  color: 'var(--color-text-primary)',
                  borderRadius: 'var(--radius-sm)',
                  minHeight: '120px',
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
                Compile Setup Schematics →
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
