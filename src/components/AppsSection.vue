<script setup>
import { reactive } from 'vue'

defineProps({
  t: { type: Object, required: true },
})

const slideIndex = reactive({})

const typeIcons = {
  saas: '⬡',
  web: '◈',
  mobile: '◉',
  api: '◇',
  ecommerce: '◈',
}

function currentImage(app) {
  if (app.gallery?.length) {
    const idx = slideIndex[app.id] ?? 0
    return app.gallery[idx]
  }
  return app.image
}

function setSlide(appId, index) {
  slideIndex[appId] = index
}

function hasLinks(app) {
  return app.url || app.repo || app.appStore || app.playStore
}
</script>

<template>
  <section id="apps" class="fade-in">
    <div class="wrap">
      <div class="label">{{ t.apps.label }}</div>
      <h2 class="title">{{ t.apps.title }}</h2>
      <p class="section-intro">{{ t.apps.intro }}</p>

      <div class="apps-grid">
        <article
          v-for="app in t.apps.items"
          :key="app.id"
          class="app-card"
          :class="{
            'app-card--featured': app.image,
            'app-card--mobile': app.type === 'mobile' && app.image,
          }"
        >
          <div
            class="app-card-visual"
            :class="{ 'app-card-visual--image': app.image }"
            :style="{ '--accent': app.accent }"
          >
            <img
              v-if="app.image"
              :src="currentImage(app)"
              :alt="app.name"
              class="app-screenshot"
              :class="{ 'app-screenshot--mobile': app.type === 'mobile' }"
              loading="lazy"
            >
            <template v-else>
              <span class="app-icon">{{ typeIcons[app.type] || '◈' }}</span>
            </template>
            <span class="app-type-badge">{{ t.apps.types[app.type] }}</span>

            <div v-if="app.gallery?.length > 1" class="app-gallery-dots">
              <button
                v-for="(_, index) in app.gallery"
                :key="index"
                class="app-gallery-dot"
                :class="{ active: (slideIndex[app.id] ?? 0) === index }"
                :aria-label="`Screenshot ${index + 1}`"
                @click="setSlide(app.id, index)"
              />
            </div>
          </div>

          <div class="app-card-body">
            <div class="app-card-head">
              <h3>{{ app.name }}</h3>
              <span class="app-year">{{ app.year }}</span>
            </div>
            <p class="app-company">{{ app.company }}</p>
            <p class="app-desc">{{ app.desc }}</p>

            <div class="app-tags">
              <span v-for="tag in app.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>

          <div class="app-card-footer">
            <a
              v-if="app.url"
              class="app-link app-link-live"
              :href="app.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t.apps.viewLive }} →
            </a>
            <a
              v-if="app.appStore"
              class="app-link app-link-live"
              :href="app.appStore"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t.apps.viewAppStore }} ↗
            </a>
            <a
              v-if="app.playStore"
              class="app-link"
              :href="app.playStore"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t.apps.viewPlayStore }} ↗
            </a>
            <a
              v-if="app.repo"
              class="app-link"
              :href="app.repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t.apps.viewCode }} ↗
            </a>
            <span v-if="!hasLinks(app)" class="app-private">
              {{ t.apps.privateNote }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
