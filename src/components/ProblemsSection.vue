<script setup>
const iconPaths = {
  rescue: ['M13 3 5 13h6l-1 8 8-10h-6l1-8z'],
  infra: ['M4 5h16v5H4z', 'M4 14h16v5H4z', 'M7 7.5h.01', 'M7 16.5h.01'],
  product: ['M4 5h7v7H4z', 'M13 5h7v4h-7z', 'M13 11h7v8h-7z', 'M4 14h7v5H4z'],
  ai: ['M12 3v3', 'M12 18v3', 'M4.9 6.5 7 8.2', 'M17 15.8l2.1 1.7', 'M4.9 17.5 7 15.8', 'M17 8.2l2.1-1.7', 'M9 9h6v6H9z'],
}

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

      <div class="services-grid">
        <article
          v-for="item in t.problems.items"
          :key="item.title"
          class="service-card"
        >
          <div class="service-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path
                v-for="d in (iconPaths[item.icon] || iconPaths.product)"
                :key="d"
                :d="d"
              />
            </svg>
          </div>
          <h3>{{ item.title }}</h3>
          <p class="service-desc">{{ item.desc }}</p>
          <ul class="service-points">
            <li v-for="point in item.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
