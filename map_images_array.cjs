const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);

if (match) {
    let phones = JSON.parse(match[1]);
    
    // We already mapped the primary `image` field in a previous turn for all 4 phones.
    // However, the detail page also uses the `images` array for the carousel/gallery.
    // The user has uploaded multiple color variations. Let's map ALL uploaded images to their respective phones in the `images` array.
    
    const infinixImages = [
        "/images/phones/infinix-zero-40-5g-pakistan-priceoye-942sd-500x500.webp",
        "/images/phones/infinix-zero-40-5g-pakistan-priceoye-kovvu-500x500.webp",
        "/images/phones/infinix-zero-40-5g-pakistan-priceoye-t3zks-500x500.webp"
    ];
    
    const oppoImages = [
        "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-dsxnc-500x500.webp",
        "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-eogj1-500x500.webp"
    ];
    
    const realmeImages = [
        "/images/phones/realme-13-plus-5g-pakistan-priceoye-269o1-500x500.webp",
        "/images/phones/realme-13-plus-5g-pakistan-priceoye-eba8g-500x500.webp"
    ];
    
    const redmiImages = [
        "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dcuyr-500x500.webp",
        "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dh643-500x500.webp",
        "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-futbw-500x500.webp",
        "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-pqiez-500x500.webp"
    ];
    
    phones.forEach(p => {
        if (p.id === 'infinix-zero-40-5g') {
            p.images = infinixImages;
        } else if (p.id === 'redmi-note-14-pro-plus-5g') {
            p.images = redmiImages;
        } else if (p.id === 'realme-13-pro-plus-5g') {
            p.images = realmeImages;
        } else if (p.id === 'oppo-reno-12f-5g') {
            p.images = oppoImages;
        }
    });

    const newContent = content.substring(0, match.index) + 
                       'export const PHONES_DATA: PhoneSpec[] = ' + JSON.stringify(phones, null, 2) + ';\n\nexport const' + 
                       content.substring(match.index + match[0].length - 'export const'.length);
    fs.writeFileSync('src/data/phones.ts', newContent, 'utf8');
    console.log("Successfully mapped all multiple image variants into the images arrays.");
} else {
    console.log("Could not find match.");
}
