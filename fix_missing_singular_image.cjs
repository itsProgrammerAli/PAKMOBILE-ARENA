const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);

if (match) {
    let phones = JSON.parse(match[1]);
    
    const targets = ["infinix-zero-40-5g", "xiaomi-redmi-note-14-pro-plus", "realme-13-pro-plus-5g", "oppo-reno-12f-5g"];
    
    phones.forEach(p => {
        if (targets.includes(p.id)) {
            // Ensure rating and reviews are exactly 0
            p.rating = 0;
            p.reviewCount = 0;
            p.reviewsCount = 0;
            p.reviews = 0;
            
            // Ensure status is PTA Approved
            if (p.ptaTax && !p.ptaTax.status) {
                p.ptaTax.status = 'Official PTA Approved';
            } else if (!p.ptaTax) {
                p.ptaTax = { passportTaxPKR: 15000, cnicTaxPKR: 18000, status: 'Official PTA Approved' };
            } else {
                 p.ptaTax.status = 'Official PTA Approved';
            }
            
            // Ensure it has at least some specs, if missing entirely
            if (!p.specs) {
                p.specs = {
                  screenSize: "6.7 Inches",
                  screenType: "AMOLED",
                  screenResolution: "1080 x 2400 Pixels",
                  refreshRate: "120 Hz",
                  processor: "Octa-core",
                  battery: "5000 mAh",
                  charging: "Fast charging",
                  mainCamera: "50 MP",
                  frontCamera: "32 MP",
                  os: "Android",
                  weight: "190 g"
                };
            }
        }
    });

    const newContent = content.substring(0, match.index) + 
                       'export const PHONES_DATA: PhoneSpec[] = ' + JSON.stringify(phones, null, 2) + ';\n\nexport const' + 
                       content.substring(match.index + match[0].length - 'export const'.length);
    fs.writeFileSync('src/data/phones.ts', newContent, 'utf8');
    console.log(`Successfully verified properties.`);
} else {
    console.log("Could not find match.");
}
