import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AuditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  computedLeak: string;
  onSubmitAudit: (name: string, email: string, company: string, bottleneck: string) => void;
}

export const AuditDialog: React.FC<AuditDialogProps> = ({
  isOpen,
  onClose,
  computedLeak,
  onSubmitAudit
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [bottleneck, setBottleneck] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitAudit(name, email, company, bottleneck);
    
    // Reset Form
    setName('');
    setEmail('');
    setCompany('');
    setBottleneck('');
    onClose();
  };

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(7, 7, 9, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: 'var(--space-4)'
      }}
    >
      <dialog 
        open
        onClick={(e) => e.stopPropagation()} // Prevent close on card click
        style={{
          border: '2px solid var(--color-text-primary)',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text-primary)',
          padding: 'var(--space-5)',
          maxWidth: '500px',
          width: '100%',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.5)',
          margin: 'auto',
          display: 'block',
          position: 'relative'
        }}
      >
        {/* Header bar */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-4)',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '12px'
          }}
        >
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800 }}>
            GET YOUR FREE OPERATIONS ROADMAP
          </h3>
          <button 
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-primary)',
              width: '28px',
              height: '28px',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-bg)'
            }}
            className="modal-close-btn"
          >
            <X size={16} />
          </button>
        </div>

        {/* Audit Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '8px' }}>
            Fill in your details below to get a customized roadmap showing you exactly how to automate your operations. Plug your annual profit leak (computed at{' '}
            <span style={{ fontWeight: 800, fontFamily: 'var(--font-heading-mono)', color: 'var(--color-danger)', textDecoration: 'underline' }}>
              {computedLeak || '₹0/yr'}
            </span>
            ) and scale your business without daily headaches.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="lead-name" style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-xs)', fontWeight: 800, color: 'var(--color-text-secondary)' }}>
              Your Name *
            </label>
            <input 
              type="text" 
              id="lead-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Priya Patel"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                padding: '10px',
                color: 'var(--color-text-primary)',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
                fontSize: '0.85rem'
              }}
              className="modal-input"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="lead-email" style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-xs)', fontWeight: 800, color: 'var(--color-text-secondary)' }}>
              Your Email *
            </label>
            <input 
              type="email" 
              id="lead-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="priya@yourcompany.in"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                padding: '10px',
                color: 'var(--color-text-primary)',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
                fontSize: '0.85rem'
              }}
              className="modal-input"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="lead-company" style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-xs)', fontWeight: 800, color: 'var(--color-text-secondary)' }}>
              Company Name
            </label>
            <input 
              type="text" 
              id="lead-company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Sharma Diagnostics or Raj Traders"
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                padding: '10px',
                color: 'var(--color-text-primary)',
                borderRadius: 'var(--radius-sm)',
                outline: 'none',
                fontSize: '0.85rem'
              }}
              className="modal-input"
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label htmlFor="lead-msg" style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--font-size-xs)', fontWeight: 800, color: 'var(--color-text-secondary)' }}>
              What is your biggest daily operations headache?
            </label>
            <textarea 
              id="lead-msg"
              value={bottleneck}
              onChange={(e) => setBottleneck(e.target.value)}
              placeholder="e.g., We waste hours manually copy-pasting leads or re-keying Tally bills..."
              style={{
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                padding: '10px',
                color: 'var(--color-text-primary)',
                borderRadius: 'var(--radius-sm)',
                minHeight: '110px',
                resize: 'vertical',
                outline: 'none',
                fontSize: '0.85rem'
              }}
              className="modal-input"
            />
          </div>

          <div style={{ marginTop: 'var(--space-4)' }}>
            <button 
              type="submit"
              className="btn-core btn-pixel-brutal"
              style={{ width: '100%', paddingBlock: '12px', fontSize: 'var(--font-size-sm)', fontWeight: 800 }}
            >
              Get Free Roadmap →
            </button>
          </div>
        </form>
      </dialog>

      <style>{`
        .modal-close-btn:hover {
          border-color: var(--color-text-primary) !important;
        }
        .modal-input:focus {
          border-color: var(--color-accent) !important;
        }
      `}</style>
    </div>
  );
};
