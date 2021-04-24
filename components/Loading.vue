<template>
  <div>
    <transition name="loading">
      <div
        v-show="loading"
        class="fixed inset-0 bg-white z-10 flex justify-center items-center"
      >
        <img src="../static/twitter-card.png" alt="NISROOM" class="max-h-64" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    })
  },
}
</script>

<style scoped>
.loading-leave-active {
  transition: all 0.25s ease-out;
}
.loading-enter,
.loading-leave-to {
  opacity: 0;
}
</style>
