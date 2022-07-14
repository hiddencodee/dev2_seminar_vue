import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import Join from '../views/JoinView.vue';
import GroupList from '../views/GroupListView.vue';

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
  },
];

// VueRouter에 route를 등록하고 설정한다.
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 설정한 VueRouter 내보낸다.
export default router;
