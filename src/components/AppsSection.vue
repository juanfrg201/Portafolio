<script setup>
import { reactive } from 'vue'

defineProps({
  t: { type: Object, required: true },
})

const slideIndex = reactive({})
const failedImages = reactive({})

function currentImage(app) {
  if (app.gallery?.length) {
    const idx = slideIndex[app.id] ?? 0
    return app.gallery[idx]
  }
  return app.image
}

function hasVisual(app) {
  return Boolean(currentImage(app)) && !failedImages[app.id]
}

function markFailed(id) {
  failedImages[id] = true
}

function setSlide(appId, index) {
  slideIndex[appId] = index
}

function hasLinks(app) {
  return app.url || app.repo || app.appStore || app.playStore
}

function initial(name) {
  return name?.charAt(0) || 'A'
}
</script>

<template>
  <section id="apps" class="fade-in">
    <div class="wrap">
      <div class="label">{{ t.apps.label }}</div>
      <h2 class="title">{{ t.apps.title }}</h2>
      <p class="section-intro">{{ t.apps.intro }}</p>

      <div class="apps-grid stagger">
        <article
          v-for="app in t.apps.items"
          :key="app.id"
          class="app-card"
        >
          <div
            class="app-card-visual"
            :class="{
              'app-card-visual--image': hasVisual(app),
              'app-card-visual--fallback': !hasVisual(app),
              'app-card-visual--contain': hasVisual(app) && app.imageFit === 'contain',
              'app-card-visual--logo': hasVisual(app) && app.imageFit === 'logo',
            }"
            :style="{ '--accent': app.accent }"
          >
            <img
              v-if="hasVisual(app)"
              :src="currentImage(app)"
              :alt="app.name"
              class="app-screenshot"
              loading="lazy"
              @error="markFailed(app.id)"
            >
            <span v-else class="app-fallback-letter">{{ initial(app.name) }}</span>
            <span class="app-type-badge">{{ t.apps.types[app.type] }}</span>

            <div v-if="hasVisual(app) && app.gallery?.length > 1" class="app-gallery-dots">
              <button
                v-for="(_, dotIndex) in app.gallery"
                :key="dotIndex"
                class="app-gallery-dot"
                :class="{ active: (slideIndex[app.id] ?? 0) === dotIndex }"
                :aria-label="`${t.ui.screenshot} ${dotIndex + 1}`"
                @click="setSlide(app.id, dotIndex)"
              />
            </div>
          </div>

          <div class="app-card-content">
            <div class="app-card-body">
              <div class="app-card-head">
                <h3>{{ app.name }}</h3>
                <span class="app-year">{{ app.year }}</span>
              </div>
              <p class="app-company">{{ app.company }}</p>
              <p class="app-desc">{{ app.desc }}</p>
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
                {{ app.note || t.apps.privateNote }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
