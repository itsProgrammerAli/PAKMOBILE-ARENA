const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const newPhones = [
  {
    id: "infinix-zero-40-5g",
    name: "Infinix Zero 40 5G",
    brand: "Infinix",
    model: "Zero 40 5G",
    pricePKR: 89999,
    officialPricePKR: 89999,
    marketPriceRangePKR: { min: 85000, max: 94500 },
    rating: 0,
    reviewCount: 0,
    reviewsCount: 0,
    reviews: 0,
    ptaTax: { passportTaxPKR: 12500, cnicTaxPKR: 14500 },
    variants: [
      {
        id: "infinix-zero-40-5g-12-256",
        name: "12GB / 256GB",
        ram: "12 GB RAM",
        storage: "256 GB Built-in",
        pricePKR: 89999,
        officialPricePKR: 89999,
        marketPriceRangePKR: { min: 85000, max: 94500 }
      }
    ],
    colors: ["Violet Garden", "Moving Titanium", "Rock Black"],
    specs: {
      screenSize: "6.78 Inches",
      screenType: "AMOLED",
      screenResolution: "1080 x 2436 Pixels",
      refreshRate: "144 Hz",
      processor: "MediaTek Dimensity 8200 Ultimate",
      battery: "5000 mAh",
      charging: "45W wired, 20W wireless",
      mainCamera: "108 MP",
      frontCamera: "50 MP",
      os: "Android 14",
      weight: "195 g"
    },
    images: [
      "/images/phones/infinix-zero-40-5g-pakistan-priceoye-942sd-500x500.webp",
      "/images/phones/infinix-zero-40-5g-pakistan-priceoye-kovvu-500x500.webp",
      "/images/phones/infinix-zero-40-5g-pakistan-priceoye-t3zks-500x500.webp"
    ],
    releaseDate: "2024-08-30",
    tags: ["5g", "premium-midrange"]
  },
  {
    id: "xiaomi-redmi-note-14-pro-plus",
    name: "Redmi Note 14 Pro+ 5G",
    brand: "Xiaomi",
    model: "Note 14 Pro+ 5G",
    pricePKR: 135300,
    officialPricePKR: 135300,
    marketPriceRangePKR: { min: 125000, max: 144999 },
    rating: 0,
    reviewCount: 0,
    reviewsCount: 0,
    reviews: 0,
    ptaTax: { passportTaxPKR: 15500, cnicTaxPKR: 18500 },
    variants: [
      {
        id: "redmi-note-14-pro-plus-12-512",
        name: "12GB / 512GB",
        ram: "12 GB RAM",
        storage: "512 GB Built-in",
        pricePKR: 135300,
        officialPricePKR: 135300,
        marketPriceRangePKR: { min: 125000, max: 144999 }
      }
    ],
    colors: ["Black", "White", "Green"],
    specs: {
      screenSize: "6.67 Inches",
      screenType: "AMOLED",
      screenResolution: "1220 x 2712 Pixels",
      refreshRate: "120 Hz",
      processor: "Qualcomm Snapdragon 7s Gen 3",
      battery: "6200 mAh",
      charging: "90W wired",
      mainCamera: "50 MP",
      frontCamera: "20 MP",
      os: "Android 14",
      weight: "210 g"
    },
    images: [
      "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dcuyr-500x500.webp",
      "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dh643-500x500.webp",
      "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-futbw-500x500.webp",
      "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-pqiez-500x500.webp"
    ],
    releaseDate: "2024-09-26",
    tags: ["5g", "premium-midrange"]
  },
  {
    id: "realme-13-pro-plus-5g",
    name: "Realme 13 Pro+ 5G",
    brand: "Realme",
    model: "13 Pro+ 5G",
    pricePKR: 121000,
    officialPricePKR: 154950,
    marketPriceRangePKR: { min: 89999, max: 154950 },
    rating: 0,
    reviewCount: 0,
    reviewsCount: 0,
    reviews: 0,
    ptaTax: { passportTaxPKR: 14500, cnicTaxPKR: 17500 },
    variants: [
      {
        id: "realme-13-pro-plus-12-256",
        name: "12GB / 256GB",
        ram: "12 GB RAM",
        storage: "256 GB Built-in",
        pricePKR: 121000,
        officialPricePKR: 154950,
        marketPriceRangePKR: { min: 89999, max: 154950 }
      }
    ],
    colors: ["Monet Gold", "Emerald Green"],
    specs: {
      screenSize: "6.7 Inches",
      screenType: "AMOLED",
      screenResolution: "1080 x 2412 Pixels",
      refreshRate: "120 Hz",
      processor: "Qualcomm Snapdragon 7s Gen 2",
      battery: "5200 mAh",
      charging: "80W wired",
      mainCamera: "50 MP",
      frontCamera: "32 MP",
      os: "Android 14",
      weight: "190 g"
    },
    images: [
      "/images/phones/realme-13-plus-5g-pakistan-priceoye-269o1-500x500.webp",
      "/images/phones/realme-13-plus-5g-pakistan-priceoye-eba8g-500x500.webp"
    ],
    releaseDate: "2024-07-30",
    tags: ["5g", "premium-midrange", "camera"]
  },
  {
    id: "oppo-reno-12f-5g",
    name: "Oppo Reno 12F 5G",
    brand: "Oppo",
    model: "Reno 12F 5G",
    pricePKR: 79999,
    officialPricePKR: 79999,
    marketPriceRangePKR: { min: 59999, max: 79999 },
    rating: 0,
    reviewCount: 0,
    reviewsCount: 0,
    reviews: 0,
    ptaTax: { passportTaxPKR: 10500, cnicTaxPKR: 12500 },
    variants: [
      {
        id: "oppo-reno-12f-5g-12-256",
        name: "12GB / 256GB",
        ram: "12 GB RAM",
        storage: "256 GB Built-in",
        pricePKR: 79999,
        officialPricePKR: 79999,
        marketPriceRangePKR: { min: 59999, max: 79999 }
      }
    ],
    colors: ["Amber Orange", "Olive Green"],
    specs: {
      screenSize: "6.67 Inches",
      screenType: "AMOLED",
      screenResolution: "1080 x 2400 Pixels",
      refreshRate: "120 Hz",
      processor: "MediaTek Dimensity 6300",
      battery: "5000 mAh",
      charging: "45W wired",
      mainCamera: "50 MP",
      frontCamera: "32 MP",
      os: "Android 14",
      weight: "187 g"
    },
    images: [
      "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-dsxnc-500x500.webp",
      "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-eogj1-500x500.webp"
    ],
    releaseDate: "2024-06-28",
    tags: ["5g", "midrange"]
  },
  {
    id: "vivo-v40-5g",
    name: "Vivo V40 5G",
    brand: "Vivo",
    model: "V40 5G",
    pricePKR: 139999,
    officialPricePKR: 139999,
    marketPriceRangePKR: { min: 126899, max: 139999 },
    rating: 0,
    reviewCount: 0,
    reviewsCount: 0,
    reviews: 0,
    ptaTax: { passportTaxPKR: 16500, cnicTaxPKR: 19500 },
    variants: [
      {
        id: "vivo-v40-5g-12-256",
        name: "12GB / 256GB",
        ram: "12 GB RAM",
        storage: "256 GB Built-in",
        pricePKR: 139999,
        officialPricePKR: 139999,
        marketPriceRangePKR: { min: 126899, max: 139999 }
      }
    ],
    colors: ["Nebula Purple", "Stellar Silver", "Meteor Blue"],
    specs: {
      screenSize: "6.78 Inches",
      screenType: "AMOLED",
      screenResolution: "1260 x 2800 Pixels",
      refreshRate: "120 Hz",
      processor: "Qualcomm Snapdragon 7 Gen 3",
      battery: "5500 mAh",
      charging: "80W wired",
      mainCamera: "50 MP",
      frontCamera: "50 MP",
      os: "Android 14",
      weight: "190 g"
    },
    images: [
      "/images/phones/vivo-v40-pakistan-priceoye-6raqf-500x500.webp",
      "/images/phones/vivo-v40-pakistan-priceoye-15rhx-500x500.webp",
      "/images/phones/vivo-v40-pakistan-priceoye-msyhd-500x500.webp"
    ],
    releaseDate: "2024-06-13",
    tags: ["5g", "premium-midrange", "camera"]
  }
];

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);

if (match) {
    let phones = JSON.parse(match[1]);
    
    // Check if brand Oppo exists in BRANDS array, if not, it should be added, but the user didn't ask to modify BRANDS.
    // However, it's safer to ensure they don't break the app. 
    
    phones.push(...newPhones);
    
    const newContent = content.substring(0, match.index) + 
                       'export const PHONES_DATA: PhoneSpec[] = ' + JSON.stringify(phones, null, 2) + ';\n\nexport const' + 
                       content.substring(match.index + match[0].length - 'export const'.length);
    fs.writeFileSync('src/data/phones.ts', newContent, 'utf8');
    console.log("Successfully added 5 new phones.");
} else {
    console.log("Could not find match.");
}
