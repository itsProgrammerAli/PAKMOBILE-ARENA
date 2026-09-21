import { PhoneSpec, BrandInfo } from '../types';

const BRAND_DEFINITIONS: Array<Omit<BrandInfo, 'count'>> = [
  {
    "name": "Apple",
    "logoText": "APPLE",
    "slug": "apple"
  },
  {
    "name": "Samsung",
    "logoText": "SAMSUNG",
    "slug": "samsung"
  },
  {
    "name": "Xiaomi",
    "logoText": "XIAOMI",
    "slug": "xiaomi"
  },
  {
    "name": "Tecno",
    "logoText": "TECNO",
    "slug": "tecno"
  },
  {
    "name": "Vivo",
    "logoText": "VIVO",
    "slug": "vivo"
  },
  {
    "name": "Infinix",
    "logoText": "INFINIX",
    "slug": "infinix"
  },
  {
    "name": "Realme",
    "logoText": "REALME",
    "slug": "realme"
  },
  {
    "name": "Google",
    "logoText": "GOOGLE",
    "slug": "google"
  },
  {
    "name": "OnePlus",
    "logoText": "ONEPLUS",
    "slug": "oneplus"
  },
  {
    "name": "Motorola",
    "logoText": "MOTOROLA",
    "slug": "motorola"
  },
  {
    "name": "Honor",
    "logoText": "HONOR",
    "slug": "honor"
  },
  {
    "name": "Oppo",
    "logoText": "OPPO",
    "slug": "oppo"
  }
];

