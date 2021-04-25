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
  data() {
    return {
      vh: 0,
    }
  },
  mounted() {
    this.setVh()
    document.addEventListener('touchmove', this.handleTouchMove, {
      passive: false,
    })
    window.addEventListener('resize', this.setVh)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setVh)
  },
  methods: {
    handleTouchMove(event) {
      event.preventDefault()
    },
    setVh() {
      this.vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${this.vh}px`)
    },
  },
}
</script>

<style lang="postcss">
body {
  height: 100%;
  overflow-y: hidden;
  overscroll-behavior: none;
}

.main {
  height: calc(100vh - 6.5rem);
  height: calc(var(--vh, 1vh) * 100 - 6.5rem);
}
</style>
