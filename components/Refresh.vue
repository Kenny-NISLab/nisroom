<template>
  <button
    class="w-12 h-12 mb-4 rounded-full bg-primary flex justify-center items-center outline transition-all transform active"
    @click="getData"
  >
    <svg
      class="w-6 h-6 text-secondary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    getData: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="postcss" scoped>
.outline {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.active:active {
  @apply scale-90 -rotate-45;
}
</style>
