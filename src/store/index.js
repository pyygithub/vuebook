
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  val: (state) => state.count % 2 ? '偶数': '奇数'
}

const store = new Vuex.Store({
  state,
  getters,
  mutations
})
