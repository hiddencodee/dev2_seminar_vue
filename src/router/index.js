import Vue from "vue";
import VueRouter from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ProjectListView from "../views/ProjectListView.vue";
import BasicLayout from "@/layouts/CommonLayout.vue";

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
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
