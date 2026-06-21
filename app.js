/* ============================================================
   Maharaja Hotel & Family Restaurant — Single Page App
   ============================================================ */

const ICONS = {
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7L6 21l1.6-7L2.2 9.3l7.1-.7L12 2z"/></svg>`,
  rupee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4h12M6 9h12M9 4v16M6 4c5 0 8 2 8 5s-3 5-8 5l8 7"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  parking: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 21c8 0 14-6 14-14V5h-2C9 5 5 11 5 19v2z"/><path d="M5 21l8-8"/></svg>`,
  cake: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 13h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"/><path d="M3 13c0-2 2-2 2-4s-1-2-1-3M9 13c0-2 2-2 2-4s-1-2-1-3M15 13c0-2 2-2 2-4s-1-2-1-3M12 2v2"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="1" y="6" width="14" height="11"/><path d="M15 9h4l3 3v5h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>`,
  cutlery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 2v8a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2M7 13v9M17 2v20M21 2c0 4-4 6-4 6"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 18v3M22 18v3M2 12h20v6H2zM4 12V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5M14 12V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>`,
};

/* ---------------- Footer (shared) ---------------- */
function footerTemplate(){
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand" style="color:#fff;">
            <div class="crest">M</div>
            <div class="brand-text"><div class="name">Maharaja</div><div class="sub">Hotel &amp; Family Restaurant</div></div>
          </div>
          <p>A 100% pure vegetarian hotel and family restaurant in the heart of Charkhi Dadri — for everyday meals, celebrations, and a comfortable stay.</p>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#home" data-link data-page="home">Home</a></li>
            <li><a href="#menu" data-link data-page="menu">Menu</a></li>
            <li><a href="#about" data-link data-page="about">About Us</a></li>
            <li><a href="#visit" data-link data-page="visit">Visit Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:9215133814">9215133814</a></li>
            <li><a href="tel:8818000307">8818000307</a></li>
            <li><a href="tel:08818000307">08818000307</a></li>
            <li><a href="mailto:Vijaymbe@gmail.com">Vijaymbe@gmail.com</a></li>
            <li><a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener">@maharaja_hotel_restaurant12</a></li>
            <li><a href="https://www.facebook.com/share/1Cx1WsuCTd/" target="_blank" rel="noopener">Facebook Page</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Visit</h4>
          <ul>
            <li class="muted">Back Side Nagar Palika,</li>
            <li class="muted">Near TK Nagina,</li>
            <li class="muted">Charkhi Dadri, Haryana 127306</li>
            <li style="margin-top:10px;"><a href="tel:9215133814">Open daily till 10:30 PM</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Maharaja Hotel &amp; Family Restaurant. All rights reserved.</span>
        <span>100% Pure Vegetarian</span>
      </div>
    </div>
  </footer>`;
}

/* ---------------- HOME PAGE ---------------- */
function homeTemplate(){
  return `
  <section class="hero">
    <div class="hero-bg reveal-bg" style="background-image:url('${IMG_hero_facade_day}')" id="heroBg"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <span class="eyebrow hero-eyebrow">Charkhi Dadri &middot; Est. Local Favourite</span>
      <h1>Live Grand,<br><em>Dine Pure.</em></h1>
      <p>A 100% vegetarian hotel and family restaurant — spacious halls, warm hospitality, and food made the way you'd want it at home, just better.</p>
      <div class="hero-actions">
        <a href="#menu" data-link data-page="menu" class="btn btn-primary">View Menu ${ICONS.arrow}</a>
        <a href="#visit" data-link data-page="visit" class="btn btn-outline">Get Directions</a>
      </div>
    </div>
    <div class="hero-scroll"><span>Scroll</span><span class="line"></span></div>
  </section>

  <div class="strip">
    <div class="container">
      <div class="strip-row">
        <div class="strip-item"><div class="ic">${ICONS.star}</div><div><div class="label">Rating</div><div class="val" id="rating-strip-home">4.7 &middot; 153 Reviews</div></div></div>
        <div class="strip-divider"></div>
        <div class="strip-item"><div class="ic">${ICONS.rupee}</div><div><div class="label">Avg. Cost</div><div class="val">&#8377;200&ndash;&#8377;400 / person</div></div></div>
        <div class="strip-divider"></div>
        <div class="strip-item"><div class="ic">${ICONS.clock}</div><div><div class="label">Open Until</div><div class="val">10:30 PM, Daily</div></div></div>
        <div class="strip-divider"></div>
        <div class="strip-item"><div class="ic">${ICONS.parking}</div><div><div class="label">Parking</div><div class="val">Ample Space Available</div></div></div>
      </div>
    </div>
  </div>

  <section class="section-pad">
    <div class="container">
      <div class="intro-grid">
        <div class="intro-media reveal">
          <img src="${IMG_lobby_reception}" alt="Maharaja Hotel lobby and reception">
          <div class="badge"><div class="num" id="rating-badge-home">4.7</div><div class="txt">Google Rating</div></div>
        </div>
        <div class="intro-text reveal reveal-delay-1">
          <span class="eyebrow">Welcome</span>
          <h2 style="margin:16px 0 22px;">A Family Table,<br>Built for Every Occasion</h2>
          <p>Tucked behind Nagar Palika near TK Nagina, Maharaja Hotel &amp; Family Restaurant has become a trusted name for guests across Charkhi Dadri who want good vegetarian food without compromise.</p>
          <p>Every dish here is purely vegetarian — from comforting dals and paneer classics to crisp starters, wood-fired pizzas, and sizzling platters. The space is built for families: spacious dining halls, attentive service, and rooms upstairs for guests who want to stay the night.</p>
          <a href="#about" data-link data-page="about" class="btn btn-ghost-dark" style="margin-top:10px;">Our Story ${ICONS.arrow}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section-pad-sm" style="background:var(--cream-dim);">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow">What We Offer</span>
        <h2>Everything Under One Roof</h2>
        <p>From a quick breakfast to a full celebration, Maharaja is built to host every kind of gathering.</p>
      </div>
      <div class="offer-grid reveal reveal-delay-1">
        <div class="offer-card">
          <div class="ic">${ICONS.cutlery}</div>
          <h3>Breakfast, Lunch &amp; Dinner</h3>
          <p>A full vegetarian menu served fresh through the day — from morning starters to late dinner platters.</p>
        </div>
        <div class="offer-card">
          <div class="ic">${ICONS.cake}</div>
          <h3>Events &amp; Celebrations</h3>
          <p>Kitty parties, birthdays, anniversaries, and meetings — our halls are set up to host them all comfortably.</p>
        </div>
        <div class="offer-card">
          <div class="ic">${ICONS.truck}</div>
          <h3>Online Delivery</h3>
          <p>Can't make it in? Order online and enjoy the same Maharaja flavours at home.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">A Look Inside</span>
        <h2>Spaces Built for Comfort</h2>
      </div>
      <div class="gallery-grid reveal reveal-delay-1">
        <a href="#visit" data-link data-page="visit" class="g-span2 g-rspan2"><img src="${IMG_dining_hall_main}" alt="Main dining hall"></a>
        <a href="#visit" data-link data-page="visit"><img src="${IMG_dining_tables_set}" alt="Dining tables set for guests"></a>
        <a href="#visit" data-link data-page="visit"><img src="${IMG_lobby_hallway}" alt="Hotel hallway"></a>
        <a href="#about" data-link data-page="about"><img src="${IMG_room_bed_1}" alt="Guest room"></a>
        <a href="#visit" data-link data-page="visit"><img src="${IMG_dining_booth_decor}" alt="Restaurant booth seating"></a>
      </div>
    </div>
  </section>

  <section class="section-pad-sm on-dark">
    <div class="container">
      <div class="insta-card reveal">
        <div class="left">
          <div class="insta-ic">${ICONS.instagram}</div>
          <div>
            <h3>Follow the Everyday Maharaja</h3>
            <div class="handle">@maharaja_hotel_restaurant12</div>
          </div>
        </div>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener" class="btn btn-primary">Follow on Instagram</a>
      </div>
      <div class="insta-strip reveal reveal-delay-1">
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_dining_hall_2}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_dining_hall_3}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_room_tv_unit_1}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_lobby_reception_2}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_room_tv_wood}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_entrance_steps}" alt=""></a>
      </div>
    </div>
  </section>

  ${footerTemplate()}
  `;
}

/* ---------------- MENU DATA (exact items + prices from original menu card, no additions) ---------------- */
const MENU_DATA = [
  { cat: "Starter Snacks", items: [
    ["French Fries",120],["Peri Peri Fries",140],["Veg. Cutlet",155],["Cheese Cutlet",175],
    ["Vegetable Salt & Pepper",220],["Spring Roll",185],["Honey Chilli Potato",210],["Crispy Chilli Potato",195],
    ["Chilli Paneer Dry",250],["Dry Manchurian",220],["Chilli Mushroom",240],["Crispy Corn",210],
    ["Crispy Baby Corn",230],["Hara Bhara Kebab",195],["Cheese Corn Kebab",195],["Veg. Pakoda",200],
    ["Paneer Pakoda",240],["Paneer Rolls",240]
  ]},
  { cat: "Noodles", items: [
    ["Veg. Chowmein",140],["Cheese Chowmein",160],["Chilly Garlic Noodles",150],["Hakka Noodles",160],["Singapuri Noodles",170]
  ]},
  { cat: "Sandwich & Burger", items: [
    ["Veg. Sandwich",90],["Grilled Sandwich",100],["Paneer Tikka Sandwich",130],["Veg. Burger",50],
    ["Cheese Burger",70],["Paneer Burger",80],["Cheese Garlic Bread",120]
  ]},
  { cat: "Pasta", items: [
    ["Red Sauce Pasta",150],["White Sauce Pasta",150],["Mix Pasta",170]
  ]},
  { cat: "Shaam-e-Khaas Platters", items: [
    ["Tandoori Platter",325],["Chinese Platter",325],["Classic Veg. Sizzler",325]
  ]},
  { cat: "Pizza", items: [
    ["Margarita Pizza",195],["Coc Pizza",210],["Garden Fresh Pizza",225],["Paneer Tikka Pizza",250],["Veg. Pizza",200]
  ]},
  { cat: "Main Course Indian — Paneer", items: [
    ["Sahi Paneer",250],["Paneer Tikka Masala",260],["Paneer Butter Masala",250],["Kadhai Paneer",250],
    ["Paneer Lababdar",250],["Paneer Kolhpuri",250],["Cheese Tomato",250],["Perfect Palak Paneer",250],
    ["Paneer Burji",250],["Paneer Taka Tak",260],["Matar Paneer",240],["Paneer Do Pyaza",250],
    ["Paneer Makhni",240],["Paneer Kumb Kadhai",250]
  ]},
  { cat: "Koftas & Stuffed", items: [
    ["Malai Kofta",250],["Malai Kofta (White Gravy)",260],["Paneer Makhni Kofta",250],["Dum Aloo Kashmiri",250]
  ]},
  { cat: "Mixed", items: [
    ["Mixed Vegetable",220],["Vegetable Jalfrezi",230],["Navratan Korma",250],["Matar Mushroom",240],
    ["Mushroom Taka Tak",240],["Adraki Aloo Gobhi",210],["Palak Corn",210],["Heeng Dhania Ke Chatpate Aloo",210],
    ["Chaap Butter Masala",240],["Kadhai Chaap",240],["Chaap Tikka Masala",250],["Aloo Zeera",190],["Mushroom Masala",230]
  ]},
  { cat: "Dals", items: [
    ["Dal Makhni",230],["Yellow Dal Tadka",200],["Dal Dhaba",210],["Chana Masala",210],["Pindi Choley",210],["Dal Palak",210]
  ]},
];

function menuItemRow(item){
  const [name, price] = item;
  return `<div class="menu-item"><span class="mi-left"><span class="veg-dot"></span>${name}</span><span class="mi-dots"></span><span class="mi-price">&#8377;${price}</span></div>`;
}

