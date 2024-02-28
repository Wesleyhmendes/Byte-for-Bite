export default function mapCategories(status: string): string {
  switch (status) {
    case 'Ordinary Drink': return '1';
    case 'Cocktail': return '2';
    case 'Shake': return '3';
    case 'Other / Unknown': return '4';
    case 'Cocoa': return '5';
    case 'Shot': return '6';
    case 'Coffee / Tea': return '7';
    case 'Homemade Liqueur': return '8';
    case 'Punch / Party Drin': return '9';
    case 'Beer': return '10';
    case 'Soft Drink': return '11';
    default: return '0';
  }
}