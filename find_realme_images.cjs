const fs = require('fs');

async function testStore() {
  const res = await fetch('https://www.realme.com/in/realme-13-pro-plus-5g');
  const text = await res.text();
  const re = /https:\/\/image01\.realme\.net\/[^\s"'<>]+/g;
  let m;
  const list = new Set();
  while ((m = re.exec(text)) !== null) {
    list.add(m[0]);
  }
  console.log('Found realme images:', list.size);
  Array.from(list).slice(0, 20).forEach(u => console.log(u));
}
testStore();
