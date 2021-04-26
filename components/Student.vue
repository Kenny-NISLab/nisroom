<template>
  <article class="w-16 md:w-24">
    <button class="outline" @click="toggleStatus(id, status)">
      <img
        :src="avatar"
        alt="test"
        class="border-4 w-16 md:w-24 h-16 md:h-24 rounded-xl border-gray-400 filter"
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
      default: 'Not Found',
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
    avatar: {
      type: String,
      required: true,
      default: '/_nuxt/assets/images/defaultAvatar.jpg',
    },
    toggleStatus: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
      default: 0,
    },
    id: {
      type: Number,
      required: true,
      default: 0,
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
