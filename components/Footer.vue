<template>
  <footer class="h-6 bg-primary text-center text-white">
    <p class="text-xs leading-loose">Updated at {{ updatedTime }}</p>
  </footer>
</template>

<script>
export default {
  computed: {
    updatedTime() {
      return this.$store.state.updatedTime
    },
  },
}
</script>
