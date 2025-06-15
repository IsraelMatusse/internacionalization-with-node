import { Request } from "express";
import { LocaleConfig } from "../app/types";
import geoip from "geoip-lite";

export class LocalizationHelper {
  private static configs: Record<string, LocaleConfig> = {
    MZ: {
      country: "Mozambique",
      language: "pt",
      currency: "MZN",
      dateFormat: "DD/MM/YYYY",
      timeFormat: "24h",
      decimalSeparator: ",",
      timezone: "Africa/Maputo",
    },
    US: {
      country: "United States",
      language: "en",
      currency: "USD",
      dateFormat: "MM/DD/YYYY",
      timeFormat: "12h",
      decimalSeparator: ".",
      timezone: "America/New_York",
    },
  };

  static getLocaleFromIP(req: Request): LocaleConfig {
    const ip = req.ip || "127.0.0.1";
    const geo = geoip.lookup(ip);
    const country = geo?.country || "MZ";
    return this.configs[country] || this.configs["MZ"];
  }

  static getLocaleFromPreference(req: Request): LocaleConfig {
    const preferredCountry = req.headers["x-user-country"] as string;
    if (preferredCountry && this.configs[preferredCountry.toUpperCase()]) {
      return this.configs[preferredCountry.toUpperCase()];
    }
    return this.getLocaleFromIP(req);
  }

  static formatDate(date: Date, locale: LocaleConfig): string {
    return new Intl.DateTimeFormat(locale.language, {
      timeZone: locale.timezone,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour12: locale.timeFormat === "12h",
    }).format(date);
  }

  static formatCurrency(amount: number, locale: LocaleConfig): string {
    return new Intl.NumberFormat(locale.language, {
      style: "currency",
      currency: locale.currency,
    }).format(amount);
  }
}
