export default {
  // SET_INFO: (state, payload) => {
  //   state.info = payload.info;
  // },
  // GET_DATA:(state) => {
  //   state.dataList = [1,2,3,4,5,6];
  // }
  CHANGE_AGENT_FLAG:(state,payload)=>{
    state.isPda = payload.value;
  },
  SET_HEADER_FLAG:(state,value)=>{
    state.headerFlag = value;
  }
};