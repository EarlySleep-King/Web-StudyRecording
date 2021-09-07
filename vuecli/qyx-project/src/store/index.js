import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const moduleA = {
  state:{
    username:"EarlySleep-King"
  }
}
export default new Vuex.Store({
  state: {
    num:20
  },
  mutations: {
    add(state){
      ++state.num;
    },
    reduce(state){
      --state.num;
    }
  },
  getters:{
    newCount(state){
      return state.num+100;
    }
  },
  actions: {
    addAction({commit}){
      commit('add');
    }
  },
  modules: {
    users:moduleA
  }
})
