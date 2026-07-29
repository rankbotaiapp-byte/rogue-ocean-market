window.APP_CONFIG = {
  meta: {
    mode: "demo",
    leadId: "rogue-ocean-market",
    demoExpiresAt: "2026-08-31T23:59:59-07:00",
    contactName: "",
    contactEmail: ""
  },

  business: {
    name: "Rogue Ocean Market",
    tagline: "The Freshest Seafood in Grants Pass & the Rogue Valley",
    phone: "",
    email: "",
    logo: "axiommaster3.webp"
  },

  branding: {
    primary: "#0B5563",
    accent: "#F4A300",
    theme: "ocean",
    neon: { on: true, color: "match", width: 3 },
    borderImages: [
      "tacos.jpg.png",
      "sign.jpg.png"
    ]
  },

  modules: {
    hero: true,
    axiomIntro: true,
    services: true,
    about: true,
    contact: true,
    bookingForm: true,
    nav: true,
    stats: false,
    hours: false,
    reviews: false,
    gallery: false,
    faq: false
  },

  content: {
    hero: {
      banner: "oceanmarket-banner.jpg.png",
      headline: "Fresh Seafood, Straight from the Coast",
      subtext: "Live Dungeness crab, wild Oregon fillets, and our food truck baskets — serving Grants Pass and the Rogue Valley.",
      buttons: [
        { label: "See What's Fresh", icon: "fish", link: "#services" },
        { label: "Order Ahead", icon: "shopping-bag", link: "#book" }
      ]
    },

    axiomIntro: {
      heading: "Meet AXIOM — Your 24/7 Receptionist",
      subtext: "AXIOM is the AI employee that never sleeps. It answers customers, takes bookings, and captures every lead — even at 2am when you're closed.",
      points: [
        { icon: "clock", text: "Answers customers 24/7, even after hours" },
        { icon: "calendar-check", text: "Takes orders and bookings automatically" },
        { icon: "bell", text: "Sends every new lead straight to your phone" },
        { icon: "trending-up", text: "Turns missed calls into real revenue" }
      ]
    },

    services: [
      { name: "Halibut Basket", price: "$26", icon: "fish", desc: "Wild Alaskan halibut, beer-battered & deep fried, comes with fries." },
      { name: "Salmon Basket", price: "$23", icon: "fish", desc: "Oregon Coast king salmon, beer-battered & deep fried, comes with fries." },
      { name: "Rockfish Basket", price: "$17", icon: "fish", desc: "Classic fish & chips — flaky rockfish, comes with fries." },
      { name: "Fried Shrimp Tacos", price: "$17", icon: "utensils", desc: "Crispy beer-battered shrimp tacos, set of 3." },
      { name: "King Salmon Tacos", price: "$15", icon: "utensils", desc: "Grilled Oregon Coast salmon, set of 3 with pineapple slaw." },
      { name: "Live Dungeness Crab", price: "Ask", icon: "shell", desc: "Fresh live Dungeness crab — call or DM for current pricing." },
      { name: "Fresh Fillets", price: "Ask", icon: "fish", desc: "Halibut, sablefish, albacore tuna, oysters — blast-frozen fillets available." }
    ],

    about: {
      heading: "Your Local Seafood Market",
      body: "Rogue Ocean Market brings the freshest seafood to Grants Pass and the Rogue Valley at an affordable price. Find us at 363 NW Washington Blvd, plus regular pop-ups around the valley with live Dungeness crab, fresh fillets, and our food truck."
    },

    nav: [
      { label: "Menu", icon: "fish", link: "#services" },
      { label: "Order", icon: "calendar-check", link: "#book" },
      { label: "Find Us", icon: "map-pin", link: "#contact" }
    ]
  },

  forms: {
    endpoint: "https://formspree.io/f/xykrkdky"
  },

  demoLeads: [
    { name: "Jenna T.", phone: "(541) 555-0148", msg: "Do you have crab this weekend?", secs: "1.1" },
    { name: "Marcus D.", phone: "(541) 555-0291", msg: "Want to order 2 halibut baskets", secs: "0.7" },
    { name: "Tara P.", phone: "(541) 555-0333", msg: "Where's the truck today?", secs: "0.9" }
  ],

  orb: {
    on: true,
    label: "AXIOM",
    teaser: {
      delay: 2500,
      messages: [
        "👋 I'm AXIOM — I book customers for Rogue Ocean 24/7",
        "🦀 Ask me what's fresh today",
        "📍 Find our next pop-up location",
        "📲 Tap to add this app to your phone"
      ]
    }
  },

  reception: {
    greeting: "Welcome to Rogue Ocean Market! I'm AXIOM. Want to know what seafood is fresh today, where to find us, or how to order?",
    quickButtons: [
      { label: "🦀 What's fresh today?", text: "What seafood do you have today?" },
      { label: "📍 Where are you?", text: "Where are you located?" },
      { label: "🐟 Order ahead", text: "How do I order ahead?" },
      { label: "📲 Add to my phone", action: "install" }
    ],
    bookingNotify:
