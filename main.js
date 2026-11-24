// ============================================================
// ملف main.js: عدّل قسم البيانات (المهارات، المشاريع، الدورات، الصور) وسيُبنى الموقع تلقائياً
// ============================================================

// ===== 1) المهارات: كل مجموعة لها اسم وأيقونة (من remixicon.com) وقائمة عناصر. أضف أو احذف بحرية =====
const SKILLS = [
  { group: 'Soft Skills:', icon: 'ri-team-line', items: ['Leadership', 'Team Leadership', 'Teamwork & Collaboration', 'Communication', 'Problem Solving', 'Managing Budgets', 'Research Skills'] },
  { group: 'Technical Skills:', icon: 'ri-cpu-line', items: ['Computer Networking (CCNA)', 'Routing & Switching', 'Fiber Optics', 'Microwave Communication', 'PCB Design', 'Circuit Schematic Design', 'Embedded Systems'] },
  { group: 'Software & Tools:', icon: 'ri-code-s-slash-line', items: ['Cisco Packet Tracer', 'Altium Designer', 'Canva', 'Adobe Photoshop', 'Microsoft Office'] },
  { group: 'Design & Creative Skills:', icon: 'ri-palette-line', items: ['Graphic Design', 'Video Editing', 'Photography', 'Presentation Design'] }
];

