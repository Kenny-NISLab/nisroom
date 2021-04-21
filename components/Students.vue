<template>
  <section
    class="h-full w-full grid grid-cols-4 md:grid-cols-6 items-center justify-items-center"
  >
    <template v-for="(student, index) in students">
      <Student
        :key="index"
        :index="index"
        :name="student.name"
        :status.sync="student.status"
        :toggle-status="toggleStatus"
      />
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { db } from '~/plugins/firebase.js'

export default {
  computed: {
    ...mapGetters({ students: 'getStudents' }),
  },
  created() {
    this.$store.dispatch('setStudentsRef', db.collection('students'))
  },
  methods: {
    toggleStatus(index) {
      const name = this.students[index].name
      const status = {
        status: !this.students[index].status,
      }
      const studentsRef = db.collection('students')
      studentsRef.doc(name).update(status)
    },
  },
}
</script>
