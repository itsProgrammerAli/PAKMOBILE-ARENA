const fs = require('fs');
const content = fs.readFileSync('src/data/news.ts', 'utf8');

const newArticles = [
  {
    id: "pta-tax-revision-rumors-sept-2026",
    slug: "pta-tax-revision-rumors-sept-2026",
    title: "FBR Considering Revisions in PTA Tax for High-End Flagships in Late 2026",
    summary: "Sources suggest that the FBR might introduce a new tax slab for smartphones priced above Rs 300,000 to regulate the import of premium devices.",
    category: "PTA Tax",
    date: "September 12, 2026",
    isoDate: "2026-09-12",
    imageUrl: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
    author: "PakMobile Arena Editorial Team",
    tags: ["PTA Tax", "FBR", "Flagship"],
    content: [
      {
        heading: "Potential PTA Tax Revisions",
        paragraphs: [
          "Sources suggest that the FBR might introduce a new tax slab for smartphones priced above Rs 300,000 to regulate the import of premium devices."
        ]
      }
    ]
  },
  {
    id: "samsung-s27-ultra-leaks-pakistan",
    slug: "samsung-s27-ultra-leaks-pakistan",
    title: "Samsung Galaxy S27 Ultra Early Leaks: What It Means for Pakistani Consumers",
    summary: "With the S27 series rumors heating up, Samsung is reportedly focusing on a refined titanium chassis and a new 200MP sensor. Expected launch early next year.",
    category: "Rumors & Leaks",
    date: "September 12, 2026",
    isoDate: "2026-09-12",
    imageUrl: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    author: "PakMobile Arena Hardware Desk",
    tags: ["Samsung", "Galaxy S27 Ultra", "Rumors"],
    content: [
      {
        heading: "Early Galaxy S27 Ultra Leaks",
        paragraphs: [
          "With the S27 series rumors heating up, Samsung is reportedly focusing on a refined titanium chassis and a new 200MP sensor. Expected launch early next year."
        ]
      }
    ]
  },
  {
    id: "tecno-spark-50-pro-market-dominance",
    slug: "tecno-spark-50-pro-market-dominance",
    title: "How Tecno Spark 50 Pro is Disrupting the Sub-Rs 80,000 Market in Pakistan",
    summary: "Priced aggressively at Rs 74,999, the Spark 50 Pro is seeing massive sales volumes across local markets, beating its competitors in the budget-premium segment.",
    category: "Market Trends",
    date: "September 12, 2026",
    isoDate: "2026-09-12",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    author: "PakMobile Arena Market Analysis",
    tags: ["Tecno", "Spark 50 Pro", "Market Trends"],
    content: [
      {
        heading: "Spark 50 Pro Disrupts the Market",
        paragraphs: [
          "Priced aggressively at Rs 74,999, the Spark 50 Pro is seeing massive sales volumes across local markets, beating its competitors in the budget-premium segment."
        ]
      }
    ]
  },
  {
    id: "vivo-v80-lite-5g-camera-review",
    slug: "vivo-v80-lite-5g-camera-review",
    title: "Vivo V80 Lite 5G Camera Test: Is It the Best Portrait Phone Under 1.5 Lakh?",
    summary: "Our early impressions of the Vivo V80 Lite 5G highlight its impressive 50MP Sony OIS sensor and advanced portrait algorithms.",
    category: "Reviews",
    date: "September 12, 2026",
    isoDate: "2026-09-12",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    author: "PakMobile Arena Reviews Team",
    tags: ["Vivo", "V80 Lite", "Camera Test"],
    content: [
      {
        heading: "Testing the Vivo V80 Lite 5G Camera",
        paragraphs: [
          "Our early impressions of the Vivo V80 Lite 5G highlight its impressive 50MP Sony OIS sensor and advanced portrait algorithms."
        ]
      }
    ]
  },
  {
    id: "5g-network-rollout-pakistan-update",
    slug: "5g-network-rollout-pakistan-update",
    title: "5G Rollout in Pakistan: PTA Finalizes Spectrum Auction Details for November",
    summary: "The long-awaited 5G spectrum auction is finally taking shape, with major telecom operators preparing their infrastructure for commercial launch.",
    category: "Telecom News",
    date: "September 12, 2026",
    isoDate: "2026-09-12",
    imageUrl: "https://images.unsplash.com/photo-1544427920-c49ccfbc38f0?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1544427920-c49ccfbc38f0?auto=format&fit=crop&w=800&q=80",
    author: "PakMobile Arena Telecom Desk",
    tags: ["5G", "Pakistan", "PTA", "Spectrum Auction"],
    content: [
      {
        heading: "5G Spectrum Auction Details Finalized",
        paragraphs: [
          "The long-awaited 5G spectrum auction is finally taking shape, with major telecom operators preparing their infrastructure for commercial launch."
        ]
      }
    ]
  },
  {
    id: "iphone-18-rumors-apple-intelligence",
    slug: "iphone-18-rumors-apple-intelligence",
    title: "Apple Intelligence Expansion: What to Expect from Next Year's iOS Updates",
    summary: "While the iPhone 17 series dominates the market, Apple is already working on deeper AI integrations for the upcoming iOS ecosystem.",
    category: "Software Updates",
    date: "September 12, 2026",
    isoDate: "2026-09-12",
    imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80",
    author: "PakMobile Arena Software Desk",
    tags: ["Apple", "iOS", "Apple Intelligence"],
    content: [
      {
        heading: "Future of Apple Intelligence in iOS",
        paragraphs: [
          "While the iPhone 17 series dominates the market, Apple is already working on deeper AI integrations for the upcoming iOS ecosystem."
        ]
      }
    ]
  }
];

const match = content.match(/export const NEWS_DATA: NewsArticle\[\] = \[/);
if (match) {
  const insertIndex = match.index + match[0].length;
  let newArticlesStr = JSON.stringify(newArticles, null, 2);
  // Remove the opening '[' and closing ']' to insert properly
  newArticlesStr = newArticlesStr.substring(1, newArticlesStr.length - 1) + ',';
  
  const newContent = content.substring(0, insertIndex) + '\n  ' + newArticlesStr + content.substring(insertIndex);
  fs.writeFileSync('src/data/news.ts', newContent, 'utf8');
  console.log('Successfully appended 6 provided news articles.');
} else {
  console.log('Could not find NEWS_DATA array.');
}