// ===== 2) المشاريع: cat = core (مشروع أساسي) أو labs (معمل/نموذج). a و b لونا الصورة المصغرة. problem/impl/take تظهر في الدرج. repo رابط GitHub =====
const PROJECTS = [
  {
    cat: 'core',
    title: 'PCB Fabrication CNC Machine',
    icon: 'ri-settings-3-line',
    a: '#0f766e',
    b: '#2563eb',
    summary: 'A low-cost 3-axis CNC machine designed for PCB fabrication, including copper engraving, isolation routing, and component hole drilling.',
    tools: ['Arduino Uno', 'GRBL CNC Shield', 'Stepper Motors', 'ESP32', 'PCB Design'],
    problem: 'Traditional PCB manufacturing methods often involve chemical processes, specialized equipment, and manual intervention. These limitations can make rapid prototyping expensive and less accessible for students and small-scale developers.',
    impl: [
      'Worked as part of the hardware team to develop a low-cost, three-axis CNC machine for PCB fabrication, designed to perform copper engraving, isolation routing, and component hole drilling.',
      'Focused on the hardware architecture, electronic components, motor control connections, and machine integration.'
    ],
    take: [
      'Understanding 3-axis CNC machine architecture.',
      'Working with stepper motors and motor drivers.',
      'Hardware integration and electronic wiring.',
      'Understanding GRBL-based CNC control systems.',
      'Mechanical and electronic system integration.',
      'Teamwork and engineering problem-solving.'
    ],
    repo: '#'
  },
  {
    cat: 'labs',
    title: 'Network Configuration Lab',
    icon: 'ri-router-line',
    a: '#0369a1',
    b: '#06b6d4',
    summary: 'Designed and configured network topologies using Cisco Packet Tracer, practicing VLANs, routing, switching, DHCP, and network connectivity.',
    tools: ['Cisco Packet Tracer', 'CCNA', 'VLAN', 'OSPF', 'DHCP', 'NAT'],
    problem: 'Understanding networking concepts theoretically is not enough to manage real network environments. Practical configuration and troubleshooting are essential for building reliable networks.',
    impl: [
      'Designed and configured network topologies using Cisco Packet Tracer as part of my CCNA training.',
      'Practiced configuring routers and switches, implementing VLANs, inter-VLAN routing, DHCP, NAT, and dynamic routing protocols.'
    ],
    take: [
      'Network design and topology planning.',
      'IP addressing and subnetting.',
      'VLAN configuration and segmentation.',
      'Routing and switching fundamentals.',
      'Network troubleshooting.',
      'Understanding enterprise network architecture.'
    ],
    repo: '#'
  },
  {
    cat: 'labs',
    title: 'Windows Server Administration',
    icon: 'ri-server-line',
    a: '#15803d',
    b: '#84cc16',
    summary: 'Configured a Windows Server 2019 environment using VMware, working with Active Directory, domain management, Group Policy, roaming profiles, and shared folders.',
    tools: ['Windows Server 2019', 'VMware', 'Active Directory', 'Group Policy', 'DNS'],
    problem: 'Organizations need centralized systems to manage users, computers, security policies, and shared resources efficiently.',
    impl: [
      'Configured a Windows Server 2019 environment using VMware Workstation as part of my System Administration practical training.',
      'Worked on setting up an Active Directory domain, managing domain users, configuring Group Policy, and implementing roaming profiles.'
    ],
    take: [
      'Windows Server 2019 administration.',
      'Active Directory and domain management.',
      'User and group management.',
      'Group Policy configuration.',
      'Roaming profile implementation.',
      'Virtual machine management using VMware.'
    ],
    repo: '#'
  },
  {
    cat: 'creative',
    title: 'IEEE Media & Graphic Design',
    icon: 'ri-brush-line',
    a: '#7c3aed',
    b: '#db2777',
    summary: 'Created graphic designs and edited promotional videos and reels for IEEE Student Branch social media, contributing to visual identity and digital content.',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Video Editing', 'Graphic Design', 'Content Creation'],
    problem: 'Maintaining a consistent visual identity and creating engaging digital content to communicate technical activities, events, and opportunities to students.',
    impl: [
      'Worked with the IEEE Student Branch media team, contributing to the branch\'s social media presence through graphic design and video editing.',
      'Created promotional designs, social media posts, and edited short-form videos and reels for different IEEE activities and events.',
      'Served as the branch Treasurer, managing financial responsibilities alongside my media contributions.'
    ],
    take: [
      'Graphic design and visual communication.',
      'Social media content creation.',
      'Short-form video editing.',
      'Visual identity and branding.',
      'Team collaboration and creativity.',
      'Financial management and organizational skills.'
    ],
    repo: '#'
  },
  {
    cat: 'creative',
    title: 'Photography Gallery',
    icon: 'ri-camera-3-line',
    a: '#be123c',
    b: '#f97316',
    summary: 'A personal photography collection capturing moments, perspectives, and visual stories through my lens.',
    tools: ['Photography', 'Visual Storytelling', 'Composition', 'Creative Direction'],
    problem: 'Exploring the world through photography, capturing meaningful moments, and expressing creativity through visual storytelling.',
    impl: [
      'Developed a personal photography gallery showcasing selected photographs and visual perspectives.',
      'Focused on capturing details, exploring different compositions, and documenting moments through my own perspective.'
    ],
    take: [
      'Photography and visual composition.',
      'Attention to detail.',
      'Creativity and visual storytelling.',
      'Understanding lighting and perspective.',
      'Developing a personal visual style.'
    ],
  }
];
// أزرار تصفية المشاريع: [القيمة, النص الظاهر]
const FILTERS = [['all','All'], ['core','Core projects'], ['labs','Labs & prototypes']];

// ===== 3) الدورات والتدريبات والشهادات. لكل شهادة حقل img: ضع مسار صورة الشهادة (مثل images/cert1.jpg) أو اتركه فارغاً لعرض رسم بديل =====
// مصفوفة التعلم والتدريبات والشهادات بنفس بنية الموقع
const LEARNING = {
  courses: { label: 'Courses & tracks', items: [
    { title: 'Windows Server Administrator', by: 'Eng.Mohamed Zohdy', topics: '', status: 'Completed', year: '2026' },
    { title: '(AZ-104) Microsoft Azure Administrator Course', by: 'Eng.Mohamed Zohdy', topics: '', status: 'Completed', year: '2026' },
    { title: 'CCNA : Introduction to Networks, Switching & Routing, Enterprise Networking, Security & Automation', by: 'Cisco Networking Acadmy', topics: '', status: 'Completed', year: '2026' },
    { title: 'National Telecommunication Institute -NTI (Augest 2026 - Sep 2026)', by: 'National Telecommunication Institute -NTI', topics: '', status: 'Completed', year: '2026' },
    { title: 'CCNA 200-201', by: 'NETOVA COMPANY', topics: '', status: 'Completed', year: '2025' },
    { title: 'Foundations of Project Management', by: 'Google', topics: '', status: 'Completed', year: '2025' },
    { title: 'Starting a Successful Project', by: 'Google', topics: '', status: 'Completed', year: '2025' },
    { title: 'CCNA-Routing and Switching', by: 'National Telecommunication Institute (NTI)', topics: '', status: 'Completed', year: '2025' },
    { title: 'Become a Professional PCB Designer with Altium', by: 'udemy', topics: '', status: 'Completed', year: '2025' },
    { title: 'HCIA-Security Trainee', by: 'udemy', topics: '', status: 'Completed', year: '2025' }
  ]},
  trainings: { label: 'Trainings & workshops', items: [
    { title: 'Microwaves and Optical Fiber Basics and Transmission training', by: 'NETOVA COMPANY', work: '', duration: '2025' },
    { title: 'summer training at Belayim Petroleum Company (Petrobel)', by: 'Belayim Petroleum Company (Petrobel)', work: '', duration: '2024-2025' },
    { title: 'Mobile Networks (2G, 3G, 4G, 5G)', by: 'TRUST ACADMY', work: '', duration: '2024' }
  ]},
  certs: { label: 'Certifications', items: [
    { title: 'Windows Server Administrator', by: 'Eng.Mohamed Zohdy', img: './ASSETS/cirt/Windows Server.png', date: '2026'},
    { title: '(AZ-104) Microsoft Azure Administrator Course', by: 'Eng.Mohamed Zohdy', img: './ASSETS/cirt/AZ-104.png', date: '2026'},
    { title: 'CCNA-Routing and Switching', by: 'National Telecommunication Institute (NTI)', img: './ASSETS/cirt/CCNA-Routing and Switching.png', date: '2026'},
    { title: 'HCIA-Security Trainee', by: 'National Telecommunication Institute (NTI)', img: './ASSETS/cirt/HCIA.png', date: '2026'},
    { title: 'CCNA : Introduction to Networks, Switching & Routing, Enterprise Networking, Security & Automation', by: 'Cisco Networking Acadmy', img: './ASSETS/cirt/3.png', date: '2026'},
    { title: 'CCNA 200-201', by: 'NETOVA COMPANY', img: './ASSETS/cirt/CCNA.png', date: '2025'},
    { title: 'Foundations of Project Management', by: 'Google', img: './ASSETS/cirt/Foundations of Project Management 1.png', date: '2025'},
    { title: 'Starting a Successful Project', by: 'Google', img: './/ASSETS/cirt/STARTING A SUCCESSFUL PROJECT.png', date: '2025'},
    { title: 'Become a Professional PCB Designer with Altium', by: 'udemy', img: './ASSETS/cirt/PCB.jpg', date: '2025'},
    { title: 'Microwaves and Optical Fiber Basics and Transmission training', by: 'NETOVA COMPANY', img: './ASSETS/cirt/IMG_8176.JPG', date: '2025'},
    { title: 'summer training at Belayim Petroleum Company (Petrobel)', by: 'Belayim Petroleum Company (Petrobel)', img: './ASSETS/cirt/seconed.jpg', date: '2025'},
    { title: 'summer training at Belayim Petroleum Company (Petrobel)', by: 'Belayim Petroleum Company (Petrobel)', img: './/ASSETS/cirt/FIRST.png', date: '2024'},
    { title: 'Mobile Networks (5G)', by: 'TRUST ACADMY', img: './ASSETS/cirt/5G.png', date: '2024'},
    { title: 'Mobile Networks (4G)', by: 'TRUST ACADMY', img: './ASSETS/cirt/4G.png', date: '2024'},
    { title: 'Mobile Networks (3G)', by: 'TRUST ACADMY', img: './ASSETS/cirt/3G.png', date: '2024'},
    { title: 'Mobile Networks (2G)', by: 'TRUST ACADMY', img: './ASSETS/cirt/2G.png', date: '2024'}
  ]}
}
// ===== 4) الصور والسيرة الذاتية. اترك المسار فارغاً لاستخدام الرسم التوضيحي المدمج، وإن لم تُحمَّل صورتك سيظهر الرسم البديل بدل أيقونة مكسورة =====
const CONFIG = {
  cvUrl: 'ASSETS/AHMED OSMAN CV.pdf',                                    // مسار ملف السيرة الذاتية مثل 'assets/cv.pdf' (إن تُرك فارغاً يظهر تنبيه فقط)
  heroImage: './ASSETS/AHMED 1.jpeg',   heroAlt: 'Illustration of a microcontroller chip with the initials KN',      // صورة الواجهة + وصفها البديل
  contactImage: './ASSETS/AHMED 2.jpeg', contactAlt: 'Illustration of an oscilloscope on an electronics bench'      // الصورة الثانية في قسم التواصل
};
// ألوان التمييز المتاحة: [الاسم, اللون HEX, اللون RGB]
const ACCENTS = [['Sky','#6ea8fe','110,168,254'],['Teal','#2dd4bf','45,212,191'],['Amber','#f5b955','245,185,85'],['Violet','#a78bfa','167,139,250']];

