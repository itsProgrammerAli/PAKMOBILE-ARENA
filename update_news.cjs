const fs = require('fs');
const content = fs.readFileSync('src/data/news.ts', 'utf8');

const newNews = [
  {
    id: 'oppo-reno-16-16f-launched-sept-2026',
    slug: 'oppo-reno-16-16f-launched-sept-2026',
    title: 'Oppo Reno 16 and 16F Unveiled: Focus on Aesthetics and Massive 7,000mAh Battery',
    date: 'September 11, 2026',
    isoDate: '2026-09-11',
    category: 'New Launches',
    imageUrl: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=1200&q=80',
    summary: 'Oppo refreshes its Reno lineup with the new Reno 16 and 16F, bringing a unique blend of premium aesthetics and massive 7,000mAh battery capacities.',
    author: 'PakMobile Arena Hardware Desk',
    tags: ['Oppo', 'Reno 16', 'Smartphone Launch', 'Battery King'],
    content: [
      {
        heading: 'Redefining Premium Mid-Range Aesthetics',
        paragraphs: [
          'Oppo has officially announced the upcoming Reno 16 and Reno 16F smartphones, placing a heavy emphasis on design and battery endurance. The Reno 16F is expected to feature a 6.57-inch 1080p display, powered by a MediaTek Dimensity processor. It caters to users looking for extended usability, packing a staggering 7,000mAh battery equipped with 80W wired charging.',
          'On the other hand, the standard Reno 16 serves as a more compact, premium variant. It boasts a 6.32-inch 1.5K display and is built around the Snapdragon 74 platform, aiming for a balance between extreme performance and elegant design.'
        ]
      },
      {
        heading: 'Market Expectations in Pakistan',
        paragraphs: [
          'Expected to hit the Pakistani market by late September, the Reno 16 series addresses the growing demand for devices that don\'t compromise on battery life while maintaining a sleek profile. The 80W fast charging on the 16F model is particularly appealing for local power users and content creators who are frequently on the go.'
        ]
      }
    ]
  },
  {
    id: 'huawei-accelerates-mate-90-series-tau-kirin',
    slug: 'huawei-accelerates-mate-90-series-tau-kirin',
    title: 'Huawei Accelerates Mate 90 Series Launch with New \'Tau\' Kirin Processor',
    date: 'September 11, 2026',
    isoDate: '2026-09-11',
    category: 'Global Tech',
    imageUrl: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80',
    summary: 'Huawei moves up the Mate series launch to September, introducing the cutting-edge \'Tau\' design approach for its in-house Kirin silicon.',
    author: 'PakMobile Arena Tech Analyst',
    tags: ['Huawei', 'Mate 90', 'Kirin Processor', 'Flagship'],
    content: [
      {
        heading: 'The \'Tau\' Kirin Architecture Breakthrough',
        paragraphs: [
          'Huawei is surprising the industry by pulling forward the launch of its highly anticipated Mate 90 series to September. The central talking point of this release is the debut of a new Kirin processor built using a novel \'Tau\' design approach. This new methodology is rumored to significantly increase transistor density, bridging the performance gap with rival 3nm silicon despite existing manufacturing constraints.',
          'The Mate 90 series is expected to feature advanced satellite communication capabilities, refined HarmonyOS integrations, and a triple-camera system co-engineered with Huawei\'s XMAGE imaging brand.'
        ]
      },
      {
        heading: 'Global Tech Repercussions',
        paragraphs: [
          'By accelerating the Mate 90 release, Huawei aims to directly compete with the global iPhone and Samsung Galaxy launch windows. The introduction of the Tau-based Kirin processor demonstrates Huawei\'s continued resilience and innovation in semiconductor design, signaling strong competition in the ultra-premium smartphone segment.'
        ]
      }
    ]
  },
  {
    id: 'xiaomi-18-series-snapdragon-8-elite-gen-6',
    slug: 'xiaomi-18-series-snapdragon-8-elite-gen-6',
    title: 'Xiaomi 18 Series Tipped for Late September Reveal with Snapdragon 8 Elite Gen 6',
    date: 'September 11, 2026',
    isoDate: '2026-09-11',
    category: 'Hardware & Tech',
    imageUrl: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=1200&q=80',
    summary: 'Xiaomi prepares to launch its next-generation flagship series, featuring the unannounced Snapdragon 8 Elite Gen 6 platform.',
    author: 'PakMobile Arena Hardware Desk',
    tags: ['Xiaomi 18', 'Snapdragon 8 Elite', 'Flagship Tech', 'Leaks'],
    content: [
      {
        heading: 'Next-Generation Qualcomm Power',
        paragraphs: [
          'Following the early September launch of the Xiaomi 18 Fold, supply chain leaks indicate that the standard Xiaomi 18 series will be unveiled later this month. The standout feature is the inclusion of Qualcomm\'s upcoming Snapdragon 8 Elite Gen 6 platform, which promises unprecedented AI processing capabilities and graphics performance.',
          'The Xiaomi 18 is expected to sport a refined Leica-tuned camera setup, a hyper-smooth 144Hz LTPO display, and ultra-fast 120W wired charging, continuing Xiaomi\'s tradition of packing top-tier specs into its mainline flagships.'
        ]
      },
      {
        heading: 'Setting the Standard for Late 2026',
        paragraphs: [
          'If the rumors hold true, the Xiaomi 18 will be among the first devices globally to utilize the Snapdragon 8 Elite Gen 6, setting a high benchmark for all subsequent Android flagships in late 2026 and early 2027. Enthusiasts in Pakistan are eagerly awaiting local pricing and pre-order details.'
        ]
      }
    ]
  },
  {
    id: 'samsung-galaxy-s26-fe-announced',
    slug: 'samsung-galaxy-s26-fe-announced',
    title: 'Samsung Galaxy S26 FE Announced: Largest Screen on a Fan Edition Yet',
    date: 'September 11, 2026',
    isoDate: '2026-09-11',
    category: 'New Launches',
    imageUrl: 'https://images.unsplash.com/photo-1601784551446-20c9e07cd8d6?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cd8d6?auto=format&fit=crop&w=1200&q=80',
    summary: 'Samsung expands its value-flagship lineup with the Galaxy S26 FE, boasting the largest display ever seen on a Fan Edition device.',
    author: 'PakMobile Arena Retail Reporter',
    tags: ['Samsung', 'Galaxy S26 FE', 'Fan Edition', 'Smartphones'],
    content: [
      {
        heading: 'Bridging the Gap Between Mid-Range and Flagship',
        paragraphs: [
          'Samsung has officially lifted the veil on the Galaxy S26 FE (Fan Edition), a highly anticipated device that aims to deliver flagship-level experiences at a more accessible price point. The most notable upgrade is the display—the S26 FE features a massive 6.8-inch Dynamic AMOLED 2X panel, making it the largest screen ever offered on a Fan Edition model.',
          'Powered by a slightly dialed-back version of the Exynos 2600 (or Snapdragon 8 Gen 5 depending on the region), the S26 FE includes a versatile triple-camera array, a 4,800mAh battery, and full IP68 water and dust resistance.'
        ]
      },
      {
        heading: 'Value Proposition in Pakistan',
        paragraphs: [
          'The Fan Edition series has historically performed exceptionally well in Pakistan due to its balance of premium features and aggressive pricing. With the Galaxy S26 FE, Samsung is expected to capture a significant share of the upper mid-range market, particularly among users looking for an expansive display for media consumption and gaming.'
        ]
      }
    ]
  },
  {
    id: 'battery-revolution-10000mah-budget-phones',
    slug: 'battery-revolution-10000mah-budget-phones',
    title: 'Battery Revolution: 10,000mAh Cells Coming to Budget Phones Like Redmi Note 17 Pro Max',
    date: 'September 11, 2026',
    isoDate: '2026-09-11',
    category: 'Market Trends',
    imageUrl: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?auto=format&fit=crop&w=1200&q=80',
    summary: 'A new trend is emerging in the budget smartphone segment as manufacturers integrate massive 10,000mAh batteries with reverse power bank functionality.',
    author: 'PakMobile Arena Battery & Power Lab',
    tags: ['Battery Tech', '10000mAh', 'Redmi Note 17', 'Budget Phones'],
    content: [
      {
        heading: 'Extreme Endurance for the Masses',
        paragraphs: [
          'September 2026 is witnessing a radical shift in smartphone battery standards. Budget and mid-range devices from brands like Xiaomi (Redmi), Honor, and Realme are increasingly adopting enormous 6,000mAh to 10,000mAh battery cells. The upcoming Redmi Note 17 Pro Max is reportedly leading this charge with a colossal 10,000mAh battery.',
          'These massive power units aren\'t just for extending screen time; they are being marketed with robust reverse-charging capabilities, essentially turning the smartphones into portable power banks for other devices and accessories.'
        ]
      },
      {
        heading: 'Perfect for the Local Environment',
        paragraphs: [
          'For the Pakistani market, where power outages and load-shedding can still be a concern in various regions, these "Battery Warriors" offer immense practical value. The ability to go multiple days without a charge, coupled with the utility of charging secondary devices, makes these new high-capacity budget phones highly attractive to delivery riders, field workers, and students.'
        ]
      }
    ]
  },
  {
    id: 'vivo-v80-standard-edition-snapdragon-74',
    slug: 'vivo-v80-standard-edition-snapdragon-74',
    title: 'Vivo V80 Standard Edition Set for Late September with Snapdragon 74',
    date: 'September 11, 2026',
    isoDate: '2026-09-11',
    category: 'Local Market',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    summary: 'Following the launch of the V80 Lite, Vivo prepares to introduce the standard V80 model featuring a 114Hz display and enhanced portrait cameras.',
    author: 'PakMobile Arena Retail Reporter',
    tags: ['Vivo V80', 'Snapdragon 74', 'Mid Range', 'Camera Phones'],
    content: [
      {
        heading: 'Filling Out the V-Series Lineup',
        paragraphs: [
          'After successfully introducing the Vivo V80 Lite to the Pakistani market, Vivo is gearing up for the release of the standard Vivo V80 towards the end of September. The V80 is rumored to be powered by the reliable Snapdragon 74 processor, ensuring smooth daily performance and capable gaming frame rates.',
          'A unique standout feature of the V80 is its reported 114Hz refresh rate display—a slight deviation from the standard 120Hz panels, optimized specifically for Vivo\'s custom Funtouch OS animations. The device will continue the V-series legacy of focusing heavily on portrait photography with an upgraded Aura Light system.'
        ]
      },
      {
        heading: 'Strategic Launch Timing',
        paragraphs: [
          'By staggering the releases of the V80 series, Vivo maintains sustained retail momentum throughout the quarter. The standard V80 is expected to hit the sweet spot for content creators looking for specialized portrait video features without stretching into flagship price territories.'
        ]
      }
    ]
  },
  {
    id: 'infinix-xpad-30-pro-tablet-budget-offerings',
    slug: 'infinix-xpad-30-pro-tablet-budget-offerings',
    title: 'Infinix Expands Portfolio with Xpad 30 Pro Tablet and New Budget Offerings',
    date: 'September 11, 2026',
    isoDate: '2026-09-11',
    category: 'Hardware & Tech',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80',
    summary: 'Infinix diversifies its tech ecosystem in Pakistan with the launch of the high-value Xpad 30 Pro tablet alongside a fresh wave of budget smartphones.',
    author: 'PakMobile Arena Hardware Desk',
    tags: ['Infinix', 'Xpad 30 Pro', 'Tablets', 'Tech Ecosystem'],
    content: [
      {
        heading: 'Stepping Up the Tablet Game',
        paragraphs: [
          'Infinix is making a strong push into the broader consumer electronics ecosystem this September with the announcement of the Infinix Xpad 30 Pro. This new Android tablet aims to disrupt the mid-range market by offering a high-resolution 11-inch 2K display, quad speakers with DTS tuning, and robust multitasking capabilities powered by a MediaTek Helio G-series chipset.',
          'The Xpad 30 Pro is positioned as an affordable productivity and entertainment hub, ideal for online learning, media consumption, and light office work.'
        ]
      },
      {
        heading: 'Accompanying Budget Smartphones',
        paragraphs: [
          'Alongside the tablet, Infinix is also rolling out several new entry-level smartphones designed to offer maximum value. These devices feature large displays, dependable battery life, and competitive pricing, reinforcing Infinix\'s strong foothold in the Pakistani budget sector.'
        ]
      }
    ]
  }
];

const match = content.match(/export const NEWS_DATA: NewsArticle\[\] = \[/);
if (match) {
  const insertIndex = match.index + match[0].length;
  let newNewsStr = JSON.stringify(newNews, null, 2);
  // Remove the opening '[' and closing ']' to insert properly
  newNewsStr = newNewsStr.substring(1, newNewsStr.length - 1) + ',';
  
  const newContent = content.substring(0, insertIndex) + '\n  ' + newNewsStr + content.substring(insertIndex);
  fs.writeFileSync('src/data/news.ts', newContent, 'utf8');
  console.log('Successfully added 7 news items.');
} else {
  console.log('Could not find NEWS_DATA array.');
}
