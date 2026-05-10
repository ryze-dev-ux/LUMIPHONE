// ─── PALETA DE CORES DISPONÍVEIS ─────────────────────────────────────────────
// Cada cor: hex (CSS) + img (Unsplash sem restrição CORS)
const COLOR_PALETTE = {
  'Preto':           { hex: '#1C1C1E', img: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=600&q=85' },
  'Branco':          { hex: '#F5F5F0', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=85' },
  'Meia-Noite':      { hex: '#2C2C31', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=85' },
  'Estelar':         { hex: '#F2EFE7', img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&q=85' },
  'Roxo':            { hex: '#5E4C8A', img: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4f9a2?w=600&q=85' },
  'Azul':            { hex: '#3A6BC9', img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&q=85' },
  'Verde':           { hex: '#4A7C59', img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&q=85' },
  'Vermelho':        { hex: '#C41E3A', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=85' },
  'Amarelo':         { hex: '#F5CC00', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=85' },
  'Rosa':            { hex: '#E8A0B4', img: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=600&q=85' },
  'Azul-Sierra':     { hex: '#5B8DB8', img: 'https://images.unsplash.com/photo-1605464315542-bda3e2f4f9a2?w=600&q=85' },
  'Titânio Preto':   { hex: '#2D2D2D', img: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=600&q=85' },
  'Titânio Branco':  { hex: '#E8E5DC', img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=85' },
  'Titânio Natural': { hex: '#C8BDA8', img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&q=85' },
  'Titânio Deserto': { hex: '#B08D6A', img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=85' },
};
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=600&q=85';

// ─── PRODUTOS ─────────────────────────────────────────────────────────────────
// colors[] = cores que estão em estoque para este aparelho.
// A PRIMEIRA cor é exibida por padrão no catálogo e no detalhe.
const DEFAULT_PRODUCTS = [
  {
    id:'iphone16pm', name:'iPhone 16 Pro Max', model:'16', storage:'256 GB',
    condition:'Seminovo', price:12499, oldPrice:14999, badge:'Lançamento', badgeClass:'badge-new',
    install:'12× R$ 1.041', rating:'4.9 (312)',
    chip:'Apple A18 Pro', tela:'6.9" Super Retina XDR', cam:'48MP + 12MP + 12MP', bat:'4.685 mAh',
    colors: ['Titânio Preto', 'Titânio Natural', 'Titânio Branco', 'Titânio Deserto'],
  },
  {
    id:'iphone16p', name:'iPhone 16 Pro', model:'16', storage:'256 GB',
    condition:'Seminovo', price:10499, oldPrice:12999, badge:'Novo', badgeClass:'badge-new',
    install:'12× R$ 874', rating:'4.9 (248)',
    chip:'Apple A18 Pro', tela:'6.3" Super Retina XDR', cam:'48MP + 12MP + 12MP', bat:'3.274 mAh',
    colors: ['Titânio Preto', 'Titânio Branco', 'Titânio Natural'],
  },
  {
    id:'iphone16', name:'iPhone 16', model:'16', storage:'128 GB',
    condition:'Excelente', price:7999, oldPrice:9499, badge:'Popular', badgeClass:'badge-hot',
    install:'12× R$ 666', rating:'4.8 (189)',
    chip:'Apple A18', tela:'6.1" Super Retina XDR', cam:'48MP + 12MP', bat:'3.561 mAh',
    colors: ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa'],
  },
  {
    id:'iphone15pm', name:'iPhone 15 Pro Max', model:'15', storage:'256 GB',
    condition:'Seminovo', price:9499, oldPrice:11999, badge:'15% OFF', badgeClass:'badge-sale',
    install:'12× R$ 791', rating:'4.9 (521)',
    chip:'Apple A17 Pro', tela:'6.7" Super Retina XDR', cam:'48MP + 12MP + 12MP', bat:'4.422 mAh',
    colors: ['Titânio Preto', 'Titânio Natural', 'Titânio Branco'],
  },
  {
    id:'iphone15', name:'iPhone 15', model:'15', storage:'128 GB',
    condition:'Bom', price:5999, oldPrice:7499, badge:'20% OFF', badgeClass:'badge-sale',
    install:'12× R$ 499', rating:'4.8 (634)',
    chip:'Apple A16 Bionic', tela:'6.1" Super Retina XDR', cam:'48MP + 12MP', bat:'3.349 mAh',
    colors: ['Preto', 'Amarelo', 'Verde', 'Azul', 'Rosa'],
  },
  {
    id:'iphone14pm', name:'iPhone 14 Pro Max', model:'14', storage:'256 GB',
    condition:'Bom', price:7499, oldPrice:9999, badge:'25% OFF', badgeClass:'badge-sale',
    install:'12× R$ 624', rating:'4.8 (892)',
    chip:'Apple A16 Bionic', tela:'6.7" Super Retina XDR', cam:'48MP + 12MP + 12MP', bat:'4.323 mAh',
    colors: ['Roxo', 'Preto', 'Estelar'],
  },
  {
    id:'iphone14', name:'iPhone 14', model:'14', storage:'128 GB',
    condition:'Regular', price:4499, oldPrice:5999, badge:'Mais Vendido', badgeClass:'badge-hot',
    install:'12× R$ 374', rating:'4.7 (1.2k)',
    chip:'Apple A15 Bionic', tela:'6.1" Super Retina XDR', cam:'12MP + 12MP', bat:'3.279 mAh',
    colors: ['Meia-Noite', 'Estelar', 'Roxo', 'Vermelho', 'Azul'],
  },
  {
    id:'iphone13', name:'iPhone 13', model:'13', storage:'128 GB',
    condition:'Regular', price:3499, oldPrice:4999, badge:'30% OFF', badgeClass:'badge-sale',
    install:'12× R$ 291', rating:'4.7 (2.1k)',
    chip:'Apple A15 Bionic', tela:'6.1" Super Retina XDR', cam:'12MP + 12MP', bat:'3.227 mAh',
    colors: ['Meia-Noite', 'Estelar', 'Azul', 'Verde', 'Rosa', 'Vermelho'],
  },
];

// Persistência robusta: salva apenas remoções e produtos customizados,
// mesclando sempre com DEFAULT_PRODUCTS (que vem do código atualizado no GitHub).
function _loadProducts() {
  try {
    const saved = JSON.parse(localStorage.getItem('lumiProductsV2') || '{}');
    const removed = new Set(saved.removed || []);
    const custom = saved.custom || [];
    // Começa com os defaults, filtrando os removidos
    const base = DEFAULT_PRODUCTS.filter(p => !removed.has(p.id));
    // Adiciona os customizados (preservando edições de defaults também)
    const editedIds = new Set(custom.map(p => p.id));
    // Remove defaults que foram editados (versão editada está em custom)
    const baseFiltered = base.filter(p => !editedIds.has(p.id));
    return [...baseFiltered, ...custom];
  } catch(e) { return [...DEFAULT_PRODUCTS]; }
}
function saveProducts() {
  const removed = DEFAULT_PRODUCTS.filter(p => !products.find(x => x.id === p.id)).map(p => p.id);
  const custom = products.filter(p => {
    // produto customizado (não existe no DEFAULT) ou default editado
    const def = DEFAULT_PRODUCTS.find(d => d.id === p.id);
    return !def || JSON.stringify(def) !== JSON.stringify(p);
  });
  localStorage.setItem('lumiProductsV2', JSON.stringify({ removed, custom }));
}
const products = _loadProducts();

// ─── ESTADO GLOBAL ────────────────────────────────────────────────────────────
let loggedAdmin = JSON.parse(localStorage.getItem('lumiLoggedAdmin') || 'null');
let cart = JSON.parse(localStorage.getItem('lumiCart') || '[]');
let currentProduct = null;
let currentColor = null;
let shippingCost = 0;
let couponDiscount = 0;
let filters = { model:'all', storage:'all', price:'all' };
let darkMode = false;

// ─── ÍCONES ───────────────────────────────────────────────────────────────────
const icons = {
  phone:`<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  shield:`<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  zap:`<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  check:`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  messageCircle:`<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  search:`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  shoppingCart:`<svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  heart:`<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  trash2:`<svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  lock:`<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  mapPin:`<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail:`<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  clock:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  instagram:`<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  facebook:`<svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  youtube:`<svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>`,
  target:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  eye:`<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  diamond:`<svg viewBox="0 0 24 24"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="2"/><path d="M2 8.5h20"/></svg>`,
  sun:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  truck:`<svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  creditCard:`<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
  arrowLeft:`<svg viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  package:`<svg viewBox="0 0 24 24"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
};

// ─── HELPERS DE COR ───────────────────────────────────────────────────────────
function getColorData(product, colorName) {
  const name = colorName || (product.colors && product.colors[0]) || null;
  // Se produto tem fotos customizadas, usar a foto principal
  if (product.customPhotos && product.customPhotos.length) {
    return { hex: name ? (COLOR_PALETTE[name] || { hex:'#2a2a3e' }).hex : '#2a2a3e', img: product.customPhotos[0].dataUrl };
  }
  if (!name) return { hex:'#2a2a3e', img: FALLBACK_IMG };
  return COLOR_PALETTE[name] || { hex:'#2a2a3e', img: FALLBACK_IMG };
}

function buildCardColorDots(product) {
  if (!product.colors || !product.colors.length) return '';
  return `<div class="card-color-dots">
    ${product.colors.map(c => {
      const d = COLOR_PALETTE[c] || { hex:'#999' };
      return `<span class="card-color-dot" style="background:${d.hex}" title="${c}"></span>`;
    }).join('')}
  </div>`;
}

// ─── NAVEGAÇÃO ────────────────────────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id)?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'catalog') renderProducts();
  if (id === 'checkout') renderCheckoutSummary();
  if (id === 'admin') { if (!loggedAdmin) { showPage('auth'); return; } renderAdminTable(); }
}

function toggleDark() {
  darkMode = !darkMode;
  document.body.toggleAttribute('data-dark', darkMode);
  document.getElementById('darkToggleBtn').innerHTML = darkMode ? icons.sun : icons.moon;
}

function toggleMobileMenu() {
  const links = document.querySelector('.nav-links');
  links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
  links.style.position = 'absolute'; links.style.top = '72px';
  links.style.left = '0'; links.style.right = '0';
  links.style.background = 'var(--white)'; links.style.padding = '16px 5%';
  links.style.flexDirection = 'column'; links.style.gap = '12px';
  links.style.boxShadow = 'var(--shadow-md)';
}

// ─── CATÁLOGO ─────────────────────────────────────────────────────────────────
function renderProducts() {
  const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
  let filtered = products.filter(p => {
    const m = filters.model === 'all' || p.model === filters.model;
    const s = filters.storage === 'all' || p.storage.includes(filters.storage);
    let pr = true;
    if (filters.price === '4000') pr = p.price <= 4000;
    else if (filters.price === '7000') pr = p.price > 4000 && p.price <= 7000;
    else if (filters.price === '99999') pr = p.price > 7000;
    const se = !search || p.name.toLowerCase().includes(search);
    return m && s && pr && se;
  });

  const cnt = document.getElementById('productCount');
  if (cnt) cnt.textContent = `${filtered.length} produto${filtered.length!==1?'s':''} encontrado${filtered.length!==1?'s':''}`;

  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = filtered.map(p => {
    // Imagem baseada na primeira cor em estoque
    const cd = getColorData(p);
    return `
    <div class="product-card" onclick="viewProduct('${p.id}')">
      <div class="product-img-wrap">
        <img
          src="${cd.img}"
          alt="${p.name}"
          class="product-real-img"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        >
        <div class="product-visual" style="display:none"></div>
        <span class="product-badge ${p.badgeClass}">${p.badge}</span>
        ${p.condition ? `<span class="condition-tag">${p.condition}</span>` : ''}
        <button class="wishlist-btn" onclick="event.stopPropagation();this.classList.toggle('active')" title="Favoritar">${icons.heart}</button>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-meta-row">
          <span class="product-storage">${p.storage}</span>
          ${buildCardColorDots(p)}
        </div>
        <div>
          <span class="product-price">R$ ${p.price.toLocaleString('pt-BR')}</span>
          <span class="product-old-price">R$ ${p.oldPrice.toLocaleString('pt-BR')}</span>
        </div>
        <div class="product-install">ou ${p.install} sem juros</div>
        <button class="add-cart-btn" onclick="event.stopPropagation();addToCart('${p.id}')">Adicionar ao Carrinho</button>
      </div>
    </div>`;
  }).join('');
}

function filterProducts() { renderProducts(); }
function setFilter(type, val, el) {
  filters[type] = val;
  el.closest('.filter-options').querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
}
function sortProducts(val) {
  if (val === 'Menor Preço') products.sort((a,b) => a.price - b.price);
  else if (val === 'Maior Preço') products.sort((a,b) => b.price - a.price);
  saveProducts();
  renderProducts();
}

// ─── DETALHE DO PRODUTO ───────────────────────────────────────────────────────
function viewProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  currentColor = (p.colors && p.colors[0]) || null;

  // Textos básicos
  document.getElementById('detailName').textContent = p.name;
  document.getElementById('detailBadge').textContent = p.badge;
  document.getElementById('detailPrice').textContent = `R$ ${p.price.toLocaleString('pt-BR')}`;
  document.getElementById('detailOldPrice').textContent = `R$ ${p.oldPrice.toLocaleString('pt-BR')}`;
  document.getElementById('detailInstall').textContent = `ou ${p.install} sem juros no cartão`;
  document.getElementById('detailRating').textContent = p.rating + ' avaliações';
  document.getElementById('spec-chip').textContent = p.chip;
  document.getElementById('spec-tela').textContent = p.tela;
  document.getElementById('spec-cam').textContent = p.cam;
  document.getElementById('spec-bat').textContent = p.bat;

  // Imagem
  _setDetailImage(p, currentColor);

  // Seletores de cor — SOMENTE as cores em estoque
  const colorBox = document.getElementById('detailColorOptions');
  const colorSection = document.getElementById('detailColorSection');
  if (colorBox && colorSection) {
    if (p.colors && p.colors.length) {
      colorSection.style.display = '';
      colorBox.innerHTML = p.colors.map((c, i) => {
        const d = COLOR_PALETTE[c] || { hex:'#999' };
        return `<button
          class="color-dot-detail ${i === 0 ? 'active' : ''}"
          style="background:${d.hex}"
          title="${c}"
          onclick="selectDetailColor('${p.id}','${c}',this)"
        ></button>`;
      }).join('');
    } else {
      colorSection.style.display = 'none';
    }
  }
  // Label cor
  const lbl = document.getElementById('detailColorLabel');
  if (lbl) lbl.textContent = currentColor || '';

  // Armazenamento — exibe somente o armazenamento cadastrado
  const storageBox = document.getElementById('detailStorageOptions');
  if (storageBox) {
    storageBox.innerHTML = `<button class="storage-btn active">${p.storage}</button>`;
  }

  showPage('product');
}

function _setDetailImage(product, colorName) {
  const cd = getColorData(product, colorName);
  const img = document.getElementById('detailMainImg');
  if (img) { img.src = cd.img; img.alt = `${product.name} — ${colorName || ''}`; }
  // Thumbs: usa fotos customizadas se existirem, senão repete a imagem da cor
  const thumbs = document.querySelectorAll('.gallery-thumb-inner');
  const photos = (product.customPhotos && product.customPhotos.length)
    ? product.customPhotos.map(p => p.dataUrl)
    : [cd.img, cd.img, cd.img, cd.img];
  thumbs.forEach((t, idx) => {
    t.innerHTML = '';
    const src = photos[idx % photos.length];
    const i = document.createElement('img');
    i.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:6px';
    i.src = src;
    i.onclick = () => { if (img) img.src = src; };
    t.appendChild(i);
  });
}

function selectDetailColor(productId, colorName, btn) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  currentColor = colorName;
  document.querySelectorAll('.color-dot-detail').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const lbl = document.getElementById('detailColorLabel');
  if (lbl) lbl.textContent = colorName;
  _setDetailImage(p, colorName);
}

// ─── CARRINHO ─────────────────────────────────────────────────────────────────
function addFromDetail() {
  if (currentProduct) addToCart(currentProduct.id, currentColor);
}

function addToCart(id, colorName) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const color = colorName || (p.colors && p.colors[0]) || null;
  const cartKey = id + (color ? '_' + color : '');
  const existing = cart.find(i => i.cartKey === cartKey);
  if (existing) existing.qty++;
  else cart.push({ cartKey, id, name: p.name, price: p.price, storage: p.storage, color, qty: 1 });
  saveCart(); updateCartBadge();
  showNotification(`${p.name}${color ? ' (' + color + ')' : ''} adicionado!`);
}

function saveCart() { localStorage.setItem('lumiCart', JSON.stringify(cart)); }
function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartCount');
  badge.textContent = total;
  badge.classList.toggle('visible', total > 0);
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  renderCartItems();
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}

function renderCartItems() {
  const el = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (cart.length === 0) {
    el.innerHTML = `<div class="cart-empty"><span class="cart-empty-icon">${icons.shoppingCart}</span><p>Seu carrinho está vazio</p><p style="font-size:13px;margin-top:6px">Adicione produtos e aproveite!</p></div>`;
    footer.style.display = 'none'; return;
  }
  footer.style.display = 'block';
  el.innerHTML = cart.map((item, idx) => {
    const dot = item.color && COLOR_PALETTE[item.color]
      ? `<span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${COLOR_PALETTE[item.color].hex};border:1px solid rgba(0,0,0,0.15);margin-right:4px;vertical-align:middle"></span>`
      : '';
    const cartProduct = products.find(x => x.id === item.id);
    const cartImgData = cartProduct ? getColorData(cartProduct, item.color) : null;
    const cartImgSrc = cartImgData ? cartImgData.img : '';
    return `
    <div class="cart-item">
      <div class="cart-item-img">${cartImgSrc ? `<img src="${cartImgSrc}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-sm)">` : '<div class="cart-item-img-inner"></div>'}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-sub">${item.storage}${item.color ? ` · ${dot}${item.color}` : ''}</div>
        <div class="cart-item-price">R$ ${(item.price * item.qty).toLocaleString('pt-BR')}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty(${idx},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${idx},1)">+</button>
        </div>
        <button class="remove-item" onclick="removeItem(${idx})">${icons.trash2}</button>
      </div>
    </div>`;
  }).join('');
  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartSubtotal').textContent = `R$ ${sub.toLocaleString('pt-BR')}`;
  document.getElementById('cartTotal').textContent = `R$ ${sub.toLocaleString('pt-BR')}`;
}

function changeQty(idx, delta) {
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  saveCart(); updateCartBadge(); renderCartItems();
}
function removeItem(idx) {
  cart.splice(idx, 1);
  saveCart(); updateCartBadge(); renderCartItems();
}

// ─── CHECKOUT ─────────────────────────────────────────────────────────────────
function applyCoupon() {
  const code = document.getElementById('couponInput').value.trim().toUpperCase();
  if (code === 'LUMI10') { showNotification('Cupom LUMI10: 10% off'); couponDiscount = 0.1; }
  else if (code === 'PROMO20') { showNotification('Cupom PROMO20: 20% off'); couponDiscount = 0.2; }
  else { showNotification('Cupom inválido ou expirado'); couponDiscount = 0; }
  renderCheckoutSummary();
}

function renderCheckoutSummary() {
  const el = document.getElementById('summaryItems');
  if (!el) return;
  const items = cart.length > 0 ? cart : [{ name:'iPhone 16 Pro Max', storage:'256 GB', price:12499, qty:1 }];
  el.innerHTML = items.map(i => `
    <div class="summary-item">
      <div class="summary-img"><div class="summary-img-inner"></div></div>
      <div>
        <div class="summary-name">${i.name}</div>
        <div class="summary-detail">${i.storage}${i.color ? ' · ' + i.color : ''} × ${i.qty}</div>
      </div>
      <div class="summary-price">R$ ${(i.price*i.qty).toLocaleString('pt-BR')}</div>
    </div>`).join('');
  const sub = items.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = Math.round(sub * couponDiscount);
  const total = sub + shippingCost - discount;
  document.getElementById('summarySubtotal').textContent = `R$ ${sub.toLocaleString('pt-BR')}`;
  document.getElementById('summaryShipping').textContent = shippingCost === 0 ? 'Grátis' : `R$ ${(shippingCost/100).toFixed(2).replace('.',',')}`;
  document.getElementById('summaryTotal').textContent = `R$ ${total.toLocaleString('pt-BR')}`;
  const dr = document.getElementById('discountRow');
  if (discount > 0) { dr.style.display='flex'; document.getElementById('summaryDiscount').textContent=`-R$ ${discount.toLocaleString('pt-BR')}`; }
  else { dr.style.display='none'; }
}

function selectShipping(el, cost, label) {
  document.querySelectorAll('.shipping-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected'); shippingCost = cost;
  document.getElementById('summaryShipping').textContent = label;
  renderCheckoutSummary();
}

function selectPayment(btn, type) {
  document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pay-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('pay-' + type).classList.add('active');
  couponDiscount = type === 'pix' ? Math.max(couponDiscount, 0.05) : 0;
  renderCheckoutSummary();
}

function placeOrder() {
  document.getElementById('checkout-form-view').style.display = 'none';
  document.getElementById('checkout-success-view').style.display = 'block';
  cart = []; saveCart(); updateCartBadge();
  window.scrollTo({ top:0, behavior:'smooth' });
}

function copyPix() { showNotification('Código PIX copiado!'); }

// ─── MÁSCARAS ─────────────────────────────────────────────────────────────────
function maskCPF(el) {
  let v = el.value.replace(/\D/g,'').substring(0,11);
  v = v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');
  el.value = v;
}
function maskPhone(el) {
  let v = el.value.replace(/\D/g,'').substring(0,11);
  v = v.replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d)/,'$1-$2');
  el.value = v;
}
function maskCEP(el) {
  let v = el.value.replace(/\D/g,'').substring(0,8);
  v = v.replace(/(\d{5})(\d)/,'$1-$2');
  el.value = v;
}
function maskCard(el) {
  let v = el.value.replace(/\D/g,'').substring(0,16);
  v = v.replace(/(\d{4})(?=\d)/g,'$1 ').trim();
  el.value = v;
}
function maskExpiry(el) {
  let v = el.value.replace(/\D/g,'').substring(0,4);
  v = v.replace(/(\d{2})(\d)/,'$1/$2');
  el.value = v;
}

function showNotification(msg) {
  const n = document.getElementById('notification');
  n.textContent = msg; n.classList.add('show');
  setTimeout(() => n.classList.remove('show'), 3000);
}
function sendContact() { showNotification('Mensagem enviada com sucesso!'); }

// ─── OBSERVERS ────────────────────────────────────────────────────────────────
document.addEventListener('click', e => {
  if (e.target.closest('.gallery-thumb')) {
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    e.target.closest('.gallery-thumb').classList.add('active');
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

updateCartBadge();
renderProducts();
renderCheckoutSummary();

const pageObserver = new MutationObserver(() => {
  document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
});
pageObserver.observe(document.body, { subtree: true, childList: true });

// ─── ADMIN ────────────────────────────────────────────────────────────────────
let editingProductId = null;
let deletingProductId = null;

function renderAdminTable() {
  const tbody = document.getElementById('adminTableBody');
  if (!tbody) return;

  const total = products.length;
  const avg = total ? Math.round(products.reduce((s,p)=>s+p.price,0)/total) : 0;
  const minP = total ? products.reduce((a,b)=>a.price<b.price?a:b) : null;
  const maxP = total ? products.reduce((a,b)=>a.price>b.price?a:b) : null;
  document.getElementById('adminStatTotal').textContent = total;
  document.getElementById('adminStatAvg').textContent = `R$ ${avg.toLocaleString('pt-BR')}`;
  document.getElementById('adminStatMin').textContent = minP ? `R$ ${minP.price.toLocaleString('pt-BR')}` : '—';
  document.getElementById('adminStatMax').textContent = maxP ? `R$ ${maxP.price.toLocaleString('pt-BR')}` : '—';

  tbody.innerHTML = products.map(p => {
    const cd = getColorData(p);
    // Cor unica: primeira cor do array
    const singleColorName = (p.colors && p.colors[0]) || null;
    const singleColorData = singleColorName ? (COLOR_PALETTE[singleColorName] || { hex: '#999' }) : null;
    const colorCell = singleColorData
      ? `<div style="display:flex;align-items:center;gap:8px"><span style="display:inline-block;width:20px;height:20px;border-radius:50%;background:${singleColorData.hex};border:2px solid rgba(0,0,0,0.1);flex-shrink:0"></span><span style="font-size:12px;color:var(--gray-600)">${singleColorName}</span></div>`
      : '—';
    return `
    <tr class="admin-row">
      <td>
        <div class="admin-product-img">
          <img src="${cd.img}" alt="${p.name}"
            style="width:100%;height:100%;object-fit:cover;border-radius:6px"
            onerror="this.parentElement.innerHTML=\'<div class=admin-img-placeholder>📱</div>\'">
        </div>
      </td>
      <td><div class="admin-product-name">${p.name}</div><div class="admin-product-chip">${p.chip||'—'}</div></td>
      <td><span class="admin-tag">${p.storage}</span></td>
      <td><span class="admin-price">R$ ${p.price.toLocaleString('pt-BR')}</span></td>
      <td><span class="admin-old-price">R$ ${p.oldPrice.toLocaleString('pt-BR')}</span></td>
      <td><span class="product-badge ${p.badgeClass}" style="position:static;transform:none;font-size:11px">${p.badge}</span></td>
      <td><span class="condition-chip condition-${(p.condition||'').toLowerCase().replace(/\s/g,'')}">${p.condition||'—'}</span></td>
      <td>${colorCell}</td>
      <td><div class="admin-actions">
        <button class="admin-btn-edit" onclick="openEditModal(\'${p.id}\')">✏ Editar</button>
        <button class="admin-btn-delete" onclick="openDeleteModal(\'${p.id}\')">🗑 Excluir</button>
      </div></td>
    </tr>`;
  }).join('');
}

function openAddModal() {
  editingProductId = null;
  document.getElementById('modalTitle').textContent = 'Adicionar Produto';
  ['mName','mModel','mChip','mTela','mCam','mBat','mBadge','mPrice','mOldPrice'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('mStorage').value = '128 GB';
  document.getElementById('mCondition').value = 'Seminovo';
  document.getElementById('mBadgeClass').value = 'badge-sale';
  document.querySelectorAll('.color-checkbox').forEach(cb => cb.checked = false);
  document.getElementById('productModal').classList.add('open');
}

function openEditModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  editingProductId = id;
  document.getElementById('modalTitle').textContent = 'Editar Produto';
  document.getElementById('mName').value = p.name;
  document.getElementById('mModel').value = p.model;
  document.getElementById('mStorage').value = p.storage;
  document.getElementById('mCondition').value = p.condition || 'Seminovo';
  document.getElementById('mPrice').value = p.price;
  document.getElementById('mOldPrice').value = p.oldPrice;
  document.getElementById('mBadge').value = p.badge;
  document.getElementById('mBadgeClass').value = p.badgeClass;
  document.getElementById('mChip').value = p.chip || '';
  document.getElementById('mTela').value = p.tela || '';
  document.getElementById('mCam').value = p.cam || '';
  document.getElementById('mBat').value = p.bat || '';
  document.querySelectorAll('.color-checkbox').forEach(cb => {
    cb.checked = (p.colors || []).includes(cb.value);
  });
  document.getElementById('productModal').classList.add('open');
}

function closeProductModal() { document.getElementById('productModal').classList.remove('open'); }
function closeModal(e) { if (e.target === document.getElementById('productModal')) closeProductModal(); }

function saveProduct() {
  const name = document.getElementById('mName').value.trim();
  const model = document.getElementById('mModel').value.trim();
  const price = parseInt(document.getElementById('mPrice').value);
  if (!name || !model || !price) { showNotification('Preencha os campos obrigatórios!'); return; }

  const colors = Array.from(document.querySelectorAll('.color-checkbox:checked')).map(cb => cb.value);
  if (!colors.length) { showNotification('Selecione ao menos uma cor!'); return; }

  const oldPrice = parseInt(document.getElementById('mOldPrice').value) || Math.round(price * 1.25);
  const storage = document.getElementById('mStorage').value;
  const condition = document.getElementById('mCondition').value;
  const badge = document.getElementById('mBadge').value.trim() || 'Seminovo';
  const badgeClass = document.getElementById('mBadgeClass').value;
  const chip = document.getElementById('mChip').value.trim();
  const tela = document.getElementById('mTela').value.trim();
  const cam = document.getElementById('mCam').value.trim();
  const bat = document.getElementById('mBat').value.trim();
  const installNum = Math.round(price / 12);
  const installStr = `12× R$ ${installNum.toLocaleString('pt-BR')}`;

  if (editingProductId) {
    const idx = products.findIndex(x => x.id === editingProductId);
    if (idx !== -1) products[idx] = { ...products[idx], name, model, storage, condition, price, oldPrice, badge, badgeClass, install: installStr, chip, tela, cam, bat, colors };
    showNotification(`${name} atualizado!`);
  } else {
    const id = 'custom_' + Date.now();
    products.push({ id, name, model, storage, condition, price, oldPrice, badge, badgeClass, install: installStr, rating:'Novo', chip, tela, cam, bat, colors });
    showNotification(`${name} adicionado ao catálogo!`);
  }
  closeProductModal();
  renderAdminTable();
  renderProducts();
}

function openDeleteModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  deletingProductId = id;
  document.getElementById('deleteProductName').textContent = p.name;
  document.getElementById('deleteModal').classList.add('open');
}
function closeDeleteModal(e) {
  if (!e || e.target === document.getElementById('deleteModal')) {
    document.getElementById('deleteModal').classList.remove('open');
    deletingProductId = null;
  }
}
function confirmDelete() {
  if (!deletingProductId) return;
  const p = products.find(x => x.id === deletingProductId);
  const idx = products.findIndex(x => x.id === deletingProductId);
  if (idx !== -1) products.splice(idx, 1);
  saveProducts();
  document.getElementById('deleteModal').classList.remove('open');
  showNotification(`${p?.name||'Produto'} removido.`);
  deletingProductId = null;
  renderAdminTable();
  renderProducts();
}

// ─── AUTENTICAÇÃO ─────────────────────────────────────────────────────────────
const ADMIN_CODE = 'LUMI2025';
let adminUsers = JSON.parse(localStorage.getItem('lumiAdminUsers') || '[]');
// Usuário padrão caso não haja nenhum cadastrado
if (!adminUsers.length) {
  adminUsers = [{ name: 'Admin', email: 'admin@lumiphone.com.br', password: 'lumi123' }];
  localStorage.setItem('lumiAdminUsers', JSON.stringify(adminUsers));
}

function goToAdmin() {
  if (loggedAdmin) {
    showPage('admin');
  } else {
    showPage('auth');
    switchAuthTab('login');
  }
}

function switchAuthTab(tab) {
  document.getElementById('authFormLogin').style.display = tab === 'login' ? '' : 'none';
  document.getElementById('authFormRegister').style.display = tab === 'register' ? '' : 'none';
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
  document.getElementById('loginError').style.display = 'none';
  document.getElementById('registerError').style.display = 'none';
  document.getElementById('registerSuccess').style.display = 'none';
}

function togglePassVis(inputId, btn) {
  const inp = document.getElementById(inputId);
  if (inp.type === 'password') {
    inp.type = 'text';
    btn.style.opacity = '1';
  } else {
    inp.type = 'password';
    btn.style.opacity = '0.5';
  }
}

function handleLogin() {
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  const users = JSON.parse(localStorage.getItem('lumiAdminUsers') || '[]');
  const user = users.find(u => u.email.toLowerCase() === email && u.password === password);
  if (!user) {
    errEl.textContent = 'E-mail ou senha incorretos.';
    errEl.style.display = '';
    return;
  }
  loggedAdmin = { name: user.name, email: user.email };
  localStorage.setItem('lumiLoggedAdmin', JSON.stringify(loggedAdmin));
  errEl.style.display = 'none';
  updateAdminNavLink();
  showPage('admin');
  renderAdminTable();
}

function handleRegister() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirm').value;
  const code = document.getElementById('regCode').value.trim();
  const errEl = document.getElementById('registerError');
  const sucEl = document.getElementById('registerSuccess');
  errEl.style.display = 'none'; sucEl.style.display = 'none';
  if (!name || !email || !password || !confirm || !code) { errEl.textContent = 'Preencha todos os campos.'; errEl.style.display = ''; return; }
  if (password.length < 6) { errEl.textContent = 'A senha deve ter ao menos 6 caracteres.'; errEl.style.display = ''; return; }
  if (password !== confirm) { errEl.textContent = 'As senhas nao conferem.'; errEl.style.display = ''; return; }
  if (code !== ADMIN_CODE) { errEl.textContent = 'Codigo de acesso invalido.'; errEl.style.display = ''; return; }
  const users = JSON.parse(localStorage.getItem('lumiAdminUsers') || '[]');
  if (users.find(u => u.email.toLowerCase() === email)) { errEl.textContent = 'Este e-mail ja esta cadastrado.'; errEl.style.display = ''; return; }
  users.push({ name, email, password });
  localStorage.setItem('lumiAdminUsers', JSON.stringify(users));
  sucEl.textContent = 'Conta criada! Redirecionando para o login...';
  sucEl.style.display = '';
  setTimeout(() => switchAuthTab('login'), 1500);
}

function handleLogout() {
  loggedAdmin = null;
  localStorage.removeItem('lumiLoggedAdmin');
  updateAdminNavLink();
  showPage('home');
  showNotification('Voce saiu do painel.');
}

function updateAdminNavLink() {
  const badge = document.getElementById('adminUserBadge');
  if (badge && loggedAdmin) {
    badge.textContent = loggedAdmin.name;
    badge.style.display = '';
  } else if (badge) {
    badge.style.display = 'none';
  }
}

// ─── UPLOAD DE FOTOS ─────────────────────────────────────────────────────────
let uploadedPhotos = []; // [{dataUrl, name}]

function handlePhotoDragOver(e) {
  e.preventDefault();
  document.getElementById('photoUploadArea').classList.add('drag-over');
}
function handlePhotoDragLeave(e) {
  document.getElementById('photoUploadArea').classList.remove('drag-over');
}
function handlePhotoDrop(e) {
  e.preventDefault();
  document.getElementById('photoUploadArea').classList.remove('drag-over');
  const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
  processPhotoFiles(files);
}
function handlePhotoFileSelect(e) {
  const files = Array.from(e.target.files);
  processPhotoFiles(files);
  e.target.value = '';
}
function processPhotoFiles(files) {
  const MAX_SIZE = 5 * 1024 * 1024;
  let rejected = 0;
  const readers = files.map(file => new Promise(resolve => {
    if (file.size > MAX_SIZE) { rejected++; resolve(null); return; }
    const reader = new FileReader();
    reader.onload = ev => resolve({ dataUrl: ev.target.result, name: file.name });
    reader.readAsDataURL(file);
  }));
  Promise.all(readers).then(results => {
    results.filter(Boolean).forEach(photo => uploadedPhotos.push(photo));
    renderPhotoPreview();
    if (rejected > 0) showNotification(`${rejected} foto(s) ignorada(s): tamanho acima de 5 MB`);
  });
}
function removePhoto(idx) {
  uploadedPhotos.splice(idx, 1);
  renderPhotoPreview();
}
function setPhotoAsPrimary(idx) {
  if (idx === 0) return;
  const [photo] = uploadedPhotos.splice(idx, 1);
  uploadedPhotos.unshift(photo);
  renderPhotoPreview();
}
function renderPhotoPreview() {
  const grid = document.getElementById('photoPreviewGrid');
  if (!grid) return;
  if (!uploadedPhotos.length) { grid.innerHTML = ''; return; }
  grid.innerHTML = uploadedPhotos.map((photo, i) => `
    <div class="photo-preview-item${i === 0 ? ' primary' : ''}">
      <img src="${photo.dataUrl}" alt="${photo.name}">
      ${i === 0 ? '<span class="photo-preview-badge">Principal</span>' : ''}
      <button class="photo-preview-remove" onclick="removePhoto(${i})" title="Remover">✕</button>
      <button class="photo-preview-set-primary" onclick="setPhotoAsPrimary(${i})">Definir como principal</button>
    </div>
  `).join('');
}
function resetPhotoUpload() {
  uploadedPhotos = [];
  const grid = document.getElementById('photoPreviewGrid');
  if (grid) grid.innerHTML = '';
}
function loadProductPhotos(p) {
  uploadedPhotos = p.customPhotos ? [...p.customPhotos] : [];
  renderPhotoPreview();
}

// ─── SELETOR DE COR ÚNICA ────────────────────────────────────────────────────
let selectedSingleColor = null;

function buildColorPicker(selectedColor) {
  selectedSingleColor = selectedColor || null;
  const wrap = document.getElementById('colorPickerWrap');
  const lbl = document.getElementById('selectedColorLabel');
  if (!wrap) return;
  wrap.innerHTML = Object.entries(COLOR_PALETTE).map(([name, data]) => {
    const isSelected = name === selectedSingleColor;
    return `<button
      type="button"
      class="color-picker-swatch${isSelected ? ' active' : ''}"
      style="background:${data.hex};${isSelected ? 'outline:3px solid var(--accent-dark);outline-offset:2px;' : ''}"
      title="${name}"
      onclick="selectSingleColor('${name}', this)"
    ></button>`;
  }).join('');
  if (lbl) lbl.textContent = selectedSingleColor || '—';
}

function selectSingleColor(name, btn) {
  selectedSingleColor = name;
  document.querySelectorAll('.color-picker-swatch').forEach(b => {
    b.classList.remove('active');
    b.style.outline = '';
    b.style.outlineOffset = '';
  });
  btn.classList.add('active');
  btn.style.outline = '3px solid var(--accent-dark)';
  btn.style.outlineOffset = '2px';
  const lbl = document.getElementById('selectedColorLabel');
  if (lbl) lbl.textContent = name;
}

// ─── OVERRIDE: openAddModal com cor única ────────────────────────────────────
const _origOpenAdd = openAddModal;
openAddModal = function() {
  editingProductId = null;
  document.getElementById('modalTitle').textContent = 'Adicionar Produto';
  ['mName','mModel','mChip','mTela','mCam','mBat','mBadge','mPrice','mOldPrice'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('mStorage').value = '128 GB';
  document.getElementById('mCondition').value = 'Seminovo';
  document.getElementById('mBadgeClass').value = 'badge-sale';
  buildColorPicker(null);
  resetPhotoUpload();
  document.getElementById('productModal').classList.add('open');
};

const _origOpenEdit = openEditModal;
openEditModal = function(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  editingProductId = id;
  document.getElementById('modalTitle').textContent = 'Editar Produto';
  document.getElementById('mName').value = p.name;
  document.getElementById('mModel').value = p.model;
  document.getElementById('mStorage').value = p.storage;
  document.getElementById('mCondition').value = p.condition || 'Seminovo';
  document.getElementById('mPrice').value = p.price;
  document.getElementById('mOldPrice').value = p.oldPrice;
  document.getElementById('mBadge').value = p.badge;
  document.getElementById('mBadgeClass').value = p.badgeClass;
  document.getElementById('mChip').value = p.chip || '';
  document.getElementById('mTela').value = p.tela || '';
  document.getElementById('mCam').value = p.cam || '';
  document.getElementById('mBat').value = p.bat || '';
  // Cor unica: pega a primeira cor do array
  const singleColor = (p.colors && p.colors[0]) || null;
  buildColorPicker(singleColor);
  loadProductPhotos(p);
  document.getElementById('productModal').classList.add('open');
};

const _origSave = saveProduct;
saveProduct = function() {
  const name = document.getElementById('mName').value.trim();
  const model = document.getElementById('mModel').value.trim();
  const price = parseInt(document.getElementById('mPrice').value);
  if (!name || !model || !price) { showNotification('Preencha os campos obrigatorios!'); return; }
  if (!selectedSingleColor) { showNotification('Selecione uma cor para o produto!'); return; }

  const colors = [selectedSingleColor];
  const oldPrice = parseInt(document.getElementById('mOldPrice').value) || Math.round(price * 1.25);
  const storage = document.getElementById('mStorage').value;
  const condition = document.getElementById('mCondition').value;
  const badge = document.getElementById('mBadge').value.trim() || 'Seminovo';
  const badgeClass = document.getElementById('mBadgeClass').value;
  const chip = document.getElementById('mChip').value.trim();
  const tela = document.getElementById('mTela').value.trim();
  const cam = document.getElementById('mCam').value.trim();
  const bat = document.getElementById('mBat').value.trim();
  const installNum = Math.round(price / 12);
  const installStr = `12x R$ ${installNum.toLocaleString('pt-BR')}`;
  const customPhotos = uploadedPhotos.length ? [...uploadedPhotos] : undefined;

  if (editingProductId) {
    const idx = products.findIndex(x => x.id === editingProductId);
    if (idx !== -1) products[idx] = { ...products[idx], name, model, storage, condition, price, oldPrice, badge, badgeClass, install: installStr, chip, tela, cam, bat, colors, customPhotos };
    showNotification(`${name} atualizado!`);
  } else {
    const id = 'custom_' + Date.now();
    products.push({ id, name, model, storage, condition, price, oldPrice, badge, badgeClass, install: installStr, rating:'Novo', chip, tela, cam, bat, colors, customPhotos });
    showNotification(`${name} adicionado ao catalogo!`);
  }
  saveProducts();
  closeProductModal();
  renderAdminTable();
  renderProducts();
};

// Inicializa estado do admin
updateAdminNavLink();
// Se estava logado e tenta entrar no admin, o link funciona normalmente
