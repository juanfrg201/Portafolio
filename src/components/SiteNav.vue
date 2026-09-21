<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { portfolioConfig } from '../data/portfolio.js'
import { LOCALES } from '../i18n/locales.js'

const props = defineProps({
  t: { type: Object, required: true },
  lang: { type: String, required: true },
})

const resume = computed(
  () => portfolioConfig.links.resume[props.lang] || portfolioConfig.links.resume.en
)

const emit = defineEmits(['set-lang'])

const menuOpen = ref(false)
const isScrolled = ref(false)
const activeId = ref('home')
const scrollProgress = ref(0)

const navItems = [
  { id: 'home', key: 'home' },
  { id: 'problems', key: 'services' },
  { id: 'apps', key: 'work' },
  { id: 'stack', key: 'skills' },
  { id: 'experience', key: 'experience' },
  { id: 'faq', key: 'faq' },
  { id: 'contact', key: 'contact' },
]

let sectionObserver = null

function closeMenu() {
  menuOpen.value = false
}

function selectLang(code) {
  emit('set-lang', code)
}

function onScroll() {
  isScrolled.value = window.scrollY > 40
  const max = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = max > 0 ? Math.min(1, window.scrollY / max) : 0
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  )

  navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) sectionObserver.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  sectionObserver?.disconnect()
})
</script>

<template>
  <nav class="site-nav" :class="{ 'is-scrolled': isScrolled, 'menu-open': menuOpen }">
    <div class="wrap">
      <a href="#home" class="nav-brand" @click="closeMenu">Juan.</a>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="`#${item.id}`"
            :class="{ active: activeId === item.id }"
            @click="closeMenu"
          >
            {{ t.nav[item.key] }}
          </a>
        </li>
      </ul>

      <div class="nav-actions">
        <div
          class="lang-switch"
          role="group"
          :aria-label="t.ui.selectLanguage"
        >
          <button
            v-for="code in LOCALES"
            :key="code"
            class="lang-btn"
            :class="{ active: lang === code }"
            :aria-pressed="lang === code"
            @click="selectLang(code)"
          >
            {{ code.toUpperCase() }}
          </button>
        </div>
        <a
          class="btn nav-cta"
          :class="isScrolled ? 'btn-primary' : 'btn-light'"
          :href="resume.href"
          :download="resume.file"
        >
          {{ t.nav.cv }}
        </a>
        <button
          class="nav-toggle"
          :aria-label="menuOpen ? t.ui.closeMenu : t.ui.openMenu"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? '✕' : '☰' }}
        </button>
      </div>
    </div>
    <div class="nav-progress" aria-hidden="true">
      <span :style="{ transform: `scaleX(${scrollProgress})` }"></span>
    </div>
  </nav>
</template>
