import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TodoApp from "../views/TodoApp.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "App",
    component: TodoApp
  },
  {
    path: "/todo",
    name: "Todo",
    component: TodoApp
  },
  {
    path: "/completed",
    name: "Completed",
    component: TodoApp
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
