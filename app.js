// ═══════════════════════════════════════════════════════════════════════════
// SVG ICONS  (inline, no emoji)
// ═══════════════════════════════════════════════════════════════════════════
const ICONS = {
  building: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h6M3 15h6M15 9h6M15 15h6"/></svg>`,
  buildingSm: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h6M3 15h6M15 9h6M15 15h6"/></svg>`,
  camera: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  cameraSm: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  chart: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  clock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  users: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  qr: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><line x1="21" y1="14" x2="21" y2="17"/><line x1="17" y1="21" x2="21" y2="21"/></svg>`,
  logout: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  userPlus: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,
  search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  printer: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  checkCircle: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  logoutCircle: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  alertCircle: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  scanLine: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>`,
  userCheck: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>`,
  userMinus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,
  eye: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  arrowLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  x: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  email: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  lock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  usersLg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  checkLg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  xLg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  alertLg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  outLg: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  emptyUsers: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  emptyClock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  notification: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
};

// ═══════════════════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════════════════
const TODAY = new Date().toISOString().split('T')[0];

const EMPLOYEES_DATA = [
  { id:1, employee_id:'GI001', name:'Arjun Sharma',   email:'arjun@gentizeinnovations.com',   department:'Design Services',      role:'Senior Designer',        phone:'+91 9876543210', is_active:1, joined:'2022-01-15', photo:'AS' },
  { id:2, employee_id:'GI002', name:'Priya Nair',     email:'priya@gentizeinnovations.com',    department:'Digital Services',      role:'Digital Marketer',       phone:'+91 9876543211', is_active:1, joined:'2021-08-20', photo:'PN' },
  { id:3, employee_id:'GI003', name:'Karthik Rajan',  email:'karthik@gentizeinnovations.com',  department:'Medical Illustration',  role:'Medical Artist',         phone:'+91 9876543212', is_active:1, joined:'2020-03-10', photo:'KR' },
  { id:4, employee_id:'GI004', name:'Divya Menon',    email:'divya@gentizeinnovations.com',    department:'Book Publishing',       role:'Content Editor',         phone:'+91 9876543213', is_active:1, joined:'2023-05-01', photo:'DM' },
  { id:5, employee_id:'GI005', name:'Rahul Kumar',    email:'rahul@gentizeinnovations.com',    department:'Ecom Development',      role:'Lead Developer',         phone:'+91 9876543214', is_active:1, joined:'2021-11-25', photo:'RK' },
  { id:6, employee_id:'GI006', name:'Sneha Pillai',   email:'sneha@gentizeinnovations.com',    department:'Document Scanning',     role:'QA Specialist',          phone:'+91 9876543215', is_active:1, joined:'2022-07-18', photo:'SP' },
  { id:7, employee_id:'GI007', name:'Vikram Iyer',    email:'vikram@gentizeinnovations.com',   department:'LMS Solutions',         role:'Instructional Designer', phone:'+91 9876543216', is_active:1, joined:'2023-01-10', photo:'VI' },
  { id:8, employee_id:'GI008', name:'Ananya Das',     email:'ananya@gentizeinnovations.com',   department:'Design Services',       role:'UI/UX Designer',         phone:'+91 9876543217', is_active:0, joined:'2020-09-15', photo:'AD' },
];

const DEPT_COLORS = {
  'Design Services':    '#f97316',
  'Digital Services':   '#3b82f6',
  'Medical Illustration':'#10b981',
  'Book Publishing':    '#8b5cf6',
  'Ecom Development':   '#ef4444',
  'Document Scanning':  '#f59e0b',
  'LMS Solutions':      '#06b6d4',
};

const AVATAR_COLORS = ['#f97316','#3b82f6','#10b981','#8b5cf6','#ef4444','#f59e0b','#06b6d4','#ec4899'];

// ─── State ────────────────────────────────────────────────────────────────────
let employees   = [...EMPLOYEES_DATA];
let attendance  = [
  { id:1, employee_id:'GI001', date:TODAY, in_time:new Date(`${TODAY}T08:55:00`), out_time:null, total_hours:null, is_late:false },
  { id:2, employee_id:'GI002', date:TODAY, in_time:new Date(`${TODAY}T09:40:00`), out_time:null, total_hours:null, is_late:true  },
  { id:3, employee_id:'GI003', date:TODAY, in_time:new Date(`${TODAY}T09:10:00`), out_time:new Date(`${TODAY}T18:15:00`), total_hours:9.08, is_late:false },
  { id:4, employee_id:'GI005', date:TODAY, in_time:new Date(`${TODAY}T08:45:00`), out_time:null, total_hours:null, is_late:false },
];
let activeTab   = 'dashboard';
let searchTerm  = '';
let selDate     = TODAY;
let clockTimer  = null;

// ═══════════════════════════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════════════════════════
function avatarColor(initials) {
  if (!initials) return AVATAR_COLORS[0];
  const idx = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % AVATAR_COLORS.length;
  return AVATAR_COLORS[idx];
}

function fmtTime(d) {
  if (!d) return '—';
  return new Date(d).toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', hour12:true });
}

function fmtDate(d) {
  return new Date(d).toLocaleDateString('en-IN', { weekday:'short', year:'numeric', month:'short', day:'numeric' });
}

function avatarHTML(initials, cls = 'md') {
  return `<div class="avatar ${cls}" style="background:${avatarColor(initials)}">${initials || '?'}</div>`;
}

function badge(text, colorCls) {
  return `<span class="badge ${colorCls}">${text}</span>`;
}

// ═══════════════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
}

// ═══════════════════════════════════════════════════════════════════════════
// CLOCK
// ═══════════════════════════════════════════════════════════════════════════
function startClock() {
  function tick() {
    const t = new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true });
    document.querySelectorAll('.live-clock-val').forEach(el => el.textContent = t);
  }
  tick();
  if (clockTimer) clearInterval(clockTimer);
  clockTimer = setInterval(tick, 1000);
}

// ═══════════════════════════════════════════════════════════════════════════
// NOTIFICATION
// ═══════════════════════════════════════════════════════════════════════════
let notifTimer = null;
function showNotif(msg, type = 'success') {
  const el = document.getElementById('notification');
  el.innerHTML = `${ICONS.notification} ${msg}`;
  el.className = `show ${type}`;
  if (notifTimer) clearTimeout(notifTimer);
  notifTimer = setTimeout(() => { el.className = ''; }, 3500);
}

// ═══════════════════════════════════════════════════════════════════════════
// QR CODE GENERATOR (SVG)
// ═══════════════════════════════════════════════════════════════════════════
function generateQR(value, size = 150) {
  const seed = value.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const cells = 21;
  const cs = size / cells;
  const finder = new Set();
  for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) finder.add(`${r},${c}`);
  for (let r = 0; r < 7; r++) for (let c = cells-7; c < cells; c++) finder.add(`${r},${c}`);
  for (let r = cells-7; r < cells; r++) for (let c = 0; c < 7; c++) finder.add(`${r},${c}`);
  let rects = '';
  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      const key = `${r},${c}`;
      let draw = false;
      if (finder.has(key)) {
        const ob = (r===0||r===6||c===0||c===6);
        const inn = (r>=2&&r<=4&&c>=2&&c<=4);
        const tr = c>=cells-7, bl = r>=cells-7;
        if (!tr&&!bl) draw = ob||inn;
        else if (tr) { const lc=c-(cells-7); draw=(r===0||r===6||lc===0||lc===6)||(r>=2&&r<=4&&lc>=2&&lc<=4); }
        else { const lr=r-(cells-7); draw=(lr===0||lr===6||c===0||c===6)||(lr>=2&&lr<=4&&c>=2&&c<=4); }
      } else {
        draw = (((seed*(r*23+c*17+7))^(r*31+c*13))&0xff)>120;
      }
      if (draw) rects += `<rect x="${c*cs}" y="${r*cs}" width="${cs}" height="${cs}" fill="#1C1917"/>`;
    }
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block;background:#fff;border-radius:6px">${rects}</svg>`;
}

