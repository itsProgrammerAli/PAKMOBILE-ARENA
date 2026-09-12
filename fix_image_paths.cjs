const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);

if (match) {
    let phones = JSON.parse(match[1]);
    
    let updatedCount = 0;
    phones.forEach(p => {
        if (p.id === 'infinix-zero-40-5g') {
            p.image = '/images/phones/infinix-zero-40-5g-pakistan-priceoye-942sd-500x500.webp';
            updatedCount++;
        } else if (p.id === 'xiaomi-redmi-note-14-pro-plus') {
            p.image = '/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dcuyr-500x500.webp';
            updatedCount++;
        } else if (p.id === 'realme-13-pro-plus-5g') {
            p.image = '/images/phones/realme-13-plus-5g-pakistan-priceoye-269o1-500x500.webp';
            updatedCount++;
        } else if (p.id === 'oppo-reno-12f-5g') {
            p.image = '/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-dsxnc-500x500.webp';
            updatedCount++;
        }
    });

    const newContent = content.substring(0, match.index) + 
                       'export const PHONES_DATA: PhoneSpec[] = ' + JSON.stringify(phones, null, 2) + ';\n\nexport const' + 
                       content.substring(match.index + match[0].length - 'export const'.length);
    fs.writeFileSync('src/data/phones.ts', newContent, 'utf8');
    console.log(`Successfully updated image paths for ${updatedCount} phones.`);
} else {
    console.log("Could not find match.");
}
