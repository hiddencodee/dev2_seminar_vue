import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Join from '../views/JoinView.vue';
import GroupList from '../views/GroupListView.vue';
import GroupRegister from '../views/GroupRegisterView.vue';
import AttendanceList from '../views/AttendanceListView.vue';
import CounterA from '../views/CounterA.vue';
import store from '@/store';

// Vue와 VueRouter 연결
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/main',
    name: 'home',
    component: HomeView,
    beforeEnter: function(to, from, next) {
      if(store.state.loginStore.loginYN == true ){
        next();
      }else{
        alert('로그인 후 이용하실수 있습니다.')
        next("/");
      }
    }
  },
  {
    path: '/join',
    name: 'join',
    component: Join,
  },
  {
    path: '/groupList',
    name: 'groupList',
    component: GroupList,
    beforeEnter: function(to, from, next) {
      if(store.state.loginStore.loginYN == true ){
        next();
      }else{
        alert('로그인 후 이용하실수 있습니다.')
        next("/");
      }
    }
  },
  {
    path: '/groupRegister',
    name: 'groupRegister',
    component: GroupRegister,
  },
  {
    path: '/vuexTest',
    name: 'vuexTest',
    component: CounterA,
  },
  {
    path: '/attendanceList',
    name: 'attendanceList',
    component: AttendanceList,
    beforeEnter: function(to, from, next) {
      if(store.state.loginStore.loginYN == true ){
        next();
      }else{
        alert('로그인 후 이용하실수 있습니다.')
        next("/");
      }
    }
  }
];

// VueRouter에 route를 등록하고 설정한다.
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});


// 설정한 VueRouter 내보낸다.
export default router;
