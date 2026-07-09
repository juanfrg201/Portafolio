import { ref, computed, watch } from 'vue'
import { content } from '../data/portfolio.js'

const STORAGE_KEY = 'portfolio-lang'

export function useLanguage() {
  const lang = ref(localStorage.getItem(STORAGE_KEY) || 'en')

  const t = computed(() => content[lang.value])

  watch(lang, (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    document.documentElement.lang = value === 'es' ? 'es' : 'en'
    document.title = content[value].meta.title
  }, { immediate: true })

  function setLang(newLang) {
    lang.value = newLang
  }

  function toggleLang() {
    lang.value = lang.value === 'en' ? 'es' : 'en'
  }

  return { lang, t, setLang, toggleLang }
}
