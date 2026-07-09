<script setup>
defineProps({
  t: { type: Object, required: true },
})
</script>

<template>
  <section id="experience" class="fade-in">
    <div class="wrap">
      <div class="label">{{ t.experience.label }}</div>
      <h2 class="title">{{ t.experience.title }}</h2>

      <div class="changelog">
        <div v-for="entry in t.experience.entries" :key="entry.tag" class="entry">
          <span class="tag">{{ entry.tag }}</span>
          <span class="when">{{ entry.when }}</span>
          <h3>{{ entry.title }}</h3>
          <div class="role">{{ entry.role }}</div>
          <ul>
            <li v-for="bullet in entry.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
