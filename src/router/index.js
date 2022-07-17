import Vue from "vue";
import VueRouter from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import ProjectRegisterView from "../views/ProjectRegisterView.vue";
import BasicLayout from "@/layouts/CommonLayout.vue";
import MemberRegisterView from "../views/MemberRegisterView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const requireLogin = () => (to, from, next) => {
  if (from.fullPath != "/login") {
    if (localStorage.getItem("isLogin") == true) {
      return next();
    } else {
      next("/login");
    }
  } else {
    return next();
  }
};

const routes = [
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/",
        component: DashboardView,
      },
      {
        path: "projects",
        component: ProjectListView,
      },
      {
        path: "projects/register",
        component: ProjectRegisterView,
      },
    ],
    beforeEnter: requireLogin(),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    component: MemberRegisterView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