function menuCategoryBlock(cat){
  return `
    <div class="menu-cat">
      <div class="menu-cat-head">
        <h3>${cat.cat}</h3>
        <span class="count">${cat.items.length} items</span>
      </div>
      <div class="menu-items">
        ${cat.items.map(menuItemRow).join('')}
      </div>
    </div>`;
}

/* ---------------- MENU PAGE ---------------- */
function menuTemplate(){
  return `
  <section class="page-header">
    <div class="page-header-bg" style="background-image:url('${IMG_dining_tables_set}')"></div>
    <div class="page-header-overlay"></div>
    <div class="container">
      <div class="crumbs"><a href="#home" data-link data-page="home">Home</a><span>/</span><span>Menu</span></div>
      <span class="eyebrow">The Menu</span>
      <h1>A Purely Vegetarian Spread</h1>
      <p>Every single dish here is 100% vegetarian — from comfort-food classics to celebration platters. Browse by category below.</p>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="text-center reveal" style="margin-bottom:8px;">
        <span class="veg-tag"><span class="veg-dot"></span> 100% Pure Vegetarian Kitchen</span>
      </div>
      <div class="menu-toggle reveal reveal-delay-1">
        <button class="active" data-menu-tab="food">Food</button>
        <button data-menu-tab="beverages">Beverages</button>
      </div>

      <div class="menu-panel active" id="panel-food">
        ${MENU_DATA.map(menuCategoryBlock).join('')}
      </div>

      <div class="menu-panel" id="panel-beverages">
        <div class="bev-note">
          <h3>Refreshing Beverages, Always On Hand</h3>
          <p>Our drinks selection changes with the season and the day's specials. Ask our staff when you visit, or call ahead and we'll talk you through what's available.</p>
          <a href="tel:9215133814" class="btn btn-dark">${ICONS.phone} Call for Today's Selection</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section-pad-sm on-dark">
    <div class="container text-center">
      <span class="eyebrow">Ready to Order?</span>
      <h2 style="margin:16px 0 28px;">Visit Us or Order Online</h2>
      <div class="hero-actions flex-center">
        <a href="#visit" data-link data-page="visit" class="btn btn-primary">Visit Us ${ICONS.arrow}</a>
        <a href="tel:9215133814" class="btn btn-outline">Call to Order</a>
      </div>
    </div>
  </section>

  ${footerTemplate()}
  `;
}

