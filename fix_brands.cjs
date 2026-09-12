const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const BRANDS: BrandInfo\[\] = (\[[\s\S]*?\]);/;
let match = content.match(regex);

if (match) {
    let brands = JSON.parse(match[1]);
    const oppoExists = brands.some(b => b.name === 'Oppo');
    if (!oppoExists) {
        brands.push({
            name: "Oppo",
            count: 1, // Will be updated dynamically or manually later
            logoText: "OPPO",
            slug: "oppo"
        });
        const newContent = content.substring(0, match.index) + 
                           'export const BRANDS: BrandInfo[] = ' + JSON.stringify(brands, null, 2) + ';' + 
                           content.substring(match.index + match[0].length);
        fs.writeFileSync('src/data/phones.ts', newContent, 'utf8');
        console.log("Successfully added Oppo to brands.");
    } else {
        console.log("Oppo already exists in brands.");
    }
} else {
    console.log("Could not find match for BRANDS.");
}
