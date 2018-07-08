// Action  文档地址 https://vuex.vuejs.org/zh/guide/actions.html
export default {
  // SET_INFO: ({ commit },payload) => {
  //   commit("SET_INFO",payload);
  // },
  // GET_DATA:({commit}) => {
  //   commit('GET_DATA');
  // },
  CHANGE_AGENT_FLAG:({commit},payload)=>{
    commit('CHANGE_AGENT_FLAG',payload);
  },
  SET_HEADER_FLAG:({commit},value)=>{
    commit('SET_HEADER_FLAG',value);
  }
};