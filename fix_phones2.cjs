const fs = require('fs');

const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);

if (match) {
    let phones = JSON.parse(match[1]);
    for (let phone of phones) {
        if (phone.rating !== undefined) phone.rating = 0;
        if (phone.stars !== undefined) phone.stars = 0;
        if (phone.reviewCount !== undefined) phone.reviewCount = 0;
        if (phone.reviewsCount !== undefined) phone.reviewsCount = 0;
        if (phone.reviews !== undefined) phone.reviews = 0;
        
        if (phone.review) {
            delete phone.review;
        }

        if (phone.name === "Tecno Spark 50 Pro" || phone.id === "tecno-spark-50-pro") {
            phone.pricePKR = 74999;
            phone.officialPricePKR = 74999;
            phone.marketPriceRangePKR = { min: 74000, max: 76000 };
            
            let variant128 = phone.variants.find(v => v.name.includes("128GB"));
            if (!variant128) variant128 = phone.variants[0];
            
            variant128.name = "8GB / 128GB";
            variant128.pricePKR = 74999;
            variant128.officialPricePKR = 74999;
            variant128.marketPriceRangePKR = { min: 74000, max: 76000 };
            
            phone.variants = [variant128];
            phone.model = "Spark 50 Pro (8GB / 128GB)";
        }
    }
    
    const newContent = content.substring(0, match.index) + 
                       'export const PHONES_DATA: PhoneSpec[] = ' + JSON.stringify(phones, null, 2) + ';\n\nexport const' + 
                       content.substring(match.index + match[0].length - 'export const'.length);
    fs.writeFileSync('src/data/phones.ts', newContent, 'utf8');
    console.log("Successfully updated phones.ts");
} else {
    console.log("Could not find match.");
}
