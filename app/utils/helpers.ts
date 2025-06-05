import { Language } from './constants';

/**
 * Safely gets the first item from language data array
 * Prevents runtime errors from undefined array access
 */
export function getLanguageData<T>(data: Record<Language, T[]>, language: Language): T | null {
  const languageArray = data[language];
  return languageArray && languageArray.length > 0 ? languageArray[0] : null;
}

/**
 * Generates unique IDs for elements to avoid collisions
 */
export function generateElementId(prefix: string, index: number, suffix?: string): string {
  return suffix ? `${prefix}-${index}-${suffix}` : `${prefix}-${index}`;
}

/**
 * Combines CSS classes safely, filtering out falsy values
 */
export function classNames(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Type guard to check if a value is a valid language
 */
export function isValidLanguage(value: string): value is Language {
  return value === 'tr' || value === 'en';
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Creates a delay for async operations (useful for animations)
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}