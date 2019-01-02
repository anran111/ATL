import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userNo:'',
    userName:'',
    status:'logout',
  },

  getters: {
  },
  mutations: {
    SET_USERNO(state, content) {
      state.userNo = content.userNo;
      window.localStorage.setItem("userNo",content.userNo);
    }, 
    SET_USERNAME(state, content) {
      state.userName = content.userName;
      window.localStorage.setItem("userName",content.userName);
    }, 
    SET_STATUS(state, content) {
      state.status = content.status;
      window.localStorage.setItem("status",content.status);
    }, 
  },
  actions: {
    setUserNo: ({ commit }, content) => commit('SET_USERNO', content),
    setUserName: ({ commit }, content) => commit('SET_USERNAME', content),
    setStatus: ({ commit }, content) => commit('SET_STATUS', content),
  }
})
