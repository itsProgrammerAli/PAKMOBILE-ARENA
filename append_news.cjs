const fs = require('fs');
const content = fs.readFileSync('src/data/news.ts', 'utf8');

const userObjects = [
  {
    id: "iphone-17-pta-tax-slabs-sept-2026",
    slug: "iphone-17-pta-tax-slabs-sept-2026",
    title: "iPhone 17 Series PTA Tax Slabs Officially Confirmed in Pakistan",
    summary: "With the global rollout of the iPhone 17 series, the FBR has updated the customs valuation, bringing the PTA tax for the Pro Max variant to an all-time high.",
    excerpt: "With the global rollout of the iPhone 17 series, the FBR has updated the customs valuation, bringing the PTA tax for the Pro Max variant to an all-time high.",
    category: "PTA Tax",
    date: "September 13, 2026",
    isoDate: "2026-09-13",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    content: [],
    tags: []
  },
  {
    id: "infinix-zero-40-local-assembly",
    slug: "infinix-zero-40-local-assembly",
    title: "Infinix Zero 40 5G Begins Local Assembly in Pakistan, Price Drop Expected",
    summary: "In a massive win for local consumers, Infinix has started locally assembling its premium Zero 40 5G model, which could result in a significant price reduction soon.",
    excerpt: "In a massive win for local consumers, Infinix has started locally assembling its premium Zero 40 5G model, which could result in a significant price reduction soon.",
    category: "Market Trends",
    date: "September 13, 2026",
    isoDate: "2026-09-13",
    imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
    content: [],
    tags: []
  },
  {
    id: "samsung-fold-6-price-slash",
    slug: "samsung-fold-6-price-slash",
    title: "Samsung Galaxy Z Fold 6 Sees Massive Discount in Local Retail Markets",
    summary: "Retailers across major cities are offering huge promotional discounts on the Galaxy Z Fold 6 to boost premium segment sales ahead of the winter season.",
    excerpt: "Retailers across major cities are offering huge promotional discounts on the Galaxy Z Fold 6 to boost premium segment sales ahead of the winter season.",
    category: "Offers & Discounts",
    date: "September 13, 2026",
    isoDate: "2026-09-13",
    imageUrl: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
    content: [],
    tags: []
  },
  {
    id: "xiaomi-hyperos-2-pakistan-rollout",
    slug: "xiaomi-hyperos-2-pakistan-rollout",
    title: "Xiaomi HyperOS 2.0: Rollout Schedule for Pakistani Users Revealed",
    summary: "Xiaomi has officially shared the timeline for the HyperOS 2.0 update. The Redmi Note 14 Pro+ 5G will be among the first devices to receive the AI-packed update this month.",
    excerpt: "Xiaomi has officially shared the timeline for the HyperOS 2.0 update. The Redmi Note 14 Pro+ 5G will be among the first devices to receive the AI-packed update this month.",
    category: "Software Updates",
    date: "September 13, 2026",
    isoDate: "2026-09-13",
    imageUrl: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=800&q=80",
    content: [],
    tags: []
  },
  {
    id: "pta-crackdown-illegal-patches",
    slug: "pta-crackdown-illegal-patches",
    title: "PTA Intensifies Crackdown on Illegally Patched Non-PTA Smartphones",
    summary: "The telecom authority has launched a new automated system to immediately block high-end smartphones running on software-patched IMEIs.",
    excerpt: "The telecom authority has launched a new automated system to immediately block high-end smartphones running on software-patched IMEIs.",
    category: "Tech News",
    date: "September 13, 2026",
    isoDate: "2026-09-13",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    content: [],
    tags: []
  },
  {
    id: "oppo-reno-12f-sales-record",
    slug: "oppo-reno-12f-sales-record",
    title: "Oppo Reno 12F 5G Breaks Mid-Range Sales Records in its First Week",
    summary: "Oppo's aggressive pricing and marketing strategy for the Reno 12F 5G has paid off, making it the most demanded camera phone under Rs 80,000 this week.",
    excerpt: "Oppo's aggressive pricing and marketing strategy for the Reno 12F 5G has paid off, making it the most demanded camera phone under Rs 80,000 this week.",
    category: "Market Trends",
    date: "September 13, 2026",
    isoDate: "2026-09-13",
    imageUrl: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&w=800&q=80",
    content: [],
    tags: []
  }
];

const endBracketIndex = content.lastIndexOf('];');

if (endBracketIndex !== -1) {
    const stringifiedObjects = JSON.stringify(userObjects, null, 2);
    // Remove the opening [ and closing ] from the stringified objects so we can insert them
    const innerObjects = stringifiedObjects.substring(1, stringifiedObjects.length - 1);
    
    const newContent = content.substring(0, endBracketIndex) + 
                       ',\n  ' + innerObjects.trim() + '\n' +
                       content.substring(endBracketIndex);
                       
    fs.writeFileSync('src/data/news.ts', newContent, 'utf8');
    console.log("Successfully appended the 6 news articles.");
} else {
    console.log("Could not find the end of the array.");
}
