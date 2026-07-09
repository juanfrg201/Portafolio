<script setup>
defineProps({
  t: { type: Object, required: true },
})
</script>

<template>
  <footer class="site-footer">
    {{ t.footer }} — {{ new Date().getFullYear() }}
  </footer>
</template>
