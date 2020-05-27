import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: "light",
    user: ""
  },
  mutations: {
    changeTheme(state, val) {
      state.theme = val
    },
    changeUser(state, val) {
      state.user = val
    }
  },
  actions: {
    changeTheme({ commit }, value) {
      commit("changeTheme", value)
    }
  },
  modules: {}
})