/* ---------------- ABOUT PAGE ---------------- */
function aboutTemplate(){
  return `
  <section class="page-header">
    <div class="page-header-bg" style="background-image:url('${IMG_lobby_hallway}')"></div>
    <div class="page-header-overlay"></div>
    <div class="container">
      <div class="crumbs"><a href="#home" data-link data-page="home">Home</a><span>/</span><span>About Us</span></div>
      <span class="eyebrow">Our Story</span>
      <h1>Hospitality, the Way<br>Charkhi Dadri Likes It</h1>
      <p>A family-run hotel and restaurant built around one simple idea: good vegetarian food, served with genuine care.</p>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="intro-grid">
        <div class="intro-text reveal">
          <span class="eyebrow">Who We Are</span>
          <h2 style="margin:16px 0 22px;">A Trusted Name,<br>Right Behind Nagar Palika</h2>
          <p>Maharaja Hotel &amp; Family Restaurant sits just behind Nagar Palika, near TK Nagina in Charkhi Dadri &mdash; easy to find, easy to return to. We're a completely vegetarian kitchen, which means every dish on our menu, from the first starter to the last dal, is made without meat, fish, or eggs.</p>
          <p>What keeps guests coming back isn't just the food &mdash; it's the feeling of being looked after. Spacious marble-top dining halls, warm lighting, and a team that treats every table like family. Whether you're stopping in for a quick lunch or booking the hall for an anniversary, the experience stays consistent.</p>
          <p>For guests travelling through, we also offer clean, comfortable rooms upstairs &mdash; so a meal here can easily turn into a full stay.</p>
        </div>
        <div class="intro-media reveal reveal-delay-1">
          <img src="${IMG_lobby_reception}" alt="Maharaja Hotel reception area">
        </div>
      </div>
    </div>
  </section>

  <section class="section-pad-sm" style="background:var(--ink);">
    <div class="container">
      <div class="trust-strip reveal">
        <div class="trust-item"><div class="num" id="rating-trust-about">4.7</div><div class="lbl" style="color:#B7A88F;">Google Rating</div></div>
        <div class="trust-item"><div class="num" id="reviews-trust-about">153</div><div class="lbl" style="color:#B7A88F;">Guest Reviews</div></div>
        <div class="trust-item"><div class="num">100%</div><div class="lbl" style="color:#B7A88F;">Vegetarian</div></div>
        <div class="trust-item"><div class="num">3</div><div class="lbl" style="color:#B7A88F;">Meals Daily</div></div>
      </div>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow">Celebrate With Us</span>
        <h2>Halls Ready for Every Occasion</h2>
        <p>From an intimate kitty party to a full anniversary dinner, our spaces flex to fit your guest list.</p>
      </div>
      <div class="event-grid reveal reveal-delay-1">
        <div class="event-card">
          <div class="ic">${ICONS.cake}</div>
          <h4>Kitty Party</h4>
          <p>A relaxed, well-set space for your regular get-togethers.</p>
        </div>
        <div class="event-card">
          <div class="ic">${ICONS.cake}</div>
          <h4>Birthday Party</h4>
          <p>Celebrate big milestones in a hall set up just for you.</p>
        </div>
        <div class="event-card">
          <div class="ic">${ICONS.user}</div>
          <h4>Meeting Hall</h4>
          <p>A quiet, professional setting for business discussions.</p>
        </div>
        <div class="event-card">
          <div class="ic">${ICONS.cake}</div>
          <h4>Anniversary Party</h4>
          <p>Mark the occasion with a warm, personal celebration.</p>
        </div>
      </div>
      <div class="text-center mt-40 reveal reveal-delay-2">
        <a href="#visit" data-link data-page="visit" class="btn btn-dark">Enquire About Booking ${ICONS.arrow}</a>
      </div>
    </div>
  </section>

  <section class="section-pad-sm" style="background:var(--cream-dim);">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow">Stay With Us</span>
        <h2>Comfortable Rooms, Right Upstairs</h2>
        <p>Clean, modern rooms for guests who want to extend their visit &mdash; fitted with TV, wardrobe, and ensuite bathroom.</p>
      </div>
      <div class="room-grid reveal reveal-delay-1">
        <div class="room-card">
          <img src="${IMG_room_bed_1}" alt="Guest room with double bed">
          <div class="cap">Spacious double rooms with modern interiors</div>
        </div>
        <div class="room-card">
          <img src="${IMG_room_bed_2}" alt="Guest room with TV and seating">
          <div class="cap">Well-lit rooms with workspace and seating</div>
        </div>
        <div class="room-card">
          <img src="${IMG_room_tv_unit_1}" alt="Guest room with wood-panel TV unit">
          <div class="cap">Thoughtful wood-finish interiors throughout</div>
        </div>
      </div>
    </div>
  </section>

  ${footerTemplate()}
  `;
}

