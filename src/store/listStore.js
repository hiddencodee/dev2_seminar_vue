import axios from "axios";

/* eslint-disable no-plusplus */
const listStore = {
  namespaced: true,
  state: {
    groupDataList: [],
    attdDataList: []
  },
  getters: {

  },
  mutations: {
    dataSet(state, data){
      state.groupDataList = data
    },
    attdSet(state, data){
      state.attdDataList = data
    }
  },
  actions: {
    groupList( {commit} ){
      var listArr = [];
      var map = {};
      return axios.get('/api/member/memberList')
        .then((response) => {
            for(var i=0; i<response.data.length; i++){
              map = { "이름" : response.data[i].mbrNm,
                      "부서" : response.data[i].mbrDept,
                      "직위" : response.data[i].mbrType ,
                      "등록일시" : response.data[i].regDt,
                      "권한" :  response.data[i].mbrAuth }
              listArr.push(map)
            }
            commit('dataSet',listArr)
        })
    },
    attendanceList( {commit} ){

      var attdlistArr = [];
      var map = {};
      return axios.get('/api/attendance/attendanceList')
        .then((response) => {
            for(var i=0; i<response.data.length; i++){
              map = { "이름" : response.data[i].mbrNm,
                      "부서" : response.data[i].mbrDept,
                      "직위" : response.data[i].mbrType ,
                      "종류" : response.data[i].attdType,
                      "근태일자" :  response.data[i].attdDt,
                      "등록일시" :  response.data[i].regDt,
                      "승인일시" :  response.data[i].appDt,
                      "승인상태" :  response.data[i].appStus}
              attdlistArr.push(map)
            }
            commit('attdSet', attdlistArr)
        })
    }
  },
};

export default listStore;
