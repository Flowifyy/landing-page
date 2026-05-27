(function() {
  'use strict';

  // ==========================================
  // 1. THEME MANAGEMENT (Light / Dark Mode)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  function getTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Default to dark mode, check if system prefers light
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }

  // Initialize Theme
  applyTheme(getTheme());

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.classList.contains('light') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
  });


  // ==========================================
  // 2. MOBILE NAVIGATION OVERLAY
  // ==========================================
  const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMobileMenu() {
    mobileMenuTrigger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  function closeMobileMenu() {
    mobileMenuTrigger.classList.remove('active');
    navMenu.classList.remove('active');
  }

  mobileMenuTrigger.addEventListener('click', toggleMobileMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });


  // ==========================================
  // 3. WORKFLOW FRICTION CALCULATOR & LEAK DETECTOR
  // ==========================================
  const painCheckboxes = document.querySelectorAll('.checkbox-input');
  const hoursDisplay = document.getElementById('hours-display');
  const ratingValueText = document.getElementById('friction-rating-val');
  const gaugeFillArc = document.getElementById('gauge-fill-arc');
  
  const resultsVerdict = document.getElementById('results-verdict');
  const resultsFeedback = document.getElementById('results-feedback');
  
  // Financial Ledger DOM Elements
  const leakBadge = document.getElementById('leak-badge');
  const ledgerLaborVal = document.getElementById('ledger-labor-val');
  const ledgerLeadsVal = document.getElementById('ledger-leads-val');
  const ledgerAdminVal = document.getElementById('ledger-admin-val');
  const ledgerTotalVal = document.getElementById('ledger-total-val');
  const totalDrainRow = document.querySelector('.total-drain-row');

  function updateFrictionScore() {
    const checkedBoxes = Array.from(painCheckboxes).filter(cb => cb.checked);
    const checkedCount = checkedBoxes.length;
    
    // Dynamic Wasted Hours estimation based on checked routines
    let hoursWasted = 0;
    if (document.getElementById('pain-sync').checked) hoursWasted += 5;
    if (document.getElementById('pain-sheets').checked) hoursWasted += 4;
    if (document.getElementById('pain-leads').checked) hoursWasted += 3;
    if (document.getElementById('pain-social').checked) hoursWasted += 4;
    if (document.getElementById('pain-admin').checked) hoursWasted += 6;
    
    // Update hours wasted label
    hoursDisplay.textContent = `${hoursWasted}h/week`;
    
    if (checkedCount === 0) {
      // System fully optimized
      setGaugeValue(0, 'var(--color-terminal-green)');
      resultsVerdict.textContent = 'SYSTEM STATE: OPTIMIZED';
      resultsVerdict.style.color = 'var(--color-terminal-green)';
      resultsFeedback.textContent = 'Zero friction checkpoints flagged. Your company operations are fully streamlined and operating under nominal specs.';
      
      // Zero out financial drain ledger
      leakBadge.textContent = 'STATUS: FULLY_OPTIMIZED';
      leakBadge.style.backgroundColor = 'var(--color-terminal-green)';
      ledgerLaborVal.textContent = '+₹0/mo';
      ledgerLaborVal.style.color = 'var(--color-terminal-green)';
      ledgerLeadsVal.textContent = '+₹0/mo';
      ledgerLeadsVal.style.color = 'var(--color-terminal-green)';
      ledgerAdminVal.textContent = '+₹0/mo';
      ledgerAdminVal.style.color = 'var(--color-terminal-green)';
      ledgerTotalVal.textContent = '+₹0/yr';
      ledgerTotalVal.style.color = 'var(--color-terminal-green)';
      ledgerTotalVal.style.textShadow = '0 0 8px rgba(50, 215, 75, 0.2)';
      if (totalDrainRow) {
        totalDrainRow.style.backgroundColor = 'color-mix(in srgb, var(--color-terminal-green) 8%, transparent)';
        totalDrainRow.style.borderColor = 'color-mix(in srgb, var(--color-terminal-green) 25%, transparent)';
      }
      return;
    }
    
    // Friction math: base checked percentage compounded slightly by hours wasted
    const baseScore = checkedCount * 20; // 5 checkpoints = max 100
    const compoundFactor = 1 + ((hoursWasted - 12) * 0.02); // scale factor relative to 12 hour standard
    const computedScore = Math.min(100, Math.max(1, Math.round(baseScore * compoundFactor)));
    
    // Financial Drain calculations in Indian Rupees (₹)
    // Indian professional admin/staff labor cost average: ₹200/hour (Tier 1/2 city)
    let wastedLabor = hoursWasted * 200 * 4; // Wasted Labor = hours * ₹200 * 4 weeks
    
    // Leaked leads revenue loss in Rupees
    let leakedLeads = 0;
    const isLeadsChecked = document.getElementById('pain-leads').checked;
    const isSyncChecked = document.getElementById('pain-sync').checked;
    const isSheetsChecked = document.getElementById('pain-sheets').checked;
    
    if (isLeadsChecked) leakedLeads += 40000; // ~8 lost local bookings/mo @ ₹5,000 avg ticket
    if (isSyncChecked) leakedLeads += 15000;   // lost bookings due to manual sync errors
    if (isSheetsChecked) leakedLeads += 12000;  // lost billing from Tally/POS conflicts
    
    // Administrative drain in Rupees
    let adminDrain = 0;
    const isSocialChecked = document.getElementById('pain-social').checked;
    const isAdminChecked = document.getElementById('pain-admin').checked;
    
    if (isSocialChecked) adminDrain += 5000;  // wasted manager design & scheduling overhead
    if (isAdminChecked) adminDrain += 10000;   // delayed GST invoicing and collection gaps
    
    let totalMonthlyLeak = wastedLabor + leakedLeads + adminDrain;
    let totalAnnualLeak = totalMonthlyLeak * 12;

    // Indian Currency Formatter (lakhs / crores standard)
    const formatCurrency = (val) => `₹${val.toLocaleString('en-IN')}`;
    
    ledgerLaborVal.textContent = formatCurrency(wastedLabor) + '/mo';
    ledgerLeadsVal.textContent = formatCurrency(leakedLeads) + '/mo';
    ledgerAdminVal.textContent = formatCurrency(adminDrain) + '/mo';
    ledgerTotalVal.textContent = formatCurrency(totalAnnualLeak) + '/yr';

    // Diagnostics verdicts and glowing oscilloscope colors based on friction levels
    let color = 'var(--color-terminal-green)';
    if (computedScore <= 30) {
      color = 'var(--color-terminal-green)';
      resultsVerdict.textContent = 'SYSTEM STATE: STEADY';
      resultsVerdict.style.color = color;
      resultsFeedback.textContent = `Friction Rating: Low (${computedScore}%). Your workflow is relatively smooth, but introducing WhatsApp Business auto-replies and Tally-POS syncs will save your staff up to ${hoursWasted * 4} hours per month.`;
      
      leakBadge.textContent = 'STATUS: MINOR_LEAKS';
      leakBadge.style.backgroundColor = 'var(--color-terminal-amber)';
      ledgerLaborVal.style.color = 'var(--color-terminal-amber)';
      ledgerLeadsVal.style.color = 'var(--color-terminal-amber)';
      ledgerAdminVal.style.color = 'var(--color-terminal-amber)';
      ledgerTotalVal.style.color = 'var(--color-terminal-amber)';
      ledgerTotalVal.style.textShadow = '0 0 8px rgba(255, 159, 10, 0.2)';
      if (totalDrainRow) {
        totalDrainRow.style.backgroundColor = 'color-mix(in srgb, var(--color-terminal-amber) 8%, transparent)';
        totalDrainRow.style.borderColor = 'color-mix(in srgb, var(--color-terminal-amber) 25%, transparent)';
      }
    } else if (computedScore <= 60) {
      color = 'var(--color-terminal-amber)';
      resultsVerdict.textContent = 'SYSTEM STATE: UNSTABLE';
      resultsVerdict.style.color = color;
      resultsFeedback.textContent = `Friction Rating: Moderate (${computedScore}%). Siloed software and delayed replies to Justdial/Google Business inquiries are costing you customers. Integrating your lead sources into Zoho CRM with auto-WhatsApp replies will lock in clients faster.`;
      
      leakBadge.textContent = 'STATUS: MODERATE_LEAKS';
      leakBadge.style.backgroundColor = 'var(--color-terminal-amber)';
      ledgerLaborVal.style.color = 'var(--color-terminal-amber)';
      ledgerLeadsVal.style.color = 'var(--color-terminal-amber)';
      ledgerAdminVal.style.color = 'var(--color-terminal-amber)';
      ledgerTotalVal.style.color = 'var(--color-terminal-amber)';
      ledgerTotalVal.style.textShadow = '0 0 8px rgba(255, 159, 10, 0.2)';
      if (totalDrainRow) {
        totalDrainRow.style.backgroundColor = 'color-mix(in srgb, var(--color-terminal-amber) 8%, transparent)';
        totalDrainRow.style.borderColor = 'color-mix(in srgb, var(--color-terminal-amber) 25%, transparent)';
      }
    } else if (computedScore <= 80) {
      color = 'var(--color-terminal-amber)';
      resultsVerdict.textContent = 'SYSTEM STATE: DEGRADED';
      resultsVerdict.style.color = color;
      resultsFeedback.textContent = `Friction Rating: High (${computedScore}%). Manual double-entry between Tally, your POS, and spreadsheets is burning out staff. Automating GST invoicing and billing into custom portals is highly recommended.`;
      
      leakBadge.textContent = 'STATUS: DEGRADED_PIPELINES';
      leakBadge.style.backgroundColor = 'var(--color-terminal-red)';
      ledgerLaborVal.style.color = 'var(--color-terminal-red)';
      ledgerLeadsVal.style.color = 'var(--color-terminal-red)';
      ledgerAdminVal.style.color = 'var(--color-terminal-red)';
      ledgerTotalVal.style.color = 'var(--color-terminal-red)';
      ledgerTotalVal.style.textShadow = '0 0 8px rgba(255, 69, 58, 0.2)';
      if (totalDrainRow) {
        totalDrainRow.style.backgroundColor = 'color-mix(in srgb, var(--color-terminal-red) 8%, transparent)';
        totalDrainRow.style.borderColor = 'color-mix(in srgb, var(--color-terminal-red) 25%, transparent)';
      }
    } else {
      color = 'var(--color-terminal-red)';
      resultsVerdict.textContent = 'SYSTEM STATE: CRITICAL FAULT';
      resultsVerdict.style.color = color;
      resultsFeedback.textContent = `Friction Rating: Critical (${computedScore}%). Severe operational overhead. Staff is drowning in copy-paste loops between WhatsApp, Tally, and spreadsheets while delayed quotes bleed bookings to competitors. Immediate workflow engineering required.`;
      
      leakBadge.textContent = 'STATUS: ACTIVE LEAKS';
      leakBadge.style.backgroundColor = 'var(--color-terminal-red)';
      ledgerLaborVal.style.color = 'var(--color-terminal-red)';
      ledgerLeadsVal.style.color = 'var(--color-terminal-red)';
      ledgerAdminVal.style.color = 'var(--color-terminal-red)';
      ledgerTotalVal.style.color = 'var(--color-terminal-red)';
      ledgerTotalVal.style.textShadow = '0 0 8px rgba(255, 69, 58, 0.2)';
      if (totalDrainRow) {
        totalDrainRow.style.backgroundColor = 'color-mix(in srgb, var(--color-terminal-red) 8%, transparent)';
        totalDrainRow.style.borderColor = 'color-mix(in srgb, var(--color-terminal-red) 25%, transparent)';
      }
    }
    
    setGaugeValue(computedScore, color);
  }

  function setGaugeValue(value, color) {
    ratingValueText.textContent = `${value}%`;
    ratingValueText.style.color = color || 'var(--color-text-primary)';
    gaugeFillArc.style.stroke = color || 'var(--color-text-primary)';
    
    // Circumference is 2 * Math.PI * 70 = 439.82 (declared as 440)
    const circumference = 440;
    const offset = circumference - (circumference * value / 100);
    gaugeFillArc.style.strokeDashoffset = offset;
  }

  // Bind Calculator Events
  painCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateFrictionScore);
  });
  
  // Trigger initial paint
  updateFrictionScore();


  // ==========================================
  // 4. LEAD DIALOG MODAL CAPTURE
  // ==========================================
  const requestAuditBtn = document.getElementById('request-audit-btn');
  const auditDialog = document.getElementById('audit-dialog');
  const closeDialogBtn = document.getElementById('close-dialog-btn');
  const dialogFrictionVal = document.getElementById('dialog-friction-val');
  const auditLeadForm = document.getElementById('audit-lead-form');

  requestAuditBtn.addEventListener('click', () => {
    // Sync computed annual operational leak text into dialog
    dialogFrictionVal.textContent = ledgerTotalVal.textContent;
    dialogFrictionVal.style.color = ledgerTotalVal.style.color;
    auditDialog.showModal();
  });

  closeDialogBtn.addEventListener('click', () => {
    auditDialog.close();
  });

  // Close dialog on backdrop click
  auditDialog.addEventListener('click', (e) => {
    const dialogDimensions = auditDialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      auditDialog.close();
    }
  });

  auditLeadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('lead-name').value;
    const email = document.getElementById('lead-email').value;
    const company = document.getElementById('lead-company').value || 'Unspecified Corp';
    const computedLeak = ledgerTotalVal.textContent;

    // Display high-end mock response
    alert(`DIAGNOSTIC LEAK REPORT SUBMITTED\n--------------------------------\nSubject: ${name}\nOrganization: ${company}\nTarget Email: ${email}\nExposed Annual Leak: ${computedLeak}\n\nOur system architects will draft your customized operational repair blueprint to plug your ${computedLeak} drain. Expect your blueprint within 12 hours via email.`);
    
    auditLeadForm.reset();
    auditDialog.close();
  });


  // ==========================================
  // 5. TESTIMONIALS CAROUSEL SLIDER
  // ==========================================
  const carouselWrapper = document.getElementById('carousel-wrapper');
  const prevBtn = document.getElementById('prev-review-btn');
  const nextBtn = document.getElementById('next-review-btn');

  function scrollCarousel(direction) {
    if (!carouselWrapper) return;
    
    const cardWidth = carouselWrapper.querySelector('.testimonial-card').offsetWidth;
    const gap = 32; // Matches gap: 2rem (32px) in CSS
    const scrollAmount = cardWidth + gap;
    
    carouselWrapper.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  }

  prevBtn.addEventListener('click', () => scrollCarousel('prev'));
  nextBtn.addEventListener('click', () => scrollCarousel('next'));


  // ==========================================
  // 6. SCRIPTLAND SCROLL FALLBACKS
  // ==========================================
  
  // Passive scroll fallback for Shrinking Header
  const supportsScrollDrivenAnims = CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)');
  
  if (!supportsScrollDrivenAnims) {
    const header = document.getElementById('main-header');
    const initialHeight = 90;
    const finalHeight = 60;
    const shrinkDistance = 100;
    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const scrollPercent = Math.min(1, scrollY / shrinkDistance);
      const computedHeight = initialHeight - (initialHeight - finalHeight) * scrollPercent;
      
      header.style.height = `${computedHeight}px`;
      if (scrollY > 50) {
        header.style.borderColor = 'var(--color-border-high)';
        header.style.backgroundColor = 'color-mix(in srgb, var(--color-bg) 90%, transparent)';
      } else {
        header.style.borderColor = 'var(--color-border)';
        header.style.backgroundColor = 'color-mix(in srgb, var(--color-bg) 70%, transparent)';
      }
    }, { passive: true });
  }

  // Intersection Observer to trigger reveals and stagger load animations
  const supportsViewTimeline = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
  
  // Always observe .reveal-stagger because staggering children requires a single trigger class.
  // Only observe .scroll-reveal if native CSS view timelines are NOT supported.
  const revealSelector = supportsViewTimeline ? '.reveal-stagger' : '.scroll-reveal, .reveal-stagger';
  const revealElements = document.querySelectorAll(revealSelector);
  
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before entering fully
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // Update footer year dynamically
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // ==========================================
  // 7. DYNAMIC HERO TERMINAL LOGS
  // ==========================================
  const terminalBody = document.getElementById('terminal-log-output');
  
  if (terminalBody) {
    const logs = [
      { text: "BOOTING FLOWIFY KERNEL // BHARAT_BUSINESS_CORE", type: "ok" },
      { text: "CALIBRATING PIPELINE CHANNELS...", type: "proc" },
      { text: "SYSTEM DIAGNOSTICS: NOMINAL SPEC // READY", type: "ok" },
      { text: "[WARN] Justdial lead booking idle > 2.5 hours.", type: "warn" },
      { text: "[PROC] Initializing WhatsApp Business auto-responder...", type: "proc" },
      { text: "[OK]   WhatsApp auto-booking ENGAGED [LEAD SECURED]", type: "ok" },
      { text: "[WARN] GST invoice mismatch detected in Tally ledger.", type: "warn" },
      { text: "[PROC] Synchronizing Zoho CRM \u2192 Tally ERP pipeline...", type: "proc" },
      { text: "[OK]   Tally billing database fully SYNCED [LATENCY: 0.28s]", type: "ok" },
      { text: "[WARN] Google Business Profile promo spec missing.", type: "warn" },
      { text: "[PROC] Syndicating offers to Justdial + Google Maps...", type: "proc" },
      { text: "[OK]   Justdial & Google Maps local listings UPDATED.", type: "ok" },
      { text: "[PROC] Routing IndiaMART inquiry to Zoho CRM...", type: "proc" },
      { text: "[OK]   Razorpay payment webhook processed [\u20B912,500]", type: "ok" }
    ];
    
    let logIndex = 0;
    
    function addLogLine() {
      if (logIndex >= logs.length) {
        // Clear terminal and loop
        terminalBody.innerHTML = '';
        logIndex = 0;
      }
      
      const log = logs[logIndex];
      const logLineDiv = document.createElement('div');
      logLineDiv.className = `log-line ${log.type}`;
      logLineDiv.textContent = `> ${log.text}`;
      
      terminalBody.appendChild(logLineDiv);
      terminalBody.scrollTop = terminalBody.scrollHeight;
      
      logIndex++;
      
      // Dynamic intervals based on log states to make it look highly authentic
      let delay = 1200;
      if (log.type === 'warn') delay = 600;
      if (log.type === 'proc') delay = 1800;
      
      setTimeout(addLogLine, delay);
    }
    
    // Append flashing cursor initially
    setTimeout(addLogLine, 500);
  }


  // ==========================================
  // 8. INTERACTIVE DYNAMIC AUTOMATION ENGINE COCKPIT
  // ==========================================
  const blueprint = document.getElementById('hero-blueprint');
  const cockpitModeCheckbox = document.getElementById('cockpit-mode-checkbox');
  const systemStatusIndicator = document.getElementById('system-status-indicator');
  const btnInjectLead = document.getElementById('btn-inject-lead');
  const btnRebootCockpit = document.getElementById('btn-reboot-cockpit');

  if (blueprint) {
    let mode = 'flow'; // 'flow' or 'friction'
    let packets = [];
    let animationFrameId = null;

    // Define Node Centers (in absolute percentages matching SVG lines)
    const nodeCoords = {
      intake: { x: 22, y: 28 },
      hub: { x: 50, y: 50 },
      scheduler: { x: 78, y: 28 },
      billing: { x: 78, y: 72 },
      distrib: { x: 22, y: 72 }
    };

    // Define Neon Colors matching branding variables
    const packetColors = {
      ingest: 'var(--color-terminal-amber)',
      booking: 'var(--color-terminal-green)',
      invoice: 'var(--color-terminal-cyan)',
      promo: 'var(--color-terminal-cyan)',
      sync: 'var(--color-terminal-green)',
      warn: 'var(--color-terminal-red)'
    };

    // Helper to log programmatically to hero terminal
    function logToKernel(text, type = 'ok') {
      const terminalBody = document.getElementById('terminal-log-output');
      if (terminalBody) {
        const logLineDiv = document.createElement('div');
        logLineDiv.className = `log-line ${type}`;
        logLineDiv.textContent = `> ${text}`;
        terminalBody.appendChild(logLineDiv);
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    }

    // Toggle Cockpit State Function
    function setCockpitState(state) {
      mode = state;
      if (state === 'flow') {
        blueprint.classList.remove('friction-state');
        blueprint.classList.add('flow-state');
        systemStatusIndicator.textContent = 'STATUS: ONLINE // NOMINAL_FLOW';
        document.querySelector('.toggle-label.flow').classList.add('active');
        document.querySelector('.toggle-label.friction').classList.remove('active');
        cockpitModeCheckbox.checked = true;

        logToKernel("AUTOMATION ENGINE: ONLINE [ALL FEEDS NOMINAL]", "ok");
        logToKernel("[OK]   All business channels feeding into engine.", "ok");
      } else {
        blueprint.classList.remove('flow-state');
        blueprint.classList.add('friction-state');
        systemStatusIndicator.textContent = 'STATUS: DEGRADED // MANUAL_OVERHEAD';
        document.querySelector('.toggle-label.friction').classList.add('active');
        document.querySelector('.toggle-label.flow').classList.remove('active');
        cockpitModeCheckbox.checked = false;

        logToKernel("[WARN] Operational friction metrics spiking!", "warn");
        logToKernel("[WARN] Justdial leads not reaching engine.", "warn");
        logToKernel("[WARN] Feed pipelines stalled [LATENCY: HIGH]", "warn");
      }
    }

    // Bind slider toggles
    cockpitModeCheckbox.addEventListener('change', () => {
      setCockpitState(cockpitModeCheckbox.checked ? 'flow' : 'friction');
    });

    // Initialize Mode State
    setCockpitState(cockpitModeCheckbox.checked ? 'flow' : 'friction');

    // Node Clicks -> Emit Test Pings
    const nodes = document.querySelectorAll('.cockpit-node');
    nodes.forEach(node => {
      node.addEventListener('click', () => {
        const nodeId = node.id.replace('node-', '');
        
        // Shoot quick custom diagnostic packet
        logToKernel(`Self-diagnostics ping requested on [${nodeId.toUpperCase()}]`, "proc");
        
        if (nodeId !== 'hub') {
          spawnPacket('hub', nodeId, 'PING [OK]', packetColors.sync, 0.03, true);
        } else {
          spawnPacket('intake', 'hub', 'SYS FORCE', packetColors.ingest, 0.02);
        }
      });
    });

    // Packet Class
    class CockpitPacket {
      constructor(fromId, toId, label, color, speed = 0.015, isPing = false) {
        this.fromId = fromId;
        this.toId = toId;
        this.label = label;
        this.color = color;
        this.speed = speed;
        this.isPing = isPing;
        this.progress = 0;

        // Create DOM element
        this.el = document.createElement('div');
        this.el.className = 'cockpit-packet';
        this.el.style.setProperty('--packet-color', this.color);
        this.el.style.backgroundColor = this.color;
        this.el.innerHTML = `<span>${this.label}</span>`;
        blueprint.appendChild(this.el);
      }

      update() {
        // Handle Friction stalling
        let currentSpeed = this.speed;
        if (mode === 'friction') {
          if (this.progress > 0.45 && this.progress < 0.65) {
            // Slow down packet significantly in the bottleneck zone
            currentSpeed = this.speed * 0.12;
            this.el.style.backgroundColor = packetColors.warn;
            this.el.style.setProperty('--packet-color', packetColors.warn);
            this.el.innerHTML = `<span>[BLOCKED]</span>`;
          } else {
            currentSpeed = this.speed * 0.35;
          }
        }

        this.progress += currentSpeed;

        if (this.progress >= 1) {
          this.progress = 1;
          this.destroy();
          this.triggerTarget();
          return false; // mark for deletion
        }

        // Linear interpolation coordinates
        const start = nodeCoords[this.fromId];
        const end = nodeCoords[this.toId];
        if (start && end) {
          const x = start.x + (end.x - start.x) * this.progress;
          const y = start.y + (end.y - start.y) * this.progress;
          this.el.style.left = `${x}%`;
          this.el.style.top = `${y}%`;
        }

        return true;
      }

      triggerTarget() {
        // Pulse target node
        const targetNode = document.getElementById(`node-${this.toId}`);
        if (targetNode) {
          targetNode.classList.add('pulse-active');
          setTimeout(() => targetNode.classList.remove('pulse-active'), 250);
        }

        if (this.isPing) {
          logToKernel(`[OK] Diagnostics echo received from [${this.toId.toUpperCase()}]`, "ok");
          return;
        }

        // Everything flows INTO the hub — the engine absorbs all data
        if (this.toId === 'hub') {
          if (mode === 'flow') {
            const sourceLabels = {
              intake: '[OK] Justdial lead ingested into engine.',
              scheduler: '[OK] Calendar booking synced into engine.',
              billing: '[OK] Tally invoice data absorbed into engine.',
              distrib: '[OK] Social promo metrics fed into engine.'
            };
            logToKernel(sourceLabels[this.fromId] || '[OK] Data absorbed into engine.', 'ok');
          } else {
            logToKernel(`[WARN] Feed stalled! ${this.fromId.toUpperCase()} data not reaching engine.`, 'warn');
            const hubNode = document.getElementById('node-hub');
            hubNode.style.borderColor = packetColors.warn;
            setTimeout(() => hubNode.style.borderColor = '', 1000);
          }
        }
      }

      destroy() {
        if (this.el && this.el.parentNode) {
          this.el.parentNode.removeChild(this.el);
        }
      }
    }

    function spawnPacket(fromId, toId, label, color, speed, isPing) {
      if (packets.length > 20) return; // Prevent memory leak overflow
      packets.push(new CockpitPacket(fromId, toId, label, color, speed, isPing));
    }

    // Animation loop tick
    function tick() {
      packets = packets.filter(p => p.update());
      animationFrameId = requestAnimationFrame(tick);
    }
    tick();

    // Periodic feed generator — all nodes send data into the engine
    const feedSources = [
      { from: 'intake', label: 'LEAD', color: packetColors.ingest },
      { from: 'scheduler', label: 'BOOKING', color: packetColors.booking },
      { from: 'billing', label: 'INVOICE', color: packetColors.invoice },
      { from: 'distrib', label: 'PROMO', color: packetColors.promo }
    ];
    let feedIndex = 0;
    let autoTriggerInterval = setInterval(() => {
      if (mode === 'flow' && packets.filter(p => !p.isPing).length < 3) {
        const src = feedSources[feedIndex % feedSources.length];
        spawnPacket(src.from, 'hub', src.label, src.color, 0.014);
        feedIndex++;
      }
    }, 2800);

    // Initial burst — all feeds activate
    setTimeout(() => {
      spawnPacket('intake', 'hub', 'LEAD', packetColors.ingest, 0.012);
      setTimeout(() => spawnPacket('scheduler', 'hub', 'BOOKING', packetColors.booking, 0.013), 400);
      setTimeout(() => spawnPacket('billing', 'hub', 'INVOICE', packetColors.invoice, 0.011), 800);
      setTimeout(() => spawnPacket('distrib', 'hub', 'PROMO', packetColors.promo, 0.014), 1200);
    }, 1500);

    // Inject Lead Button Action
    btnInjectLead.addEventListener('click', () => {
      btnInjectLead.style.transform = 'scale(0.96)';
      setTimeout(() => btnInjectLead.style.transform = '', 100);

      logToKernel("Manual lead injection → engine processing.", "proc");
      spawnPacket('intake', 'hub', 'NEW LEAD', packetColors.ingest, 0.018);
    });

    // Reboot System Button Action
    btnRebootCockpit.addEventListener('click', () => {
      btnRebootCockpit.style.transform = 'scale(0.96)';
      setTimeout(() => btnRebootCockpit.style.transform = '', 100);

      // Flush packets
      packets.forEach(p => p.destroy());
      packets = [];

      logToKernel("SYS_REBOOT: Initializing full kernel hot-swap...", "warn");
      logToKernel("SYS_REBOOT: Re-orienting all feed pipelines...", "proc");

      // Flash blueprint visual
      blueprint.style.opacity = '0.3';
      setTimeout(() => {
        blueprint.style.opacity = '1';
        setCockpitState('flow');
        spawnPacket('intake', 'hub', 'SYS OK', packetColors.sync, 0.025);
        setTimeout(() => spawnPacket('billing', 'hub', 'SYS OK', packetColors.sync, 0.022), 300);
      }, 700);
    });
  }

  // ==========================================
  // 9. DYNAMIC SPECIFICATION BUILDER FORM
  // ==========================================
  const specOptionBtns = document.querySelectorAll('.spec-option-btn');
  const specActiveModulesText = document.getElementById('spec-active-modules');
  const specSubmissionForm = document.getElementById('spec-submission-form');
  
  if (specOptionBtns.length > 0) {
    let activeModules = [];
    
    function updateSpecSchematic() {
      activeModules = [];
      specOptionBtns.forEach(btn => {
        if (btn.classList.contains('active')) {
          activeModules.push(btn.getAttribute('data-module').toUpperCase());
        }
      });
      
      if (activeModules.length === 0) {
        specActiveModulesText.textContent = "NONE SELECTED";
        specActiveModulesText.style.color = "var(--color-text-muted)";
      } else {
        specActiveModulesText.textContent = activeModules.join(' + ');
        specActiveModulesText.style.color = "var(--color-text-primary)";
      }
    }
    
    specOptionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        updateSpecSchematic();
      });
    });
    
    // Bind Submission
    if (specSubmissionForm) {
      specSubmissionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (activeModules.length === 0) {
          alert("SPEC INQUIRY ERROR\n--------------------------------\nZero modules selected. Please choose at least one system module above before executing the deploy procedure.");
          return;
        }
        
        const name = document.getElementById('spec-name').value;
        const email = document.getElementById('spec-email').value;
        const bottleneck = document.getElementById('spec-bottleneck').value;
        
        // Print dynamic receipts
        alert(`SYSTEM SPECIFICATION INQUIRY DEPLOYED\n--------------------------------\nCompiler Subject: ${name}\nBusiness Node: ${email}\nModules Configured:\n- ${activeModules.join('\n- ')}\n\nBottleneck Report: "${bottleneck}"\n\nSTATUS: INQUIRY LOGGED. Our operations team will compile this specification blueprint and follow up via email within 12 hours.`);
        
        // Reset
        specSubmissionForm.reset();
        specOptionBtns.forEach(btn => btn.classList.remove('active'));
        updateSpecSchematic();
      });
    }
  }

})();
