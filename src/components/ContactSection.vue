<script setup>
import { portfolioConfig } from '../data/portfolio.js'

defineProps({
  t: { type: Object, required: true },
})

const whatsappUrl = `https://wa.me/${portfolioConfig.phone.replace(/\D/g, '')}`
</script>

<template>
  <section id="contact" class="contact fade-in">
    <div class="wrap">
      <div class="label">{{ t.contact.label }}</div>
      <h2>{{ t.contact.title }}</h2>
      <p>{{ t.contact.desc }}</p>

      <div class="contact-links">
        <a class="btn btn-primary" :href="`mailto:${portfolioConfig.email}`">
          {{ t.contact.email }}
        </a>
        <a
          class="btn btn-ghost"
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t.contact.phone }}
        </a>
        <a
          class="btn btn-ghost"
          :href="portfolioConfig.links.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t.contact.linkedin }}
        </a>
        <a
          class="btn btn-ghost"
          :href="portfolioConfig.links.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t.contact.github }}
        </a>
      </div>
    </div>
  </section>
</template>
