<script setup>
import { computed, ref } from 'vue'
import { portfolioConfig } from '../data/portfolio.js'
import portraitSrc from '../assets/portrait.png'

const props = defineProps({
  t: { type: Object, required: true },
  lang: { type: String, required: true },
})

const resume = computed(
  () => portfolioConfig.links.resume[props.lang] || portfolioConfig.links.resume.en
)

const portraitOk = ref(false)

function formatPitch(text, boldParts) {
  let result = text
  boldParts.forEach((part) => {
    result = result.replace(part, `<b>${part}</b>`)
  })
  return result
}
</script>

<template>
  <header id="home" class="hero">
    <div class="wrap">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="hero-eyebrow">{{ t.hero.headline }}</p>
          <h1>
            <span class="hero-kicker">{{ t.hero.display }}</span>
            {{ portfolioConfig.name }}
          </h1>
          <p class="pitch" v-html="formatPitch(t.hero.pitch, t.hero.pitchBold)"></p>

          <div class="trust-row">
            <span v-for="item in t.hero.trust" :key="item" class="trust-item">
              {{ item }}
            </span>
          </div>

          <div class="cta-row">
            <a class="btn btn-light" :href="`mailto:${portfolioConfig.email}`">
              {{ t.hero.ctaPrimary }}
            </a>
            <a
              class="btn btn-outline-light"
              :href="resume.href"
              :download="resume.file"
            >
              {{ t.hero.ctaResume }}
            </a>
          </div>

          <div class="hero-social">
            <a
              :href="portfolioConfig.links.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.06 0 4.81 2.67 4.81 6.15V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
              </svg>
            </a>
            <a
              :href="portfolioConfig.links.github"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 10.38.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
          </div>

          <a class="hero-scroll-cue" href="#problems">
            <span>{{ t.hero.scrollCue }}</span>
            <span class="hero-scroll-cue-mark" aria-hidden="true"></span>
          </a>
        </div>

        <div class="hero-portrait">
          <img
            class="hero-portrait-img"
            :src="portraitSrc"
            :alt="portfolioConfig.name"
            @load="portraitOk = true"
            @error="portraitOk = false"
          >
          <div v-if="!portraitOk" class="hero-portrait-placeholder" aria-hidden="true">
            JFR
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
