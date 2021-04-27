<template>
  <section
    class="h-full w-full grid grid-cols-4 md:grid-cols-6 items-center justify-items-center"
  >
    <template v-for="(student, index) in updatedStudents">
      <Student
        :id="student.id"
        :key="index"
        :index="index"
        :name="student.j_last_name + ' ' + student.j_first_name"
        :avatar="student.avatar"
        :status.sync="student.is_stay"
        :toggle-status="toggleStatus"
      />
    </template>
    <Refresh :get-data="getData" :loading="loading" />
  </section>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    students: {
      type: Array,
      required: true,
      default: () =>
        Array(23).fill({
          id: 0,
          j_last_name: 'Not',
          j_first_name: 'Found',
          avatar: '/_nuxt/assets/images/defaultAvatar.jpg',
          is_stay: false,
        }),
    },
  },
  data() {
    return {
      updatedStudents: this.students,
      loading: false,
      url: '',
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    this.url = window.location.href
    setInterval(() => {
      this.getData()
    }, 60 * 60 * 1000)
  },
  methods: {
    getData() {
      axios
        .get(this.$config.apiUrl + '/students', {
          headers: { 'x-api-key': this.$config.apiKey },
        })
        .then((res) => {
          this.updatedStudents = res.data.Items
        })
        .catch(() => {})
      this.setUpdatedTime()
    },
    toggleStatus(id, flag) {
      if (!this.url.indexOf(this.$config.consoleUrl)) {
        this.loading = true
        axios
          .patch(
            this.$config.apiUrl + '/students/' + id,
            {
              is_stay: !flag,
            },
            {
              headers: { 'x-api-key': this.$config.apiKey },
            }
          )
          .then(() => {
            this.getData()
            this.loading = false
          })
          .catch((error) => {
            alert(error)
          })
      }
    },
    setUpdatedTime() {
      this.$store.commit('update', this.$moment().format('MM/DD HH:mm'))
    },
  },
}
</script>
