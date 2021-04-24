export const state = () => ({
  updatedTime: 'test',
})

export const mutations = {
  update(state, time) {
    state.updatedTime = time
  },
}
