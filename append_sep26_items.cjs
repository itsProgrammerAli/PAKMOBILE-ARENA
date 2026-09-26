/**
 * append_sep26_items.cjs
 * Adds 5 verified smartphones and 5 fresh tech news articles for September 26, 2026.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PHONES_TS_PATH = path.join(__dirname, 'src/data/phones.ts');
const PHONES_JSON_SRC = path.join(__dirname, 'src/data/phones.json');
const PHONES_JSON_ROOT = path.join(__dirname, 'phones.json');

const NEWS_TS_PATH = path.join(__dirname, 'src/data/news.ts');
const NEWS_JSON_SRC = path.join(__dirname, 'src/data/news.json');
const NEWS_JSON_ROOT = path.join(__dirname, 'news.json');

const NEW_PHONES = [
  {
    id: "infinix-hot-50i",
    name: "Infinix Hot 50i",
    brand: "Infinix",
    model: "Hot 50i",
    pricePKR: 29299,
    price: 29299,
    officialPricePKR: 32999,
    marketPriceRangePKR: { min: 29299, max: 32999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 3800,
      cnicTaxPKR: 5200,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 3800,
    ptaCnicTax: 5200,
    isLocallyAssembled: true,
    variants: [
      {
        id: "infinix-hot-50i-6-128",
        name: "6GB / 128GB",
        ram: "6GB LPDDR4X (+6GB Extended RAM)",
        storage: "128GB Built-in Storage",
        pricePKR: 29299,
        officialPricePKR: 32999,
        marketPriceRangePKR: { min: 29299, max: 32999 }
      }
    ],
    colors: ["Sleek Black", "Titanium Grey", "Sage Green"],
    colorHexes: {
      "Sleek Black": "#1E1E1E",
      "Titanium Grey": "#707070",
      "Sage Green": "#8F9779"
    },
    image: "/images/phones/infinix-hot-50i-pakistan-priceoye-tyxta-500x500.webp",
    images: [
      "/images/phones/infinix-hot-50i-pakistan-priceoye-tyxta-500x500.webp",
      "/images/phones/infinix-hot-50i-pakistan-priceoye-m3bbv-500x500.webp"
    ],
    specs: {
      display: "6.7-inch 120Hz Punch-Hole IPS Display with Dynamic Bar, 500 nits peak brightness",
      refreshRate: "120Hz",
      processor: "MediaTek Helio G81 (12nm) Octa-Core Processor",
      ram: "6GB LPDDR4X (+6GB Virtual Extended RAM)",
      storage: "128GB Internal Storage, dedicated microSD slot up to 2TB",
      mainCamera: "48 MP AI Dual Camera (f/1.79) with Quad-LED Flash",
      selfieCamera: "8 MP Front Camera with Dual LED Flash",
      battery: "5000 mAh High-Density Battery with 4-Year Health Durability",
      charging: "18W Fast Charging via USB Type-C",
      os: "Android 14 (Go Edition) with XOS 14.5",
      network: "4G LTE Dual SIM, Dual Speakers with 300% Ultra Volume Mode",
      resolution: "720 x 1600 pixels (HD+), 262 ppi",
      waterResistance: "IP54 Splash and Dust Resistance with Wet-Finger Touch Support",
      dimensions: "165.7 x 77.1 x 8.1 mm, 184g",
      buildMaterials: "Polycarbonate frame with glossy textured back"
    },
    releaseDate: "2024-09-10",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Infinix Hot 50i Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Infinix Hot 50i price in Pakistan starts at Rs. 29,299. Features 120Hz punch-hole display, Helio G81 processor, 48MP AI camera, and 5000mAh battery."
  },
  {
    id: "oppo-a58",
    name: "Oppo A58",
    brand: "Oppo",
    model: "A58",
    pricePKR: 43999,
    price: 43999,
    officialPricePKR: 49999,
    marketPriceRangePKR: { min: 43999, max: 49999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 7200,
      cnicTaxPKR: 9500,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 7200,
    ptaCnicTax: 9500,
    isLocallyAssembled: true,
    variants: [
      {
        id: "oppo-a58-6-128",
        name: "6GB / 128GB",
        ram: "6GB LPDDR4X (+6GB RAM Expansion)",
        storage: "128GB eMMC 5.1",
        pricePKR: 43999,
        officialPricePKR: 49999,
        marketPriceRangePKR: { min: 43999, max: 49999 }
      }
    ],
    colors: ["Glowing Black", "Dazzling Green"],
    colorHexes: {
      "Glowing Black": "#1C1C1E",
      "Dazzling Green": "#3E6B5C"
    },
    image: "/images/phones/oppo-a58-pakistan-priceoye-7zhfw-500x500.webp",
    images: [
      "/images/phones/oppo-a58-pakistan-priceoye-7zhfw-500x500.webp",
      "/images/phones/oppo-a58-pakistan-priceoye-ddva8-500x500.webp"
    ],
    specs: {
      display: "6.72-inch FHD+ Sunlight Display, 680 nits peak brightness, 100% DCI-P3 color gamut",
      refreshRate: "60Hz",
      processor: "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)",
      ram: "6GB LPDDR4X (+6GB Extended Virtual RAM)",
      storage: "128GB Internal Storage, dedicated microSD slot expandable up to 1TB",
      mainCamera: "50 MP Primary Camera (f/1.8, 5P lens, AF) + 2 MP Portrait Camera (f/2.4)",
      selfieCamera: "8 MP Front Camera (f/2.0, 4P lens)",
      battery: "5000 mAh Large Battery with 36-Month Fluency Protection",
      charging: "33W SUPERVOOC Fast Charging (52% in 30 minutes) via USB Type-C",
      os: "ColorOS 13.1 based on Android 13 (upgradable)",
      network: "4G LTE Dual SIM, Dual Stereo Speakers with Ultra Volume Mode 300%",
      resolution: "2400 x 1080 pixels (FHD+), 391 ppi",
      waterResistance: "IPX4 Water Resistance Rating",
      dimensions: "165.65 x 75.98 x 7.99 mm, 192g"
    },
    releaseDate: "2023-07-28",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Oppo A58 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Oppo A58 price in Pakistan starts at Rs. 43,999. Features 33W SUPERVOOC, 5000mAh battery, 6.72-inch FHD+ sunlight display, and 50MP AI camera."
  },
  {
    id: "samsung-galaxy-a05",
    name: "Samsung Galaxy A05",
    brand: "Samsung",
    model: "Galaxy A05",
    pricePKR: 21299,
    price: 21299,
    officialPricePKR: 24999,
    marketPriceRangePKR: { min: 21299, max: 24999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 3200,
      cnicTaxPKR: 4500,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 3200,
    ptaCnicTax: 4500,
    isLocallyAssembled: true,
    variants: [
      {
        id: "samsung-galaxy-a05-4-64",
        name: "4GB / 64GB",
        ram: "4GB RAM (+4GB RAM Plus)",
        storage: "64GB eMMC 5.1",
        pricePKR: 21299,
        officialPricePKR: 24999,
        marketPriceRangePKR: { min: 21299, max: 24999 }
      }
    ],
    colors: ["Black", "Silver", "Light Green"],
    colorHexes: {
      "Black": "#181818",
      "Silver": "#D1D5DB",
      "Light Green": "#A3E635"
    },
    image: "/images/phones/samsung-galaxy-a05-pakistan-priceoye-42za3-500x500.webp",
    images: [
      "/images/phones/samsung-galaxy-a05-pakistan-priceoye-42za3-500x500.webp",
      "/images/phones/samsung-galaxy-a05-pakistan-priceoye-rnvbh-500x500.webp"
    ],
    specs: {
      display: "6.7-inch PLS LCD Infinity-U HD+ Display, 16M colors",
      refreshRate: "60Hz",
      processor: "MediaTek Helio G85 (12nm) Octa-Core Processor (2.0GHz, 1.8GHz)",
      ram: "4GB RAM (+4GB Virtual RAM Plus)",
      storage: "64GB Internal Storage, dedicated microSD slot expandable up to 1TB",
      mainCamera: "50 MP Primary Camera (f/1.8, AF) + 2 MP Depth Camera (f/2.4)",
      selfieCamera: "8 MP Front Camera (f/2.0)",
      battery: "5000 mAh Typical Battery with Smart Power Saving",
      charging: "25W Super Fast Charging via USB Type-C 2.0",
      os: "One UI Core based on Android 13 (Upgradable to Android 14 with 2 OS Updates)",
      network: "4G LTE Dual SIM Dual Standby, 3.5mm Stereo Earjack, Bluetooth 5.3",
      resolution: "720 x 1600 pixels (HD+), 262 ppi",
      dimensions: "168.8 x 78.2 x 8.8 mm, 195g",
      buildMaterials: "Glass front, plastic back with linear patterned texture"
    },
    releaseDate: "2023-10-15",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Samsung Galaxy A05 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Samsung Galaxy A05 price in Pakistan starts at Rs. 21,299. Features 50MP main camera, 5000mAh battery with 25W charging, 6.7-inch screen, and Helio G85."
  },
  {
    id: "realme-c61",
    name: "Realme C61",
    brand: "Realme",
    model: "C61",
    pricePKR: 29499,
    price: 29499,
    officialPricePKR: 32999,
    marketPriceRangePKR: { min: 29499, max: 32999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 4800,
      cnicTaxPKR: 6800,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 4800,
    ptaCnicTax: 6800,
    isLocallyAssembled: true,
    variants: [
      {
        id: "realme-c61-6-128",
        name: "6GB / 128GB",
        ram: "6GB LPDDR4X (+6GB Dynamic RAM)",
        storage: "128GB High-Speed Storage",
        pricePKR: 29499,
        officialPricePKR: 32999,
        marketPriceRangePKR: { min: 29499, max: 32999 }
      }
    ],
    colors: ["Safari Green", "Marble Black"],
    colorHexes: {
      "Safari Green": "#2D5A43",
      "Marble Black": "#222224"
    },
    image: "/images/phones/realme-c61-pakistan-priceoye-yh8p3-500x500.webp",
    images: [
      "/images/phones/realme-c61-pakistan-priceoye-yh8p3-500x500.webp",
      "/images/phones/realme-c61-pakistan-priceoye-p490z-500x500.webp"
    ],
    specs: {
      display: "6.74-inch 90Hz Eye Comfort Display, 560 nits peak, 180Hz Touch Sampling Rate",
      refreshRate: "90Hz",
      processor: "Unisoc T612 (12nm) Octa-Core High-Efficiency Processor",
      ram: "6GB LPDDR4X (+6GB Dynamic Virtual RAM)",
      storage: "128GB Storage, dedicated microSD expansion up to 2TB",
      mainCamera: "50 MP AI Primary Camera with Depth Auxiliary Sensor and LED Flash",
      selfieCamera: "5 MP AI Front Camera",
      battery: "5000 mAh Long-Life Battery with 4-Year Battery Durability Guarantee",
      charging: "15W Quick Charge via USB Type-C",
      os: "realme UI based on Android 14",
      network: "4G LTE Dual SIM, Side-mounted Fast Fingerprint Scanner",
      resolution: "720 x 1600 pixels (HD+), 260 ppi",
      waterResistance: "IP54 Dust & Water Resistance with Rainwater Smart Touch Protection",
      dimensions: "167.26 x 76.67 x 7.84 mm, 188g (Ultra-Slim Metallic Frame)",
      buildMaterials: "Integrated metallic frame with ArmorShell drop-resistant structure"
    },
    releaseDate: "2024-06-28",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Realme C61 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Realme C61 price in Pakistan starts at Rs. 29,499. Features ultra-slim 7.84mm metallic frame, 50MP AI camera, 5000mAh battery, and IP54 ArmorShell design."
  },
  {
    id: "vivo-y17s",
    name: "Vivo Y17s",
    brand: "Vivo",
    model: "Y17s",
    pricePKR: 32499,
    price: 32499,
    officialPricePKR: 36999,
    marketPriceRangePKR: { min: 32499, max: 36999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 5200,
      cnicTaxPKR: 7200,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 5200,
    ptaCnicTax: 7200,
    isLocallyAssembled: true,
    variants: [
      {
        id: "vivo-y17s-6-128",
        name: "6GB / 128GB",
        ram: "6GB LPDDR4X (+6GB Extended RAM)",
        storage: "128GB eMMC 5.1",
        pricePKR: 32499,
        officialPricePKR: 36999,
        marketPriceRangePKR: { min: 32499, max: 36999 }
      }
    ],
    colors: ["Glitter Purple", "Forest Green"],
    colorHexes: {
      "Glitter Purple": "#6C5B7B",
      "Forest Green": "#2E4B3E"
    },
    image: "/images/phones/vivo-y17s-pakistan-priceoye-v4x58-500x500.webp",
    images: [
      "/images/phones/vivo-y17s-pakistan-priceoye-v4x58-500x500.webp",
      "/images/phones/vivo-y17s-pakistan-priceoye-mjl7e-500x500.webp"
    ],
    specs: {
      display: "6.56-inch 90Hz Sunlight IPS Display, 840 nits peak brightness, TÜV Low Blue Light",
      refreshRate: "90Hz",
      processor: "MediaTek Helio G85 (12nm) Octa-Core Processor",
      ram: "6GB LPDDR4X (+6GB Virtual Extended RAM)",
      storage: "128GB Internal Storage, dedicated microSD slot up to 1TB",
      mainCamera: "50 MP Main Camera (f/1.8, PDAF) + 2 MP Bokeh Camera (f/2.4)",
      selfieCamera: "8 MP Front Camera (f/2.0) with Aura Screen Light",
      battery: "5000 mAh High-Capacity Battery",
      charging: "15W FlashCharge via USB Type-C",
      os: "Funtouch OS 13 based on Android 13 (Upgradable to Android 14)",
      network: "4G LTE Dual SIM, Side-mounted Capacitive Fingerprint Scanner",
      resolution: "720 x 1612 pixels (HD+), 269 ppi",
      waterResistance: "IP54 Dust & Splash Resistance Rating",
      dimensions: "163.74 x 75.43 x 8.09 mm, 186g"
    },
    releaseDate: "2023-09-18",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Vivo Y17s Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Vivo Y17s price in Pakistan starts at Rs. 32,499. Features 50MP portrait camera, 6.56-inch sunlight display, 5000mAh battery, and IP54 rating."
  }
];

const NEW_NEWS = [
  {
    id: "oppo-coloros-15-parallel-animation-trinity-engine-launch",
    slug: "oppo-coloros-15-parallel-animation-trinity-engine-launch",
    title: "OPPO Unveils ColorOS 15 with Parallel Animation Architecture and Trinity Engine Performance Optimization",
    summary: "OPPO has officially launched ColorOS 15 based on Android 15, debuting dual-engine parallel animations, AI-driven Fluid Cloud alerts, and an upgraded Trinity Engine for sustained 48-month system fluency across Find and Reno series.",
    category: "Software Updates",
    author: "PakMobile Arena Software Desk",
    date: "September 26, 2026",
    isoDate: "2026-09-26",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    tags: ["OPPO", "ColorOS 15", "Android 15", "Software Updates", "Trinity Engine", "Reno Series"],
    metaTitle: "OPPO ColorOS 15 Official Launch: Parallel Animations & Features | Pak Mobile Arena",
    metaDescription: "OPPO announces ColorOS 15 with parallel animation architecture, Trinity Engine resource scheduling, and AI productivity tools for eligible Pakistani devices.",
    content: [
      {
        heading: "Revolutionary Parallel Animation System Architecture",
        paragraphs: [
          "OPPO has officially pulled the wraps off ColorOS 15, marking one of the most comprehensive platform updates in the operating system's history. Central to this release is an industry-first 'Parallel Animation System', designed to eliminate transition freezes and micro-stutter when executing rapid multi-finger gestures on high-refresh-rate displays.",
          "Unlike conventional mobile user interfaces that force app opening and closing animations into a strictly sequential rendering queue, ColorOS 15 allows concurrent animation threads to calculate dynamically. Users can now interrupt ongoing app-opening animations or swipe rapidly between background tasks without witnessing dropped frames or UI desynchronization."
        ]
      },
      {
        heading: "Next-Generation Trinity Engine & RAM Virtualization",
        paragraphs: [
          "Under the hood, ColorOS 15 incorporates an overhauled Trinity Engine focusing on hardware-level resource allocation across the CPU, GPU, and DDR memory controller. Through intelligent thermal modeling, the engine accurately predicts peak rendering loads in mobile titles like PUBG Mobile and Call of Duty, reducing frame rendering variance by up to 26% while preserving battery health.",
          "Memory management has also been revitalized through advanced lossless compression algorithms. Devices running 8GB or 12GB of physical LPDDR5X RAM can now keep up to 25 background applications suspended in a warm state for up to 72 hours, ensuring instant app re-engagement without reloading delays."
        ]
      },
      {
        heading: "Fluid Cloud Notifications & On-Device AI Tools",
        paragraphs: [
          "Building upon the popular Dynamic Island-style paradigm, ColorOS 15 refines 'Fluid Cloud' capsule alerts into a unified real-time interaction hub. Live ride-sharing milestones, food delivery tracking, and flight status cards expand gracefully around the front camera cutout with minimal touch obstruction.",
          "Productivity features have been supercharged with native on-device AI integration. An AI Toolbox embedded within the Smart Sidebar provides instant document summarization, grammar refinement, and multilingual voice-to-text recording summaries that function seamlessly without cloud network latency."
        ]
      },
      {
        heading: "Rollout Schedule for Pakistani Devices",
        paragraphs: [
          "OPPO Pakistan has confirmed that the official stable build of ColorOS 15 will roll out in phased batches starting next month. Initial deployments will target the flagship Find X7 and Find X8 lineups, swiftly extending to the trending Reno 12, Reno 12F 5G, and Reno 11 series widely used across Karachi, Lahore, and Islamabad.",
          "Pakistani owners of supported OPPO devices can register for early-access preview builds by navigating to Settings > About Device > ColorOS Version > Beta Program."
        ]
      }
    ]
  },
  {
    id: "vivo-funtouch-os-15-originos-5-bluelm-ai-rollout",
    slug: "vivo-funtouch-os-15-originos-5-bluelm-ai-rollout",
    title: "vivo Unveils Funtouch OS 15: BlueLM AI Integration and 120 FPS System Motion Framework",
    summary: "vivo has officially announced Funtouch OS 15 for international and Pakistani markets, incorporating proprietary BlueLM multimodal artificial intelligence, dynamic 120 FPS system-wide motion effects, and upgraded memory scheduling.",
    category: "Software Updates",
    author: "PakMobile Arena Software Desk",
    date: "September 26, 2026",
    isoDate: "2026-09-26",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    tags: ["vivo", "Funtouch OS 15", "BlueLM AI", "Android 15", "Software Updates", "V-Series"],
    metaTitle: "vivo Funtouch OS 15 Announced: Features, BlueLM AI & Rollout | Pak Mobile Arena",
    metaDescription: "vivo unveils Funtouch OS 15 with BlueLM generative AI, 120 FPS motion framework, and personalized lock screens for V-series and Y-series handsets in Pakistan.",
    content: [
      {
        heading: "BlueLM AI Architecture Meets Mobile Usability",
        paragraphs: [
          "vivo has officially pulled back the curtain on Funtouch OS 15, its next-generation mobile platform based on Android 15. The focal point of this software iteration is the deep integration of vivo's proprietary BlueLM (Blue Light Multimodal) intelligence engine, which operates directly on the device's neural processing unit to deliver sub-second linguistic responses.",
          "Through BlueLM, vivo introduces 'AI Live Call Translation' capable of bidirectional voice interpretation across English, Urdu, Arabic, and Chinese in real time during standard phone conversations. In the Gallery, 'AI Photo Erase 2.0' accurately recognizes and reconstructs complex background textures—such as crowds or architectural elements—in a single tap without requiring internet connectivity."
        ]
      },
      {
        heading: "120 FPS Priority Motion Scheduling",
        paragraphs: [
          "To maximize the fluid potential of AMOLED displays found across vivo's V40, V30, and Y-series portfolios, Funtouch OS 15 incorporates an 'Origin Smooth 2.0' scheduling framework. The animation system has been rewritten to calculate spring physics and finger deceleration curves directly at 120 frames per second, ensuring smooth responsiveness across system menus.",
          "According to vivo's internal performance benchmarking labs, cold app startup times have decreased by 20%, while memory fragmentation over extended 50-month operational life cycles has been reduced by 40% using the revised Memory Fusion 4.0 architecture."
        ]
      },
      {
        heading: "Personalized Lock Screens & Immersive Always-on Display",
        paragraphs: [
          "Visual customization receives a massive refresh in Funtouch OS 15. Users can now create layered multi-depth lock screen clock styles with custom font geometry that dynamically recedes behind photographic portrait subjects. Contextual weather animations simulate live rain, fog, and sunlight directly behind active desktop icons.",
          "The volume slider and notification panels have been modernized with subtle frosted glass blur shaders that dynamically adjust their translucency and contrast based on the ambient color temperature of the user's active wallpaper."
        ]
      },
      {
        heading: "Pakistani Device Eligibility & Update Timeline",
        paragraphs: [
          "vivo Pakistan has outlined an aggressive rollout strategy for the local smartphone market. Flagship models—including the vivo X100 and X200 series—will receive public stable builds within weeks, with mid-range favorites including the vivo V40 5G, V40e, V30, and Y28 receiving over-the-air notification packages shortly thereafter.",
          "Pakistani consumers are encouraged to maintain sufficient free internal flash storage and backup essential media assets prior to initiating the substantial multi-gigabyte platform update."
        ]
      }
    ]
  },
  {
    id: "apple-ios-18-apple-intelligence-visual-tools-siri-expansion",
    slug: "apple-ios-18-apple-intelligence-visual-tools-siri-expansion",
    title: "Apple Expands iOS 18 Apple Intelligence: Visual Intelligence, System-Wide Writing Tools, and Siri Evolution",
    summary: "Apple has detailed the global availability roadmap for its suite of Apple Intelligence features in iOS 18, detailing localized contextual awareness, Camera Control integration, and Private Cloud Compute safeguards.",
    category: "Mobile OS",
    author: "PakMobile Arena Editorial",
    date: "September 25, 2026",
    isoDate: "2026-09-25",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1510519138197-06b862a2939b?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1510519138197-06b862a2939b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Apple", "iOS 18", "Apple Intelligence", "iPhone 16", "Siri", "Visual Intelligence"],
    metaTitle: "Apple Expands iOS 18 Apple Intelligence Features | Pak Mobile Arena",
    metaDescription: "Apple details iOS 18 Apple Intelligence rollout, Visual Intelligence camera features, system Writing Tools, and on-device privacy protections.",
    content: [
      {
        heading: "A New Era of Personal Context and Generative Writing",
        paragraphs: [
          "Apple has officially commenced the phased global deployment of Apple Intelligence across supported iPhone hardware. Engineered around on-device 3-billion-parameter foundation models, Apple Intelligence integrates seamlessly across iOS 18 system frameworks to deliver actionable utility without compromising user privacy.",
          "The centerpiece of the update is 'Writing Tools', embedded universally wherever text is editable across Mail, Messages, Notes, and third-party applications. Users can effortlessly rewrite text with specified tonal adjustments (Professional, Concise, Friendly), proofread technical prose, and synthesize extensive email threads into scannable executive summaries."
        ]
      },
      {
        heading: "Visual Intelligence via Dedicated Camera Control",
        paragraphs: [
          "On the iPhone 16 and iPhone 16 Pro family, the sapphire-crystal capacitive Camera Control button unlocks 'Visual Intelligence'. By simply pointing the camera at a physical storefront, restaurant menu, or printed event flyer and clicking the sensor, the handset instantly synthesizes operational hours, ratings, and calendar reminders.",
          "Crucially, Apple emphasizes that visual search queries processed through on-device models do not store photographic frames on Apple servers, setting a rigorous standard for optical telemetry privacy in consumer smartphones."
        ]
      },
      {
        heading: "Photos Clean Up and Natural Language Search",
        paragraphs: [
          "The redesigned Photos app in iOS 18 incorporates a dedicated 'Clean Up' tool that detects background photobombers, power lines, and unwanted glare artifacts with a single tap, filling the excised space with contextually generated textures. Natural language semantic search also allows users to find video moments using intuitive descriptions such as 'video of Hassan scoring a goal in the park'.",
          "Siri has also evolved with richer language understanding, retaining conversational context across consecutive prompts and featuring a luminous animated display border that pulses around the device edge during active voice interactions."
        ]
      },
      {
        heading: "Availability for Pakistani iPhone Owners",
        paragraphs: [
          "In Pakistan, official PTA-approved iPhone 15 Pro, iPhone 15 Pro Max, and all iPhone 16 models will receive the update automatically when set to English language configurations. Overseas returnees and local buyers purchasing official units from authorized retailers like Mercantile and Airlink will experience full local feature parity.",
          "Apple confirmed that additional localized linguistic dialects and regional feature expansions are slated for incremental point releases over the coming quarters."
        ]
      }
    ]
  },
  {
    id: "sony-lytia-lyt-818-50mp-sensor-hdr-telephoto-breakthrough",
    slug: "sony-lytia-lyt-818-50mp-sensor-hdr-telephoto-breakthrough",
    title: "Sony Semiconductor Unveils LYTIA LYT-818 50MP Sensor: 86dB Ultra-High Dynamic Range and Periscope Zoom Prowess",
    summary: "Sony Semiconductor Solutions has officially announced the LYTIA LYT-818, a groundbreaking 50-megapixel 1/1.28-inch image sensor engineered with Ultra-High Conversion Gain circuits to revolutionize low-light and periscope telephoto mobile photography.",
    category: "Hardware & Tech",
    author: "PakMobile Arena Tech Desk",
    date: "September 25, 2026",
    isoDate: "2026-09-25",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sony", "LYTIA", "LYT-818", "Smartphone Camera", "Image Sensor", "Mobile Photography"],
    metaTitle: "Sony LYTIA LYT-818 50MP Sensor Announced: Specs & Features | Pak Mobile Arena",
    metaDescription: "Sony unveils LYTIA LYT-818 50MP 1/1.28-inch sensor with 86dB single-frame HDR, low-noise UHCG circuits, and optimized periscope telephoto performance.",
    content: [
      {
        heading: "A New Benchmark for Smartphone Optical Fidelity",
        paragraphs: [
          "Sony Semiconductor Solutions (SSS) has officially announced the commercial release of the LYTIA LYT-818 image sensor, establishing a new technological pinnacle for premium mobile photography. Designed specifically for next-generation flagship camera phones, the LYT-818 boasts a 1/1.28-inch optical format with a native resolution of 50 megapixels.",
          "The sensor's primary technological breakthrough lies in its Ultra-High Conversion Gain (UHCG) circuit circuitry. By minimizing read noise to a remarkable 0.95 electrons (rms)—an unprecedented figure for a mobile image sensor of this physical footprint—the LYT-818 delivers pristine shadow clarity and color saturation in challenging low-light environments."
        ]
      },
      {
        heading: "True 86dB Single-Frame HDR & Video Capabilities",
        paragraphs: [
          "Dynamic range has historically represented the Achilles' heel of mobile camera sensors when recording high-contrast scenes. The LYTIA LYT-818 overcomes this limitation by integrating triple-gain HDR readout architecture, achieving an extraordinary 86dB of dynamic range in a single exposure capture.",
          "This native dynamic range virtually eradicates chromatic ghosting and motion blur artifacts commonly caused by traditional multi-exposure computational HDR stacking. In videography, the sensor supports continuous 4K 120fps recording with real-time HDR tone mapping, enabling creators to capture high-speed action sports with cinematic highlights."
        ]
      },
      {
        heading: "Versatile Deployment Across Main & Periscope Optics",
        paragraphs: [
          "Unlike bulky 1-inch sensors that create substantial camera bumps and cannot fit inside compact prism modules, the LYT-818's 1/1.28-inch geometry allows smartphone manufacturers to deploy it simultaneously as both a primary wide camera and an advanced periscope telephoto sensor.",
          "When configured inside a folded periscope lens barrel, the sensor's high signal-to-noise ratio dramatically elevates long-range optical zoom quality at 3x, 5x, and 10x focal lengths, enabling photographers to capture crisp wildlife and architectural subjects in dim evening light."
        ]
      },
      {
        heading: "Impact on Upcoming Handsets in Pakistan",
        paragraphs: [
          "Leading smartphone brands—including vivo for its flagship X200 series and Xiaomi for its upcoming optical collaborations—have confirmed initial commercial integration of the LYT-818 sensor in their upcoming hardware lines.",
          "For Pakistani mobile photography enthusiasts, handsets utilizing Sony's new LYTIA silicon will provide substantial improvements in nighttime street photography, wedding portraiture under incandescent lighting, and cinematic concert video recording."
        ]
      }
    ]
  },
  {
    id: "mediatek-dimensity-8400-all-big-core-mid-range-processor",
    slug: "mediatek-dimensity-8400-all-big-core-mid-range-processor",
    title: "MediaTek Details Dimensity 8400: Bringing Flagship All-Big-Core Silicon Performance to Affordable Mid-Range Phones",
    summary: "MediaTek has officially announced technical specifications for the Dimensity 8400, bringing its acclaimed 'All Big Core' CPU architecture, TSMC 4nm fabrication, and Mali-G720 graphics to sub-PKR 80,000 smartphones.",
    category: "Processors & Chipsets",
    author: "PakMobile Arena Tech Desk",
    date: "September 24, 2026",
    isoDate: "2026-09-24",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=1200&q=80",
    tags: ["MediaTek", "Dimensity 8400", "Mobile Chipset", "All Big Core", "Mid-Range Phones", "Mali GPU"],
    metaTitle: "MediaTek Dimensity 8400 Announced: Specs, Benchmarks & Features | Pak Mobile Arena",
    metaDescription: "MediaTek reveals Dimensity 8400 4nm chipset with All-Big-Core Cortex-A725 architecture, 1.7M AnTuTu score, and gaming performance for mid-range phones.",
    content: [
      {
        heading: "Democratizing Flagship All-Big-Core Architecture",
        paragraphs: [
          "MediaTek has formally unveiled the Dimensity 8400, sending shockwaves through the mid-range semiconductor sector. In a strategic maneuver to dominate the affordable performance tier, MediaTek has extended its flagship 'All Big Core' design philosophy down to the 8000-series, completely discarding low-power Cortex-A520 efficiency cores in favor of an entirely high-performance CPU cluster.",
          "Manufactured on TSMC's refined 4-nanometer process node, the Dimensity 8400 features a customized cluster of ARM Cortex-A725 CPU cores clocking up to 3.25 GHz. Initial engineering silicon benchmarks reveal AnTuTu v10 composite scores exceeding 1.7 million points—surpassing earlier flagship processors while maintaining superior thermal stability."
        ]
      },
      {
        heading: "Mali-G720 MC8 GPU and HyperEngine Gaming",
        paragraphs: [
          "Graphics processing on the Dimensity 8400 is powered by the ARM Mali-G720 MC8 GPU, delivering a 35% generational leap in peak polygon fill-rate and texture filtering speeds. MediaTek's proprietary HyperEngine software suite integrates AI-based variable rate shading and real-time frame interpolation, enabling sustained 90 FPS and 120 FPS gameplay in demanding titles.",
          "The chipset also introduces native support for LPDDR5X RAM operating up to 8533 Mbps and dual-channel UFS 4.0 flash storage, ensuring that app loading times and game level caching on mid-range devices rival flagship handsets costing triple the price."
        ]
      },
      {
        heading: "Generative AI Capabilities with MediaTek APU 780",
        paragraphs: [
          "On-device artificial intelligence processing is accelerated by the integrated MediaTek APU 780 neural processor. Supporting Transformer-based generative AI models with up to 10 billion parameters, the APU 780 executes offline text generation, image upscaling, and real-time live video portrait background bokeh directly on the handset without cloud data overhead.",
          "The integrated Imagiq 980 ISP supports image sensors up to 200 megapixels with zero shutter lag, bringing 14-bit RAW computation and AI-driven motion stabilization to mid-tier smartphone price points."
        ]
      },
      {
        heading: "Massive Relevance for Pakistani Smartphone Buyers",
        paragraphs: [
          "In the Pakistani mobile ecosystem, the mid-range price bracket between PKR 60,000 and PKR 90,000 accounts for substantial enthusiast sales. Smartphone manufacturers including Xiaomi (under the Redmi and POCO brands), realme, and Infinix have officially partnered with MediaTek to debut Dimensity 8400 handsets over the upcoming shopping season.",
          "By delivering near-flagship responsiveness, comprehensive 5G carrier aggregation, and robust power efficiency, the Dimensity 8400 is positioned to redefine value expectations for millions of Pakistani smartphone consumers."
        ]
      }
    ]
  }
];

function applyUpdates() {
  console.log('--- Applying Updates for September 26, 2026 ---');

  // 1. Update Phones Data
  const rawPhonesTs = fs.readFileSync(PHONES_TS_PATH, 'utf8');
  const arrayStartMarker = 'export const PHONES_DATA: PhoneSpec[] = ';
  const arrayEndMarker = '\nexport const BRANDS: BrandInfo[] = BRAND_DEFINITIONS';

  const startIndex = rawPhonesTs.indexOf(arrayStartMarker);
  const endIndex = rawPhonesTs.indexOf(arrayEndMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Could not find PHONES_DATA boundaries in src/data/phones.ts');
  }

  const prefix = rawPhonesTs.substring(0, startIndex + arrayStartMarker.length);
  const suffix = rawPhonesTs.substring(endIndex);

  let jsonSubstring = rawPhonesTs.substring(startIndex + arrayStartMarker.length, endIndex).trim();
  if (jsonSubstring.endsWith(';')) {
    jsonSubstring = jsonSubstring.slice(0, -1).trim();
  }

  const existingPhones = JSON.parse(jsonSubstring);
  console.log('Initial phone count:', existingPhones.length);

  let phonesAdded = 0;
  NEW_PHONES.forEach(np => {
    const idx = existingPhones.findIndex(p => p.id === np.id);
    if (idx !== -1) {
      console.log('Skipping existing duplicate phone:', np.id);
    } else {
      existingPhones.push(np);
      phonesAdded++;
    }
  });

  const updatedPhonesJson = JSON.stringify(existingPhones, null, 2);
  const newPhonesTs = `${prefix}${updatedPhonesJson};\n${suffix}`;

  fs.writeFileSync(PHONES_TS_PATH, newPhonesTs, 'utf8');
  fs.writeFileSync(PHONES_JSON_SRC, updatedPhonesJson, 'utf8');
  fs.writeFileSync(PHONES_JSON_ROOT, updatedPhonesJson, 'utf8');
  console.log(`Phones updated: +${phonesAdded}. New total: ${existingPhones.length}`);

  // 2. Update News Data
  const rawNewsTs = fs.readFileSync(NEWS_TS_PATH, 'utf8');
  const newsArrayMarker = 'export const NEWS_DATA: NewsArticle[] = [';
  const newsStartIndex = rawNewsTs.indexOf(newsArrayMarker);
  const newsEndIndex = rawNewsTs.indexOf('\n];', newsStartIndex);

  if (newsStartIndex === -1 || newsEndIndex === -1) {
    throw new Error('Could not find NEWS_DATA boundaries in src/data/news.ts');
  }

  const newsPrefix = rawNewsTs.substring(0, newsStartIndex + 'export const NEWS_DATA: NewsArticle[] = '.length);
  const suffixStartIndex = rawNewsTs.indexOf(';', newsEndIndex);
  const newsSuffix = rawNewsTs.substring(suffixStartIndex + 1);

  const arrayCode = rawNewsTs.substring(newsStartIndex + newsArrayMarker.length - 1, newsEndIndex + 2);
  const existingNews = vm.runInNewContext(arrayCode);
  console.log('Initial news count:', existingNews.length);

  let newsAdded = 0;
  NEW_NEWS.forEach(article => {
    const idx = existingNews.findIndex(n => n.id === article.id || n.slug === article.slug);
    if (idx !== -1) {
      existingNews[idx] = article;
      console.log('Updated news:', article.slug);
    } else {
      existingNews.unshift(article); // Prepend fresh news to top
      newsAdded++;
    }
  });

  const updatedNewsJson = JSON.stringify(existingNews, null, 2);
  const newNewsTs = `${newsPrefix}${updatedNewsJson};\n\n${newsSuffix.trim()}`;

  fs.writeFileSync(NEWS_TS_PATH, newNewsTs, 'utf8');
  fs.writeFileSync(NEWS_JSON_SRC, updatedNewsJson, 'utf8');
  fs.writeFileSync(NEWS_JSON_ROOT, updatedNewsJson, 'utf8');
  console.log(`News updated: +${newsAdded}. New total: ${existingNews.length}`);
}

applyUpdates();