// ================= الكود: لا تحتاج لتعديل ما بعد هذا السطر ================= 
// اختصارات: $ لاختيار عنصر واحد و $$ لاختيار كل العناصر المطابقة
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];

function media(src, alt, ph) {
  return src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" data-ph="${encodeURIComponent(ph)}">`
             : ph.replace('<svg', `<svg role="img" aria-label="${esc(alt)}"`);
}
document.addEventListener('error', e => { const t = e.target; if (t.tagName === 'IMG' && t.dataset.ph) t.outerHTML = decodeURIComponent(t.dataset.ph); }, true);

// دوال الصور: esc تحمي النص من رموز HTML | media تُرجع <img> إن وُجد مسار أو رسماً SVG بديلاً | مستمع error يستبدل الصورة المكسورة بالرسم
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function media(src, alt, ph) {
  return src
    ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" data-ph="${encodeURIComponent(ph)}">`
    : ph.replace('<svg', `<svg role="img" aria-label="${esc(alt)}"`);
}
document.addEventListener('error', e => {
  const t = e.target;
  if (t.tagName === 'IMG' && t.dataset.ph) {
    t.outerHTML = decodeURIComponent(t.dataset.ph);
  }
}, true);

// تقسيم عنوان الشهادة لسطرين داخل الرسم البديل
const wrap = (s, n) => {
  const out = [''];
  s.split(' ').forEach(w => {
    const l = out.length - 1;
    if ((out[l] + ' ' + w).trim().length > n && l < 1) out.push(w);
    else out[l] = (out[l] + ' ' + w).trim();
  });
  return out;
};

// رسم بديل لصورة الواجهة (شريحة إلكترونية)
const heroSVG = () => `<svg viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="hr" cx=".5" cy=".42" r=".55"><stop offset="0" stop-color="var(--accent)" stop-opacity=".32"/><stop offset="1" stop-color="var(--accent)" stop-opacity="0"/></radialGradient></defs>
<rect width="400" height="480" fill="#111115"/><rect width="400" height="480" fill="url(#hr)"/>
<text x="200" y="244" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="38" font-weight="500" fill="var(--accent)">KN</text>
<text x="200" y="456" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="13" fill="#98a0b3">build. test. document.</text></svg>`;

// رسم بديل لصورة التواصل
const benchSVG = () => `<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg"><rect width="480" height="360" fill="#111115"/><rect width="480" height="360" fill="var(--accent)" opacity=".05"/>
<rect x="60" y="36" width="360" height="214" rx="16" fill="#09090b" stroke="#fff" stroke-opacity=".14"/></svg>`;

// رسم بديل لصورة الشهادة
const certSVG = c => `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="280" fill="#0d0d11"/><rect x="14" y="14" width="372" height="252" rx="10" fill="none" stroke="var(--accent)" stroke-opacity=".55"/>
<text x="200" y="60" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="11" fill="#98a0b3">Certificate of completion</text>
${wrap(c.title, 26).map((l, k) => `<text x="200" y="${110 + k * 28}" text-anchor="middle" font-family="Sora,sans-serif" font-size="21" font-weight="700" fill="#e8eaf0">${esc(l)}</text>`).join('')}
<text x="200" y="192" text-anchor="middle" font-family="IBM Plex Sans,sans-serif" font-size="12" fill="#98a0b3">Issued by ${esc(c.by)}</text></svg>`;
const chips = a => `<div class="chips">${a.map(t => `<span class="chip">${t}</span>`).join('')}</div>`;

// ظهور العناصر عند التمرير: يضيف الصنف in عندما يدخل العنصر الشاشة
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: '0px 0px -40px' }) : null;
// يهيّئ تأخيراً متدرجاً بسيطاً لكل عنصر ويراقبه
function reveal(root = document) {
  $$('[data-r]', root).forEach((el, i) => { if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', Math.min(i % 6, 5)); io ? io.observe(el) : el.classList.add('in'); });
}

// تبديل لون التمييز: يحفظ الاختيار في المتصفح ويطبقه على المتغيرات --accent
const accents = $$('.accents');
// يطبّق اللون المختار ويحدّث حالة الأزرار
function setAccent(i) {
  const [n, c, rgb] = ACCENTS[i], r = document.documentElement.style;
  r.setProperty('--accent', c); r.setProperty('--accent-rgb', rgb);
  $$('.accents button').forEach(b => b.setAttribute('aria-pressed', +b.dataset.i === i));
  try { localStorage.setItem('accent', i); } catch (e) {}
}
accents.forEach(el => el.innerHTML = ACCENTS.map((a, i) => `<button data-i="${i}" style="--c:${a[1]}" aria-label="${a[0]} accent" aria-pressed="false"></button>`).join(''));
$$('.accents button').forEach(b => b.onclick = () => setAccent(+b.dataset.i));
let saved = 0; try { saved = +localStorage.getItem('accent') || 0; } catch (e) {}
setAccent(ACCENTS[saved] ? saved : 0);

// قائمة الجوال: فتح/إغلاق الكبسولة المنسدلة + المؤشر المنزلق للرابط النشط حسب القسم الظاهر
const links = $('#links'), burger = $('#burger');
burger.onclick = () => { const o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o); burger.innerHTML = `<i class="ri-${o ? 'close-line' : 'menu-3-line'}"></i>`; };
$$('#links a').forEach(a => a.addEventListener('click', () => { links.classList.remove('open'); burger.setAttribute('aria-expanded', false); burger.innerHTML = '<i class="ri-menu-3-line"></i>'; }));
// مراقب الأقسام: يحدد القسم الظاهر في منتصف الشاشة ويفعّل رابطه ويحرّك المؤشر
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { $$('#links a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id)); moveInd($('#links a.on')); }
}), { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => spy.observe(s));
// يحرّك المؤشر المنزلق (الخلفية الملونة) خلف الرابط النشط في الكبسولة
function moveInd(a) { const ind = $('#links .ind'); if (!a || !ind) return; ind.style.width = a.offsetWidth + 'px'; ind.style.transform = `translateX(${a.offsetLeft}px)`; }
addEventListener('resize', () => moveInd($('#links a.on'))); addEventListener('load', () => moveInd($('#links a.on')));

// عرض مجموعات المهارات من مصفوفة SKILLS
$('#skills').innerHTML = SKILLS.map(g => `<div class="sgroup card hov" data-r><h3><i class="${g.icon}"></i>${g.group}</h3>${chips(g.items)}</div>`).join('');

// دالة التبويبات المشتركة: تنشئ الأزرار وتستدعي onPick عند اختيار تبويب
function tabs(el, list, onPick) {
  el.innerHTML = list.map(([k, l], i) => `<button class="tab" role="tab" data-k="${k}" aria-selected="${i === 0}">${l}</button>`).join('');
  el.onclick = e => { const b = e.target.closest('.tab'); if (!b) return; $$('.tab', el).forEach(t => t.setAttribute('aria-selected', t === b)); onPick(b.dataset.k); };
}

// عرض بطاقات المشاريع حسب الفلتر المختار
const grid = $('#grid');
// يعرض المشاريع المطابقة للفلتر (all / core / labs)
function showProjects(f) {
  const list = PROJECTS.map((p, i) => [p, i]).filter(([p]) => f === 'all' || p.cat === f);
  grid.innerHTML = list.map(([p, i]) => `
    <button class="proj card hov" data-r data-i="${i}" aria-label="Open details for ${p.title}">
      <div class="thumb" style="--a:${p.a};--b:${p.b}"><i class="${p.icon}"></i></div>
      <div class="proj-b"><span class="tag">${p.cat === 'core' ? 'Core project' : 'Lab / prototype'}</span><h3>${p.title}</h3><p>${p.summary}</p>${chips(p.tools)}</div>
    </button>`).join('');
  reveal(grid);
}
tabs($('#filters'), FILTERS, showProjects); showProjects('all');

// الدورات والتدريبات والشهادات: كل نوع له قالب بطاقة. بطاقة الشهادة تحتوي صورة تحت العنوان
const lgrid = $('#lgrid');
const stClass = s => /progress/i.test(s) ? 'prog' : 'done';
const cards = {
  courses: i => `<article class="litem card hov" data-r><div class="top"><h3>${i.title}</h3><span class="st ${stClass(i.status)}">${i.status}</span></div><p>${i.by}</p><p>${i.topics}</p><div class="meta"><span class="st">${i.year}</span></div></article>`,
  trainings: i => `<article class="litem card hov" data-r><div class="top"><h3>${i.title}</h3><i class="ico ri-tools-line"></i></div><p>${i.by}</p><p>${i.work}</p><div class="meta"><span class="st">${i.duration}</span></div></article>`,
  certs: (i, n) => `<article class="litem cert card hov" data-r><h3>${i.title}</h3>
    <button class="cert-img" data-ci="${n}" aria-label="Preview certificate: ${esc(i.title)}">${media(i.img, 'Certificate: ' + i.title, certSVG(i))}<span class="zoom"><i class="ri-zoom-in-line"></i></span></button>
    <p>${i.by}</p><div class="meta"><span class="st done">${i.date}</span></div></article>`
};
// يعرض عناصر التبويب المختار
function showLearning(k) { lgrid.innerHTML = LEARNING[k].items.map((it, n) => cards[k](it, n)).join(''); reveal(lgrid); }
tabs($('#ltabs'), Object.entries(LEARNING).map(([k, v]) => [k, v.label]), showLearning); showLearning('courses');

// درج تفاصيل المشروع: فتح وإغلاق مع حفظ التركيز وإغلاق بزر Esc
const drawer = $('#drawer'), scrim = $('#scrim'); let lastFocus;
// يملأ الدرج ببيانات المشروع المختار ويفتحه
function openDrawer(i, trigger) {
  const p = PROJECTS[i]; lastFocus = trigger;
  $('#d-body').innerHTML = `
    <div class="thumb" style="--a:${p.a};--b:${p.b}"><i class="${p.icon}"></i></div>
    <span class="tag">${p.cat === 'core' ? 'Core project' : 'Lab / prototype'}</span><h2 id="d-t">${p.title}</h2>${chips(p.tools)}
    <h4>The problem</h4><p>${p.problem}</p>
    <h4>What I built</h4><ul>${p.impl.map(x => `<li>${x}</li>`).join('')}</ul>
    <h4>Key takeaways</h4><ul>${p.take.map(x => `<li>${x}</li>`).join('')}</ul>
    <div class="btns"><a class="btn btn-p" href="${p.repo}"><i class="ri-github-fill"></i> View on GitHub</a></div>`;
  drawer.classList.add('open'); scrim.classList.add('show'); drawer.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden';
  $('#d-x').focus({ preventScroll: true });
}
// يغلق الدرج ويعيد التركيز للبطاقة
function closeDrawer() {
  drawer.classList.remove('open'); scrim.classList.remove('show'); drawer.setAttribute('aria-hidden', 'true'); document.body.style.overflow = '';
  lastFocus && lastFocus.focus({ preventScroll: true });
}
grid.addEventListener('click', e => { const c = e.target.closest('.proj'); if (c) openDrawer(+c.dataset.i, c); });
$('#d-x').onclick = closeDrawer; scrim.onclick = closeDrawer;
addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// رسالة التأكيد العائمة
const toastEl = $('#toast'); let tt;
// تعرض رسالة لمدة 2.4 ثانية
function toast(m) { toastEl.textContent = m; toastEl.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => toastEl.classList.remove('show'), 2400); }
// نسخ البريد للحافظة: يستخدم clipboard وإن لم يتوفر يستخدم طريقة بديلة، ثم يغيّر الأيقونة إلى صح
async function copyEmail(btn) {
  const m = $('#mail').textContent;
  try { await navigator.clipboard.writeText(m); } catch (_) { const t = document.createElement('textarea'); t.value = m; document.body.append(t); t.select(); document.execCommand('copy'); t.remove(); }
  if (btn) { btn.classList.add('done'); $('span', btn).textContent = 'Copied'; setTimeout(() => { btn.classList.remove('done'); $('span', btn).textContent = 'Copy'; }, 2000); }
  toast('Email copied to clipboard');
}
$('#copy').onclick = e => copyEmail(e.currentTarget);
$('[data-copy-link]').onclick = e => { e.preventDefault(); copyEmail($('#copy')); };
$('#cv').onclick = e => { if (CONFIG.cvUrl) { e.currentTarget.href = CONFIG.cvUrl; e.currentTarget.download = ''; } else { e.preventDefault(); toast('Add your CV path to CONFIG.cvUrl in main.js'); } };

