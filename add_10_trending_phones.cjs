/**
 * add_10_trending_phones.cjs
 * Appends exactly 10 new, trending, highly-searched smartphones to PakMobile Arena
 * Baseline: 79 phones -> Target: exactly 89 phones.
 */
const fs = require('fs');
const path = require('path');

const PHONES_TS_PATH = path.join(__dirname, 'src/data/phones.ts');
const PHONES_JSON_SRC = path.join(__dirname, 'src/data/phones.json');
const PHONES_JSON_ROOT = path.join(__dirname, 'phones.json');
const PHONES_JSON_PUBLIC = path.join(__dirname, 'public/phones.json');

const NEW_10_PHONES = [
  {
    id: "samsung-galaxy-s24",
    name: "Samsung Galaxy S24",
    brand: "Samsung",
    model: "Galaxy S24 (8GB/128GB)",
    pricePKR: 207999,
    price: 207999,
    officialPricePKR: 269999,
    marketPriceRangePKR: { min: 204999, max: 215000 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 125000,
      cnicTaxPKR: 152000,
      status: "Official PTA Approved",
      isLocallyAssembled: false
    },
    ptaPassportTax: 125000,
    ptaCnicTax: 152000,
    isLocallyAssembled: false,
    releaseDate: "January 2024",
    image: "/images/phones/samsung-galaxy-s24-onyx-black.webp",
    tags: ["flagship", "compact", "camera", "trending"],
    specs: {
      display: "6.2\" Dynamic AMOLED 2X, FHD+ (2340 x 1080), 1-120Hz LTPO Adaptive Refresh Rate, HDR10+, 2600 nits Peak Brightness, Corning Gorilla Glass Victus 2",
      refreshRate: "120Hz Dynamic LTPO AMOLED 2X",
      processor: "Samsung Exynos 2400 (4nm) Deca-Core (1x3.2 GHz Cortex-X4 & 2x2.9 GHz Cortex-A720 & 3x2.6 GHz Cortex-A720 & 4x1.95 GHz Cortex-A520) with Xclipse 940 GPU",
      ram: "8GB LPDDR5X (+ 8GB RAM Plus)",
      storage: "128GB / 256GB UFS 4.0 High-Speed Internal Storage",
      mainCamera: "50MP Wide (f/1.8, 24mm, Dual Pixel PDAF, OIS) + 10MP Telephoto (3x Optical Zoom, f/2.4, OIS) + 12MP Ultra-Wide (120˚ FOV, f/2.2)",
      selfieCamera: "12MP Dual Pixel Front Camera (f/2.2, 26mm, Dual Pixel PDAF, 4K@60fps UHD)",
      battery: "4000 mAh Li-Ion Intelligent All-Day Battery",
      charging: "25W Super Fast Charging (50% in 30 mins) + 15W Fast Wireless Charging 2.0 + 4.5W Wireless PowerShare",
      os: "Android 14 with One UI 6.1 (Guaranteed 7 Major Android OS Upgrades & 7 Years Security Updates, Galaxy AI Suite)",
      network: "5G Dual SIM (Nano-SIM and eSIM, dual stand-by), IP68 Dust/Water Resistant (1.5m for 30 mins), Enhanced Armor Aluminum Frame, Stereo Speakers tuned by AKG with Dolby Atmos",
      resolution: "Dynamic AMOLED 2X FHD+ (2340 x 1080 pixels), 19.5:9 ratio (~416 ppi)",
      peakBrightness: "2600 nits peak brightness, Vision Booster",
      hdrSupport: "HDR10+, 1-120Hz LTPO adaptive refresh rate",
      dimensions: "147.0 x 70.6 x 7.6 mm, 167g",
      buildMaterials: "Armor Aluminum 2 frame; Corning Gorilla Glass Victus 2 front and back",
      simSlot: "Dual SIM (2 Nano-SIMs and eSIM, dual stand-by)",
      waterResistance: "IP68 water & dust resistant (up to 1.5m for 30 mins)",
      stabilization: "OIS (Optical Image Stabilization) on main and telephoto lenses + Super Steady gyro-EIS",
      videoRecording: "8K @ 24/30fps, 4K @ 30/60fps, 1080p @ 30/60/240fps, HDR10+, stereo audio rec.",
      opticsFeatures: "50MP Dual Pixel sensor, 3x optical zoom, 30x Space Zoom, ProVisual Engine, Nightography",
      frontVideoRecording: "4K @ 30/60fps, 1080p @ 30fps with Dual Pixel AF",
      wirelessCharging: "15W Fast Wireless Charging, 4.5W reverse Wireless PowerShare",
      wifiBluetooth: "Wi-Fi 6E (802.11ax tri-band), Bluetooth 5.3, NFC",
      specialHardware: "Samsung DeX desktop mode support, Galaxy AI Suite with Circle to Search and Live Translate",
      biometricsAudio: "Ultrasonic under-display fingerprint scanner, stereo speakers tuned by AKG with Dolby Atmos"
    },
    variants: [
      {
        id: "samsung-galaxy-s24-8-128",
        name: "8GB / 128GB",
        ram: "8GB LPDDR5X",
        storage: "128GB UFS 4.0",
        pricePKR: 207999,
        officialPricePKR: 269999,
        marketPriceRangePKR: { min: 204999, max: 215000 }
      },
      {
        id: "samsung-galaxy-s24-8-256",
        name: "8GB / 256GB",
        ram: "8GB LPDDR5X",
        storage: "256GB UFS 4.0",
        pricePKR: 224999,
        officialPricePKR: 289999,
        marketPriceRangePKR: { min: 220000, max: 230000 }
      }
    ],
    colors: ["Onyx Black", "Marble Grey", "Cobalt Violet", "Amber Yellow"],
    colorHexes: {
      "Onyx Black": "#222222",
      "Marble Grey": "#D6D6D6",
      "Cobalt Violet": "#4B4453",
      "Amber Yellow": "#E6D8A8"
    },
    colorImages: {
      "Onyx Black": "/images/phones/samsung-galaxy-s24-onyx-black.webp",
      "Marble Grey": "/images/phones/samsung-galaxy-s24-marble-grey.webp",
      "Cobalt Violet": "/images/phones/samsung-galaxy-s24-cobalt-violet.webp",
      "Amber Yellow": "/images/phones/samsung-galaxy-s24-amber-yellow.webp"
    },
    images: [
      "/images/phones/samsung-galaxy-s24-onyx-black.webp",
      "/images/phones/samsung-galaxy-s24-marble-grey.webp",
      "/images/phones/samsung-galaxy-s24-cobalt-violet.webp",
      "/images/phones/samsung-galaxy-s24-amber-yellow.webp"
    ],
    popularInCities: ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad"],
    metaTitle: "Samsung Galaxy S24 Price in Pakistan & Specs",
    metaDescription: "Official Samsung Galaxy S24 price in Pakistan starts at Rs. 207,999. Features 6.2-inch 120Hz Dynamic AMOLED 2X, Exynos 2400, 50MP OIS camera, and Galaxy AI."
  },
  {
    id: "apple-iphone-16",
    name: "Apple iPhone 16",
    brand: "Apple",
    model: "iPhone 16 (128GB)",
    pricePKR: 321999,
    price: 321999,
    officialPricePKR: 339999,
    marketPriceRangePKR: { min: 318000, max: 335000 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 132000,
      cnicTaxPKR: 162000,
      status: "Official PTA Approved",
      isLocallyAssembled: false
    },
    ptaPassportTax: 132000,
    ptaCnicTax: 162000,
    isLocallyAssembled: false,
    releaseDate: "September 2024",
    image: "/images/phones/apple-iphone-16-black.webp",
    tags: ["flagship", "camera", "apple-intelligence", "trending"],
    specs: {
      display: "6.1\" Super Retina XDR OLED, 2556 x 1179 pixels (~460 ppi), Dynamic Island, HDR, True Tone, 2000 nits Peak Outdoor Brightness, 1 nit Minimum Brightness, Latest-Generation Ceramic Shield",
      refreshRate: "60Hz Super Retina XDR OLED",
      processor: "Apple A18 Chip (3nm) with 6-core CPU (2 performance and 4 efficiency cores), 5-core GPU, and 16-core Neural Engine",
      ram: "8GB RAM (optimized for Apple Intelligence)",
      storage: "128GB / 256GB / 512GB NVMe High-Speed Storage",
      mainCamera: "48MP Fusion Camera (26mm, f/1.6, sensor-shift OIS, 100% Focus Pixels, support for super-high-resolution 24MP/48MP photos) + 12MP 2x Telephoto (52mm, f/1.6) + 12MP Ultra-Wide (13mm, f/2.2, 120˚ FOV, Macro photography, autofocus)",
      selfieCamera: "12MP TrueDepth Front Camera (f/1.9, autofocus with Focus Pixels, Retina Flash, 4K Dolby Vision HDR recording up to 60 fps)",
      battery: "3561 mAh Li-Ion Rechargeable Battery with up to 22 hours video playback",
      charging: "Fast wired charging (up to 50% charge in 30 minutes with 20W+ adapter) + 25W MagSafe wireless charging (with 30W+ adapter) + 15W Qi2 wireless",
      os: "iOS 18 (with Apple Intelligence personal intelligence system, Audio Mix, and Siri improvements)",
      network: "5G (sub-6 GHz), Gigabit LTE, Dual SIM (nano-SIM and eSIM, dual eSIM support), IP68 Dust/Water Resistant (6m for up to 30 mins), Aerospace-grade Aluminum Enclosure, Stereo Speakers",
      resolution: "Super Retina XDR OLED (2556 x 1179 pixels), 19.5:9 ratio (~460 ppi)",
      peakBrightness: "2000 nits peak outdoor brightness, 1000 nits max typical, 1600 nits peak HDR",
      hdrSupport: "HDR with Dolby Vision, HDR10, and HLG",
      dimensions: "147.6 x 71.6 x 7.80 mm, 170g",
      buildMaterials: "Aerospace-grade aluminum design; color-infused glass back; latest-generation Ceramic Shield front",
      simSlot: "Dual SIM (nano-SIM and eSIM; dual eSIM support)",
      waterResistance: "IP68 rated under IEC standard 60529 (maximum depth of 6 meters up to 30 minutes)",
      stabilization: "Sensor-shift Optical Image Stabilization (OIS) on 48MP Fusion Camera",
      videoRecording: "4K Dolby Vision @ 24/25/30/60 fps, 1080p Dolby Vision @ 25/30/60 fps, Cinematic mode up to 4K HDR @ 30 fps, Action mode up to 2.8K @ 60 fps, Spatial Video recording @ 1080p 30 fps",
      opticsFeatures: "Camera Control button (tactile click + capacitive touch for zoom and depth), Photonic Engine, Deep Fusion, Smart HDR 5, Next-generation portraits with Focus and Depth Control",
      frontVideoRecording: "4K Dolby Vision @ 24/25/30/60 fps, 1080p @ 25/30/60 fps with Cinematic video stabilization",
      wirelessCharging: "Up to 25W MagSafe wireless charging, 15W Qi2 wireless charging",
      wifiBluetooth: "Wi-Fi 7 (802.11be) with 2x2 MIMO, Bluetooth 5.3, Second-generation Ultra Wideband chip, Thread networking",
      specialHardware: "Dedicated Camera Control sapphire crystal switch, Action Button, Spatial Audio capture with Wind Noise Reduction and Studio Quality mics",
      biometricsAudio: "Face ID facial recognition via TrueDepth camera, Spatial Audio playback with Dolby Atmos"
    },
    variants: [
      {
        id: "apple-iphone-16-128",
        name: "128GB",
        ram: "8GB",
        storage: "128GB NVMe",
        pricePKR: 321999,
        officialPricePKR: 339999,
        marketPriceRangePKR: { min: 318000, max: 335000 }
      },
      {
        id: "apple-iphone-16-256",
        name: "256GB",
        ram: "8GB",
        storage: "256GB NVMe",
        pricePKR: 354999,
        officialPricePKR: 374999,
        marketPriceRangePKR: { min: 350000, max: 365000 }
      }
    ],
    colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
    colorHexes: {
      "Black": "#2E2F32",
      "White": "#F2F3F5",
      "Pink": "#EDB3C0",
      "Teal": "#89C7C7",
      "Ultramarine": "#4A6FA5"
    },
    colorImages: {
      "Black": "/images/phones/apple-iphone-16-black.webp",
      "White": "/images/phones/apple-iphone-16-white.webp",
      "Pink": "/images/phones/apple-iphone-16-pink.webp",
      "Teal": "/images/phones/apple-iphone-16-teal.webp",
      "Ultramarine": "/images/phones/apple-iphone-16-ultramarine.webp"
    },
    images: [
      "/images/phones/apple-iphone-16-black.webp",
      "/images/phones/apple-iphone-16-white.webp",
      "/images/phones/apple-iphone-16-pink.webp",
      "/images/phones/apple-iphone-16-teal.webp",
      "/images/phones/apple-iphone-16-ultramarine.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar"],
    metaTitle: "Apple iPhone 16 Price in Pakistan & Specs",
    metaDescription: "Apple iPhone 16 price in Pakistan starts at Rs. 321,999. Features A18 chip, Camera Control, 48MP Fusion camera, Dynamic Island, and Apple Intelligence."
  },
  {
    id: "xiaomi-14t-pro",
    name: "Xiaomi 14T Pro",
    brand: "Xiaomi",
    model: "14T Pro (12GB/512GB)",
    pricePKR: 229999,
    price: 229999,
    officialPricePKR: 249999,
    marketPriceRangePKR: { min: 225000, max: 235000 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 115000,
      cnicTaxPKR: 138000,
      status: "Official PTA Approved",
      isLocallyAssembled: false
    },
    ptaPassportTax: 115000,
    ptaCnicTax: 138000,
    isLocallyAssembled: false,
    releaseDate: "September 2024",
    image: "/images/phones/xiaomi-14t-pro-titan-black.webp",
    tags: ["flagship", "leica-camera", "performance", "trending"],
    specs: {
      display: "6.67\" 1.5K CrystalRes AMOLED, 2712 x 1220 pixels, 144Hz Refresh Rate, 4000 nits Peak Brightness, 3840Hz PWM Dimming, HDR10+, Dolby Vision, Corning Gorilla Glass 5",
      refreshRate: "144Hz 1.5K CrystalRes AMOLED",
      processor: "MediaTek Dimensity 9300+ (4nm) Octa-Core (1x3.4 GHz Cortex-X4 & 3x2.85 GHz Cortex-X4 & 4x2.0 GHz Cortex-A720) with Immortalis-G720 MC12 GPU",
      ram: "12GB LPDDR5X",
      storage: "512GB UFS 4.0 Ultra-High-Speed Storage",
      mainCamera: "Leica Vario-Summilux 50MP Main (Light Fusion 900, 1/1.31\", f/1.6, 23mm, OIS) + 50MP Leica Telephoto (60mm, f/2.0, OIS) + 12MP Leica Ultra-Wide (15mm, f/2.2, 120˚ FOV)",
      selfieCamera: "32MP Front Camera (f/2.0, 25mm, HDR, 4K@30fps UHD)",
      battery: "5000 mAh Li-Po High-Capacity Battery",
      charging: "120W HyperCharge wired (100% in 19 mins) + 50W Wireless HyperCharge (100% in 45 mins)",
      os: "Xiaomi HyperOS based on Android 14 (with Advanced AI features and Google Gemini integration)",
      network: "5G Dual SIM (Nano-SIM + Nano-SIM or eSIM), IP68 Dust/Water Resistant (2m for 30 mins), High-strength 6M13 Aluminum Alloy frame, Stereo Dual Speakers with Dolby Atmos and Hi-Res Audio",
      resolution: "1.5K CrystalRes AMOLED (2712 x 1220 pixels), 20:9 ratio (~446 ppi)",
      peakBrightness: "4000 nits peak brightness, 1600 nits HBM",
      hdrSupport: "Dolby Vision, HDR10+, 144Hz AI adaptive refresh rate",
      dimensions: "160.4 x 75.1 x 8.39 mm, 209g",
      buildMaterials: "High-strength 6M13 Aluminum alloy frame; 3D curved glass back; Corning Gorilla Glass 5 front",
      simSlot: "Dual SIM (Nano-SIM + Nano-SIM or Nano-SIM + eSIM)",
      waterResistance: "IP68 water & dust resistant (up to 2m for 30 mins)",
      stabilization: "OIS (Optical Image Stabilization) on main 50MP Light Fusion 900 sensor and telephoto lens",
      videoRecording: "8K @ 24/30fps, 4K @ 24/30/60fps, 1080p @ 30/60/120/240/960fps, 10-bit Log recording, HDR10+",
      opticsFeatures: "Leica Authentic Look, Leica Vibrant Look, Master Portrait system, 35mm Documentary, 50mm Swirly Bokeh, 75mm Portrait, 90mm Soft Focus lens styles",
      frontVideoRecording: "4K @ 30fps, 1080p @ 30/60fps with HDR",
      wirelessCharging: "50W Wireless HyperCharge (100% in 45 minutes)",
      wifiBluetooth: "Wi-Fi 7 capability, Bluetooth 5.4, Dual Bluetooth, NFC",
      specialHardware: "Xiaomi 3D IceLoop cooling system with vapor-liquid separation, Surge P2 charging chip and Surge G1 battery management chip",
      biometricsAudio: "In-screen optical fingerprint scanner, AI face unlock, stereo speakers with Dolby Atmos"
    },
    variants: [
      {
        id: "xiaomi-14t-pro-12-512",
        name: "12GB / 512GB",
        ram: "12GB LPDDR5X",
        storage: "512GB UFS 4.0",
        pricePKR: 229999,
        officialPricePKR: 249999,
        marketPriceRangePKR: { min: 225000, max: 235000 }
      }
    ],
    colors: ["Titan Black", "Titan Gray", "Titan Blue"],
    colorHexes: {
      "Titan Black": "#2C2D30",
      "Titan Gray": "#94969A",
      "Titan Blue": "#3B4E61"
    },
    colorImages: {
      "Titan Black": "/images/phones/xiaomi-14t-pro-titan-black.webp",
      "Titan Gray": "/images/phones/xiaomi-14t-pro-titan-gray.webp",
      "Titan Blue": "/images/phones/xiaomi-14t-pro-titan-blue.webp"
    },
    images: [
      "/images/phones/xiaomi-14t-pro-titan-black.webp",
      "/images/phones/xiaomi-14t-pro-titan-gray.webp",
      "/images/phones/xiaomi-14t-pro-titan-blue.webp"
    ],
    popularInCities: ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Multan"],
    metaTitle: "Xiaomi 14T Pro Price in Pakistan & Specs",
    metaDescription: "Xiaomi 14T Pro price in Pakistan starts at Rs. 229,999. Features Leica 50MP camera, Dimensity 9300+, 144Hz AMOLED, 120W HyperCharge, and 50W wireless."
  },
  {
    id: "vivo-y19s",
    name: "Vivo Y19s",
    brand: "Vivo",
    model: "Y19s (4GB/128GB)",
    pricePKR: 34499,
    price: 34499,
    officialPricePKR: 37999,
    marketPriceRangePKR: { min: 33999, max: 35999 },
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
    releaseDate: "October 2024",
    image: "/images/phones/vivo-y19s-glossy-black.webp",
    tags: ["budget", "battery", "durability", "trending"],
    specs: {
      display: "6.68\" 90Hz Sunlight Dotch Display, HD+ (1608 x 720 pixels), 1000 nits Peak HBM Brightness, TÜV Rheinland Low Blue Light Certified",
      refreshRate: "90Hz Sunlight Dotch Display",
      processor: "Unisoc T612 (12nm) Octa-Core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with Mali-G57 GPU",
      ram: "4GB LPDDR4X (+ 4GB Extended RAM)",
      storage: "128GB eMMC 5.1 Internal Storage (MicroSD expandable up to 1TB)",
      mainCamera: "50MP Ultra HD Main Camera (f/1.8) + 0.08MP Auxiliary sensor with Multi-Color Dynamic Light Ring Notification",
      selfieCamera: "5MP Front Camera (f/2.2) with Aura Screen Light",
      battery: "5500 mAh Ultra-Large Battery with 4-Year Battery Health durability rating",
      charging: "15W FlashCharge via USB Type-C",
      os: "Funtouch OS 14 based on Android 14",
      network: "4G LTE Dual SIM, IP64 Dust & Water Resistance, Anti-Drop 360° Armor Body protection, Dual Stereo Speakers with 300% Audio Booster, Side-mounted Fingerprint Scanner",
      resolution: "HD+ (1608 x 720 pixels), 20:9 ratio (~264 ppi)",
      peakBrightness: "1000 nits High Brightness Mode (HBM)",
      hdrSupport: "TÜV Rheinland Low Blue Light eye protection",
      dimensions: "165.75 x 76.10 x 8.10 mm, 198g",
      buildMaterials: "Drop-resistant composite body with reinforced corner cushions and curved frame",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD slot",
      waterResistance: "IP64 dust and splash resistant rating with Wet-Hand Touch capability",
      stabilization: "Electronic Image Stabilization (EIS)",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "50MP Ultra HD mode, Night Mode, Portrait Bokeh, Dynamic Light RGB ring for music rhythm and notifications",
      frontVideoRecording: "1080p @ 30fps with Aura Screen fill light",
      wirelessCharging: "Not supported (15W wired FlashCharge)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (dual-band 2.4GHz / 5GHz), Bluetooth 5.2, GPS",
      specialHardware: "Dynamic Light ring LED sync with music and incoming calls, 300% Ultra Volume dual speakers",
      biometricsAudio: "Side-mounted capacitive fingerprint scanner, Face Unlock, Dual Stereo Speakers with sound booster"
    },
    variants: [
      {
        id: "vivo-y19s-4-128",
        name: "4GB / 128GB",
        ram: "4GB LPDDR4X",
        storage: "128GB",
        pricePKR: 34499,
        officialPricePKR: 37999,
        marketPriceRangePKR: { min: 33999, max: 35999 }
      }
    ],
    colors: ["Glossy Black", "Pearl Silver", "Glacier Blue"],
    colorHexes: {
      "Glossy Black": "#1A1A1A",
      "Pearl Silver": "#E5E5E5",
      "Glacier Blue": "#8AC4D0"
    },
    colorImages: {
      "Glossy Black": "/images/phones/vivo-y19s-glossy-black.webp",
      "Pearl Silver": "/images/phones/vivo-y19s-pearl-silver.webp",
      "Glacier Blue": "/images/phones/vivo-y19s-glacier-blue.webp"
    },
    images: [
      "/images/phones/vivo-y19s-glossy-black.webp",
      "/images/phones/vivo-y19s-pearl-silver.webp",
      "/images/phones/vivo-y19s-glacier-blue.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Multan", "Faisalabad", "Peshawar"],
    metaTitle: "Vivo Y19s Price in Pakistan & Specs",
    metaDescription: "Vivo Y19s price in Pakistan starts at Rs. 34,499. Features 5500mAh 4-year battery, 50MP camera, 90Hz display, Dynamic Light ring, and IP64 rating."
  },
  {
    id: "oppo-reno-12",
    name: "Oppo Reno 12",
    brand: "Oppo",
    model: "Reno 12 5G (12GB/256GB)",
    pricePKR: 147999,
    price: 147999,
    officialPricePKR: 159999,
    marketPriceRangePKR: { min: 144999, max: 152000 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 44000,
      cnicTaxPKR: 54000,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 44000,
    ptaCnicTax: 54000,
    isLocallyAssembled: true,
    releaseDate: "June 2024",
    image: "/images/phones/oppo-reno-12-astro-silver.webp",
    tags: ["premium-midrange", "camera", "ai-features", "trending"],
    specs: {
      display: "6.7\" Quad-Curved Infinite View 3D AMOLED, FHD+ (2412 x 1080), 120Hz Refresh Rate, 1200 nits Peak Brightness, 1.07 Billion Colors, Corning Gorilla Glass 7i, Splash Touch",
      refreshRate: "120Hz Quad-Curved 3D AMOLED",
      processor: "MediaTek Dimensity 7300-Energy for Reno (4nm) Octa-Core (4x2.5 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55) with Arm Mali-G615 MC2 GPU",
      ram: "12GB LPDDR4X (+ 12GB RAM Expansion = 24GB)",
      storage: "256GB / 512GB UFS 3.1 High-Speed Storage (expandable up to 1TB via MicroSD)",
      mainCamera: "50MP Sony LYT-600 Main Camera (1/1.95\", f/1.8, 26mm, OIS, All-Pixel Omni-Directional PDAF) + 8MP Ultra-Wide (112˚ FOV, f/2.2, Sony IMX355) + 2MP Macro (f/2.4)",
      selfieCamera: "32MP Front Camera (f/2.0, 21mm, autofocus, 4K@30fps UHD)",
      battery: "5000 mAh Large High-Density Battery (4-Year durable battery cycle)",
      charging: "80W SUPERVOOC Flash Charge (47% in 18 mins, 100% in 46 mins) with USB Power Delivery support",
      os: "ColorOS 14.1 based on Android 14 (GenAI Studio, AI Eraser 2.0, AI Smart Image Matting, AI Clear Voice)",
      network: "5G Dual SIM, IP65 Dust & Water Resistance, High-Strength Alloy Armor Frame with Sponge Bionic Cushioning, BeaconLink network-free Bluetooth calling up to 200m, Dual Stereo Speakers with 300% Ultra Volume",
      resolution: "Quad-Curved FHD+ (2412 x 1080 pixels), 20:9 ratio (~394 ppi)",
      peakBrightness: "1200 nits peak outdoor brightness, 600 nits typical",
      hdrSupport: "HDR10+, 1.07 Billion Colors (10-bit color depth)",
      dimensions: "161.4 x 74.1 x 7.60 mm, 177g",
      buildMaterials: "Aerospace-grade high-strength alloy framework; Corning Gorilla Glass 7i front; fluid 3D ripple texture back",
      simSlot: "Hybrid Dual SIM (Nano-SIM, dual stand-by or Nano-SIM + MicroSD)",
      waterResistance: "IP65 dust/water resistant with Splash Touch wet finger precision",
      stabilization: "Hardware Optical Image Stabilization (OIS) on 50MP Sony LYT-600 main camera",
      videoRecording: "4K @ 30fps, 1080p @ 30/60fps with gyro-EIS, Ultra Steady Video",
      opticsFeatures: "Sony LYT-600 sensor, AI Portrait Retouching, Pro Portrait mode, Flash Snapshot, AI Studio generative avatar styling",
      frontVideoRecording: "4K @ 30fps, 1080p @ 30fps with AF autofocus",
      wirelessCharging: "Not supported (80W wired SUPERVOOC included)",
      wifiBluetooth: "Wi-Fi 6 (802.11ax), Bluetooth 5.4, BeaconLink off-grid voice calling, NFC with 360° antenna",
      specialHardware: "BeaconLink technology for voice calls without SIM/Wi-Fi up to 200m, AI LinkBoost 360° antenna",
      biometricsAudio: "In-display optical fingerprint scanner, AI Face Unlock, dual stereo speakers with 300% volume boost"
    },
    variants: [
      {
        id: "oppo-reno-12-12-256",
        name: "12GB / 256GB",
        ram: "12GB LPDDR4X",
        storage: "256GB UFS 3.1",
        pricePKR: 147999,
        officialPricePKR: 159999,
        marketPriceRangePKR: { min: 144999, max: 152000 }
      }
    ],
    colors: ["Astro Silver", "Matte Brown"],
    colorHexes: {
      "Astro Silver": "#D8DCE0",
      "Matte Brown": "#4E3E37"
    },
    colorImages: {
      "Astro Silver": "/images/phones/oppo-reno-12-astro-silver.webp",
      "Matte Brown": "/images/phones/oppo-reno-12-matte-brown.webp"
    },
    images: [
      "/images/phones/oppo-reno-12-astro-silver.webp",
      "/images/phones/oppo-reno-12-matte-brown.webp"
    ],
    popularInCities: ["Lahore", "Karachi", "Islamabad", "Peshawar", "Rawalpindi"],
    metaTitle: "Oppo Reno 12 Price in Pakistan & Specs",
    metaDescription: "Oppo Reno 12 5G price in Pakistan starts at Rs. 147,999. Features Dimensity 7300-Energy, 50MP Sony OIS camera, 80W SUPERVOOC, and 120Hz Quad-Curved AMOLED."
  },
  {
    id: "realme-c63",
    name: "Realme C63",
    brand: "Realme",
    model: "C63 (8GB/128GB)",
    pricePKR: 50999,
    price: 50999,
    officialPricePKR: 54999,
    marketPriceRangePKR: { min: 49499, max: 52999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 4900,
      cnicTaxPKR: 6800,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 4900,
    ptaCnicTax: 6800,
    isLocallyAssembled: true,
    releaseDate: "June 2024",
    image: "/images/phones/realme-c63-leather-blue.webp",
    tags: ["budget", "fast-charging", "vegan-leather", "trending"],
    specs: {
      display: "6.74\" 90Hz Eye Comfort Display, HD+ (1600 x 720), 560 nits Peak Brightness, 180Hz Touch Sampling Rate, Mini Capsule 2.0, Rainwater Smart Touch",
      refreshRate: "90Hz Eye Comfort Display",
      processor: "Unisoc T612 (12nm) Octa-Core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with Mali-G57 GPU",
      ram: "8GB LPDDR4X (+ 8GB Dynamic RAM = 16GB)",
      storage: "128GB / 256GB Internal Storage (Dedicated MicroSD slot expandable up to 2TB)",
      mainCamera: "50MP AI Main Camera (f/1.8, 5P lens) + Depth auxiliary sensor with LED flash",
      selfieCamera: "8MP Selfie Camera (f/2.0, 4P lens)",
      battery: "5000 mAh Massive Battery with 38 levels of charging safety protection",
      charging: "45W Fast Charge (1 minute of charging delivers up to 1 hour of talk time, TÜV Rheinland Safe Fast-Charge System Certified)",
      os: "realme UI 5.0 based on Android 14 (with Air Gestures and Dynamic Button functionality)",
      network: "4G LTE Dual SIM, IP54 Dust & Water Resistance, Premium Vegan Leather finish, 200% UltraBoom Speaker, Side-mounted Fingerprint Scanner",
      resolution: "HD+ (1600 x 720 pixels), 20:9 ratio (~260 ppi)",
      peakBrightness: "560 nits peak outdoor brightness, 450 nits typical",
      hdrSupport: "TÜV Rheinland Low Blue Light certification",
      dimensions: "167.26 x 76.67 x 7.74 mm, 189g (Leather) / 191g (Jade)",
      buildMaterials: "Premium stain-resistant Vegan Leather back (Leather Blue) or Magic Glow texture (Jade Green)",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD card slot",
      waterResistance: "IP54 dust and splash resistant rating with Rainwater Smart Touch",
      stabilization: "Electronic Image Stabilization (EIS)",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "50MP AI photography, Night Mode, Panoramic View, Expert Mode, Portrait Mode with customizable bokeh",
      frontVideoRecording: "1080p @ 30fps with AI Beauty retouching",
      wirelessCharging: "Not supported (45W fast wired charging)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz / 5GHz), Bluetooth 5.0, 360° NFC",
      specialHardware: "Air Gestures for touchless scrolling/answering calls, customizable Dynamic Power Button, 360° NFC antenna",
      biometricsAudio: "Side-mounted capacitive fingerprint scanner, 200% UltraBoom loudspeaker with pulse audio"
    },
    variants: [
      {
        id: "realme-c63-8-128",
        name: "8GB / 128GB",
        ram: "8GB LPDDR4X",
        storage: "128GB",
        pricePKR: 50999,
        officialPricePKR: 54999,
        marketPriceRangePKR: { min: 49499, max: 52999 }
      }
    ],
    colors: ["Leather Blue", "Jade Green"],
    colorHexes: {
      "Leather Blue": "#2B4C7E",
      "Jade Green": "#5C8271"
    },
    colorImages: {
      "Leather Blue": "/images/phones/realme-c63-leather-blue.webp",
      "Jade Green": "/images/phones/realme-c63-jade-green.webp"
    },
    images: [
      "/images/phones/realme-c63-leather-blue.webp",
      "/images/phones/realme-c63-jade-green.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Gujranwala"],
    metaTitle: "Realme C63 Price in Pakistan & Specs",
    metaDescription: "Realme C63 price in Pakistan starts at Rs. 50,999. Features 45W fast charge, 50MP AI camera, vegan leather back, 90Hz display, and Air Gestures."
  },
  {
    id: "realme-note-60",
    name: "Realme Note 60",
    brand: "Realme",
    model: "Note 60 (4GB/64GB)",
    pricePKR: 24499,
    price: 24499,
    officialPricePKR: 26999,
    marketPriceRangePKR: { min: 23999, max: 25999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 3100,
      cnicTaxPKR: 4200,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 3100,
    ptaCnicTax: 4200,
    isLocallyAssembled: true,
    releaseDate: "August 2024",
    image: "/images/phones/realme-note-60-voyage-blue.webp",
    tags: ["budget", "entry-level", "durability", "trending"],
    specs: {
      display: "6.74\" 90Hz Eye Comfort Display, HD+ (1600 x 720), 560 nits Peak Brightness, 180Hz Touch Sampling Rate, Rainwater Smart Touch, Mini Capsule",
      refreshRate: "90Hz Eye Comfort Display",
      processor: "Unisoc T612 (12nm) Octa-Core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with Mali-G57 GPU",
      ram: "4GB LPDDR4X (+ 4GB Dynamic RAM = 8GB)",
      storage: "64GB / 128GB Internal Storage (Dedicated MicroSD slot expandable up to 2TB)",
      mainCamera: "32MP Super Clear AI Camera (f/1.8, 5P lens) with LED flash",
      selfieCamera: "5MP Selfie Camera (f/2.2)",
      battery: "5000 mAh Long-Lasting Battery with up to 1000 charging cycles support",
      charging: "10W Charging via USB Type-C",
      os: "realme UI based on Android 14",
      network: "4G LTE Dual SIM, IP64 Dust & Water Resistance, ArmorShell Protection with high-strength die-cast aluminum frame, 3.5mm Headphone Jack",
      resolution: "HD+ (1600 x 720 pixels), 20:9 ratio (~260 ppi)",
      peakBrightness: "560 nits peak outdoor brightness",
      hdrSupport: "TÜV Rheinland High Reliability certified",
      dimensions: "167.26 x 76.67 x 7.84 mm, 187g",
      buildMaterials: "ArmorShell structural protection; reinforced glass screen; die-cast aluminum inner structure",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD card slot",
      waterResistance: "IP64 dust and water splash resistance rating with Rainwater Smart Touch",
      stabilization: "Electronic Image Stabilization (EIS)",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "32MP high-resolution sensor, Night Mode, Portrait Mode, Filter presets",
      frontVideoRecording: "720p @ 30fps with AI Portrait Retouching",
      wirelessCharging: "Not supported (10W wired charging via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz / 5GHz), Bluetooth 5.0, GPS",
      specialHardware: "ArmorShell Protection system against bending and drops, Mini Capsule notification bar",
      biometricsAudio: "Side-mounted capacitive fingerprint scanner, loud audio speaker, 3.5mm audio jack"
    },
    variants: [
      {
        id: "realme-note-60-4-64",
        name: "4GB / 64GB",
        ram: "4GB LPDDR4X",
        storage: "64GB",
        pricePKR: 24499,
        officialPricePKR: 26999,
        marketPriceRangePKR: { min: 23999, max: 25999 }
      },
      {
        id: "realme-note-60-4-128",
        name: "4GB / 128GB",
        ram: "4GB LPDDR4X",
        storage: "128GB",
        pricePKR: 27499,
        officialPricePKR: 29999,
        marketPriceRangePKR: { min: 26999, max: 28999 }
      }
    ],
    colors: ["Voyage Blue", "Marble Black"],
    colorHexes: {
      "Voyage Blue": "#3A6073",
      "Marble Black": "#212121"
    },
    colorImages: {
      "Voyage Blue": "/images/phones/realme-note-60-voyage-blue.webp",
      "Marble Black": "/images/phones/realme-note-60-marble-black.webp"
    },
    images: [
      "/images/phones/realme-note-60-voyage-blue.webp",
      "/images/phones/realme-note-60-marble-black.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Multan", "Rawalpindi", "Sialkot"],
    metaTitle: "Realme Note 60 Price in Pakistan & Specs",
    metaDescription: "Realme Note 60 price in Pakistan starts at Rs. 24,499. Features ArmorShell IP64 protection, 32MP camera, 5000mAh battery, and 90Hz eye-comfort display."
  },
  {
    id: "infinix-hot-50",
    name: "Infinix Hot 50",
    brand: "Infinix",
    model: "Hot 50 (8GB/128GB)",
    pricePKR: 39999,
    price: 39999,
    officialPricePKR: 42999,
    marketPriceRangePKR: { min: 38999, max: 41499 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 3900,
      cnicTaxPKR: 5500,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 3900,
    ptaCnicTax: 5500,
    isLocallyAssembled: true,
    releaseDate: "September 2024",
    image: "/images/phones/infinix-hot-50-sleek-black.webp",
    tags: ["budget-gaming", "performance", "120hz-display", "trending"],
    specs: {
      display: "6.78\" 120Hz FHD+ Punch-Hole IPS Display, 2460 x 1080 pixels, 800 nits Peak Brightness, 240Hz Touch Sampling Rate, Dynamic Bar, Wet & Greasy Touch Control",
      refreshRate: "120Hz FHD+ Punch-Hole IPS",
      processor: "MediaTek Helio G100 (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with Mali-G57 MC2 GPU",
      ram: "8GB LPDDR4X (+ 8GB Extended RAM = 16GB)",
      storage: "128GB / 256GB UFS 2.2 Storage (Dedicated MicroSD slot expandable up to 2TB)",
      mainCamera: "50MP Ultra-Clear Main Camera (f/1.6, 1/2.8\", AF) + 2MP Depth + Auxiliary AI lens with Quad-LED Flash",
      selfieCamera: "8MP Front Camera (f/2.0) with Front LED Flash",
      battery: "5000 mAh High-Density Battery with 4-Year durable battery health certification",
      charging: "18W FastCharge with Bypass Charging and Reverse Wired Charging via USB Type-C",
      os: "XOS 14.5 based on Android 14 (with Folax AI Assistant, Dynamic Bar notifications)",
      network: "4G LTE Dual SIM, IP54 Splash & Dust Resistance, 7.7mm Ultra-Slim Profile, Dual Stereo Speakers with DTS Sound, TÜV 5-Year Fluency Certification",
      resolution: "FHD+ (2460 x 1080 pixels), 20.5:9 ratio (~396 ppi)",
      peakBrightness: "800 nits peak brightness, Always-On Display supported",
      hdrSupport: "TÜV Rheinland Low Blue Light certification",
      dimensions: "167.88 x 75.63 x 7.70 mm, 187g",
      buildMaterials: "7.7mm ultra-slim sleek composite design; metallic-textured camera module",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD card slot",
      waterResistance: "IP54 dust and splash resistant rating with Wet Touch precision",
      stabilization: "Electronic Image Stabilization (EIS)",
      videoRecording: "2K @ 30fps, 1080p @ 30/60fps with gyro-EIS",
      opticsFeatures: "50MP Super Night mode, Professional Portrait mode, Dual Video recording, Sky Shop aesthetic filters",
      frontVideoRecording: "2K @ 30fps, 1080p @ 30fps with front LED flash fill",
      wirelessCharging: "Not supported (18W wired FastCharge with Bypass Charging)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz / 5GHz), Bluetooth 5.2, NFC, FM Radio",
      specialHardware: "Helio G100 gaming engine, Bypass Charging mode for reduced gaming heat, Dynamic Bar notifications",
      biometricsAudio: "Side-mounted capacitive fingerprint scanner, dual speakers with DTS audio enhancement, 3.5mm audio jack"
    },
    variants: [
      {
        id: "infinix-hot-50-6-128",
        name: "6GB / 128GB",
        ram: "6GB LPDDR4X",
        storage: "128GB UFS 2.2",
        pricePKR: 36999,
        officialPricePKR: 39999,
        marketPriceRangePKR: { min: 35999, max: 37999 }
      },
      {
        id: "infinix-hot-50-8-128",
        name: "8GB / 128GB",
        ram: "8GB LPDDR4X",
        storage: "128GB UFS 2.2",
        pricePKR: 39999,
        officialPricePKR: 42999,
        marketPriceRangePKR: { min: 38999, max: 41499 }
      }
    ],
    colors: ["Sleek Black", "Titanium Grey", "Sage Green"],
    colorHexes: {
      "Sleek Black": "#1D1E20",
      "Titanium Grey": "#75787B",
      "Sage Green": "#829384"
    },
    colorImages: {
      "Sleek Black": "/images/phones/infinix-hot-50-sleek-black.webp",
      "Titanium Grey": "/images/phones/infinix-hot-50-titanium-grey.webp",
      "Sage Green": "/images/phones/infinix-hot-50-sage-green.webp"
    },
    images: [
      "/images/phones/infinix-hot-50-sleek-black.webp",
      "/images/phones/infinix-hot-50-titanium-grey.webp",
      "/images/phones/infinix-hot-50-sage-green.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Gujranwala"],
    metaTitle: "Infinix Hot 50 Price in Pakistan & Specs",
    metaDescription: "Infinix Hot 50 price in Pakistan starts at Rs. 39,999. Features Helio G100 processor, 120Hz FHD+ display, 50MP camera, 7.7mm slim design, and IP54 rating."
  },
  {
    id: "tecno-spark-30",
    name: "Tecno Spark 30",
    brand: "Tecno",
    model: "Spark 30 (8GB/128GB)",
    pricePKR: 38999,
    price: 38999,
    officialPricePKR: 41999,
    marketPriceRangePKR: { min: 37999, max: 40499 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 3900,
      cnicTaxPKR: 5500,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 3900,
    ptaCnicTax: 5500,
    isLocallyAssembled: true,
    releaseDate: "September 2024",
    image: "/images/phones/tecno-spark-30-stellar-shadow.webp",
    tags: ["budget", "camera", "transformers-edition", "trending"],
    specs: {
      display: "6.78\" 90Hz FHD+ Punch-Hole IPS Display, 2460 x 1080 pixels, 800 nits Peak Brightness, TÜV Rheinland Low Blue Light Eye Care Certified, Wet Touch Control",
      refreshRate: "90Hz FHD+ Punch-Hole IPS",
      processor: "MediaTek Helio G91 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with Arm Mali-G52 MC2 GPU",
      ram: "8GB LPDDR4X (+ 8GB Extended RAM = 16GB)",
      storage: "128GB / 256GB Internal Storage (Dedicated MicroSD slot expandable up to 1TB)",
      mainCamera: "64MP SONY IMX682 Ultra-Clear Main Camera (f/1.9, 1/1.73\", 4-in-1 pixel binning) with Quad-LED Flash",
      selfieCamera: "13MP Front Camera with Dual Micro-slit LED Flash",
      battery: "5000 mAh Long-Life Battery (1000+ charge cycles durability)",
      charging: "18W Fast Charge via USB Type-C",
      os: "HiOS 14 based on Android 14 (with Hasbro Transformers customized themes and sound effects)",
      network: "4G LTE Dual SIM, IP64 Dust & Water Resistance, Dual Symmetrical Stereo Speakers with Dolby Atmos, Infrared Remote Control, Side-mounted Fingerprint Scanner",
      resolution: "FHD+ (2460 x 1080 pixels), 20.5:9 ratio (~396 ppi)",
      peakBrightness: "800 nits peak outdoor brightness",
      hdrSupport: "TÜV Rheinland Low Blue Light Eye Care certification",
      dimensions: "168.0 x 76.4 x 7.68 mm, 188g",
      buildMaterials: "Drop-resistant composite body with official Hasbro Transformers Bumblebee Edition graphics",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD card slot",
      waterResistance: "IP64 dust and splash resistant rating with Wet Touch precision",
      stabilization: "Electronic Image Stabilization (EIS)",
      videoRecording: "2K @ 30fps, 1080p @ 30fps with gyro-EIS",
      opticsFeatures: "64MP Sony IMX682 high-clarity sensor, Super Night Mode, AI Portrait enhancement, Sky Alteration",
      frontVideoRecording: "1080p @ 30fps with Dual micro-slit flash fill",
      wirelessCharging: "Not supported (18W wired Fast Charge)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz / 5GHz), Bluetooth 5.3, NFC, IR Blaster remote",
      specialHardware: "Official Transformers Bumblebee co-branded design, Infrared blaster for home appliance control",
      biometricsAudio: "Side-mounted capacitive fingerprint scanner, dual stereo speakers with Dolby Atmos sound"
    },
    variants: [
      {
        id: "tecno-spark-30-8-128",
        name: "8GB / 128GB",
        ram: "8GB LPDDR4X",
        storage: "128GB",
        pricePKR: 38999,
        officialPricePKR: 41999,
        marketPriceRangePKR: { min: 37999, max: 40499 }
      }
    ],
    colors: ["Stellar Shadow", "Astral Ice", "Bumblebee Edition"],
    colorHexes: {
      "Stellar Shadow": "#232629",
      "Astral Ice": "#E1EBF5",
      "Bumblebee Edition": "#F5C21B"
    },
    colorImages: {
      "Stellar Shadow": "/images/phones/tecno-spark-30-stellar-shadow.webp",
      "Astral Ice": "/images/phones/tecno-spark-30-astral-ice.webp",
      "Bumblebee Edition": "/images/phones/tecno-spark-30-bumblebee-edition.webp"
    },
    images: [
      "/images/phones/tecno-spark-30-stellar-shadow.webp",
      "/images/phones/tecno-spark-30-astral-ice.webp",
      "/images/phones/tecno-spark-30-bumblebee-edition.webp"
    ],
    popularInCities: ["Lahore", "Karachi", "Rawalpindi", "Multan", "Hyderabad"],
    metaTitle: "Tecno Spark 30 Price in Pakistan & Specs",
    metaDescription: "Tecno Spark 30 price in Pakistan starts at Rs. 38,999. Features 64MP Sony IMX682 camera, Helio G91, 90Hz FHD+ display, Transformers Bumblebee edition, and IP64."
  },
  {
    id: "honor-x5b-plus",
    name: "Honor X5b Plus",
    brand: "Honor",
    model: "X5b Plus (4GB/128GB)",
    pricePKR: 26499,
    price: 26499,
    officialPricePKR: 28999,
    marketPriceRangePKR: { min: 25999, max: 27499 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 3100,
      cnicTaxPKR: 4200,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 3100,
    ptaCnicTax: 4200,
    isLocallyAssembled: true,
    releaseDate: "October 2024",
    image: "/images/phones/honor-x5b-plus-midnight-black.webp",
    tags: ["budget", "battery", "entry-level", "trending"],
    specs: {
      display: "6.56\" 90Hz Waterdrop Eye Comfort Display, HD+ (1612 x 720 pixels), Dynamic Dimming, TÜV Rheinland Low Blue Light Certified",
      refreshRate: "90Hz Waterdrop Eye Comfort Display",
      processor: "MediaTek Helio G36 (12nm) Octa-Core (4x2.2 GHz Cortex-A53 & 4x1.6 GHz Cortex-A53) with PowerVR GE8320 GPU",
      ram: "4GB RAM (+ 4GB HONOR RAM Turbo = 8GB)",
      storage: "128GB Internal Storage (MicroSD card slot expandable up to 1TB)",
      mainCamera: "50MP Ultra-Clear Main Camera (f/1.8) + 0.08MP Depth auxiliary sensor with LED flash",
      selfieCamera: "5MP Front Camera (f/2.2) with Selfie Light",
      battery: "5200 mAh Long-Lasting Battery with smart power-saving engine",
      charging: "10W Charging via USB Type-C",
      os: "MagicOS 8.0 based on Android 14 (with Smart Desktop, HONOR Docs, and Privacy Protection)",
      network: "4G LTE Dual SIM, Side-mounted Fingerprint Scanner, High-Volume Loudspeaker, 3.5mm Headphone Jack",
      resolution: "HD+ (1612 x 720 pixels), 20.1:9 ratio (~269 ppi)",
      peakBrightness: "530 nits typical brightness",
      hdrSupport: "Dynamic Dimming and TÜV Rheinland certified eye protection",
      dimensions: "163.59 x 75.33 x 8.39 mm, 194g",
      buildMaterials: "Textured composite back cover; anti-slip ergonomic edges",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD card slot",
      waterResistance: "Splash-resistant internal sealing",
      stabilization: "Electronic Image Stabilization (EIS)",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "50MP high-resolution mode, Portrait mode with beauty filters, HDR photo, Night shot",
      frontVideoRecording: "1080p @ 30fps",
      wirelessCharging: "Not supported (10W wired charging via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz / 5GHz), Bluetooth 5.1, GPS",
      specialHardware: "HONOR RAM Turbo virtual expansion, 5200mAh high-density battery",
      biometricsAudio: "Side-mounted capacitive fingerprint scanner, Face Unlock, loud audio speaker, 3.5mm headphone jack"
    },
    variants: [
      {
        id: "honor-x5b-plus-4-128",
        name: "4GB / 128GB",
        ram: "4GB",
        storage: "128GB",
        pricePKR: 26499,
        officialPricePKR: 28999,
        marketPriceRangePKR: { min: 25999, max: 27499 }
      }
    ],
    colors: ["Midnight Black", "Starry Purple"],
    colorHexes: {
      "Midnight Black": "#1C1D21",
      "Starry Purple": "#6C5B7B"
    },
    colorImages: {
      "Midnight Black": "/images/phones/honor-x5b-plus-midnight-black.webp",
      "Starry Purple": "/images/phones/honor-x5b-plus-starry-purple.webp"
    },
    images: [
      "/images/phones/honor-x5b-plus-midnight-black.webp",
      "/images/phones/honor-x5b-plus-starry-purple.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar"],
    metaTitle: "Honor X5b Plus Price in Pakistan & Specs",
    metaDescription: "Honor X5b Plus price in Pakistan starts at Rs. 26,499. Features 50MP camera, 5200mAh battery, 6.56-inch 90Hz display, and MagicOS 8.0."
  }
];

function run() {
  console.log("Loading current phones data...");
  const rawJson = fs.readFileSync(PHONES_JSON_SRC, 'utf8');
  const phones = JSON.parse(rawJson);

  console.log("Current phones count:", phones.length);
  if (phones.length !== 79) {
    throw new Error(`Expected baseline 79 phones, found ${phones.length}`);
  }

  // Check for duplicates
  for (const np of NEW_10_PHONES) {
    const dup = phones.find(p => p.id === np.id || p.name.toLowerCase() === np.name.toLowerCase());
    if (dup) {
      throw new Error(`Duplicate phone detected: ${np.id} (${np.name}) matches ${dup.id} (${dup.name})`);
    }
  }

  const combined = [...phones, ...NEW_10_PHONES];
  console.log("Combined phones count:", combined.length);
  if (combined.length !== 89) {
    throw new Error(`Expected target 89 phones, got ${combined.length}`);
  }

  const updatedJson = JSON.stringify(combined, null, 2);

  // Write all JSON files
  fs.writeFileSync(PHONES_JSON_SRC, updatedJson, 'utf8');
  fs.writeFileSync(PHONES_JSON_ROOT, updatedJson, 'utf8');
  if (fs.existsSync(PHONES_JSON_PUBLIC)) {
    fs.writeFileSync(PHONES_JSON_PUBLIC, updatedJson, 'utf8');
  }
  console.log("Updated all JSON files successfully.");

  // Update src/data/phones.ts
  const rawTs = fs.readFileSync(PHONES_TS_PATH, 'utf8');
  const markerStart = "export const PHONES_DATA: PhoneSpec[] = ";
  const markerEnd = "\nexport const BRANDS: BrandInfo[] = BRAND_DEFINITIONS";

  const idxStart = rawTs.indexOf(markerStart);
  const idxEnd = rawTs.indexOf(markerEnd);

  if (idxStart === -1 || idxEnd === -1) {
    throw new Error("Could not find PHONES_DATA markers in src/data/phones.ts");
  }

  const newTs = rawTs.substring(0, idxStart + markerStart.length) + updatedJson + ";\n" + rawTs.substring(idxEnd);
  fs.writeFileSync(PHONES_TS_PATH, newTs, 'utf8');
  console.log("Updated src/data/phones.ts successfully.");

  console.log("ALL DATA FILES SYNCHRONIZED TO EXACTLY 89 PHONES.");
}

run();
