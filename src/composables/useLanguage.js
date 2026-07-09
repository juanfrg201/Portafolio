import { ref, computed, watch } from 'vue'
import { content } from '../data/portfolio.js'
import { getDefaultLocale, STORAGE_KEY } from '../i18n/locales.js'
import { updateDocumentMeta } from '../i18n/document.js'

export function useLanguage() {
  const lang = ref(getDefaultLocale())

  const t = computed(() => content[lang.value])

  watch(
    lang,
    (value) => {
      localStorage.setItem(STORAGE_KEY, value)
      updateDocumentMeta(value, content[value].meta)
    },
    { immediate: true },
  )

  function setLang(newLang) {
    if (content[newLang]) lang.value = newLang
  }

  function toggleLang() {
    lang.value = lang.value === 'en' ? 'es' : 'en'
  }

  return { lang, t, setLang, toggleLang }
}
