const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);

if (match) {
    let phones = JSON.parse(match[1]);
    
    // Fix duplicate vivo-v40-5g (remove the last one which we added)
    const duplicateIds = ["vivo-v40-5g"];
    
    // Find all occurrences of "vivo-v40-5g"
    let vivoIndices = [];
    phones.forEach((p, idx) => {
        if (p.id === "vivo-v40-5g") vivoIndices.push(idx);
    });
    
    if (vivoIndices.length > 1) {
        // Remove the last one
        phones.splice(vivoIndices[vivoIndices.length - 1], 1);
        console.log("Removed duplicate vivo-v40-5g.");
    }

    // Add ptaTax.status to newly added phones (infinix-zero-40-5g, xiaomi-redmi-note-14-pro-plus, realme-13-pro-plus-5g, oppo-reno-12f-5g)
    const newPhoneIds = ["infinix-zero-40-5g", "xiaomi-redmi-note-14-pro-plus", "realme-13-pro-plus-5g", "oppo-reno-12f-5g"];
    phones.forEach(p => {
        if (newPhoneIds.includes(p.id) || p.id === 'vivo-v40-5g') {
            if (!p.ptaTax.status) {
                p.ptaTax.status = 'Official PTA Approved';
                console.log(`Added status to ${p.id}`);
            }
        }
    });

    const newContent = content.substring(0, match.index) + 
                       'export const PHONES_DATA: PhoneSpec[] = ' + JSON.stringify(phones, null, 2) + ';\n\nexport const' + 
                       content.substring(match.index + match[0].length - 'export const'.length);
    fs.writeFileSync('src/data/phones.ts', newContent, 'utf8');
    console.log("Successfully fixed phones.ts.");
} else {
    console.log("Could not find match.");
}
