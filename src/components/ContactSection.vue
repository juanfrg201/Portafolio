<script setup>
import { portfolioConfig } from '../data/portfolio.js'

defineProps({
  t: { type: Object, required: true },
})

const phoneDigits = portfolioConfig.phone.replace(/\D/g, '')
const whatsappUrl = `https://wa.me/${phoneDigits}`

const items = [
  {
    href: portfolioConfig.links.linkedin,
    label: 'linkedin.com/in/jfruizg',
    external: true,
    icon: 'linkedin',
  },
  {
    href: portfolioConfig.links.github,
    label: 'github.com/juanfrg2001',
    external: true,
    icon: 'github',
  },
  {
    href: `mailto:${portfolioConfig.email}`,
    label: portfolioConfig.email,
    external: false,
    icon: 'email',
  },
  {
    href: null,
    label: portfolioConfig.location,
    external: false,
    icon: 'pin',
  },
  {
    href: whatsappUrl,
    label: portfolioConfig.phone,
    external: true,
    icon: 'phone',
  },
]
</script>

<template>
  <section id="contact" class="contact fade-in">
    <div class="wrap">
      <div class="label">{{ t.contact.label }}</div>
      <h2 class="title">{{ t.contact.title }}</h2>
      <p>{{ t.contact.desc }}</p>

      <ul class="contact-details stagger">
        <li v-for="item in items" :key="item.label">
          <a
            v-if="item.href"
            class="contact-detail"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
          >
            <span class="contact-detail-icon" :data-icon="item.icon" aria-hidden="true"></span>
            {{ item.label }}
          </a>
          <span v-else class="contact-detail">
            <span class="contact-detail-icon" :data-icon="item.icon" aria-hidden="true"></span>
            {{ item.label }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>
