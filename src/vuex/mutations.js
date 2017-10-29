const mutations = {
  increment (state) {
    state.count++
  },
  toggleMenu (state) {
    state.menuCollapsed = !state.menuCollapsed
  }
}
export default mutations
