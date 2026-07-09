export const LOCALES = ['en', 'es']
export const STORAGE_KEY = 'portfolio-lang'

export function getDefaultLocale() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (LOCALES.includes(stored)) return stored

  const browserLang = navigator.language?.toLowerCase() ?? 'en'
  return browserLang.startsWith('es') ? 'es' : 'en'
}
