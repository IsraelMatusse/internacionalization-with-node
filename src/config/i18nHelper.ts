import i18next, { TFunction } from "i18next";

export class I18nHelper {
  /**
   * get Translation key for a specific language
   * @param lang Lang code (ex: 'pt', 'en')
   * @returns Translation object (t)
   */
  static getTranslation(lang = "pt"): TFunction {
    return i18next.getFixedT(lang);
  }

  /**
   * function to Tranlate a key
   * @param key Translation key
   * @param lang Lang code (default: 'pt')
   * @param options Translation options
   * @returns Translated string
   */
  static translate(
    key: string,
    lang = "pt",
    options?: Record<string, any>
  ): string {
    const t = this.getTranslation(lang);
    return t(key, { ...options, interpolation: { escapeValue: false } });
  }

  /**
   * Translates a key using i18next
   * and replaces placeholders with the
   * given variables
   *
   * @param key Translation key
   * @param lang Lang code (default: 'pt')
   * @param variables Variables to replace in the translated string
   * @returns Translated string with variables replaced
   */
  static translateWithVars(
    key: string,
    lang = "pt",
    variables?: Record<string, unknown>
  ): string {
    const translated = this.translate(key, lang);
    if (!variables) return translated;
    let result = translated;
    Object.entries(variables).forEach(([key, value]) => {
      const pattern = new RegExp(`\\{${key}\\}`, "g");
      result = result.replace(pattern, String(value));
    });

    return result;
  }
}
