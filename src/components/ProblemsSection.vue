<script setup>
defineProps({
  t: { type: Object, required: true },
})
</script>

<template>
  <section id="problems" class="fade-in">
    <div class="wrap">
      <div class="label">{{ t.problems.label }}</div>
      <h2 class="title">{{ t.problems.title }}</h2>
      <p class="section-intro">{{ t.problems.intro }}</p>

      <div class="problem-list">
        <div
          v-for="(item, index) in t.problems.items"
          :key="item.title"
          class="problem"
        >
          <div class="num">{{ String(index + 1).padStart(2, '0') }}</div>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
