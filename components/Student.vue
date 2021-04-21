<template>
  <article class="w-16 md:w-20">
    <button class="outline" @click="toggleStatus()">
      <img
        src="../assets/images/test.jpg"
        alt="test"
        class="border-4 rounded-xl border-gray-400"
        :class="isActive"
      />
    </button>
    <h2 class="text-xs md:text-base text-center">{{ name }}</h2>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    isActive() {
      return {
        'border-green-400': this.status,
      }
    },
    localStatus: {
      get() {
        return this.status
      },
      set(value) {
        this.$emit('update:status', value)
      },
    },
  },
  methods: {
    toggleStatus() {
      this.localStatus = !this.localStatus
    },
  },
}
</script>

<style lang="postcss" scoped>
.outline {
  outline: none;
}
</style>
