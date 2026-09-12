const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);
if (match) {
    let phones = JSON.parse(match[1]);
    const targets = ["infinix-zero-40-5g", "redmi-note-14-pro-plus-5g", "realme-13-pro-plus-5g", "oppo-reno-12f-5g"];
    
    targets.forEach(id => {
        const phone = phones.find(p => p.id === id);
        if (phone) {
            console.log(`\nPhone ID: ${id}`);
            console.log(`Colors: ${JSON.stringify(phone.colors)}`);
        }
    });
}