/* ---------------- VISIT PAGE ---------------- */
function visitTemplate(){
  return `
  <section class="page-header">
    <div class="page-header-bg" style="background-image:url('${IMG_facade_night}')"></div>
    <div class="page-header-overlay"></div>
    <div class="container">
      <div class="crumbs"><a href="#home" data-link data-page="home">Home</a><span>/</span><span>Visit Us</span></div>
      <span class="eyebrow">Find Us</span>
      <h1>Come Say Hello</h1>
      <p>Behind Nagar Palika, near TK Nagina &mdash; easy to spot, easy to park, open till late.</p>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="visit-grid">
        <div>
          <div class="visit-info-card reveal">
            <h4><span class="ic">${ICONS.pin}</span> Address</h4>
            <p>Back Side Nagar Palika, Near TK Nagina, Charkhi Dadri, Haryana &ndash; 127306</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Maharaja+Hotel+%26+Restaurant+Charkhi+Dadri" target="_blank" rel="noopener" class="btn btn-dark mt-40">Get Directions ${ICONS.arrow}</a>
          </div>

          <div class="visit-info-card reveal reveal-delay-1">
            <h4><span class="ic">${ICONS.clock}</span> Timings</h4>
            <p>Open daily until 10:30 PM</p>
            <div class="tip">Tip from us: evenings around 7 PM are usually less crowded.</div>
          </div>

          <div class="visit-info-card reveal reveal-delay-2">
            <h4><span class="ic">${ICONS.parking}</span> Parking &amp; Delivery</h4>
            <p>Ample parking available on-site</p>
            <div class="tip">Can't visit? Online delivery is available too.</div>
          </div>

          <div class="visit-info-card reveal reveal-delay-3">
            <h4><span class="ic">${ICONS.phone}</span> Call Us</h4>
            <div class="call-row">
              <a href="tel:9215133814" class="btn btn-primary">${ICONS.phone} 9215133814</a>
              <a href="tel:8818000307" class="btn btn-ghost-dark">${ICONS.phone} 8818000307</a>
              <a href="tel:08818000307" class="btn btn-ghost-dark">${ICONS.phone} 08818000307</a>
            </div>
          </div>

          <div class="visit-info-card reveal reveal-delay-3">
            <h4><span class="ic">${ICONS.mail}</span> Email Us</h4>
            <p style="font-size:17px;">Vijaymbe@gmail.com</p>
            <a href="mailto:Vijaymbe@gmail.com" class="btn btn-ghost-dark mt-40">${ICONS.mail} Send an Email</a>
          </div>
        </div>

        <div class="reveal reveal-delay-1">
          <iframe class="map-frame" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Maharaja+Hotel+%26+Restaurant,+Back+Side+Nagar+Palika,+Near+TK+Nagina,+Charkhi+Dadri,+Haryana+127306&output=embed">
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <section class="section-pad-sm on-dark">
    <div class="container">
      <div class="insta-card reveal">
        <div class="left">
          <div class="insta-ic">${ICONS.instagram}</div>
          <div>
            <h3>See the Latest From Maharaja</h3>
            <div class="handle">@maharaja_hotel_restaurant12</div>
          </div>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener" class="btn btn-primary">Open Instagram</a>
          <a href="https://www.facebook.com/share/1Cx1WsuCTd/" target="_blank" rel="noopener" class="btn btn-outline">${ICONS.facebook} Facebook</a>
        </div>
      </div>
      <div class="insta-strip reveal reveal-delay-1">
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_dining_booth_decor}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_entrance_steps}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_room_tv_unit_2}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_dining_hall_2}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_lobby_reception_2}" alt=""></a>
        <a href="https://www.instagram.com/maharaja_hotel_restaurant12" target="_blank" rel="noopener"><img src="${IMG_room_bed_2}" alt=""></a>
      </div>
    </div>
  </section>

  <section class="section-pad">
    <div class="container">
      <div class="section-head center reveal">
        <span class="eyebrow">Planning a Visit?</span>
        <h2>Reach Out for Tables &amp; Bookings</h2>
        <p>For event halls, large groups, or anything else &mdash; send us a note and we'll get back to you.</p>
      </div>
      <div class="form-wrap reveal reveal-delay-1" style="max-width:640px;margin:0 auto;">
        <form id="enquiryForm" onsubmit="return handleEnquirySubmit(event)">
          <div class="form-row">
            <label for="visitorName">Your Name</label>
            <input type="text" id="visitorName" placeholder="Enter your name" required>
          </div>
          <div class="form-row">
            <label for="visitorPhone">Phone Number</label>
            <input type="tel" id="visitorPhone" placeholder="Enter your phone number" required>
          </div>
          <div class="form-row">
            <label for="visitorMessage">Message</label>
            <textarea id="visitorMessage" placeholder="Tell us about your booking, event, or enquiry"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;">Send Enquiry ${ICONS.arrow}</button>
          <p class="form-note">We typically respond within a few hours during business hours.</p>
        </form>
      </div>
    </div>
  </section>

  ${footerTemplate()}
  `;
}

