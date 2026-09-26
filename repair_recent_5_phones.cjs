/**
 * repair_recent_5_phones.cjs
 * Repairs the 5 recently added smartphones with full official specs,
 * exact PriceOye prices, exact color-to-image mappings (colorImages), and verified PTA taxes.
 */
const fs = require('fs');
const path = require('path');

const PHONES_TS_PATH = path.join(__dirname, 'src/data/phones.ts');
const PHONES_JSON_SRC = path.join(__dirname, 'src/data/phones.json');
const PHONES_JSON_ROOT = path.join(__dirname, 'phones.json');
const PHONES_JSON_PUBLIC = path.join(__dirname, 'public/phones.json');

const REPAIRED_PHONES = {
  "infinix-hot-50i": {
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
    colors: ["Titanium Grey", "Sage Green", "Sleek Black", "Dreamy Purple"],
    colorHexes: {
      "Titanium Grey": "#7A7772",
      "Sage Green": "#788057",
      "Sleek Black": "#1E1E1E",
      "Dreamy Purple": "#C160BD"
    },
    colorImages: {
      "Titanium Grey": "/images/phones/infinix-hot-50i-titanium-grey.webp",
      "Sage Green": "/images/phones/infinix-hot-50i-sage-green.webp",
      "Sleek Black": "/images/phones/infinix-hot-50i-sleek-black.webp",
      "Dreamy Purple": "/images/phones/infinix-hot-50i-dreamy-purple.webp"
    },
    image: "/images/phones/infinix-hot-50i-titanium-grey.webp",
    images: [
      "/images/phones/infinix-hot-50i-titanium-grey.webp",
      "/images/phones/infinix-hot-50i-sage-green.webp",
      "/images/phones/infinix-hot-50i-sleek-black.webp",
      "/images/phones/infinix-hot-50i-dreamy-purple.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan"],
    specs: {
      display: "6.7\" 120Hz Punch-Hole IPS Display with Dynamic Bar, 500 nits Peak Brightness, 240Hz Touch Sampling Rate",
      refreshRate: "120Hz Punch-Hole IPS",
      processor: "MediaTek Helio G81 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.7 GHz Cortex-A55) with ARM Mali-G52 MC2 GPU",
      ram: "6GB LPDDR4X (+6GB Virtual Extended RAM = 12GB Effective Memory)",
      storage: "128GB eMMC 5.1 Internal Storage, dedicated microSD slot expandable up to 2TB",
      mainCamera: "48MP AI Ultra-Clear Main Sensor (f/1.79, 1/2.0\" sensor, PDAF, 5P lens) + Auxiliary Depth Lens with Quad-LED Flash",
      selfieCamera: "8MP Front Camera (f/2.0) with Dual-LED Flash and Portrait Beautification",
      battery: "5000 mAh High-Density Battery with 4-Year Battery Health Durability Guarantee (1600 cycles)",
      charging: "18W Fast Charging via USB Type-C, Reverse Wired Charging Support",
      os: "Android 14 (Go Edition) with XOS 14.5 (48-Month TÜV SÜD Fluency Certified)",
      network: "4G LTE Dual SIM, IP54 Splash & Dust Resistance, Dual Stereo Speakers with 300% Ultra Volume Mode, Side Fingerprint",
      resolution: "HD+ (1600 x 720 pixels), 20:9 aspect ratio (~262 ppi)",
      peakBrightness: "500 nits peak outdoor brightness, Sunlight Readable Mode",
      hdrSupport: "120Hz dynamic refresh rate (60/90/120Hz auto-switch), Dynamic Bar notification pill",
      dimensions: "165.7 x 77.1 x 8.1 mm, 184g",
      buildMaterials: "Glass front, textured lightweight polycarbonate unibody, feather-light ergonomic grip",
      simSlot: "Triple Slot: Dual SIM (Nano-SIM, dual stand-by) + dedicated microSDXC slot",
      waterResistance: "IP54 dust and splash resistant with Wet & Greasy Touch Control",
      stabilization: "Electronic Image Stabilization (EIS) on rear camera",
      videoRecording: "1080p @ 30fps, 720p @ 30fps video recording",
      opticsFeatures: "48MP f/1.79 main sensor, Super Night Mode, Portrait Mode with Bokeh, Time-lapse, Document Mode, Quad-LED flash",
      frontVideoRecording: "1080p @ 30fps with Dual-LED flash illumination",
      wirelessCharging: "Not supported (18W Fast Wired Charging via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (dual-band 2.4GHz & 5GHz), Bluetooth 5.3, GPS/GLONASS/Galileo",
      specialHardware: "Dynamic Bar interactive island for charging and call notifications, 300% Ultra Volume audio amplifier",
      biometricsAudio: "Side-mounted capacitive fingerprint scanner, Face Unlock, dual stereo speakers with DTS sound processing, 3.5mm headphone jack"
    },
    releaseDate: "2024-09-10",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Infinix Hot 50i Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Infinix Hot 50i price in Pakistan starts at Rs. 29,299. Features 120Hz punch-hole display, Helio G81 processor, 48MP AI camera, and 5000mAh battery."
  },

  "oppo-a58": {
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
      "Glowing Black": "#1F2024",
      "Dazzling Green": "#2AB12A"
    },
    colorImages: {
      "Glowing Black": "/images/phones/oppo-a58-glowing-black.webp",
      "Dazzling Green": "/images/phones/oppo-a58-dazzling-green.webp"
    },
    image: "/images/phones/oppo-a58-glowing-black.webp",
    images: [
      "/images/phones/oppo-a58-glowing-black.webp",
      "/images/phones/oppo-a58-dazzling-green.webp"
    ],
    popularInCities: ["Lahore", "Karachi", "Islamabad", "Peshawar", "Gujranwala"],
    specs: {
      display: "6.72\" FHD+ Sunlight Punch-Hole LTPS Display, 680 nits Peak Brightness, 100% DCI-P3 Color Gamut",
      refreshRate: "60Hz Sunlight Display (180Hz Touch Sampling Rate)",
      processor: "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with ARM Mali-G52 MC2 GPU",
      ram: "6GB LPDDR4X @ 1800MHz (+6GB Virtual RAM Expansion = up to 12GB RAM)",
      storage: "128GB eMMC 5.1 Storage, dedicated microSD slot expandable up to 1TB",
      mainCamera: "50MP AI Ultra-Clear Main (f/1.8, 75.5° FOV, 5P lens, AF open-loop motor) + 2MP Portrait Lens (f/2.4, 89.1° FOV, 3P lens)",
      selfieCamera: "8MP Punch-Hole Front Camera (f/2.0, 80° FOV, 4P lens) with AI Portrait Retouching",
      battery: "5000 mAh (typical) Long-Lasting Battery with 36-Month Fluency Protection",
      charging: "33W SUPERVOOC Fast Charge (52% in 30 minutes, 100% in 75 minutes) via USB Type-C",
      os: "ColorOS 13.1 based on Android 13 (Upgradable to Android 14 with ColorOS 14)",
      network: "4G LTE Dual SIM, IPX4 Water Resistance, Dual Stereo Speakers with Ultra Volume Mode 300%, NFC, Side Fingerprint",
      resolution: "FHD+ (2400 x 1080 pixels), 20:9 ratio (~391 ppi, 91.4% screen-to-body ratio)",
      peakBrightness: "680 nits peak outdoor brightness, 550 nits typical, 4096-level intelligent dimming",
      hdrSupport: "100% DCI-P3 cinematic wide color gamut, 100% sRGB, 16.7M colors (8-bit)",
      dimensions: "165.65 x 75.98 x 7.99 mm, 192g",
      buildMaterials: "2.8D curved back with silk-satin texture, matte polymer composite frame, fingerprint-resistant finish",
      simSlot: "Dual SIM (Nano-SIM, dual stand-by) + dedicated microSDXC expansion slot",
      waterResistance: "IPX4 water resistance rating (tested against water sprays from all directions)",
      stabilization: "Electronic Image Stabilization (EIS) on video capture",
      videoRecording: "1080p @ 30fps, 720p @ 30fps with video EIS zoom support",
      opticsFeatures: "50MP AI primary camera, Night Mode, Portrait Bokeh Flare, Extra HD 50MP composite, Panorama, Google Lens",
      frontVideoRecording: "1080p @ 30fps, 720p @ 30fps with portrait enhancement",
      wirelessCharging: "Not supported (33W SUPERVOOC wired)",
      wifiBluetooth: "Wi-Fi 5 (802.11 a/b/g/n/ac dual-band 2.4/5GHz), Bluetooth 5.3 (SBC, AAC, aptX HD), NFC supported",
      specialHardware: "Dual stereo acoustic chamber with Dirac sound tuning, 300% Ultra Volume Mode for noisy outdoor calls",
      biometricsAudio: "Side-mounted capacitive fingerprint sensor, Face Unlock, dual stereo speakers, 3.5mm stereo earphone jack"
    },
    releaseDate: "2023-07-28",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Oppo A58 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Oppo A58 price in Pakistan starts at Rs. 43,999. Features 33W SUPERVOOC, 5000mAh battery, 6.72-inch FHD+ sunlight display, and 50MP AI camera."
  },

  "samsung-galaxy-a05": {
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
    colors: ["Black", "Light Green", "Silver"],
    colorHexes: {
      "Black": "#2F2F2F",
      "Light Green": "#9AA07C",
      "Silver": "#C0C0C0"
    },
    colorImages: {
      "Black": "/images/phones/samsung-galaxy-a05-black.webp",
      "Light Green": "/images/phones/samsung-galaxy-a05-light-green.webp",
      "Silver": "/images/phones/samsung-galaxy-a05-silver.webp"
    },
    image: "/images/phones/samsung-galaxy-a05-black.webp",
    images: [
      "/images/phones/samsung-galaxy-a05-black.webp",
      "/images/phones/samsung-galaxy-a05-light-green.webp",
      "/images/phones/samsung-galaxy-a05-silver.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Sialkot"],
    specs: {
      display: "6.7\" PLS LCD Infinity-U HD+ Display, 16 Million Colors, 450 nits Typical Brightness",
      refreshRate: "60Hz Infinity-U Display",
      processor: "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with ARM Mali-G52 MC2 GPU",
      ram: "4GB RAM (+4GB RAM Plus Virtual Memory = 8GB Total)",
      storage: "64GB Internal Storage, dedicated microSD card slot expandable up to 1TB",
      mainCamera: "50MP Wide Main Camera (f/1.8 aperture, Auto Focus) + 2MP Depth Camera (f/2.4 aperture) with Single LED Flash",
      selfieCamera: "8MP Front Selfie Camera (f/2.0 aperture)",
      battery: "5000 mAh (typical) Long-Lasting Battery with Smart AI Power Management",
      charging: "25W Super Fast Charging via USB Type-C 2.0 (Power Delivery 3.0 PPS)",
      os: "Android 13 with One UI Core 5.1 (Guaranteed 2 Major Android OS Upgrades & 4 Years Security Maintenance)",
      network: "4G LTE Dual SIM, Dolby Atmos Sound Support, 3.5mm Headphone Jack, Bluetooth 5.3",
      resolution: "HD+ (1600 x 720 pixels), 20:9 ratio (~262 ppi)",
      peakBrightness: "450 nits typical brightness, adaptive screen tone adjustment",
      hdrSupport: "16M colors depth, vivid color profile tuning",
      dimensions: "168.8 x 78.2 x 8.8 mm, 195g",
      buildMaterials: "Glass front, durable polycarbonate rear panel with fine linear patterned texture, rounded ergonomic edges",
      simSlot: "Triple Slot: SIM 1 + SIM 2 + dedicated MicroSD expansion slot",
      waterResistance: "Standard daily splash resistance",
      stabilization: "Digital Video Stabilization",
      videoRecording: "FHD (1920 x 1080) @ 60fps / @ 30fps, Slow Motion 120fps @ HD",
      opticsFeatures: "50MP f/1.8 autofocus lens, 10x digital zoom, Portrait Mode with Depth sensing, Pro Mode, Food Mode, Night Mode",
      frontVideoRecording: "FHD (1920 x 1080) @ 30fps",
      wirelessCharging: "Not supported (25W Super Fast Wired Charging via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4G+5GHz VHT80), Bluetooth 5.3, GPS/Glonass/Beidou/Galileo",
      specialHardware: "Samsung Knox security platform, linear patterned back panel with anti-smudge coating",
      biometricsAudio: "Face Unlock, loudspeaker, Dolby Atmos audio enhancement for wired earphones, 3.5mm stereo earjack"
    },
    releaseDate: "2023-10-15",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Samsung Galaxy A05 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Samsung Galaxy A05 price in Pakistan starts at Rs. 21,299. Features 50MP main camera, 5000mAh battery with 25W charging, 6.7-inch screen, and Helio G85."
  },

  "realme-c61": {
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
    colors: ["Safari Green", "Sparkle Gold"],
    colorHexes: {
      "Safari Green": "#264740",
      "Sparkle Gold": "#EFE1BE"
    },
    colorImages: {
      "Safari Green": "/images/phones/realme-c61-dark-green.webp",
      "Sparkle Gold": "/images/phones/realme-c61-sparkle-gold.webp"
    },
    image: "/images/phones/realme-c61-dark-green.webp",
    images: [
      "/images/phones/realme-c61-dark-green.webp",
      "/images/phones/realme-c61-sparkle-gold.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Gujranwala"],
    specs: {
      display: "6.74\" 90Hz Eye Comfort Sunlight Display, 560 nits Peak Brightness, 180Hz Touch Sampling Rate, DC Dimming",
      refreshRate: "90Hz Eye Comfort Display",
      processor: "Unisoc T612 (12nm) High-Efficiency Octa-Core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with ARM Mali-G57 GPU",
      ram: "6GB LPDDR4X (+6GB Dynamic Virtual RAM = 12GB Effective Memory)",
      storage: "128GB High-Speed Storage, dedicated microSD expansion up to 2TB",
      mainCamera: "50MP AI Primary Camera (f/1.8 aperture, 5P lens, PDAF) + Auxiliary Depth Sensor with LED Flash",
      selfieCamera: "5MP AI Front Camera (f/2.22, 3P lens, 78° FOV) with AI Portrait Retouching",
      battery: "5000 mAh Massive Battery with 4-Year Battery Health Durability Guarantee (≥80% capacity after 1000 cycles)",
      charging: "15W Quick Charge via USB Type-C with multi-level voltage protection",
      os: "realme UI based on Android 14 (48-Month TÜV Fluency Certified, Mini Capsule 2.0 & Dynamic Button)",
      network: "4G LTE Dual SIM, IP54 Water & Dust Resistance, ArmorShell Drop Protection, Side Fingerprint Scanner",
      resolution: "HD+ (1600 x 720 pixels), 20:9 ratio (~260 ppi, 90.3% screen-to-body ratio)",
      peakBrightness: "560 nits peak brightness, 450 nits typical",
      hdrSupport: "90Hz refresh rate, 16.7M colors, TÜV Rheinland High Reliability Certified",
      dimensions: "167.26 x 76.67 x 7.84 mm, 188g (Ultra-Slim 7.84mm Metallic Frame)",
      buildMaterials: "Integrated metallic high-gloss frame, ArmorShell drop-resistant structural matrix, anti-scratch back",
      simSlot: "Triple Slot: Dual SIM (Nano-SIM, dual stand-by) + dedicated microSDXC slot",
      waterResistance: "IP54 dust & water resistance with Rainwater Smart Touch protection",
      stabilization: "Electronic Image Stabilization (EIS) on video",
      videoRecording: "1080p @ 30fps, 720p @ 30fps, 480p @ 30fps",
      opticsFeatures: "50MP AI camera, Night Mode, Portrait Bokeh, Street Filter, HDR, Panoramic View, Pro Mode, Time-lapse",
      frontVideoRecording: "720p @ 30fps, 480p @ 30fps",
      wirelessCharging: "Not supported (15W Quick Charge wired via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz / 5GHz dual band), Bluetooth 5.0, GPS/AGPS/GLONASS/BDS/Galileo",
      specialHardware: "ArmorShell drop-resistant structural matrix, Mini Capsule 2.0 interactive notifications, Dynamic Button",
      biometricsAudio: "Side-mounted capacitive fingerprint sensor, Face Unlock, UltraBoom speaker with 150% volume boost, 3.5mm audio jack"
    },
    releaseDate: "2024-06-28",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Realme C61 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Realme C61 price in Pakistan starts at Rs. 29,499. Features ultra-slim 7.84mm metallic frame, 50MP AI camera, 5000mAh battery, and IP54 ArmorShell design."
  },

  "vivo-y17s": {
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
    colors: ["Glitter Purple", "Forest Green", "Diamond Orange"],
    colorHexes: {
      "Glitter Purple": "#800080",
      "Forest Green": "#009460",
      "Diamond Orange": "#E67E22"
    },
    colorImages: {
      "Glitter Purple": "/images/phones/vivo-y17s-glitter-purple.webp",
      "Forest Green": "/images/phones/vivo-y17s-forest-green.webp",
      "Diamond Orange": "/images/phones/vivo-y17s-diamond-orange.webp"
    },
    image: "/images/phones/vivo-y17s-glitter-purple.webp",
    images: [
      "/images/phones/vivo-y17s-glitter-purple.webp",
      "/images/phones/vivo-y17s-forest-green.webp",
      "/images/phones/vivo-y17s-diamond-orange.webp"
    ],
    popularInCities: ["Lahore", "Karachi", "Multan", "Islamabad", "Faisalabad"],
    specs: {
      display: "6.56\" 90Hz Sunlight IPS Display, 840 nits Peak Brightness, 83% NTSC Color Gamut, TÜV Low Blue Light",
      refreshRate: "90Hz Sunlight IPS Display",
      processor: "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with ARM Mali-G52 MC2 GPU",
      ram: "6GB LPDDR4X (+6GB Extended Virtual RAM 3.0 = 12GB Total Memory)",
      storage: "128GB eMMC 5.1 Storage, dedicated microSD slot expandable up to 1TB",
      mainCamera: "50MP Ultra-Clear Main (f/1.8, PDAF) + 2MP Bokeh Camera (f/2.4) with LED Flash",
      selfieCamera: "8MP Front Camera (f/2.0) with Aura Screen Light for Low-Light Selfies",
      battery: "5000 mAh High-Capacity Battery with Smart Overnight Charging Protection",
      charging: "15W FlashCharge via USB Type-C",
      os: "Funtouch OS 13 based on Android 13 (Upgradable to Android 14 with Funtouch OS 14)",
      network: "4G LTE Dual SIM, IP54 Dust & Splash Resistance, Side-mounted Capacitive Fingerprint Scanner, 3.5mm Earphone Jack",
      resolution: "HD+ (1612 x 720 pixels), 20.1:9 ratio (~269 ppi)",
      peakBrightness: "840 nits peak outdoor brightness under direct sunlight, 500 nits typical",
      hdrSupport: "83% NTSC wide color saturation, TÜV Rheinland Low Blue Light certified",
      dimensions: "163.74 x 75.43 x 8.09 mm, 186g",
      buildMaterials: "2.5D composite frosted matte back cover, metallic finish camera deco ring, anti-fingerprint coating",
      simSlot: "Triple Slot: Dual Nano-SIM (Dual Standby) + dedicated MicroSD card slot",
      waterResistance: "IP54 dust and splash resistance rating",
      stabilization: "Electronic Image Stabilization (EIS)",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "50MP f/1.8 main camera, Super Night Mode, Portrait Bokeh Flare, Live Photo, Slow Motion, Time-Lapse, Document Scanning",
      frontVideoRecording: "1080p @ 30fps with Aura Screen Light fill",
      wirelessCharging: "Not supported (15W FlashCharge wired via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (dual-band 2.4GHz / 5GHz), Bluetooth 5.0, GPS/BeiDou/GLONASS/Galileo/QZSS",
      specialHardware: "Audio Booster mode up to 150%, 2.5D curved frosted back texture",
      biometricsAudio: "Side-mounted capacitive fingerprint scanner (0.24s unlock), Face Unlock, 150% volume booster loudspeaker, 3.5mm earphone jack"
    },
    releaseDate: "2023-09-18",
    tags: ["budget", "battery", "trending"],
    metaTitle: "Vivo Y17s Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Vivo Y17s price in Pakistan starts at Rs. 32,499. Features 50MP portrait camera, 6.56-inch sunlight display, 5000mAh battery, and IP54 rating."
  }
};

