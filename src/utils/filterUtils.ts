import { PhoneSpec, FilterCategory } from '../types';

/**
 * Filter helper adhering strictly to category definitions:
 * 
 * 1. 'all' => All smartphones
 * 2. 'trending' => Flagged as trending OR released recently (2024-2025)
 * 3. 'budget' => Strictly price < PKR 80,000
 * 4. 'camera' => High-end optics (OIS, Periscope/Tetraprism telephoto, Zeiss/Aura Light studio portrait, 50MP+ multi-cam)
 * 5. 'gaming' => 120Hz+ refresh rate screen AND high-performance / dedicated gaming chipset
 * 6. 'flagship' => Luxury flagship tier (price >= PKR 250,000 or ultra-tier flagships)
 */
export function filterPhonesByCategory(phones: PhoneSpec[], category: FilterCategory): PhoneSpec[] {
  if (category === 'all') {
    return phones;
  }

  return phones.filter((phone) => {
    switch (category) {
      case 'trending': {
        return (
          phone.tags.includes('trending') ||
          phone.releaseDate.includes('2024') ||
          phone.releaseDate.includes('2025')
        );
      }

      case 'budget': {
        // Strictly phones under 80,000 PKR
        return phone.pricePKR < 80000;
      }

      case 'camera': {
        // Must have camera tag and not be entry-level
        // Specific checks for advanced sensor / OIS / Tetraprism / Ultra-wide / Aura Light
        return (
          phone.tags.includes('camera') &&
          (phone.specs.mainCamera.toLowerCase().includes('ois') ||
           phone.specs.mainCamera.toLowerCase().includes('tetraprism') ||
           phone.specs.mainCamera.toLowerCase().includes('periscope') ||
           phone.specs.mainCamera.toLowerCase().includes('aura light') ||
           phone.pricePKR >= 80000)
        );
      }

      case 'gaming': {
        // High refresh rate >= 120Hz AND capable gaming processor
        const refreshMatch = phone.specs.refreshRate.match(/(\d+)\s*Hz/i) || phone.specs.display.match(/(\d+)\s*Hz/i);
        const refreshRate = refreshMatch ? parseInt(refreshMatch[1], 10) : 60;
        const isHighRefresh = refreshRate >= 120;

        const proc = phone.specs.processor.toLowerCase();
        const isGamingChip =
          proc.includes('snapdragon 8') ||
          proc.includes('snapdragon 7') ||
          proc.includes('a17') ||
          proc.includes('a16') ||
          proc.includes('a18') ||
          proc.includes('exynos 1480') ||
          proc.includes('dimensity') ||
          proc.includes('helio g99') ||
          proc.includes('helio g200');

        return (phone.tags.includes('gaming') || isGamingChip) && isHighRefresh;
      }

      case 'flagship': {
        // Premium top-tier devices where price >= 250,000 PKR
        return phone.pricePKR >= 250000 || phone.tags.includes('flagship');
      }

      default:
        return true;
    }
  });
}

export function getCategoryHeading(category: FilterCategory, selectedBrand: string | null): string {
  if (selectedBrand && selectedBrand !== 'all') {
    return `${selectedBrand} Smartphones`;
  }
  switch (category) {
    case 'all':
      return 'All Smartphones in Pakistan';
    case 'trending':
      return 'Trending Smartphones';
    case 'budget':
      return 'Budget Smartphones (<80k PKR)';
    case 'camera':
      return 'Camera Kings';
    case 'gaming':
      return 'Gaming Phones (120Hz+)';
    case 'flagship':
      return 'Ultra Flagships';
    default:
      return 'Smartphones in Pakistan';
  }
}
