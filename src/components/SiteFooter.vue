<script setup>
defineProps({
  t: { type: Object, required: true },
})
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      {{ t.footer }} — {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>
