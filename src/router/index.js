import Vue from "vue";
import VueRouter from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import ProjectRegisterView from "../views/ProjectRegisterView.vue";
import IssueListView from "../views/IssueListView";
import IssueRegisterView from "../views/IssueRegisterView";
import MemberListView from "../views/MemberListView";
import BasicLayout from "@/layouts/CommonLayout.vue";
import MemberRegisterView from "../views/MemberRegisterView.vue";
import LoginView from "../views/LoginView.vue";
import VuexPracticeView from "../views/VuexPractice.vue";

Vue.use(VueRouter);


const requireLogin = () => (to, from, next) => { 
  if (localStorage.getItem("isLogin") == 'true') {   
    
    return next();
  } else {
    return next('/');
  }

};


const routes = [
  {
    path: "/user",
    component: BasicLayout,
    beforeEnter: requireLogin(),
    children: [
      {
        path: "/user/main",
        name: "main",
        component: DashboardView,
      },
      {
        path: "/user/projects",
        name: "ProjectList",
        component: ProjectListView,
      },
      {
        path: "/user/projects/register",
        name: "ProjectRegister",
        component: ProjectRegisterView,
      },
      {
        path: "/user/issues",
        name: "IssueList",
        component: IssueListView,
      },
      {
        path: "/user/issues/register",
        name: "IssueRegister",
        component: IssueRegisterView,
      },
      {
        path: "/user/members",
        name: "members",
        component: MemberListView,
      },
    ],   
    
  },
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    component: MemberRegisterView,
  },
  {
    path: "/vuexPractice",
    component: VuexPracticeView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

/*
router.beforeEach(async (to) => {
  const isLogin = localStorage.getItem("isLogin");
  
  if (isLogin == 'false' && to.name !== 'login') { 
    console.log(to);
    return '/'
  } 
  console.log(to);
  return 에 넣을 수 있는 종류 두가지
  1. false : cancel the current navigation. If the browser Url was changed it will be reset to that of the from route.
  2. Route Location: Redirect to a different location by passing a route location as if you were calling outer.push()
  replace: true, or name: 'home'
  
})
*/

export default router;
