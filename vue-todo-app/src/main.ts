import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Todo from "./components/todo/Todo.vue"
import TodoAdd from "./components/todo/TodoAdd.vue"
import TodoList from "./components/todo/TodoList.vue"

Vue.component("Todo", Todo)
Vue.component("TodoAdd", TodoAdd)
Vue.component("TodoList", TodoList)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
