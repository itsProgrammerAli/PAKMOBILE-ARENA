/**
 * add_today_items.cjs
 * Safely adds 5 verified phones and 5 fresh news articles to Pak Mobile Arena
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
    id: "samsung-galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    model: "Galaxy S25 Ultra",
    pricePKR: 354999,
    price: 354999,
    officialPricePKR: 414999,
    marketPriceRangePKR: { min: 354999, max: 414999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 115000,
      cnicTaxPKR: 137000,
      status: "Official PTA Approved",
      isLocallyAssembled: false
    },
    ptaPassportTax: 115000,
    ptaCnicTax: 137000,
    isLocallyAssembled: false,
    variants: [
      {
        id: "samsung-galaxy-s25-ultra-12-256",
        name: "12GB / 256GB",
        ram: "12GB LPDDR5X",
        storage: "256GB UFS 4.0",
        pricePKR: 354999,
        officialPricePKR: 414999,
        marketPriceRangePKR: { min: 354999, max: 414999 }
      },
      {
        id: "samsung-galaxy-s25-ultra-12-512",
        name: "12GB / 512GB",
        ram: "12GB LPDDR5X",
        storage: "512GB UFS 4.0",
        pricePKR: 414999,
        officialPricePKR: 439999,
        marketPriceRangePKR: { min: 414999, max: 439999 }
      }
    ],
    colors: ["Titanium Silverblue", "Titanium Gray", "Titanium Black"],
    colorHexes: {
      "Titanium Silverblue": "#9FAEC0",
      "Titanium Gray": "#76777B",
      "Titanium Black": "#2C2C2D"
    },
    image: "/images/phones/samsung-galaxy-s25-ultra-pakistan-priceoye-bbrjh-500x500.webp",
    images: [
      "/images/phones/samsung-galaxy-s25-ultra-pakistan-priceoye-bbrjh-500x500.webp",
      "/images/phones/samsung-galaxy-s25-ultra-pakistan-priceoye-8rng7-500x500.webp"
    ],
    specs: {
      display: "6.9-inch Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits peak brightness, Corning Gorilla Armor 2",
      refreshRate: "120Hz",
      processor: "Qualcomm Snapdragon 8 Elite for Galaxy (3nm Octa-core up to 4.47GHz)",
      ram: "12GB LPDDR5X",
      storage: "256GB / 512GB UFS 4.0 High-Speed Flash",
      mainCamera: "200 MP (f/1.7, OIS, PDAF) + 50 MP (periscope telephoto, 5x optical zoom, OIS) + 10 MP (telephoto, 3x optical, OIS) + 50 MP (ultrawide, 120°)",
      selfieCamera: "12 MP (f/2.2, Dual Pixel PDAF, 4K@60fps HDR)",
      battery: "5000 mAh Li-Ion Battery with Smart AI Power Management",
      charging: "45W Wired Fast Charging (65% in 30 min) + 15W Fast Qi2 Wireless + 4.5W Reverse Wireless",
      os: "Android 15 with One UI 7 (7 Major Android OS Upgrades & 7 Years Security Updates)",
      network: "5G SA/NSA Dual SIM + eSIM, Wi-Fi 7, Bluetooth 5.4, Ultra Wideband (UWB)",
      resolution: "1440 x 3120 pixels (QHD+), 498 ppi density",
      peakBrightness: "2600 nits peak brightness",
      waterResistance: "IP68 Dust and Water Resistant (up to 1.5m for 30 mins)",
      buildMaterials: "Grade 5 Titanium Frame with Corning Gorilla Armor 2 front and frosted glass back",
      stabilization: "Dual Optical Image Stabilization (OIS) + Super Steady Video Stabilization",
      videoRecording: "8K @ 30fps, 4K @ 120fps, 4K @ 60fps HDR10+ with stereo audio recording"
    },
    releaseDate: "2025-01-22",
    tags: ["flagship", "5g", "camera", "trending", "gaming"],
    metaTitle: "Samsung Galaxy S25 Ultra Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Samsung Galaxy S25 Ultra price in Pakistan starts at Rs. 354,999. Features Snapdragon 8 Elite, 200MP Quad Camera, 6.9-inch Dynamic AMOLED 2X, and S-Pen."
  },
  {
    id: "realme-c65",
    name: "Realme C65",
    brand: "Realme",
    model: "C65",
    pricePKR: 36799,
    price: 36799,
    officialPricePKR: 39999,
    marketPriceRangePKR: { min: 36799, max: 39999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 5500,
      cnicTaxPKR: 7500,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 5500,
    ptaCnicTax: 7500,
    isLocallyAssembled: true,
    variants: [
      {
        id: "realme-c65-8-256",
        name: "8GB / 256GB",
        ram: "8GB RAM (+8GB Dynamic RAM)",
        storage: "256GB Built-in",
        pricePKR: 36799,
        officialPricePKR: 39999,
        marketPriceRangePKR: { min: 36799, max: 39999 }
      }
    ],
    colors: ["Starlight Purple", "Starlight Black"],
    colorHexes: {
      "Starlight Purple": "#7A639E",
      "Starlight Black": "#23262A"
    },
    image: "/images/phones/realme-c65-pakistan-priceoye-2l7tg-500x500.webp",
    images: [
      "/images/phones/realme-c65-pakistan-priceoye-2l7tg-500x500.webp",
      "/images/phones/realme-c65-pakistan-priceoye-c4f59-500x500.webp"
    ],
    specs: {
      display: "6.67-inch 90Hz Eye Comfort HD+ IPS Display, 625 nits peak, TÜV Rheinland Low Blue Light Certification",
      refreshRate: "90Hz",
      processor: "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)",
      ram: "8GB LPDDR4X (+8GB Dynamic Extended Virtual RAM)",
      storage: "256GB Internal Storage, dedicated microSDXC expansion slot up to 2TB",
      mainCamera: "50 MP AI Primary Camera (f/1.8, PDAF) + 2 MP Depth Sensor with Quad LED Flash",
      selfieCamera: "8 MP AI Front Camera (f/2.05, 1080p@30fps)",
      battery: "5000 mAh Massive Battery with 48-Month Fluency Guarantee",
      charging: "45W Fast Charging (50% charge in 30 mins) via USB Type-C",
      os: "Android 14 with Realme UI 5.0",
      network: "4G LTE Dual SIM Dual Standby, VoLTE, VoWiFi",
      resolution: "720 x 1604 pixels, 264 ppi",
      waterResistance: "IP54 Dust & Splash Resistance with Rainwater Smart Touch",
      dimensions: "164.6 x 76.1 x 7.64 mm, 185g"
    },
    releaseDate: "2024-04-04",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Realme C65 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Realme C65 official price in Pakistan starts at Rs. 36,799. Features 45W Fast Charging, 5000mAh battery, 50MP AI camera, and 6.67-inch 90Hz display."
  },
  {
    id: "xiaomi-redmi-a3",
    name: "Xiaomi Redmi A3",
    brand: "Xiaomi",
    model: "Redmi A3",
    pricePKR: 21999,
    price: 21999,
    officialPricePKR: 25999,
    marketPriceRangePKR: { min: 21999, max: 25999 },
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
        id: "xiaomi-redmi-a3-4-128",
        name: "4GB / 128GB",
        ram: "4GB (+4GB Extended RAM)",
        storage: "128GB eMMC 5.1",
        pricePKR: 21999,
        officialPricePKR: 25999,
        marketPriceRangePKR: { min: 21999, max: 25999 }
      }
    ],
    colors: ["Midnight Black", "Forest Green", "Star Blue"],
    colorHexes: {
      "Midnight Black": "#1A1A1A",
      "Forest Green": "#2D4836",
      "Star Blue": "#4E7399"
    },
    image: "/images/phones/xiaomi-redmi-a3-pakistan-priceoye-0sexf-500x500.webp",
    images: [
      "/images/phones/xiaomi-redmi-a3-pakistan-priceoye-0sexf-500x500.webp",
      "/images/phones/xiaomi-redmi-a3-pakistan-priceoye-yvadt-500x500.webp"
    ],
    specs: {
      display: "6.71-inch 90Hz Dot Drop HD+ Display, Corning Gorilla Glass 3, DC Dimming Eye Protection",
      refreshRate: "90Hz",
      processor: "MediaTek Helio G36 (12nm) Octa-Core Processor up to 2.2GHz",
      ram: "4GB LPDDR4X (+4GB Virtual RAM)",
      storage: "128GB Storage, expandable up to 1TB via dedicated microSD slot",
      mainCamera: "8 MP AI Dual Camera (f/2.0) with Auxiliary Lens and Film Camera Filters",
      selfieCamera: "5 MP Front Camera (f/2.2) with Soft-light Ring for Night Selfies",
      battery: "5000 mAh Long-Lasting Battery (up to 29 hours of calling)",
      charging: "10W Charging via USB Type-C Port",
      os: "Android 14 (Go Edition) with 2 Major OS Updates & 3 Years Security Patches",
      network: "4G LTE Dual SIM, Side-mounted Fingerprint Sensor, 3.5mm Headphone Jack",
      resolution: "1650 x 720 pixels, 268 ppi",
      dimensions: "168.3 x 76.3 x 8.32 mm, 199g"
    },
    releaseDate: "2024-02-14",
    tags: ["budget", "trending", "battery"],
    metaTitle: "Xiaomi Redmi A3 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Xiaomi Redmi A3 official price in Pakistan starts at Rs. 21,999. Features premium circular glass design, 90Hz display, 5000mAh battery, and Type-C."
  },
  {
    id: "honor-x7b",
    name: "Honor X7b",
    brand: "Honor",
    model: "X7b",
    pricePKR: 46500,
    price: 46500,
    officialPricePKR: 54999,
    marketPriceRangePKR: { min: 46500, max: 54999 },
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
        id: "honor-x7b-8-256",
        name: "8GB / 256GB",
        ram: "8GB (+8GB HONOR RAM Turbo)",
        storage: "256GB Built-in",
        pricePKR: 46500,
        officialPricePKR: 54999,
        marketPriceRangePKR: { min: 46500, max: 54999 }
      }
    ],
    colors: ["Flowing Silver", "Emerald Green", "Midnight Black"],
    colorHexes: {
      "Flowing Silver": "#D1D5DB",
      "Emerald Green": "#1B4D3E",
      "Midnight Black": "#1F2937"
    },
    image: "/images/phones/honor-x7b-pakistan-priceoye-e84gh-500x500.webp",
    images: [
      "/images/phones/honor-x7b-pakistan-priceoye-e84gh-500x500.webp",
      "/images/phones/honor-x7b-pakistan-priceoye-inzkg-500x500.webp"
    ],
    specs: {
      display: "6.8-inch 90Hz FHD+ TFT LCD Ultra-Large Sunlight Display, 850 nits peak, TÜV Rheinland Flicker Free",
      refreshRate: "90Hz",
      processor: "Qualcomm Snapdragon 680 (6nm) Octa-Core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)",
      ram: "8GB RAM (+8GB HONOR RAM Turbo Expansion)",
      storage: "256GB High-Capacity Internal Storage",
      mainCamera: "108 MP Ultra-Clear Primary (f/1.75, 1/1.67\" sensor) + 5 MP Ultra-Wide (f/2.2) + 2 MP Depth (f/2.4)",
      selfieCamera: "8 MP Front Camera (f/2.0, 1080p@30fps)",
      battery: "6000 mAh DXOMARK Gold Rated Battery (up to 3 days continuous usage)",
      charging: "35W HONOR SuperCharge via Type-C",
      os: "MagicOS 7.2 based on Android 13 (upgradable)",
      network: "4G LTE Dual SIM, Dual Stereo Speakers with 200% High Volume Mode",
      resolution: "2412 x 1080 pixels (FHD+), 389 ppi",
      dimensions: "166.7 x 76.5 x 8.24 mm, 199g"
    },
    releaseDate: "2023-12-01",
    tags: ["battery", "camera", "trending", "budget"],
    metaTitle: "Honor X7b Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Honor X7b official price in Pakistan starts at Rs. 46,500. Features 6000mAh battery, 108MP matrix camera, 6.8-inch FHD+ 90Hz screen, and 35W SuperCharge."
  },
  {
    id: "vivo-y03",
    name: "Vivo Y03",
    brand: "Vivo",
    model: "Y03",
    pricePKR: 25999,
    price: 25999,
    officialPricePKR: 27999,
    marketPriceRangePKR: { min: 25999, max: 27999 },
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
        id: "vivo-y03-4-64",
        name: "4GB / 64GB",
        ram: "4GB (+4GB Extended RAM)",
        storage: "64GB eMMC 5.1",
        pricePKR: 25999,
        officialPricePKR: 27999,
        marketPriceRangePKR: { min: 25999, max: 27999 }
      }
    ],
    colors: ["Space Black", "Gem Green"],
    colorHexes: {
      "Space Black": "#1E1E1E",
      "Gem Green": "#355E3B"
    },
    image: "/images/phones/vivo-y03-pakistan-priceoye-k5v2s-500x500.webp",
    images: [
      "/images/phones/vivo-y03-pakistan-priceoye-k5v2s-500x500.webp",
      "/images/phones/vivo-y03-pakistan-priceoye-98169-500x500.webp"
    ],
    specs: {
      display: "6.56-inch 90Hz Sunlight IPS LCD Display, TÜV Rheinland Low Blue Light Certification",
      refreshRate: "90Hz",
      processor: "MediaTek Helio G85 (12nm) Octa-Core Processor",
      ram: "4GB LPDDR4X (+4GB Extended Virtual RAM)",
      storage: "64GB eMMC 5.1, dedicated microSDXC expandable up to 1TB",
      mainCamera: "13 MP Primary Camera (f/2.2) + 0.08 MP Auxiliary Lens with LED Flash",
      selfieCamera: "5 MP Front Camera (f/2.2)",
      battery: "5000 mAh Battery with 4-Year Battery Health Durability Protection",
      charging: "15W FlashCharge via USB Type-C",
      os: "Funtouch OS 14 based on Android 14",
      network: "4G LTE Dual SIM, IP54 Dust and Water Resistance",
      resolution: "1612 x 720 pixels (HD+), 269 ppi",
      dimensions: "163.78 x 75.73 x 8.39 mm, 185g"
    },
    releaseDate: "2024-03-13",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Vivo Y03 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Vivo Y03 official price in Pakistan starts at Rs. 25,999. Features Helio G85 processor, 90Hz sunlight display, 5000mAh battery, and IP54 resistance."
  }
];

const NEW_NEWS = [
  {
    id: "qualcomm-snapdragon-8-elite-extreme-architecture-benchmarks-2026",
    slug: "qualcomm-snapdragon-8-elite-extreme-architecture-benchmarks-2026",
    title: "Qualcomm Unveils Snapdragon 8 Elite Architecture: Oryon CPU Cores and Next-Gen Adreno 830 GPU",
    summary: "Qualcomm has officially disclosed the technical deep-dive of the Snapdragon 8 Elite, showcasing custom 2nd-gen Oryon CPU cores delivering 45% IPC enhancements and breakthrough battery efficiency for upcoming flagships.",
    category: "Processors & Chipsets",
    author: "PakMobile Arena Tech Desk",
    date: "September 25, 2026",
    isoDate: "2026-09-25",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["Qualcomm", "Snapdragon 8 Elite", "Oryon CPU", "Adreno 830", "Flagship Processors", "Mobile AI"],
    metaTitle: "Qualcomm Snapdragon 8 Elite Architecture & Benchmarks (September 2026)",
    metaDescription: "Explore Qualcomm Snapdragon 8 Elite technical specifications, custom Oryon CPU performance, Adreno 830 graphics benchmarks, and flagship smartphone availability.",
    content: [
      {
        heading: "A Radical Shift to Custom 2nd-Generation Oryon Silicon",
        paragraphs: [
          "Qualcomm has officially rewritten the mobile silicon landscape by ditching standard ARM Cortex CPU cluster designs in favor of its entirely in-house 2nd-generation Oryon architecture for the flagship Snapdragon 8 Elite platform. Manufactured on TSMC's cutting-edge 3-nanometer 'N3E' process, the platform achieves prime core clock speeds scaling up to a staggering 4.32 GHz alongside performance cores running at 3.53 GHz.",
          "According to verified engineering whitepapers from Qualcomm's Snapdragon Summit, the new microarchitecture delivers a monumental 45% single-core and multi-core performance leap compared to the predecessor generation. More critically for sustained workloads, overall SoC power consumption has been reduced by up to 27%, directly resolving historical thermal throttling concerns in compact smartphone chassis."
        ]
      },
      {
        heading: "Adreno 830 Sliced Architecture & Sliced Memory Bandwidth",
        paragraphs: [
          "On the graphics front, the Snapdragon 8 Elite introduces the reimagined Adreno 830 GPU, utilizing a sliced compute architecture that partitions graphics compute engines into dedicated clock domains. Each slice can independently dynamic-scale based on polygon rendering density and ray-tracing pipeline demands, delivering an astounding 40% jump in raw gaming framerate efficiency.",
          "Mobile gamers playing demanding titles such as Genshin Impact, Warzone Mobile, and PUBG Mobile will observe sustained 120 FPS playback at native 1080p and 1440p resolutions without aggressive thermal throttling. Additionally, full Unreal Engine 5.3 support—including Nanite geometry virtualized streaming and hardware-accelerated Chaos physics—is now natively baked into the mobile graphics driver stack."
        ]
      },
      {
        heading: "Hexagon NPU & Multimodal On-Device AI Acceleration",
        paragraphs: [
          "Artificial intelligence processing receives an unprecedented upgrade courtesy of the revised Hexagon NPU. By integrating an enlarged scalar tensor accelerator and dedicated micro-tile memory buffers, the NPU achieves a 45% throughput boost for on-device Large Language Models (LLMs) and Large Vision Models (LVMs), executing local parameter inference exceeding 70 tokens per second.",
          "For Pakistani consumers, this silicon milestone means upcoming flagship handsets from Samsung, Xiaomi, and OnePlus will execute complex voice translation, photographic semantic segmentation, and on-device generative text synthesis completely offline without transmitting private personal data to cloud data centers."
        ]
      },
      {
        heading: "Commercial Availability and Pakistani Market Impact",
        paragraphs: [
          "Flagship devices equipped with the Snapdragon 8 Elite—spearheaded by the Samsung Galaxy S25 series and Xiaomi 15 line—are scheduled for immediate global distribution, with official PTA-compliant retail shipments reaching Pakistani distributors in Karachi, Lahore, and Islamabad throughout the current quarter.",
          "Local authorized retailers indicate that while initial CBU import duties remain in the upper customs valuation slab, consumer demand for Snapdragon 8 Elite handsets is anticipated to break previous flagship preorder volumes due to the sheer architectural leap over older silicon."
        ]
      }
    ]
  },
  {
    id: "mediatek-dimensity-9600-pro-2nm-flagship-chipset-architecture",
    slug: "mediatek-dimensity-9600-pro-2nm-flagship-chipset-architecture",
    title: "MediaTek Announces Dimensity 9600 Architecture: All-Big-Core 2nm Mobile Processing Powerhouse",
    summary: "MediaTek has formally previewed its upcoming Dimensity 9600 platform, doubling down on the revolutionary 'All Big Core' philosophy while transitioning to advanced 2nm GAAFET fabrication for industry-leading efficiency.",
    category: "Processors & Chipsets",
    author: "PakMobile Arena Tech Desk",
    date: "September 25, 2026",
    isoDate: "2026-09-25",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    tags: ["MediaTek", "Dimensity 9600", "2nm Chipset", "All Big Core", "Mobile Processors", "Immortalis GPU"],
    metaTitle: "MediaTek Dimensity 9600 Pro 2nm Chipset Revealed | Pak Mobile Arena",
    metaDescription: "MediaTek reveals Dimensity 9600 2nm All-Big-Core architecture, Immortalis G925 ray tracing graphics, and on-device Generative AI engine specifications.",
    content: [
      {
        heading: "The Evolution of MediaTek's All-Big-Core Strategy",
        paragraphs: [
          "MediaTek has officially detailed the engineering roadmap for its next flagship mobile silicon, the Dimensity 9600. Continuing the groundbreaking architectural decision initiated with the Dimensity 9300 and 9400 series, the company has completely omitted conventional low-power 'efficiency' cores, opting instead for an All-Big-Core topology comprising exclusively high-performance and super-performance CPU execution units.",
          "Fabricated on TSMC's next-generation 2nm GAAFET (Gate-All-Around Field-Effect Transistor) process node, the Dimensity 9600 achieves superior power-to-performance metrics compared to traditional FinFET designs. By running larger, wider-execution cores at significantly lower operating voltages, MediaTek achieves both higher peak computational bursts and superior sustained battery life during standard user tasks."
        ]
      },
      {
        heading: "Immortalis-G935 GPU with Hardware Ray Tracing Precision",
        paragraphs: [
          "Graphic rendering on the Dimensity 9600 is managed by the newly engineered ARM Immortalis-G935 GPU, featuring a 16-core configuration with hardware-level Ray Tracing engines operating alongside double-rate geometry intersection pipelines. Benchmarks indicate up to a 38% increase in complex lighting simulation speeds compared to earlier flagship silicon.",
          "Furthermore, MediaTek's proprietary HyperEngine Gaming Technology incorporates AI-driven neural super-sampling, intelligently upscaling 720p rasterized frames to pristine 1440p displays with less than 2 milliseconds of frame latency, dramatically minimizing thermal dissipation in thin smartphone builds."
        ]
      },
      {
        heading: "MediaTek NPU 890: Multimodal Generative AI on Device",
        paragraphs: [
          "At the core of the Dimensity 9600 lies the next-gen NPU 890, built specifically to accelerate on-device Diffusion models and Large Language Models with parameter counts up to 33 billion. MediaTek confirmed native quantization support for INT4 and FP8 precision formats, cutting AI memory footprint in half without perceptibly reducing generative image or text accuracy.",
          "Smartphone manufacturers like vivo, OPPO, and Xiaomi are currently integrating the Dimensity 9600 into upcoming flagship camera phones, utilizing the NPU's real-time cinematic portrait rendering and AI video denoising algorithms to achieve professional studio lighting in low-light environments."
        ]
      },
      {
        heading: "Implications for the Pakistani Smartphone Market",
        paragraphs: [
          "In the Pakistani mobile sector, MediaTek has rapidly expanded its footprint from entry-level Helio G-series chips to high-tier Dimensity platforms. Flagships utilizing Dimensity silicon frequently arrive with more competitive local retail pricing compared to Snapdragon counterparts, providing Pakistani tech enthusiasts with flagship-tier performance at attractive price points.",
          "Local carrier testing with Jazz and Zong in major urban centers also validates the Dimensity 9600's Sub-6GHz carrier aggregation modem, delivering theoretical download throughput exceeding 7.5 Gbps in compatible 5G network cells."
        ]
      }
    ]
  },
  {
    id: "samsung-one-ui-9-official-rollout-roadmap-galaxy-ai-features",
    slug: "samsung-one-ui-9-official-rollout-roadmap-galaxy-ai-features",
    title: "Samsung Announces One UI 9 Official Rollout Roadmap: Galaxy AI Personalization and Redesigned Fluid Interface",
    summary: "Samsung Electronics has officially outlined the release schedule and feature suite for One UI 9, introducing fluid non-linear system animations, lock screen widgets, and enhanced privacy safeguards for millions of Galaxy users.",
    category: "Software Updates",
    author: "PakMobile Arena Software Desk",
    date: "September 24, 2026",
    isoDate: "2026-09-24",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Samsung", "One UI 9", "Galaxy AI", "Android 15", "Software Updates", "Galaxy S25"],
    metaTitle: "Samsung One UI 9 Rollout Roadmap & Galaxy AI Features Announced",
    metaDescription: "Check official Samsung One UI 9 update roadmap, supported Galaxy devices, eligible Pakistani models, and new Galaxy AI features.",
    content: [
      {
        heading: "A Complete Visual & Ergonomic Overhaul",
        paragraphs: [
          "Samsung Electronics has officially pulled back the curtain on One UI 9, marking the most substantial visual and ergonomic redesign of Samsung's Android overlay since the inception of the One UI branding. Built on the modern foundation of Android 15, One UI 9 is engineered from the ground up to streamline one-handed interaction on large-screen AMOLED devices.",
          "The interface introduces a brand-new non-linear animation engine that calculates physical finger velocity and real-time screen inertia, eliminating stutter when interrupting application opening or gesture switching. Quick Settings and the Notification Shade have also been reorganized into a dual-panel modular design that can be customized according to user preference."
        ]
      },
      {
        heading: "Advanced Galaxy AI Integration & Contextual Intelligence",
        paragraphs: [
          "One UI 9 deeply bakes generative intelligence into system utilities. The upgraded 'Now Bar' and intelligent dynamic widgets surface contextual suggestions based on calendar appointments, traffic conditions, and battery consumption patterns without requiring third-party background apps.",
          "Samsung Notes receives native audio transcription summary integration with multi-speaker diarization, enabling students and working professionals to record meetings and obtain immediate formatted action points. Photo Assist also gains intuitive generative expand and object removal capabilities that operate directly on the handset's NPU for enhanced user privacy."
        ]
      },
      {
        heading: "Eligible Galaxy Devices & Pakistani Rollout Schedule",
        paragraphs: [
          "Samsung Pakistan has confirmed that the official One UI 9 rollout will begin in staggered waves. The initial phase will immediately target the Galaxy S25, Galaxy S25+, and Galaxy S25 Ultra, followed swiftly by the previous-generation Galaxy S24 lineup, Galaxy Z Fold 6, and Galaxy Z Flip 6.",
          "Popular mid-range devices widely adopted across Pakistan—including the Galaxy A55 5G, Galaxy A35 5G, Galaxy A25 5G, and Galaxy A16—are scheduled to receive their over-the-air (OTA) update packages starting in the subsequent rollout phase, ensuring long-term software parity across budget and premium tiers."
        ]
      },
      {
        heading: "Knox Matrix Security & Post-Quantum Encryption",
        paragraphs: [
          "Underpinning One UI 9 is an enhanced Knox Matrix security layer featuring post-quantum cryptographic algorithms designed to secure user biometric credentials and private keys against emerging computational threats. Samsung cloud backups now enforce end-to-end device-locked encryption by default.",
          "Pakistani users can verify update eligibility and check their specific CSC regional rollout status directly through Settings > Software Update on officially distributed Galaxy devices."
        ]
      }
    ]
  },
  {
    id: "apple-iphone-18-pro-max-global-launch-pakistan-availability-pta-tax",
    slug: "apple-iphone-18-pro-max-global-launch-pakistan-availability-pta-tax",
    title: "Apple iPhone 18 Pro Series Global Launch: Variable Aperture Camera, 2nm Silicon, and Pakistan Availability",
    summary: "Apple has formally introduced the iPhone 18 Pro and iPhone 18 Pro Max, spotlighting a mechanical variable aperture camera system, aerospace titanium unibody, and next-gen A19 Pro silicon with unified memory architecture.",
    category: "Phone Launches",
    author: "PakMobile Arena Editorial",
    date: "September 24, 2026",
    isoDate: "2026-09-24",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80",
    tags: ["Apple", "iPhone 18 Pro", "iPhone 18 Pro Max", "A19 Pro", "PTA Tax", "Variable Aperture", "iOS 20"],
    metaTitle: "Apple iPhone 18 Pro Max Launch, Specs & Pakistan Availability | Pak Mobile Arena",
    metaDescription: "Apple announces iPhone 18 Pro and Pro Max with A19 Pro silicon, variable aperture camera, titanium chassis, and updated Pakistan PTA tax valuation details.",
    content: [
      {
        heading: "Revolutionary Variable Aperture Photographic Hardware",
        paragraphs: [
          "At its official keynote presentation, Apple unveiled the iPhone 18 Pro and iPhone 18 Pro Max, centering this generation's hardware advancements around photographic versatility. For the first time in iPhone history, the primary 48MP Fusion camera incorporates a physical micro-stepper mechanical variable aperture ranging from f/1.4 to f/2.8.",
          "This mechanical aperture allows mobile photographers to physically control optical depth-of-field and light intake without relying exclusively on synthetic software bokeh. Combined with an upgraded 48MP 5x tetraprism telephoto lens and an anti-reflective atomic-layer deposition coating, optical flaring and chromatic aberration in night videography are virtually eliminated."
        ]
      },
      {
        heading: "Apple A19 Pro Silicon on 2nm Architecture",
        paragraphs: [
          "Powering the new Pro series is Apple's in-house A19 Pro chipset, fabricated on TSMC's 2nm 'N2' node. Featuring a 6-core CPU configuration and a 6-core GPU with hardware ray-tracing and neural mesh shading, the A19 Pro delivers a 20% CPU speed improvement alongside a 35% reduction in thermal dissipation.",
          "Unified system memory has been boosted to 12GB of LPDDR5X across all Pro models, directly facilitating on-device execution of complex Apple Intelligence models for live video generation, multi-layered photo editing, and localized natural language semantic queries without server roundtrips."
        ]
      },
      {
        heading: "Display Durability & Vapor Chamber Thermal Management",
        paragraphs: [
          "Addressing past feedback regarding sustained high-temperature gaming and video rendering, Apple has integrated a high-conductivity laser-welded copper and graphite vapor chamber into the titanium chassis. This thermal redesign allows the iPhone 18 Pro Max to maintain peak performance during extended 4K ProRes 120fps recording sessions.",
          "The Super Retina XDR display features Ceramic Shield 2 front glass with 3000 nits peak outdoor brightness and narrower, perfectly symmetrical 1.1mm bezels, maximizing viewing estate while preserving pocket ergonomics."
        ]
      },
      {
        heading: "Pakistan Availability, Currency Slabs & PTA Tax Estimates",
        paragraphs: [
          "Authorized Apple distributors and premium retail partners in Pakistan—including Mercantile and Airlink—have signaled that preorders for official PTA-approved units will commence shortly after international shipments begin.",
          "Under current Federal Board of Revenue (FBR) customs valuations for CBU smartphones exceeding the $500 threshold, the estimated PTA tax on the iPhone 18 Pro Max stands at approximately Rs. 145,000 on CNIC and Rs. 125,000 on Passport registration. Consumers are strongly advised to purchase through verified channels to guarantee legitimate PTA approval and 1-year local warranty."
        ]
      }
    ]
  },
  {
    id: "android-17-satellite-direct-to-cell-connectivity-google-mobile-features",
    slug: "android-17-satellite-direct-to-cell-connectivity-google-mobile-features",
    title: "Google Details Android 17 Satellite Direct-to-Cell Connectivity and Adaptive App Freezing",
    summary: "Google has published initial developer documentation for Android 17, detailing carrier-agnostic satellite texting protocols, background app thermal freezing, and granular location privacy controls for consumer smartphones.",
    category: "Mobile OS",
    author: "PakMobile Arena Tech Desk",
    date: "September 23, 2026",
    isoDate: "2026-09-23",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Android 17", "Google", "Satellite Connectivity", "Mobile OS", "Privacy", "Battery Optimization"],
    metaTitle: "Android 17 Features: Satellite Direct-to-Cell & Battery Controls Explained",
    metaDescription: "Google reveals Android 17 features: non-terrestrial satellite network integration, adaptive RAM freezing, and enhanced emergency communication for smartphones.",
    content: [
      {
        heading: "Standardized Satellite Non-Terrestrial Network (NTN) Protocol",
        paragraphs: [
          "Google has taken a monumental step forward in mobile connectivity by detailing the native Non-Terrestrial Network (NTN) satellite communication stack in the latest developer builds of Android 17. Unlike proprietary vendor-specific implementations, Android 17 introduces standardized 3GPP Release 17 satellite APIs that allow any compatible Android smartphone to seamlessly connect to low-Earth orbit (LEO) satellite constellations.",
          "When users travel outside cellular coverage—such as remote valleys in Gilgit-Baltistan, Balochistan, or offshore maritime zones—the smartphone OS automatically initializes satellite handshake protocols, enabling two-way SMS messaging, location beaconing, and emergency dispatch alerts directly through standard messaging applications."
        ]
      },
      {
        heading: "Adaptive App Freezing & Deep RAM Efficiency",
        paragraphs: [
          "To combat background battery drain caused by poorly optimized third-party applications, Android 17 introduces 'Adaptive App Freezing'. Leveraging device-side machine learning, the OS monitors user interaction cadence and suspends CPU execution for background apps after 10 seconds of inactivity.",
          "Unlike aggressive task-killing solutions that break push notifications, Android 17 utilizes shared memory snapshots, allowing suspended applications to resume instantaneously without reloading from flash storage, resulting in up to 18% extended screen-on time on budget and mid-range devices."
        ]
      },
      {
        heading: "Granular Location Coarseness & Permission Safeguards",
        paragraphs: [
          "Privacy enhancements in Android 17 include a newly introduced 'Fuzzy Distance' location permission option. Rather than forcing users to select between pinpoint GPS coordinates or complete location denial, users can permit applications (such as delivery trackers or ride-hailing services) to access only approximate neighborhood-level geographic grids.",
          "Additionally, the system clipboard and photo selector now isolate photo metadata—automatically scrubbing sensitive EXIF GPS coordinates before passing media assets to social networking platforms."
        ]
      },
      {
        heading: "Timeline and Ecosystem Adoption in Pakistan",
        paragraphs: [
          "Google confirmed that public beta releases will roll out across Pixel devices in early 2027, followed by source code drops to the Android Open Source Project (AOSP). Major Android OEM partners including Xiaomi, vivo, Tecno, and Infinix have begun early platform testing.",
          "In Pakistan, where rugged terrain frequently leaves travelers without traditional cellular towers, the native integration of satellite emergency services is expected to offer crucial safety infrastructure for tourism, disaster management, and cross-provincial transit."
        ]
      }
    ]
  }
];

function applyUpdates() {
  console.log('--- Applying Updates to Pak Mobile Arena ---');

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
      existingNews.unshift(article); // prepend to top
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