// رسم صورتي الواجهة والتواصل (أو الرسم البديل)
$('#heroImg').innerHTML = media(CONFIG.heroImage, CONFIG.heroAlt, heroSVG());
$('#contactImg').innerHTML = media(CONFIG.contactImage, CONFIG.contactAlt, benchSVG());

// نافذة معاينة الشهادة: تكبير صورة الشهادة مع عنوانها والجهة والتاريخ، وتُغلق بـ Esc أو النقر خارج الصورة
const lb = $('#lb'); let lbFocus;
// يفتح المعاينة للشهادة رقم n
function openLb(n, trigger) {
  const c = LEARNING.certs.items[n]; lbFocus = trigger;
  $('#lb-fig').innerHTML = media(c.img, 'Certificate: ' + c.title, certSVG(c)) + `<figcaption><b>${c.title}</b><br>${c.by}, ${c.date}</figcaption>`;
  lb.classList.add('show'); lb.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; $('#lb-x').focus({ preventScroll: true });
}
// يغلق المعاينة
function closeLb() { lb.classList.remove('show'); lb.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; lbFocus && lbFocus.focus({ preventScroll: true }); }
lgrid.addEventListener('click', e => { const b = e.target.closest('.cert-img'); if (b) openLb(+b.dataset.ci, b); });
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); }); $('#lb-x').onclick = closeLb;
addEventListener('keydown', e => { if (e.key === 'Escape' && lb.classList.contains('show')) closeLb(); });

