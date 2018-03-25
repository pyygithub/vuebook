
const mutations = {
  add(state, count) {
    state.count += count;
  },
  minus(state) {
    state.count -= 1;
  }
};

export default mutations;
