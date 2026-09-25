/**
 * append_news.cjs
 * Robust news ingestion script for PakMobile Arena
 * Usage: node append_news.cjs
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const NEWS_TS_PATH = path.join(__dirname, 'src/data/news.ts');
const NEWS_JSON_SRC = path.join(__dirname, 'src/data/news.json');
const NEWS_JSON_ROOT = path.join(__dirname, 'news.json');

// Define new news articles conforming strictly to NewsArticle interface (src/types.ts)
const NEW_NEWS = [
  {
    id: "pta-tax-slab-update-iphone-17",
    slug: "pta-tax-slab-update-iphone-17",
    title: "PTA Announces Revised Tax Slabs for Upcoming Flagship Smartphones",
    summary: "The Pakistan Telecommunication Authority (PTA) has released updated CNIC and Passport tax calculations for flagship devices entering the local market.",
    content: [
      {
        heading: "Official FBR & PTA Tariff Revision",
        paragraphs: [
          "The Pakistan Telecommunication Authority (PTA), in coordination with the Federal Board of Revenue (FBR), has officially updated the customs valuation and DIRBS registration slabs for incoming flagship devices in Pakistan.",
          "The revised policy aims to streamline mobile imports, provide clear incentives for local assembly lines, and offer transparent customs duty calculations for overseas Pakistani returnees utilizing passport-based allowances."
        ]
      },
      {
        heading: "Impact on Flagship Devices & Commercial Availability",
        paragraphs: [
          "Under the updated tariff tables, devices with CBU import values exceeding $500 will see adjusted regulatory duties and sales tax brackets. Handsets assembled domestically in Pakistani CKD facilities will continue to enjoy zero import surcharges.",
          "Consumers purchasing officially distributed box-pack units across major commercial hubs like Hafeez Centre (Lahore) and Saddar (Karachi) will have full PTA certification included in the retail price."
        ]
      }
    ],
    category: "PTA Tax",
    author: "PakMobile Arena News Desk",
    date: "September 24, 2026",
    isoDate: "2026-09-24",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    tags: ["PTA Tax", "FBR Customs", "DIRBS", "Flagship Slabs", "Imports"],
    metaTitle: "PTA Announces Revised Tax Slabs for Flagships (September 2026)",
    metaDescription: "Check official updated PTA tax slabs for flagship smartphones on CNIC and Passport under latest FBR guidelines."
  }
];

function appendOrUpdateNews() {
  if (!fs.existsSync(NEWS_TS_PATH)) {
    console.error(`Error: File not found at ${NEWS_TS_PATH}`);
    process.exit(1);
  }

  const rawContent = fs.readFileSync(NEWS_TS_PATH, 'utf8');

  // Exact marker boundaries
  const arrayStartMarker = 'export const NEWS_DATA: NewsArticle[] = [';
  const startIndex = rawContent.indexOf(arrayStartMarker);

  if (startIndex === -1) {
    console.error('Error: Could not locate NEWS_DATA array start marker in src/data/news.ts');
    process.exit(1);
  }

  // Locate the closing bracket of NEWS_DATA array
  const closeMarker = '\n];';
  const endIndex = rawContent.indexOf(closeMarker, startIndex);
  if (endIndex === -1) {
    console.error('Error: Could not locate closing bracket of NEWS_DATA array in src/data/news.ts');
    process.exit(1);
  }

  const prefix = rawContent.substring(0, startIndex + 'export const NEWS_DATA: NewsArticle[] = '.length);
  // Suffix begins immediately after the closing bracket and semicolon (`;`)
  const suffixStartIndex = rawContent.indexOf(';', endIndex);
  const suffix = rawContent.substring(suffixStartIndex + 1);

  // Extract the JS array expression safely
  const arrayCode = rawContent.substring(startIndex + arrayStartMarker.length - 1, endIndex + 2);

  let existingNews = [];
  try {
    // Safely evaluate TypeScript/JS object literals (supporting unquoted keys, comments, single quotes)
    existingNews = vm.runInNewContext(arrayCode);
    if (!Array.isArray(existingNews)) {
      throw new Error('Parsed data is not an array.');
    }
  } catch (err) {
    console.error('Error: Failed to evaluate existing NEWS_DATA:', err.message);
    process.exit(1);
  }

  // Deduplicate and upsert by slug/id
  let addedCount = 0;
  let updatedCount = 0;

  NEW_NEWS.forEach(article => {
    const existingIndex = existingNews.findIndex(n => n.id === article.id || n.slug === article.slug);
    if (existingIndex !== -1) {
      existingNews[existingIndex] = { ...existingNews[existingIndex], ...article };
      updatedCount++;
    } else {
      existingNews.unshift(article); // Prepend latest news to top
      addedCount++;
    }
  });

  const updatedJson = JSON.stringify(existingNews, null, 2);
  const newTsContent = `${prefix}${updatedJson};\n\n${suffix.trim()}`;

  // Write back safely
  fs.writeFileSync(NEWS_TS_PATH, newTsContent, 'utf8');
  fs.writeFileSync(NEWS_JSON_SRC, updatedJson, 'utf8');
  if (fs.existsSync(NEWS_JSON_ROOT)) {
    fs.writeFileSync(NEWS_JSON_ROOT, updatedJson, 'utf8');
  }

  console.log(`Success: News ingestion complete.`);
  console.log(`- Added: ${addedCount}`);
  console.log(`- Updated: ${updatedCount}`);
  console.log(`- Total articles in catalog: ${existingNews.length}`);
}

appendOrUpdateNews();
