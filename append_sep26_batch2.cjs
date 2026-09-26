/**
 * append_sep26_batch2.cjs
 * Adds exactly 10 new/trending smartphones and 5 fresh tech news articles to Pak Mobile Arena.
 */
const fs = require('fs');
const path = require('path');

const PHONES_TS_PATH = path.join(__dirname, 'src/data/phones.ts');
const PHONES_JSON_SRC = path.join(__dirname, 'src/data/phones.json');
const PHONES_JSON_ROOT = path.join(__dirname, 'phones.json');
const PHONES_JSON_PUBLIC = path.join(__dirname, 'public/phones.json');

const NEWS_TS_PATH = path.join(__dirname, 'src/data/news.ts');
const NEWS_JSON_SRC = path.join(__dirname, 'src/data/news.json');
const NEWS_JSON_ROOT = path.join(__dirname, 'news.json');

const NEW_PHONES = [
  {
    id: "honor-x6a",
    name: "Honor X6a",
    brand: "Honor",
    model: "X6a",
    pricePKR: 27999,
    price: 27999,
    officialPricePKR: 29999,
    marketPriceRangePKR: { min: 27499, max: 29999 },
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
        id: "honor-x6a-4-128",
        name: "4GB / 128GB",
        ram: "4GB RAM (+4GB HONOR RAM Turbo)",
        storage: "128GB Built-in Storage",
        pricePKR: 27999,
        officialPricePKR: 29999,
        marketPriceRangePKR: { min: 27499, max: 29999 }
      }
    ],
    colors: ["Cyan Lake", "Midnight Black", "Sky Silver"],
    colorHexes: {
      "Cyan Lake": "#1E6B7B",
      "Midnight Black": "#1A1A1A",
      "Sky Silver": "#D3D8DE"
    },
    colorImages: {
      "Cyan Lake": "/images/phones/honor-x6a-cyan-lake.webp",
      "Midnight Black": "/images/phones/honor-x6a-midnight-black.webp",
      "Sky Silver": "/images/phones/honor-x6a-sky-silver.webp"
    },
    image: "/images/phones/honor-x6a-cyan-lake.webp",
    images: [
      "/images/phones/honor-x6a-cyan-lake.webp",
      "/images/phones/honor-x6a-midnight-black.webp",
      "/images/phones/honor-x6a-sky-silver.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Faisalabad", "Multan", "Peshawar"],
    specs: {
      display: "6.56\" TFT LCD, 90Hz Refresh Rate, 16.7 Million Colors, Dynamic Dimming Eye Comfort Display",
      refreshRate: "90Hz Smooth Display with Dynamic Dimming",
      processor: "MediaTek Helio G36 (12nm) Octa-Core (4x2.2 GHz Cortex-A53 & 4x1.7 GHz Cortex-A53) with PowerVR GE8320 GPU",
      ram: "4GB RAM (+4GB HONOR RAM Turbo = 8GB Equivalent Memory)",
      storage: "128GB Internal Storage, MicroSD expansion slot up to 1TB",
      mainCamera: "50MP Triple AI Camera: 50MP Wide Main (f/1.8, PDAF) + 2MP Macro (f/2.4) + 2MP Depth (f/2.4) with LED Flash",
      selfieCamera: "5MP Front Camera (f/2.2 aperture) with Portrait mode and 2D Face Recognition",
      battery: "5200 mAh (typical) High-Capacity Lithium-Polymer Battery",
      charging: "22.5W HONOR SuperCharge via USB Type-C (31% charge in approximately 20 minutes)",
      os: "MagicOS 7.1 based on Android 13 with Google Mobile Services (GMS)",
      network: "4G LTE Dual SIM (Nano-SIM, dual stand-by), 3.5mm Earphone Jack, Bluetooth 5.1",
      resolution: "HD+ (1612 x 720 pixels), 20.15:9 aspect ratio (~269 ppi density)",
      peakBrightness: "520 nits peak brightness with Dynamic Dimming and Circadian Night Display",
      hdrSupport: "16.7M colors, TÜV Rheinland Low Blue Light hardware certification",
      dimensions: "163.32 x 75.07 x 8.35 mm, 188g weight",
      buildMaterials: "Glass front, polycarbonate frame and metallic-sheen rear panel with anti-fingerprint coating",
      simSlot: "Dual SIM (Nano-SIM, dual stand-by) + dedicated MicroSD expansion slot",
      waterResistance: "Standard daily splash and dust resistance",
      stabilization: "Electronic Image Stabilization (EIS) for 1080p video recording",
      videoRecording: "1080p (1920 x 1080) video recording @ 30fps with continuous autofocus",
      opticsFeatures: "50MP Ultra-Clear Mode, Portrait Mode with Bokeh, Time-Lapse, Super Macro, HDR, Smile Capture",
      frontVideoRecording: "1080p @ 30fps with AI beautification filters",
      wirelessCharging: "Not supported (22.5W wired HONOR SuperCharge via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz and 5GHz dual-band), Bluetooth 5.1 BLE, GPS/AGPS/GLONASS/BeiDou/Galileo",
      specialHardware: "Side-mounted fingerprint scanner, Dynamic Dimming eye comfort technology, 3.5mm audio jack",
      biometricsAudio: "Side-Mounted Fingerprint Sensor, 2D Face Recognition, Bottom-firing speaker, High-res audio output via 3.5mm jack"
    },
    releaseDate: "August 2023",
    tags: ["budget", "honor", "50mp-camera", "5200mah-battery", "trending", "under-30k"],
    metaTitle: "Honor X6a Price in Pakistan & Verified Specifications | Pak Mobile Arena",
    metaDescription: "Check official Honor X6a price in Pakistan, 5200mAh battery, 50MP triple camera, 90Hz display, PTA tax rates and authentic user specs."
  },
  {
    id: "infinix-hot-40i",
    name: "Infinix Hot 40i",
    brand: "Infinix",
    model: "Hot 40i",
    pricePKR: 28499,
    price: 28499,
    officialPricePKR: 30999,
    marketPriceRangePKR: { min: 28499, max: 30999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 3500,
      cnicTaxPKR: 4800,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 3500,
    ptaCnicTax: 4800,
    isLocallyAssembled: true,
    variants: [
      {
        id: "infinix-hot-40i-8-128",
        name: "8GB / 128GB",
        ram: "8GB LPDDR4X (+8GB Extended RAM = 16GB)",
        storage: "128GB UFS 2.2 Storage",
        pricePKR: 28499,
        officialPricePKR: 30999,
        marketPriceRangePKR: { min: 28499, max: 30999 }
      },
      {
        id: "infinix-hot-40i-8-256",
        name: "8GB / 256GB",
        ram: "8GB LPDDR4X (+8GB Extended RAM = 16GB)",
        storage: "256GB UFS 2.2 Storage",
        pricePKR: 31999,
        officialPricePKR: 34999,
        marketPriceRangePKR: { min: 31999, max: 34999 }
      }
    ],
    colors: ["Starlit Black", "Palm Blue", "Horizon Gold", "Starfall Green"],
    colorHexes: {
      "Starlit Black": "#1C1D21",
      "Palm Blue": "#4B729F",
      "Horizon Gold": "#E5C388",
      "Starfall Green": "#6C9371"
    },
    colorImages: {
      "Starlit Black": "/images/phones/infinix-hot-40i-starlit-black.webp",
      "Palm Blue": "/images/phones/infinix-hot-40i-palm-blue.webp",
      "Horizon Gold": "/images/phones/infinix-hot-40i-horizon-gold.webp",
      "Starfall Green": "/images/phones/infinix-hot-40i-starfall-green.webp"
    },
    image: "/images/phones/infinix-hot-40i-starlit-black.webp",
    images: [
      "/images/phones/infinix-hot-40i-starlit-black.webp",
      "/images/phones/infinix-hot-40i-palm-blue.webp",
      "/images/phones/infinix-hot-40i-horizon-gold.webp",
      "/images/phones/infinix-hot-40i-starfall-green.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Faisalabad", "Gujranwala", "Multan"],
    specs: {
      display: "6.56\" IPS LCD Punch-Hole Display, 90Hz Refresh Rate, Magic Ring Dynamic Notification Bar",
      refreshRate: "90Hz Smooth Punch-Hole Screen with Magic Ring Interaction",
      processor: "Unisoc T606 (12nm) Octa-Core (2x1.6 GHz Cortex-A75 & 6x1.6 GHz Cortex-A55) with ARM Mali-G57 MP1 GPU",
      ram: "8GB LPDDR4X RAM (+8GB Extended RAM = 16GB Total Memory)",
      storage: "128GB / 256GB UFS 2.2 Fast Flash Storage, dedicated microSD slot expandable up to 1TB",
      mainCamera: "50MP AI Dual Camera: 50MP Wide (f/1.6, AF, 5P lens) + 0.08MP auxiliary lens with Quad-LED Flash",
      selfieCamera: "32MP Crystal-Clear Selfie Camera (f/2.2 aperture) with Dual-LED Front Flash and 90° Wide-Angle lens",
      battery: "5000 mAh (typical) High-Density Battery with Power Marathon technology",
      charging: "18W FastCharge via USB Type-C 2.0 (charges 20% to 75% in approximately 35 minutes)",
      os: "Android 13 with XOS 13.0 user interface",
      network: "4G LTE Dual Nano-SIM, 3.5mm Headphone Jack, USB Type-C 2.0 with OTG",
      resolution: "HD+ (1612 x 720 pixels), 20:9 ratio (~269 ppi density)",
      peakBrightness: "480 nits peak brightness, sunlight readable display algorithm",
      hdrSupport: "Vivid color enhancement mode, Eye Care low blue light mode",
      dimensions: "163.6 x 75.6 x 8.3 mm, 190g weight",
      buildMaterials: "Glass front, composite textured back panel with optical microscopic crystal texture, flat frame",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD expansion slot",
      waterResistance: "Everyday splash and humidity protection",
      stabilization: "Software electronic video stabilization for 1080p recording",
      videoRecording: "1080p @ 30fps, 720p @ 30fps with HDR mode",
      opticsFeatures: "50MP Ultra Night Mode, Super Night Filter, AI Portrait, HDR, Panorama, Slow Motion, AR Space",
      frontVideoRecording: "1080p @ 30fps with Front Dual Flash night video recording",
      wirelessCharging: "Not supported (18W wired FastCharge via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz & 5GHz dual-band), Bluetooth 5.0, GPS, OTG support",
      specialHardware: "Magic Ring interactive notifications (charging, calls, face unlock status), Side Fingerprint, Quad-LED rear flash",
      biometricsAudio: "Side-Mounted Fingerprint Sensor, Face Unlock, 200% Super Volume Speaker with DTS Audio Processing, 3.5mm audio jack"
    },
    releaseDate: "December 2023",
    tags: ["budget", "infinix", "32mp-selfie", "50mp-camera", "magic-ring", "trending", "under-35k"],
    metaTitle: "Infinix Hot 40i Price in Pakistan & Full Specs | Pak Mobile Arena",
    metaDescription: "Infinix Hot 40i price in Pakistan starts at Rs. 28,499. Features 32MP selfie camera, 50MP dual camera, 90Hz Magic Ring display, 18W fast charging and official PTA approval."
  },
  {
    id: "infinix-smart-8",
    name: "Infinix Smart 8",
    brand: "Infinix",
    model: "Smart 8",
    pricePKR: 21999,
    price: 21999,
    officialPricePKR: 23999,
    marketPriceRangePKR: { min: 21499, max: 23999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 2800,
      cnicTaxPKR: 3900,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 2800,
    ptaCnicTax: 3900,
    isLocallyAssembled: true,
    variants: [
      {
        id: "infinix-smart-8-4-64",
        name: "4GB / 64GB",
        ram: "4GB RAM (+4GB Extended RAM = 8GB)",
        storage: "64GB Built-in Storage",
        pricePKR: 21999,
        officialPricePKR: 23999,
        marketPriceRangePKR: { min: 21499, max: 23999 }
      },
      {
        id: "infinix-smart-8-4-128",
        name: "4GB / 128GB",
        ram: "4GB RAM (+4GB Extended RAM = 8GB)",
        storage: "128GB Built-in Storage",
        pricePKR: 23499,
        officialPricePKR: 25999,
        marketPriceRangePKR: { min: 23499, max: 25999 }
      }
    ],
    colors: ["Timber Black", "Shiny Gold", "Crystal Green", "Galaxy White"],
    colorHexes: {
      "Timber Black": "#1D1E22",
      "Shiny Gold": "#D9B464",
      "Crystal Green": "#488B80",
      "Galaxy White": "#E9ECF1"
    },
    colorImages: {
      "Timber Black": "/images/phones/infinix-smart-8-timber-black.webp",
      "Shiny Gold": "/images/phones/infinix-smart-8-shiny-gold.webp",
      "Crystal Green": "/images/phones/infinix-smart-8-crystal-green.webp",
      "Galaxy White": "/images/phones/infinix-smart-8-galaxy-white.webp"
    },
    image: "/images/phones/infinix-smart-8-timber-black.webp",
    images: [
      "/images/phones/infinix-smart-8-timber-black.webp",
      "/images/phones/infinix-smart-8-shiny-gold.webp",
      "/images/phones/infinix-smart-8-crystal-green.webp",
      "/images/phones/infinix-smart-8-galaxy-white.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Peshawar", "Faisalabad", "Sialkot"],
    specs: {
      display: "6.6\" IPS LCD Punch-Hole Display, 90Hz Refresh Rate, Magic Ring Dynamic Status Bar, 500 nits Peak",
      refreshRate: "90Hz Fluid Punch-Hole Display with Magic Ring",
      processor: "Unisoc T606 (12nm) Octa-Core (2x1.6 GHz Cortex-A75 & 6x1.6 GHz Cortex-A55) with ARM Mali-G57 MP1",
      ram: "4GB RAM (+4GB Extended RAM = 8GB Total Usable Memory)",
      storage: "64GB / 128GB Built-in Storage, dedicated microSD card slot expandable up to 2TB",
      mainCamera: "13MP Dual AI Camera: 13MP Wide (f/1.8, AF) + 0.08MP auxiliary lens with Ring-LED Flash",
      selfieCamera: "8MP Front Camera (f/2.0 aperture) with Front LED Flash",
      battery: "5000 mAh (typical) Long-Life Battery with Power Marathon 3.0",
      charging: "10W Charging via USB Type-C port",
      os: "Android 13 (Go edition) with XOS 13 interface",
      network: "4G LTE Dual SIM, 3.5mm Audio Jack, USB Type-C with OTG support",
      resolution: "HD+ (1612 x 720 pixels), 20:9 ratio (~267 ppi density)",
      peakBrightness: "500 nits peak brightness, Dark Region Enhancement technology",
      hdrSupport: "Standard dynamic range, Eye Protection warm tone filter",
      dimensions: "163.6 x 75.6 x 8.5 mm, 184g weight",
      buildMaterials: "Glass front, textured composite rear panel with timber-inspired micro-groove texture, flat edges",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD expansion slot",
      waterResistance: "Everyday splash resistance",
      stabilization: "Standard software video stabilization",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "13MP AI Cam, Ring-LED Flash, Portrait Mode, Beauty Mode, HDR, Panorama",
      frontVideoRecording: "1080p @ 30fps with front LED flash lighting",
      wirelessCharging: "Not supported (10W wired Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (dual-band 2.4/5GHz), Bluetooth 5.0, GPS, USB OTG",
      specialHardware: "Magic Ring interactive notifications, Ring Flash design, Side-mounted Fingerprint scanner, Type-C port",
      biometricsAudio: "Side-Mounted Fingerprint Sensor, Face Unlock, 200% Super Volume Speaker with DTS Audio Enhancement, 3.5mm jack"
    },
    releaseDate: "November 2023",
    tags: ["budget", "infinix", "entry-level", "90hz-display", "5000mah-battery", "trending", "under-25k"],
    metaTitle: "Infinix Smart 8 Price in Pakistan & Specs | Pak Mobile Arena",
    metaDescription: "Infinix Smart 8 price in Pakistan is Rs. 21,999. Featuring 90Hz Magic Ring punch-hole display, 5000mAh battery, Type-C charging, side fingerprint sensor, and verified PTA approval."
  },
  {
    id: "oppo-a38",
    name: "OPPO A38",
    brand: "OPPO",
    model: "A38",
    pricePKR: 34999,
    price: 34999,
    officialPricePKR: 36999,
    marketPriceRangePKR: { min: 34499, max: 36999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 4200,
      cnicTaxPKR: 5800,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 4200,
    ptaCnicTax: 5800,
    isLocallyAssembled: true,
    variants: [
      {
        id: "oppo-a38-4-128",
        name: "4GB / 128GB",
        ram: "4GB LPDDR4X (+4GB RAM Expansion = 8GB)",
        storage: "128GB eMMC 5.1 Storage",
        pricePKR: 34999,
        officialPricePKR: 36999,
        marketPriceRangePKR: { min: 34499, max: 36999 }
      }
    ],
    colors: ["Glowing Black", "Glowing Gold"],
    colorHexes: {
      "Glowing Black": "#1E1E20",
      "Glowing Gold": "#DFC89A"
    },
    colorImages: {
      "Glowing Black": "/images/phones/oppo-a38-glowing-black.webp",
      "Glowing Gold": "/images/phones/oppo-a38-glowing-gold.webp"
    },
    image: "/images/phones/oppo-a38-glowing-black.webp",
    images: [
      "/images/phones/oppo-a38-glowing-black.webp",
      "/images/phones/oppo-a38-glowing-gold.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Multan", "Faisalabad", "Gujranwala"],
    specs: {
      display: "6.56\" Sunlight 90Hz Display, 720 nits Peak Brightness, 100% DCI-P3 & 96% NTSC Color Gamut",
      refreshRate: "90Hz Sunlight-Readable Display",
      processor: "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with ARM Mali-G52 MC2 GPU",
      ram: "4GB LPDDR4X RAM (+4GB OPPO RAM Expansion = 8GB)",
      storage: "128GB eMMC 5.1 Internal Storage, dedicated microSD slot expandable up to 1TB",
      mainCamera: "50MP AI Dual Camera: 50MP Primary (f/1.8, 75.5° FOV, 5P lens, AF) + 2MP Bokeh Lens (f/2.4) with LED Flash",
      selfieCamera: "5MP Front Camera (f/2.2 aperture, 76.8° FOV, 3P lens)",
      battery: "5000 mAh (typical) Long-Life Battery with Smart Charging Protection",
      charging: "33W SUPERVOOC Fast Charge via USB Type-C (charges over 50% in approximately 30 minutes)",
      os: "ColorOS 13.1 based on Android 13 with 36-Month Fluency Protection",
      network: "4G LTE Dual SIM, 3.5mm Earphone Jack, USB Type-C 2.0 with OTG",
      resolution: "HD+ (1612 x 720 pixels), 20.1:9 ratio (~269 ppi density)",
      peakBrightness: "720 nits peak brightness under direct sunlight",
      hdrSupport: "96% NTSC gamut coverage, All-Day AI Eye Comfort certified",
      dimensions: "163.74 x 75.03 x 8.16 mm, 190g weight",
      buildMaterials: "Glass front, OPPO Glow shimmering matte-textured back panel, IP54 dust and splash resistant frame",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD expansion slot",
      waterResistance: "IP54 dust and water splash resistance rating",
      stabilization: "EIS digital video stabilization for 1080p recording",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "50MP High-Res Mode, AI Portrait Retouching, Portrait Bokeh, Night Mode, Panorama, Time-Lapse",
      frontVideoRecording: "1080p @ 30fps, 720p @ 30fps",
      wirelessCharging: "Not supported (33W wired SUPERVOOC via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4G & 5GHz dual-band), Bluetooth 5.3, BLE, SBC, AAC, aptX HD, LDAC",
      specialHardware: "33W SUPERVOOC charging circuit, 300% Ultra-Volume Mode, IP54 water resistance, OPPO Glow design",
      biometricsAudio: "Side-Mounted Fingerprint Sensor, Facial Recognition, 300% Ultra-Volume Loudspeaker, 3.5mm headphone jack"
    },
    releaseDate: "September 2023",
    tags: ["budget", "oppo", "33w-supervooc", "50mp-camera", "ip54", "trending", "under-40k"],
    metaTitle: "OPPO A38 Price in Pakistan & Full Specifications | Pak Mobile Arena",
    metaDescription: "OPPO A38 price in Pakistan is Rs. 34,999. Highlights 33W SUPERVOOC fast charge, 50MP AI camera, 90Hz Sunlight display, IP54 rating, and official PTA tax status."
  },
  {
    id: "realme-c51",
    name: "realme C51",
    brand: "realme",
    model: "C51",
    pricePKR: 25499,
    price: 25499,
    officialPricePKR: 27999,
    marketPriceRangePKR: { min: 25499, max: 27999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 3400,
      cnicTaxPKR: 4700,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 3400,
    ptaCnicTax: 4700,
    isLocallyAssembled: true,
    variants: [
      {
        id: "realme-c51-4-64",
        name: "4GB / 64GB",
        ram: "4GB LPDDR4X (+4GB Dynamic RAM = 8GB)",
        storage: "64GB Built-in Storage",
        pricePKR: 25499,
        officialPricePKR: 27999,
        marketPriceRangePKR: { min: 25499, max: 27999 }
      },
      {
        id: "realme-c51-4-128",
        name: "4GB / 128GB",
        ram: "4GB LPDDR4X (+4GB Dynamic RAM = 8GB)",
        storage: "128GB Built-in Storage",
        pricePKR: 27499,
        officialPricePKR: 29999,
        marketPriceRangePKR: { min: 27499, max: 29999 }
      }
    ],
    colors: ["Mint Green", "Carbon Black"],
    colorHexes: {
      "Mint Green": "#A2C5AC",
      "Carbon Black": "#252629"
    },
    colorImages: {
      "Mint Green": "/images/phones/realme-c51-mint-green.webp",
      "Carbon Black": "/images/phones/realme-c51-carbon-black.webp"
    },
    image: "/images/phones/realme-c51-mint-green.webp",
    images: [
      "/images/phones/realme-c51-mint-green.webp",
      "/images/phones/realme-c51-carbon-black.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Faisalabad", "Multan", "Peshawar"],
    specs: {
      display: "6.74\" 90Hz Display, 16.7 Million Colors, Mini Capsule Notification Bar, 560 nits Peak",
      refreshRate: "90Hz Smooth Display with Mini Capsule",
      processor: "Unisoc Tiger T612 (12nm) Octa-Core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with ARM Mali-G57 GPU",
      ram: "4GB LPDDR4X RAM (+4GB Dynamic RAM Expansion = 8GB)",
      storage: "64GB / 128GB Built-in Storage, dedicated microSD card slot expandable up to 2TB",
      mainCamera: "50MP AI Primary Camera: 50MP Wide (f/1.8, 77° FOV, 5P lens, AF) + 0.08MP auxiliary lens with LED Flash",
      selfieCamera: "5MP Front Selfie Camera (f/2.22 aperture, 76.8° FOV, 3P lens)",
      battery: "5000 mAh (typical) Massive Battery with Smart Battery Protection",
      charging: "33W SUPERVOOC Charge via USB Type-C (0 to 50% charge in just 28 minutes)",
      os: "realme UI T Edition based on Android 13",
      network: "4G LTE Dual SIM, 3.5mm Headphone Jack, USB Type-C 2.0 with OTG",
      resolution: "HD+ (1600 x 720 pixels), 20:9 ratio (~260 ppi density)",
      peakBrightness: "560 nits peak brightness, 83% NTSC color gamut",
      hdrSupport: "16.7M colors, Sunlight Display technology",
      dimensions: "167.2 x 76.7 x 7.99 mm, 186g weight (ultra-slim profile)",
      buildMaterials: "Glass front, stylish dual-texture sparkling finish with matte lower section and glossy camera island",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD expansion slot up to 2TB",
      waterResistance: "Standard everyday splash protection",
      stabilization: "EIS digital stabilization for 1080p recording",
      videoRecording: "1080p @ 30fps, 720p @ 30fps, 480p @ 30fps",
      opticsFeatures: "50MP Mode, Night Mode, Panoramic View, Expert, Timelapse, Portrait Mode, HDR, AI Scene Recognition",
      frontVideoRecording: "720p @ 30fps, 480p @ 30fps",
      wirelessCharging: "Not supported (33W wired SUPERVOOC via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz & 5GHz dual-band), Bluetooth 5.0, GPS/AGPS/GLONASS/Galileo",
      specialHardware: "33W SUPERVOOC fast charge, Mini Capsule status bar, 7.99mm ultra-slim body, 150% UltraBoom Speaker",
      biometricsAudio: "Fast Side-Mounted Fingerprint Sensor, Face Unlock, 150% UltraBoom Loudspeaker, 3.5mm audio jack"
    },
    releaseDate: "July 2023",
    tags: ["budget", "realme", "33w-supervooc", "50mp-camera", "mini-capsule", "trending", "under-30k"],
    metaTitle: "realme C51 Price in Pakistan & Detailed Specs | Pak Mobile Arena",
    metaDescription: "realme C51 price in Pakistan starts at Rs. 25,499. Includes 33W SUPERVOOC charging, 50MP AI camera, 90Hz Mini Capsule screen, 7.99mm slim design and PTA approval."
  },
  {
    id: "realme-c53",
    name: "realme C53",
    brand: "realme",
    model: "C53",
    pricePKR: 31499,
    price: 31499,
    officialPricePKR: 33999,
    marketPriceRangePKR: { min: 31499, max: 33999 },
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
        id: "realme-c53-6-128",
        name: "6GB / 128GB",
        ram: "6GB LPDDR4X (+6GB Dynamic RAM = 12GB)",
        storage: "128GB Built-in Storage",
        pricePKR: 31499,
        officialPricePKR: 33999,
        marketPriceRangePKR: { min: 31499, max: 33999 }
      }
    ],
    colors: ["Champion Gold", "Mighty Black"],
    colorHexes: {
      "Champion Gold": "#E3CF97",
      "Mighty Black": "#1C1D21"
    },
    colorImages: {
      "Champion Gold": "/images/phones/realme-c53-champion-gold.webp",
      "Mighty Black": "/images/phones/realme-c53-mighty-black.webp"
    },
    image: "/images/phones/realme-c53-champion-gold.webp",
    images: [
      "/images/phones/realme-c53-champion-gold.webp",
      "/images/phones/realme-c53-mighty-black.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Faisalabad", "Peshawar", "Sargodha"],
    specs: {
      display: "6.74\" 90Hz Display, 16.7 Million Colors, Mini Capsule Notification Bar, 560 nits Peak",
      refreshRate: "90Hz Smooth Display with Mini Capsule",
      processor: "Unisoc Tiger T612 (12nm) Octa-Core (2x1.8 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with ARM Mali-G57 GPU",
      ram: "6GB LPDDR4X RAM (+6GB Dynamic RAM Expansion = 12GB)",
      storage: "128GB Built-in Storage, dedicated microSD card slot expandable up to 2TB",
      mainCamera: "50MP AI Primary Camera: 50MP Wide (f/1.8, 77° FOV, 5P lens, AF) + 0.08MP auxiliary lens with LED Flash",
      selfieCamera: "8MP Front Selfie Camera (f/2.0 aperture, 78° FOV, 4P lens) with HDR support",
      battery: "5000 mAh (typical) Massive Battery with Smart Battery Protection",
      charging: "33W SUPERVOOC Charge via USB Type-C (charges 50% in approximately 31 minutes)",
      os: "realme UI T Edition based on Android 13",
      network: "4G LTE Dual SIM, 3.5mm Headphone Jack, USB Type-C 2.0 with OTG",
      resolution: "HD+ (1600 x 720 pixels), 20:9 ratio (~260 ppi density)",
      peakBrightness: "560 nits peak brightness, 83% NTSC color gamut",
      hdrSupport: "16.7M colors, Eye Comfort certification",
      dimensions: "167.3 x 76.7 x 7.49 mm, 182g weight (Champion 7.49mm ultra-slim profile)",
      buildMaterials: "Glass front, Shiny Champion golden texture with shimmering golden silk gradient coating, flat edges",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD expansion slot up to 2TB",
      waterResistance: "Standard everyday splash protection",
      stabilization: "EIS digital stabilization for 1080p recording",
      videoRecording: "1080p @ 30fps, 720p @ 30fps, 480p @ 30fps",
      opticsFeatures: "50MP Mode, Night Mode, Panoramic View, Expert, Timelapse, Portrait Mode, HDR, AI Scene Recognition",
      frontVideoRecording: "720p @ 30fps with AI portrait retouching",
      wirelessCharging: "Not supported (33W wired SUPERVOOC via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz & 5GHz dual-band), Bluetooth 5.0, GPS/AGPS/GLONASS/Galileo",
      specialHardware: "Champion 7.49mm ultra-slim body, 33W SUPERVOOC fast charge, Mini Capsule interactive bar, 150% UltraBoom Speaker",
      biometricsAudio: "Side-Mounted Fast Fingerprint Sensor, Face Unlock, 150% UltraBoom Loudspeaker, 3.5mm headphone jack"
    },
    releaseDate: "May 2023",
    tags: ["budget", "realme", "33w-supervooc", "50mp-camera", "7.49mm-slim", "trending", "under-35k"],
    metaTitle: "realme C53 Price in Pakistan & Official Specs | Pak Mobile Arena",
    metaDescription: "realme C53 price in Pakistan is Rs. 31,499. Boasting 7.49mm ultra-slim body, 33W SUPERVOOC, 50MP AI camera, 90Hz Mini Capsule screen, and PTA approval."
  },
  {
    id: "tecno-spark-20",
    name: "Tecno Spark 20",
    brand: "Tecno",
    model: "Spark 20",
    pricePKR: 32999,
    price: 32999,
    officialPricePKR: 34999,
    marketPriceRangePKR: { min: 32499, max: 34999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 3900,
      cnicTaxPKR: 5300,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 3900,
    ptaCnicTax: 5300,
    isLocallyAssembled: true,
    variants: [
      {
        id: "tecno-spark-20-8-256",
        name: "8GB / 256GB",
        ram: "8GB LPDDR4X (+8GB Extended RAM = 16GB)",
        storage: "256GB Built-in Storage",
        pricePKR: 32999,
        officialPricePKR: 34999,
        marketPriceRangePKR: { min: 32499, max: 34999 }
      }
    ],
    colors: ["Gravity Black", "Cyber White", "Neon Gold", "Magic Skin Blue"],
    colorHexes: {
      "Gravity Black": "#1F1F21",
      "Cyber White": "#E6E8ED",
      "Neon Gold": "#E4C479",
      "Magic Skin Blue": "#49789F"
    },
    colorImages: {
      "Gravity Black": "/images/phones/tecno-spark-20-gravity-black.webp",
      "Cyber White": "/images/phones/tecno-spark-20-cyber-white.webp",
      "Neon Gold": "/images/phones/tecno-spark-20-neon-gold.webp",
      "Magic Skin Blue": "/images/phones/tecno-spark-20-magic-skin-blue.webp"
    },
    image: "/images/phones/tecno-spark-20-gravity-black.webp",
    images: [
      "/images/phones/tecno-spark-20-gravity-black.webp",
      "/images/phones/tecno-spark-20-cyber-white.webp",
      "/images/phones/tecno-spark-20-neon-gold.webp",
      "/images/phones/tecno-spark-20-magic-skin-blue.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Faisalabad", "Multan", "Hyderabad"],
    specs: {
      display: "6.56\" IPS LCD Punch-Hole Display, 90Hz Refresh Rate, Dynamic Port Notification Pill",
      refreshRate: "90Hz Smooth Punch-Hole Screen with Dynamic Port",
      processor: "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with ARM Mali-G52 MC2 GPU",
      ram: "8GB LPDDR4X RAM (+8GB Memory Fusion = 16GB Total RAM)",
      storage: "256GB Built-in Storage, dedicated microSD card slot expandable up to 1TB",
      mainCamera: "50MP Ultra-Clear Dual Camera: 50MP Primary (f/1.6, PDAF) + 0.08MP auxiliary lens with Dual-LED Flash",
      selfieCamera: "32MP Glowing Selfie Camera (f/2.2 aperture) with Dual Micro-slit Flash (3 color temperatures)",
      battery: "5000 mAh (typical) High-Capacity Battery",
      charging: "18W Fast Charging via USB Type-C 2.0",
      os: "Android 13 with HiOS 13.5 user interface",
      network: "4G LTE Dual SIM, 3.5mm Headphone Jack, Dual Stereo Speakers with DTS Sound",
      resolution: "HD+ (1612 x 720 pixels), 20:9 ratio (~269 ppi density)",
      peakBrightness: "500 nits peak brightness, readable under sunlight",
      hdrSupport: "Standard dynamic range, Eye Protection filter mode",
      dimensions: "163.69 x 75.6 x 8.45 mm, 192g weight",
      buildMaterials: "Glass front, composite back panel with Magic Skin eco-leather option, flat square frame, IP53 rating",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD expansion slot",
      waterResistance: "IP53 dust and splash protection certified",
      stabilization: "EIS digital video stabilization",
      videoRecording: "1440p (2K) @ 30fps, 1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "50MP Ultra-Clear Mode, Super Night Mode, Portrait Mode with Bokeh, HDR, Pro Mode, Dual Flash",
      frontVideoRecording: "1080p @ 30fps with front Dual Flash color temperature adjustment",
      wirelessCharging: "Not supported (18W wired Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4G & 5GHz dual-band), Bluetooth 5.2, GPS, FM Radio, USB OTG",
      specialHardware: "Stereo Dual Speakers with DTS Sound (400% volume boost), IP53 rating, Dynamic Port, 32MP Glowing Selfie with 3-temp flash",
      biometricsAudio: "Side-Mounted Fingerprint Sensor, Fast Face Unlock, Dual Stereo Speakers with DTS Audio, 3.5mm headphone jack"
    },
    releaseDate: "December 2023",
    tags: ["budget", "tecno", "32mp-selfie", "dual-stereo-speakers", "256gb-storage", "ip53", "trending", "under-35k"],
    metaTitle: "Tecno Spark 20 Price in Pakistan & Detailed Specs | Pak Mobile Arena",
    metaDescription: "Tecno Spark 20 price in Pakistan is Rs. 32,999 for 256GB. Offers 32MP Glowing Selfie, 50MP camera, dual stereo speakers, 90Hz Dynamic Port display, and verified PTA tax info."
  },
  {
    id: "vivo-y27s",
    name: "vivo Y27s",
    brand: "Vivo",
    model: "Y27s",
    pricePKR: 43999,
    price: 43999,
    officialPricePKR: 46999,
    marketPriceRangePKR: { min: 43499, max: 46999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 4800,
      cnicTaxPKR: 6600,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 4800,
    ptaCnicTax: 6600,
    isLocallyAssembled: true,
    variants: [
      {
        id: "vivo-y27s-8-128",
        name: "8GB / 128GB",
        ram: "8GB LPDDR4X (+8GB Extended RAM 3.0 = 16GB)",
        storage: "128GB UFS 2.2 Storage",
        pricePKR: 43999,
        officialPricePKR: 46999,
        marketPriceRangePKR: { min: 43499, max: 46999 }
      },
      {
        id: "vivo-y27s-8-256",
        name: "8GB / 256GB",
        ram: "8GB LPDDR4X (+8GB Extended RAM 3.0 = 16GB)",
        storage: "256GB UFS 2.2 Storage",
        pricePKR: 48999,
        officialPricePKR: 51999,
        marketPriceRangePKR: { min: 48499, max: 51999 }
      }
    ],
    colors: ["Burgundy Black", "Garden Green"],
    colorHexes: {
      "Burgundy Black": "#261A1D",
      "Garden Green": "#476C55"
    },
    colorImages: {
      "Burgundy Black": "/images/phones/vivo-y27s-burgundy-black.webp",
      "Garden Green": "/images/phones/vivo-y27s-garden-green.webp"
    },
    image: "/images/phones/vivo-y27s-burgundy-black.webp",
    images: [
      "/images/phones/vivo-y27s-burgundy-black.webp",
      "/images/phones/vivo-y27s-garden-green.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Faisalabad", "Multan", "Peshawar"],
    specs: {
      display: "6.64\" FHD+ Sunlight Display, 90Hz Refresh Rate, 650 nits Peak, 100% P3 Color Gamut",
      refreshRate: "90Hz FHD+ Sunlight Display",
      processor: "Qualcomm Snapdragon 680 4G (6nm) Octa-Core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver) with Adreno 610 GPU",
      ram: "8GB LPDDR4X RAM (+8GB Extended RAM 3.0 = 16GB)",
      storage: "128GB / 256GB UFS 2.2 Storage, dedicated microSD slot expandable up to 1TB",
      mainCamera: "50MP Dual Camera: 50MP Wide (f/1.8, AF) + 2MP Bokeh Camera (f/2.4) with LED Flash",
      selfieCamera: "8MP Front Camera (f/2.0 aperture) with Aura Screen Light and Portrait Beauty",
      battery: "5000 mAh (typical) High-Capacity Battery with 24-Dimension Security Protection",
      charging: "44W FlashCharge via USB Type-C (charges 0 to 30% in approximately 15 minutes)",
      os: "Funtouch OS 13 based on Android 13",
      network: "4G LTE Dual SIM, 3.5mm Audio Jack, USB Type-C 2.0 with OTG",
      resolution: "FHD+ (2388 x 1080 pixels), 19.9:9 ratio (~394 ppi density)",
      peakBrightness: "650 nits peak brightness Sunlight Display",
      hdrSupport: "100% DCI-P3 color gamut, Eye Protection mode",
      dimensions: "164.06 x 76.17 x 8.17 mm, 192g weight",
      buildMaterials: "Glass front, composite plastic matte finish with anti-scratch and anti-fingerprint surface, IP54 rating",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD expansion slot up to 1TB",
      waterResistance: "IP54 dust and splash water resistance",
      stabilization: "EIS electronic image stabilization for smooth 1080p recording",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "50MP Ultra HD, Super Night Mode, Bokeh Flare Portrait, Double Exposure, Slow Motion, Time-Lapse",
      frontVideoRecording: "1080p @ 30fps with Aura Screen Light",
      wirelessCharging: "Not supported (44W wired FlashCharge via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4G & 5GHz dual-band), Bluetooth 5.0, GPS/BEIDOU/GLONASS/GALILEO/QZSS, OTG",
      specialHardware: "44W FlashCharge, Snapdragon 680 6nm processor, IP54 rating, Audio Booster up to 200%",
      biometricsAudio: "Side-Mounted Fingerprint Sensor, Face Access, Audio Booster speaker, 3.5mm headphone jack"
    },
    releaseDate: "November 2023",
    tags: ["mid-range", "vivo", "44w-flashcharge", "snapdragon-680", "fhd-display", "ip54", "trending", "under-50k"],
    metaTitle: "vivo Y27s Price in Pakistan & Full Specs | Pak Mobile Arena",
    metaDescription: "vivo Y27s price in Pakistan is Rs. 43,999. Features 44W FlashCharge, Snapdragon 680, 50MP camera, 90Hz FHD+ display, IP54 rating, and verified PTA tax status."
  },
  {
    id: "vivo-y36",
    name: "vivo Y36",
    brand: "Vivo",
    model: "Y36",
    pricePKR: 48999,
    price: 48999,
    officialPricePKR: 52999,
    marketPriceRangePKR: { min: 48499, max: 52999 },
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
        id: "vivo-y36-8-128",
        name: "8GB / 128GB",
        ram: "8GB LPDDR4X (+8GB Extended RAM 3.0 = 16GB)",
        storage: "128GB UFS 2.2 Storage",
        pricePKR: 48999,
        officialPricePKR: 52999,
        marketPriceRangePKR: { min: 48499, max: 52999 }
      },
      {
        id: "vivo-y36-8-256",
        name: "8GB / 256GB",
        ram: "8GB LPDDR4X (+8GB Extended RAM 3.0 = 16GB)",
        storage: "256GB UFS 2.2 Storage",
        pricePKR: 54999,
        officialPricePKR: 58999,
        marketPriceRangePKR: { min: 54499, max: 58999 }
      }
    ],
    colors: ["Glitter Aqua", "Meteor Black", "Vibrant Gold"],
    colorHexes: {
      "Glitter Aqua": "#49A7A6",
      "Meteor Black": "#1E1E22",
      "Vibrant Gold": "#D8B868"
    },
    colorImages: {
      "Glitter Aqua": "/images/phones/vivo-y36-glitter-aqua.webp",
      "Meteor Black": "/images/phones/vivo-y36-meteor-black.webp",
      "Vibrant Gold": "/images/phones/vivo-y36-vibrant-gold.webp"
    },
    image: "/images/phones/vivo-y36-glitter-aqua.webp",
    images: [
      "/images/phones/vivo-y36-glitter-aqua.webp",
      "/images/phones/vivo-y36-meteor-black.webp",
      "/images/phones/vivo-y36-vibrant-gold.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Faisalabad", "Multan", "Sialkot"],
    specs: {
      display: "6.64\" FHD+ Dotch Display, 90Hz Refresh Rate, 650 nits Sunlight Readable, 2388 x 1080 Resolution",
      refreshRate: "90Hz Smooth FHD+ Sunlight Display",
      processor: "Qualcomm Snapdragon 680 4G (6nm) Octa-Core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver) with Adreno 610 GPU",
      ram: "8GB LPDDR4X RAM (+8GB Extended RAM 3.0 = 16GB)",
      storage: "128GB / 256GB UFS 2.2 Storage, dedicated microSD slot expandable up to 1TB",
      mainCamera: "50MP AI Dual Camera: 50MP Wide (f/1.8, AF) + 2MP Bokeh Camera (f/2.4) with LED Flash",
      selfieCamera: "16MP Front Portrait Camera (f/2.45 aperture) with Aura Screen Light and AI Portrait algorithm",
      battery: "5000 mAh (typical) High-Capacity Battery with Smart Charging Engine",
      charging: "44W FlashCharge via USB Type-C (charges 30% in approximately 15 minutes)",
      os: "Funtouch OS 13 based on Android 13",
      network: "4G LTE Dual SIM, 3.5mm Headphone Jack, USB Type-C 2.0 with OTG",
      resolution: "FHD+ (2388 x 1080 pixels), 19.9:9 ratio (~395 ppi density)",
      peakBrightness: "650 nits peak brightness Sunlight Display",
      hdrSupport: "P3 color gamut, Eye Protection certified",
      dimensions: "164.06 x 76.17 x 8.07 mm, 202g weight",
      buildMaterials: "Glass front, 2.5D Curved Fluorite AG Glass back panel with dream ripple texture, IP54 rating",
      simSlot: "Triple Slot: Dual Nano-SIM + dedicated MicroSD expansion slot up to 1TB",
      waterResistance: "IP54 dust and splash water resistance certified",
      stabilization: "EIS electronic image stabilization for stable video",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "50MP Ultra HD, Super Night Mode with multi-frame noise reduction, Bokeh Flare Portrait, Double Exposure, Live Photo",
      frontVideoRecording: "1080p @ 30fps with Aura Screen Light illumination",
      wirelessCharging: "Not supported (44W wired FlashCharge via Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4G & 5GHz dual-band), Bluetooth 5.1, GPS/BEIDOU/GLONASS/GALILEO/QZSS, OTG",
      specialHardware: "2.5D Fluorite AG Glass back panel, 44W FlashCharge, 16MP Selfie with Aura Light, 200% Audio Booster, IP54 rating",
      biometricsAudio: "Side-Mounted Capacitive Fingerprint Sensor, Face Access, 200% Audio Booster Loudspeaker, 3.5mm headphone jack"
    },
    releaseDate: "May 2023",
    tags: ["mid-range", "vivo", "44w-flashcharge", "fluorite-ag-glass", "16mp-selfie", "fhd-display", "ip54", "trending", "under-55k"],
    metaTitle: "vivo Y36 Price in Pakistan & Authentic Specs | Pak Mobile Arena",
    metaDescription: "vivo Y36 price in Pakistan is Rs. 48,999. Offers Fluorite AG Glass design, 44W FlashCharge, 50MP camera, 16MP selfie, 90Hz FHD+ screen, IP54 and verified PTA status."
  },
  {
    id: "xiaomi-redmi-12",
    name: "Xiaomi Redmi 12",
    brand: "Xiaomi",
    model: "Redmi 12",
    pricePKR: 34999,
    price: 34999,
    officialPricePKR: 37999,
    marketPriceRangePKR: { min: 34499, max: 37999 },
    rating: 0,
    reviewCount: 0,
    ptaTax: {
      passportTaxPKR: 4200,
      cnicTaxPKR: 5800,
      status: "Official PTA Approved",
      isLocallyAssembled: true
    },
    ptaPassportTax: 4200,
    ptaCnicTax: 5800,
    isLocallyAssembled: true,
    variants: [
      {
        id: "xiaomi-redmi-12-8-128",
        name: "8GB / 128GB",
        ram: "8GB LPDDR4X (+8GB Memory Extension = 16GB)",
        storage: "128GB eMMC 5.1 Storage",
        pricePKR: 34999,
        officialPricePKR: 37999,
        marketPriceRangePKR: { min: 34499, max: 37999 }
      },
      {
        id: "xiaomi-redmi-12-8-256",
        name: "8GB / 256GB",
        ram: "8GB LPDDR4X (+8GB Memory Extension = 16GB)",
        storage: "256GB eMMC 5.1 Storage",
        pricePKR: 38999,
        officialPricePKR: 41999,
        marketPriceRangePKR: { min: 38499, max: 41999 }
      }
    ],
    colors: ["Midnight Black", "Sky Blue", "Polar Silver"],
    colorHexes: {
      "Midnight Black": "#1E1F22",
      "Sky Blue": "#8CB2D4",
      "Polar Silver": "#C8CED7"
    },
    colorImages: {
      "Midnight Black": "/images/phones/xiaomi-redmi-12-midnight-black.webp",
      "Sky Blue": "/images/phones/xiaomi-redmi-12-sky-blue.webp",
      "Polar Silver": "/images/phones/xiaomi-redmi-12-polar-silver.webp"
    },
    image: "/images/phones/xiaomi-redmi-12-midnight-black.webp",
    images: [
      "/images/phones/xiaomi-redmi-12-midnight-black.webp",
      "/images/phones/xiaomi-redmi-12-sky-blue.webp",
      "/images/phones/xiaomi-redmi-12-polar-silver.webp"
    ],
    popularInCities: ["Karachi", "Lahore", "Rawalpindi", "Islamabad", "Faisalabad", "Multan", "Peshawar"],
    specs: {
      display: "6.79\" FHD+ DotDisplay, 90Hz AdaptiveSync Refresh Rate, 2460 x 1080 Resolution, SGS Low Blue Light Certified",
      refreshRate: "90Hz AdaptiveSync FHD+ Display (36/48/60/90Hz)",
      processor: "MediaTek Helio G88 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with ARM Mali-G52 MC2 GPU",
      ram: "8GB LPDDR4X RAM (+8GB Memory Extension = 16GB)",
      storage: "128GB / 256GB eMMC 5.1 Storage, dedicated microSD card slot expandable up to 1TB",
      mainCamera: "50MP Triple AI Camera: 50MP Main (f/1.8, AF) + 8MP Ultra-Wide (f/2.2, 120° FOV) + 2MP Macro (f/2.4) with LED Flash",
      selfieCamera: "8MP Front Selfie Camera (f/2.1 aperture)",
      battery: "5000 mAh (typical) High-Capacity Battery",
      charging: "18W Fast Charging via USB Type-C port",
      os: "MIUI 14 based on Android 13 (upgradable to Xiaomi HyperOS)",
      network: "4G LTE Dual SIM (Nano-SIM, dual stand-by), 3.5mm Headphone Jack, IR Blaster",
      resolution: "FHD+ (2460 x 1080 pixels), 20.5:9 ratio (~396 ppi density)",
      peakBrightness: "550 nits peak brightness (HBM), 1500:1 contrast ratio",
      hdrSupport: "70% NTSC color gamut, Reading Mode 3.0, SGS Low Blue Light certified",
      dimensions: "168.6 x 76.28 x 8.17 mm, 198.5g weight",
      buildMaterials: "Corning Gorilla Glass front, premium glass back panel, polycarbonate flat frame, IP53 rating",
      simSlot: "Hybrid Dual SIM (Nano-SIM, dual stand-by or MicroSD slot up to 1TB)",
      waterResistance: "IP53 splash and dust resistant certified",
      stabilization: "EIS electronic image stabilization",
      videoRecording: "1080p @ 30fps, 720p @ 30fps",
      opticsFeatures: "50MP Ultra HD, 120° Ultra-Wide Angle, filmCamera filters, Night Mode, Portrait Mode, Macro Mode, HDR",
      frontVideoRecording: "1080p @ 30fps, 720p @ 30fps with filmCamera filters",
      wirelessCharging: "Not supported (18W wired Type-C)",
      wifiBluetooth: "Wi-Fi 802.11 a/b/g/n/ac (2.4GHz & 5GHz dual-band), Bluetooth 5.3, GPS/GLONASS/Galileo/BDS, IR Blaster, FM Radio",
      specialHardware: "Premium glass back panel, 8.17mm slim, 90Hz FHD+ DotDisplay, IR Blaster, IP53 rating, 1217 super linear speaker",
      biometricsAudio: "Side-Mounted Fingerprint Sensor, AI Face Unlock, 1217 Super Linear Speaker, 3.5mm headphone jack"
    },
    releaseDate: "June 2023",
    tags: ["budget", "xiaomi", "redmi", "glass-back", "ultra-wide-camera", "90hz-fhd", "ip53", "trending", "under-40k"],
    metaTitle: "Xiaomi Redmi 12 Price in Pakistan & Detailed Specs | Pak Mobile Arena",
    metaDescription: "Xiaomi Redmi 12 price in Pakistan is Rs. 34,999. Featuring premium glass back, 50MP triple camera with 120° ultra-wide, 90Hz FHD+ screen, IP53 rating and PTA tax rates."
  }
];

const NEW_NEWS = [
  {
    id: "realme-gt-7-pro-eco2-oled-plus-display-titan-battery-launch",
    slug: "realme-gt-7-pro-eco2-oled-plus-display-titan-battery-launch",
    title: "realme GT 7 Pro Unveiled: Samsung Eco² OLED Plus Display and 6,500mAh Silicon-Carbon Titan Battery",
    summary: "realme has officially showcased the GT 7 Pro flagship smartphone, introducing an unprecedented Samsung Eco² OLED Plus screen with 120% DCI-P3 gamut alongside a massive 6,500mAh silicon-carbon Titan battery with 120W charging.",
    category: "Smartphones & Hardware",
    author: "PakMobile Arena Tech Desk",
    date: "September 26, 2026",
    isoDate: "2026-09-26",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1200&q=80",
    tags: ["realme", "realme GT 7 Pro", "Eco2 OLED", "Titan Battery", "Flagship Phones", "Silicon-Carbon"],
    metaTitle: "realme GT 7 Pro Launch: Eco2 OLED Plus Display & 6500mAh Battery | Pak Mobile Arena",
    metaDescription: "realme announces GT 7 Pro flagship with Samsung Eco2 OLED Plus display, 6,500mAh silicon-carbon Titan battery, 120W charging, and Pakistan availability details.",
    content: [
      {
        heading: "Revolutionary Eco² OLED Plus Display Engineering",
        paragraphs: [
          "In a high-profile technology briefing, realme officially unveiled its upcoming premier flagship, the realme GT 7 Pro. At the center of the unveiling is an industry-first Samsung Eco² OLED Plus display panel that removes the conventional polarizing film layer entirely. By discarding the polarizer, the panel achieves an extraordinary 52% reduction in display power consumption while reaching an unprecedented peak HDR luminance of 6,000 nits.",
          "The panel covers an astounding 120% of the ultra-wide DCI-P3 cinema color space and integrates hardware-level circular polarization technology that mimics natural light waves. This drastically minimizes eye strain and eliminates ocular fatigue during marathon gaming and multimedia sessions, setting a new benchmark for mobile display ergonomics."
        ]
      },
      {
        heading: "6,500mAh Silicon-Carbon Titan Battery Architecture",
        paragraphs: [
          "Addressing the intensive power demands of next-generation mobile silicon, realme engineered the 'Titan Battery' in collaboration with Contemporary Amperex Technology (CATL). Utilizing a cutting-edge 10% silicon content negative electrode anode, the cell packs an enormous 6,500 mAh capacity into a chassis measuring under 8.5 millimeters in thickness.",
          "Despite the massive chemical capacity, the GT 7 Pro supports 120W Ultra-Fast wired charging, capable of replenishing 50% battery in just 14 minutes. Furthermore, realme's specialized low-temperature electrolyte formula ensures stable discharge efficiency even in extreme sub-zero alpine conditions down to -30°C."
        ]
      },
      {
        heading: "Underwater Photography and IP69 Submersion Protection",
        paragraphs: [
          "In a decisive upgrade to durability, the realme GT 7 Pro secures full IP68 and IP69 dual water and high-pressure steam resistance ratings. Leveraging sonic ejection algorithms and sealed acoustic membranes, realme has introduced an exclusive 'Underwater Photography Mode' that allows users to capture 4K HDR footage while fully submerged in fresh water without external waterproof housing.",
          "The camera module also features a periscope telephoto lens with a customized 50-megapixel Sony sensor, delivering 3x optical zoom, 6x lossless sensor zoom, and up to 120x computational digital zoom."
        ]
      },
      {
        heading: "Relevance and Anticipated Availability in Pakistan",
        paragraphs: [
          "The realme GT-series has cultivated a devoted following among Pakistani mobile gamers and tech enthusiasts seeking top-tier performance without exorbitant price tags. With local assembly facilities established in Pakistan, market analysts anticipate competitive distributor pricing and streamlined PTA approval upon regional commercial debut.",
          "As flagship battery expectations transition from 5,000mAh to 6,500mAh, the realme GT 7 Pro stands at the forefront of the mobile industry's high-efficiency endurance revolution."
        ]
      }
    ]
  },
  {
    id: "arm-cortex-x925-immortalis-g925-mobile-architecture-unveiled",
    slug: "arm-cortex-x925-immortalis-g925-mobile-architecture-unveiled",
    title: "Arm Unveils Cortex-X925 CPU and Immortalis-G925 GPU: Generational Leap in Mobile Compute and Ray Tracing",
    summary: "Arm has detailed its latest compute subsystem for 2026/2027 flagship processors, led by the high-performance Cortex-X925 CPU delivering a 36% IPC improvement alongside the 14-core Immortalis-G925 ray tracing GPU.",
    category: "Processors & Chipsets",
    author: "PakMobile Arena Tech Desk",
    date: "September 26, 2026",
    isoDate: "2026-09-26",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    tags: ["Arm", "Cortex-X925", "Immortalis-G925", "Mobile CPU", "Ray Tracing", "Semiconductors"],
    metaTitle: "Arm Cortex-X925 & Immortalis-G925 Architecture Announced | Pak Mobile Arena",
    metaDescription: "Arm details Cortex-X925 flagship CPU core with 36% IPC gain and Immortalis-G925 ray-tracing GPU for next-gen 3nm and 2nm Android flagship processors.",
    content: [
      {
        heading: "Cortex-X925: The 'Blackhawk' Architectural Overhaul",
        paragraphs: [
          "Arm has officially taken the wraps off its most formidable mobile CPU design to date: the Cortex-X925 (previously codenamed 'Blackhawk'). Representing the largest single-generation IPC (instructions per cycle) performance boost in the history of the Cortex-X series, the X925 delivers an impressive 36% improvement in single-thread integer workloads on leading-edge 3nm foundry nodes.",
          "Engineered to sustain clock frequencies exceeding 3.8 GHz, the Cortex-X925 expands execution branch bandwidth, enlarges private L2 cache structures to 3MB, and doubles instruction fetch widths to feed advanced on-device artificial intelligence tokens and complex gaming game-loops seamlessly."
        ]
      },
      {
        heading: "Immortalis-G925: 14-Core Console-Grade Ray Tracing",
        paragraphs: [
          "On the graphics front, Arm unveiled the Immortalis-G925 GPU, scalable up to 14 shader cores. Architectural refinements yield a 37% throughput boost in complex compute graphics while slashing power consumption by 30% compared to its G720 predecessor.",
          "Most notably, ray tracing hardware acceleration has been overhauled with upgraded ray-box testing units and accelerated bounding volume traversal, enabling hardware ray-traced reflections, dynamic soft shadows, and global illumination at steady 60 FPS frame rates in AAA mobile gaming titles."
        ]
      },
      {
        heading: "41% Speedup for On-Device Generative AI Inference",
        paragraphs: [
          "Recognizing that modern smartphones require rapid local AI token execution, the Cortex-X925 integrates specialized vector and matrix arithmetic enhancements. Arm's technical benchmarks indicate a 41% acceleration in time-to-first-token for local large language models (LLMs) and vision transformers (ViTs).",
          "This enables smartphone operating systems to execute real-time speech synthesis, live on-device translation, and intelligent photography semantic segmentation without draining battery reserves."
        ]
      },
      {
        heading: "Implications for the Pakistani Mobile Consumer Market",
        paragraphs: [
          "Leading semiconductor architects—including MediaTek with its upcoming Dimensity platforms and Samsung with future Exynos designs—have licensed the Cortex-X925 and Immortalis-G925 designs for flagship and upper mid-range silicon destined for the global and Pakistani markets.",
          "For tech-savvy Pakistani smartphone enthusiasts, the widespread adoption of Arm's latest architecture ensures that smartphones arriving over the next calendar year will deliver smoother UI responsiveness, superior thermal throttling resistance during hot summer temperatures, and console-grade graphics fidelity."
        ]
      }
    ]
  },
  {
    id: "honor-magicos-9-yoyo-ai-agent-intent-based-interaction",
    slug: "honor-magicos-9-yoyo-ai-agent-intent-based-interaction",
    title: "HONOR Unveils MagicOS 9.0: On-Device YOYO AI Agent and Intent-Based User Experience",
    summary: "HONOR has officially introduced MagicOS 9.0, built around an industry-first personalized on-device AI Agent capable of completing complex cross-app tasks, recognizing visual intent, and automating daily mobile routines.",
    category: "Software & Updates",
    author: "PakMobile Arena Tech Desk",
    date: "September 26, 2026",
    isoDate: "2026-09-26",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    tags: ["HONOR", "MagicOS 9", "YOYO AI", "Android 15", "Software Updates", "AI Agent"],
    metaTitle: "HONOR MagicOS 9.0 Announced: YOYO AI Agent & Intent UI | Pak Mobile Arena",
    metaDescription: "HONOR introduces MagicOS 9.0 with autonomous on-device YOYO AI Agent, cross-app execution, Magic Portal 2.0, and official rollout schedule for HONOR smartphones.",
    content: [
      {
        heading: "The Dawn of Autonomous Mobile AI Agents",
        paragraphs: [
          "HONOR has officially launched MagicOS 9.0, ushering in what the company defines as the era of 'Autopilot Mobile Operating Systems.' While previous mobile interfaces relied on reactive virtual assistants, MagicOS 9.0 integrates a deeply embedded on-device YOYO AI Agent capable of natural language understanding, cross-application navigation, and autonomous task completion.",
          "Users can provide a single conversational command, such as 'Cancel my automatic beverage subscription' or 'Find the receipt from yesterday's ride and send it to accounts,' and the YOYO Agent will intelligently navigate through installed third-party apps, verify permissions on-screen, and complete the action without requiring tedious manual taps."
        ]
      },
      {
        heading: "Magic Portal 2.0 and Contextual Multitasking",
        paragraphs: [
          "MagicOS 9.0 also expands HONOR's acclaimed Magic Portal concept to version 2.0. By analyzing highlighted text, flight itineraries, location coordinates, or social images via an effortless knuckle gesture or screen-edge drag, the system predicts the user's intent with 92% contextual accuracy.",
          "Dragging an address immediately spawns dual-screen navigation routes and ride-hailing fare comparisons, while dragging an image of a gadget or fashion item instantly invokes PriceOye or WhatMobile pricing comparisons and product availability listings."
        ]
      },
      {
        heading: "On-Device Deepfake Detection and Privacy Safeguards",
        paragraphs: [
          "To combat the rising threat of artificial intelligence fraud, MagicOS 9.0 introduces an on-device AI Deepfake Detection system. Operating locally within HONOR's secure dual TEE (Trusted Execution Environment) hardware enclave, the software inspects video call frames in real-time, detecting micro-expression anomalies, eye-blink inconsistencies, and skin-tone artifacts to warn users of synthetic impersonation attacks.",
          "Furthermore, all personal behavioral profiling and interaction memory stay encrypted on the physical device, ensuring that user private data is never transmitted to remote server farms without explicit per-instance consent."
        ]
      },
      {
        heading: "Rollout Schedule for Pakistani Devices",
        paragraphs: [
          "HONOR has solidified a prominent presence in Pakistan through authorized distributors and prominent retail outlets. HONOR confirmed that MagicOS 9.0 will begin public beta deployments in October, rolling out first to flagship devices including the Magic6 Pro, followed by the HONOR 200 series, HONOR X9b, and affordable favorites like the HONOR X6a and X7b across Pakistani carrier networks."
        ]
      }
    ]
  },
  {
    id: "bluetooth-6-channel-sounding-centimeter-accuracy-low-latency",
    slug: "bluetooth-6-channel-sounding-centimeter-accuracy-low-latency",
    title: "Bluetooth 6.0 Standard Adopted: True Distance-Aware Channel Sounding and Ultra-Low Latency Audio",
    summary: "The Bluetooth Special Interest Group (SIG) has finalized Bluetooth 6.0 specifications, introducing 'Channel Sounding' for true centimeter-level device tracking and precision digital car keys without Ultra-Wideband hardware.",
    category: "Connectivity & Tech",
    author: "PakMobile Arena Tech Desk",
    date: "September 26, 2026",
    isoDate: "2026-09-26",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Bluetooth 6.0", "Channel Sounding", "Wireless Audio", "Find My", "Connectivity", "Smartphones"],
    metaTitle: "Bluetooth 6.0 Explained: Channel Sounding & Centimeter Tracking | Pak Mobile Arena",
    metaDescription: "Bluetooth 6.0 brings Channel Sounding for centimeter-level item tracking, enhanced security for digital keys, and reduced audio latency for wireless earbuds and smartphones.",
    content: [
      {
        heading: "Centimeter-Level Positioning with Channel Sounding",
        paragraphs: [
          "The Bluetooth Special Interest Group (SIG) has formally ratified the Bluetooth Core Specification Version 6.0, marking the most significant evolution of personal area wireless technology in over a decade. The signature breakthrough of Bluetooth 6.0 is 'Bluetooth Channel Sounding,' a sophisticated physical-layer distance estimation technology that brings true centimeter-level positioning accuracy between connected devices.",
          "Until now, consumer item tracking networks like Google Find My Device and Apple Find My relied primarily on Received Signal Strength Indication (RSSI) or expensive Ultra-Wideband (UWB) companion chips. Bluetooth 6.0 achieves Phase-Based Ranging (PBR) across multiple radio frequencies, allowing a smartphone to determine the exact distance and direction of a lost item or smart tag down to a single centimeter without requiring dedicated UWB silicon."
        ]
      },
      {
        heading: "Enhanced Security for Digital Vehicle and Door Keys",
        paragraphs: [
          "Beyond locating misplaced earbuds and keys, Channel Sounding incorporates Round Trip Timing (RTT) cryptographic timestamps to thwart sophisticated 'man-in-the-middle' and relay attacks.",
          "Automakers and smart lock manufacturers can now deploy secure digital car key capabilities directly using standard low-cost Bluetooth transceivers, ensuring that vehicle doors will unlock only when the registered smartphone is verified within a precise, tamper-proof physical proximity perimeter."
        ]
      },
      {
        heading: "Isochronous Audio Enhancements and Gaming Latency",
        paragraphs: [
          "Bluetooth 6.0 introduces 'Decision-Based Advertising Filtering' and 'Monitoring Advertisers' algorithms that dramatically streamline connection negotiation between mobile phones and true wireless stereo (TWS) earphones. By discarding irrelevant discovery packets at the physical radio layer, scanning energy drain is cut by up to 45%.",
          "Furthermore, packet framing improvements for the LC3 audio codec reduce wireless transmission latency to under 15 milliseconds, effectively eliminating audio lag in competitive mobile gaming titles like PUBG Mobile and Call of Duty."
        ]
      },
      {
        heading: "Commercial Rollout in Consumer Devices",
        paragraphs: [
          "Major RF chipmakers including Qualcomm, MediaTek, and Broadcom have announced integrated Bluetooth 6.0 controller modules that will begin appearing in commercial Android and iOS smartphones starting late 2026.",
          "For Pakistani consumers, this transition promises ubiquitous, affordable precision tracking accessories, seamless audio pairing, and robust wireless security across budget and flagship mobile handsets alike."
        ]
      }
    ]
  },
  {
    id: "wifi-7-320mhz-channel-bandwidth-multi-link-operation-pakistan",
    slug: "wifi-7-320mhz-channel-bandwidth-multi-link-operation-pakistan",
    title: "Wi-Fi 7 Adoption Surges: Multi-Link Operation (MLO) and 320MHz Bandwidths Revolutionize Mobile Gaming",
    summary: "As Wi-Fi 7 (802.11be) certified routers and smartphones expand globally, Multi-Link Operation and ultra-wide 320MHz channels are redefining in-home mobile broadband with 40Gbps theoretical speeds and deterministic latency.",
    category: "Connectivity & Tech",
    author: "PakMobile Arena Tech Desk",
    date: "September 26, 2026",
    isoDate: "2026-09-26",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    tags: ["Wi-Fi 7", "802.11be", "Multi-Link Operation", "Wireless Broadband", "Mobile Gaming", "Networking"],
    metaTitle: "Wi-Fi 7 Technology & Multi-Link Operation Explained | Pak Mobile Arena",
    metaDescription: "Learn how Wi-Fi 7 (802.11be) with 320MHz channels and Multi-Link Operation (MLO) delivers 4.8x faster speeds, near-zero gaming ping, and seamless mobile connectivity.",
    content: [
      {
        heading: "The Next Paradigm of Wireless Throughput",
        paragraphs: [
          "The commercial rollout of Wi-Fi 7 (technically known as IEEE 802.11be Extremely High Throughput) is accelerating rapidly across the consumer electronics landscape. Building upon the foundational 6 GHz spectrum pioneered by Wi-Fi 6E, Wi-Fi 7 doubles channel bandwidth to an unprecedented 320 MHz and elevates modulation to 4096-QAM (4K-QAM), packing 20% more data into every transmitted radio symbol.",
          "The result is theoretical aggregate data rates exceeding 46 Gbps—nearly five times faster than Wi-Fi 6—enabling multi-gigabit wireless downloads directly onto compatible smartphones and tablets over standard domestic broadband connections."
        ]
      },
      {
        heading: "Multi-Link Operation (MLO): Conquering Wireless Jitter",
        paragraphs: [
          "While peak throughput captures headlines, the true revolution for mobile users lies in Multi-Link Operation (MLO). In legacy Wi-Fi protocols, a smartphone could transmit data over only one frequency band (2.4 GHz, 5 GHz, or 6 GHz) at any given moment. Under MLO, a Wi-Fi 7 handset establishes simultaneous concurrent streams across multiple radio bands.",
          "If transient microwave interference or a thick concrete wall disrupts the 5 GHz band, data packets route instantly across the 6 GHz or 2.4 GHz link without dropping the socket connection. This slashes average in-game ping times to under 5 milliseconds and guarantees deterministic, jitter-free performance for real-time cloud gaming, 8K video streaming, and VR tethering."
        ]
      },
      {
        heading: "Puncturing Technology for Congested Airwaves",
        paragraphs: [
          "In dense urban apartment complexes across major Pakistani metropolitan centers like Karachi and Lahore, overlapping wireless networks frequently cause severe channel congestion. Wi-Fi 7 solves this through 'Preamble Puncturing.'",
          "If an external signal occupies a narrow 20 MHz slice within an otherwise open 160 MHz or 320 MHz channel block, previous standards were forced to downscale the entire connection to a slower narrow band. Wi-Fi 7 intelligently 'punctures' around the interfering frequency while continuing to transmit across the remaining unobstructed spectrum, preserving blazing-fast connection speeds."
        ]
      },
      {
        heading: "Spectrum Allocation and Ecosystem Outlook in Pakistan",
        paragraphs: [
          "Smartphone manufacturers including Samsung, Xiaomi, vivo, and Apple have equipped their recent flagships and premium mid-rangers with hardware-ready Wi-Fi 7 modems. In Pakistan, commercial ISPs and fiber operators are beginning to certify Wi-Fi 7 optical network terminals (ONTs) and mesh extenders.",
          "As local fiber-to-the-home (FTTH) infrastructure upgrades continue, Wi-Fi 7 ensures that high-speed fiber broadband reaches smartphones without wireless bottlenecks."
        ]
      }
    ]
  }
];

function run() {
  console.log('=== Pak Mobile Arena Sep 26 Batch 2 Expansion ===');

  // 1. Load Phones
  const phones = JSON.parse(fs.readFileSync(PHONES_JSON_SRC, 'utf8'));
  console.log('Existing phones count:', phones.length);

  let addedPhonesCount = 0;
  for (const phone of NEW_PHONES) {
    const existingIdx = phones.findIndex(p => p.id === phone.id || p.name.toLowerCase() === phone.name.toLowerCase());
    if (existingIdx !== -1) {
      console.log(`Phone ${phone.id} already exists at index ${existingIdx}. Updating...`);
      phones[existingIdx] = phone;
    } else {
      console.log(`Adding new phone: ${phone.name} (${phone.id})`);
      phones.push(phone);
      addedPhonesCount++;
    }
  }
  console.log(`Successfully added ${addedPhonesCount} new phones. Total phones: ${phones.length}`);

  const updatedPhonesJson = JSON.stringify(phones, null, 2);
  fs.writeFileSync(PHONES_JSON_SRC, updatedPhonesJson, 'utf8');
  fs.writeFileSync(PHONES_JSON_ROOT, updatedPhonesJson, 'utf8');
  if (fs.existsSync(PHONES_JSON_PUBLIC)) {
    fs.writeFileSync(PHONES_JSON_PUBLIC, updatedPhonesJson, 'utf8');
  }

  // Update src/data/phones.ts
  const rawPhonesTs = fs.readFileSync(PHONES_TS_PATH, 'utf8');
  const phonesStartMarker = 'export const PHONES_DATA: PhoneSpec[] = ';
  const phonesEndMarker = '\nexport const BRANDS: BrandInfo[] = BRAND_DEFINITIONS';

  const pStartIndex = rawPhonesTs.indexOf(phonesStartMarker);
  const pEndIndex = rawPhonesTs.indexOf(phonesEndMarker);

  if (pStartIndex === -1 || pEndIndex === -1) {
    throw new Error('Could not find PHONES_DATA markers in src/data/phones.ts');
  }

  const pPrefix = rawPhonesTs.substring(0, pStartIndex + phonesStartMarker.length);
  const pSuffix = rawPhonesTs.substring(pEndIndex);
  fs.writeFileSync(PHONES_TS_PATH, `${pPrefix}${updatedPhonesJson};\n${pSuffix}`, 'utf8');
  console.log('Updated src/data/phones.ts successfully.');

  // 2. Load News
  const news = JSON.parse(fs.readFileSync(NEWS_JSON_SRC, 'utf8'));
  console.log('Existing news count:', news.length);

  let addedNewsCount = 0;
  for (let i = NEW_NEWS.length - 1; i >= 0; i--) {
    const article = NEW_NEWS[i];
    const existingIdx = news.findIndex(n => n.id === article.id || n.slug === article.slug);
    if (existingIdx !== -1) {
      console.log(`News ${article.id} already exists at index ${existingIdx}. Updating...`);
      news[existingIdx] = article;
    } else {
      console.log(`Prepending fresh news: ${article.title}`);
      news.unshift(article);
      addedNewsCount++;
    }
  }
  console.log(`Successfully added ${addedNewsCount} fresh news articles. Total news: ${news.length}`);

  const updatedNewsJson = JSON.stringify(news, null, 2);
  fs.writeFileSync(NEWS_JSON_SRC, updatedNewsJson, 'utf8');
  fs.writeFileSync(NEWS_JSON_ROOT, updatedNewsJson, 'utf8');

  // Update src/data/news.ts
  const rawNewsTs = fs.readFileSync(NEWS_TS_PATH, 'utf8');
  const newsStartMarker = 'export const NEWS_DATA: NewsArticle[] = ';
  const nStartIndex = rawNewsTs.indexOf(newsStartMarker);

  if (nStartIndex === -1) {
    throw new Error('Could not find NEWS_DATA marker in src/data/news.ts');
  }

  const helperMarker = '\nexport function getSortedNews';
  const helperIdx = rawNewsTs.indexOf(helperMarker);
  if (helperIdx === -1) {
    throw new Error('Could not find getSortedNews in src/data/news.ts');
  }

  // Find the comment block right before getSortedNews if any
  const commentMarker = '\n/**\n * Returns the entire news collection';
  const commentIdx = rawNewsTs.indexOf(commentMarker);
  const splitIdx = commentIdx !== -1 ? commentIdx : helperIdx;

  const nPrefix = rawNewsTs.substring(0, nStartIndex + newsStartMarker.length);
  const nSuffix = ';\n' + rawNewsTs.substring(splitIdx + 1);
  fs.writeFileSync(NEWS_TS_PATH, `${nPrefix}${updatedNewsJson}${nSuffix}`, 'utf8');
  console.log('Updated src/data/news.ts successfully.');

  console.log('=== All files updated successfully! ===');
}

run();
