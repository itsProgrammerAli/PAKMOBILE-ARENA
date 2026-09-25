const fs = require('fs');

async function findColorImages() {
  const res = await fetch('https://www.realme.com/in/realme-13-pro-plus-5g');
  const text = await res.text();
  const re = /https:\/\/static2\.realme\.net\/images\/realme-13-pro-plus\/color\/[^\s"'<>]+/g;
  let m;
  const set = new Set();
  while ((m = re.exec(text)) !== null) set.add(m[0]);
  console.log('Color images:');
  for (const url of set) {
    console.log(url);
  }
}
findColorImages();
