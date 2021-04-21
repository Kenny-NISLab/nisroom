import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

const createStore = () => {
  return new Vuex.Store({
    state: {
      students: [],
    },
    mutations: {
      ...vuexfireMutations,
    },
    actions: {
      setStudentsRef: firestoreAction(({ bindFirestoreRef }, ref) => {
        bindFirestoreRef('students', ref)
      }),
    },
    getters: {
      getStudents: (state) => {
        return state.students
      },
    },
  })
}

export default createStore
