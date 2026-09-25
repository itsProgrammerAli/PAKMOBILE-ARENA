/**
 * find_realme_images.cjs
 * Safe image scraper for Realme product pages
 * Usage: node find_realme_images.cjs [product-url]
 */
const https = require('https');
const http = require('http');

const targetUrl = process.argv[2] || 'https://www.realme.com/in/realme-13-pro-plus-5g';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          const origin = new URL(url).origin;
          redirectUrl = origin + redirectUrl;
        }
        return resolve(fetchPage(redirectUrl));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });

    req.on('error', reject);
  });
}

function extractImageUrls(html) {
  const imageUrls = new Set();
  
  // 1. Match HTML attributes (src, data-src, data-origin, href) with optional query params
  const attrRegex = /(?:src|data-src|data-origin|href)=["']([^"']+\.(?:png|jpg|jpeg|webp)(?:\?[^"']*)?)["']/gi;
  let match;

  while ((match = attrRegex.exec(html)) !== null) {
    let imgUrl = match[1].trim();
    if (imgUrl.startsWith('//')) {
      imgUrl = 'https:' + imgUrl;
    } else if (imgUrl.startsWith('/')) {
      imgUrl = 'https://www.realme.com' + imgUrl;
    }

    if (imgUrl.startsWith('http')) {
      imageUrls.add(imgUrl);
    }
  }

  // 2. Direct Realme CDN & S3 asset regex for Next.js data or JSON script payloads
  const cdnRegex = /https:\/\/(?:image01\.realme\.net|static\.realme\.net|realme-upload\.s3[^\/]*\.amazonaws\.com)\/[^\s"'<>,]+/gi;
  while ((match = cdnRegex.exec(html)) !== null) {
    let cleanUrl = match[0].replace(/\\/g, '').replace(/&amp;/g, '&');
    if (/\.(?:png|jpg|jpeg|webp)/i.test(cleanUrl)) {
      imageUrls.add(cleanUrl);
    }
  }

  return Array.from(imageUrls);
}

async function run() {
  try {
    console.log(`Fetching product page: ${targetUrl}...`);
    const html = await fetchPage(targetUrl);
    const images = extractImageUrls(html);

    console.log(`\nFound ${images.length} matching image assets:`);
    images.forEach((img, idx) => {
      console.log(`[${idx + 1}] ${img}`);
    });
  } catch (error) {
    console.error('Failed to extract images:', error.message);
  }
}

run();
