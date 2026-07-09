<script setup>
import { ref } from 'vue'
import { portfolioConfig } from '../data/portfolio.js'
import { LOCALES } from '../i18n/locales.js'

defineProps({
  t: { type: Object, required: true },
  lang: { type: String, required: true },
})

const emit = defineEmits(['set-lang'])

const menuOpen = ref(false)

const navItems = [
  { id: 'stack', key: 'stack' },
  { id: 'problems', key: 'services' },
  { id: 'apps', key: 'apps' },
  { id: 'work', key: 'work' },
  { id: 'experience', key: 'experience' },
  { id: 'faq', key: 'faq' },
  { id: 'contact', key: 'contact' },
]

function closeMenu() {
  menuOpen.value = false
}

function selectLang(code) {
  emit('set-lang', code)
}
</script>

<template>
  <nav class="site-nav">
    <div class="wrap">
      <a href="#" class="nav-brand" @click.prevent>{{ portfolioConfig.name }}</a>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="item in navItems" :key="item.id">
          <a :href="`#${item.id}`" @click="closeMenu">{{ t.nav[item.key] }}</a>
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
          class="btn btn-primary nav-cta"
          :href="`mailto:${portfolioConfig.email}`"
        >
          {{ t.nav.cta }}
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
  </nav>
</template>
