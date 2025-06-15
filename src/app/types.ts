export class HttpException<T> extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly message: string,
    public readonly data?: T,
  ) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, HttpException.prototype);
  }
}

export interface LocaleConfig {
  country: string;
  language: string;
  currency: string;
  dateFormat: string;
  timeFormat: "12h" | "24h";
  decimalSeparator: "." | ",";
  timezone: string;
}
declare global {
  namespace Express {
    interface Request {
      locale: LocaleConfig;
      formatDate: (date: Date) => string;
      formatCurrency: (amount: number) => string;
      formatNumber: (number: number) => string;
    }
  }
}