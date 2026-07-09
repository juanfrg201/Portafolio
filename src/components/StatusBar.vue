<script setup>
import { portfolioConfig } from '../data/portfolio.js'

defineProps({
  t: { type: Object, required: true },
})
</script>

<template>
  <div class="statusbar">
    <div class="wrap">
      <span>
        <span class="dot">●</span>
        <span class="hl">{{ t.statusbar.available }}</span>
        — {{ t.statusbar.schedule }} ({{ portfolioConfig.availability.hours }})
      </span>
      <span>{{ portfolioConfig.availability.timezone }} · {{ t.statusbar.overlap }}</span>
    </div>
  </div>
</template>
