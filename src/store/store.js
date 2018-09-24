import Vue from 'vue'
import Vuex from 'vuex'
import menu from './module/menu'
import users from './module/users'
import status from './module/status'
// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  /* state: {},
  mutations,
  actions,
  getters */
  modules: {
    menu,
    users,
    status
  }
})
