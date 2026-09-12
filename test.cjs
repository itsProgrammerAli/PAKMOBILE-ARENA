const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);
if (match) {
    let phones = JSON.parse(match[1]);
    const phone = phones.find(p => p.id === 'infinix-zero-40-5g');
    console.log(phone.specs);
}
