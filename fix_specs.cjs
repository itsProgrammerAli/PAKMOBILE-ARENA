const fs = require('fs');
const content = fs.readFileSync('src/data/phones.ts', 'utf8');

const regex = /export const PHONES_DATA: PhoneSpec\[\] = (\[[\s\S]*?\]);\n\nexport const/m;
let match = content.match(regex);

if (match) {
    let phones = JSON.parse(match[1]);
    
    phones.forEach(p => {
        if (p.id === 'infinix-zero-40-5g') {
            p.specs = {
                display: "6.78\" AMOLED 144Hz",
                refreshRate: "144Hz",
                processor: "MediaTek Dimensity 8200 Ultimate",
                ram: "12GB",
                storage: "256GB",
                mainCamera: "108MP OIS + 50MP Ultrawide",
                selfieCamera: "50MP",
                battery: "5000 mAh",
                charging: "45W Fast Charging",
                os: "XOS 14 based on Android 14",
                network: "5G"
            };
        } else if (p.id === 'redmi-note-14-pro-plus-5g') {
            p.specs = {
                display: "6.67\" AMOLED 120Hz",
                refreshRate: "120Hz",
                processor: "Snapdragon 7s Gen 3",
                ram: "12GB",
                storage: "256GB",
                mainCamera: "50MP OIS + 8MP + 50MP Telephoto",
                selfieCamera: "20MP",
                battery: "6200 mAh",
                charging: "90W Fast Charging",
                os: "HyperOS based on Android 14",
                network: "5G"
            };
        } else if (p.id === 'realme-13-pro-plus-5g') {
            p.specs = {
                display: "6.7\" AMOLED 120Hz",
                refreshRate: "120Hz",
                processor: "Snapdragon 7s Gen 2",
                ram: "8GB/12GB",
                storage: "256GB/512GB",
                mainCamera: "50MP OIS + 50MP Periscope + 8MP",
                selfieCamera: "32MP",
                battery: "5200 mAh",
                charging: "80W Fast Charging",
                os: "Realme UI 5.0 based on Android 14",
                network: "5G"
            };
        } else if (p.id === 'oppo-reno-12f-5g') {
            p.specs = {
                display: "6.67\" OLED 120Hz",
                refreshRate: "120Hz",
                processor: "MediaTek Dimensity 6300",
                ram: "8GB",
                storage: "256GB",
                mainCamera: "50MP Main + 8MP Ultrawide + 2MP Macro",
                selfieCamera: "32MP",
                battery: "5000 mAh",
                charging: "45W SUPERVOOC",
                os: "ColorOS 14 based on Android 14",
                network: "5G"
            };
        }
    });

    const newContent = content.substring(0, match.index) + 
                       'export const PHONES_DATA: PhoneSpec[] = ' + JSON.stringify(phones, null, 2) + ';\n\nexport const' + 
                       content.substring(match.index + match[0].length - 'export const'.length);
    fs.writeFileSync('src/data/phones.ts', newContent, 'utf8');
    console.log("Successfully fixed the specs schema to match the PhoneSpec interface.");
}