function handleEnquirySubmit(e){
  e.preventDefault();
  const name = document.getElementById('visitorName').value;
  const phone = document.getElementById('visitorPhone').value;
  const message = document.getElementById('visitorMessage').value;
  const body = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nMessage: ${message}`);
  window.location.href = `tel:9215133814`;
  return false;
}

/* ============================================================
   ROUTER + INTERACTIONS
   ============================================================ */
const PAGES = {
  home: homeTemplate,
  menu: menuTemplate,
  about: aboutTemplate,
  visit: visitTemplate,
};

const appEl = document.getElementById('app');
const navLinksEl = document.getElementById('navLinks');

function initRevealObserver(){
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

function initMenuTabs(){
  const tabs = document.querySelectorAll('[data-menu-tab]');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
      document.getElementById('panel-' + tab.dataset.menuTab).classList.add('active');
    });
  });
}

function initHeroParallax(){
  const bg = document.getElementById('heroBg');
  if (!bg) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking){
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight){
          bg.style.transform = `scale(1.12) translateY(${y * 0.18}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function setActiveNav(page){
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
}

/* ============================================================
   LIVE GOOGLE RATING
   Fetches from /api/rating (a Vercel serverless function — see
   /api/rating.js). The Google API key is never exposed in the
   browser. If the endpoint isn't deployed yet (e.g. local file
   preview), the page silently keeps the static fallback numbers
   already in the HTML, so the site never looks broken.
   ============================================================ */
const LIVE_RATING_CACHE_KEY = 'maharaja_live_rating_v1';
const LIVE_RATING_CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6 hours
let liveRatingData = null;
let liveRatingFetchStarted = false;

function readRatingCache(){
  try {
    const raw = sessionStorage.getItem(LIVE_RATING_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.cachedAt > LIVE_RATING_CACHE_TTL_MS) return null;
    return parsed.data;
  } catch (e){ return null; }
}

function writeRatingCache(data){
  try {
    sessionStorage.setItem(LIVE_RATING_CACHE_KEY, JSON.stringify({ data, cachedAt: Date.now() }));
  } catch (e){ /* sessionStorage unavailable — ignore */ }
}

function applyLiveRating(data){
  if (!data || typeof data.rating !== 'number') return;
  const ratingStr = data.rating.toFixed(1);
  const reviewStr = data.reviewCount != null ? data.reviewCount.toLocaleString('en-IN') : null;

  const stripEl = document.getElementById('rating-strip-home');
  if (stripEl) stripEl.innerHTML = `${ratingStr} &middot; ${reviewStr ?? '—'} Reviews`;

  const badgeEl = document.getElementById('rating-badge-home');
  if (badgeEl) badgeEl.textContent = ratingStr;

  const trustRatingEl = document.getElementById('rating-trust-about');
  if (trustRatingEl) trustRatingEl.textContent = ratingStr;

  const trustReviewsEl = document.getElementById('reviews-trust-about');
  if (trustReviewsEl && reviewStr) trustReviewsEl.textContent = reviewStr;
}

async function fetchLiveRating(){
  if (liveRatingFetchStarted) {
    if (liveRatingData) applyLiveRating(liveRatingData);
    return;
  }
  liveRatingFetchStarted = true;

  const cached = readRatingCache();
  if (cached) {
    liveRatingData = cached;
    applyLiveRating(cached);
    return;
  }

  try {
    const res = await fetch('/api/rating');
    if (!res.ok) return; // endpoint not deployed / misconfigured — keep static fallback
    const data = await res.json();
    if (data && typeof data.rating === 'number') {
      liveRatingData = data;
      writeRatingCache(data);
      applyLiveRating(data);
    }
  } catch (e) {
    // Network error or /api/rating not deployed (e.g. plain HTML preview) —
    // fail silently, static numbers already in the markup remain visible.
  }
}

function renderPage(page, opts = {}){
  if (!PAGES[page]) page = 'home';
  appEl.innerHTML = PAGES[page]();
  setActiveNav(page);
  if (!opts.skipScroll) window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  initRevealObserver();
  initMenuTabs();
  if (page === 'home') initHeroParallax();
  document.title = page === 'home'
    ? 'Maharaja Hotel & Family Restaurant — Charkhi Dadri'
    : `${page.charAt(0).toUpperCase() + page.slice(1)} — Maharaja Hotel & Family Restaurant`;
  fetchLiveRating();
}

function navigateTo(page){
  if (window.location.hash !== '#' + page){
    window.location.hash = page;
  } else {
    renderPage(page);
  }
  closeDrawer();
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-link]');
  if (link){
    e.preventDefault();
    navigateTo(link.dataset.page);
  }
});

window.addEventListener('hashchange', () => {
  const page = window.location.hash.replace('#', '') || 'home';
  renderPage(page);
});

/* ---------------- Nav scroll state ---------------- */
const navEl = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---------------- Mobile drawer ---------------- */
const drawer = document.getElementById('mobileDrawer');
const navToggle = document.getElementById('navToggle');
const drawerClose = document.getElementById('drawerClose');
function openDrawer(){ drawer.style.display = 'block'; document.body.style.overflow = 'hidden'; }
function closeDrawer(){ drawer.style.display = 'none'; document.body.style.overflow = ''; }
navToggle.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);

/* ---------------- Init ---------------- */
(function init(){
  const initialPage = window.location.hash.replace('#', '') || 'home';
  renderPage(initialPage, { skipScroll: true });
})();
