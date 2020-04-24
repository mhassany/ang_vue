import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import TodoApp from "./components/todo/TodoApp.vue"
import TodoList from "./components/todo/TodoList.vue"
import Todo from "./components/todo/Todo.vue"
import TodoAdd from "./components/todo/TodoAdd.vue"

Vue.component("TodoApp", TodoApp)
Vue.component("TodoList", TodoList)
Vue.component("Todo", Todo)
Vue.component("TodoAdd", TodoAdd)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
