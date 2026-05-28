import React, { useState, useEffect, useRef } from 'react';

interface Packet {
  id: string;
  from: 'intake' | 'scheduler' | 'billing' | 'distrib' | 'hub';
  to: 'intake' | 'scheduler' | 'billing' | 'distrib' | 'hub';
  label: string;
  color: string;
  speed: number;
  progress: number;
  isPing?: boolean;
}

const nodeCoords = {
  intake: { x: 22, y: 28 },
  hub: { x: 50, y: 50 },
  scheduler: { x: 78, y: 28 },
  billing: { x: 78, y: 72 },
  distrib: { x: 22, y: 72 }
};

const packetColors = {
  ingest: 'var(--color-packet-ingest)',  // Dynamic Amber
  booking: 'var(--color-packet-booking)', // Dynamic Mint
  invoice: 'var(--color-packet-invoice)', // Dynamic Sky/Cyan
  promo: 'var(--color-packet-promo)',     // Dynamic Blue/Indigo
  warn: 'var(--color-packet-warn)'        // Dynamic Crimson
};

export const Cockpit: React.FC = () => {
  const [isFlow, setIsFlow] = useState(true);
  const [systemStatus, setSystemStatus] = useState('STATUS: ONLINE // NOMINAL_FLOW');
  const [packets, setPackets] = useState<Packet[]>([]);
  const [activePulseNode, setActivePulseNode] = useState<string | null>(null);

  const packetsRef = useRef<Packet[]>([]);
  const isFlowRef = useRef(isFlow);

  useEffect(() => {
    isFlowRef.current = isFlow;
    if (isFlow) {
      setSystemStatus('STATUS: ONLINE // NOMINAL_FLOW');
    } else {
      setSystemStatus('STATUS: DEGRADED // MANUAL_OVERHEAD');
    }
  }, [isFlow]);

  // Main high-performance render ticks for packet coordination
  useEffect(() => {
    let animFrameId: number;

    const updatePackets = () => {
      const mode = isFlowRef.current;
      const currentPackets = [...packetsRef.current];

      const nextPackets = currentPackets
        .map((p) => {
          let speedFactor = 1.0;
          let packetColor = p.color;
          let label = p.label;

          if (!mode) {
            // Friction Mode: Bottleneck packets in the center pipeline
            if (p.progress > 0.42 && p.progress < 0.68) {
              speedFactor = 0.08; // Severe crawl
              packetColor = packetColors.warn;
              label = 'STALLED';
            } else {
              speedFactor = 0.35; // Sluggish
            }
          }

          const progress = p.progress + p.speed * speedFactor;

          return { ...p, progress, color: packetColor, label };
        })
        .filter((p) => {
          if (p.progress >= 1) {
            // Trigger node pulse on landing
            triggerNodePulse(p.to);
            return false; // mark for deletion
          }
          return true;
        });

      packetsRef.current = nextPackets;
      setPackets(nextPackets);

      animFrameId = requestAnimationFrame(updatePackets);
    };

    animFrameId = requestAnimationFrame(updatePackets);
    return () => cancelAnimationFrame(animFrameId);
  }, []);

  const triggerNodePulse = (nodeId: string) => {
    setActivePulseNode(nodeId);
    setTimeout(() => setActivePulseNode(null), 250);
  };

  const spawnPacket = (
    from: keyof typeof nodeCoords,
    to: keyof typeof nodeCoords,
    label: string,
    color: string,
    speed = 0.012,
    isPing = false
  ) => {
    if (packetsRef.current.length > 15) return; // Prevent leak bloating
    
    const newPacket: Packet = {
      id: Math.random().toString(36).substr(2, 9),
      from,
      to,
      label,
      color,
      speed,
      progress: 0,
      isPing
    };

    packetsRef.current.push(newPacket);
    setPackets([...packetsRef.current]);
  };

  // Periodic automatic operational data flows
  useEffect(() => {
    const autoFlowInterval = setInterval(() => {
      if (isFlowRef.current && packetsRef.current.length < 3) {
        const feeds: Array<{ from: 'intake' | 'scheduler' | 'billing' | 'distrib'; label: string; color: string }> = [
          { from: 'intake', label: 'LEAD', color: packetColors.ingest },
          { from: 'scheduler', label: 'BOOKING', color: packetColors.booking },
          { from: 'billing', label: 'INVOICE', color: packetColors.invoice },
          { from: 'distrib', label: 'PROMO', color: packetColors.promo }
        ];
        
        const randomFeed = feeds[Math.floor(Math.random() * feeds.length)];
        spawnPacket(randomFeed.from, 'hub', randomFeed.label, randomFeed.color, 0.013);
      }
    }, 2500);

    return () => clearInterval(autoFlowInterval);
  }, []);

  // Manual Ingestion
  const handleInjectLead = () => {
    spawnPacket('intake', 'hub', 'NEW LEAD', packetColors.ingest, 0.018);
  };

  // System Reboot procedure
  const handleReboot = () => {
    packetsRef.current.forEach((p) => {
      const el = document.getElementById(`packet-${p.id}`);
      if (el) el.remove();
    });
    packetsRef.current = [];
    setPackets([]);

    // Reboot sequence pings
    setTimeout(() => {
      setIsFlow(true);
      spawnPacket('intake', 'hub', 'SYS OK', packetColors.booking, 0.025, true);
      setTimeout(() => spawnPacket('billing', 'hub', 'SYS OK', packetColors.booking, 0.022, true), 300);
    }, 400);
  };

  return (
    <div 
      className={`blueprint-visual-canvas ${isFlow ? 'flow-mode' : 'friction-mode'}`}
      style={{
        aspectRatio: '4 / 3',
        border: '1px solid var(--color-border-high)',
        backgroundColor: 'var(--color-surface)',
        position: 'relative',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
      }}
    >
      {/* Structural technical grid backplanes */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'var(--canvas-grid)',
          backgroundSize: '16px 16px',
          opacity: 0.45,
          pointerEvents: 'none'
        }}
      ></div>

      {/* SVG Convergence Pipe Relay Grid */}
      <svg className="cockpit-pipelines" viewBox="0 0 400 300" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        <path 
          d="M 88 84 L 200 150" 
          stroke={isFlow ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.2)'}
          strokeWidth={isFlow ? 1.5 : 1}
          fill="none"
          strokeLinecap="round"
          className="cockpit-pipe"
        />
        <path 
          d="M 312 84 L 200 150" 
          stroke={isFlow ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.2)'}
          strokeWidth={isFlow ? 1.5 : 1}
          fill="none"
          strokeLinecap="round"
          className="cockpit-pipe"
        />
        <path 
          d="M 312 216 L 200 150" 
          stroke={isFlow ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.2)'}
          strokeWidth={isFlow ? 1.5 : 1}
          fill="none"
          strokeLinecap="round"
          className="cockpit-pipe"
        />
        <path 
          d="M 88 216 L 200 150" 
          stroke={isFlow ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.2)'}
          strokeWidth={isFlow ? 1.5 : 1}
          fill="none"
          strokeLinecap="round"
          className="cockpit-pipe"
        />
      </svg>

      {/* Cockpit Header State Controls */}
      <div 
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10
        }}
      >
        <span 
          style={{
            fontFamily: 'var(--font-heading-mono)',
            fontSize: '0.6rem',
            fontWeight: 700,
            color: isFlow ? 'var(--color-accent)' : 'var(--color-danger)',
            letterSpacing: '0.05em',
            backgroundColor: 'color-mix(in srgb, var(--color-surface) 80%, transparent)',
            padding: '3px 8px',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-sm)',
            transition: 'color var(--transition-fast)'
          }}
        >
          {systemStatus}
        </span>

        {/* Friction / Flow slider Switch */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
            border: '1px solid var(--color-border)',
            padding: '3px 8px',
            borderRadius: 'var(--radius-sm)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}
        >
          <span 
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.6rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: !isFlow ? 'var(--color-danger)' : 'var(--color-text-muted)',
              transition: 'color var(--transition-fast)'
            }}
          >
            Friction
          </span>

          <label className="switch-toggle" style={{ position: 'relative', display: 'inline-block', width: '24px', height: '12px' }}>
            <input 
              type="checkbox" 
              checked={isFlow} 
              onChange={() => setIsFlow(!isFlow)}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span 
              className="switch-slider"
              style={{
                position: 'absolute',
                cursor: 'pointer',
                inset: 0,
                backgroundColor: isFlow ? 'var(--color-accent)' : 'var(--color-danger)',
                transition: '0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: '6px'
              }}
            ></span>
          </label>

          <span 
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.6rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: isFlow ? 'var(--color-accent)' : 'var(--color-text-muted)',
              transition: 'color var(--transition-fast)'
            }}
          >
            Flow
          </span>
        </div>
      </div>

      {/* RENDER ACTIVE DATA PACKETS */}
      {packets.map((p) => {
        const start = nodeCoords[p.from];
        const end = nodeCoords[p.to];
        if (!start || !end) return null;

        // Linear interpolation
        const currentX = start.x + (end.x - start.x) * p.progress;
        const currentY = start.y + (end.y - start.y) * p.progress;

        return (
          <div 
            key={p.id}
            id={`packet-${p.id}`}
            style={{
              position: 'absolute',
              left: `${currentX}%`,
              top: `${currentY}%`,
              transform: 'translate(-50%, -50%)',
              padding: '2px 6px',
              backgroundColor: p.color,
              color: '#070709',
              borderRadius: 'var(--radius-sm)',
              fontFamily: 'var(--font-heading-mono)',
              fontSize: '0.5rem',
              fontWeight: 700,
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.4)',
              zIndex: 3,
              pointerEvents: 'none',
              transition: 'background-color var(--transition-fast)'
            }}
          >
            {p.label}
          </div>
        );
      })}

      {/* CONVERGING NODES CHASSIS */}
      
      {/* Node 1: Lead Ingestion */}
      <div 
        className={`blueprint-node ${activePulseNode === 'intake' ? 'pulsing' : ''}`}
        style={{
          position: 'absolute',
          top: '28%',
          left: '22%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '92px',
          minHeight: '44px',
          backgroundColor: 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
          border: `1px solid ${activePulseNode === 'intake' ? 'var(--color-accent)' : 'var(--color-border)'}`,
          padding: '6px',
          zIndex: 2,
          backdropFilter: 'blur(8px)'
        }}
      >
        <span className="badge-micro text-amber" style={{ color: packetColors.ingest }}>INTAKE</span>
        <span className="node-lbl">Lead Ingest</span>
        <span className="node-sub">Justdial / IndiaMART</span>
      </div>

      {/* Node 2: Central Flowify Hub */}
      <div 
        className={`blueprint-node central-hub ${activePulseNode === 'hub' ? 'pulsing' : ''}`}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '104px',
          minHeight: '52px',
          backgroundColor: 'color-mix(in srgb, var(--color-surface) 90%, transparent)',
          border: `1.5px solid ${isFlow ? 'var(--color-accent)' : 'var(--color-danger)'}`,
          boxShadow: isFlow ? '0 0 16px rgba(16, 185, 129, 0.12)' : 'none',
          padding: '6px',
          zIndex: 2,
          backdropFilter: 'blur(8px)',
          transition: 'border-color var(--transition-normal)'
        }}
      >
        {isFlow && <div className="hub-ripple"></div>}
        <span className="badge-micro" style={{ color: isFlow ? 'var(--color-accent)' : 'var(--color-danger)' }}>ENGINE</span>
        <span className="node-lbl" style={{ fontWeight: 800 }}>FLOWIFY HUB</span>
        <span className="node-sub">API Router</span>
      </div>

      {/* Node 3: Scheduler Node */}
      <div 
        className={`blueprint-node ${activePulseNode === 'scheduler' ? 'pulsing' : ''}`}
        style={{
          position: 'absolute',
          top: '28%',
          left: '78%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '92px',
          minHeight: '44px',
          backgroundColor: 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
          border: `1px solid ${activePulseNode === 'scheduler' ? 'var(--color-accent)' : 'var(--color-border)'}`,
          padding: '6px',
          zIndex: 2,
          backdropFilter: 'blur(8px)'
        }}
      >
        <span className="badge-micro text-green" style={{ color: packetColors.booking }}>SCHEDULER</span>
        <span className="node-lbl">WhatsApp Sync</span>
        <span className="node-sub">Auto-Booking</span>
      </div>

      {/* Node 4: Billing POS */}
      <div 
        className={`blueprint-node ${activePulseNode === 'billing' ? 'pulsing' : ''}`}
        style={{
          position: 'absolute',
          top: '72%',
          left: '78%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '92px',
          minHeight: '44px',
          backgroundColor: 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
          border: `1px solid ${activePulseNode === 'billing' ? 'var(--color-accent)' : 'var(--color-border)'}`,
          padding: '6px',
          zIndex: 2,
          backdropFilter: 'blur(8px)'
        }}
      >
        <span className="badge-micro text-cyan" style={{ color: packetColors.invoice }}>BILLING POS</span>
        <span className="node-lbl">Tally / Zoho</span>
        <span className="node-sub">GST Invoice</span>
      </div>

      {/* Node 5: Marketing Distribution */}
      <div 
        className={`blueprint-node ${activePulseNode === 'distrib' ? 'pulsing' : ''}`}
        style={{
          position: 'absolute',
          top: '72%',
          left: '22%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '92px',
          minHeight: '44px',
          backgroundColor: 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
          border: `1px solid ${activePulseNode === 'distrib' ? 'var(--color-accent)' : 'var(--color-border)'}`,
          padding: '6px',
          zIndex: 2,
          backdropFilter: 'blur(8px)'
        }}
      >
        <span className="badge-micro text-blue" style={{ color: packetColors.promo }}>MARKETING</span>
        <span className="node-lbl">Social Sync</span>
        <span className="node-sub">IG / Google Biz</span>
      </div>

      {/* Cockpit controls dashboard footer */}
      <div className="cockpit-dashboard" style={{ position: 'absolute', bottom: '12px', left: '12px', display: 'flex', gap: '6px', zIndex: 10 }}>
        <button 
          onClick={handleInjectLead}
          className="btn-core btn-secondary-action btn-sm-action"
          style={{ padding: '4px 8px', fontSize: '0.55rem', fontWeight: 700 }}
        >
          Inject Lead [+]
        </button>
        <button 
          onClick={handleReboot}
          className="btn-core btn-secondary-action btn-sm-action"
          style={{ padding: '4px 8px', fontSize: '0.55rem', fontWeight: 700 }}
        >
          Reboot System
        </button>
      </div>

      {/* Metadata spec label */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '12px',
          fontFamily: 'var(--font-heading-mono)',
          fontSize: '0.55rem',
          color: 'var(--color-text-muted)',
          pointerEvents: 'none'
        }}
      >
        SYS.REF: FLW-9002 // REV_6.2
      </div>

      {/* Visual stylesheet overrides */}
      <style>{`
        .switch-toggle input:checked + .switch-slider {
          transform: scale(1);
        }
        .switch-slider::before {
          position: absolute;
          content: "";
          height: 8px;
          width: 8px;
          left: 2px;
          bottom: 2px;
          background-color: var(--color-surface);
          transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50%;
        }
        .switch-toggle input:checked + .switch-slider::before {
          transform: translateX(12px);
          background-color: #070709;
        }
        .switch-toggle input:not(:checked) + .switch-slider::before {
          transform: translateX(0);
          background-color: #FFFFFF;
        }
        .blueprint-node {
          border-radius: var(--radius-sm);
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .node-lbl {
          font-family: var(--font-heading);
          font-size: 0.55rem;
          font-weight: 700;
          color: var(--color-text-primary);
          text-align: center;
          line-height: 1.1;
          margin-top: 2px;
        }
        .node-sub {
          font-family: var(--font-heading-mono);
          font-size: 0.4rem;
          color: var(--color-text-secondary);
          text-align: center;
          margin-top: 1px;
        }
        .badge-micro {
          font-family: var(--font-heading-mono);
          font-size: 0.4rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 1px 3px;
          background-color: var(--color-bg);
          border-radius: 1px;
        }
        .hub-ripple {
          position: absolute;
          inset: -4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-accent);
          animation: greenRipple 2s infinite;
          pointer-events: none;
        }
        @keyframes greenRipple {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); opacity: 1; }
          70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); opacity: 0; }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); opacity: 0; }
        }
        .blueprint-node.pulsing {
          transform: translate(-50%, -50%) scale(1.08) !important;
          border-color: var(--color-text-primary) !important;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
};