// ميلان ناعم للصور مع حركة المؤشر (أجهزة الماوس فقط، ويُتخطى عند تفعيل تقليل الحركة)
if (matchMedia('(hover:hover) and (pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  $$('.tilt').forEach(el => {
    let raf;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { el.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg'); el.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg'); el.style.setProperty('--gx', (x + .5) * 100 + '%'); el.style.setProperty('--gy', (y + .5) * 100 + '%'); });
    });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
  });
}

// سنة حقوق النشر تلقائياً
$('#yr').textContent = new Date().getFullYear();
reveal();


// تجاوز الفلاتر وعرض المشاريع والدرج من آخر الملف
(() => {
  const PROJECT_FILTERS = [
    ['all', 'All'],
    ['core', 'Engineering Project'],
    ['labs', 'Technical Lab'],
    ['creative', 'Creative Work']
  ];

  const projectGrid = document.querySelector('#grid');
  const filterBar = document.querySelector('#filters');
  const projectDrawer = document.querySelector('#drawer');
  const projectScrim = document.querySelector('#scrim');

  const getCatLabel = cat =>
    cat === 'core' ? 'Engineering Project' : (cat === 'labs' ? 'Technical Lab' : 'Creative Work');

  window.showProjects = function(f = 'all') {
    if (!projectGrid || typeof PROJECTS === 'undefined') return;
    const list = PROJECTS.map((p, i) => [p, i]).filter(([p]) => f === 'all' || p.cat === f);
    projectGrid.innerHTML = list.map(([p, i]) => {
      const catLabel = getCatLabel(p.cat);
      return `
      <button class="proj card hov" data-r data-i="${i}" aria-label="Open details for ${esc(p.title)}">
        <div class="thumb" style="--a:${p.a};--b:${p.b}"><i class="${p.icon}"></i></div>
        <div class="proj-b"><span class="tag">${catLabel}</span><h3>${p.title}</h3><p>${p.summary}</p>${chips(p.tools)}</div>
      </button>`;
    }).join('');
    if (typeof reveal === 'function') reveal(projectGrid);
  };

 window.openDrawer = function(i, trigger) {
    const p = PROJECTS[i];
    if (!p || !projectDrawer) return;
    lastFocus = trigger;
    const catLabel = getCatLabel(p.cat);
    const repoBtn = p.repo
      ? `<div class="btns"><a class="btn btn-p" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer"><i class="ri-github-fill"></i> View on GitHub</a></div>`
      : '';
    document.querySelector('#d-body').innerHTML = `
      <div class="thumb" style="--a:${p.a};--b:${p.b}"><i class="${p.icon}"></i></div>
      <span class="tag">${catLabel}</span><h2 id="d-t">${p.title}</h2>${chips(p.tools)}
      <h4>The problem</h4><p>${p.problem}</p>
      <h4>What I built</h4><ul>${p.impl.map(x => `<li>${x}</li>`).join('')}</ul>
      <h4>Key takeaways</h4><ul>${p.take.map(x => `<li>${x}</li>`).join('')}</ul>
      ${repoBtn}`;
    projectDrawer.classList.add('open');
    if (projectScrim) projectScrim.classList.add('show');
    projectDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const closeBtn = document.querySelector('#d-x');
    if (closeBtn) closeBtn.focus({ preventScroll: true });
  };

  if (filterBar && typeof tabs === 'function') {
    tabs(filterBar, PROJECT_FILTERS, window.showProjects);
  }
  window.showProjects('all');
})();
// إظهار رابط GitHub لـ Photography Gallery فقط بدون أي لوب أو تعليق
(() => {
  const GALLERY_REPO_URL = 'https://etmaaan.github.io/IMAGE-GALLERY/';
  const drawerEl = document.querySelector('#drawer');
  const bodyEl = document.querySelector('#d-body');
  if (!drawerEl || !bodyEl) return;

  let syncing = false;

  const updateRepoButton = () => {
    if (syncing) return;
    syncing = true;
    try {
      const titleText = (document.querySelector('#d-t')?.textContent || '').trim();
      const isGallery = /gallery|photo/i.test(titleText);

      // نشيل أي زر قديم أضفناه إحنا فقط (مش هنلمس .btns لو تبع حاجة تانية)
      bodyEl.querySelectorAll('[data-gallery-repo]').forEach(el => el.remove());

      if (isGallery && GALLERY_REPO_URL) {
        const btnsDiv = document.createElement('div');
        btnsDiv.className = 'btns';
        btnsDiv.setAttribute('data-gallery-repo', '1');
        btnsDiv.innerHTML = `<a class="btn btn-p" href="${esc(GALLERY_REPO_URL)}" target="_blank" rel="noopener noreferrer"><i class="ri-github-fill"></i> View on GitHub</a>`;
        bodyEl.appendChild(btnsDiv);
      }
    } finally {
      setTimeout(() => { syncing = false; }, 50);
    }
  };

  // ننفذ التحديث مرة واحدة بس عند الضغط على كارت أو فتح الدرج
  document.querySelector('#grid')?.addEventListener('click', e => {
    if (e.target.closest('.proj')) {
      setTimeout(updateRepoButton, 0);
    }
  });
})();

// تصحيح أي مسار محلي file:/// ليشير إلى مجلد ASSETS النسبي
(() => {
  document.querySelectorAll('img[src^="file:///"]').forEach(img => {
    const match = img.getAttribute('src').match(/\/ASSETS\/(.+)$/i);
    if (match) {
      img.setAttribute('src', `./ASSETS/${match[1]}`);
    }
  });
})();

// إجبار روابط الأيقونات والروابط العادية (عدا # و mailto و tel) على الفتح في تاب جديدة
(() => {
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = (link.getAttribute('href') || '').trim();
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }, true);
})();
