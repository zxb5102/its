import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

// 文档详细地址  https://vuex.vuejs.org/zh/api/#vuex-store-%E6%9E%84%E9%80%A0%E5%99%A8%E9%80%89%E9%A1%B9
export function createStore () {
  return new Vuex.Store({
    state: {
      headerFlag:'index',
      isPda:false,
    },
    actions,
    mutations,
    getters
  })
}
