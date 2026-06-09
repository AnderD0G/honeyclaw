export const languages = {
  en: 'English',
  zh: '中文',
  ko: '한국어',
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = 'en';
export const supportedLanguages = Object.keys(languages) as Language[];

export function isLanguage(value: string | undefined): value is Language {
  return Boolean(value && supportedLanguages.includes(value as Language));
}

export function getLanguagePath(language: Language, hash = '') {
  return `/${language}/${hash}`;
}
