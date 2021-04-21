<template>
  <div class="container">
    <h1 class="font-bold text-3xl">Nuxt Tailwind Templete</h1>
    <nuxt-link to="/_tailwind/" class="underline mt-4"
      >tailwind-config-viewer</nuxt-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.container {
  @apply min-h-screen flex flex-col justify-center items-center text-center mx-auto;
}
</style>
