// src/vuex/store.js
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  isAuth: false,
  userId : "",
  token : "",
  waveSurferReferer : {},
  playlist : [],
  nowPlay : -1
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})