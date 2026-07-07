/* PageTurner Interactive Logic */

const BOOK_CATALOG = [
  // INDIE BOOKS
  { id:"atomic-habits", title:"Atomic Habits", author:"James Clear", price:399, originalPrice:499, rating:4.8, reviewsCount:5430, cover:"assets/book_atomic_habits.png", category:"Academic", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:true },
  { id:"ikigai", title:"Ikigai", author:"Hector Garcia", price:299, originalPrice:399, rating:4.6, reviewsCount:2310, cover:"assets/book_ikigai.png", category:"Non-Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:true },
  { id:"alchemist", title:"The Alchemist", author:"Paulo Coelho", price:199, originalPrice:299, rating:4.7, reviewsCount:4320, cover:"assets/book_alchemist.png", category:"Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:true },
  { id:"kafka-on-the-shore", title:"Kafka on the Shore", author:"Haruki Murakami", price:599, originalPrice:699, rating:4.5, reviewsCount:1420, cover:"assets/book_kafka_shore.png", category:"Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:false },
  { id:"midnight-library-new", title:"The Midnight Library", author:"Matt Haig", price:499, originalPrice:499, rating:4.5, reviewsCount:1280, cover:"assets/book_midnight_library.png", category:"Mystery & Thriller", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:true },
  { id:"silent-patient-new", title:"The Silent Patient", author:"Alex Michaelides", price:499, originalPrice:599, rating:4.4, reviewsCount:1890, cover:"assets/book_silent_patient.png", category:"Mystery & Thriller", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:true },
  { id:"blue-castle", title:"The Blue Castle", author:"L.M. Montgomery", price:249, originalPrice:299, rating:4.6, reviewsCount:340, cover:"assets/book_blue_castle.png", category:"Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:false },
  { id:"radio-silence", title:"Radio Silence", author:"Alice Oseman", price:380, originalPrice:420, rating:4.7, reviewsCount:680, cover:"https://pictures.abebooks.com/isbn/9780062335739-us.jpg", category:"Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:false },
  { id:"piranesi", title:"Piranesi", author:"Susanna Clarke", price:450, originalPrice:550, rating:4.5, reviewsCount:910, cover:"https://covers.openlibrary.org/b/isbn/9781526622426-L.jpg", category:"Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:false },
  { id:"song-of-achilles", title:"The Song of Achilles", author:"Madeline Miller", price:399, originalPrice:499, rating:4.7, reviewsCount:1840, cover:"https://covers.openlibrary.org/b/isbn/9780062060624-L.jpg", category:"Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:false },
  { id:"starless-sea", title:"The Starless Sea", author:"Erin Morgenstern", price:499, originalPrice:599, rating:4.4, reviewsCount:760, cover:"https://covers.openlibrary.org/b/isbn/9781101971383-L.jpg", category:"Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:false },
  { id:"sea-of-tranquility", title:"Sea of Tranquility", author:"Emily St. John Mandel", price:420, originalPrice:480, rating:4.6, reviewsCount:620, cover:"https://covers.openlibrary.org/b/isbn/9780593321447-L.jpg", category:"Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:false },
  { id:"klara-and-the-sun", title:"Klara and the Sun", author:"Kazuo Ishiguro", price:480, originalPrice:580, rating:4.3, reviewsCount:1120, cover:"https://covers.openlibrary.org/b/isbn/9780593318171-L.jpg", category:"Fiction", thrifted:false, isIndie:true, condition:"New Copy", isBestseller:false },

  // THRIFTED BOOKS
  { id:"midnight-library", title:"The Midnight Library", author:"Matt Haig", price:399, originalPrice:499, rating:4.5, reviewsCount:1280, cover:"assets/book_midnight_library.png", category:"Mystery & Thriller", thrifted:true, isIndie:false, condition:"Good Condition", isBestseller:true },
  { id:"silent-patient", title:"The Silent Patient", author:"Alex Michaelides", price:349, originalPrice:599, rating:4.4, reviewsCount:1890, cover:"assets/book_silent_patient.png", category:"Mystery & Thriller", thrifted:true, isIndie:false, condition:"Good Condition", isBestseller:true },
  { id:"verity", title:"Verity", author:"Colleen Hoover", price:329, originalPrice:599, rating:4.3, reviewsCount:2010, cover:"assets/book_verity.png", category:"Mystery & Thriller", thrifted:true, isIndie:false, condition:"Good Condition", isBestseller:true },
  { id:"secret-history", title:"The Secret History", author:"Donna Tartt", price:450, originalPrice:899, rating:4.6, reviewsCount:890, cover:"assets/book_secret_history.png", category:"Fiction", thrifted:true, isIndie:false, condition:"Good Condition", isBestseller:false },
  { id:"a-little-life", title:"A Little Life", author:"Hanya Yanagihara", price:399, originalPrice:750, rating:4.7, reviewsCount:1560, cover:"assets/book_little_life.png", category:"Fiction", thrifted:true, isIndie:false, condition:"Like New", isBestseller:false },
  { id:"circe", title:"Circe", author:"Madeline Miller", price:280, originalPrice:399, rating:4.4, reviewsCount:950, cover:"assets/book_circe.png", category:"Fiction", thrifted:true, isIndie:false, condition:"Acceptable", isBestseller:false },
  { id:"normal-people", title:"Normal People", author:"Sally Rooney", price:320, originalPrice:450, rating:4.2, reviewsCount:1720, cover:"assets/book_normal_people.png", category:"Fiction", thrifted:true, isIndie:false, condition:"Good Condition", isBestseller:false },
  { id:"seven-husbands", title:"The Seven Husbands of Evelyn Hugo", author:"Taylor Jenkins Reid", price:490, originalPrice:650, rating:4.6, reviewsCount:2280, cover:"assets/book_evelyn_hugo.png", category:"Fiction", thrifted:true, isIndie:false, condition:"Like New", isBestseller:false },
  { id:"crime-punishment", title:"Crime and Punishment", author:"Fyodor Dostoevsky", price:180, originalPrice:299, rating:4.7, reviewsCount:540, cover:"https://covers.openlibrary.org/b/isbn/9780140449136-L.jpg", category:"Fiction", thrifted:true, isIndie:false, condition:"Good Condition", isBestseller:false },
  { id:"great-gatsby", title:"The Great Gatsby", author:"F. Scott Fitzgerald", price:150, originalPrice:220, rating:4.4, reviewsCount:820, cover:"https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg", category:"Fiction", thrifted:true, isIndie:false, condition:"Good Condition", isBestseller:false },
  { id:"wuthering-heights", title:"Wuthering Heights", author:"Emily Brontë", price:160, originalPrice:240, rating:4.3, reviewsCount:460, cover:"https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg", category:"Fiction", thrifted:true, isIndie:false, condition:"Acceptable", isBestseller:false },
  { id:"jane-eyre", title:"Jane Eyre", author:"Charlotte Brontë", price:175, originalPrice:260, rating:4.5, reviewsCount:680, cover:"https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg", category:"Fiction", thrifted:true, isIndie:false, condition:"Good Condition", isBestseller:false },
  { id:"dune", title:"Dune", author:"Frank Herbert", price:299, originalPrice:499, rating:4.6, reviewsCount:1950, cover:"https://covers.openlibrary.org/b/isbn/9780441172719-L.jpg", category:"Fiction", thrifted:true, isIndie:false, condition:"Good Condition", isBestseller:false },
  { id:"frankenstein", title:"Frankenstein", author:"Mary Shelley", price:140, originalPrice:199, rating:4.4, reviewsCount:380, cover:"https://covers.openlibrary.org/b/isbn/9780141439471-L.jpg", category:"Fiction", thrifted:true, isIndie:false, condition:"Acceptable", isBestseller:false },
  { id:"hobbit", title:"The Hobbit", author:"J.R.R. Tolkien", price:220, originalPrice:350, rating:4.8, reviewsCount:2840, cover:"https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg", category:"Fiction", thrifted:true, isIndie:false, condition:"Like New", isBestseller:false }
];

// Cart & Favorites State
let Cart = JSON.parse(localStorage.getItem('pageturner_cart')) || null;
if (!Cart) {
  Cart = [
    { id:"atomic-habits", title:"Atomic Habits", author:"James Clear", price:399, cover:"assets/book_atomic_habits.png", type:"New Copy", condition:"Indie / New", quantity:1 },
    { id:"midnight-library", title:"The Midnight Library", author:"Matt Haig", price:399, cover:"assets/book_midnight_library.png", type:"Thrifted Copy", condition:"Thrifted / Good Condition", quantity:1 }
  ];
  saveCart();
}
let Favorites = JSON.parse(localStorage.getItem('pageturner_favorites')) || [];

function saveCart() {
  localStorage.setItem('pageturner_cart', JSON.stringify(Cart));
  updateCartBadge();
}

function saveFavorites() {
  localStorage.setItem('pageturner_favorites', JSON.stringify(Favorites));
}

function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  const total = Cart.reduce((s, i) => s + i.quantity, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

function handleImageError(img, title, author) {
  const container = img.parentElement;
  if (!container) return;
  const themes = [
    { bg:'linear-gradient(135deg,#3B0764,#1E1B4B)', text:'#F5F3FF' },
    { bg:'linear-gradient(135deg,#1E293B,#0F172A)', text:'#F8FAFC' },
    { bg:'linear-gradient(135deg,#065F46,#022C22)', text:'#ECFDF5' },
    { bg:'linear-gradient(135deg,#7C2D12,#431407)', text:'#FFF7ED' },
    { bg:'linear-gradient(135deg,#831843,#4C0519)', text:'#FDF2F8' },
    { bg:'linear-gradient(135deg,#172554,#080E2C)', text:'#EFF6FF' }
  ];
  const { bg, text } = themes[Math.abs(title.length) % themes.length];
  container.innerHTML = `
    <div class="fallback-cover" style="background:${bg};color:${text};width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:20px 16px;text-align:center;box-shadow:inset 4px 0 10px rgba(0,0,0,0.2),inset -4px 0 10px rgba(255,255,255,0.05);border-left:5px solid rgba(0,0,0,0.3);position:relative;">
      <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;opacity:0.65;font-family:var(--font-sans);">PageTurner</div>
      <div style="font-family:var(--font-serif);font-size:14px;font-weight:700;line-height:1.35;margin:auto 0;overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;">${title}</div>
      <div style="font-size:11px;opacity:0.8;font-style:italic;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--font-sans);border-top:1px solid rgba(255,255,255,0.1);padding-top:8px;">${author}</div>
    </div>`;
}

function addToCart(id, price, type, conditionLabel) {
  const book = BOOK_CATALOG.find(b => b.id === id);
  if (!book) return;
  const idx = Cart.findIndex(i => i.id === id && i.type === type);
  if (idx > -1) {
    Cart[idx].quantity += 1;
  } else {
    Cart.push({ id:book.id, title:book.title, author:book.author, price, cover:book.cover, type, condition:conditionLabel || (type === "New Copy" ? "Indie / New" : "Thrifted / Good Condition"), quantity:1 });
  }
  saveCart();
  const cartIcon = document.querySelector('.icon-btn svg');
  if (cartIcon) {
    cartIcon.style.transform = 'scale(1.3) rotate(-10deg)';
    setTimeout(() => { cartIcon.style.transform = 'none'; }, 200);
  }
}

function toggleFavorite(id, btn) {
  const idx = Favorites.indexOf(id);
  if (idx > -1) { Favorites.splice(idx, 1); btn?.classList.remove('active'); }
  else           { Favorites.push(id);        btn?.classList.add('active'); }
  saveFavorites();
}

// Heart SVG reused across cards
const HEART_SVG = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;

function buildBookCard(book) {
  const card = document.createElement('div');
  card.className = 'book-card';
  const isFav = Favorites.includes(book.id) ? 'active' : '';
  const badge = book.thrifted ? book.condition : 'New';
  card.innerHTML = `
    <div class="book-cover-container">
      <img src="${book.cover}" alt="${book.title}" onerror="handleImageError(this,'${book.title}','${book.author}')">
      <span class="book-badge ${book.thrifted ? 'thrifted' : 'new'}">${badge}</span>
      <button class="book-card-action fav-btn ${isFav}" title="Add to Wishlist">${HEART_SVG}</button>
    </div>
    <div class="book-info">
      <h4 class="book-title">${book.title}</h4>
      <span class="book-author">${book.author}</span>
      <div class="book-price-row">
        <span class="book-price">₹${book.price}</span>
        ${book.originalPrice > book.price ? `<span class="book-price-original">₹${book.originalPrice}</span>` : ''}
      </div>
    </div>`;
  card.addEventListener('click', e => {
    const favBtn = e.target.closest('.fav-btn');
    if (favBtn) { e.stopPropagation(); toggleFavorite(book.id, favBtn); }
    else window.location.href = `book.html?id=${book.id}`;
  });
  return card;
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  const searchInput = document.querySelector('.search-bar input');
  searchInput?.addEventListener('keypress', e => {
    if (e.key === 'Enter' && searchInput.value.trim())
      window.location.href = `thrifted.html?search=${encodeURIComponent(searchInput.value.trim())}`;
  });

  const path = window.location.pathname.toLowerCase();
  let page = path.split('/').pop().replace(/\.html$/, '') || 'index';
  if (!page) page = 'index';

  const urlParams = new URLSearchParams(window.location.search);
  const typeParam = urlParams.get('type');
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if      (typeParam === 'indie'    && href.includes('type=indie'))    link.classList.add('active');
    else if (typeParam === 'thrifted' && href.includes('type=thrifted')) link.classList.add('active');
    else if (!typeParam && (href === 'index.html' || href === '/') && page === 'index') link.classList.add('active');
    else if (!typeParam && href === 'checkout.html' && page === 'checkout') link.classList.add('active');
  });

  const pages = { index: initHomePage, thrifted: initListingPage, book: initDetailPage, checkout: initCheckoutPage, success: initSuccessPage };
  pages[page]?.();
});

// ── HOME PAGE ──────────────────────────────────────────────────────────────────
function initHomePage() {
  const grid = document.getElementById('bestsellers-grid');
  if (!grid) return;
  grid.innerHTML = '';
  BOOK_CATALOG.filter(b => b.isBestseller).forEach(book => grid.appendChild(buildBookCard(book)));
}

// ── LISTING PAGE ───────────────────────────────────────────────────────────────
function initListingPage() {
  const params      = new URLSearchParams(window.location.search);
  const type        = params.get('type') || 'thrifted';
  const searchWord  = params.get('search');
  const categoryParam = params.get('category');

  const listingGrid    = document.getElementById('listing-grid');
  const resultsCount   = document.getElementById('results-count');
  const categoryFilters  = document.querySelectorAll('.category-filter');
  const conditionFilters = document.querySelectorAll('.condition-filter');
  const priceSlider    = document.getElementById('price-slider');
  const priceValue     = document.getElementById('price-value');
  const sortSelect     = document.getElementById('sort-select');

  // Header customisation
  const isIndie = type === 'indie';
  const banner  = document.querySelector('.listing-header-banner');
  const h1      = document.querySelector('.listing-header-banner h1');
  const desc    = document.querySelector('.listing-header-banner p');
  const condGroup = Array.from(document.querySelectorAll('.filters-sidebar .filter-group'))
                         .find(g => g.querySelector('.condition-filter') || g.textContent.includes('Condition'));

  if (isIndie) {
    document.title = "Indie Gems - PageTurner";
    banner?.setAttribute('class', 'listing-header-banner indie');
    if (h1)   { h1.textContent = 'Indie Gems'; h1.className = 'wavy-accent red'; }
    if (desc)  desc.textContent = 'Original stories. Unique voices. Discover the latest from independent authors.';
    if (condGroup) condGroup.style.display = 'none';
  } else {
    document.title = "Thrifted Treasures - PageTurner";
    banner?.setAttribute('class', 'listing-header-banner thrifted');
    if (h1)   { h1.textContent = 'Thrifted Treasures'; h1.className = 'wavy-accent brown'; }
    if (desc)  desc.textContent = 'Pre-loved stories waiting for their next chapter. Each book is inspected for quality and priced for discovery.';
    if (condGroup) condGroup.style.display = 'flex';
  }

  // Pre-select categories
  categoryFilters.forEach(f => { f.checked = categoryParam ? f.value === categoryParam : true; });
  if (searchWord) {
    const si = document.querySelector('.search-bar input');
    if (si) si.value = searchWord;
  }

  priceSlider?.addEventListener('input', () => { priceValue.textContent = `₹${priceSlider.value}`; render(); });
  categoryFilters.forEach(f => f.addEventListener('change', render));
  conditionFilters.forEach(f => f.addEventListener('change', render));
  sortSelect?.addEventListener('change', render);

  function render() {
    if (!listingGrid) return;

    let list = BOOK_CATALOG.filter(b => isIndie ? b.isIndie : b.thrifted);

    if (searchWord) {
      const sw = searchWord.toLowerCase();
      list = list.filter(b => b.title.toLowerCase().includes(sw) || b.author.toLowerCase().includes(sw));
    }

    const activeCats = Array.from(categoryFilters).filter(f => f.checked).map(f => f.value);
    list = activeCats.length ? list.filter(b => activeCats.includes(b.category)) : [];

    if (!isIndie) {
      const activeConds = Array.from(conditionFilters).filter(f => f.checked).map(f => f.value);
      if (activeConds.length) {
        list = list.filter(b => {
          if (activeConds.includes('All Thrifted')) return true;
          if (activeConds.includes('Like New')  && b.condition === 'Like New')      return true;
          if (activeConds.includes('Good')       && b.condition === 'Good Condition') return true;
          if (activeConds.includes('Acceptable') && b.condition === 'Acceptable')   return true;
          return false;
        });
      }
    }

    if (priceSlider) list = list.filter(b => b.price <= parseInt(priceSlider.value, 10));

    if (sortSelect) {
      const s = sortSelect.value;
      if      (s === 'price-low')  list.sort((a, b) => a.price  - b.price);
      else if (s === 'price-high') list.sort((a, b) => b.price  - a.price);
      else if (s === 'rating')     list.sort((a, b) => b.rating - a.rating);
    }

    listingGrid.innerHTML = '';
    if (resultsCount) resultsCount.textContent = `Showing ${list.length} results for ${isIndie ? 'Indie Books' : 'Thrifted Books'}`;

    if (!list.length) {
      listingGrid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--color-text-muted);">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:16px;"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3>No books found matching your filters</h3>
          <p style="margin-top:8px;">Try clearing some options or checking a different category.</p>
        </div>`;
      return;
    }
    list.forEach(book => listingGrid.appendChild(buildBookCard(book)));
  }

  render();
}

// ── DETAIL PAGE ────────────────────────────────────────────────────────────────
function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const book   = BOOK_CATALOG.find(b => b.id === (params.get('id') || 'midnight-library')) || BOOK_CATALOG[0];

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('breadcrumb-book-title', book.title);
  set('detail-title', book.title);
  set('detail-author', `by ${book.author}`);
  set('detail-rating-text', `${book.rating} (${book.reviewsCount} Reviews)`);

  const mainImg = document.getElementById('detail-main-img');
  if (mainImg) { mainImg.src = book.cover; mainImg.alt = book.title; mainImg.onerror = () => handleImageError(mainImg, book.title, book.author); }

  const favBtn = document.getElementById('detail-fav-btn');
  if (favBtn) { if (Favorites.includes(book.id)) favBtn.classList.add('active'); favBtn.addEventListener('click', () => toggleFavorite(book.id, favBtn)); }

  const newV      = book.isIndie ? book : BOOK_CATALOG.find(b => b.title === book.title && b.isIndie);
  const thriftedV = book.thrifted ? book : BOOK_CATALOG.find(b => b.title === book.title && b.thrifted);

  const newCard      = document.getElementById('new-purchase-card');
  const thriftedCard = document.getElementById('thrifted-purchase-card');

  set('new-card-price',      newV      ? `₹${newV.price}`      : 'Out of Stock');
  set('thrifted-card-price', thriftedV ? `₹${thriftedV.price}` : 'Out of Stock');

  function setCardState(card, hasVariant, otherCard) {
    if (!card) return;
    if (!hasVariant) {
      card.style.cssText = 'opacity:0.5;pointer-events:none';
      const desc = card.querySelector('.purchase-details');
      if (desc) desc.innerHTML = '<span>Out of Stock</span>';
      card.classList.remove('active');
      otherCard?.classList.add('active');
    }
  }
  setCardState(newCard, !!newV, thriftedCard);
  setCardState(thriftedCard, !!thriftedV, newCard);

  if (thriftedV && thriftedCard) {
    const span = thriftedCard.querySelector('.purchase-details span');
    if (span) span.textContent = `${thriftedV.condition}, Paperback`;
  }

  if (newCard && thriftedCard) {
    newCard.addEventListener('click',      () => { if (newV)      { newCard.classList.add('active');      thriftedCard.classList.remove('active'); } });
    thriftedCard.addEventListener('click', () => { if (thriftedV) { thriftedCard.classList.add('active'); newCard.classList.remove('active'); } });
  }

  function bindAddBtn(btnId, variant, type, label) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    if (!variant) { btn.style.display = 'none'; return; }
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(variant.id, variant.price, type, label);
      const orig = btn.innerHTML;
      btn.innerHTML = 'Added! ✓'; btn.disabled = true;
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 1500);
    });
  }
  bindAddBtn('new-copy-add-btn',      newV,      'New Copy',      'Indie / New');
  bindAddBtn('thrifted-copy-add-btn', thriftedV, 'Thrifted Copy', `Thrifted / ${thriftedV?.condition}`);

  const thumbs = document.querySelectorAll('.thumb-wrapper');
  thumbs.forEach(t => t.addEventListener('click', () => {
    thumbs.forEach(th => th.classList.remove('active'));
    t.classList.add('active');
    const img = t.querySelector('img');
    if (img && mainImg) mainImg.src = img.src;
  }));
}

// ── CHECKOUT PAGE ──────────────────────────────────────────────────────────────
function initCheckoutPage() {
  const itemsContainer  = document.getElementById('checkout-items-list');
  const promoInput      = document.getElementById('promo-input');
  const promoBtn        = document.getElementById('promo-btn');
  const subtotalEl      = document.getElementById('checkout-subtotal');
  const shippingEl      = document.getElementById('checkout-shipping');
  const taxEl           = document.getElementById('checkout-tax');
  const totalEl         = document.getElementById('checkout-total');
  const placeOrderBtn   = document.getElementById('place-order-btn');
  let discount = 0;

  function updateSummary() {
    const subtotal = Cart.reduce((s, i) => s + i.price * i.quantity, 0);
    const shipping = subtotal > 499 || subtotal === 0 ? 0 : 40;
    const tax      = subtotal > 0 ? Math.round(subtotal * 0.018) : 0;
    const total    = subtotal > 0 ? Math.max(0, subtotal - discount) + shipping + tax : 0;
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping ? `₹${shipping.toFixed(2)}` : 'FREE';
    if (taxEl)      taxEl.textContent      = `₹${tax.toFixed(2)}`;
    if (totalEl)    totalEl.textContent    = `₹${total.toFixed(2)}`;
    if (placeOrderBtn) placeOrderBtn.disabled = !Cart.length;
  }

  function renderList() {
    if (!itemsContainer) return;
    itemsContainer.innerHTML = '';
    if (!Cart.length) {
      itemsContainer.innerHTML = `
        <div style="text-align:center;padding:40px 0;color:var(--color-text-muted);">
          <h3>Your selections cart is empty</h3>
          <p style="margin-top:8px;">Explore our catalog to add books to your shelf.</p>
          <a href="thrifted.html" class="btn btn-primary" style="margin-top:16px;">Browse Books</a>
        </div>`;
      updateSummary(); return;
    }
    Cart.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="cart-item-image"><img src="${item.cover}" alt="${item.title}" onerror="handleImageError(this,'${item.title}','${item.author}')"></div>
        <div class="cart-item-details">
          <div class="cart-item-meta-top">
            <div><h4 class="cart-item-title">${item.title}</h4><span class="cart-item-author">${item.author}</span></div>
            <span class="cart-item-price">₹${item.price * item.quantity}</span>
          </div>
          <div class="cart-item-meta-bottom">
            <span class="cart-item-badge">${item.condition}</span>
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="font-size:11px;color:var(--color-text-muted);">Qty: ${item.quantity}</span>
              <button class="cart-item-remove-btn" data-index="${idx}">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                Remove
              </button>
            </div>
          </div>
        </div>`;
      row.querySelector('.cart-item-remove-btn').addEventListener('click', () => {
        Cart.splice(idx, 1); saveCart(); renderList();
      });
      itemsContainer.appendChild(row);
    });
    updateSummary();
  }

  promoBtn?.addEventListener('click', () => {
    const code = promoInput?.value.trim().toUpperCase();
    if (code === 'COZYREADS') { discount = 100; alert("Promo code applied: ₹100 off your order! 🎉"); updateSummary(); }
    else alert("Invalid promo code. Try 'COZYREADS'!");
  });

  placeOrderBtn?.addEventListener('click', () => {
    if (!Cart.length) return;
    const get = id => document.getElementById(id)?.value.trim() || '';
    const name = get('shipping-name'), address = get('shipping-address'),
          cityZip = get('shipping-city-zip'), phone = get('shipping-phone');
    if (!name || !address || !cityZip || !phone) { alert("Please fill in all shipping details before placing your order!"); return; }
    localStorage.setItem('pageturner_shipping', JSON.stringify({ name, address, cityZip, phone }));
    localStorage.setItem('pageturner_last_total', totalEl.textContent);
    Cart = []; saveCart();
    window.location.href = 'success.html';
  });

  renderList();
}

// ── SUCCESS PAGE ───────────────────────────────────────────────────────────────
function initSuccessPage() {
  const totalEl   = document.getElementById('success-order-total');
  const orderNoEl = document.getElementById('success-order-number');
  if (totalEl)   totalEl.textContent  = `Order Total: ${localStorage.getItem('pageturner_last_total') || '₹812.00'}`;
  if (orderNoEl) orderNoEl.textContent = `PT-${Math.floor(100000 + Math.random() * 900000)}`;

  const shipping = JSON.parse(localStorage.getItem('pageturner_shipping'));
  if (shipping) {
    const card = document.querySelector('.success-card');
    const actions = card?.querySelector('.success-actions');
    if (card && actions) {
      const p = Object.assign(document.createElement('p'), {
        innerHTML: `<strong style="display:block;margin-bottom:6px;color:var(--color-text-main);">Shipping to:</strong>
          <span style="display:block;font-weight:600;">${shipping.name}</span>
          <span style="color:var(--color-text-muted);">${shipping.address}, ${shipping.cityZip}</span>
          <span style="display:block;color:var(--color-text-muted);margin-top:4px;">Phone: ${shipping.phone}</span>`
      });
      Object.assign(p.style, { fontSize:'12px', backgroundColor:'var(--color-bg-base)', padding:'12px 20px', borderRadius:'var(--border-radius-sm)', border:'1px solid rgba(28,25,23,0.05)', textAlign:'left', width:'100%', maxWidth:'400px', marginTop:'10px' });
      card.insertBefore(p, actions);
    }
  }
}