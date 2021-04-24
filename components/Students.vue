<template>
  <section
    class="h-full w-full grid grid-cols-4 md:grid-cols-6 items-center justify-items-center"
  >
    <template v-for="(student, index) in students">
      <Student
        :id="student.id"
        :key="index"
        :index="index"
        :name="student.j_last_name + ' ' + student.j_first_name"
        :avater="student.avatar"
        :status.sync="student.is_stay"
        :toggle-status="toggleStatus"
      />
    </template>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      students: [],
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    setInterval(() => {
      this.getData()
    }, 24 * 60 * 60 * 1000)
  },
  methods: {
    getData() {
      axios
        .get(process.env.AWS_API_URL + '/students', {
          headers: { 'x-api-key': process.env.AWS_API_KEY },
        })
        .then((res) => {
          this.students = res.data.Items
        })
    },
    toggleStatus(id, flag) {
      axios
        .patch(
          process.env.AWS_API_URL + '/students/' + id,
          {
            is_stay: !flag,
          },
          {
            headers: { 'x-api-key': process.env.AWS_API_KEY },
          }
        )
        .then(() => {
          this.getData()
        })
        .catch((error) => {
          alert(error)
        })
    },
  },
}
</script>
