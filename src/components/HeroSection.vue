<script setup>
import { portfolioConfig } from '../data/portfolio.js'

const props = defineProps({
  t: { type: Object, required: true },
})

function formatPitch(text, boldParts) {
  let result = text
  boldParts.forEach((part) => {
    result = result.replace(part, `<b>${part}</b>`)
  })
  return result
}
</script>

<template>
  <header class="hero fade-in">
    <div class="wrap">
      <div class="prompt">
        <span class="sym">$</span> {{ t.hero.prompt }}
      </div>

      <h1>
        {{ portfolioConfig.name }}<span class="type-cursor"></span>
      </h1>

      <p class="role">{{ t.hero.role }}</p>

      <p class="pitch" v-html="formatPitch(t.hero.pitch, t.hero.pitchBold)"></p>

      <div class="trust-row">
        <span v-for="item in t.hero.trust" :key="item" class="trust-item">
          {{ item }}
        </span>
      </div>

      <div class="cta-row">
        <a class="btn btn-primary" :href="`mailto:${portfolioConfig.email}`">
          {{ t.hero.ctaPrimary }}
        </a>
        <a class="btn btn-ghost" href="#apps">{{ t.hero.ctaWork }}</a>
        <a class="btn btn-ghost" :href="portfolioConfig.links.resume">
          {{ t.hero.ctaResume }}
        </a>
      </div>
    </div>
  </header>
</template>