function repairPhones() {
  console.log('--- REPAIRING 5 RECENT PHONES ---');

  // Load existing phones from src/data/phones.json
  const phones = JSON.parse(fs.readFileSync(PHONES_JSON_SRC, 'utf8'));
  console.log('Current phone database size:', phones.length);

  let repairedCount = 0;
  for (let i = 0; i < phones.length; i++) {
    const id = phones[i].id;
    if (REPAIRED_PHONES[id]) {
      console.log(`Rebuilding phone record [${id}] with full specifications & colorImages`);
      phones[i] = REPAIRED_PHONES[id];
      repairedCount++;
    }
  }

  if (repairedCount !== 5) {
    throw new Error(`Expected to repair 5 phones, but repaired ${repairedCount}`);
  }

  const updatedJson = JSON.stringify(phones, null, 2);

  // Write to all JSON locations
  fs.writeFileSync(PHONES_JSON_SRC, updatedJson, 'utf8');
  fs.writeFileSync(PHONES_JSON_ROOT, updatedJson, 'utf8');
  if (fs.existsSync(PHONES_JSON_PUBLIC)) {
    fs.writeFileSync(PHONES_JSON_PUBLIC, updatedJson, 'utf8');
  }

  // Update src/data/phones.ts
  const rawPhonesTs = fs.readFileSync(PHONES_TS_PATH, 'utf8');
  const arrayStartMarker = 'export const PHONES_DATA: PhoneSpec[] = ';
  const arrayEndMarker = '\nexport const BRANDS: BrandInfo[] = BRAND_DEFINITIONS';

  const startIndex = rawPhonesTs.indexOf(arrayStartMarker);
  const endIndex = rawPhonesTs.indexOf(arrayEndMarker);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Could not find PHONES_DATA markers in src/data/phones.ts');
  }

  const prefix = rawPhonesTs.substring(0, startIndex + arrayStartMarker.length);
  const suffix = rawPhonesTs.substring(endIndex);

  const newTsContent = `${prefix}${updatedJson};\n${suffix}`;
  fs.writeFileSync(PHONES_TS_PATH, newTsContent, 'utf8');

  console.log('Successfully repaired and updated all 5 phones across all data files!');
}

repairPhones();
