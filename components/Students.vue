<template>
  <section
    class="h-full w-full grid grid-cols-4 md:grid-cols-6 items-center justify-items-center"
  >
    <template v-for="(student, index) in students">
      <Student
        :key="index"
        :name="student.name"
        :status.sync="student.status"
      />
    </template>
  </section>
</template>

<script>
export default {
  data() {
    return {
      students: [
        {
          name: 'test',
          status: true,
        },
        {
          name: 'test2',
          status: true,
        },
        {
          name: 'test3',
          status: false,
        },
        {
          name: 'test4',
          status: true,
        },
        {
          name: 'test5',
          status: false,
        },
        {
          name: 'test',
          status: true,
        },
        {
          name: 'test2',
          status: true,
        },
        {
          name: 'test3',
          status: false,
        },
        {
          name: 'test4',
          status: true,
        },
        {
          name: 'test5',
          status: false,
        },
        {
          name: 'test',
          status: true,
        },
        {
          name: 'test2',
          status: true,
        },
        {
          name: 'test3',
          status: false,
        },
        {
          name: 'test4',
          status: true,
        },
        {
          name: 'test5',
          status: false,
        },
        {
          name: 'test',
          status: true,
        },
        {
          name: 'test2',
          status: true,
        },
        {
          name: 'test3',
          status: false,
        },
        {
          name: 'test4',
          status: true,
        },
        {
          name: 'test5',
          status: false,
        },
        {
          name: 'test',
          status: true,
        },
        {
          name: 'test2',
          status: true,
        },
        {
          name: 'test3',
          status: false,
        },
      ],
    }
  },
}
</script>
