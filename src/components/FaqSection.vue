<script setup>
import { ref } from 'vue'

defineProps({
  t: { type: Object, required: true },
})

const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="fade-in">
    <div class="wrap">
      <div class="label">{{ t.faq.label }}</div>
      <h2 class="title">{{ t.faq.title }}</h2>
      <p class="section-intro">{{ t.faq.intro }}</p>

      <div class="faq-list">
        <div
          v-for="(item, index) in t.faq.items"
          :key="item.q"
          class="faq-item"
          :class="{ open: openIndex === index }"
        >
          <button class="faq-question" @click="toggle(index)">
            {{ item.q }}
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-answer">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
