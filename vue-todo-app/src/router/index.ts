import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TodoPage from "../views/TodoPage.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "App",
    component: TodoPage
  },
  {
    path: "/todo",
    name: "Todo",
    component: TodoPage
  },
  {
    path: "/completed",
    name: "Completed",
    component: TodoPage
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
