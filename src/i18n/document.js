export function updateDocumentMeta(locale, meta) {
  const lang = locale === 'es' ? 'es' : 'en'

  document.documentElement.lang = lang
  document.title = meta.title

  setMetaContent('name', 'description', meta.description)
  setMetaContent('name', 'keywords', meta.keywords)
  setMetaContent('property', 'og:title', meta.title)
  setMetaContent('property', 'og:description', meta.description)
  setMetaContent('property', 'og:locale', lang === 'es' ? 'es_CO' : 'en_US')
}

function setMetaContent(attr, key, value) {
  if (!value) return
  const el = document.querySelector(`meta[${attr}="${key}"]`)
  if (el) el.setAttribute('content', value)
}