// Manufacturer corrections checked 2026-09-15: https://support.apple.com/en-my/125091 and https://www.samsung.com/pk/smartphones/galaxy-s26-ultra/
export const PHONES_DATA: PhoneSpec[] = [
  {
    "id": "apple-iphone-17-pro-max",
    "name": "Apple iPhone 17 Pro Max",
    "brand": "Apple",
    "model": "iPhone 17 Pro Max (256GB, 512GB, 1TB, 2TB)",
    "pricePKR": 462499,
    "officialPricePKR": 535600,
    "marketPriceRangePKR": {
      "min": 455000,
      "max": 470000
    },
    "variants": [
      {
        "id": "iphone17pm-256",
        "name": "256GB",
        "ram": "12 GB Unified High-Bandwidth Memory",
        "storage": "256 GB NVMe high-speed flash storage",
        "pricePKR": 462499,
        "officialPricePKR": 535600,
        "marketPriceRangePKR": {
          "min": 455000,
          "max": 470000
        }
      },
      {
        "id": "iphone17pm-512",
        "name": "512GB",
        "ram": "12 GB Unified High-Bandwidth Memory",
        "storage": "512 GB NVMe high-speed flash storage",
        "pricePKR": 544999,
        "officialPricePKR": 619100,
        "marketPriceRangePKR": {
          "min": 535000,
          "max": 555000
        }
      },
      {
        "id": "iphone17pm-1tb",
        "name": "1TB",
        "ram": "12 GB Unified High-Bandwidth Memory",
        "storage": "1 TB (1024 GB) NVMe flash storage with ProRes Log 4K120 direct recording",
        "pricePKR": 732000,
        "officialPricePKR": 732000,
        "marketPriceRangePKR": {
          "min": 720000,
          "max": 745000
        }
      },
      {
        "id": "iphone17pm-2tb",
        "name": "2TB",
        "ram": "12 GB Unified High-Bandwidth Memory",
        "storage": "2 TB (2048 GB) Ultra NVMe flash storage with ProRes Log 4K120 direct recording",
        "pricePKR": 898500,
        "officialPricePKR": 898500,
        "marketPriceRangePKR": {
          "min": 880000,
          "max": 910000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 142500,
      "cnicTaxPKR": 174000,
      "status": "Official PTA Approved",
      "isLocallyAssembled": false
    },
    "ptaPassportTax": 142500,
    "ptaCnicTax": 174000,
    "isLocallyAssembled": false,
    "releaseDate": "September 2025",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/apple-iphone-17-pro-max-white-titanium.webp",
    "tags": [
      "trending",
      "flagship",
      "camera"
    ],
    "specs": {
      "display": "6.9\" Super Retina XDR OLED, 120Hz ProMotion Adaptive Refresh Rate, 2868 x 1320 pixels at 460 ppi, Dynamic Island, Always-On Display, Ceramic Shield 2 front, 3000 nits Peak Outdoor Brightness, Anti-reflective coating",
      "refreshRate": "120Hz ProMotion Super Retina XDR",
      "processor": "Apple A19 Pro (3nm TSMC N3P) Hexa-Core (2 Performance Cores + 4 Efficiency Cores) with 6-Core Next-Gen Ray Tracing GPU, Vapor Chamber Liquid Thermal Cooling & 16-Core Neural Engine",
      "ram": "12 GB Unified High-Bandwidth Memory (Apple Intelligence GenAI optimized)",
      "storage": "256 GB / 512 GB / 1 TB / 2 TB Ultra NVMe Flash Storage",
      "mainCamera": "48MP Fusion main (24mm, f/1.78, second-generation sensor-shift OIS) + 48MP ultrawide (13mm, f/2.2, 120-degree view, Hybrid Focus Pixels) + 48MP telephoto (100mm, 4x, f/2.8, tetraprism, 3D sensor-shift OIS/AF); 12MP optical-quality 8x crop; up to 40x digital zoom",
      "selfieCamera": "18MP Center Stage front camera, f/1.9, autofocus with Focus Pixels; 4K Dolby Vision up to 60fps",
      "battery": "Rechargeable lithium-ion; up to 37 hours video playback (physical-SIM regional model)",
      "charging": "Up to 50% in 20 minutes with a 40W-or-higher USB-C adapter; adapter sold separately",
      "os": "iOS 26 at launch; update availability varies",
      "network": "5G Dual SIM (Nano-SIM + eSIM / Dual eSIM), Aluminium unibody with Ceramic Shield back, Action Button + Dedicated Camera Control Button, USB-C (USB 3; up to 10Gb/s; DisplayPort), IP68 Dust/Water Resistant (6m for 30 mins), Stereo Dual Speakers with Spatial Audio",
      "resolution": "Super Retina XDR (2868 x 1320 pixels), 19.5:9 ratio (~460 ppi)",
      "peakBrightness": "3000 nits peak outdoor brightness, 1000 nits typical",
      "hdrSupport": "Dolby Vision, HDR10, HLG, Always-On ProMotion 1-120Hz",
      "dimensions": "163.4 x 78.0 x 8.75 mm; 231 g (physical-SIM regional model)",
      "buildMaterials": "Aluminium unibody; Ceramic Shield 2 front; Ceramic Shield back",
      "simSlot": "Dual SIM (Nano-SIM and eSIM, or Dual eSIM)",
      "waterResistance": "IP68 water & dust resistance (up to 6m for 30 mins)",
      "stabilization": "Second-generation sensor-shift optical image stabilization (OIS)",
      "videoRecording": "4K @ 24/25/30/60/120fps Dolby Vision HDR, 4K ProRes Log, Spatial Video recording",
      "opticsFeatures": "Photonic Engine, Deep Fusion, Smart HDR 5, LiDAR Scanner, Action Mode",
      "frontVideoRecording": "4K @ 24/25/30/60fps Dolby Vision HDR with Cinematic mode",
      "wirelessCharging": "MagSafe and Qi2 wireless charging up to 25W",
      "wifiBluetooth": "Wi-Fi 7 (2x2 MIMO), Bluetooth 6, Thread; Apple N1 wireless chip",
      "specialHardware": "Dynamic Island, Customizable Action Button, Camera Control capacitive sensor",
      "biometricsAudio": "Face ID TrueDepth facial recognition, Spatial Audio with Dolby Atmos stereo speakers"
    },
    "colors": [
      "Silver Titanium",
      "Dark Titanium",
      "Cosmic Orange"
    ],
    "colorImages": {
      "Silver Titanium": "/images/apple-iphone-17-pro-max-white-titanium.webp",
      "Dark Titanium": "/images/apple-iphone-17-pro-max-dark-titanium.webp",
      "Cosmic Orange": "/images/apple-iphone-17-pro-max-copper-titanium.webp"
    },
    "colorHexes": {
      "Silver Titanium": "#e5e7eb",
      "Dark Titanium": "#2b2f38",
      "Cosmic Orange": "#d97736"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Peshawar",
      "Faisalabad",
      "Multan",
      "Quetta"
    ]
  },
  {
    "id": "apple-iphone-15-pro-max",
    "name": "Apple iPhone 15 Pro Max",
    "brand": "Apple",
    "model": "iPhone 15 Pro Max (256GB)",
    "pricePKR": 392000,
    "officialPricePKR": 481500,
    "marketPriceRangePKR": {
      "min": 385000,
      "max": 400000
    },
    "variants": [
      {
        "id": "iphone15pm-256",
        "name": "256GB",
        "storage": "256 GB NVMe high-speed flash storage",
        "pricePKR": 392000,
        "officialPricePKR": 481500,
        "marketPriceRangePKR": {
          "min": 385000,
          "max": 400000
        }
      },
      {
        "id": "iphone15pm-512",
        "name": "512GB",
        "storage": "512 GB NVMe high-speed flash storage",
        "pricePKR": 575499,
        "officialPricePKR": 575499,
        "marketPriceRangePKR": {
          "min": 565000,
          "max": 585000
        }
      },
      {
        "id": "iphone15pm-1tb",
        "name": "1TB",
        "storage": "1 TB (1024 GB) NVMe flash storage with ProRes Log 4K60 direct recording",
        "pricePKR": 472000,
        "officialPricePKR": 625799,
        "marketPriceRangePKR": {
          "min": 465000,
          "max": 485000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 138500,
      "cnicTaxPKR": 168000,
      "status": "Official PTA Approved",
      "isLocallyAssembled": false
    },
    "ptaPassportTax": 138500,
    "ptaCnicTax": 168000,
    "isLocallyAssembled": false,
    "releaseDate": "September 2023",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://images.priceoye.pk/apple-iphone-15-pro-max-pakistan-priceoye-1inne-500x500.webp",
    "tags": [
      "trending",
      "flagship",
      "camera",
      "gaming"
    ],
    "specs": {
      "display": "6.7\" Super Retina XDR OLED, 120Hz ProMotion Adaptive Refresh Rate, 2796 x 1290 pixels at 460 ppi, Dynamic Island, Always-On Display, HDR10, Dolby Vision, 2000 nits Peak Outdoor Brightness, Ceramic Shield front glass",
      "refreshRate": "120Hz ProMotion Super Retina XDR",
      "processor": "Apple A17 Pro (3nm) Hexa-Core (2x3.78 GHz Performance Cores + 4x2.11 GHz Efficiency Cores) with Hardware-Accelerated Ray Tracing 6-Core Apple GPU & 16-Core Neural Engine",
      "ram": "8 GB Unified Memory",
      "storage": "256 GB / 512 GB / 1 TB NVMe Flash Storage",
      "mainCamera": "Pro 48MP Main (f/1.78, 24mm, 2nd-gen Sensor-Shift OIS, 100% Focus Pixels, 24MP & 48MP Super-high-res) + 12MP Ultra-Wide (f/2.2, 13mm, 120° FOV, 100% Focus Pixels) + 12MP 5x Telephoto (f/2.8, 120mm Tetraprism design, 3D Sensor-Shift OIS, 25x Digital Zoom, LiDAR Scanner)",
      "selfieCamera": "12MP TrueDepth Front Camera (f/1.9, Autofocus with Focus Pixels, Photonic Engine, 4K Dolby Vision HDR up to 60fps, Cinematic Mode 4K30fps)",
      "battery": "4422 mAh Li-Ion High-Efficiency All-Day Battery (Up to 29 hours video playback)",
      "charging": "20W Fast Charging (50% in 30 mins) + 15W MagSafe Wireless + 15W Qi2 Wireless + 4.5W Reverse Wired Charging via USB-C",
      "os": "iOS 17 (Upgradable to iOS 18 with Apple Intelligence Suite & Siri 2.0)",
      "network": "5G Dual SIM (Nano-SIM + eSIM / Dual eSIM), Aerospace-grade Grade 5 Titanium Frame with Textured Matte Glass Back, Action Button, USB-C 3.0 (up to 10Gbps transfer speed with DisplayPort output), IP68 Dust/Water Resistant (6m for 30 mins), Stereo Dual Speakers with Spatial Audio",
      "resolution": "Super Retina XDR (2796 x 1290 pixels), 19.5:9 ratio (~460 ppi)",
      "peakBrightness": "2000 nits peak outdoor brightness, 1000 nits typical, 1600 nits HDR",
      "hdrSupport": "Dolby Vision, HDR10, HLG, 120Hz ProMotion adaptive refresh",
      "dimensions": "159.9 x 76.7 x 8.25 mm, 221g",
      "buildMaterials": "Grade 5 Titanium frame, Ceramic Shield front, Corning textured matte glass back",
      "simSlot": "Nano-SIM + eSIM (Dual eSIM support)",
      "waterResistance": "IP68 water & dust resistance (up to 6m for 30 mins)",
      "stabilization": "3D Sensor-shift OIS (optical image stabilization) and autofocus (sensor-shift)",
      "videoRecording": "4K @ 24/25/30/60fps, 1080p @ 25/30/60/120/240fps, 10-bit ProRes Log, Dolby Vision HDR",
      "opticsFeatures": "Photonic Engine, Deep Fusion, LiDAR scanner, Smart HDR 5, Night Mode portraits",
      "frontVideoRecording": "4K @ 24/25/30/60fps, 1080p @ 25/30/60/120fps with gyro-EIS",
      "wirelessCharging": "15W MagSafe wireless, 15W Qi2 wireless charging, 4.5W reverse wired",
      "wifiBluetooth": "Wi-Fi 6E (802.11ax) with 2x2 MIMO, Bluetooth 5.3, Second-gen Ultra Wideband (UWB)",
      "specialHardware": "Dynamic Island, Action Button, USB Type-C 3.2 Gen 2 (up to 10Gbps transfer speed)",
      "biometricsAudio": "Face ID 3D facial scanner, stereo speakers with Spatial Audio playback"
    },
    "colors": [
      "Natural Titanium",
      "White Titanium",
      "Blue Titanium",
      "Black Titanium"
    ],
    "colorImages": {
      "Natural Titanium": "https://images.priceoye.pk/apple-iphone-15-pro-max-pakistan-priceoye-1inne-500x500.webp",
      "White Titanium": "https://images.priceoye.pk/apple-iphone-15-pro-max-pakistan-priceoye-4a9o4-500x500.webp",
      "Blue Titanium": "https://images.priceoye.pk/apple-iphone-15-pro-max-pakistan-priceoye-v3uz5-500x500.webp",
      "Black Titanium": "https://images.priceoye.pk/apple-iphone-15-pro-max-pakistan-priceoye-w67mx-500x500.webp"
    },
    "colorHexes": {
      "Natural Titanium": "#9a9893",
      "White Titanium": "#e3e4e6",
      "Blue Titanium": "#39424e",
      "Black Titanium": "#363538"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Peshawar",
      "Faisalabad",
      "Multan",
      "Quetta"
    ]
  },
  {
    "id": "samsung-galaxy-s26-ultra",
    "name": "Samsung Galaxy S26 Ultra",
    "brand": "Samsung",
    "model": "Galaxy S26 Ultra (256GB, 512GB, 1TB)",
    "pricePKR": 354999,
    "officialPricePKR": 459999,
    "marketPriceRangePKR": {
      "min": 345000,
      "max": 365000
    },
    "variants": [
      {
        "id": "s26u-12-256",
        "name": "12GB / 256GB",
        "ram": "12 GB LPDDR5X (+ 12 GB RAM Plus virtual memory = 24GB)",
        "storage": "256 GB UFS 4.0 ultra-fast internal storage",
        "pricePKR": 354999,
        "officialPricePKR": 459999,
        "marketPriceRangePKR": {
          "min": 345000,
          "max": 365000
        }
      },
      {
        "id": "s26u-12-512",
        "name": "12GB / 512GB",
        "ram": "12 GB LPDDR5X (+ 12 GB RAM Plus virtual memory = 24GB)",
        "storage": "512 GB UFS 4.0 ultra-fast internal storage",
        "pricePKR": 409999,
        "officialPricePKR": 519999,
        "marketPriceRangePKR": {
          "min": 398000,
          "max": 420000
        }
      },
      {
        "id": "s26u-16-1tb",
        "name": "16GB / 1TB",
        "ram": "16 GB LPDDR5X (+ 16 GB RAM Plus virtual memory = 32GB)",
        "storage": "1 TB (1024 GB) UFS 4.0 high-speed storage with 8K ProRes video recording support",
        "pricePKR": 489999,
        "officialPricePKR": 609999,
        "marketPriceRangePKR": {
          "min": 475000,
          "max": 500000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 145000,
      "cnicTaxPKR": 175000,
      "status": "Official PTA Approved",
      "isLocallyAssembled": false
    },
    "ptaPassportTax": 145000,
    "ptaCnicTax": 175000,
    "isLocallyAssembled": false,
    "releaseDate": "March 2026",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/samsung-galaxy-s26-ultra-black.webp",
    "tags": [
      "trending",
      "flagship",
      "camera",
      "gaming"
    ],
    "specs": {
      "display": "6.9\" QHD+ Dynamic LTPO AMOLED 2X, 1-120Hz Adaptive Refresh Rate, 3120 x 1440 pixels (505 ppi), 3000 nits Peak Brightness, Corning Gorilla Glass Armor 2 with Anti-Reflective Coating & Hardware-Level Privacy Display Angle Protection",
      "refreshRate": "120Hz Dynamic LTPO AMOLED 2X",
      "processor": "Qualcomm Snapdragon 8 Elite Gen 5 for Galaxy",
      "ram": "12 GB / 16 GB LPDDR5X (+ RAM Plus virtual memory support)",
      "storage": "256 GB / 512 GB / 1 TB UFS 4.0 Ultra-High-Speed Storage",
      "mainCamera": "200MP ISOCELL HP2+ Ultra Main OIS (f/1.4, Multi-directional PDAF, Laser AF) + 50MP Periscope Telephoto (5x Optical / 10x Optical Quality / 100x Space Zoom, OIS, f/2.9) + 50MP Ultra-Wide (120˚ FOV, Super Steady, Dual Pixel PDAF, Macro) + 10MP Telephoto (3x Optical, OIS) with 8K@30fps UHD HDR Video",
      "selfieCamera": "12MP Dual Pixel Front Camera (f/2.2, 26mm, Dual Pixel PDAF, 4K@60fps UHD with Auto HDR)",
      "battery": "5000 mAh Li-Ion Intelligent All-Day Battery with 2.2x larger vapor chamber liquid cooling",
      "charging": "60W Super Fast Charging 2.0 (75% in 30 mins) + 25W Fast Wireless 2.0 + 4.5W Wireless PowerShare",
      "os": "Android 16 with One UI 8.5 (Guaranteed 7 Major Android OS Upgrades & 7 Years Security Updates, Full Galaxy AI Suite 2.0)",
      "network": "5G Dual SIM (Nano-SIM + eSIM / Dual eSIM), Built-in S Pen stylus without Bluetooth or remote Air Actions, IP68 Dust/Water Resistant (1.5m for 30 mins), Armor Aluminum frame, Stereo Dual Speakers tuned by AKG with Dolby Atmos, Ultrasonic In-Display Fingerprint 3D Sonic Gen 2",
      "resolution": "Dynamic LTPO AMOLED 2X QHD+ (3120 x 1440 pixels), 19.5:9 ratio (~500 ppi)",
      "peakBrightness": "3000 nits peak brightness, Vision Booster 2.0",
      "hdrSupport": "HDR10+, 1-120Hz dynamic LTPO adaptive refresh rate",
      "dimensions": "163.6 x 78.1 x 7.9 mm; 214 g",
      "buildMaterials": "Armor Aluminum frame with Corning Gorilla Glass protection",
      "simSlot": "Dual SIM (2 Nano-SIMs + eSIM, dual stand-by)",
      "waterResistance": "IP68 water & dust resistance (up to 1.5m for 30 mins)",
      "stabilization": "Enhanced OIS with wider correction angle + Super Steady video gyro-EIS",
      "videoRecording": "8K @ 30fps, 4K @ 30/60/120fps, 1080p @ 30/60/240fps, HDR10+, stereo sound rec.",
      "opticsFeatures": "200MP ISOCELL HP2+, Laser Autofocus, 100x Space Zoom, Quad Tele System, Galaxy AI ProVisual",
      "frontVideoRecording": "4K @ 30/60fps, 1080p @ 30fps with Dual Pixel PDAF",
      "wirelessCharging": "15W Fast Wireless Charging 2.0 + 4.5W Wireless PowerShare reverse charging",
      "wifiBluetooth": "Wi-Fi 7 (802.11be tri-band), Bluetooth 5.4, Ultra Wideband (UWB)",
      "specialHardware": "Integrated S Pen (no Bluetooth pairing or remote Air Actions); Samsung DeX",
      "biometricsAudio": "Qualcomm 3D Sonic Gen 2 ultrasonic in-display fingerprint, stereo speakers by AKG Dolby Atmos"
    },
    "colors": [
      "Titanium Black",
      "Titanium Gray",
      "Titanium Silver",
      "Titanium Blue"
    ],
    "colorImages": {
      "Titanium Black": "/images/samsung-galaxy-s26-ultra-black.webp",
      "Titanium Gray": "/images/samsung-galaxy-s26-ultra-gray.jpg",
      "Titanium Silver": "/images/samsung-galaxy-s26-ultra-silver.webp",
      "Titanium Blue": "/images/samsung-galaxy-s26-ultra-blue.webp"
    },
    "colorHexes": {
      "Titanium Black": "#2b2b2b",
      "Titanium Gray": "#635a77",
      "Titanium Silver": "#eceff1",
      "Titanium Blue": "#c2d7e5"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
      "Peshawar",
      "Faisalabad",
      "Multan",
      "Quetta"
    ]
  },
  {
    "id": "samsung-galaxy-s24-ultra",
    "name": "Samsung Galaxy S24 Ultra",
    "brand": "Samsung",
    "model": "Galaxy S24 Ultra (12GB/256GB)",
    "pricePKR": 316999,
    "officialPricePKR": 469999,
    "marketPriceRangePKR": {
      "min": 312000,
      "max": 325000
    },
    "variants": [
      {
        "id": "s24u-12-256",
        "name": "12GB / 256GB",
        "ram": "12 GB LPDDR5X (+ 8 GB RAM Plus virtual memory)",
        "storage": "256 GB UFS 4.0 ultra-high-speed storage",
        "pricePKR": 316999,
        "officialPricePKR": 434999,
        "marketPriceRangePKR": {
          "min": 312000,
          "max": 325000
        }
      },
      {
        "id": "s24u-12-512",
        "name": "12GB / 512GB",
        "ram": "12 GB LPDDR5X (+ 8 GB RAM Plus virtual memory)",
        "storage": "512 GB UFS 4.0 ultra-high-speed storage",
        "pricePKR": 334999,
        "officialPricePKR": 469999,
        "marketPriceRangePKR": {
          "min": 330000,
          "max": 345000
        }
      },
      {
        "id": "s24u-12-1tb",
        "name": "12GB / 1TB",
        "ram": "12 GB LPDDR5X (+ 8 GB RAM Plus virtual memory)",
        "storage": "1 TB (1024 GB) UFS 4.0 enterprise-grade storage",
        "pricePKR": 389999,
        "officialPricePKR": 529999,
        "marketPriceRangePKR": {
          "min": 380000,
          "max": 400000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 138500,
      "cnicTaxPKR": 168000,
      "status": "Official PTA Approved",
      "isLocallyAssembled": false
    },
    "ptaPassportTax": 138500,
    "ptaCnicTax": 168000,
    "isLocallyAssembled": false,
    "releaseDate": "January 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://images.priceoye.pk/samsung-galaxy-s24-ultra-pakistan-priceoye-d4s6b-500x500.webp",
    "tags": [
      "trending",
      "flagship",
      "camera",
      "gaming"
    ],
    "specs": {
      "display": "6.8\" QHD+ Dynamic LTPO AMOLED 2X, 1-120Hz Adaptive Refresh Rate, 3120 x 1440 pixels, HDR10+, 2600 nits Peak Brightness, Corning Gorilla Armor (75% reflection reduction)",
      "refreshRate": "120Hz Dynamic LTPO AMOLED 2X",
      "processor": "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm) Octa-Core (1x3.39 GHz Cortex-X4 & 3x3.1 GHz Cortex-A720 & 2x2.9 GHz Cortex-A720 & 2x2.2 GHz Cortex-A520) with Adreno 750 (1 GHz) GPU",
      "ram": "12 GB LPDDR5X (+ 8 GB RAM Plus virtual memory = 20GB)",
      "storage": "256 GB / 512 GB / 1 TB UFS 4.0 High-Speed Internal Storage",
      "mainCamera": "200MP Wide OIS (f/1.7, Super Quad Pixel AF) + 50MP Periscope Telephoto (5x Optical / 10x Optical Quality / 100x Space Zoom, OIS, f/3.4) + 10MP Telephoto (3x Optical, OIS, f/2.4) + 12MP Ultra-Wide (120˚ FOV, Super Steady, f/2.2)",
      "selfieCamera": "12MP Dual Pixel Front Camera (f/2.2, 26mm, Dual Pixel PDAF, 4K@60fps UHD with Auto HDR)",
      "battery": "5000 mAh Li-Ion Intelligent All-Day Battery with 1.9x larger vapor chamber cooling",
      "charging": "45W Super Fast Charging 2.0 (65% in 30 mins) + 15W Fast Wireless 2.0 + 4.5W Wireless PowerShare",
      "os": "Android 14 with One UI 6.1 (Guaranteed 7 Major Android OS Upgrades & 7 Years Security Updates, Galaxy AI Suite)",
      "network": "5G Dual SIM (Nano-SIM + eSIM / Dual eSIM), Built-in Bluetooth S-Pen Stylus, IP68 Dust/Water Resistant (1.5m for 30 mins), Grade 2 Titanium Frame, Stereo Dual Speakers tuned by AKG with Dolby Atmos, Ultrasonic In-Display Fingerprint",
      "resolution": "Dynamic LTPO AMOLED 2X QHD+ (3120 x 1440 pixels), 19.5:9 ratio (~505 ppi)",
      "peakBrightness": "2600 nits peak brightness, Vision Booster",
      "hdrSupport": "HDR10+, 1-120Hz LTPO adaptive refresh rate",
      "dimensions": "162.3 x 79.0 x 8.6 mm, 232g",
      "buildMaterials": "Titanium frame; Corning Gorilla Armor front; Gorilla Glass Victus 2 back",
      "simSlot": "Dual SIM (2 Nano-SIMs and eSIM, dual stand-by)",
      "waterResistance": "IP68 water & dust resistant (up to 1.5m for 30 mins)",
      "stabilization": "OIS (Optical Image Stabilization) on main and both telephoto lenses + Super Steady gyro-EIS",
      "videoRecording": "8K @ 24/30fps, 4K @ 30/60/120fps, 1080p @ 30/60/240fps, HDR10+, stereo audio rec.",
      "opticsFeatures": "200MP sensor, Laser AF, 5x optical periscope, 3x optical telephoto, 100x Space Zoom, ProVisual Engine",
      "frontVideoRecording": "4K @ 30/60fps, 1080p @ 30fps with Dual Pixel AF",
      "wirelessCharging": "15W Fast Wireless Charging 2.0, 4.5W reverse Wireless PowerShare",
      "wifiBluetooth": "Wi-Fi 7 (802.11be tri-band), Bluetooth 5.3, Ultra Wideband (UWB)",
      "specialHardware": "Built-in S-Pen stylus with Bluetooth remote control, Samsung DeX desktop mode support",
      "biometricsAudio": "Ultrasonic under-display fingerprint sensor, stereo speakers tuned by AKG with Dolby Atmos"
    },
    "colors": [
      "Titanium Gray",
      "Titanium Black",
      "Titanium Violet",
      "Titanium Yellow",
      "Titanium Blue",
      "Titanium Green"
    ],
    "colorImages": {
      "Titanium Gray": "https://images.priceoye.pk/samsung-galaxy-s24-ultra-pakistan-priceoye-d4s6b-500x500.webp",
      "Titanium Black": "https://images.priceoye.pk/samsung-galaxy-s24-ultra-pakistan-priceoye-0kp8e-500x500.webp",
      "Titanium Violet": "https://images.priceoye.pk/samsung-galaxy-s24-ultra-pakistan-priceoye-k3tm5-500x500.webp",
      "Titanium Yellow": "https://images.priceoye.pk/samsung-galaxy-s24-ultra-pakistan-priceoye-8hwmu-500x500.webp",
      "Titanium Blue": "https://images.priceoye.pk/samsung-galaxy-s24-ultra-pakistan-priceoye-clkkr-500x500.webp",
      "Titanium Green": "https://images.priceoye.pk/samsung-galaxy-s24-ultra-pakistan-priceoye-tiebw-500x500.webp"
    },
    "colorHexes": {
      "Titanium Gray": "#8a867e",
      "Titanium Black": "#2b2b2b",
      "Titanium Violet": "#524b59",
      "Titanium Yellow": "#d8cfb3",
      "Titanium Blue": "#a6b6c2",
      "Titanium Green": "#b8c5b3"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
      "Peshawar",
      "Faisalabad",
      "Multan",
      "Quetta"
    ]
  },
  {
    "id": "samsung-galaxy-a55-5g",
    "name": "Samsung Galaxy A55 5G",
    "brand": "Samsung",
    "model": "Galaxy A55 5G (8GB/256GB)",
    "pricePKR": 99999,
    "officialPricePKR": 139999,
    "marketPriceRangePKR": {
      "min": 98000,
      "max": 104000
    },
    "variants": [
      {
        "id": "a55-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB (+ 8 GB RAM Plus virtual memory = 16GB)",
        "storage": "256 GB built-in (microSD Card Slot supported up to 1TB via shared SIM slot)",
        "pricePKR": 99999,
        "officialPricePKR": 139999,
        "marketPriceRangePKR": {
          "min": 98000,
          "max": 104000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 68900,
      "cnicTaxPKR": 84200,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 68900,
    "ptaCnicTax": 84200,
    "isLocallyAssembled": true,
    "releaseDate": "March 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://images.priceoye.pk/samsung-galaxy-a55-5g-pakistan-priceoye-otyr1-500x500.webp",
    "tags": [
      "trending",
      "camera",
      "gaming"
    ],
    "specs": {
      "display": "6.6\" FHD+ Super AMOLED, 120Hz Refresh Rate, 1080 x 2340 pixels, HDR10+, 1000 nits (HBM) Peak Brightness, Corning Gorilla Glass Victus+ with Vision Booster",
      "refreshRate": "120Hz Super AMOLED",
      "processor": "Samsung Exynos 1480 (4nm) Octa-Core (4x2.75 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55) with AMD Xclipse 530 GPU (RDNA 2 Architecture)",
      "ram": "8 GB (+ 8 GB RAM Plus virtual memory = 16GB)",
      "storage": "256 GB built-in (microSD Card Slot supported up to 1TB via shared SIM slot)",
      "mainCamera": "50MP Main OIS (f/1.8, 1/1.56\", 1.0µm, PDAF, OIS) + 12MP Ultra-Wide (f/2.2, 123° FOV) + 5MP Macro (f/2.4) with Super HDR Video & 4-in-1 Pixel Binning",
      "selfieCamera": "32MP Ultra-Clear Wide Front Camera (f/2.2, 26mm, 4K@30fps UHD Video Recording with Dual Video Bokeh)",
      "battery": "5000 mAh Li-Ion Long-Lasting 2-Day Battery with 70% larger vapor chamber cooling",
      "charging": "25W Super Fast Charging Protocol (50% in ~30 mins)",
      "os": "Android 14 with One UI 6.1 (4 Major Android OS Upgrades & 5 Years Security Updates, Samsung Knox Vault)",
      "network": "5G Dual SIM (Nano-SIM, dual stand-by / MicroSD), Flat Brushed Aluminum Frame with Key Island design, IP67 Dust & Water Resistance (1m for 30 mins), Stereo Dual Speakers with Dolby Atmos, Optical In-Display Fingerprint",
      "resolution": "FHD+ Super AMOLED (2340 x 1080 pixels), 19.5:9 ratio (~390 ppi)",
      "peakBrightness": "1000 nits HBM (High Brightness Mode), Vision Booster",
      "hdrSupport": "HDR10+, 120Hz refresh rate",
      "dimensions": "161.1 x 77.4 x 8.2 mm, 213g",
      "buildMaterials": "Aluminum metal frame with Corning Gorilla Glass Victus+ front and back",
      "simSlot": "Hybrid Dual SIM (Nano-SIM, dual stand-by, shares slot with microSD)",
      "waterResistance": "IP67 dust/water resistant (up to 1m for 30 mins)",
      "stabilization": "OIS (Optical Image Stabilization) on 50MP main sensor + VDIS gyro-EIS",
      "videoRecording": "4K @ 30fps, 1080p @ 30/60fps with gyro-EIS",
      "opticsFeatures": "50MP 1/1.56\" sensor, 12MP Ultra-wide 123° FOV, 5MP Macro, Nightography",
      "frontVideoRecording": "4K @ 30fps, 1080p @ 30/60fps",
      "wirelessCharging": "Not supported (25W wired fast charging)",
      "wifiBluetooth": "Wi-Fi 6 (802.11ax dual-band), Bluetooth 5.3, NFC",
      "specialHardware": "Samsung Knox Vault hardware security, Key Island button design",
      "biometricsAudio": "Optical under-display fingerprint scanner, stereo speakers with Dolby Atmos"
    },
    "colors": [
      "Awesome Navy",
      "Awesome Iceblue",
      "Awesome Lilac",
      "Awesome Lemon"
    ],
    "colorImages": {
      "Awesome Navy": "https://images.priceoye.pk/samsung-galaxy-a55-5g-pakistan-priceoye-otyr1-500x500.webp",
      "Awesome Iceblue": "https://images.priceoye.pk/samsung-galaxy-a55-5g-pakistan-priceoye-y8qkp-500x500.webp",
      "Awesome Lilac": "https://images.priceoye.pk/samsung-galaxy-a55-5g-pakistan-priceoye-5ybpv-500x500.webp",
      "Awesome Lemon": "https://images.priceoye.pk/samsung-galaxy-a55-5g-pakistan-priceoye-22hvw-500x500.webp"
    },
    "colorHexes": {
      "Awesome Navy": "#2b303c",
      "Awesome Iceblue": "#e1e9f0",
      "Awesome Lilac": "#e2d4e7",
      "Awesome Lemon": "#f2ebad"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Peshawar"
    ]
  },
  {
    "id": "samsung-galaxy-a35-5g",
    "name": "Samsung Galaxy A35 5G",
    "brand": "Samsung",
    "model": "Galaxy A35 5G (8GB/256GB)",
    "pricePKR": 83499,
    "officialPricePKR": 119999,
    "marketPriceRangePKR": {
      "min": 82000,
      "max": 86000
    },
    "variants": [
      {
        "id": "a35-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB (+ 8 GB RAM Plus virtual memory = 16GB)",
        "storage": "256 GB built-in (microSD Card Slot supported up to 1TB via shared SIM slot)",
        "pricePKR": 83499,
        "officialPricePKR": 119999,
        "marketPriceRangePKR": {
          "min": 82000,
          "max": 86000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 40500,
      "cnicTaxPKR": 50400,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 40500,
    "ptaCnicTax": 50400,
    "isLocallyAssembled": true,
    "releaseDate": "March 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/samsung-galaxy-a35-5g-navy.webp",
    "tags": [
      "trending",
      "camera",
      "battery"
    ],
    "specs": {
      "display": "6.6\" FHD+ Super AMOLED, 120Hz Refresh Rate, 1080 x 2340 pixels, 1000 nits (HBM) Peak Brightness, Corning Gorilla Glass Victus+ with Vision Booster",
      "refreshRate": "120Hz Super AMOLED",
      "processor": "Samsung Exynos 1380 (5nm) Octa-Core (4x2.4 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55) with Mali-G68 MP5 GPU",
      "ram": "8 GB (+ 8 GB RAM Plus virtual memory = 16GB)",
      "storage": "256 GB built-in (microSD Card Slot supported up to 1TB via shared SIM slot)",
      "mainCamera": "50MP Main OIS (f/1.8, 1/1.96\", PDAF, OIS) + 8MP Ultra-Wide (f/2.2, 123° FOV) + 5MP Macro (f/2.4) with 4K Video Recording & Super HDR",
      "selfieCamera": "13MP Clear Wide Front Camera (f/2.2, 4K@30fps UHD Video Recording)",
      "battery": "5000 mAh Li-Ion Long-Lasting 2-Day Battery with intelligent power management",
      "charging": "25W Super Fast Charging Protocol",
      "os": "Android 14 with One UI 6.1 (4 Major Android OS Upgrades & 5 Years Security Updates, Samsung Knox Vault)",
      "network": "5G Dual SIM (Nano-SIM, dual stand-by / MicroSD), Key Island Design with Premium Glass Back, IP67 Dust & Water Resistance (1m for 30 mins), Stereo Dual Speakers with Dolby Atmos, Optical In-Display Fingerprint",
      "resolution": "FHD+ Super AMOLED (2340 x 1080 pixels), 19.5:9 ratio (~390 ppi)",
      "peakBrightness": "1000 nits HBM, Vision Booster",
      "hdrSupport": "120Hz refresh rate, HDR support",
      "dimensions": "161.7 x 78.0 x 8.2 mm, 209g",
      "buildMaterials": "Corning Gorilla Glass Victus+ front, glass back, reinforced plastic frame",
      "simSlot": "Hybrid Dual SIM (Nano-SIM, dual stand-by, microSD slot)",
      "waterResistance": "IP67 dust/water resistant (up to 1m for 30 mins)",
      "stabilization": "OIS (Optical Image Stabilization) on 50MP main sensor + VDIS",
      "videoRecording": "4K @ 30fps, 1080p @ 30/60fps with gyro-EIS",
      "opticsFeatures": "50MP main, 8MP ultra-wide, 5MP macro, Auto Night Mode",
      "frontVideoRecording": "4K @ 30fps, 1080p @ 30fps",
      "wirelessCharging": "Not supported (25W wired fast charging)",
      "wifiBluetooth": "Wi-Fi 6 (802.11ax dual-band), Bluetooth 5.3, NFC",
      "specialHardware": "Samsung Knox Vault hardware enclave, Key Island design",
      "biometricsAudio": "Optical under-display fingerprint scanner, stereo speakers with Dolby Atmos"
    },
    "colors": [
      "Awesome Navy",
      "Awesome Iceblue",
      "Awesome Lilac",
      "Awesome Lemon"
    ],
    "colorImages": {
      "Awesome Navy": "/images/samsung-galaxy-a35-5g-navy.webp",
      "Awesome Iceblue": "/images/samsung-galaxy-a35-5g-iceblue.webp",
      "Awesome Lilac": "/images/samsung-galaxy-a35-5g-lilac.webp",
      "Awesome Lemon": "/images/samsung-galaxy-a35-5g-lemon.webp"
    },
    "colorHexes": {
      "Awesome Navy": "#2b303c",
      "Awesome Iceblue": "#e1e9f0",
      "Awesome Lilac": "#e2d4e7",
      "Awesome Lemon": "#f2ebad"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Gujranwala"
    ]
  },
  {
    "id": "samsung-galaxy-a54-5g",
    "name": "Samsung Galaxy A54 5G",
    "brand": "Samsung",
    "model": "Galaxy A54 5G (8GB/256GB)",
    "pricePKR": 80499,
    "officialPricePKR": 140999,
    "marketPriceRangePKR": {
      "min": 79000,
      "max": 83000
    },
    "variants": [
      {
        "id": "a54-8-128",
        "name": "8GB / 128GB",
        "ram": "8 GB (+ 8 GB RAM Plus virtual memory = 16GB)",
        "storage": "128 GB built-in (microSD Card Slot supported up to 1TB via shared SIM slot)",
        "pricePKR": 80499,
        "officialPricePKR": 110000,
        "marketPriceRangePKR": {
          "min": 79000,
          "max": 83000
        }
      },
      {
        "id": "a54-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB (+ 8 GB RAM Plus virtual memory = 16GB)",
        "storage": "256 GB built-in (microSD Card Slot supported up to 1TB via shared SIM slot)",
        "pricePKR": 84999,
        "officialPricePKR": 140999,
        "marketPriceRangePKR": {
          "min": 83000,
          "max": 88000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 40500,
      "cnicTaxPKR": 50400,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 40500,
    "ptaCnicTax": 50400,
    "isLocallyAssembled": true,
    "releaseDate": "March 2023",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://images.priceoye.pk/samsung-galaxy-a54-5g-pakistan-priceoye-41gvz-500x500.webp",
    "tags": [
      "camera",
      "gaming"
    ],
    "specs": {
      "display": "6.4\" FHD+ Super AMOLED, 120Hz Refresh Rate, 1080 x 2340 pixels, HDR10+, 1000 nits (HBM) Peak Brightness, Corning Gorilla Glass 5",
      "refreshRate": "120Hz Super AMOLED",
      "processor": "Samsung Exynos 1380 (5nm) Octa-Core (4x2.4 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55) with Mali-G68 MP5 GPU",
      "ram": "8 GB (+ 8 GB RAM Plus virtual memory = 16GB)",
      "storage": "256 GB built-in (microSD Card Slot supported up to 1TB via shared SIM slot)",
      "mainCamera": "50MP Main OIS (f/1.8, All-Pixel Autofocus, VDIS) + 12MP Ultra-Wide (f/2.2, 123° FOV) + 5MP Macro (f/2.4) with LED Flash",
      "selfieCamera": "32MP Ultra-Clear Wide Front Camera (f/2.2, 26mm, 4K@30fps UHD Video Recording)",
      "battery": "5000 mAh Li-Po Long-Lasting 2-Day Battery",
      "charging": "25W Super Fast Charging (50% in 30 mins)",
      "os": "Android 13 with One UI 5.1 at launch; up to four Android generation upgrades and five years of security updates",
      "network": "5G Dual SIM (Nano-SIM, dual stand-by / MicroSD), IP67 Dust & Water Resistance (1m for 30 mins), Stereo Dual Speakers with Dolby Atmos, Optical In-Display Fingerprint",
      "resolution": "FHD+ Super AMOLED (2340 x 1080 pixels), 19.5:9 ratio (~403 ppi)",
      "peakBrightness": "1000 nits HBM, Vision Booster",
      "hdrSupport": "HDR10+, 120Hz adaptive refresh rate",
      "dimensions": "158.2 x 76.7 x 8.2 mm, 202g",
      "buildMaterials": "Corning Gorilla Glass 5 front and back, plastic frame",
      "simSlot": "Hybrid Dual SIM (Nano-SIM, dual stand-by, microSD expandable)",
      "waterResistance": "IP67 dust/water resistant (up to 1m for 30 mins)",
      "stabilization": "OIS (Optical Image Stabilization) + VDIS (Video Digital Image Stabilization)",
      "videoRecording": "4K @ 30fps, 1080p @ 30/60fps, 720p @ 480fps slow-mo",
      "opticsFeatures": "50MP All-Pixel AF sensor, 12MP Ultra-wide 123° FOV, 5MP Macro",
      "frontVideoRecording": "4K @ 30fps, 1080p @ 30/60fps",
      "wirelessCharging": "Not supported (25W wired fast charging)",
      "wifiBluetooth": "Wi-Fi 6 (802.11ax dual-band), Bluetooth 5.3, NFC",
      "specialHardware": "Samsung Knox security, linear haptic feedback motor",
      "biometricsAudio": "Optical under-display fingerprint scanner, stereo speakers with Dolby Atmos"
    },
    "colors": [
      "Awesome Violet",
      "Awesome Graphite",
      "Awesome White",
      "Awesome Lime"
    ],
    "colorImages": {
      "Awesome Violet": "https://images.priceoye.pk/samsung-galaxy-a54-5g-pakistan-priceoye-41gvz-500x500.webp",
      "Awesome Graphite": "https://images.priceoye.pk/samsung-galaxy-a54-5g-pakistan-priceoye-sem0b-500x500.webp",
      "Awesome White": "https://images.priceoye.pk/samsung-galaxy-a54-5g-pakistan-priceoye-nwjoh-500x500.webp",
      "Awesome Lime": "https://images.priceoye.pk/samsung-galaxy-a54-5g-pakistan-priceoye-wmmpy-500x500.webp"
    },
    "colorHexes": {
      "Awesome Violet": "#a794db",
      "Awesome Graphite": "#2e3239",
      "Awesome White": "#f1f3f6",
      "Awesome Lime": "#d7e372"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
      "Multan",
      "Peshawar"
    ]
  },
  {
    "id": "tecno-camon-30-pro-5g",
    "name": "Tecno Camon 30 Pro 5G",
    "brand": "Tecno",
    "model": "Camon 30 Pro 5G (12GB/512GB)",
    "pricePKR": 93499,
    "officialPricePKR": 99999,
    "marketPriceRangePKR": {
      "min": 92000,
      "max": 95000
    },
    "variants": [
      {
        "id": "camon30p-12-512",
        "name": "12GB / 512GB",
        "ram": "12 GB (+ 12 GB Extended Virtual RAM = 24GB)",
        "storage": "512 GB UFS 3.1 ultra-fast internal storage",
        "pricePKR": 93499,
        "officialPricePKR": 99999,
        "marketPriceRangePKR": {
          "min": 92000,
          "max": 95000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 40500,
      "cnicTaxPKR": 50400,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 40500,
    "ptaCnicTax": 50400,
    "isLocallyAssembled": true,
    "releaseDate": "May 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/tecno-camon-30-pro-basaltic-dark.webp",
    "tags": [
      "trending",
      "camera",
      "gaming"
    ],
    "specs": {
      "display": "6.78\" FHD+ 144Hz AMOLED Display, 1080 x 2436 pixels, 1.07 Billion Colors, 2160Hz PWM High-Frequency Dimming, Wet Finger Touch, Corning Gorilla Glass 5",
      "refreshRate": "144Hz 1.07B Ultra AMOLED",
      "processor": "MediaTek Dimensity 8200 Ultimate 5G (4nm) Octa-Core (1x3.1 GHz Cortex-A78 & 3x3.0 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55) with Mali-G610 MC6 GPU",
      "ram": "12 GB LPDDR5X (+ 12 GB Extended Virtual RAM = 24GB total)",
      "storage": "512 GB UFS 3.1 high-speed storage",
      "mainCamera": "50MP Sony IMX890 Flagship OIS (1/1.56\", f/1.88, OIS, 1.0µm pixel size) + 50MP Ultra-Wide & 2.5cm Macro (114° FOV, Autofocus) + 2MP Depth with Dual Color Temperature Flash & 4K@60fps HDR Video Recording",
      "selfieCamera": "50MP Eye-Tracking Autofocus Front Camera (f/2.45, 4K@60fps UHD Video Recording, Dual LED Flash)",
      "battery": "5000 mAh Li-Po Long-Lasting Battery",
      "charging": "70W Ultra Charge Protocol (0 to 100% in ~45 mins)",
      "os": "Android 14 with HiOS 14 (Smart Breathing Action Light indicator, Ella AI Assistant, 3 Years Android Security Updates)",
      "network": "5G Dual SIM (Nano-SIM, dual stand-by), Classic Camera Side-Axis Design, Dual Stereo Speakers with Dolby Atmos & Hi-Res Audio, In-Display Optical Fingerprint, IR Blaster",
      "resolution": "FHD+ AMOLED (2436 x 1080 pixels), 20:9 ratio (~393 ppi)",
      "peakBrightness": "1000 nits peak brightness, 2160Hz high-frequency PWM dimming",
      "hdrSupport": "144Hz high refresh rate, 10-bit color depth (1.07 billion colors)",
      "dimensions": "164.0 x 74.5 x 7.7 mm, 189g",
      "buildMaterials": "Corning Gorilla Glass 5 front, glass back / eco-leather back, composite frame",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP54 splash and dust resistance",
      "stabilization": "OIS (Optical Image Stabilization) on 50MP Sony IMX890 main camera + EIS",
      "videoRecording": "4K @ 60fps, 4K @ 30fps HDR, 1080p @ 30/60fps with gyro-EIS",
      "opticsFeatures": "50MP Sony IMX890 (1/1.56\"), 50MP Ultra-Wide with macro AF, dual-color LED flash",
      "frontVideoRecording": "4K @ 60fps, 1080p @ 30/60fps with Eye-tracking AF",
      "wirelessCharging": "Not supported (70W Ultra Charge wired)",
      "wifiBluetooth": "Wi-Fi 6 (802.11ax dual-band), Bluetooth 5.3, NFC, IR Blaster",
      "specialHardware": "Classic rangefinder camera dial design, Smart Breathing Light indicator",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers with Dolby Atmos & Hi-Res"
    },
    "colors": [
      "Iceland Basaltic Dark",
      "Alps Snowy Silver",
      "Emerald Green"
    ],
    "colorImages": {
      "Iceland Basaltic Dark": "/images/tecno-camon-30-pro-basaltic-dark.webp",
      "Alps Snowy Silver": "/images/tecno-camon-30-pro-alps-silver.webp",
      "Emerald Green": "/images/tecno-camon-30-pro-emerald-green.webp"
    },
    "colorHexes": {
      "Iceland Basaltic Dark": "#25272a",
      "Alps Snowy Silver": "#d8dcde",
      "Emerald Green": "#6e9b81"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
      "Multan",
      "Faisalabad",
      "Peshawar",
      "Gujranwala"
    ]
  },
  {
    "id": "tecno-spark-40-pro-plus",
    "name": "Tecno Spark 40 Pro Plus",
    "brand": "Tecno",
    "model": "Spark 40 Pro+ (8GB/256GB)",
    "pricePKR": 69999,
    "officialPricePKR": 79999,
    "marketPriceRangePKR": {
      "min": 68500,
      "max": 71500
    },
    "variants": [
      {
        "id": "spark40pp-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB (+ 8 GB Extended Virtual RAM = 16GB)",
        "storage": "256 GB UFS 2.2 built-in (microSD Card Slot supported up to 1TB)",
        "pricePKR": 69999,
        "officialPricePKR": 79999,
        "marketPriceRangePKR": {
          "min": 68500,
          "max": 71500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "January 2025",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://images.priceoye.pk/tecno-spark-40-pro-plus-pakistan-priceoye-dbjm9-500x500.webp",
    "tags": [
      "trending",
      "budget",
      "gaming"
    ],
    "specs": {
      "display": "6.78\" 1.5K 3D Curved AMOLED, 144Hz Refresh Rate, 1224 x 2720 pixels, 2160Hz PWM Dimming, 1500 nits Peak Brightness, Corning Gorilla Glass 5",
      "refreshRate": "144Hz 3D Curved AMOLED",
      "processor": "MediaTek Helio G200 (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
      "ram": "8 GB (+ 8 GB Extended Virtual RAM = 16GB)",
      "storage": "256 GB UFS 2.2 built-in (microSD Card Slot supported up to 1TB)",
      "mainCamera": "50MP main with EIS and rear dual flash",
      "selfieCamera": "13MP Ultra-Clear Dual Flash Front Camera with AI Portrait & Eye-Tracking (f/2.2, 1080p@30fps)",
      "battery": "5200 mAh High-Density Long-Life Battery",
      "charging": "45W Super Charge Wired + 30W Magnetic Wireless Charging support",
      "os": "Android 15 with HiOS 15 (AI Call Noise Cancellation, AI Eraser 2.0, Ask Ella AI Assistant)",
      "network": "4G LTE Dual SIM (Nano-SIM, dual stand-by), IP64 Dust & Water Resistance, 1.5m Drop Resistance, Dual Stereo Speakers with Dolby Atmos & DTS, In-Display Optical Fingerprint",
      "resolution": "2720 x 1224 pixels (1.5K)",
      "peakBrightness": "1000 nits peak brightness",
      "hdrSupport": "144Hz refresh rate",
      "dimensions": "163.9 x 75.8 x 6.49 mm; 160 g",
      "buildMaterials": "Slim 6.49mm body with metal camera-module decoration",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP64 dust and water resistance",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with EIS",
      "opticsFeatures": "50MP imaging with electronic stabilization",
      "frontVideoRecording": "1080p @ 30fps with Dual micro-slit LED flash",
      "wirelessCharging": "30W wireless charging; 5W reverse wireless charging",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.2, NFC",
      "specialHardware": "6.49mm body; infrared remote control; FreeLink",
      "biometricsAudio": "In-display fingerprint sensor; dual speakers with Dolby Atmos"
    },
    "colors": [
      "Nebula Black",
      "Aurora White",
      "Moon Titanium",
      "Tundra Green"
    ],
    "colorImages": {
      "Nebula Black": "https://images.priceoye.pk/tecno-spark-40-pro-plus-pakistan-priceoye-dbjm9-500x500.webp",
      "Aurora White": "https://images.priceoye.pk/tecno-spark-40-pro-plus-pakistan-priceoye-pb3tm-500x500.webp",
      "Moon Titanium": "https://images.priceoye.pk/tecno-spark-40-pro-plus-pakistan-priceoye-oa58m-500x500.webp",
      "Tundra Green": "https://images.priceoye.pk/tecno-spark-40-pro-plus-pakistan-priceoye-ahqfm-500x500.webp"
    },
    "colorHexes": {
      "Nebula Black": "#1f242d",
      "Aurora White": "#f0f3f6",
      "Moon Titanium": "#c4c7cc",
      "Tundra Green": "#4d685a"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Multan",
      "Faisalabad",
      "Rawalpindi",
      "Peshawar"
    ]
  },
  {
    "id": "infinix-note-40-pro",
    "name": "Infinix Note 40 Pro",
    "brand": "Infinix",
    "model": "Note 40 Pro (8GB/256GB)",
    "pricePKR": 63899,
    "officialPricePKR": 79999,
    "marketPriceRangePKR": {
      "min": 62500,
      "max": 65000
    },
    "variants": [
      {
        "id": "inf-n40p-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB (+ 8 GB Extended RAM = 16GB)",
        "storage": "256 GB UFS 2.2 storage",
        "pricePKR": 63899,
        "officialPricePKR": 79999,
        "marketPriceRangePKR": {
          "min": 62500,
          "max": 65000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 40500,
      "cnicTaxPKR": 50400,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 40500,
    "ptaCnicTax": 50400,
    "isLocallyAssembled": true,
    "releaseDate": "April 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://images.priceoye.pk/infinix-note-40-pro-pakistan-priceoye-r52ud-500x500.webp",
    "tags": [
      "trending",
      "budget",
      "gaming"
    ],
    "specs": {
      "display": "6.78\" 3D Curved AMOLED, 120Hz Refresh Rate, 1080 x 2436 pixels, 1300 nits Peak Brightness, Corning Gorilla Glass",
      "refreshRate": "120Hz 3D Curved AMOLED",
      "processor": "MediaTek Helio G99 Ultimate (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with Cheetah X1 power chip",
      "ram": "8 GB (+ 8 GB Extended RAM = 16GB)",
      "storage": "256 GB Internal Storage",
      "mainCamera": "108MP OIS Main Camera (f/1.75, Superzoom 3x Lossless OIS) + 2MP Macro + 2MP Depth with Halo Light LED",
      "selfieCamera": "32MP Front Camera (f/2.2, Dual Flash, 1080p@30fps Video)",
      "battery": "5000 mAh All-Round FastCharge 2.0 Battery",
      "charging": "70W Multi-Speed FastCharge + 20W Wireless MagCharge + Reverse Wired & Wireless Charging",
      "os": "Android 14 with XOS 14 (Active Halo AI Lighting & Folax AI)",
      "network": "4G LTE Dual SIM, IP54 Splash Resistant, JBL Tuned Dual Stereo Speakers, In-Display Fingerprint",
      "resolution": "FHD+ 3D Curved AMOLED (2436 x 1080 pixels), 20:9 ratio (~393 ppi)",
      "peakBrightness": "1300 nits peak brightness, 2160Hz PWM dimming",
      "hdrSupport": "120Hz refresh rate, 10-bit color, TÜV Rheinland Low Blue Light",
      "dimensions": "164.3 x 74.5 x 8.09 mm, 190g",
      "buildMaterials": "Corning Gorilla Glass 5 front, eco-leather / glass back",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP54 dust and splash resistant",
      "stabilization": "OIS (Optical Image Stabilization) on 108MP main camera + EIS",
      "videoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with gyro-EIS",
      "opticsFeatures": "108MP OIS 3x Superzoom, 2MP Macro, 2MP Depth, Active Halo AI lighting ring",
      "frontVideoRecording": "1080p @ 30/60fps with Dual-LED flash",
      "wirelessCharging": "20W Wireless MagCharge + 70W Multi-Speed FastCharge 2.0 wired",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.2, NFC, IR remote control",
      "specialHardware": "Cheetah X1 dedicated power management chip, Active Halo ambient LED lighting",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers tuned by JBL with Hi-Res audio"
    },
    "colors": [
      "Vintage Green",
      "Titan Gold",
      "Obsidian Black",
      "Racing Edition"
    ],
    "colorImages": {
      "Vintage Green": "https://images.priceoye.pk/infinix-note-40-pro-pakistan-priceoye-r52ud-500x500.webp",
      "Titan Gold": "https://images.priceoye.pk/infinix-note-40-pro-pakistan-priceoye-n4uwu-500x500.webp",
      "Obsidian Black": "https://images.priceoye.pk/infinix-note-40-pro-pakistan-priceoye-sirm5-500x500.webp",
      "Racing Edition": "https://images.priceoye.pk/infinix-note-40-pro-pakistan-priceoye-xhn8m-500x500.webp"
    },
    "colorHexes": {
      "Vintage Green": "#495a48",
      "Titan Gold": "#d8c29d",
      "Obsidian Black": "#2b2c30",
      "Racing Edition": "#c4c7cc"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Gujranwala",
      "Peshawar"
    ]
  },
  {
    "id": "infinix-gt-20-pro-5g",
    "name": "Infinix GT 20 Pro 5G",
    "brand": "Infinix",
    "model": "GT 20 Pro 5G (12GB/256GB)",
    "pricePKR": 87999,
    "officialPricePKR": 99999,
    "marketPriceRangePKR": {
      "min": 86000,
      "max": 89500
    },
    "variants": [
      {
        "id": "gt20pro-12-256",
        "name": "12GB / 256GB",
        "ram": "12 GB (+ 12 GB Extended RAM = 24GB)",
        "storage": "256 GB UFS 3.1 high-speed storage (microSD dedicated slot up to 1TB)",
        "pricePKR": 87999,
        "officialPricePKR": 99999,
        "marketPriceRangePKR": {
          "min": 86000,
          "max": 89500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 40500,
      "cnicTaxPKR": 50400,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 40500,
    "ptaCnicTax": 50400,
    "isLocallyAssembled": true,
    "releaseDate": "May 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/infinix-gt-20-pro-mecha-silver.webp",
    "tags": [
      "trending",
      "gaming",
      "budget"
    ],
    "specs": {
      "display": "6.78\" FHD+ 144Hz Bezel-less AMOLED, 1080 x 2436 pixels, 1300 nits Peak Brightness, 2160Hz PWM Dimming, Dedicated Pixelworks X5 Turbo Gaming Display Chip",
      "refreshRate": "144Hz Bezel-less Esports AMOLED",
      "processor": "MediaTek Dimensity 8200 Ultimate 5G (4nm) Octa-Core (1x3.1 GHz Cortex-A78 & 3x3.0 GHz Cortex-A78 & 4x2.0 GHz Cortex-A55) with Mali-G610 MC6 GPU & Pixelworks Gaming Chip",
      "ram": "12 GB LPDDR5X (+ 12 GB Extended RAM = 24GB)",
      "storage": "256 GB UFS 3.1 ultra-fast storage (dedicated microSDXC slot up to 1TB)",
      "mainCamera": "108MP OIS Ultra-Clear Gaming Camera (Samsung HM6, f/1.75, OIS, 1/1.67\", Quad Flash) + 2MP Macro + 2MP Depth with 4K@60fps Ultra Video Recording",
      "selfieCamera": "32MP Dual Flash Wide-Angle Front Camera (f/2.2, 2K@30fps Video)",
      "battery": "5000 mAh High-Density Esports Battery with Bypass Charging Mode",
      "charging": "45W Hyper Charge Protocol + Hyper Charge Smart Mode",
      "os": "Android 14 with Clean GT OS / XOS 14 (No bloatware, 2 Major Android Upgrades & 3 Years Security Patches)",
      "network": "5G Dual SIM (Nano-SIM, dual stand-by), Cyber Mecha Design with Customizable RGB Mecha Loop LED Interface, IP54 Dust & Splash Resistance, VC Liquid Cooling, Dual Stereo Speakers Sound by JBL, In-Display Fingerprint",
      "resolution": "FHD+ Bezel-less AMOLED (2436 x 1080 pixels), 20:9 ratio (~393 ppi)",
      "peakBrightness": "1300 nits peak brightness, 2304Hz PWM dimming",
      "hdrSupport": "144Hz esports refresh rate, 360Hz touch sampling (1500Hz instantaneous)",
      "dimensions": "164.3 x 75.4 x 8.15 mm, 194g",
      "buildMaterials": "Glass front, Cyber Mecha design back with Mecha Loop RGB mini-LED interface",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP54 dust and splash resistance",
      "stabilization": "OIS (Optical Image Stabilization) on 108MP Samsung HM6 sensor + EIS",
      "videoRecording": "4K @ 60fps, 4K @ 30fps, 1080p @ 30/60/120fps with gyro-EIS",
      "opticsFeatures": "108MP Samsung HM6 (1/1.67\"), OIS, 2MP Macro, 2MP Depth, Quad-LED flash",
      "frontVideoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with Dual-LED flash",
      "wirelessCharging": "Not supported (45W Hyper Charge wired with bypass charging)",
      "wifiBluetooth": "Wi-Fi 6 (802.11ax dual-band), Bluetooth 5.3, NFC, IR Blaster",
      "specialHardware": "Pixelworks X5 Turbo dedicated gaming display chip (120fps MEMC frame insertion), Mecha Loop RGB LED",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers tuned by JBL with DTS"
    },
    "colors": [
      "Mecha Silver",
      "Mecha Blue",
      "Mecha Orange"
    ],
    "colorImages": {
      "Mecha Silver": "/images/infinix-gt-20-pro-mecha-silver.webp",
      "Mecha Blue": "/images/infinix-gt-20-pro-mecha-blue.webp",
      "Mecha Orange": "/images/infinix-gt-20-pro-mecha-orange.webp"
    },
    "colorHexes": {
      "Mecha Silver": "#d2d6dc",
      "Mecha Blue": "#23374d",
      "Mecha Orange": "#373e48"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
      "Multan",
      "Faisalabad",
      "Peshawar",
      "Quetta"
    ]
  },
  {
    "id": "vivo-v40-5g",
    "name": "Vivo V40 5G",
    "brand": "Vivo",
    "model": "V40 5G (12GB/256GB)",
    "pricePKR": 126899,
    "officialPricePKR": 139999,
    "marketPriceRangePKR": {
      "min": 125000,
      "max": 129000
    },
    "variants": [
      {
        "id": "vivo-v40-12-256",
        "name": "12GB / 256GB",
        "ram": "12 GB (+ 12 GB Extended RAM = 24GB)",
        "storage": "256 GB UFS 2.2 storage",
        "pricePKR": 126899,
        "officialPricePKR": 139999,
        "marketPriceRangePKR": {
          "min": 125000,
          "max": 129000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 68900,
      "cnicTaxPKR": 84200,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 68900,
    "ptaCnicTax": 84200,
    "isLocallyAssembled": true,
    "releaseDate": "August 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/vivo-v40-stellar-silver.webp",
    "tags": [
      "trending",
      "camera"
    ],
    "specs": {
      "display": "6.78\" 1.5K 3D Curved AMOLED, 120Hz Refresh Rate, 2800 x 1260 pixels, 4500 nits Local Peak Brightness, HDR10+, 100% DCI-P3, Schott α Glass",
      "refreshRate": "120Hz 1.5K 3D Curved AMOLED",
      "processor": "Qualcomm Snapdragon 7 Gen 3 (4nm) Octa-Core (1x2.63 GHz & 3x2.4 GHz & 4x1.8 GHz) with Adreno 720 GPU",
      "ram": "12 GB LPDDR4X (+ 12 GB Extended RAM = 24GB total)",
      "storage": "256 GB UFS 2.2 ultra-fast storage",
      "mainCamera": "ZEISS Co-Engineered Optics: 50MP Main OIS (f/1.88, 1/1.56\", OIS, ZEISS T* Coating) + 50MP Ultra Wide-Angle (f/2.0, 119° FOV, Autofocus) with Smart Aura Light Portrait 3.0",
      "selfieCamera": "50MP ZEISS Group Selfie Front Camera (f/2.0, 92° Wide FOV, Autofocus, 4K@30fps UHD Video)",
      "battery": "5500 mAh BlueVolt Silicon-Carbon Battery (ultra-slim 7.58mm body)",
      "charging": "80W FlashCharge Wired Protocol (100% in ~48 mins)",
      "os": "Android 14 with Funtouch OS 14 (50-Month Smooth Experience Certified, AI Eraser & Photo Enhance)",
      "network": "5G Dual SIM (Nano-SIM, dual stand-by / eSIM), IP68 & IP69 Dust and Water Resistance (immersible up to 1.5m for 30 min), Dual Stereo Speakers, In-Display Optical Fingerprint",
      "resolution": "1.5K 3D Curved AMOLED (2800 x 1260 pixels), 20:9 ratio (~453 ppi)",
      "peakBrightness": "4500 nits local peak brightness, 1200 nits HBM",
      "hdrSupport": "HDR10+, 120Hz refresh rate, DCI-P3 100% color gamut",
      "dimensions": "164.2 x 75.0 x 7.58 mm, 190g",
      "buildMaterials": "Corning Gorilla Glass front, AG matte glass back, ultra-slim 7.58mm frame",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by, eSIM supported)",
      "waterResistance": "IP68 and IP69 water and dust resistance (can withstand high-pressure water jets)",
      "stabilization": "OIS (Optical Image Stabilization) on 50MP ZEISS main camera",
      "videoRecording": "4K @ 30fps, 1080p @ 30/60fps with gyro-EIS and OIS",
      "opticsFeatures": "ZEISS Optics with T* Coating, 50MP Main (1/1.56\"), 50MP Ultra-Wide (119°), ZEISS Multifocal Portrait, Smart Aura Light",
      "frontVideoRecording": "4K @ 30fps, 1080p @ 30/60fps with autofocus (92° wide FOV)",
      "wirelessCharging": "Not supported (80W FlashCharge wired)",
      "wifiBluetooth": "Wi-Fi 6 (802.11ax dual-band), Bluetooth 5.4, NFC",
      "specialHardware": "BlueVolt 5500 mAh silicon-carbon high-density battery in 7.58mm ultra-thin body",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers with Hi-Res audio"
    },
    "colors": [
      "Stellar Silver",
      "Nebula Purple"
    ],
    "colorImages": {
      "Stellar Silver": "/images/vivo-v40-stellar-silver.webp",
      "Nebula Purple": "/images/vivo-v40-nebula-purple.webp"
    },
    "colorHexes": {
      "Stellar Silver": "#6b7280",
      "Nebula Purple": "#645374"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Rawalpindi",
      "Multan",
      "Faisalabad",
      "Peshawar",
      "Sialkot"
    ]
  },
  {
    "id": "vivo-v30-5g",
    "name": "Vivo V30 5G",
    "brand": "Vivo",
    "model": "V30 5G (12GB/256GB)",
    "pricePKR": 110500,
    "officialPricePKR": 129999,
    "marketPriceRangePKR": {
      "min": 109000,
      "max": 113000
    },
    "variants": [
      {
        "id": "vivo-v30-12-256",
        "name": "12GB / 256GB",
        "ram": "12 GB (+ 12 GB Extended RAM = 24GB)",
        "storage": "256 GB UFS 2.2 internal storage",
        "pricePKR": 110500,
        "officialPricePKR": 129999,
        "marketPriceRangePKR": {
          "min": 109000,
          "max": 113000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 68900,
      "cnicTaxPKR": 84200,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 68900,
    "ptaCnicTax": 84200,
    "isLocallyAssembled": true,
    "releaseDate": "March 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://images.priceoye.pk/vivo-v30-5g-pakistan-priceoye-2ahpt-500x500.webp",
    "tags": [
      "trending",
      "camera",
      "gaming"
    ],
    "specs": {
      "display": "6.78\" 1.5K 3D Curved AMOLED, 120Hz Refresh Rate, 2800 x 1260 pixels, 2800 nits Peak Brightness, HDR10+",
      "refreshRate": "120Hz 1.5K Curved AMOLED",
      "processor": "Qualcomm Snapdragon 7 Gen 3 (4nm) Octa-Core (1x2.63 GHz & 3x2.4 GHz & 4x1.8 GHz) with Adreno 720 GPU",
      "ram": "12 GB (+ 12 GB Extended RAM = 24GB)",
      "storage": "256 GB Internal Storage",
      "mainCamera": "50MP VCS True Color Main (f/1.88, OIS) + 50MP Ultra Wide-Angle (119° FOV, Autofocus) with Studio-Quality Aura Light Portrait 2.0",
      "selfieCamera": "50MP Group Selfie Camera (f/2.0, 92° Wide Angle, Autofocus, 4K Video)",
      "battery": "5000 mAh Ultra-Slim High-Density Battery (7.45mm slim profile)",
      "charging": "80W FlashCharge (100% in 48 mins)",
      "os": "Android 14 with Funtouch OS 14 (50-Month Smooth Experience Certified)",
      "network": "5G Dual SIM, IP54 Dust & Splash Resistance, Hi-Res Audio, In-Display Optical Fingerprint",
      "resolution": "1.5K 3D Curved AMOLED (2800 x 1260 pixels), 20:9 ratio (~453 ppi)",
      "peakBrightness": "2800 nits local peak brightness, 1200 nits HBM",
      "hdrSupport": "HDR10+, 120Hz refresh rate",
      "dimensions": "164.4 x 75.1 x 7.45 mm, 186g",
      "buildMaterials": "Glass front, 3D curved glass back with 3D Petal or Fluorite AG finish",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP54 dust and splash resistance",
      "stabilization": "OIS (Optical Image Stabilization) on 50MP VCS True Color main camera",
      "videoRecording": "4K @ 30fps, 1080p @ 30/60fps with gyro-EIS and OIS",
      "opticsFeatures": "50MP VCS True Color (1/1.55\", OIS), 50MP Ultra-Wide (119° FOV), Studio-quality Aura Light ring",
      "frontVideoRecording": "4K @ 30fps, 1080p @ 30fps with AF (92° wide FOV)",
      "wirelessCharging": "Not supported (80W FlashCharge wired)",
      "wifiBluetooth": "Wi-Fi 6 (802.11ax dual-band), Bluetooth 5.4, NFC",
      "specialHardware": "Studio-Grade Aura Light Portrait system with smart color temperature adjustment",
      "biometricsAudio": "In-display optical fingerprint scanner, Hi-Res audio, single bottom speaker with sound boost"
    },
    "colors": [
      "Peacock Green",
      "Waving Aqua"
    ],
    "colorImages": {
      "Peacock Green": "https://images.priceoye.pk/vivo-v30-5g-pakistan-priceoye-2ahpt-500x500.webp",
      "Waving Aqua": "https://images.priceoye.pk/vivo-v30-5g-pakistan-priceoye-0ij9a-500x500.webp"
    },
    "colorHexes": {
      "Peacock Green": "#3a6b66",
      "Waving Aqua": "#a5d0d8"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Multan",
      "Faisalabad",
      "Sialkot"
    ]
  },
  {
    "id": "xiaomi-redmi-note-13-pro",
    "name": "Xiaomi Redmi Note 13 Pro",
    "brand": "Xiaomi",
    "model": "Redmi Note 13 Pro (8GB/256GB)",
    "pricePKR": 61500,
    "officialPricePKR": 74999,
    "marketPriceRangePKR": {
      "min": 60500,
      "max": 63500
    },
    "variants": [
      {
        "id": "redmi-n13p-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB (+ 8 GB Extended RAM = 16GB)",
        "storage": "256 GB UFS 2.2 built-in (microSD Card Slot supported)",
        "pricePKR": 61500,
        "officialPricePKR": 74999,
        "marketPriceRangePKR": {
          "min": 60500,
          "max": 63500
        }
      },
      {
        "id": "redmi-n13p-12-512",
        "name": "12GB / 512GB",
        "ram": "12 GB (+ 12 GB Extended RAM = 24GB)",
        "storage": "512 GB UFS 2.2 built-in (microSD Card Slot supported)",
        "pricePKR": 68999,
        "officialPricePKR": 89999,
        "marketPriceRangePKR": {
          "min": 67500,
          "max": 71000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 40500,
      "cnicTaxPKR": 50400,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 40500,
    "ptaCnicTax": 50400,
    "isLocallyAssembled": true,
    "releaseDate": "January 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://images.priceoye.pk/xiaomi-redmi-note-13-pro-pakistan-priceoye-8zikv-500x500.webp",
    "tags": [
      "trending",
      "budget",
      "camera"
    ],
    "specs": {
      "display": "6.67\" FHD+ AMOLED, 120Hz Refresh Rate, 1080 x 2400 pixels, 1300 nits Peak Brightness, Corning Gorilla Glass 5",
      "refreshRate": "120Hz AMOLED",
      "processor": "MediaTek Helio G99 Ultra (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with Mali-G57 MC2 GPU",
      "ram": "8 GB / 12 GB LPDDR4X (+ 8 GB Memory Extension)",
      "storage": "256 GB / 512 GB UFS 2.2 built-in (microSD Card Slot supported)",
      "mainCamera": "200MP Main Sensor (f/1.65, 1/1.4\", OIS, 4x In-Sensor Lossless Zoom) + 8MP Ultra-Wide (f/2.2, 118° FOV) + 2MP Macro (f/2.4)",
      "selfieCamera": "16MP Front Camera (f/2.4, 1080p@60fps Video with AI Beautify)",
      "battery": "5000 mAh High-Capacity Battery",
      "charging": "67W Turbo Fast Charging (100% in 45 mins)",
      "os": "Android 13 with MIUI 14 (Upgradable to Xiaomi HyperOS with 3 Major OS Upgrades)",
      "network": "4G LTE Dual SIM, IP54 Splash Resistant, Dual Stereo Speakers with Dolby Atmos, 3.5mm Headphone Jack, In-Screen Fingerprint",
      "resolution": "FHD+ AMOLED (2400 x 1080 pixels), 20:9 ratio (~395 ppi)",
      "peakBrightness": "1300 nits peak brightness, 1920Hz PWM dimming",
      "hdrSupport": "120Hz refresh rate, DCI-P3 100%, Dolby Vision playback support",
      "dimensions": "161.1 x 75.0 x 7.98 mm, 188g",
      "buildMaterials": "Corning Gorilla Glass 5 front, composite back, ultra-slim bottom chin",
      "simSlot": "Hybrid Dual SIM (Nano-SIM, dual stand-by, microSD expandable)",
      "waterResistance": "IP54 splash and dust resistance",
      "stabilization": "OIS (Optical Image Stabilization) + EIS dual stabilization on 200MP sensor",
      "videoRecording": "1080p @ 30/60fps, 720p @ 30fps with EIS (MediaTek Helio G99-Ultra ISP limits to 1080p60)",
      "opticsFeatures": "200MP Samsung ISOCELL HP3 (1/1.4\", f/1.65), 4x In-Sensor Lossless Zoom, 8MP Ultra-wide, 2MP Macro",
      "frontVideoRecording": "1080p @ 30/60fps",
      "wirelessCharging": "Not supported (67W Turbo Charge wired)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.2, NFC, IR Blaster",
      "specialHardware": "Xiaomi Imaging Engine algorithm with 200MP ultra-clear detail capture, IR remote",
      "biometricsAudio": "In-display optical fingerprint scanner with heart-rate detection, dual stereo speakers with Dolby Atmos, 3.5mm jack"
    },
    "colors": [
      "Midnight Black",
      "Lavender Purple",
      "Forest Green"
    ],
    "colorImages": {
      "Midnight Black": "https://images.priceoye.pk/xiaomi-redmi-note-13-pro-pakistan-priceoye-8zikv-500x500.webp",
      "Lavender Purple": "https://images.priceoye.pk/xiaomi-redmi-note-13-pro-pakistan-priceoye-da8y9-500x500.webp",
      "Forest Green": "https://images.priceoye.pk/xiaomi-redmi-note-13-pro-pakistan-priceoye-yunsm-500x500.webp"
    },
    "colorHexes": {
      "Midnight Black": "#222328",
      "Lavender Purple": "#d6c8e3",
      "Forest Green": "#3a5449"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Multan",
      "Faisalabad"
    ]
  },
  {
    "id": "xiaomi-redmi-13",
    "name": "Xiaomi Redmi 13",
    "brand": "Xiaomi",
    "model": "Redmi 13 (8GB/128GB, 8GB/256GB)",
    "pricePKR": 39999,
    "officialPricePKR": 44999,
    "marketPriceRangePKR": {
      "min": 39000,
      "max": 41500
    },
    "variants": [
      {
        "id": "redmi-13-8-128",
        "name": "8GB / 128GB",
        "ram": "8 GB (+ 8 GB Virtual Memory Extension = 16GB)",
        "storage": "128 GB built-in (microSD Card Slot supported up to 1TB)",
        "pricePKR": 39999,
        "officialPricePKR": 40999,
        "marketPriceRangePKR": {
          "min": 39000,
          "max": 41500
        }
      },
      {
        "id": "redmi-13-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB (+ 8 GB Virtual Memory Extension = 16GB)",
        "storage": "256 GB built-in (microSD Card Slot supported up to 1TB)",
        "pricePKR": 44999,
        "officialPricePKR": 44999,
        "marketPriceRangePKR": {
          "min": 43500,
          "max": 46000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "June 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/xiaomi-redmi-13-midnight-black.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.79\" FHD+ (1080 x 2460 pixels) 90Hz AdaptiveSync IPS LCD Display, 550 nits (HBM) Peak Brightness, Corning Gorilla Glass with Wet Touch Technology, TÜV Rheinland Triple Low Blue Light Certification",
      "refreshRate": "90Hz AdaptiveSync FHD+",
      "processor": "MediaTek Helio G91-Ultra (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with Mali-G52 MC2 GPU",
      "ram": "8 GB LPDDR4X (+ 8 GB Virtual Memory Extension = 16GB total)",
      "storage": "128 GB / 256 GB built-in (microSD Card Slot supported up to 1TB via hybrid slot)",
      "mainCamera": "108MP Ultra-Clear Super Main Sensor (Samsung ISOCELL HM6, 1/1.67\", f/1.75, 9-in-1 Super Pixel, 3x In-Sensor Lossless Zoom) + 2MP Macro (f/2.4) with Soft-Light Ring & 1080p Video",
      "selfieCamera": "13MP Soft-Light Ring Front Camera (f/2.45, 1080p Video Recording, Natural Glow Beautify)",
      "battery": "5030 mAh High-Capacity Long-Lasting Battery (up to 19 days standby)",
      "charging": "33W Fast Charging Protocol (0 to 50% in ~26 minutes via Type-C)",
      "os": "Xiaomi HyperOS based on Android 14 (36-Month Seamless Fluency Certified)",
      "network": "4G LTE Dual SIM (Nano-SIM, dual stand-by), Sleek Premium Glass Back Design (8.3mm thin), IP53 Dust and Splash Resistant, Side Fingerprint Sensor, 3.5mm Headphone Jack, IR Blaster, FM Radio",
      "resolution": "FHD+ IPS LCD (2460 x 1080 pixels), 20.5:9 ratio (~396 ppi)",
      "peakBrightness": "550 nits peak brightness (HBM)",
      "hdrSupport": "90Hz AdaptiveSync refresh rate, TÜV Rheinland certified",
      "dimensions": "168.6 x 76.3 x 8.3 mm, 205g",
      "buildMaterials": "Corning Gorilla Glass front, premium glass back panel, plastic frame",
      "simSlot": "Hybrid Dual SIM (Nano-SIM, dual stand-by, microSD slot)",
      "waterResistance": "IP53 dust and splash protection",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "1080p @ 30fps, 720p @ 30fps (Helio G91-Ultra ISP limits to 1080p30)",
      "opticsFeatures": "108MP Samsung ISOCELL HM6 (1/1.67\", f/1.75), 3x in-sensor lossless zoom, 2MP Macro",
      "frontVideoRecording": "1080p @ 30fps with soft-light ring",
      "wirelessCharging": "Not supported (33W wired fast charging)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.4, FM radio, 3.5mm headphone jack, IR Blaster",
      "specialHardware": "Flash notification ring on back, IR blaster for home appliances control",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, single loudspeaker, 3.5mm audio jack"
    },
    "colors": [
      "Midnight Black",
      "Sandy Gold",
      "Pearl Pink",
      "Ocean Blue"
    ],
    "colorImages": {
      "Midnight Black": "/images/xiaomi-redmi-13-midnight-black.webp",
      "Sandy Gold": "/images/xiaomi-redmi-13-sandy-gold.webp",
      "Pearl Pink": "/images/xiaomi-redmi-13-pearl-pink.webp",
      "Ocean Blue": "/images/xiaomi-redmi-13-ocean-blue.webp"
    },
    "colorHexes": {
      "Midnight Black": "#1e1f23",
      "Sandy Gold": "#f3e5c8",
      "Pearl Pink": "#f6d5da",
      "Ocean Blue": "#bad7e5"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Gujranwala",
      "Multan",
      "Peshawar",
      "Hyderabad",
      "Quetta"
    ]
  },
  {
    "id": "realme-12-pro-plus-5g",
    "name": "Realme 12 Pro Plus 5G",
    "brand": "Realme",
    "model": "Realme 12 Pro+ 5G (12GB/512GB)",
    "pricePKR": 104999,
    "officialPricePKR": 139999,
    "marketPriceRangePKR": {
      "min": 102000,
      "max": 107500
    },
    "variants": [
      {
        "id": "realme12pp-12-512",
        "name": "12GB / 512GB",
        "ram": "12 GB (+ 12 GB Dynamic RAM = 24GB)",
        "storage": "512 GB UFS 3.1 high-speed storage",
        "pricePKR": 104999,
        "officialPricePKR": 139999,
        "marketPriceRangePKR": {
          "min": 102000,
          "max": 107500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 68900,
      "cnicTaxPKR": 84200,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 68900,
    "ptaCnicTax": 84200,
    "isLocallyAssembled": true,
    "releaseDate": "February 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/realme-12-pro-plus-submarine-blue.png",
    "tags": [
      "trending",
      "camera",
      "gaming"
    ],
    "specs": {
      "display": "6.7\" FHD+ 3D Curved AMOLED, 120Hz Refresh Rate, 1080 x 2412 pixels, 2160Hz PWM Dimming, 950 nits Peak Brightness",
      "refreshRate": "120Hz Curved AMOLED",
      "processor": "Qualcomm Snapdragon 7s Gen 2 (4nm) Octa-Core (4x2.40 GHz Cortex-A78 & 4x1.95 GHz Cortex-A55) with Adreno 710 GPU",
      "ram": "12 GB (+ 12 GB Dynamic RAM = 24GB)",
      "storage": "512 GB UFS 3.1 high-speed storage",
      "mainCamera": "64MP Periscope Telephoto (f/2.6, 71mm, 3x Optical / 6x Lossless / 120x SuperZoom, OIS, OmniVision OV64B) + 50MP Sony IMX890 Main (f/1.8, 24mm, OIS) + 8MP Ultra-Wide (f/2.2, 112° FOV)",
      "selfieCamera": "32MP Sony Selfie Camera (f/2.4, 90° FOV, 1080p@30fps)",
      "battery": "5000 mAh Massive Battery with 3D Vapor Chamber Cooling",
      "charging": "67W SUPERVOOC Charge (50% in 19 mins)",
      "os": "Android 14 with Realme UI 5.0 (2 Major Android Upgrades & 3 Years Security Patches)",
      "network": "5G Dual SIM, Premium Vegan Leather Design with Luxury Watch Dial, IP65 Water & Dust Resistance, Dual Stereo Speakers with Dolby Atmos & Hi-Res Audio, In-Display Fingerprint",
      "resolution": "FHD+ 3D Curved AMOLED (2412 x 1080 pixels), 20:9 ratio (~394 ppi)",
      "peakBrightness": "950 nits peak brightness, 2160Hz high-frequency PWM dimming",
      "hdrSupport": "120Hz refresh rate, 1.07 billion colors (10-bit), Pro-XDR display",
      "dimensions": "161.5 x 74.0 x 8.75 mm, 196g",
      "buildMaterials": "Submarine-inspired luxury watch dial design, premium vegan leather back, golden fluted bezel",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP65 water and dust resistance",
      "stabilization": "Dual OIS: Optical Image Stabilization on 50MP Sony IMX890 and 64MP Periscope Telephoto",
      "videoRecording": "4K @ 30fps, 1080p @ 30/60/120fps with gyro-EIS & OIS",
      "opticsFeatures": "64MP Periscope Telephoto (f/2.6, 3x optical, 6x in-sensor, 120x SuperZoom, OIS) + 50MP Sony IMX890 OIS + 8MP Ultra-wide",
      "frontVideoRecording": "1080p @ 30fps with Sony IMX615 sensor",
      "wirelessCharging": "Not supported (67W SUPERVOOC wired)",
      "wifiBluetooth": "Wi-Fi 6 (802.11ax dual-band), Bluetooth 5.2, NFC",
      "specialHardware": "Designed in collaboration with luxury watch designer Ollivier Savéo, tactile vegan leather",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers with Dolby Atmos & Hi-Res Audio"
    },
    "colors": [
      "Submarine Blue",
      "Navigator Beige"
    ],
    "colorImages": {
      "Submarine Blue": "/images/realme-12-pro-plus-submarine-blue.png",
      "Navigator Beige": "/images/realme-12-pro-plus-navigator-beige.png"
    },
    "colorHexes": {
      "Submarine Blue": "#1f3554",
      "Navigator Beige": "#e6dec8"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Peshawar",
      "Faisalabad",
      "Gujranwala"
    ]
  },
  {
    "id": "samsung-galaxy-a15",
    "name": "Samsung Galaxy A15",
    "brand": "Samsung",
    "model": "Galaxy A15 (128GB / 256GB)",
    "pricePKR": 44999,
    "officialPricePKR": 52999,
    "marketPriceRangePKR": {
      "min": 43500,
      "max": 46500
    },
    "variants": [
      {
        "id": "a15-6-128",
        "name": "6GB / 128GB",
        "ram": "6 GB LPDDR4X (+ 6 GB RAM Plus)",
        "storage": "128 GB (microSD up to 1TB)",
        "pricePKR": 44999,
        "officialPricePKR": 52999,
        "marketPriceRangePKR": {
          "min": 43500,
          "max": 46500
        }
      },
      {
        "id": "a15-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB RAM Plus)",
        "storage": "256 GB (microSD up to 1TB)",
        "pricePKR": 51999,
        "officialPricePKR": 59999,
        "marketPriceRangePKR": {
          "min": 50500,
          "max": 53500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "December 2023",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/samsung-galaxy-a15-brave-black.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.5\" Super AMOLED, 90Hz Refresh Rate, 1080 x 2340 pixels (FHD+), Vision Booster, 800 nits (HBM) Peak Brightness, Eye Comfort Shield",
      "refreshRate": "90Hz Super AMOLED",
      "processor": "MediaTek Helio G99 (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with Mali-G57 MC2 GPU",
      "ram": "6 GB / 8 GB LPDDR4X (+ up to 8GB RAM Plus virtual memory)",
      "storage": "128 GB / 256 GB internal storage (microSD card slot expandable up to 1TB)",
      "mainCamera": "50MP Main (f/1.8, AF) + 5MP Ultra-Wide (f/2.2) + 2MP Macro (f/2.4) Triple Camera with 1080p@30fps FHD Video",
      "selfieCamera": "13MP Front Camera (f/2.0, 1080p@30fps)",
      "battery": "5000 mAh Long-Lasting Battery",
      "charging": "25W Fast Charging (Super Fast Charging via Type-C)",
      "os": "Android 14 with One UI 6.0 (Up to 4 Major Android OS upgrades & 5 years security patches)",
      "network": "4G LTE Dual SIM, Side Fingerprint Sensor, 3.5mm Headphone Jack, Knox Security Vault, USB Type-C 2.0",
      "resolution": "FHD+ Super AMOLED (2340 x 1080 pixels), 19.5:9 ratio (~396 ppi)",
      "peakBrightness": "800 nits HBM (High Brightness Mode), Vision Booster",
      "hdrSupport": "90Hz refresh rate",
      "dimensions": "160.1 x 76.8 x 8.4 mm, 200g",
      "buildMaterials": "Glass front, glossy plastic back, Key Island frame design",
      "simSlot": "Hybrid Dual SIM (Nano-SIM, dual stand-by, microSD expandable up to 1TB)",
      "waterResistance": "Splash resistant body",
      "stabilization": "Standard digital stabilization with AF",
      "videoRecording": "1080p @ 30fps with electronic video stabilization (NO 4K or 8K)",
      "opticsFeatures": "50MP Main (f/1.8, AF), 5MP Ultra-Wide (f/2.2), 2MP Macro (f/2.4)",
      "frontVideoRecording": "1080p @ 30fps",
      "wirelessCharging": "Not supported (25W wired fast charging)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.3, 3.5mm headphone jack",
      "specialHardware": "Samsung Knox Vault security hardware, Key Island ergonomic button profile",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, single loudspeaker, 3.5mm headphone jack"
    },
    "colors": [
      "Blue Black",
      "Light Blue",
      "Yellow"
    ],
    "colorImages": {
      "Blue Black": "/images/samsung-galaxy-a15-brave-black.webp",
      "Light Blue": "/images/samsung-galaxy-a15-optimistic-blue.webp",
      "Yellow": "/images/samsung-galaxy-a15-personality-yellow.webp"
    },
    "colorHexes": {
      "Blue Black": "#1f212d",
      "Light Blue": "#cde4f7",
      "Yellow": "#f6f099"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Multan",
      "Faisalabad",
      "Peshawar",
      "Gujranwala"
    ]
  },
  {
    "id": "vivo-y200-4g",
    "name": "Vivo Y200 4G",
    "brand": "Vivo",
    "model": "Y200 4G (128GB / 256GB)",
    "pricePKR": 52499,
    "officialPricePKR": 65999,
    "marketPriceRangePKR": {
      "min": 51500,
      "max": 54000
    },
    "variants": [
      {
        "id": "y200-8-128",
        "name": "8GB / 128GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "128 GB UFS 2.2 internal storage",
        "pricePKR": 52499,
        "officialPricePKR": 59999,
        "marketPriceRangePKR": {
          "min": 51500,
          "max": 54000
        }
      },
      {
        "id": "y200-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "256 GB UFS 2.2 internal storage",
        "pricePKR": 56100,
        "officialPricePKR": 65999,
        "marketPriceRangePKR": {
          "min": 55000,
          "max": 57500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "May 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/vivo-y200-4g-titanium-silver.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.67\" Ultra Vision FHD+ AMOLED, 120Hz Refresh Rate, 2400 x 1080 pixels, 1800 nits Local Peak Brightness, SGS Eye Care Display",
      "refreshRate": "120Hz Ultra Vision AMOLED",
      "processor": "Qualcomm Snapdragon 685 (6nm) Octa-Core (4x2.8 GHz Cortex-A73 & 4x1.9 GHz Cortex-A53) with Adreno 610 GPU",
      "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM 3.0 = 16GB total)",
      "storage": "128 GB / 256 GB UFS 2.2 high-speed storage (microSD expandable up to 1TB)",
      "mainCamera": "50MP Ultra-Sensing Main Camera (f/1.8, PDAF) + 2MP Bokeh Sensor (f/2.4) with Flicker Sensor & Smart Aura Light Portrait",
      "selfieCamera": "32MP front portrait camera",
      "battery": "5000 mAh High-Density Large Battery with 4-Year Battery Health durability",
      "charging": "80W FlashCharge (0 to 80% in ~30 minutes)",
      "os": "Funtouch OS 14 based on Android 14",
      "network": "4G Dual SIM (Nano-SIM, dual stand-by), Dual Stereo Speakers with 300% Audio Booster, In-Display Optical Fingerprint, IP64 Water & Dust Resistance, 7.79mm Ultra-Slim 3D Flat Frame Design",
      "resolution": "FHD+ Ultra Vision AMOLED (2400 x 1080 pixels), 20:9 ratio (~394 ppi)",
      "peakBrightness": "1800 nits peak brightness, 1200 nits HBM",
      "hdrSupport": "120Hz refresh rate, SGS Eye Care certified",
      "dimensions": "Emerald Green: 7.79mm, 188g; Titanium Silver: 7.95mm, 190g",
      "buildMaterials": "Metallic high-gloss composite frame with Fluorite AG glass effect back",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by, microSD slot up to 1TB)",
      "waterResistance": "IP64 dust and water resistance",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "1080p @ 30fps (Snapdragon 685 ISP limits to 1080p30)",
      "opticsFeatures": "50MP Main (f/1.8, PDAF), 2MP Bokeh, Flicker sensor, Smart Aura Light ring with color temp control",
      "frontVideoRecording": "1080p @ 30fps",
      "wirelessCharging": "Not supported (80W FlashCharge wired)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.0, 3.5mm jack via adapter",
      "specialHardware": "Aura Light portrait flash ring, 300% Audio Booster volume boost",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers with 300% Audio Booster"
    },
    "colors": [
      "Titanium Silver",
      "Dynamic Green"
    ],
    "colorImages": {
      "Titanium Silver": "/images/vivo-y200-4g-titanium-silver.webp",
      "Dynamic Green": "/images/vivo-y200-4g-dynamic-green.webp"
    },
    "colorHexes": {
      "Titanium Silver": "#d7d1ce",
      "Dynamic Green": "#158e76"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Rawalpindi",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Sialkot"
    ]
  },
  {
    "id": "tecno-spark-20-pro-plus",
    "name": "Tecno Spark 20 Pro+",
    "brand": "Tecno",
    "model": "Spark 20 Pro+ (256GB)",
    "pricePKR": 59999,
    "officialPricePKR": 59999,
    "marketPriceRangePKR": {
      "min": 58500,
      "max": 61500
    },
    "variants": [
      {
        "id": "spark20pp-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Memory Fusion = 16GB)",
        "storage": "256 GB internal flash storage",
        "pricePKR": 59999,
        "officialPricePKR": 59999,
        "marketPriceRangePKR": {
          "min": 58500,
          "max": 61500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "February 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/tecno-spark-20-pro-plus-temporal-orbits.webp",
    "tags": [
      "trending",
      "budget",
      "camera"
    ],
    "specs": {
      "display": "6.78\" FHD+ 3D Double-Curved AMOLED, 120Hz Adaptive Refresh Rate, 1080 x 2436 pixels, 1000 nits Peak Brightness, Corning Gorilla Glass 5, 2160Hz PWM Dimming",
      "refreshRate": "120Hz 3D Curved AMOLED",
      "processor": "MediaTek Helio G99 Ultimate (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with Mali-G57 MC2 GPU",
      "ram": "8 GB LPDDR4X (+ 8 GB Memory Fusion virtual RAM = 16GB total)",
      "storage": "256 GB internal storage (microSD card expansion supported)",
      "mainCamera": "108MP Ultra-Sensing Main Camera (1/1.67\", f/1.75, 3x In-Sensor Lossless Zoom, 0.64µm, PDAF) + 2MP Macro + Auxiliary Light Sensor with Quad-LED Flash & 2K Video Recording",
      "selfieCamera": "32MP Glowing Front Camera (f/2.2, Dual Color Temperature Micro-slit Flash, 1080p@30fps)",
      "battery": "5000 mAh Long-Life Battery",
      "charging": "33W Super Charge (Type-C)",
      "os": "Android 14 with HiOS 14 (Dynamic Port notification pill)",
      "network": "4G Dual SIM, In-Display Optical Fingerprint Scanner, Dual Stereo Speakers tuned by DTS with Hi-Res Audio (400% Volume Boost), IP53 Dust & Splash Resistance, 7.55mm Ultra-Slim Ergonomic Body",
      "resolution": "FHD+ 3D Curved AMOLED (2436 x 1080 pixels), 20:9 ratio (~393 ppi)",
      "peakBrightness": "1000 nits peak brightness, 2160Hz PWM dimming",
      "hdrSupport": "120Hz refresh rate, Always-On Display support",
      "dimensions": "164.6 x 75.0 x 7.55 mm, 179g",
      "buildMaterials": "Corning Gorilla Glass 5 front, Magic Skin 2.0 eco-leather or matte glass back, ultra-slim 7.55mm body",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP53 dust and splash protection",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with gyro-EIS",
      "opticsFeatures": "108MP Ultra-Sensing sensor (1/1.67\", f/1.75), 3x in-sensor lossless zoom, Quad-LED ring flash",
      "frontVideoRecording": "1080p @ 30fps with Dual micro-slit LED flash",
      "wirelessCharging": "Not supported (33W Super Charge wired)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.2, NFC, FM Radio",
      "specialHardware": "Dynamic Port notch notification pill, 56.5° golden curve ergonomic grip",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers with DTS & volume boost"
    },
    "colors": [
      "Temporal Orbits",
      "Lunar Frost",
      "Radiant Starstream",
      "Magic Skin 2.0 Green"
    ],
    "colorImages": {
      "Temporal Orbits": "/images/tecno-spark-20-pro-plus-temporal-orbits.webp",
      "Lunar Frost": "/images/tecno-spark-20-pro-plus-lunar-frost.webp",
      "Radiant Starstream": "/images/tecno-spark-20-pro-plus-radiant-starstream.webp",
      "Magic Skin 2.0 Green": "/images/tecno-spark-20-pro-plus-magic-skin-green.webp"
    },
    "colorHexes": {
      "Temporal Orbits": "#2c2e35",
      "Lunar Frost": "#e8edf2",
      "Radiant Starstream": "#ebdac1",
      "Magic Skin 2.0 Green": "#70936e"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Faisalabad",
      "Rawalpindi",
      "Multan",
      "Peshawar",
      "Gujranwala",
      "Hyderabad"
    ]
  },
  {
    "id": "infinix-hot-40-pro",
    "name": "Infinix Hot 40 Pro",
    "brand": "Infinix",
    "model": "Hot 40 Pro (128GB / 256GB)",
    "pricePKR": 36999,
    "officialPricePKR": 41999,
    "marketPriceRangePKR": {
      "min": 36000,
      "max": 38500
    },
    "variants": [
      {
        "id": "hot40p-8-128",
        "name": "8GB / 128GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "128 GB UFS 2.2 storage",
        "pricePKR": 36999,
        "officialPricePKR": 41999,
        "marketPriceRangePKR": {
          "min": 36000,
          "max": 38500
        }
      },
      {
        "id": "hot40p-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "256 GB UFS 2.2 storage",
        "pricePKR": 38999,
        "officialPricePKR": 44999,
        "marketPriceRangePKR": {
          "min": 38000,
          "max": 40500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "January 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/infinix-hot-40-pro-starlit-black.webp",
    "tags": [
      "trending",
      "budget",
      "gaming"
    ],
    "specs": {
      "display": "6.78\" FHD+ HyperVision Gaming Display, 120Hz Refresh Rate, 1080 x 2460 pixels, 500 nits Peak Brightness, Magic Ring Interactive Notification Pill, 1200Hz Instant Touch Sampling",
      "refreshRate": "120Hz HyperVision FHD+",
      "processor": "MediaTek Helio G99 (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with XBOOST Gaming Engine & Mali-G57 MC2 GPU",
      "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB total)",
      "storage": "128 GB / 256 GB UFS 2.2 internal storage (dedicated microSD slot up to 1TB)",
      "mainCamera": "108MP Ultra-Clear Triple Camera (f/1.75, 1/1.67\", 0.64µm, PDAF) + 2MP Macro (f/2.4) + AI Lens with Quad-LED Flash & 2K@30fps Video",
      "selfieCamera": "32MP Crystal-Clear Selfie (f/2.2, Dual-LED Flash, 1080p@30fps)",
      "battery": "5000 mAh High-Capacity Battery with Metamaterial Gaming Cooling System",
      "charging": "33W Enduring FastCharge (20% to 75% in 35 mins via Type-C)",
      "os": "Android 13 with XOS 13.5 (Upgradable to Android 14)",
      "network": "4G Dual SIM, Dual Stereo Speakers tuned by DTS with Hi-Res Audio (200% Super Volume), Side-Mounted Fingerprint, Multi-Functional NFC, 3.5mm Headphone Jack",
      "resolution": "FHD+ IPS LCD (2460 x 1080 pixels), 20.5:9 ratio (~396 ppi)",
      "peakBrightness": "500 nits peak brightness",
      "hdrSupport": "120Hz refresh rate, 1200Hz instantaneous touch sampling",
      "dimensions": "168.6 x 76.6 x 8.25 mm, 199g",
      "buildMaterials": "Glass front, dazzling starry glitter composite back panel",
      "simSlot": "Triple SIM tray (2 Nano-SIMs + dedicated microSD slot up to 1TB)",
      "waterResistance": "Splash resistant body",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with EIS",
      "opticsFeatures": "108MP Main (f/1.75, 1/1.67\", PDAF), 2MP Macro, AI auxiliary lens, Quad-LED flash",
      "frontVideoRecording": "1080p @ 30fps with front Dual-LED flash",
      "wirelessCharging": "Not supported (33W Fast Charge wired)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.2, NFC, 3.5mm headphone jack",
      "specialHardware": "Magic Ring interactive notification pill, XBOOST gaming engine",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, dual stereo speakers with DTS audio, 3.5mm jack"
    },
    "colors": [
      "Starlit Black",
      "Palm Blue",
      "Horizon Gold",
      "Starfall Green"
    ],
    "colorImages": {
      "Starlit Black": "/images/infinix-hot-40-pro-starlit-black.webp",
      "Palm Blue": "/images/infinix-hot-40-pro-palm-blue.webp",
      "Horizon Gold": "/images/infinix-hot-40-pro-horizon-gold.webp",
      "Starfall Green": "/images/infinix-hot-40-pro-starfall-green.webp"
    },
    "colorHexes": {
      "Starlit Black": "#22242a",
      "Palm Blue": "#b8d8ea",
      "Horizon Gold": "#f3dfb2",
      "Starfall Green": "#a7e5bf"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Peshawar",
      "Multan",
      "Hyderabad",
      "Quetta"
    ]
  },
  {
    "id": "xiaomi-redmi-13c",
    "name": "Xiaomi Redmi 13C",
    "brand": "Xiaomi",
    "model": "Redmi 13C (128GB)",
    "pricePKR": 29499,
    "officialPricePKR": 33999,
    "marketPriceRangePKR": {
      "min": 28500,
      "max": 30500
    },
    "variants": [
      {
        "id": "r13c-4-128",
        "name": "4GB / 128GB",
        "ram": "4 GB LPDDR4X (+ 4 GB Virtual RAM = 8GB)",
        "storage": "128 GB eMMC 5.1 storage",
        "pricePKR": 29499,
        "officialPricePKR": 31999,
        "marketPriceRangePKR": {
          "min": 28500,
          "max": 30500
        }
      },
      {
        "id": "r13c-6-128",
        "name": "6GB / 128GB",
        "ram": "6 GB LPDDR4X (+ 6 GB Virtual RAM = 12GB)",
        "storage": "128 GB eMMC 5.1 storage",
        "pricePKR": 30499,
        "officialPricePKR": 33999,
        "marketPriceRangePKR": {
          "min": 29500,
          "max": 31500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 3200,
      "cnicTaxPKR": 4030,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 3200,
    "ptaCnicTax": 4030,
    "isLocallyAssembled": true,
    "releaseDate": "November 2023",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/xiaomi-redmi-13c-midnight-black.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.74\" HD+ Dot Drop Display, 90Hz Refresh Rate, 1600 x 720 pixels (260 ppi), 600 nits (HBM) Peak Brightness, Corning Gorilla Glass Protection, TÜV Rheinland Low Blue Light & Flicker-Free Certified",
      "refreshRate": "90Hz Smooth Display",
      "processor": "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with Arm Mali-G52 MC2 GPU",
      "ram": "4 GB / 6 GB LPDDR4X (+ Memory Extension virtual RAM)",
      "storage": "128 GB internal storage (dedicated microSD slot expandable up to 1TB)",
      "mainCamera": "50MP AI Main Camera (f/1.8, 5P lens) + 2MP Macro (f/2.4) + Auxiliary Lens with FilmCamera vintage filters & 1080p@30fps Video",
      "selfieCamera": "8MP Front Camera (f/2.0, Soft-Light Ring, 1080p@30fps)",
      "battery": "5000 mAh Ultra-Large Battery",
      "charging": "18W Fast Charging via Type-C (10W power adapter in box)",
      "os": "MIUI 14 based on Android 13 (Upgradable to Xiaomi HyperOS)",
      "network": "4G Dual SIM (Nano-SIM, dual stand-by), Side-Mounted Fingerprint Sensor, AI Face Unlock, 3.5mm Headphone Jack, 8.09mm Sleek Flat Frame Design",
      "resolution": "HD+ IPS LCD (1600 x 720 pixels), 20:9 ratio (~260 ppi)",
      "peakBrightness": "600 nits HBM, 450 nits typical",
      "hdrSupport": "90Hz refresh rate, TÜV Rheinland Low Blue Light certified",
      "dimensions": "168.0 x 78.0 x 8.09 mm, 192g",
      "buildMaterials": "Corning Gorilla Glass front, frosted composite back, flat frame",
      "simSlot": "Triple SIM slot (2 Nano-SIMs + dedicated microSD up to 1TB)",
      "waterResistance": "Splash resistant body",
      "stabilization": "Standard digital stabilization with PDAF",
      "videoRecording": "1080p @ 30fps, 720p @ 30fps (Helio G85 limits to 1080p30)",
      "opticsFeatures": "50MP 5P lens (f/1.8, PDAF), 2MP Macro (f/2.4), auxiliary lens with LED flash",
      "frontVideoRecording": "1080p @ 30fps with soft-light ring",
      "wirelessCharging": "Not supported (18W wired fast charging via USB Type-C)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.3, FM Radio, 3.5mm audio jack",
      "specialHardware": "Ultra-slim 8.09mm flat-edge design, dedicated triple-card tray",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, single bottom loudspeaker, 3.5mm headphone jack"
    },
    "colors": [
      "Midnight Black",
      "Navy Blue",
      "Glacier White",
      "Clover Green"
    ],
    "colorImages": {
      "Midnight Black": "/images/xiaomi-redmi-13c-midnight-black.webp",
      "Navy Blue": "/images/xiaomi-redmi-13c-navy-blue.webp",
      "Glacier White": "/images/xiaomi-redmi-13c-glacier-white.webp",
      "Clover Green": "/images/xiaomi-redmi-13c-clover-green.webp"
    },
    "colorHexes": {
      "Midnight Black": "#1f2126",
      "Navy Blue": "#2b485d",
      "Glacier White": "#eef2f5",
      "Clover Green": "#d0e3cf"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Rawalpindi",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala",
      "Peshawar",
      "Quetta"
    ]
  },
  {
    "id": "xiaomi-redmi-note-13-4g",
    "name": "Xiaomi Redmi Note 13",
    "brand": "Xiaomi",
    "model": "Redmi Note 13 (128GB / 256GB)",
    "pricePKR": 46499,
    "officialPricePKR": 52999,
    "marketPriceRangePKR": {
      "min": 45000,
      "max": 47500
    },
    "variants": [
      {
        "id": "rn13-8-128",
        "name": "8GB / 128GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Memory Extension = 16GB)",
        "storage": "128 GB UFS 2.2 internal storage",
        "pricePKR": 46499,
        "officialPricePKR": 52999,
        "marketPriceRangePKR": {
          "min": 45000,
          "max": 47500
        }
      },
      {
        "id": "rn13-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Memory Extension = 16GB)",
        "storage": "256 GB UFS 2.2 internal storage",
        "pricePKR": 48999,
        "officialPricePKR": 57999,
        "marketPriceRangePKR": {
          "min": 47500,
          "max": 50500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "January 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/xiaomi-redmi-note-13-midnight-black.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.67\" FHD+ AMOLED, 120Hz Ultra-Smooth Refresh Rate, 2400 x 1080 pixels, 1800 nits Peak Brightness, Corning Gorilla Glass 3, Ultra-Slim Bezels (1.79mm)",
      "refreshRate": "120Hz Super AMOLED",
      "processor": "Qualcomm Snapdragon 685 (6nm) Octa-Core (4x2.8 GHz Cortex-A73 & 4x1.9 GHz Cortex-A53) with Adreno 610 GPU",
      "ram": "8 GB LPDDR4X (+ up to 8GB Virtual RAM)",
      "storage": "128 GB / 256 GB UFS 2.2 storage (microSD card expandable up to 1TB)",
      "mainCamera": "108MP Ultra-Clear Main Camera (1/1.67\", 3x In-Sensor Lossless Zoom, f/1.75) + 8MP Ultra-Wide (f/2.2) + 2MP Macro (f/2.4) Triple Camera with 1080p@30fps Video",
      "selfieCamera": "16MP Front HD Camera (f/2.4, HDR, 1080p@30fps)",
      "battery": "5000 mAh High-Capacity Battery",
      "charging": "33W Fast Charging (33W in-box power adapter via Type-C)",
      "os": "MIUI 14 based on Android 13 (Eligible for Xiaomi HyperOS)",
      "network": "4G Dual SIM, In-Display Optical Fingerprint Sensor (with Heart Rate Monitoring), Dual Stereo Speakers with Dolby Atmos, IP54 Splash & Dust Proof, 3.5mm Headphone Jack, IR Blaster",
      "resolution": "FHD+ AMOLED (2400 x 1080 pixels), 20:9 ratio (~395 ppi)",
      "peakBrightness": "1800 nits peak brightness, 100% DCI-P3 wide color gamut",
      "hdrSupport": "120Hz refresh rate, TÜV Rheinland Circadian Friendly certified",
      "dimensions": "162.24 x 75.55 x 7.97 mm, 188.5g",
      "buildMaterials": "Corning Gorilla Glass 3 front, matte composite back with ultra-thin bezels",
      "simSlot": "Hybrid Dual SIM (Nano-SIM, dual stand-by, microSD up to 1TB)",
      "waterResistance": "IP54 dust and splash resistant",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "1080p @ 30fps, 720p @ 30fps (Snapdragon 685 ISP limits to 1080p30)",
      "opticsFeatures": "108MP (1/1.67\", f/1.75, 3x in-sensor lossless zoom), 8MP Ultra-wide, 2MP Macro",
      "frontVideoRecording": "1080p @ 30fps",
      "wirelessCharging": "Not supported (33W wired fast charging)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.1, 3.5mm audio jack, IR Blaster",
      "specialHardware": "Xiaomi Imaging Engine algorithm, IR blaster remote control, ultra-narrow 1.8mm chin",
      "biometricsAudio": "In-display optical fingerprint scanner with heart-rate monitoring, dual stereo speakers with Dolby Atmos, 3.5mm jack"
    },
    "colors": [
      "Midnight Black",
      "Mint Green",
      "Ice Blue",
      "Ocean Sunset"
    ],
    "colorImages": {
      "Midnight Black": "/images/xiaomi-redmi-note-13-midnight-black.webp",
      "Mint Green": "/images/xiaomi-redmi-note-13-mint-green.webp",
      "Ice Blue": "/images/xiaomi-redmi-note-13-ice-blue.webp",
      "Ocean Sunset": "/images/xiaomi-redmi-note-13-ocean-sunset.webp"
    },
    "colorHexes": {
      "Midnight Black": "#1b1d22",
      "Mint Green": "#c2dec9",
      "Ice Blue": "#a4c9e4",
      "Ocean Sunset": "#f0d1a8"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Gujranwala"
    ]
  },
  {
    "id": "tecno-camon-30",
    "name": "Tecno Camon 30",
    "brand": "Tecno",
    "model": "Camon 30 (256GB)",
    "pricePKR": 49999,
    "officialPricePKR": 62999,
    "marketPriceRangePKR": {
      "min": 48500,
      "max": 51500
    },
    "variants": [
      {
        "id": "camon30-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "256 GB internal flash storage",
        "pricePKR": 49999,
        "officialPricePKR": 54999,
        "marketPriceRangePKR": {
          "min": 48500,
          "max": 51500
        }
      },
      {
        "id": "camon30-12-256",
        "name": "12GB / 256GB",
        "ram": "12 GB LPDDR4X (+ 12 GB Extended RAM = 24GB)",
        "storage": "256 GB internal flash storage",
        "pricePKR": 55999,
        "officialPricePKR": 62999,
        "marketPriceRangePKR": {
          "min": 54500,
          "max": 57500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "April 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/tecno-camon-30-basaltic-dark.webp",
    "tags": [
      "trending",
      "budget",
      "camera"
    ],
    "specs": {
      "display": "6.78\" FHD+ AMOLED, 120Hz Refresh Rate, 1080 x 2436 pixels, Eye Comfort Certified, Wet Touch Technology, Classic Side-Axis Camera Design",
      "refreshRate": "120Hz AMOLED",
      "processor": "MediaTek Helio G99 Ultimate (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with 10-Layer Gaming Liquid Cooling",
      "ram": "8 GB / 12 GB LPDDR4X (+ up to 12GB Extended RAM)",
      "storage": "256 GB internal storage (microSD card slot expandable)",
      "mainCamera": "50MP OIS Ultra-Steady Main Camera (1/1.57\", Optical Image Stabilization, f/1.88) + 2MP Depth + Auxiliary Light Sensor with Dual Flash & 2K@30fps Video",
      "selfieCamera": "50MP Eye-Tracking Autofocus Front Camera (f/2.45, Dual Color Temperature Micro-slit Flash, 2K Video)",
      "battery": "5000 mAh Long-Life Battery with 1600-cycle durability",
      "charging": "70W Ultra Charge (0 to 100% in 45 mins via Type-C)",
      "os": "Android 14 with HiOS 14 (Dynamic Port & AI Erase/Smart AI features)",
      "network": "4G Dual SIM, In-Display Optical Fingerprint, Dual Stereo Speakers tuned with Dolby Atmos, Smart Breathing Action Light indicator, Multifunctional NFC, IR Remote Control",
      "resolution": "FHD+ AMOLED (2436 x 1080 pixels), 20:9 ratio (~393 ppi)",
      "peakBrightness": "1000 nits peak brightness, Always-On Display",
      "hdrSupport": "120Hz refresh rate, eye protection certified",
      "dimensions": "165.3 x 75.3 x 7.7 mm, 189g",
      "buildMaterials": "Glass front, marble texture glass / Tech Art eco-leather back, metallic frame",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP54 dust and splash resistance",
      "stabilization": "OIS (Optical Image Stabilization) on 50MP main camera + EIS",
      "videoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with OIS and EIS",
      "opticsFeatures": "50MP 1/1.57\" sensor with OIS, 2MP Depth, auxiliary light sensor, Dual-LED flash",
      "frontVideoRecording": "2K @ 30fps, 1080p @ 30/60fps with Eye-tracking AF",
      "wirelessCharging": "Not supported (70W Ultra Charge wired)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.2, NFC, IR Blaster",
      "specialHardware": "Smart Breathing Light notification indicator on back, rangefinder camera styling",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers with Dolby Atmos"
    },
    "colors": [
      "Iceland Basaltic Dark",
      "Uyuni Salt White",
      "Sahara Sand Brown"
    ],
    "colorImages": {
      "Iceland Basaltic Dark": "/images/tecno-camon-30-basaltic-dark.webp",
      "Uyuni Salt White": "/images/tecno-camon-30-uyuni-white.webp",
      "Sahara Sand Brown": "/images/tecno-camon-30-sahara-brown.webp"
    },
    "colorHexes": {
      "Iceland Basaltic Dark": "#25262c",
      "Uyuni Salt White": "#e7edf3",
      "Sahara Sand Brown": "#d69e68"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Rawalpindi",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Hyderabad"
    ]
  },
  {
    "id": "realme-c67",
    "name": "Realme C67",
    "brand": "Realme",
    "model": "C67 (128GB)",
    "pricePKR": 38499,
    "officialPricePKR": 39999,
    "marketPriceRangePKR": {
      "min": 37500,
      "max": 39500
    },
    "variants": [
      {
        "id": "c67-8-128",
        "name": "8GB / 128GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Dynamic RAM = 16GB)",
        "storage": "128 GB internal storage",
        "pricePKR": 38499,
        "officialPricePKR": 39999,
        "marketPriceRangePKR": {
          "min": 37500,
          "max": 39500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "January 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/realme-c67-sunny-oasis.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.72\" FHD+ 90Hz Display, 1080 x 2400 pixels, 950 nits Peak Brightness, 16.7M Colors, Ultra-Slim 7.59mm Sunny Oasis Gradient Body",
      "refreshRate": "90Hz FHD+ Display",
      "processor": "Qualcomm Snapdragon 685 (6nm) Octa-Core (4x2.8 GHz Cortex-A73 & 4x1.9 GHz Cortex-A53) with Adreno 610 GPU",
      "ram": "8 GB LPDDR4X (+ 8 GB Dynamic RAM Expansion = 16GB total)",
      "storage": "128 GB internal storage (dedicated 3-card slot expandable up to 2TB microSD)",
      "mainCamera": "108MP 3x In-Sensor Zoom Camera (f/1.75, 1/1.67\", 0.64µm, EIS) + 2MP Depth Camera (f/2.4) with Cinematic Night Filters & 1080p@30fps Video",
      "selfieCamera": "8MP Front Camera (f/2.05, 1080p@30fps)",
      "battery": "5000 mAh Massive Battery",
      "charging": "33W SUPERVOOC Fast Charge (50% in 31 mins via Type-C)",
      "os": "realme UI based on Android 14",
      "network": "4G Dual SIM, Dual Stereo Speakers (200% UltraBoom Audio), Side Fingerprint Sensor, Mini Capsule 2.0 interactive notification pill, IP54 Water & Dust Resistance, 3.5mm Headphone Jack",
      "resolution": "FHD+ IPS LCD (2400 x 1080 pixels), 20:9 ratio (~392 ppi)",
      "peakBrightness": "950 nits peak brightness (HBM)",
      "hdrSupport": "90Hz refresh rate, 180Hz touch sampling rate",
      "dimensions": "164.6 x 75.4 x 7.59 mm, 185g",
      "buildMaterials": "Glass front, sunny oasis gradient textured back, ultra-slim 7.59mm body",
      "simSlot": "Triple SIM tray (2 Nano-SIMs + dedicated microSD up to 2TB)",
      "waterResistance": "IP54 water and dust resistance",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "1080p @ 30fps with EIS (Snapdragon 685 ISP limits to 1080p30)",
      "opticsFeatures": "108MP Samsung ISOCELL HM6 (1/1.67\", f/1.75), 3x in-sensor lossless zoom, 2MP Depth (f/2.4)",
      "frontVideoRecording": "1080p @ 30fps",
      "wirelessCharging": "Not supported (33W SUPERVOOC wired fast charging)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.0, 3.5mm headphone jack",
      "specialHardware": "Mini Capsule 2.0 dynamic status pill (battery, music, weather notifications)",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, dual stereo speakers with 200% UltraBoom, 3.5mm jack"
    },
    "colors": [
      "Sunny Oasis",
      "Black Rock"
    ],
    "colorImages": {
      "Sunny Oasis": "/images/realme-c67-sunny-oasis.webp",
      "Black Rock": "/images/realme-c67-black-rock.webp"
    },
    "colorHexes": {
      "Sunny Oasis": "#9ee2a7",
      "Black Rock": "#272a2e"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Multan",
      "Gujranwala",
      "Peshawar",
      "Sialkot"
    ]
  },
  {
    "id": "infinix-note-40",
    "name": "Infinix Note 40",
    "brand": "Infinix",
    "model": "Note 40 (256GB)",
    "pricePKR": 57999,
    "officialPricePKR": 57999,
    "marketPriceRangePKR": {
      "min": 56500,
      "max": 59000
    },
    "variants": [
      {
        "id": "n40-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "256 GB UFS 2.2 internal storage",
        "pricePKR": 57999,
        "officialPricePKR": 57999,
        "marketPriceRangePKR": {
          "min": 56500,
          "max": 59000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "March 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/infinix-note-40-titan-gold.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.78\" FHD+ AMOLED, 120Hz Ultra-Smooth Refresh Rate, 1080 x 2436 pixels, 1300 nits Peak Brightness, Corning Gorilla Glass Protection, 2160Hz PWM Dimming",
      "refreshRate": "120Hz Super AMOLED",
      "processor": "MediaTek Helio G99 Ultimate (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with Cheetah X1 Power Management Chip",
      "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB total)",
      "storage": "256 GB UFS 2.2 internal storage (microSD card expandable)",
      "mainCamera": "108MP Super-Zoom Triple Camera (f/1.89, 3x Lossless In-Sensor Zoom, PDAF) + 2MP Macro + 2MP AI Lens with Quad-LED Flash & Active Halo AI Lighting System",
      "selfieCamera": "32MP Crystal-Clear Selfie (f/2.2, Dual-LED Flash, 2K@30fps)",
      "battery": "5000 mAh High-Density Long-Life Battery",
      "charging": "45W All-Round FastCharge 2.0 (50% in 26 mins) + 20W Wireless MagCharge (MagKit wireless magnetic charging)",
      "os": "Android 14 with XOS 14 (2 Major Android Upgrades & 36 Months Fluency Guarantee)",
      "network": "4G Dual SIM, In-Display Optical Fingerprint Scanner, Dual Stereo Speakers Tuned by JBL with 360° Symmetrical Audio, Multi-functional NFC, IP54 Splash-Proof, IR Remote Control",
      "resolution": "FHD+ AMOLED (2436 x 1080 pixels), 20:9 ratio (~393 ppi)",
      "peakBrightness": "1300 nits peak brightness, 2160Hz PWM dimming",
      "hdrSupport": "120Hz refresh rate, TÜV Rheinland Low Blue Light certified",
      "dimensions": "164.1 x 74.5 x 7.75 mm, 190g",
      "buildMaterials": "Corning Gorilla Glass front, frosted glass back with ultra-thin flat bezels",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP54 dust and splash resistant",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with EIS",
      "opticsFeatures": "108MP Super-Zoom camera (f/1.89, 3x lossless zoom), 2MP Macro, Quad-LED flash",
      "frontVideoRecording": "1080p @ 30fps with Dual-LED flash",
      "wirelessCharging": "20W Wireless MagCharge + 45W Multi-Speed FastCharge wired",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.2, NFC, IR Blaster",
      "specialHardware": "Cheetah X1 power management chip, Active Halo smart interactive lighting ring",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers tuned by JBL with Hi-Res audio"
    },
    "colors": [
      "Titan Gold",
      "Obsidian Black",
      "Racing Edition"
    ],
    "colorImages": {
      "Titan Gold": "/images/infinix-note-40-titan-gold.webp",
      "Obsidian Black": "/images/infinix-note-40-obsidian-black.webp",
      "Racing Edition": "/images/infinix-note-40-racing-edition.webp"
    },
    "colorHexes": {
      "Titan Gold": "#f5dfb8",
      "Obsidian Black": "#222329",
      "Racing Edition": "#dcdde1"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Quetta"
    ]
  },
  {
    "id": "samsung-galaxy-a05s",
    "name": "Samsung Galaxy A05s",
    "brand": "Samsung",
    "model": "Galaxy A05s (128GB)",
    "pricePKR": 29500,
    "officialPricePKR": 38500,
    "marketPriceRangePKR": {
      "min": 28800,
      "max": 30500
    },
    "variants": [
      {
        "id": "a05s-4-128",
        "name": "4GB / 128GB",
        "ram": "4 GB LPDDR4X (+ 4 GB RAM Plus)",
        "storage": "128 GB internal storage",
        "pricePKR": 29500,
        "officialPricePKR": 38500,
        "marketPriceRangePKR": {
          "min": 28800,
          "max": 30500
        }
      },
      {
        "id": "a05s-6-128",
        "name": "6GB / 128GB",
        "ram": "6 GB LPDDR4X (+ 6 GB RAM Plus)",
        "storage": "128 GB internal storage",
        "pricePKR": 34999,
        "officialPricePKR": 44999,
        "marketPriceRangePKR": {
          "min": 34000,
          "max": 36000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 3200,
      "cnicTaxPKR": 4030,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 3200,
    "ptaCnicTax": 4030,
    "isLocallyAssembled": true,
    "releaseDate": "October 2023",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/samsung-galaxy-a05s-black.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.7\" FHD+ PLS LCD Infinity-U Display, 90Hz Refresh Rate, 1080 x 2400 pixels, 393 ppi, Clean Linear Camera Layout",
      "refreshRate": "90Hz FHD+ Display",
      "processor": "Qualcomm Snapdragon 680 (6nm) Octa-Core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver) with Adreno 610 GPU",
      "ram": "4 GB / 6 GB LPDDR4X (+ up to 6GB RAM Plus)",
      "storage": "128 GB internal storage (dedicated microSD slot up to 1TB)",
      "mainCamera": "50MP Main Camera (f/1.8, AF) + 2MP Macro (f/2.4) + 2MP Depth (f/2.4) Triple Camera with 1080p@60fps FHD Video Recording",
      "selfieCamera": "13MP Front Camera (f/2.0, 1080p@30fps)",
      "battery": "5000 mAh Long-Lasting Battery",
      "charging": "25W Super Fast Charging (Type-C)",
      "os": "Android 13 with One UI Core 5.1 (Upgradable to Android 14 One UI 6)",
      "network": "4G LTE Dual SIM, Side-Mounted Fingerprint Sensor, 3.5mm Earphone Jack, USB Type-C 2.0, Bluetooth 5.1, Wi-Fi 5",
      "resolution": "FHD+ PLS LCD (2400 x 1080 pixels), 20:9 ratio (~393 ppi)",
      "peakBrightness": "500 nits typical brightness",
      "hdrSupport": "90Hz refresh rate, Infinity-U display notch",
      "dimensions": "168.0 x 77.8 x 8.8 mm, 194g",
      "buildMaterials": "Glass front, matte patterned composite back and sides",
      "simSlot": "Triple SIM slot (2 Nano-SIMs + dedicated microSD up to 1TB)",
      "waterResistance": "Splash resistant body",
      "stabilization": "Standard digital image stabilization with autofocus",
      "videoRecording": "1080p @ 30/60fps with digital stabilization (NO 4K or 8K)",
      "opticsFeatures": "50MP Main (f/1.8, AF), 2MP Macro (f/2.4), 2MP Depth (f/2.4), LED flash",
      "frontVideoRecording": "1080p @ 30fps",
      "wirelessCharging": "Not supported (25W wired fast charging via USB Type-C)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.1, 3.5mm headphone jack",
      "specialHardware": "Dedicated triple-card slot, Samsung One UI Core experience",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, single loudspeaker, 3.5mm headphone jack"
    },
    "colors": [
      "Black",
      "Silver",
      "Light Green"
    ],
    "colorImages": {
      "Black": "/images/samsung-galaxy-a05s-black.webp",
      "Silver": "/images/samsung-galaxy-a05s-silver.webp",
      "Light Green": "/images/samsung-galaxy-a05s-light-violet.webp"
    },
    "colorHexes": {
      "Black": "#1a1c20",
      "Silver": "#dedfe4",
      "Light Green": "#cbd9cc"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Rawalpindi",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala",
      "Peshawar",
      "Sargodha"
    ]
  },
  {
    "id": "infinix-hot-50-pro-plus",
    "name": "Infinix Hot 50 Pro+",
    "brand": "Infinix",
    "model": "Hot 50 Pro+ (256GB)",
    "pricePKR": 54500,
    "officialPricePKR": 58999,
    "marketPriceRangePKR": {
      "min": 53500,
      "max": 55500
    },
    "variants": [
      {
        "id": "h50pp-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "256 GB UFS internal storage",
        "pricePKR": 54500,
        "officialPricePKR": 58999,
        "marketPriceRangePKR": {
          "min": 53500,
          "max": 55500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "October 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/infinix-hot-50-pro-plus-sleek-black.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.78\" 3D Curved FHD+ AMOLED, 120Hz Ultra-Smooth Refresh Rate, 1080 x 2436 pixels, 1300 nits Peak Brightness, Corning Gorilla Glass Protection, Ultra-Slim 6.8mm Feather-Light Titanium Body",
      "refreshRate": "120Hz 3D Curved AMOLED",
      "processor": "MediaTek Helio G100 (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with 60-Month Fluency TUV Certification",
      "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB total)",
      "storage": "256 GB UFS internal storage (dedicated microSD expandable up to 2TB)",
      "mainCamera": "50MP Ultra-Clear Main Camera (f/1.6, 1/2.8\", AF) + 2MP Depth + Auxiliary AI lens with Quad-LED Flash & 2K@30fps Video",
      "selfieCamera": "13MP Front Camera (f/2.2, Dual-LED Flash, 2K Video)",
      "battery": "5000 mAh High-Density Long-Life Battery",
      "charging": "33W Fast Charging (0-50% in 26 mins) + 10W Reverse Wired Charging via Type-C",
      "os": "Android 14 with XOS 14.5 (Folax AI Assistant & Dynamic Bar)",
      "network": "4G Dual SIM, In-Display Optical Fingerprint Scanner, Dual Stereo Speakers Tuned by JBL, Multi-functional NFC, IP54 Splash Resistance",
      "resolution": "FHD+ 3D Curved AMOLED (2436 x 1080 pixels), 20:9 ratio (~393 ppi)",
      "peakBrightness": "1300 nits peak brightness, 2160Hz PWM dimming",
      "hdrSupport": "120Hz refresh rate, Always-On Display, DCI-P3 color gamut",
      "dimensions": "164.1 x 74.4 x 6.8 mm, 162g (World's slimmest 3D-curved smartphone in its class)",
      "buildMaterials": "Corning Gorilla Glass front, ultra-thin 6.8mm featherweight titanium-inspired chassis",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by)",
      "waterResistance": "IP54 splash and dust resistance with Wet Touch control",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with gyro-EIS",
      "opticsFeatures": "50MP Ultra-Clear Main (f/1.6, 1/2.8\", AF), 2MP Depth, auxiliary light sensor, Quad-LED flash",
      "frontVideoRecording": "1080p @ 30fps with front LED flash",
      "wirelessCharging": "Not supported (33W Advanced FastCharge wired with bypass charging)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.3, NFC, FM radio",
      "specialHardware": "Ultra-slim 6.8mm body, TÜV Rheinland 5-Year Fluency A-Grade certification, Dynamic Bar notifications",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers tuned by JBL with Hi-Res audio"
    },
    "colors": [
      "Sleek Black",
      "Titanium Grey",
      "Dreamy Purple"
    ],
    "colorImages": {
      "Sleek Black": "/images/infinix-hot-50-pro-plus-sleek-black.webp",
      "Titanium Grey": "/images/infinix-hot-50-pro-plus-titanium-grey.webp",
      "Dreamy Purple": "/images/infinix-hot-50-pro-plus-dreamy-purple.webp"
    },
    "colorHexes": {
      "Sleek Black": "#23252a",
      "Titanium Grey": "#cfcfd4",
      "Dreamy Purple": "#c2b5e2"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Gujranwala"
    ]
  },
  {
    "id": "infinix-hot-50-pro",
    "name": "Infinix Hot 50 Pro",
    "brand": "Infinix",
    "model": "Hot 50 Pro (128GB / 256GB)",
    "pricePKR": 39499,
    "officialPricePKR": 41999,
    "marketPriceRangePKR": {
      "min": 38800,
      "max": 40500
    },
    "variants": [
      {
        "id": "h50p-8-128",
        "name": "8GB / 128GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "128 GB internal flash storage",
        "pricePKR": 39499,
        "officialPricePKR": 41999,
        "marketPriceRangePKR": {
          "min": 38800,
          "max": 40500
        }
      },
      {
        "id": "h50p-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "256 GB internal flash storage",
        "pricePKR": 43999,
        "officialPricePKR": 46999,
        "marketPriceRangePKR": {
          "min": 43000,
          "max": 45000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "October 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/infinix-hot-50-pro-sleek-black.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.78\" Flat FHD+ AMOLED, 120Hz Refresh Rate, 1080 x 2436 pixels, 1800 nits Peak Brightness, Always-On Display, 2160Hz High-Frequency PWM Dimming",
      "refreshRate": "120Hz FHD+ AMOLED",
      "processor": "MediaTek Helio G100 (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with Mali-G57 MC2 GPU",
      "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB total)",
      "storage": "128 GB / 256 GB internal flash storage (microSD expandable)",
      "mainCamera": "50MP Ultra-Clear Main Camera (f/1.6, 1/2.8\", AF) + 2MP Macro/Depth + AI lens with Quad-LED Flash",
      "selfieCamera": "8MP Front Camera with Dual-LED Flash",
      "battery": "5000 mAh Long-Lasting Battery",
      "charging": "33W Fast Charge (Type-C)",
      "os": "Android 14 with XOS 14.5",
      "network": "4G Dual SIM, In-Display Optical Fingerprint, Dual Stereo Speakers Tuned by JBL, Multi-functional NFC, IP54 Splash-Proof",
      "resolution": "FHD+ AMOLED (2460 x 1080 pixels), 20:9 ratio (~396 ppi)",
      "peakBrightness": "1800 nits peak brightness, 1200 nits HBM",
      "hdrSupport": "120Hz refresh rate, Always-On Display, TÜV Rheinland Low Blue Light",
      "dimensions": "167.0 x 75.6 x 7.4 mm, 188g",
      "buildMaterials": "Glass front, sleek matte composite back with flat metallic-styled edges",
      "simSlot": "Triple SIM tray (2 Nano-SIMs + dedicated microSD slot up to 1TB)",
      "waterResistance": "IP54 splash and dust resistance with Wet Touch technology",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with gyro-EIS",
      "opticsFeatures": "50MP Main (f/1.6, 1/2.8\", AF), 2MP Depth, auxiliary sensor, Quad-LED flash",
      "frontVideoRecording": "1080p @ 30fps with front LED flash",
      "wirelessCharging": "Not supported (33W FastCharge wired)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.3, NFC, 3.5mm audio jack",
      "specialHardware": "TÜV Rheinland 5-Year Fluency certification, Dynamic Bar interactive notifications",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers tuned by JBL with Hi-Res audio, 3.5mm jack"
    },
    "colors": [
      "Sleek Black",
      "Glacier Blue",
      "Titanium Grey"
    ],
    "colorImages": {
      "Sleek Black": "/images/infinix-hot-50-pro-sleek-black.webp",
      "Glacier Blue": "/images/infinix-hot-50-pro-glacier-blue.webp",
      "Titanium Grey": "/images/infinix-hot-50-pro-titanium-grey.webp"
    },
    "colorHexes": {
      "Sleek Black": "#24262d",
      "Glacier Blue": "#bfdce5",
      "Titanium Grey": "#d2d3d8"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Rawalpindi",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Quetta"
    ]
  },
  {
    "id": "tecno-spark-30-pro",
    "name": "Tecno Spark 30 Pro",
    "brand": "Tecno",
    "model": "Spark 30 Pro (128GB / 256GB)",
    "pricePKR": 41499,
    "officialPricePKR": 41499,
    "marketPriceRangePKR": {
      "min": 40500,
      "max": 42500
    },
    "variants": [
      {
        "id": "s30p-8-128",
        "name": "8GB / 128GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Memory Fusion = 16GB)",
        "storage": "128 GB internal storage",
        "pricePKR": 41499,
        "officialPricePKR": 41499,
        "marketPriceRangePKR": {
          "min": 40500,
          "max": 42500
        }
      },
      {
        "id": "s30p-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Memory Fusion = 16GB)",
        "storage": "256 GB internal storage",
        "pricePKR": 46999,
        "officialPricePKR": 49999,
        "marketPriceRangePKR": {
          "min": 46000,
          "max": 48000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "September 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/tecno-spark-30-pro-obsidian-edge.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.78\" FHD+ AMOLED, 120Hz Ultra-Fluid Refresh Rate, 1080 x 2436 pixels, 1000 nits Peak Brightness, Eye Care Certification, Wet Hand Touch",
      "refreshRate": "120Hz AMOLED",
      "processor": "MediaTek Helio G100 (6nm) Octa-Core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55) with 5-Year Lag-Free TUV Certification",
      "ram": "8 GB LPDDR4X (+ 8 GB Memory Fusion = 16GB total)",
      "storage": "128 GB / 256 GB internal storage (microSD card expandable up to 1TB)",
      "mainCamera": "108MP Ultra-Clear Main Camera (f/1.89, 1/1.52\", 3x Lossless In-Sensor Zoom, PDAF) + Auxiliary Depth Lens with Quad-LED Flash & 2K Video",
      "selfieCamera": "13MP Front Camera (f/2.2, Dual Color Flash)",
      "battery": "5000 mAh High-Capacity Battery (Over 4 Years Battery Health)",
      "charging": "33W Fast Charge via Type-C",
      "os": "Android 14 with HiOS 14 (Ella AI & Dynamic Port)",
      "network": "4G Dual SIM, In-Display Optical Fingerprint Sensor, Dual Symmetrical Stereo Speakers with Dolby Atmos & Hi-Res Audio, Infrared Remote Control, IP54 Splash & Dust Resistance",
      "resolution": "FHD+ AMOLED (2436 x 1080 pixels), 20:9 ratio (~393 ppi)",
      "peakBrightness": "1700 nits peak brightness, 100% DCI-P3",
      "hdrSupport": "120Hz refresh rate, TÜV Low Blue Light Eye-Care certified",
      "dimensions": "166.6 x 77.0 x 7.4 mm, 187g",
      "buildMaterials": "Glass front, Transformers / Cyber-inspired matte composite back, ultra-slim 7.4mm body",
      "simSlot": "Dual SIM (Nano-SIM, dual stand-by, microSD slot up to 1TB)",
      "waterResistance": "IP54 dust and splash resistance with Wet Hand Touch control",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "2K (1440p) @ 30fps, 1080p @ 30/60fps with EIS",
      "opticsFeatures": "108MP Ultra-Clear sensor (1/1.52\", f/1.89, 3x in-sensor lossless zoom), auxiliary light sensor, Quad-LED flash",
      "frontVideoRecording": "1080p @ 30fps with Dual micro-slit LED flash",
      "wirelessCharging": "Not supported (33W Fast Charge wired)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.3, NFC, FM Radio, IR Blaster",
      "specialHardware": "TÜV Rheinland 5-Year Lag-Free fluency certification, infrared remote control",
      "biometricsAudio": "In-display optical fingerprint scanner, dual stereo speakers with Dolby Atmos & Hi-Res audio"
    },
    "colors": [
      "Obsidian Edge",
      "Arctic Glow"
    ],
    "colorImages": {
      "Obsidian Edge": "/images/tecno-spark-30-pro-obsidian-edge.webp",
      "Arctic Glow": "/images/tecno-spark-30-pro-arctic-glow.webp"
    },
    "colorHexes": {
      "Obsidian Edge": "#25272e",
      "Arctic Glow": "#edf0f4"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Rawalpindi",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala",
      "Peshawar"
    ]
  },
  {
    "id": "xiaomi-redmi-14c",
    "name": "Xiaomi Redmi 14C",
    "brand": "Xiaomi",
    "model": "Redmi 14C (128GB)",
    "pricePKR": 29999,
    "officialPricePKR": 29999,
    "marketPriceRangePKR": {
      "min": 29000,
      "max": 31000
    },
    "variants": [
      {
        "id": "r14c-4-128",
        "name": "4GB / 128GB",
        "ram": "4 GB LPDDR4X (+ 4 GB Memory Extension = 8GB)",
        "storage": "128 GB internal storage",
        "pricePKR": 29999,
        "officialPricePKR": 29999,
        "marketPriceRangePKR": {
          "min": 29000,
          "max": 31000
        }
      },
      {
        "id": "r14c-6-128",
        "name": "6GB / 128GB",
        "ram": "6 GB LPDDR4X (+ 6 GB Memory Extension = 12GB)",
        "storage": "128 GB internal storage",
        "pricePKR": 42999,
        "officialPricePKR": 44999,
        "marketPriceRangePKR": {
          "min": 41500,
          "max": 44000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 3200,
      "cnicTaxPKR": 4030,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 3200,
    "ptaCnicTax": 4030,
    "isLocallyAssembled": true,
    "releaseDate": "August 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/xiaomi-redmi-14c-midnight-black.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.88\" Immersive Dot Drop Display, 120Hz Smooth Refresh Rate, 1640 x 720 pixels, 600 nits Peak Brightness, TUV Low Blue Light Certification, Ultra-Slim 8.22mm Circular Deco Glass Back",
      "refreshRate": "120Hz Immersive Display",
      "processor": "MediaTek Helio G81-Ultra (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with Mali-G52 MC2 GPU",
      "ram": "4 GB / 6 GB LPDDR4X (+ up to 6GB Memory Extension)",
      "storage": "128 GB eMMC 5.1 internal storage (dedicated microSD slot up to 1TB)",
      "mainCamera": "50MP AI Dual Camera (f/1.8, 5P lens, PDAF) + Auxiliary lens with FilmCamera filters & 1080p@30fps Video",
      "selfieCamera": "13MP Front Camera (f/2.0, Soft-light Ring, 1080p Video)",
      "battery": "5160 mAh Massive Battery",
      "charging": "18W Fast Charging via USB Type-C",
      "os": "Xiaomi HyperOS based on Android 14",
      "network": "4G Dual SIM, Side-Mounted Fingerprint Sensor, 3.5mm Headphone Jack, 150% Volume Boost Speaker, FM Radio",
      "resolution": "HD+ Dot Drop IPS LCD (1640 x 720 pixels), 20.6:9 ratio (~260 ppi)",
      "peakBrightness": "600 nits HBM, 450 nits typical",
      "hdrSupport": "120Hz refresh rate, TÜV Rheinland Low Blue Light and Flicker Free certified",
      "dimensions": "171.88 x 77.8 x 8.22 mm, 204g",
      "buildMaterials": "Glass front, premium circular glass back design (or starry blue composite), matte flat frame",
      "simSlot": "Triple SIM tray (2 Nano-SIMs + dedicated microSD up to 1TB)",
      "waterResistance": "Splash resistant body",
      "stabilization": "Standard digital stabilization with PDAF",
      "videoRecording": "1080p @ 30fps, 720p @ 30fps (Helio G81-Ultra limits to 1080p30)",
      "opticsFeatures": "50MP Main (f/1.8, 5P lens, PDAF), auxiliary decorative lens, LED flash",
      "frontVideoRecording": "1080p @ 30fps with soft-light ring",
      "wirelessCharging": "Not supported (18W Fast Charging wired via USB Type-C)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.4, FM radio, 3.5mm audio jack",
      "specialHardware": "Large immersive 6.88-inch display, ultra-slim 8.22mm profile with circular camera deco",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, single bottom speaker with 150% volume boost, 3.5mm jack"
    },
    "colors": [
      "Midnight Black",
      "Sage Green",
      "Dreamy Purple",
      "Starry Blue"
    ],
    "colorImages": {
      "Midnight Black": "/images/xiaomi-redmi-14c-midnight-black.webp",
      "Sage Green": "/images/xiaomi-redmi-14c-sage-green.webp",
      "Dreamy Purple": "/images/xiaomi-redmi-14c-dreamy-purple.webp",
      "Starry Blue": "/images/xiaomi-redmi-14c-starry-blue.webp"
    },
    "colorHexes": {
      "Midnight Black": "#1e2025",
      "Sage Green": "#859b6c",
      "Dreamy Purple": "#d7d1e8",
      "Starry Blue": "#2f4d80"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Sialkot"
    ]
  },
  {
    "id": "vivo-y28-4g",
    "name": "Vivo Y28",
    "brand": "Vivo",
    "model": "Y28 (128GB / 256GB)",
    "pricePKR": 38999,
    "officialPricePKR": 47999,
    "marketPriceRangePKR": {
      "min": 38000,
      "max": 40500
    },
    "variants": [
      {
        "id": "y28-8-128",
        "name": "8GB / 128GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "128 GB internal storage",
        "pricePKR": 41999,
        "officialPricePKR": 47999,
        "marketPriceRangePKR": {
          "min": 41000,
          "max": 43500
        }
      },
      {
        "id": "y28-8-256",
        "name": "8GB / 256GB",
        "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB)",
        "storage": "256 GB internal storage",
        "pricePKR": 46999,
        "officialPricePKR": 52999,
        "marketPriceRangePKR": {
          "min": 45500,
          "max": 48500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "July 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/vivo-y28-4g-gleaming-orange.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.68\" Sunlight Eye Protection Display, 90Hz Refresh Rate, 1608 x 720 pixels, 1000 nits High Brightness Mode, TUV Rheinland Low Blue Light Certified",
      "refreshRate": "90Hz Sunlight Display",
      "processor": "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with Mali-G52 MC2 GPU",
      "ram": "8 GB LPDDR4X (+ 8 GB Extended RAM = 16GB total)",
      "storage": "128 GB / 256 GB internal storage (microSD card expandable up to 1TB)",
      "mainCamera": "50MP HD Main Camera (f/1.8, PDAF) + 2MP Bokeh Camera (f/2.4) with Dynamic Light Rhythm Ring & 1080p Video",
      "selfieCamera": "8MP Front Camera (f/2.05, Aura Screen Light)",
      "battery": "6000 mAh Ultra-Large 4-Year Health Battery",
      "charging": "44W FlashCharge (50% in 35 mins via Type-C)",
      "os": "Funtouch OS 14 based on Android 14",
      "network": "4G Dual SIM, Side-Mounted Capacitive Fingerprint, Dual Stereo Speakers (300% Audio Booster), IP64 Dust & Water Resistance, Dynamic Light Notification Ring",
      "resolution": "HD+ Sunlight Eye Protection LCD (1608 x 720 pixels), 20:9 ratio (~264 ppi)",
      "peakBrightness": "1000 nits HBM (Sunlight Display)",
      "hdrSupport": "90Hz refresh rate, TÜV Rheinland Low Blue Light certification",
      "dimensions": "165.7 x 76.0 x 7.99 mm, 199g",
      "buildMaterials": "Glass front, 3D diamond star patterned back with metallic frame",
      "simSlot": "Hybrid Dual SIM (Nano-SIM, dual stand-by, microSD slot up to 1TB)",
      "waterResistance": "IP64 dust and water splash resistance with Wet Touch technology",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "1080p @ 30fps (MediaTek Helio G85 ISP limits to 1080p30)",
      "opticsFeatures": "50MP Ultra HD (f/1.8, AF), 2MP Bokeh (f/2.4), Dynamic Light ring flash for music & notifications",
      "frontVideoRecording": "1080p @ 30fps with Aura Screen Light",
      "wirelessCharging": "Not supported (44W FlashCharge wired)",
      "wifiBluetooth": "Wi-Fi 5 (802.11ac dual-band), Bluetooth 5.0, 3.5mm audio jack",
      "specialHardware": "Massive 6000 mAh battery with 4-Year Durability Guarantee, Dynamic Light rear notification ring",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, dual stereo speakers with 300% Audio Booster, 3.5mm jack"
    },
    "colors": [
      "Gleaming Orange",
      "Agate Green"
    ],
    "colorImages": {
      "Gleaming Orange": "/images/vivo-y28-4g-gleaming-orange.webp",
      "Agate Green": "/images/vivo-y28-4g-agate-green.webp"
    },
    "colorHexes": {
      "Gleaming Orange": "#f4caa5",
      "Agate Green": "#1a3b37"
    },
    "popularInCities": [
      "Lahore",
      "Karachi",
      "Multan",
      "Faisalabad",
      "Rawalpindi",
      "Islamabad",
      "Gujranwala",
      "Sargodha"
    ]
  },
  {
    "id": "samsung-galaxy-a06",
    "name": "Samsung Galaxy A06",
    "brand": "Samsung",
    "model": "Galaxy A06 (64GB / 128GB)",
    "pricePKR": 22499,
    "officialPricePKR": 27999,
    "marketPriceRangePKR": {
      "min": 21800,
      "max": 23500
    },
    "variants": [
      {
        "id": "a06-4-64",
        "name": "4GB / 64GB",
        "ram": "4 GB LPDDR4X (+ 4 GB RAM Plus)",
        "storage": "64 GB internal storage",
        "pricePKR": 22499,
        "officialPricePKR": 27999,
        "marketPriceRangePKR": {
          "min": 21800,
          "max": 23500
        }
      },
      {
        "id": "a06-4-128",
        "name": "4GB / 128GB",
        "ram": "4 GB LPDDR4X (+ 4 GB RAM Plus)",
        "storage": "128 GB internal storage",
        "pricePKR": 26299,
        "officialPricePKR": 32999,
        "marketPriceRangePKR": {
          "min": 25500,
          "max": 27500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 3200,
      "cnicTaxPKR": 4030,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 3200,
    "ptaCnicTax": 4030,
    "isLocallyAssembled": true,
    "releaseDate": "August 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/samsung-galaxy-a06-blue-black.webp",
    "tags": [
      "trending",
      "budget"
    ],
    "specs": {
      "display": "6.7\" HD+ PLS LCD Infinity-U Display, 60Hz Refresh Rate, 720 x 1600 pixels, 20:9 Aspect Ratio, Key Island Tactile Grip Frame Design",
      "refreshRate": "60Hz Infinity-U Display",
      "processor": "MediaTek Helio G85 (12nm) Octa-Core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55) with Mali-G52 MC2 GPU",
      "ram": "4 GB LPDDR4X (+ 4 GB RAM Plus)",
      "storage": "64 GB / 128 GB internal storage (dedicated microSD slot up to 1TB)",
      "mainCamera": "50MP Main Camera (f/1.8, AF) + 2MP Depth Sensor (f/2.4) with LED Flash & 1080p@60fps Video",
      "selfieCamera": "8MP Front Camera (f/2.0, 1080p Video)",
      "battery": "5000 mAh Long-Lasting Battery",
      "charging": "25W Fast Charging via USB Type-C",
      "os": "Android 14 with One UI 6.1 (Up to 2 OS upgrades & 4 years security patches)",
      "network": "4G LTE Dual SIM, Side-Mounted Fingerprint Sensor, Samsung Knox Vault hardware security, 3.5mm Headphone Jack, Bluetooth 5.3",
      "resolution": "HD+ PLS LCD (1600 x 720 pixels), 20:9 ratio (~262 ppi)",
      "peakBrightness": "500 nits typical brightness",
      "hdrSupport": "60Hz standard refresh rate, Infinity-U display notch",
      "dimensions": "167.3 x 77.3 x 8.0 mm, 189g",
      "buildMaterials": "Glass front, ridged textured plastic back with Key Island frame",
      "simSlot": "Dedicated Triple SIM slot (2 Nano-SIMs + dedicated microSD up to 1TB)",
      "waterResistance": "Splash resistant body",
      "stabilization": "Standard digital stabilization with autofocus",
      "videoRecording": "1080p @ 30/60fps with digital stabilization (MediaTek Helio G85 ISP limits to 1080p; NO 4K or 8K)",
      "opticsFeatures": "50MP Main (f/1.8, AF), 2MP Depth (f/2.4), LED flash",
      "frontVideoRecording": "1080p @ 30fps",
      "wirelessCharging": "Not supported (25W wired fast charging via USB Type-C)",
      "wifiBluetooth": "Wi-Fi 5 (802.11 a/b/g/n/ac dual-band 2.4/5GHz), Bluetooth 5.3, 3.5mm headphone jack",
      "specialHardware": "Samsung Knox Vault hardware security chip, Key Island tactile button frame",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, single bottom loudspeaker, 3.5mm headphone jack"
    },
    "colors": [
      "Blue Black",
      "Light Blue",
      "Gold"
    ],
    "colorImages": {
      "Blue Black": "/images/samsung-galaxy-a06-blue-black.webp",
      "Light Blue": "/images/samsung-galaxy-a06-light-blue.webp",
      "Gold": "/images/samsung-galaxy-a06-gold.webp"
    },
    "colorHexes": {
      "Blue Black": "#1d2028",
      "Light Blue": "#c8ddef",
      "Gold": "#e5d19c"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Rawalpindi",
      "Islamabad",
      "Faisalabad",
      "Multan",
      "Gujranwala",
      "Peshawar",
      "Quetta"
    ]
  },
  {
    "id": "tecno-spark-50-pro",
    "name": "Tecno Spark 50 Pro",
    "brand": "Tecno",
    "model": "Spark 50 Pro (8GB / 128GB)",
    "pricePKR": 74999,
    "officialPricePKR": 74999,
    "marketPriceRangePKR": {
      "min": 74000,
      "max": 76000
    },
    "variants": [
      {
        "id": "tecno-spark-50-pro-128gb",
        "name": "8GB / 128GB",
        "ram": "8GB physical RAM; up to 16GB extended memory",
        "storage": "128 GB UFS Internal Storage (microSD expandable up to 1TB)",
        "pricePKR": 74999,
        "officialPricePKR": 74999,
        "marketPriceRangePKR": {
          "min": 74000,
          "max": 76000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 9580,
      "cnicTaxPKR": 11560,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 9580,
    "ptaCnicTax": 11560,
    "isLocallyAssembled": true,
    "releaseDate": "September 2026",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/tecno-spark-50-pro-pakistan-priceoye-0h4ue-500x500.webp",
    "tags": [
      "trending",
      "budget",
      "camera",
      "battery"
    ],
    "specs": {
      "display": "6.78-inch HD+ display; 120Hz; 1576 x 720 pixels",
      "refreshRate": "120Hz Smooth Refresh Display",
      "processor": "MediaTek Helio G100 Ultimate (6nm)",
      "ram": "8GB physical RAM; up to 16GB extended memory",
      "storage": "128GB; Pakistan specification",
      "mainCamera": "50MP Sony LYTIA 600 Main Sensor (f/1.8, 1/1.95\", PDAF) + AI auxiliary lens, Single LED Flash, AI Eraser 2.0, Live Photo, Universal Tone",
      "selfieCamera": "8MP Front Camera with Front LED Flash & AI Portrait mode",
      "battery": "6000 mAh Mega Battery (retains >80% capacity after 1900 cycles) with Bypass Charging",
      "charging": "60W Super Charge wired (approx. 63% in 30 mins, full charge in ~55 mins) via USB Type-C",
      "os": "HiOS 16 based on Android 16 (FreeLink 2.0 signal enhancement, Ask Ella AI assistant)",
      "network": "4G LTE Dual Nano-SIM, Dual Stereo Speakers with DTS Sound, NFC, Infrared Port, IP68 & IP69 Dust/Water Resistance",
      "resolution": "1576 x 720 pixels (HD+)",
      "peakBrightness": "600 nits typical brightness, outdoor sunlight readability mode",
      "hdrSupport": "120Hz high refresh rate, TÜV Rheinland Low Blue Light certified",
      "dimensions": "167.8 x 79.2 x 7.8 mm",
      "buildMaterials": "SGS Five-Star Premium Drop Resistance certified body (survives drops up to 1.8m), ultra-slim 7.8mm profile, IP68/IP69 rating",
      "simSlot": "Dedicated Triple Slot (2 Nano-SIMs + 1 microSD card up to 1TB)",
      "waterResistance": "IP68 & IP69 dust and water resistance (high-pressure water jet & immersion resistant)",
      "stabilization": "Electronic Image Stabilization (EIS) with PDAF",
      "videoRecording": "1080p @ 30/60fps with EIS (MediaTek Helio G100 ISP)",
      "opticsFeatures": "50MP Sony LYTIA 600 sensor, AI Eraser 2.0, Universal Tone, Live Photo, Super Night Mode",
      "frontVideoRecording": "1080p @ 30fps with Front Flash",
      "wirelessCharging": "Not supported (60W wired Super Charge with Bypass Charging)",
      "wifiBluetooth": "Dual-band Wi-Fi (2.4/5GHz), Bluetooth 5.4, NFC, FM, infrared remote",
      "specialHardware": "FreeLink 2.0 signal enhancement, Ask Ella AI assistant, 1.8m drop resistance, Infrared remote control",
      "biometricsAudio": "Side-mounted capacitive fingerprint sensor, dual stereo speakers with DTS Sound & volume booster, 3.5mm headphone jack"
    },
    "colors": [
      "Ink Black",
      "Sunset Orange",
      "Lake Blue",
      "Frost Silver"
    ],
    "colorImages": {
      "Ink Black": "/images/tecno-spark-50-pro-pakistan-priceoye-0h4ue-500x500.webp",
      "Sunset Orange": "/images/tecno-spark-50-pro-pakistan-priceoye-2xuj7-500x500.webp",
      "Lake Blue": "/images/tecno-spark-50-pro-pakistan-priceoye-8hkck-500x500.webp",
      "Frost Silver": "/images/tecno-spark-50-pro-pakistan-priceoye-q4jkd-500x500.webp"
    },
    "colorHexes": {
      "Ink Black": "#232428",
      "Sunset Orange": "#e37722",
      "Lake Blue": "#204ab5",
      "Frost Silver": "#d8dcde"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Faisalabad",
      "Rawalpindi",
      "Multan",
      "Peshawar",
      "Gujranwala",
      "Hyderabad"
    ]
  },
  {
    "id": "vivo-v80-lite-5g",
    "name": "Vivo V80 Lite 5G",
    "brand": "Vivo",
    "model": "V80 Lite 5G (8GB/256GB)",
    "pricePKR": 111999,
    "officialPricePKR": 124999,
    "marketPriceRangePKR": {
      "min": 109000,
      "max": 114500
    },
    "variants": [
      {
        "id": "vivo-v80-lite-5g-256gb",
        "name": "8GB/256GB",
        "ram": "8 GB LPDDR4X (+8GB Extended RAM)",
        "storage": "256GB UFS 3.1",
        "pricePKR": 111999,
        "officialPricePKR": 124999,
        "marketPriceRangePKR": {
          "min": 109000,
          "max": 114500
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 68900,
      "cnicTaxPKR": 84200,
      "status": "Official PTA Approved",
      "isLocallyAssembled": true
    },
    "ptaPassportTax": 68900,
    "ptaCnicTax": 84200,
    "isLocallyAssembled": true,
    "releaseDate": "September 2026",
    "rating": 0,
    "reviewCount": 0,
    "image": "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1787042134153/eed22030f61b93ffe7e1f409c814e0e5.png",
    "tags": [
      "trending",
      "camera",
      "flagship",
      "battery"
    ],
    "specs": {
      "display": "6.83-inch AMOLED; 2800 x 1260; up to 120Hz",
      "refreshRate": "120Hz AMOLED",
      "processor": "MediaTek Dimensity 7360-Turbo (4nm); 4 x 2.5GHz + 4 x 2.0GHz",
      "ram": "8GB LPDDR4X; 8GB software extended RAM",
      "storage": "128GB / 256GB UFS 3.1; no memory-card expansion",
      "mainCamera": "50MP f/1.8 main + 2MP f/2.4 secondary; rear flash",
      "selfieCamera": "32MP front, f/2.0",
      "battery": "7050mAh typical; 6850mAh rated",
      "charging": "44W FlashCharge",
      "os": "Android 16 with OriginOS 6 at launch",
      "network": "5G; dual nano-SIM standby; USB-C 2.0",
      "resolution": "2800 x 1260; 449ppi",
      "peakBrightness": "3000 nits local peak; 2000 nits HBM",
      "hdrSupport": "P3 wide color gamut; up to 120Hz",
      "dimensions": "164.42 x 75.25mm; Sapphire Blue: 7.99mm, 197g; Silk White: 8.10mm, 199g",
      "buildMaterials": "Plastic composite back",
      "simSlot": "Two nano-SIMs",
      "waterResistance": "IP68/IP69 laboratory-rated protection",
      "stabilization": "Stabilization mode not specified in manufacturer technical table",
      "videoRecording": "MP4 recording; resolution/frame-rate requires confirmation",
      "opticsFeatures": "Night, Portrait, Pro and Dual View modes",
      "frontVideoRecording": "Video and Dual View supported",
      "wirelessCharging": "Manufacturer lists 44W wired FlashCharge",
      "wifiBluetooth": "Dual-band Wi-Fi; Bluetooth 5.4; no NFC or FM",
      "specialHardware": "Gyroscope; USB OTG",
      "biometricsAudio": "In-display optical fingerprint"
    },
    "colors": [
      "Silk White",
      "Sapphire Blue"
    ],
    "colorImages": {
      "Silk White": "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1787042134153/eed22030f61b93ffe7e1f409c814e0e5.png",
      "Sapphire Blue": "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1787042138017/771811ffa01f500e4b628ac717a724cb.png"
    },
    "colorHexes": {
      "Silk White": "#eeece7",
      "Sapphire Blue": "#384e80"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Multan",
      "Faisalabad",
      "Peshawar",
      "Sialkot"
    ]
  },
  {
    "id": "samsung-galaxy-z-fold-6",
    "name": "Samsung Galaxy Z Fold 6",
    "brand": "Samsung",
    "model": "Galaxy Z Fold 6 (12GB/256GB, 12GB/512GB, 12GB/1TB)",
    "pricePKR": 469999,
    "officialPricePKR": 604999,
    "marketPriceRangePKR": {
      "min": 460000,
      "max": 485000
    },
    "variants": [
      {
        "id": "samsung-z-fold-6-256gb",
        "name": "12GB/256GB",
        "ram": "12 GB LPDDR5X",
        "storage": "256 GB UFS 4.0 Storage",
        "pricePKR": 469999,
        "officialPricePKR": 604999,
        "marketPriceRangePKR": {
          "min": 460000,
          "max": 485000
        }
      },
      {
        "id": "samsung-z-fold-6-512gb",
        "name": "12GB/512GB",
        "ram": "12 GB LPDDR5X",
        "storage": "512 GB UFS 4.0 Storage",
        "pricePKR": 485999,
        "officialPricePKR": 635000,
        "marketPriceRangePKR": {
          "min": 475000,
          "max": 500000
        }
      },
      {
        "id": "samsung-z-fold-6-1tb",
        "name": "12GB/1TB",
        "ram": "12 GB LPDDR5X",
        "storage": "1 TB (1024 GB) UFS 4.0 Storage",
        "pricePKR": 549999,
        "officialPricePKR": 699999,
        "marketPriceRangePKR": {
          "min": 535000,
          "max": 565000
        }
      }
    ],
    "ptaTax": {
      "passportTaxPKR": 148000,
      "cnicTaxPKR": 178000,
      "status": "Official PTA Approved",
      "isLocallyAssembled": false
    },
    "ptaPassportTax": 148000,
    "ptaCnicTax": 178000,
    "isLocallyAssembled": false,
    "releaseDate": "July 2024",
    "rating": 0,
    "reviewCount": 0,
    "image": "/images/samsung-galaxy-z-fold-6-pakistan-priceoye-f5s5a-500x500.webp",
    "tags": [
      "trending",
      "flagship",
      "gaming",
      "camera"
    ],
    "specs": {
      "display": "Main: 7.6\" Dynamic AMOLED 2X Foldable, QXGA+ (2160 x 1856 pixels), 1-120Hz LTPO Adaptive Refresh Rate, 2600 nits Peak Brightness, S-Pen Fold Edition support. Cover: 6.3\" Dynamic AMOLED 2X (2376 x 968 pixels), 120Hz, Corning Gorilla Glass Victus 2",
      "refreshRate": "120Hz LTPO Dynamic AMOLED 2X Dual Displays",
      "processor": "Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm) Octa-Core (1x3.39 GHz Cortex-X4, 3x3.1 GHz Cortex-A720, 2x2.9 GHz Cortex-A720 & 2x2.2 GHz Cortex-A520) with Adreno 750 (1 GHz) GPU & 1.6x Larger Vapor Chamber",
      "ram": "12 GB LPDDR5X High-Bandwidth RAM",
      "storage": "256 GB / 512 GB / 1 TB UFS 4.0 ultra-fast storage",
      "mainCamera": "Flagship Triple System: 50MP Wide Main (f/1.8, Dual Pixel PDAF, OIS) + 12MP Ultra-Wide (f/2.2, 123° FOV) + 10MP Telephoto (f/2.4, PDAF, OIS, 3x Optical Zoom, 30x Space Zoom) with 8K 30fps & 4K 60fps HDR10+ recording",
      "selfieCamera": "Cover: 10MP Selfie Camera (f/2.2, 4K60) + Under-Display Camera (UDC): 4MP (f/1.8)",
      "battery": "4400 mAh Dual-Cell Intelligent Battery (All-day productivity)",
      "charging": "25W Wired Super Fast Charging (50% in ~30 mins) + 15W Fast Wireless Charging 2.0 + 4.5W Wireless PowerShare",
      "os": "One UI 6.1.1 based on Android 14 (7 Years of guaranteed Android OS upgrades & 7 Years Security Updates, Galaxy AI Suite)",
      "network": "5G Dual SIM (Nano-SIM + eSIM / Dual eSIM), Enhanced Armor Aluminum frame, IP48 Water Resistance, Side-Mounted Capacitive Fingerprint Sensor, Stereo Speakers tuned by AKG with Dolby Atmos, USB-C 3.2 Gen 1 with Samsung DeX support",
      "resolution": "Main: QXGA+ Dynamic AMOLED 2X (2160 x 1856 pixels, ~374 ppi). Cover: HD+ Dynamic AMOLED 2X (2376 x 968 pixels, ~410 ppi)",
      "peakBrightness": "2600 nits peak brightness on both inner and cover displays, Vision Booster",
      "hdrSupport": "HDR10+, 1-120Hz LTPO adaptive refresh rate on both screens",
      "dimensions": "Unfolded: 153.5 x 132.6 x 5.6 mm. Folded: 153.5 x 68.1 x 12.1 mm, 239g",
      "buildMaterials": "Enhanced Armor Aluminum frame, Corning Gorilla Glass Victus 2 on cover and back, dual-rail hinge",
      "simSlot": "Dual SIM (Nano-SIM and eSIM, or Dual eSIM)",
      "waterResistance": "IP48 water resistance (up to 1.5m for 30 mins) with particle ingress protection",
      "stabilization": "Dual OIS: Optical Image Stabilization on 50MP Wide Main and 10MP Telephoto lenses",
      "videoRecording": "8K @ 30fps, 4K @ 30/60/120fps, 1080p @ 30/60/240fps slow-mo, HDR10+, stereo audio rec.",
      "opticsFeatures": "50MP Dual Pixel AF (f/1.8, OIS), 10MP Telephoto (3x optical, 30x Space Zoom, OIS), 12MP Ultra-wide (123° FOV), ProVisual Engine",
      "frontVideoRecording": "Cover: 4K @ 30/60fps. Under-Display: 1080p @ 30/60fps",
      "wirelessCharging": "15W Fast Wireless Charging 2.0 + 4.5W Wireless PowerShare reverse charging",
      "wifiBluetooth": "Wi-Fi 6E (802.11ax; 2.4/5/6 GHz), Bluetooth 5.3, Ultra Wideband (UWB)",
      "specialHardware": "S-Pen Fold Edition support, Samsung DeX desktop computing mode, 1.6x larger vapor chamber cooling",
      "biometricsAudio": "Side-mounted capacitive fingerprint scanner, stereo speakers tuned by AKG with Dolby Atmos"
    },
    "colors": [
      "Silver Shadow",
      "Navy",
      "Pink",
      "Crafted Black"
    ],
    "colorImages": {
      "Silver Shadow": "/images/samsung-galaxy-z-fold-6-pakistan-priceoye-f5s5a-500x500.webp",
      "Navy": "/images/samsung-galaxy-z-fold-6-pakistan-priceoye-bdvbl-500x500.webp",
      "Pink": "/images/samsung-galaxy-z-fold-6-pakistan-priceoye-906j8-500x500.webp",
      "Crafted Black": "/images/samsung-galaxy-z-fold-6-pakistan-priceoye-vxopk-500x500.webp"
    },
    "colorHexes": {
      "Silver Shadow": "#c8cbcf",
      "Navy": "#223046",
      "Pink": "#edd4db",
      "Crafted Black": "#202224"
    },
    "popularInCities": [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Peshawar",
      "Multan",
      "Faisalabad",
      "Quetta"
    ]
  },
  {
    "id": "infinix-zero-40-5g",
    "name": "Infinix Zero 40 5G",
    "brand": "Infinix",
    "model": "Zero 40 5G",
    "pricePKR": 99999,
    "officialPricePKR": 99999,
    "marketPriceRangePKR": {
      "min": 95000,
      "max": 99999
    },
    "ptaTax": {
      "passportTaxPKR": 15000,
      "cnicTaxPKR": 18000,
      "status": "Official PTA Approved"
    },
    "rating": 0,
    "reviewCount": 0,
    "reviewsCount": 0,
    "reviews": 0,
    "variants": [
      {
        "id": "infinix-zero-40-5g-v1",
        "name": "12GB / 256GB",
        "ram": "12GB RAM",
        "storage": "256GB Storage",
        "pricePKR": 99999,
        "officialPricePKR": 99999,
        "marketPriceRangePKR": {
          "min": 95000,
          "max": 99999
        }
      }
    ],
    "colors": [
      "Moving Titanium",
      "Rock Black",
      "Violet Garden"
    ],
    "specs": {
      "display": "6.78\" AMOLED 144Hz",
      "refreshRate": "144Hz",
      "processor": "MediaTek Dimensity 8200 Ultimate",
      "ram": "12GB",
      "storage": "256GB",
      "mainCamera": "108MP OIS + 50MP Ultrawide",
      "selfieCamera": "50MP",
      "battery": "5000 mAh",
      "charging": "45W Fast Charging",
      "os": "XOS 14 based on Android 14",
      "network": "5G"
    },
    "image": "/images/phones/infinix-zero-40-5g-pakistan-priceoye-942sd-500x500.webp",
    "images": [
      "/images/phones/infinix-zero-40-5g-pakistan-priceoye-942sd-500x500.webp",
      "/images/phones/infinix-zero-40-5g-pakistan-priceoye-kovvu-500x500.webp",
      "/images/phones/infinix-zero-40-5g-pakistan-priceoye-t3zks-500x500.webp"
    ],
    "releaseDate": "2024-08-30",
    "tags": [
      "5g"
    ],
    "colorHexes": {
      "Moving Titanium": "#E3E4E5",
      "Rock Black": "#1A1A1A",
      "Violet Garden": "#D8BFD8"
    },
    "colorImages": {
      "Moving Titanium": "/images/phones/infinix-zero-40-5g-pakistan-priceoye-942sd-500x500.webp",
      "Rock Black": "/images/phones/infinix-zero-40-5g-pakistan-priceoye-kovvu-500x500.webp",
      "Violet Garden": "/images/phones/infinix-zero-40-5g-pakistan-priceoye-t3zks-500x500.webp"
    }
  },
  {
    "id": "redmi-note-14-pro-plus-5g",
    "name": "Redmi Note 14 Pro+ 5G",
    "brand": "Xiaomi",
    "model": "Note 14 Pro+ 5G",
    "pricePKR": 135000,
    "officialPricePKR": 135000,
    "marketPriceRangePKR": {
      "min": 130000,
      "max": 135000
    },
    "ptaTax": {
      "passportTaxPKR": 15000,
      "cnicTaxPKR": 18000,
      "status": "Official PTA Approved"
    },
    "rating": 0,
    "reviewCount": 0,
    "reviewsCount": 0,
    "reviews": 0,
    "variants": [
      {
        "id": "redmi-note-14-pro-plus-5g-v1",
        "name": "12GB / 256GB",
        "ram": "12GB RAM",
        "storage": "256GB Storage",
        "pricePKR": 135000,
        "officialPricePKR": 135000,
        "marketPriceRangePKR": {
          "min": 130000,
          "max": 135000
        }
      }
    ],
    "colors": [
      "Midnight Black",
      "Mirror Porcelain White",
      "Sand Star Green",
      "Phantom Purple"
    ],
    "specs": {
      "display": "6.67-inch CrystalRes AMOLED; 2712 x 1220; 120Hz; Gorilla Glass Victus 2",
      "refreshRate": "120Hz",
      "processor": "Snapdragon 7s Gen 3",
      "ram": "12GB",
      "storage": "256GB",
      "mainCamera": "200MP main (f/1.65, 1/1.4-inch, OIS) + 8MP ultrawide (f/2.2) + 2MP macro (f/2.4); Pakistan/global version",
      "selfieCamera": "20MP front, f/2.2",
      "battery": "5110mAh typical (Pakistan/global version)",
      "charging": "120W HyperCharge",
      "os": "HyperOS based on Android 14",
      "network": "5G",
      "resolution": "2712 x 1220 (1.5K)",
      "peakBrightness": "3000 nits peak",
      "hdrSupport": "Dolby Vision, HDR10+, 12-bit color",
      "stabilization": "Optical stabilization on main camera",
      "videoRecording": "4K at 24/30fps; 1080p at 30/60fps",
      "frontVideoRecording": "1080p at 30/60fps",
      "wifiBluetooth": "Wi-Fi 6/6E subject to region; Bluetooth 5.4; NFC",
      "waterResistance": "IP68; laboratory immersion up to 1.5m for 30 minutes",
      "biometricsAudio": "In-screen fingerprint; dual speakers, Dolby Atmos",
      "dimensions": "162.53 x 74.67mm; thickness 8.75–8.85mm and weight 205.13–210.14g by finish"
    },
    "image": "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dcuyr-500x500.webp",
    "images": [
      "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dcuyr-500x500.webp",
      "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dh643-500x500.webp",
      "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-futbw-500x500.webp",
      "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-pqiez-500x500.webp"
    ],
    "releaseDate": "2024-09-26",
    "tags": [
      "5g"
    ],
    "colorHexes": {
      "Midnight Black": "#000000",
      "Mirror Porcelain White": "#FFFFFF",
      "Sand Star Green": "#C4D8D1",
      "Phantom Purple": "#8A2BE2"
    },
    "colorImages": {
      "Midnight Black": "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dcuyr-500x500.webp",
      "Mirror Porcelain White": "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dh643-500x500.webp",
      "Sand Star Green": "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-futbw-500x500.webp",
      "Phantom Purple": "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-pqiez-500x500.webp"
    }
  },
  {
    "id": "realme-13-pro-plus-5g",
    "name": "Realme 13 Pro+ 5G",
    "brand": "Realme",
    "model": "13 Pro+ 5G",
    "pricePKR": 121000,
    "officialPricePKR": 121000,
    "marketPriceRangePKR": {
      "min": 115000,
      "max": 121000
    },
    "ptaTax": {
      "passportTaxPKR": 15000,
      "cnicTaxPKR": 18000,
      "status": "Official PTA Approved"
    },
    "rating": 0,
    "reviewCount": 0,
    "reviewsCount": 0,
    "reviews": 0,
    "variants": [
      {
        "id": "realme-13-pro-plus-5g-v1",
        "name": "8GB / 256GB",
        "ram": "8GB RAM",
        "storage": "256GB Storage",
        "pricePKR": 121000,
        "officialPricePKR": 121000,
        "marketPriceRangePKR": {
          "min": 115000,
          "max": 121000
        }
      },
      {
        "id": "realme-13-pro-plus-5g-v2",
        "name": "12GB / 512GB",
        "ram": "12GB RAM",
        "storage": "512GB Storage",
        "pricePKR": 145000,
        "officialPricePKR": 145000,
        "marketPriceRangePKR": {
          "min": 140000,
          "max": 145000
        }
      }
    ],
    "colors": [
      "Monet Gold",
      "Emerald Green"
    ],
    "specs": {
      "display": "6.7-inch OLED; 2412 x 1080; up to 120Hz; 10-bit color",
      "refreshRate": "120Hz",
      "processor": "Snapdragon 7s Gen 2",
      "ram": "8GB/12GB",
      "storage": "256GB/512GB",
      "mainCamera": "50MP Sony LYT-701 main (1/1.56-inch, f/1.88, OIS) + 50MP Sony LYT-600 periscope (1/1.95-inch, 73mm, f/2.65, OIS) + 8MP ultrawide (f/2.2, 112-degree view)",
      "selfieCamera": "32MP Sony front camera, f/2.45, 90-degree view",
      "battery": "5200 mAh",
      "charging": "80W Fast Charging",
      "os": "Realme UI 5.0 based on Android 14",
      "network": "5G",
      "resolution": "2412 x 1080 (FHD+)",
      "peakBrightness": "600 nits typical; 1200 global maximum; 2000 local peak",
      "stabilization": "OIS on main and periscope cameras; EIS supported in specified video modes",
      "videoRecording": "4K at 30fps; 1080p at 30/60fps",
      "frontVideoRecording": "Up to 4K at 30fps",
      "wifiBluetooth": "Wi-Fi 6 dual-band; Bluetooth 5.2; regional NFC availability varies",
      "dimensions": "161.34 x 73.91mm; glass: 8.23mm, 190g; leather: 8.41mm, 185.5g",
      "biometricsAudio": "In-display optical fingerprint; dual speakers with OReality Audio",
      "simSlot": "Two nano-SIM slots"
    },
    "image": "/images/phones/realme-13-plus-5g-pakistan-priceoye-269o1-500x500.webp",
    "images": [
      "/images/phones/realme-13-plus-5g-pakistan-priceoye-269o1-500x500.webp",
      "/images/phones/realme-13-plus-5g-pakistan-priceoye-eba8g-500x500.webp"
    ],
    "releaseDate": "2024-07-30",
    "tags": [
      "5g"
    ],
    "colorHexes": {
      "Monet Gold": "#D4AF37",
      "Emerald Green": "#50C878"
    },
    "colorImages": {
      "Monet Gold": "/images/phones/realme-13-plus-5g-pakistan-priceoye-eba8g-500x500.webp",
      "Emerald Green": "/images/phones/realme-13-plus-5g-pakistan-priceoye-269o1-500x500.webp"
    }
  },
  {
    "id": "oppo-reno-12f-5g",
    "name": "Oppo Reno 12F 5G",
    "brand": "Oppo",
    "model": "Reno 12F 5G",
    "pricePKR": 79999,
    "officialPricePKR": 79999,
    "marketPriceRangePKR": {
      "min": 75000,
      "max": 79999
    },
    "ptaTax": {
      "passportTaxPKR": 15000,
      "cnicTaxPKR": 18000,
      "status": "Official PTA Approved"
    },
    "rating": 0,
    "reviewCount": 0,
    "reviewsCount": 0,
    "reviews": 0,
    "variants": [
      {
        "id": "oppo-reno-12f-5g-v1",
        "name": "8GB / 256GB",
        "ram": "8GB RAM",
        "storage": "256GB Storage",
        "pricePKR": 79999,
        "officialPricePKR": 79999,
        "marketPriceRangePKR": {
          "min": 75000,
          "max": 79999
        }
      }
    ],
    "colors": [
      "Amber Orange",
      "Olive Green"
    ],
    "specs": {
      "display": "6.67-inch flat OLED; 2400 x 1080; up to 120Hz; AGC DT-Star2 cover glass",
      "refreshRate": "120Hz",
      "processor": "MediaTek Dimensity 6300",
      "ram": "12GB LPDDR4X (Pakistan version)",
      "storage": "256GB UFS 2.2; memory card supported",
      "mainCamera": "50MP main (f/1.8, autofocus) + 8MP ultrawide (f/2.2, 112-degree view) + 2MP macro (f/2.4)",
      "selfieCamera": "32MP front (f/2.4, 90-degree view)",
      "battery": "5000 mAh",
      "charging": "45W SUPERVOOC",
      "os": "ColorOS 14 based on Android 14",
      "network": "5G",
      "resolution": "2400 x 1080 pixels; 394ppi",
      "peakBrightness": "600 nits typical; 1200 sunlight; 2100 local peak",
      "dimensions": "163.1 x 75.8 x 7.76 mm; about 187g",
      "videoRecording": "1080p at 30/60fps; 720p slow motion at 120fps",
      "frontVideoRecording": "1080p at 30fps",
      "wifiBluetooth": "Wi-Fi 5 dual-band; Bluetooth 5.3; NFC not supported on Pakistan version",
      "simSlot": "Dual nano-SIM",
      "biometricsAudio": "In-display optical fingerprint; face unlock; USB-C audio"
    },
    "image": "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-dsxnc-500x500.webp",
    "images": [
      "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-dsxnc-500x500.webp",
      "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-eogj1-500x500.webp"
    ],
    "releaseDate": "2024-06-28",
    "tags": [
      "5g"
    ],
    "colorHexes": {
      "Amber Orange": "#FF7E00",
      "Olive Green": "#556B2F"
    },
    "colorImages": {
      "Amber Orange": "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-dsxnc-500x500.webp",
      "Olive Green": "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-eogj1-500x500.webp"
    }
  }
];

export const BRANDS: BrandInfo[] = BRAND_DEFINITIONS.map((b) => ({
  ...b,
  count: PHONES_DATA.filter((p) => p.brand.toLowerCase() === b.name.toLowerCase()).length,
}));

export const phones = PHONES_DATA;
export const allPhones = PHONES_DATA;
export const featuredPhones = PHONES_DATA.filter((p) => p.tags?.includes('flagship') || p.tags?.includes('trending'));
export const trendingPhones = PHONES_DATA.filter((p) => p.tags?.includes('trending'));
export const latestPhones = PHONES_DATA;
export const flagshipPhones = PHONES_DATA.filter((p) => p.tags?.includes('flagship') || p.pricePKR >= 200000);
export const budgetPhones = PHONES_DATA.filter((p) => p.tags?.includes('budget') || p.pricePKR <= 50000);

export const CATEGORIES = [
  { id: 'all', label: 'All Phones', icon: '📱', description: 'Complete catalog of officially verified smartphones in Pakistan' },
  { id: 'flagship', label: 'Flagship Tier', icon: '👑', description: 'Top-tier luxury and cutting-edge flagship devices' },
  { id: 'budget', label: 'Budget Friendly', icon: '💰', description: 'High value devices under PKR 50,000' },
  { id: 'camera', label: 'Camera Kings', icon: '📸', description: 'Flagship optics & high-resolution sensors' },
  { id: 'gaming', label: 'Gaming Beasts', icon: '🎮', description: 'High refresh rate displays & high-performance chipsets' },
  { id: 'battery', label: 'Battery Monsters', icon: '🔋', description: '5000mAh+ capacity with rapid charging' },
  { id: 'trending', label: 'Trending in PK', icon: '🔥', description: 'Most searched devices on PriceOye & WhatMobile' },
];

export const getPhoneById = (id: string): PhoneSpec | undefined => {
  return PHONES_DATA.find((phone) => phone.id === id);
};

export const getPhonesByBrand = (brand: string): PhoneSpec[] => {
  return PHONES_DATA.filter((phone) => phone.brand.toLowerCase() === brand.toLowerCase());
};

export const getPhonesByCategory = (category: string): PhoneSpec[] => {
  if (category === 'all') return PHONES_DATA;
  if (category === 'flagship') return PHONES_DATA.filter((p) => p.tags?.includes('flagship') || p.pricePKR >= 200000);
  if (category === 'budget') return PHONES_DATA.filter((p) => p.tags?.includes('budget') || p.pricePKR <= 50000);
  return PHONES_DATA.filter((p) => p.tags?.includes(category as any));
};

export const searchPhones = (query: string): PhoneSpec[] => {
  const q = query.toLowerCase().trim();
  if (!q) return PHONES_DATA;
  return PHONES_DATA.filter(
    (phone) =>
      phone.name.toLowerCase().includes(q) ||
      phone.brand.toLowerCase().includes(q) ||
      phone.model.toLowerCase().includes(q) ||
      phone.specs.processor.toLowerCase().includes(q)
  );
};
