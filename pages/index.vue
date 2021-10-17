<template>
  <Students :students="students" />
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ $config }) {
    return await axios
      .get($config.apiUrl + '/students', {
        headers: { 'x-api-key': $config.apiKey },
      })
      .then((res) => {
        res.data.Items.sort(function (a, b) {
          return a.id - b.id
        })
        return {
          students: res.data.Items,
        }
      })
      .catch(() => {
        return {
          students: Array(23).fill({
            id: 0,
            j_last_name: 'Not',
            j_first_name: 'Found',
            avatar: '/_nuxt/assets/images/defaultAvatar.jpg',
            is_stay: false,
          }),
        }
      })
  },
}
</script>
