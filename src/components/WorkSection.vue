<script setup>
defineProps({
  t: { type: Object, required: true },
})
</script>

<template>
  <section id="work" class="fade-in">
    <div class="wrap">
      <div class="label">{{ t.work.label }}</div>
      <h2 class="title">{{ t.work.title }}</h2>
      <p class="section-intro">{{ t.work.intro }}</p>

      <article v-for="item in t.work.cases" :key="item.title" class="case">
        <div class="case-head">
          <h3>{{ item.title }}</h3>
          <span class="case-ver">{{ item.version }}</span>
        </div>
        <p class="desc">{{ item.desc }}</p>
        <div class="metrics">
          <div v-for="m in item.metrics" :key="m.label" class="metric">
            <b>{{ m.value }}</b>
            <span>{{ m.label }}</span>
          </div>
        </div>
        <div class="tags">
          <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
