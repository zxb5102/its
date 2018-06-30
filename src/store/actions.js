// Action  文档地址 https://vuex.vuejs.org/zh/guide/actions.html
export default {
  // SET_INFO: ({ commit },payload) => {
  //   commit("SET_INFO",payload);
  // },
  // GET_DATA:({commit}) => {
  //   commit('GET_DATA');
  // },
  SET_HEADER_FLAG:({commit},value)=>{
    commit('SET_HEADER_FLAG',value);
  }
};