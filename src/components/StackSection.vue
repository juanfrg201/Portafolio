<script setup>
defineProps({
  t: { type: Object, required: true },
})
</script>

<template>
  <section id="stack" class="fade-in">
    <div class="wrap">
      <div class="label">{{ t.stack.label }}</div>
      <h2 class="title">{{ t.stack.title }}</h2>
      <p class="section-intro">{{ t.stack.intro }}</p>

      <div class="stack-grid">
        <div v-for="cat in t.stack.categories" :key="cat.name" class="stack-cat">
          <h3>{{ cat.name }}</h3>
          <ul>
            <li v-for="item in cat.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
