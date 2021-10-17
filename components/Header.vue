<template>
  <header class="h-20 flex justify-center items-center flex-col">
    <h1>
      <a href="/">
        <img src="@/assets/images/NISROOM.png" alt="NISROOM" class="max-h-12" />
      </a>
    </h1>
    <p class="mt-2 text-xs">Updated at {{ updatedTime }}</p>
  </header>
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
