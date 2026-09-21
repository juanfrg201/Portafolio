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
      <p class="section-intro">{{ t.experience.intro }}</p>

      <div class="timeline stagger">
        <article
          v-for="entry in t.experience.entries"
          :key="entry.when + entry.company"
          class="entry"
        >
          <span class="when">{{ entry.when }}</span>
          <h3>{{ entry.company }}</h3>
          <div class="role">{{ entry.title }} · {{ entry.role }}</div>
          <div v-if="entry.highlights?.length" class="entry-highlights">
            <div
              v-for="item in entry.highlights"
              :key="item.label"
              class="entry-highlight"
            >
              <b>{{ item.value }}</b>
              <span>{{ item.label }}</span>
            </div>
          </div>
          <p class="entry-context">{{ entry.context }}</p>
          <ul>
            <li v-for="bullet in entry.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
