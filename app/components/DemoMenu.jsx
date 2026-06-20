"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, RefreshCw, Send, Navigation, MapPin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const menuItems = [
  { id: 'vada-pav', name: 'Special Vada Pav', price: 1, desc: 'Classic Mumbai street food' },
  { id: 'filter-coffee', name: 'Filter Coffee', price: 1, desc: 'Traditional South Indian brew' },
  { id: 'masala-dosa', name: 'Masala Dosa', price: 1, desc: 'Crispy crepe with potato masala' },
  { id: 'garlic-naan', name: 'Butter Garlic Naan', price: 1, desc: 'Soft clay-oven flatbread' }
];

export const DemoMenu = () => {
  const [revealRef, isVisible] = useReveal(0.15);
  const [screen, setScreen] = useState('menu'); // 'menu' | 'cart' | 'payment' | 'whatsapp'
  const [cart, setCart] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const [instructions, setInstructions] = useState('');
  const [location, setLocation] = useState({ loading: false, requested: false, name: '', address: '', lat: null, lon: null });
  const [paymentStatus, setPaymentStatus] = useState('idle'); // 'idle' | 'processing' | 'success'
  const [logs, setLogs] = useState([
    { type: 'system', text: '[FLOWIFY ENGINE v1.2.0 ONLINE]' },
    { type: 'system', text: '[Ready for incoming cafe sandbox connection...]' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  
  const terminalScrollRef = useRef(null);
  const chatScrollRef = useRef(null);

  const triggerGeolocation = async () => {
    setLocation({ loading: true, requested: true, name: '', address: '', lat: null, lon: null });
    addLog('Initiating geolocation relay...', 'info');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          addLog(`GPS coordinates captured: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`, 'success');
          try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`, {
              headers: { 'User-Agent': 'FlowifyDemo/1.0' }
            });
            const data = await res.json();
            const displayName = data.display_name;
            const city = data.address.city || data.address.town || data.address.village || data.address.suburb || 'Unknown Local Area';
            setLocation({
              loading: false,
              requested: true,
              name: city,
              address: displayName,
              lat: latitude,
              lon: longitude
            });
            addLog(`GeoLog verified: ${city} - ${displayName.slice(0, 45)}...`, 'success');
          } catch (err) {
            fallbackIPLocation();
          }
        },
        (error) => {
          addLog(`GPS permission denied/failed: ${error.message}. Falling back to IP-based location...`, 'warn');
          fallbackIPLocation();
        }
      );
    } else {
      fallbackIPLocation();
    }
  };

  const fallbackIPLocation = async () => {
    try {
      const res = await fetch('https://ipapi.co/json/');
      const data = await res.json();
      const cityState = `${data.city}, ${data.region}`;
      const fullAddress = `${data.city}, ${data.region}, ${data.postal}, ${data.country_name} (via IP Relays)`;
      setLocation({
        loading: false,
        requested: true,
        name: cityState,
        address: fullAddress,
        lat: data.latitude,
        lon: data.longitude
      });
      addLog(`GeoLog IP verified: ${cityState}`, 'success');
    } catch (err) {
      setLocation({
        loading: false,
        requested: true,
        name: 'Surat, Gujarat',
        address: 'Ring Road, Surat, Gujarat, 395002, India (Demo Sandbox Fallback)',
        lat: 21.1702,
        lon: 72.8311
      });
      addLog('GeoLog: Network request blocked. Falling back to default Surat Sandbox.', 'warn');
    }
  };

  // Auto scroll logs internally
  useEffect(() => {
    const el = terminalScrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [logs]);

  // Auto scroll chat internally
  useEffect(() => {
    const el = chatScrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  const addLog = (text, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { type, text: `[${timestamp}] ${text}` }]);
  };

  const addToCart = (item) => {
    setCart(prev => {
      const currentQty = prev[item.id]?.qty || 0;
      const updated = {
        ...prev,
        [item.id]: { ...item, qty: currentQty + 1 }
      };
      addLog(`Cart item added: ${item.name} (x${currentQty + 1})`, 'info');
      return updated;
    });
  };

  const removeFromCart = (item) => {
    if (!cart[item.id]) return;
    setCart(prev => {
      const currentQty = prev[item.id].qty;
      const updated = { ...prev };
      if (currentQty <= 1) {
        delete updated[item.id];
        addLog(`Cart item removed: ${item.name}`, 'warn');
      } else {
        updated[item.id] = { ...item, qty: currentQty - 1 };
        addLog(`Cart item decremented: ${item.name} (x${currentQty - 1})`, 'warn');
      }
      return updated;
    });
  };

  const getCartTotalItems = () => {
    return Object.values(cart).reduce((acc, curr) => acc + curr.qty, 0);
  };

  const handleProceedToCart = () => {
    setScreen('cart');
    addLog('Navigated to checkout cart. Awaiting phone details...', 'success');
  };

  const handlePay = () => {
    if (!phoneNumber || phoneNumber.trim().length < 10) {
      alert('Please enter a valid phone number');
      return;
    }
    setScreen('payment');
    setPaymentStatus('processing');
    addLog(`Initiating Razorpay gateway for ₹1.00...`, 'info');
    addLog(`Ingesting lead endpoint phone: ${phoneNumber}`, 'success');
    if (location.lat && location.lon) {
      addLog(`GeoLog verifying order node from: Lat ${location.lat.toFixed(4)}, Lon ${location.lon.toFixed(4)} (${location.name})`, 'success');
    } else {
      addLog(`GeoLog verifying order node from default backup: ${location.name}`, 'warn');
    }
    if (instructions.trim()) {
      addLog(`Custom instruction logged: "${instructions}"`, 'info');
    }

    // Simulate payment process
    setTimeout(() => {
      setPaymentStatus('success');
      addLog('[Razorpay Webhook] Received payment.confirm (status: SUCCESS)', 'success');
      addLog('[Tally ERP API] Creating Sales Receipt Voucher... Reconciled.', 'success');
      addLog('[Tally ERP API] Voucher #CAF-2026-9842 synchronized.', 'info');
      
      // Transition to WhatsApp simulation
      setTimeout(() => {
        setScreen('whatsapp');
        simulateWhatsAppMessage();
      }, 1500);
    }, 2000);
  };

  const simulateWhatsAppMessage = () => {
    setIsTyping(true);
    addLog('[WhatsApp Cloud API] Dispatching template \'flowify_cafe_bill\'...', 'info');

    setTimeout(() => {
      setIsTyping(false);
      const itemsList = Object.values(cart)
        .map(item => `• ${item.name} (x${item.qty})`)
        .join('\n');

      const instructionsPart = instructions.trim() ? `\n*Instructions:* ${instructions.trim()}` : '';
      const addressPart = location.address ? `\n*Delivery Address:* ${location.address}` : '';

      setChatMessages([
        {
          sender: 'system',
          text: `*FLOWIFY CAFÉ RECEIPT* ☕\n\nOrder ID: #FLW-9842\nPhone: ${phoneNumber}\n\n*YOUR ORDER:*\n${itemsList}\n------------------------${instructionsPart}${addressPart}\n------------------------\n*Total Paid: ₹1.00* via UPI\n\n*Status:* Ledger pushed to Tally ERP. WhatsApp billing relay completed successfully. 🎉`
        }
      ]);
      addLog('[WhatsApp Cloud API] Message status: DELIVERED (0.3s delay)', 'success');
      addLog('[System] Engine cycle completed successfully.', 'system');

      // Second message follow up
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setChatMessages(prev => [
            ...prev,
            {
              sender: 'system',
              text: `This is a live operational demonstration. We just captured your lead, simulated a payment confirmation, reconciled Tally accounting, and triggered this WhatsApp message in real-time. This is how we eliminate manual bottlenecks. ⚡`
            }
          ]);
        }, 1500);
      }, 1000);

    }, 2000);
  };

  const resetDemo = () => {
    setCart({});
    setPhoneNumber('');
    setInstructions('');
    setScreen('menu');
    setPaymentStatus('idle');
    setChatMessages([]);
    setLocation({ loading: false, requested: false, name: '', address: '', lat: null, lon: null });
    setLogs([
      { type: 'system', text: '[FLOWIFY ENGINE v1.2.0 ONLINE]' },
      { type: 'system', text: '[Ready for incoming cafe sandbox connection...]' }
    ]);
  };

  return (
    <section
      id="demo-menu"
      ref={revealRef}
      className={`reveal ${isVisible ? 'visible' : ''}`}
      style={{
        paddingTop: 'var(--space-8)',
        paddingBottom: 'var(--space-8)',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: 'var(--space-6)', textAlign: 'left' }}>
          <span className="section-tag" style={{ marginBottom: 'var(--space-3)' }}>
            Live Demonstration
          </span>
          <h2
            style={{
              fontSize: 'var(--font-size-h2)',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}
          >
            Live <span className="editorial-serif" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading-serif)' }}>Operational Sandbox</span>
          </h2>
          <p style={{ fontSize: 'var(--font-size-body)', color: 'var(--color-text-secondary)' }}>
            Interact with our simulated restaurant menu app below to experience a real-time Flowify automation relay.
          </p>
        </div>

        {/* Dashboard Split Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-5)',
            alignItems: 'stretch'
          }}
        >
          {/* Left Side: Mobile Phone Simulator */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div 
              className="mock-phone-shell"
              style={{
                width: '100%',
                maxWidth: '360px',
                height: '600px',
                backgroundColor: 'var(--color-surface-subtle)',
                border: '4px solid var(--color-text-primary)',
                borderRadius: '24px',
                boxShadow: '10px 10px 0px var(--color-text-primary)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Phone Status Bar */}
              <div 
                style={{
                  height: '24px',
                  backgroundColor: 'var(--color-text-primary)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: '16px',
                  color: 'var(--color-surface)',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-heading-mono)',
                  fontWeight: 700,
                  paddingInline: '16px'
                }}
              >
                <span>FlowNet 5G</span>
                <span>23:09</span>
              </div>

              {/* View Screens */}
              
              {/* 1. MENU SCREEN */}
              {screen === 'menu' && (
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, backgroundColor: 'var(--color-surface)' }}>
                  <div 
                    style={{
                      padding: '12px var(--space-3)',
                      borderBottom: '2px solid var(--color-text-primary)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: 'var(--color-surface-subtle)'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                      FlowCafe ☕
                    </span>
                    <div style={{ position: 'relative' }}>
                      <ShoppingCart size={18} style={{ color: 'var(--color-text-primary)' }} />
                      {getCartTotalItems() > 0 && (
                        <span 
                          style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            backgroundColor: 'var(--color-accent)',
                            color: '#000',
                            fontSize: '0.6rem',
                            fontWeight: 800,
                            borderRadius: '50%',
                            width: '14px',
                            height: '14px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {getCartTotalItems()}
                        </span>
                      )}
                    </div>
                  </div>

                  <div style={{ overflowY: 'auto', flexGrow: 1, padding: '12px' }} className="menu-list-scroll">
                    <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-heading-mono)', color: 'var(--color-text-muted)', marginBottom: '12px', textTransform: 'uppercase' }}>
                      SELECT ITEMS (All priced at ₹1 for sandbox)
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {menuItems.map(item => {
                        const qty = cart[item.id]?.qty || 0;
                        return (
                          <div 
                            key={item.id}
                            style={{
                              padding: '10px',
                              border: '1.5px solid var(--color-border)',
                              borderRadius: 'var(--radius-sm)',
                              backgroundColor: 'var(--color-surface)',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              transition: 'border-color 0.2s'
                            }}
                          >
                            <div style={{ maxWidth: '65%' }}>
                              <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>{item.name}</h4>
                              <p style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>{item.desc}</p>
                              <span style={{ fontFamily: 'var(--font-heading-mono)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', display: 'inline-block', marginTop: '4px' }}>
                                ₹{item.price}
                              </span>
                            </div>
                            
                            {/* Qty Selector */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1.5px solid var(--color-text-primary)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                              <button 
                                onClick={() => removeFromCart(item)}
                                style={{ padding: '4px 10px', backgroundColor: 'var(--color-surface-subtle)', fontWeight: 800, fontSize: '0.8rem' }}
                              >
                                -
                              </button>
                              <span style={{ fontSize: '0.8rem', fontWeight: 800, minWidth: '12px', textAlign: 'center', fontFamily: 'var(--font-heading-mono)' }}>
                                {qty}
                              </span>
                              <button 
                                onClick={() => addToCart(item)}
                                style={{ padding: '4px 10px', backgroundColor: 'var(--color-surface-subtle)', fontWeight: 800, fontSize: '0.8rem' }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sticky Footer */}
                  {getCartTotalItems() > 0 && (
                    <button 
                      onClick={handleProceedToCart}
                      style={{
                        padding: '14px',
                        backgroundColor: 'var(--color-text-primary)',
                        color: 'var(--color-surface)',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-heading-mono)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      View Cart & Checkout ({getCartTotalItems()} items) <ShoppingCart size={16} />
                    </button>
                  )}
                </div>
              )}

              {/* 2. CART SCREEN */}
              {screen === 'cart' && (
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, backgroundColor: 'var(--color-surface)', padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-3)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Your Cart</h3>
                    <button onClick={() => setScreen('menu')} style={{ fontSize: '0.75rem', fontWeight: 700, textDecoration: 'underline' }}>Back</button>
                  </div>

                  <div style={{ overflowY: 'auto', flexGrow: 1, marginBottom: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {Object.values(cart).map(item => (
                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
                          <span>{item.name} (x{item.qty})</span>
                          <span style={{ fontFamily: 'var(--font-heading-mono)', fontWeight: 700 }}>₹{item.price * item.qty}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', fontWeight: 800, fontSize: '0.9rem' }}>
                      <span>Total Amount:</span>
                      <span style={{ color: 'var(--color-accent)' }}>₹1.00 <span style={{ fontSize: '0.65rem', textDecoration: 'line-through', color: 'var(--color-text-muted)', marginLeft: '4px' }}>₹{getCartTotalItems()}</span></span>
                    </div>

                    {/* Phone Number Ingest */}
                    <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label 
                        htmlFor="cart-phone" 
                        style={{
                          fontFamily: 'var(--font-heading-mono)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: 'var(--color-text-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        Enter WhatsApp Number
                      </label>
                      <input 
                        id="cart-phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+91 98765 43210"
                        style={{
                          width: '100%',
                          border: '2px solid var(--color-text-primary)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '10px 12px',
                          fontSize: '0.85rem',
                          backgroundColor: 'var(--color-bg)'
                        }}
                      />
                      <p style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                        This is where the simulated WhatsApp invoice bill will be dispatched.
                      </p>
                    </div>

                    {/* Custom Instructions */}
                    <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label 
                        htmlFor="cart-instructions" 
                        style={{
                          fontFamily: 'var(--font-heading-mono)',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          color: 'var(--color-text-primary)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        Custom Instructions
                      </label>
                      <textarea 
                        id="cart-instructions"
                        rows={2}
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="e.g., Make it extra spicy, no ice"
                        style={{
                          width: '100%',
                          border: '2px solid var(--color-text-primary)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '10px 12px',
                          fontSize: '0.8rem',
                          backgroundColor: 'var(--color-bg)',
                          resize: 'none'
                        }}
                      />
                    </div>

                    {/* Geo-location Verification */}
                    <div style={{ marginTop: '16px', padding: '10px', border: '1.5px solid var(--color-text-primary)', backgroundColor: 'var(--color-surface-subtle)', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-heading-mono)', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        📍 Geo-Verified Origin
                      </span>
                      {!location.requested ? (
                        <div style={{ marginTop: '6px' }}>
                          <p style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                            We require location to verify your order area node.
                          </p>
                          <button
                            onClick={triggerGeolocation}
                            style={{
                              width: '100%',
                              padding: '6px 12px',
                              backgroundColor: 'var(--color-text-primary)',
                              color: 'var(--color-surface)',
                              fontFamily: 'var(--font-heading-mono)',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              cursor: 'pointer',
                              border: 'none',
                              borderRadius: 'var(--radius-sm)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '4px'
                            }}
                          >
                            Verify Delivery Location
                          </button>
                        </div>
                      ) : location.loading ? (
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '4px' }}>Resolving billing address...</p>
                      ) : (
                        <div style={{ marginTop: '4px' }}>
                          <p style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-text-primary)' }}>{location.name}</p>
                          <p style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginTop: '2px', lineHeight: 1.3 }}>{location.address}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <button 
                    disabled={!location.requested || location.loading}
                    onClick={handlePay}
                    style={{
                      width: '100%',
                      padding: '14px',
                      backgroundColor: (!location.requested || location.loading) ? 'var(--color-surface-subtle)' : 'var(--color-accent)',
                      color: (!location.requested || location.loading) ? 'var(--color-text-muted)' : '#000',
                      border: '2px solid var(--color-text-primary)',
                      boxShadow: (!location.requested || location.loading) ? 'none' : '4px 4px 0px var(--color-text-primary)',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-heading-mono)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      cursor: (!location.requested || location.loading) ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {!location.requested ? 'Verify Location First' : location.loading ? 'Resolving Location...' : <>Pay ₹1.00 <ArrowRight size={16} /></>}
                  </button>
                </div>
              )}

              {/* 3. PAYMENT PORTAL SIMULATION */}
              {screen === 'payment' && (
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, backgroundColor: 'var(--color-surface)', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
                  {paymentStatus === 'processing' ? (
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                      <RefreshCw className="animate-spin" size={40} style={{ color: 'var(--color-accent)' }} />
                      <h3 style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'var(--font-heading-mono)' }}>PROCESSING SANDBOX PAYMENT...</h3>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Awaiting Secure Gateway Loop Confirmation (₹1.00)</p>
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                      <CheckCircle2 size={48} style={{ color: 'var(--color-accent)' }} />
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-heading-mono)' }}>PAYMENT SUCCESSFUL!</h3>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Invoice template is compiling on our WhatsApp relay engine.</p>
                    </div>
                  )}
                </div>
              )}

              {/* 4. WHATSAPP CHAT SIMULATION */}
              {screen === 'whatsapp' && (
                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, backgroundColor: 'var(--color-surface-subtle)' }}>
                  {/* WhatsApp Header */}
                  <div 
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#075E54',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <div 
                      style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '50%', 
                        backgroundColor: '#128C7E', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.85rem'
                      }}
                    >
                      F
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        Flowify Alerts <ShieldCheck size={14} fill="#fff" style={{ color: '#075E54' }} />
                      </span>
                      <span style={{ fontSize: '0.6rem', opacity: 0.8 }}>Official Business Node</span>
                    </div>
                  </div>

                  {/* Message Bubble Field */}
                  <div 
                    ref={chatScrollRef}
                    style={{ flexGrow: 1, padding: '12px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }} 
                    className="whatsapp-bubbles-container"
                  >
                    {chatMessages.map((msg, index) => (
                      <div 
                        key={index}
                        style={{
                          backgroundColor: '#DCF8C6',
                          border: '1px solid #c7e5b2',
                          borderRadius: '8px',
                          padding: '10px 12px',
                          maxWidth: '85%',
                          alignSelf: 'flex-start',
                          fontSize: '0.75rem',
                          color: '#000',
                          whiteSpace: 'pre-wrap',
                          boxShadow: '0 1px 1px rgba(0,0,0,0.1)'
                        }}
                      >
                        {msg.text}
                      </div>
                    ))}

                    {/* Typing Loader */}
                    {isTyping && (
                      <div 
                        style={{
                          backgroundColor: '#FFF',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          alignSelf: 'flex-start',
                          fontSize: '0.75rem',
                          color: 'var(--color-text-secondary)',
                          fontStyle: 'italic'
                        }}
                      >
                        Flowify Alerts is typing...
                      </div>
                    )}
                  </div>

                  {/* Footer restart trigger */}
                  <div style={{ padding: '12px', borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)', display: 'flex', justifyContent: 'center' }}>
                    <button 
                      onClick={resetDemo}
                      style={{
                        padding: '10px 16px',
                        backgroundColor: 'var(--color-text-primary)',
                        color: 'var(--color-surface)',
                        border: '2px solid var(--color-text-primary)',
                        boxShadow: '3px 3px 0px var(--color-text-primary)',
                        fontFamily: 'var(--font-heading-mono)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-1px, -1px)';
                        e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-text-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '3px 3px 0px var(--color-text-primary)';
                      }}
                    >
                      Reset Simulator <RefreshCw size={12} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Operational Log Console or Geofencing Radar */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'stretch' }}>
            {screen === 'cart' ? (
              !location.requested ? (
                /* 1. Radar Screen prior to Location Verification */
                <div 
                  style={{
                    flexGrow: 1,
                    border: '2px solid var(--color-text-primary)',
                    backgroundColor: '#0F0F13',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: '8px 8px 0px var(--color-text-primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 'var(--space-6)',
                    minHeight: '400px',
                    maxHeight: '600px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div className="radar-grid" style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    border: '2px dashed rgba(57, 255, 20, 0.2)',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '1.5px dashed rgba(57, 255, 20, 0.3)' }} />
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '1px dashed rgba(57, 255, 20, 0.4)' }} />
                    <div style={{ position: 'absolute', width: '100%', height: '1px', backgroundColor: 'rgba(57, 255, 20, 0.15)' }} />
                    <div style={{ position: 'absolute', height: '100%', width: '1px', backgroundColor: 'rgba(57, 255, 20, 0.15)' }} />
                    <div className="radar-sweep" style={{
                      position: 'absolute',
                      width: '50%',
                      height: '50%',
                      top: 0,
                      left: 0,
                      transformOrigin: 'bottom right',
                      background: 'linear-gradient(45deg, rgba(57, 255, 20, 0.15) 0%, transparent 100%)',
                      borderRight: '1px solid rgba(57, 255, 20, 0.5)'
                    }} />
                  </div>

                  <h3 style={{ 
                    fontFamily: 'var(--font-heading-mono)', 
                    color: '#39FF14', 
                    fontSize: '0.9rem', 
                    fontWeight: 800, 
                    textAlign: 'center',
                    textTransform: 'uppercase', 
                    letterSpacing: '0.05em',
                    marginBottom: '8px'
                  }}>
                    [ Geofencing & Routing Gateway ]
                  </h3>
                  <p style={{ 
                    fontSize: '0.75rem', 
                    color: 'var(--color-text-secondary)', 
                    textAlign: 'center', 
                    maxWidth: '280px',
                    lineHeight: 1.4
                  }}>
                    Awaiting geofencing authorization from user device. Trigger location request in the simulator to verify order delivery zone.
                  </p>
                </div>
              ) : (
                /* 2. Location Enabled: Show Radar Lock + Terminal stacked */
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', height: '100%', justifyContent: 'stretch' }}>
                  <div 
                    style={{
                      border: '2px solid var(--color-text-primary)',
                      backgroundColor: '#0F0F13',
                      borderRadius: 'var(--radius-sm)',
                      boxShadow: '4px 4px 0px var(--color-text-primary)',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="radar-grid" style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      border: '1.5px dashed rgba(57, 255, 20, 0.4)',
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0
                    }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px dashed rgba(57, 255, 20, 0.5)' }} />
                      <div style={{ 
                        position: 'absolute', 
                        width: '8px', 
                        height: '8px', 
                        borderRadius: '50%', 
                        backgroundColor: '#39FF14', 
                        boxShadow: '0 0 10px #39FF14',
                        animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
                      }} />
                    </div>

                    <div style={{ flexGrow: 1, fontFamily: 'var(--font-heading-mono)', fontSize: '0.75rem', color: '#39FF14' }}>
                      <div style={{ fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span className="live-indicator-dot" /> NODE GEOLOCKED
                      </div>
                      <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.7rem' }}>
                        <strong>Coordinates:</strong> {location.lat?.toFixed(5)}°N, {location.lon?.toFixed(5)}°E
                      </div>
                      <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.7rem', marginTop: '2px' }}>
                        <strong>Order Radius:</strong> {location.loading ? 'Calculating...' : 'Geolocked within 5.0km'} (Node: {location.name || 'Resolving...'})
                      </div>
                      <div style={{ color: '#fff', fontSize: '0.7rem', marginTop: '4px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '240px' }}>
                        {location.address || 'Resolving address...'}
                      </div>
                    </div>
                  </div>

                  <div 
                    style={{
                      flexGrow: 1,
                      border: '2px solid var(--color-text-primary)',
                      backgroundColor: '#0F0F13',
                      color: '#39FF14',
                      borderRadius: 'var(--radius-sm)',
                      boxShadow: '8px 8px 0px var(--color-text-primary)',
                      fontFamily: 'var(--font-heading-mono)',
                      fontSize: '0.8rem',
                      lineHeight: 1.5,
                      padding: 'var(--space-4)',
                      overflowY: 'auto',
                      minHeight: '260px',
                      maxHeight: '440px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    className="terminal-console-panel"
                  >
                    <div 
                      style={{
                        borderBottom: '1.5px solid #222',
                        paddingBottom: '8px',
                        marginBottom: '12px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.7rem',
                        color: '#6E6E7A'
                      }}
                    >
                      <span>OPERATIONAL INTEGRATION RELAYS</span>
                      <span style={{ color: 'var(--color-accent)' }}>● INGEST ACTIVE</span>
                    </div>

                    <div 
                      ref={terminalScrollRef}
                      style={{ flexGrow: 1, overflowY: 'auto' }} 
                      className="terminal-lines-scroll"
                    >
                      {logs.map((log, index) => {
                        let color = '#39FF14';
                        if (log.type === 'system') color = '#0284C7';
                        if (log.type === 'success') color = '#10B981';
                        if (log.type === 'warn') color = '#D97706';
                        return (
                          <div key={index} style={{ color, marginBottom: '6px', fontFamily: 'var(--font-heading-mono)' }}>
                            {log.text}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )
            ) : (
              /* 3. Non-Cart Screens: Show Terminal console normally */
              <div 
                style={{
                  flexGrow: 1,
                  border: '2px solid var(--color-text-primary)',
                  backgroundColor: '#0F0F13',
                  color: '#39FF14',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: '8px 8px 0px var(--color-text-primary)',
                  fontFamily: 'var(--font-heading-mono)',
                  fontSize: '0.8rem',
                  lineHeight: 1.5,
                  padding: 'var(--space-4)',
                  overflowY: 'auto',
                  minHeight: '320px',
                  maxHeight: '600px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="terminal-console-panel"
              >
                <div 
                  style={{
                    borderBottom: '1.5px solid #222',
                    paddingBottom: '8px',
                    marginBottom: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.7rem',
                    color: '#6E6E7A'
                  }}
                >
                  <span>OPERATIONAL INTEGRATION RELAYS</span>
                  <span style={{ color: 'var(--color-accent)' }}>● INGEST ACTIVE</span>
                </div>

                <div 
                  ref={terminalScrollRef}
                  style={{ flexGrow: 1, overflowY: 'auto' }} 
                  className="terminal-lines-scroll"
                >
                  {logs.map((log, index) => {
                    let color = '#39FF14';
                    if (log.type === 'system') color = '#0284C7';
                    if (log.type === 'success') color = '#10B981';
                    if (log.type === 'warn') color = '#D97706';
                    return (
                      <div key={index} style={{ color, marginBottom: '6px', fontFamily: 'var(--font-heading-mono)' }}>
                        {log.text}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Internal scroll and animations styles */}
      <style>{`
        .menu-list-scroll::-webkit-scrollbar,
        .terminal-lines-scroll::-webkit-scrollbar,
        .whatsapp-bubbles-container::-webkit-scrollbar {
          width: 4px;
        }
        .menu-list-scroll::-webkit-scrollbar-thumb,
        .terminal-lines-scroll::-webkit-scrollbar-thumb,
        .whatsapp-bubbles-container::-webkit-scrollbar-thumb {
          background-color: var(--color-border);
          border-radius: 2px;
        }
        
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes radar-sweep {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .radar-sweep {
          animation: radar-sweep 4s linear infinite;
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .live-indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #39FF14;
          display: inline-block;
          box-shadow: 0 0 8px #39FF14;
          animation: blink 1s ease-in-out infinite alternate;
        }
        @keyframes blink {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};
