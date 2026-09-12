const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);

if (match) {
    let phones = JSON.parse(match[1]);
    
    const targets = ["infinix-zero-40-5g", "xiaomi-redmi-note-14-pro-plus", "realme-13-pro-plus-5g", "oppo-reno-12f-5g"];
    
    targets.forEach(id => {
        const phone = phones.find(p => p.id === id);
        if (phone) {
            console.log(`\nFound: ${id}`);
            console.log(`Specs exist: ${!!phone.specs}`);
            console.log(`Variants exist: ${!!phone.variants}`);
            console.log(`Colors exist: ${!!phone.colors}`);
            console.log(`Image (singular) exists: ${!!phone.image}`);
            console.log(`Images (array) exists: ${!!phone.images}`);
        } else {
            console.log(`\nNot found: ${id}`);
        }
    });
}
