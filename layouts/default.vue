<template>
  <div>
    <Header />
    <main class="main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('touchmove', this.handleTouchMove, {
      passive: false,
    })
  },
}
</script>

<style lang="postcss">
body {
  height: 100vh;
  overflow-y: hidden;
}

.main {
  height: calc(100vh - 6.5rem);
}
</style>
