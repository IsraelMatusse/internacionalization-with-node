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

  /**
   * Infers the user's country from their IP address using the geoip-lite package,
   * and returns the corresponding {@link LocaleConfig}.
   *
   * If the IP lookup fails, or if the country is not found in the configurations,
   * the Mozambican configuration is used as a fallback.
   *
   * @param req The Express request object.
   * @returns The inferred {@link LocaleConfig} for the user.
   */
  static getLocaleFromIP(req: Request): LocaleConfig {
    const ip = req.ip || "127.0.0.1";
    const geo = geoip.lookup(ip);
    const country = geo?.country || "MZ";
    return this.configs[country] || this.configs["MZ"];
  }

  static getLocaleFromIPRaw(ip: string): LocaleConfig {
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

  static getLocaleFromPreferenceByRawIp(
    req: Request,
    ip: string
  ): LocaleConfig {
    const preferredCountry = req.headers["x-user-country"] as string;
    if (preferredCountry && this.configs[preferredCountry.toUpperCase()]) {
      return this.configs[preferredCountry.toUpperCase()];
    }
    return this.getLocaleFromIPRaw(ip);
  }

  static formatDate(date: Date, locale: LocaleConfig): string {
    return new Intl.DateTimeFormat(locale.language, {
      timeZone: locale.timezone,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  }

  static formatVisualNumber(amount: number, locale: LocaleConfig): string {
    return new Intl.NumberFormat(locale.language, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  }

  /**
   * Recursively traverse an object and format any numbers, dates, or strings
   * that look like dates to a given locale.
   *
   * @param data The object to traverse.
   * @param locale The locale to format to.
   * @returns The formatted object.
   */
  static formatNumbersAndDatesRecursively(
    data: any,
    locale: LocaleConfig
  ): any {
    if (Array.isArray(data)) {
      return data.map((item) =>
        this.formatNumbersAndDatesRecursively(item, locale)
      );
    }

    if (typeof data === "object" && data !== null) {
      const formatted: Record<string, any> = {};
      for (const [key, value] of Object.entries(data)) {
        if (typeof value === "number") {
          formatted[key] = value;
          formatted[`formatted${capitalize(key)}`] = this.formatVisualNumber(
            value,
            locale
          );
        } else if (value instanceof Date || this.isDateString(value)) {
          const date = new Date(value as string | number | Date);
          formatted[key] = date.toISOString();
          formatted[`formatted${capitalize(key)}`] = this.formatDate(
            date,
            locale
          );
        } else {
          formatted[key] = this.formatNumbersAndDatesRecursively(value, locale);
        }
      }
      return formatted;
    }

    return data;
  }

  private static isDateString(value: any): boolean {
    return typeof value === "string" && !isNaN(Date.parse(value));
  }
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
