import Vue from "vue";
import VueRouter from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import ProjectRegisterView from "../views/ProjectRegisterView.vue";
import BasicLayout from "@/layouts/CommonLayout.vue";
import MemberRegisterView from "../views/MemberRegisterView.vue";

Vue.use(VueRouter);

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
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
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
