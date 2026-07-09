<script setup>
import { ref } from 'vue'
import { portfolioConfig } from '../data/portfolio.js'

defineProps({
  t: { type: Object, required: true },
  lang: { type: String, required: true },
})

const emit = defineEmits(['toggle-lang'])

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
        <button
          class="lang-toggle"
          :class="{ active: lang === 'es' }"
          :aria-label="lang === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'"
          @click="emit('toggle-lang')"
        >
          {{ lang === 'en' ? 'ES' : 'EN' }}
        </button>
        <a
          class="btn btn-primary nav-cta"
          :href="`mailto:${portfolioConfig.email}`"
        >
          {{ t.nav.cta }}
        </a>
        <button
          class="nav-toggle"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? '✕' : '☰' }}
        </button>
      </div>
    </div>
  </nav>
</template>
