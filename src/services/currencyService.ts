// Currency conversion service
export interface Currency {
  code: string;
  name: string;
  symbol: string;
  rate: number; // Rate to ZAR (South African Rand)
}

export const currencies: Currency[] = [
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', rate: 1 },
  { code: 'USD', name: 'US Dollar', symbol: '$', rate: 0.055 },
  { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.051 },
  { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.044 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rate: 8.2 },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rate: 0.085 },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rate: 0.076 },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', rate: 0.049 },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', rate: 0.40 },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', rate: 4.6 },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', rate: 0.31 },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽', rate: 5.5 },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', rate: 76 },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rate: 0.074 },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', rate: 0.43 },
];

export class CurrencyService {
  static convertFromZAR(amountInZAR: number, toCurrency: string): number {
    const currency = currencies.find(c => c.code === toCurrency);
    if (!currency) return amountInZAR;
    return amountInZAR * currency.rate;
  }

  static convertToZAR(amount: number, fromCurrency: string): number {
    const currency = currencies.find(c => c.code === fromCurrency);
    if (!currency) return amount;
    return amount / currency.rate;
  }

  static formatPrice(amount: number, currencyCode: string): string {
    const currency = currencies.find(c => c.code === currencyCode);
    if (!currency) return `${amount}`;
    
    const convertedAmount = this.convertFromZAR(amount, currencyCode);
    return `${currency.symbol}${convertedAmount.toFixed(2)}`;
  }

  static getCurrencySymbol(currencyCode: string): string {
    const currency = currencies.find(c => c.code === currencyCode);
    return currency?.symbol || currencyCode;
  }
}