// ═══════════════════════════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════════════════════════
function initHome() {
  const ae = employees.filter(e => e.is_active);
  const ta = attendance.filter(a => a.date === TODAY);
  document.getElementById('home-total').textContent  = ae.length;
  document.getElementById('home-present').textContent = ta.length;
}

// ═══════════════════════════════════════════════════════════════════════════
// LOGIN
// ═══════════════════════════════════════════════════════════════════════════
function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  const err   = document.getElementById('login-error');
  if (email === 'admin@gentizeinnovations.com' && pass === 'admin123') {
    err.style.display = 'none';
    showPage('dashboard');
    renderDashboard();
  } else {
    err.style.display = 'block';
    err.textContent = 'Invalid credentials. Hint: see the note below.';
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SCAN / ATTENDANCE
// ═══════════════════════════════════════════════════════════════════════════
function doScan() {
  const empId = document.getElementById('scan-input').value.trim().toUpperCase();
  const err   = document.getElementById('scan-error');
  err.style.display = 'none';
  if (!empId) { err.style.display = 'block'; err.textContent = 'Please enter your Employee ID.'; return; }
  const emp = employees.find(e => e.employee_id === empId && e.is_active);
  if (!emp) { err.style.display = 'block'; err.textContent = 'Employee not found or account inactive.'; return; }

  const today = new Date().toISOString().split('T')[0];
  const now   = new Date();
  const rec   = attendance.find(a => a.employee_id === empId && a.date === today);
  let result;

  if (!rec) {
    const isLate = now.getHours() > 9 || (now.getHours() === 9 && now.getMinutes() > 30);
    attendance.push({ id:Date.now(), employee_id:emp.employee_id, date:today, in_time:now, out_time:null, total_hours:null, is_late:isLate });
    result = { type:'check-in', emp, inTime:now, isLate, msg: isLate ? `Welcome back, ${emp.name.split(' ')[0]}. You checked in late.` : `Welcome, ${emp.name.split(' ')[0]}! Checked in on time.` };
  } else if (!rec.out_time) {
    const hrs = Math.round(((now - rec.in_time) / 3600000) * 100) / 100;
    rec.out_time = now; rec.total_hours = hrs;
    result = { type:'check-out', emp, inTime:rec.in_time, outTime:now, totalHours:hrs, msg:`Goodbye, ${emp.name.split(' ')[0]}! ${hrs.toFixed(2)} hrs logged.` };
  } else {
    result = { type:'already-complete', emp, inTime:rec.in_time, outTime:rec.out_time, totalHours:rec.total_hours, msg:`${emp.name.split(' ')[0]}, your attendance is already complete for today.` };
  }
  renderScanResult(result);
}

function renderScanResult(r) {
  document.getElementById('scan-form-wrap').style.display = 'none';
  const res = document.getElementById('scan-result-wrap');
  res.style.display = 'block';

  const colors   = { 'check-in':'#10b981', 'check-out':'#2563EB', 'already-complete':'#B45309' };
  const icons    = { 'check-in': ICONS.checkCircle, 'check-out': ICONS.logoutCircle, 'already-complete': ICONS.alertCircle };
  const titles   = { 'check-in':'Checked In', 'check-out':'Checked Out', 'already-complete':'Already Complete' };
  const ringCls  = r.type;

  res.querySelector('.scan-result').style.borderColor = colors[r.type];
  document.getElementById('res-ring').className = `result-ring ${ringCls}`;
  document.getElementById('res-ring').innerHTML = `<span style="color:${colors[r.type]}">${icons[r.type]}</span>`;
  document.getElementById('res-title').textContent = titles[r.type];
  document.getElementById('res-msg').textContent = r.msg;
  document.getElementById('res-avatar').innerHTML = avatarHTML(r.emp.photo, 'md');
  document.getElementById('res-emp-name').textContent = r.emp.name;
  document.getElementById('res-emp-meta').textContent = `${r.emp.employee_id} · ${r.emp.department}`;

  let tHTML = '';
  if (r.inTime) tHTML += `<div class="timing-box green"><div class="t-label">In Time</div><div class="t-val">${fmtTime(r.inTime)}</div>${r.isLate ? '<div class="late-tag">Late arrival</div>' : ''}</div>`;
  if (r.outTime) tHTML += `<div class="timing-box blue"><div class="t-label">Out Time</div><div class="t-val">${fmtTime(r.outTime)}</div></div>`;
  document.getElementById('res-timing').innerHTML = tHTML;

  const hBox = document.getElementById('res-hours');
  if (r.totalHours != null) {
    hBox.style.display = 'block';
    document.getElementById('res-hours-val').textContent = r.totalHours.toFixed(2) + ' hrs';
  } else { hBox.style.display = 'none'; }
}

function resetScan() {
  document.getElementById('scan-form-wrap').style.display = 'block';
  document.getElementById('scan-result-wrap').style.display = 'none';
  document.getElementById('scan-input').value = '';
  document.getElementById('scan-error').style.display = 'none';
}

function simulateScan(empId) {
  const emp = employees.find(e => e.employee_id === empId);
  if (!emp) return;
  const today = new Date().toISOString().split('T')[0];
  const now = new Date();
  const rec = attendance.find(a => a.employee_id === empId && a.date === today);
  if (!rec) {
    const isLate = now.getHours() > 9 || (now.getHours() === 9 && now.getMinutes() > 30);
    attendance.push({ id:Date.now(), employee_id:emp.employee_id, date:today, in_time:now, out_time:null, total_hours:null, is_late:isLate });
    showNotif(`${emp.name} checked IN successfully`);
  } else if (!rec.out_time) {
    const hrs = Math.round(((now - rec.in_time) / 3600000) * 100) / 100;
    rec.out_time = now; rec.total_hours = hrs;
    showNotif(`${emp.name} checked OUT — ${hrs.toFixed(2)} hrs logged`);
  } else {
    showNotif(`${emp.name}: attendance already complete today`, 'warn');
  }
  renderDashboard();
}

// ═══════════════════════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════
function renderDashboard() {
  updateTopbar();
  renderStats();
  if (activeTab === 'dashboard')  renderOverview();
  if (activeTab === 'attendance') renderAttTab();
  if (activeTab === 'employees')  renderEmpTab();
  if (activeTab === 'qrcodes')    renderQRTab();
}

function updateTopbar() {
  const titles = { dashboard:'Dashboard Overview', attendance:'Attendance Records', employees:'Employee Management', qrcodes:'QR Code Generator' };
  document.getElementById('topbar-title').textContent = titles[activeTab];
  document.getElementById('topbar-date').textContent  = fmtDate(TODAY);
}

function getTodayAtt(date) { return attendance.filter(a => a.date === (date || TODAY)); }

function renderStats() {
  const ta = getTodayAtt();
  const ae = employees.filter(e => e.is_active);
  document.getElementById('s-total').textContent   = ae.length;
  document.getElementById('s-present').textContent = ta.length;
  document.getElementById('s-absent').textContent  = Math.max(0, ae.length - ta.length);
  document.getElementById('s-late').textContent    = ta.filter(a => a.is_late).length;
  document.getElementById('s-out').textContent     = ta.filter(a => a.out_time).length;
}

function renderOverview() {
  // Live table
  const ta = getTodayAtt();
  const tbody = document.getElementById('live-tbody');
  if (!ta.length) {
    tbody.innerHTML = `<tr><td colspan="6"><div class="empty-state-wrap"><div class="empty-icon">${ICONS.emptyClock}</div><div class="empty-label">No records yet</div><div class="empty-sub">Attendance will appear here as employees check in</div></div></td></tr>`;
    return;
  }
  tbody.innerHTML = ta.map(rec => {
    const emp = employees.find(e => e.employee_id === rec.employee_id);
    const sb = rec.out_time ? badge('Complete', 'purple') : rec.is_late ? badge('Late', 'yellow') : badge('On Time', 'green');
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:10px">${avatarHTML(emp?.photo,'sm')}<div><div style="font-weight:600">${emp?.name||'—'}</div><div class="emp-id-cell" style="margin-top:2px">${rec.employee_id}</div></div></div></td>
      <td>${emp?.department||'—'}</td>
      <td style="color:var(--green);font-weight:600;font-family:var(--font-mono)">${fmtTime(rec.in_time)}</td>
      <td style="color:var(--blue);font-weight:600;font-family:var(--font-mono)">${fmtTime(rec.out_time)}</td>
      <td>${rec.total_hours ? `<strong style="font-family:var(--font-mono)">${rec.total_hours.toFixed(2)}</strong>` : '—'}</td>
      <td>${sb}</td>
    </tr>`;
  }).join('');

  // Dept breakdown
  const dg = document.getElementById('dept-grid');
  dg.innerHTML = Object.entries(DEPT_COLORS).map(([dept, color]) => {
    const de = employees.filter(e => e.department === dept && e.is_active);
    const dp = ta.filter(a => { const e = employees.find(x => x.employee_id === a.employee_id); return e?.department === dept; });
    if (!de.length) return '';
    const pct = Math.round((dp.length / de.length) * 100);
    return `<div class="dept-card" style="border-left-color:${color}">
      <div class="dept-name">${dept}</div>
      <div class="dept-stats"><span class="dept-count">${dp.length} / ${de.length} present</span><span class="dept-pct" style="color:${color}">${pct}%</span></div>
      <div class="dept-bar"><div class="dept-fill" style="background:${color};width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

function renderAttTab() {
  const dateAtt = getTodayAtt(selDate);
  const filt = searchTerm
    ? dateAtt.filter(r => {
        const emp = employees.find(e => e.employee_id === r.employee_id);
        const q = searchTerm.toLowerCase();
        return (emp?.name||'').toLowerCase().includes(q) || r.employee_id.toLowerCase().includes(q) || (emp?.department||'').toLowerCase().includes(q);
      })
    : dateAtt;

  document.getElementById('att-label').textContent  = `Attendance — ${fmtDate(selDate)}`;
  document.getElementById('att-count').textContent  = `${filt.length} record${filt.length!==1?'s':''}`;

  const tbody = document.getElementById('att-tbody');
  if (!filt.length) {
    tbody.innerHTML = `<tr><td colspan="7"><div class="empty-state-wrap"><div class="empty-icon">${ICONS.emptyClock}</div><div class="empty-label">No records found</div><div class="empty-sub">Try a different date or search term</div></div></td></tr>`;
    return;
  }
  tbody.innerHTML = filt.map(rec => {
    const emp = employees.find(e => e.employee_id === rec.employee_id);
    const sb  = rec.out_time ? badge('Complete','purple') : rec.is_late ? badge('Late','yellow') : badge('Present','green');
    return `<tr>
      <td class="emp-id-cell">${rec.employee_id}</td>
      <td><div style="display:flex;align-items:center;gap:8px">${avatarHTML(emp?.photo,'xs')} <span>${emp?.name||'—'}</span></div></td>
      <td>${emp?.department||'—'}</td>
      <td style="color:var(--green);font-weight:600;font-family:var(--font-mono)">${fmtTime(rec.in_time)}</td>
      <td style="color:var(--blue);font-weight:600;font-family:var(--font-mono)">${fmtTime(rec.out_time)}</td>
      <td>${rec.total_hours ? `<strong style="font-family:var(--font-mono)">${rec.total_hours.toFixed(2)} hrs</strong>` : '—'}</td>
      <td>${sb}</td>
    </tr>`;
  }).join('');
}

function renderEmpTab() {
  const filt = searchTerm
    ? employees.filter(e =>
        e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.employee_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        e.department.toLowerCase().includes(searchTerm.toLowerCase()))
    : employees;

  const grid = document.getElementById('emp-grid');
  if (!filt.length) {
    grid.innerHTML = `<div style="grid-column:1/-1"><div class="empty-state-wrap"><div class="empty-icon">${ICONS.emptyUsers}</div><div class="empty-label">No employees found</div><div class="empty-sub">Try adjusting your search</div></div></div>`;
    return;
  }
  grid.innerHTML = filt.map(emp => {
    const rec = attendance.find(a => a.employee_id === emp.employee_id && a.date === TODAY);
    const statusBadge = emp.is_active ? badge('Active','green') : badge('Inactive','gray');
    const deptColor = DEPT_COLORS[emp.department] || '#6b7280';

    let timeHTML = '';
    if (rec) {
      const outCls = rec.out_time ? 'blue' : 'orange';
      const outLabel = rec.out_time ? 'Out Time' : 'Status';
      const outVal   = rec.out_time ? fmtTime(rec.out_time) : 'Working';
      timeHTML = `<div class="emp-time-row">
        <div class="emp-time-box green"><div class="emp-time-label">In Time</div><div class="emp-time-val">${fmtTime(rec.in_time)}</div></div>
        <div class="emp-time-box ${outCls}"><div class="emp-time-label">${outLabel}</div><div class="emp-time-val">${outVal}</div></div>
      </div>`;
    } else {
      timeHTML = `<div class="absent-box">Not checked in today</div>`;
    }

    const scanLabel = rec && !rec.out_time ? 'Check Out' : rec ? 'Complete' : 'Check In';
    const scanCls   = rec && !rec.out_time ? 'btn-primary' : rec ? 'btn-secondary' : 'btn-green';
    const scanIcon  = rec && !rec.out_time ? ICONS.userMinus : rec ? ICONS.check : ICONS.userCheck;

    return `<div class="emp-card">
      <div class="emp-card-top">
        ${avatarHTML(emp.photo,'md')}
        <div class="emp-info">
          <div class="emp-name">${emp.name}</div>
          <div class="emp-meta">${emp.employee_id} · ${emp.role||emp.department}</div>
        </div>
        ${statusBadge}
      </div>
      <div class="emp-dept-row">
        <div class="emp-dept-tag"><span class="dept-dot" style="background:${deptColor}"></span>${emp.department}</div>
      </div>
      ${timeHTML}
      <div class="emp-actions">
        <button class="btn btn-secondary btn-sm" onclick="openQRModal('${emp.employee_id}')">${ICONS.eye} View QR</button>
        <button class="btn ${scanCls} btn-sm" onclick="simulateScan('${emp.employee_id}')">${scanIcon} ${scanLabel}</button>
      </div>
    </div>`;
  }).join('');
}

function renderQRTab() {
  const ae = employees.filter(e => e.is_active);
  document.getElementById('qr-grid').innerHTML = ae.map(emp => {
    const val = `GENTIZE-EMP-${emp.employee_id}`;
    return `<div class="qr-card">
      ${avatarHTML(emp.photo,'md')}
      <div class="qr-card-name">${emp.name}</div>
      <div class="qr-card-meta">${emp.employee_id} · ${emp.department}</div>
      <div class="qr-svg-wrap">${generateQR(val,130)}</div>
      <div class="qr-code-str">${val}</div>
      <div class="qr-actions">
        <button class="btn btn-primary btn-sm" onclick="simulateScan('${emp.employee_id}')">${ICONS.cameraSm} Simulate</button>
        <button class="btn btn-secondary btn-sm" onclick="window.print()">${ICONS.printer} Print</button>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════════════════
// MODALS
// ═══════════════════════════════════════════════════════════════════════════
function openQRModal(empId) {
  const emp = employees.find(e => e.employee_id === empId);
  if (!emp) return;
  const val = `GENTIZE-EMP-${emp.employee_id}`;
  document.getElementById('qm-avatar').innerHTML = avatarHTML(emp.photo, 'lg');
  document.getElementById('qm-name').textContent = emp.name;
  document.getElementById('qm-meta').textContent = `${emp.employee_id} · ${emp.department}`;
  document.getElementById('qm-svg').innerHTML    = generateQR(val, 180);
  document.getElementById('qm-scan').setAttribute('data-id', empId);
  document.getElementById('qr-modal').classList.add('active');
}

function closeQRModal() { document.getElementById('qr-modal').classList.remove('active'); }

function qmSimulate() {
  const id = document.getElementById('qm-scan').getAttribute('data-id');
  closeQRModal();
  simulateScan(id);
}

function openAddEmp() {
  document.getElementById('add-form').reset();
  document.getElementById('add-error').style.display = 'none';
  document.getElementById('add-modal').classList.add('active');
}
function closeAddEmp() { document.getElementById('add-modal').classList.remove('active'); }

function saveEmployee() {
  const id   = document.getElementById('ne-id').value.trim().toUpperCase();
  const name = document.getElementById('ne-name').value.trim();
  const email= document.getElementById('ne-email').value.trim();
  const dept = document.getElementById('ne-dept').value;
  const role = document.getElementById('ne-role').value.trim();
  const phone= document.getElementById('ne-phone').value.trim();
  const err  = document.getElementById('add-error');

  if (!id || !name || !email) { err.style.display='block'; err.textContent='Employee ID, Name, and Email are required.'; return; }
  if (employees.find(e => e.employee_id === id)) { err.style.display='block'; err.textContent='Employee ID already exists.'; return; }

  const photo = name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  employees.push({ id:Date.now(), employee_id:id, name, email, department:dept, role, phone, is_active:1, joined:TODAY, photo });
  closeAddEmp();
  showNotif(`${name} added to the system`);
  renderDashboard();
}

// ═══════════════════════════════════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════════════════════════════════
function switchTab(tab) {
  activeTab = tab; searchTerm = '';
  ['att-search','emp-search'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.tab === tab));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.id === 'tab-' + tab));
  renderDashboard();
}

// ═══════════════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  startClock();
  initHome();

  // Home
  document.getElementById('btn-go-scan').addEventListener('click', () => { resetScan(); document.getElementById('scan-date').textContent = fmtDate(TODAY); showPage('scan'); });
  document.getElementById('btn-go-login').addEventListener('click', () => showPage('login'));
  document.getElementById('btn-back-scan').addEventListener('click', () => { resetScan(); showPage('home'); });
  document.getElementById('btn-back-login').addEventListener('click', () => showPage('home'));

  // Login
  document.getElementById('btn-login').addEventListener('click', doLogin);
  ['login-email','login-pass'].forEach(id => document.getElementById(id).addEventListener('keydown', e => { if(e.key==='Enter') doLogin(); }));

  // Scan
  document.getElementById('btn-scan').addEventListener('click', doScan);
  document.getElementById('scan-input').addEventListener('keydown', e => { if(e.key==='Enter') doScan(); });
  document.getElementById('scan-input').addEventListener('input', e => { e.target.value = e.target.value.toUpperCase(); });
  document.getElementById('btn-scan-again').addEventListener('click', resetScan);

  // Dashboard nav
  document.querySelectorAll('.nav-item').forEach(el => el.addEventListener('click', () => switchTab(el.dataset.tab)));
  document.getElementById('btn-logout').addEventListener('click', () => showPage('home'));
  document.getElementById('btn-topbar-scan').addEventListener('click', () => { resetScan(); document.getElementById('scan-date').textContent = fmtDate(TODAY); showPage('scan'); });

  // Attendance filters
  document.getElementById('att-date').value = TODAY;
  document.getElementById('att-date').addEventListener('change', e => { selDate = e.target.value; renderAttTab(); });
  document.getElementById('att-search').addEventListener('input', e => { searchTerm = e.target.value; renderAttTab(); });

  // Employee search
  document.getElementById('emp-search').addEventListener('input', e => { searchTerm = e.target.value; renderEmpTab(); });
  document.getElementById('btn-add-emp').addEventListener('click', openAddEmp);
  document.getElementById('btn-save-emp').addEventListener('click', saveEmployee);
  document.getElementById('btn-cancel-emp').addEventListener('click', closeAddEmp);

  // QR Modal
  document.getElementById('btn-qm-close').addEventListener('click', closeQRModal);
  document.getElementById('qm-scan').addEventListener('click', qmSimulate);
  document.getElementById('qr-modal').addEventListener('click', e => { if(e.target===e.currentTarget) closeQRModal(); });

  // Add Modal backdrop
  document.getElementById('add-modal').addEventListener('click', e => { if(e.target===e.currentTarget) closeAddEmp(); });

  showPage('home');
});
