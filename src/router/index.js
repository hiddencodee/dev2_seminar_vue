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

Vue.use(VueRouter);
/*
const requireLogin = () => (to, from, next) => {
  if (localStorage.getItem("isLogin") == true) {
    return next();
  } else {
    next("/");
  }

};
*/
const routes = [
  {
    path: "/user",
    component: BasicLayout,
    children: [
      {
        path: "/user/main",
        component: DashboardView,
      },
      {
        path: "/user/projects",
        component: ProjectListView,
      },
      {
        path: "/user/projects/register",
        component: ProjectRegisterView,
      },
      {
        path: "/user/issues",
        component: IssueListView,
      },
      {
        path: "/user/issues/register",
        component: IssueRegisterView,
      },
      {
        path: "/user/members",
        component: MemberListView,
      },
    ],
    /*
    beforeEnter: requireLogin(),
    */
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
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
