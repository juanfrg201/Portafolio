<script setup>
defineProps({
  t: { type: Object, required: true },
})
</script>

<template>
  <section id="how" class="fade-in">
    <div class="wrap">
      <div class="label">{{ t.how.label }}</div>
      <h2 class="title">{{ t.how.title }}</h2>

      <div class="work-grid">
        <div v-for="item in t.how.items" :key="item.key" class="work-card">
          <div class="k">{{ item.key }}</div>
          <div class="v">{{ item.value }}</div>
          <div class="d">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
