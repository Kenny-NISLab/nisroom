<template>
  <article class="w-16 md:w-24">
    <button class="outline" @click="toggleStatus(id, status)">
      <img
        :src="avater"
        alt="test"
        class="border-4 rounded-xl border-gray-400 filter"
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
    avater: {
      type: String,
      required: true,
    },
    toggleStatus: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isActive() {
      return {
        'border-green-400': this.status,
        isActive: this.status,
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.outline {
  outline: none;
}

.filter {
  filter: grayscale(75%);
}

.isActive {
  filter: grayscale(0);
}
</style>
