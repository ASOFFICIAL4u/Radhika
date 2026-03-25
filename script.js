/* ============================================================
   RADHIKA VEG & LODGE — script.js
   ============================================================ */

/* ── LOADER ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 2200);
});

/* ── CUSTOM CURSOR ── */
const cur  = document.getElementById('cur');
const cur2 = document.getElementById('cur2');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx - 3 + 'px';
  cur.style.top  = my - 3 + 'px';
});

(function animateCursor() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  cur2.style.left = rx - 16 + 'px';
  cur2.style.top  = ry - 16 + 'px';
  requestAnimationFrame(animateCursor);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur2.style.width   = '54px';
    cur2.style.height  = '54px';
    cur2.style.opacity = '0.25';
  });
  el.addEventListener('mouseleave', () => {
    cur2.style.width   = '32px';
    cur2.style.height  = '32px';
    cur2.style.opacity = '0.4';
  });
});

/* ── STICKY NAV ── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('s', window.scrollY > 80);
});

/* ── MENU DATA ── */
const menus = {
  bf: [
    { n: 'Gol Bhaji',                      d: 'Classic potato bhaji',             p: '₹40' },
    { n: 'Onion / Potato / Pakoda',         d: 'Crispy golden fritters',           p: '₹40' },
    { n: 'Potato Wada Chatani',             d: 'With fresh green chutney',         p: '₹40' },
    { n: 'Sheera',                          d: 'Traditional sweet semolina',       p: '₹40' },
    { n: 'Poha',                            d: 'Light spiced flattened rice',      p: '₹40' },
    { n: 'Upasna',                          d: 'Fasting special breakfast',        p: '₹40' },
    { n: 'Potato Wada Sambar (Double)',      d: 'Two wadas with piping hot sambar', p: '₹75' },
    { n: 'Potato Wada Sambar (Single)',      d: 'One wada with sambar',            p: '₹60' },
    { n: 'Idli Chatani',                    d: 'Soft idli with coconut chutney',   p: '₹40' },
    { n: 'Idli Sambar (Double)',             d: 'Two soft idlis with sambar',       p: '₹80' },
    { n: 'Idli Sambar (Single)',             d: 'One idli with sambar',             p: '₹50' },
    { n: 'Udid Wada Chatani',               d: 'Crispy lentil wada with chutney',  p: '₹50' },
    { n: 'Udid Wada Sambar (Double)',        d: 'Two wadas with sambar',            p: '₹80' },
    { n: 'Udid Wada Sambar (Single)',        d: 'One wada with sambar',             p: '₹50' },
    { n: 'Sp. Misal Pav',                   d: 'Radhika\'s legendary house recipe', p: '₹80' },
    { n: 'Pav',                             d: 'Fresh baked pav',                  p: '₹5'  },
    { n: 'Dahi Misal',                      d: 'Yoghurt misal — cool & tangy',     p: '₹80' },
    { n: 'Dahi Wada',                       d: 'Creamy yoghurt wada',              p: '₹80' },
    { n: 'Batata Wada / Pav',               d: 'Mumbai street classic',            p: '₹25' },
  ],
  bv: [
    { n: 'Special Tea',  d: 'Radhika signature house blend', p: '₹20' },
    { n: 'Milk',         d: 'Fresh & warm',                  p: '₹30' },
    { n: 'Coffee',       d: 'Aromatic hot brew',             p: '₹30' },
    { n: 'Nescafé',      d: 'Instant classic',               p: '₹30' },
  ],
  sp: [
    { n: 'Radhika Special Veg Kofta', d: 'Rich gravy · fresh naan · acclimated sides · grated cheese', p: 'Ask us' },
    { n: 'Veg Biryani',               d: 'Freshly prepared · authentic Dharashiv style',                p: 'Ask us' },
    { n: 'Sp. Misal Pav',             d: 'Legendary house recipe — the signature of Radhika',           p: '₹80'   },
    { n: 'Daily Chef\'s Special',     d: 'Ask your server — changes every day',                         p: 'Ask us' },
  ],
  ld: [
    { n: 'Dal Tadka',             d: 'Tempered lentils with ghee tadka',      p: 'Ask us' },
    { n: 'Paneer Butter Masala',  d: 'Creamy tomato-cashew gravy',            p: 'Ask us' },
    { n: 'Mixed Veg Curry',       d: 'Seasonal vegetables in spiced gravy',   p: 'Ask us' },
    { n: 'Roti / Chapati',        d: 'Fresh whole wheat, made to order',      p: 'Ask us' },
    { n: 'Naan (Butter / Garlic)',d: 'Tandoor-baked, butter-soft',            p: 'Ask us' },
    { n: 'Steamed Rice',          d: 'Long grain basmati',                    p: 'Ask us' },
    { n: 'Veg Pulao',             d: 'Fragrant rice with seasonal vegetables', p: 'Ask us' },
    { n: 'Raita',                 d: 'Yoghurt with cucumber & cumin',         p: 'Ask us' },
  ],
};

/* ── RENDER MENU ── */
function renderMenu(key) {
  const items = menus[key];
  document.getElementById('menu-body').innerHTML = items.map(item => `
    <div class="mi">
      <div class="mi-l">
        <div class="mi-name">${item.n}</div>
        <div class="mi-d">${item.d}</div>
      </div>
      <div class="mi-p">${item.p}</div>
    </div>
  `).join('');
}

/* ── SWITCH MENU TAB ── */
function switchTab(key, el) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  el.classList.add('on');
  renderMenu(key);
}

/* ── INIT MENU ── */
renderMenu('bf');

/* ── SCROLL FADE OBSERVER ── */
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade, .fade-l').forEach(el => fadeObserver.observe(el));
