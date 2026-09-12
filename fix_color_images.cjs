const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);

if (match) {
    let phones = JSON.parse(match[1]);
    
    const updates = {
        "infinix-zero-40-5g": {
            colors: ["Moving Titanium", "Rock Black", "Violet Garden"],
            colorHexes: {
                "Moving Titanium": "#E3E4E5",
                "Rock Black": "#1A1A1A",
                "Violet Garden": "#D8BFD8"
            },
            colorImages: {
                "Moving Titanium": "/images/phones/infinix-zero-40-5g-pakistan-priceoye-942sd-500x500.webp",
                "Rock Black": "/images/phones/infinix-zero-40-5g-pakistan-priceoye-kovvu-500x500.webp",
                "Violet Garden": "/images/phones/infinix-zero-40-5g-pakistan-priceoye-t3zks-500x500.webp"
            }
        },
        "redmi-note-14-pro-plus-5g": {
            colors: ["Midnight Black", "Mirror Porcelain White", "Sand Star Green", "Phantom Purple"],
            colorHexes: {
                "Midnight Black": "#000000",
                "Mirror Porcelain White": "#FFFFFF",
                "Sand Star Green": "#C4D8D1",
                "Phantom Purple": "#8A2BE2"
            },
            colorImages: {
                "Midnight Black": "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dcuyr-500x500.webp",
                "Mirror Porcelain White": "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-dh643-500x500.webp",
                "Sand Star Green": "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-futbw-500x500.webp",
                "Phantom Purple": "/images/phones/xiaomi-redmi-note-14-pro-plus-pakistan-priceoye-pqiez-500x500.webp"
            }
        },
        "realme-13-pro-plus-5g": {
            colors: ["Monet Gold", "Emerald Green"],
            colorHexes: {
                "Monet Gold": "#D4AF37",
                "Emerald Green": "#50C878"
            },
            colorImages: {
                "Monet Gold": "/images/phones/realme-13-plus-5g-pakistan-priceoye-eba8g-500x500.webp",
                "Emerald Green": "/images/phones/realme-13-plus-5g-pakistan-priceoye-269o1-500x500.webp"
            }
        },
        "oppo-reno-12f-5g": {
            colors: ["Amber Orange", "Olive Green"],
            colorHexes: {
                "Amber Orange": "#FF7E00",
                "Olive Green": "#556B2F"
            },
            colorImages: {
                "Amber Orange": "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-dsxnc-500x500.webp",
                "Olive Green": "/images/phones/oppo-reno-12f-5g-sa-pakistan-priceoye-eogj1-500x500.webp"
            }
        }
    };

    phones.forEach(p => {
        if (updates[p.id]) {
            p.colors = updates[p.id].colors;
            p.colorHexes = updates[p.id].colorHexes;
            p.colorImages = updates[p.id].colorImages;
        }
    });

    const newContent = content.substring(0, match.index) + 
                       'export const PHONES_DATA: PhoneSpec[] = ' + JSON.stringify(phones, null, 2) + ';\n\nexport const' + 
                       content.substring(match.index + match[0].length - 'export const'.length);
    fs.writeFileSync('src/data/phones.ts', newContent, 'utf8');
    console.log("Successfully mapped colorImages, colors, and colorHexes!");
} else {
    console.log("Could not find match.");
}
