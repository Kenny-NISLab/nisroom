<template>
  <section class="h-full flex flex-wrap justify-center content-around">
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
