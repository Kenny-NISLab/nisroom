export const state = () => ({
  updatedTime: '',
})

export const mutations = {
  update(state, time) {
    state.updatedTime = time
  },
}
