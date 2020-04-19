import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import { Todo } from "./Todo";

const http = axios.create({ baseURL: 'http://localhost:8000/api/' })
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tab: 'todo',
    data: [],
    trash: false
  },
  mutations: {
    TOGGLE_TRASH(state) {
      state.trash = !state.trash
    },
    SET_TAB(state, tab) {
      state.tab = tab
    },
    SET_DATA(state, todos) {
      state.data = todos
    },
  },
  actions: {
    toggleTrash(context) {
      context.commit('TOGGLE_TRASH')
    },
    setTab(context, tab: 'todo' | 'completed') {
      context.commit('SET_TAB', tab)
    },
    reload(context) {
      if (context.state.tab === 'todo') {
        http.get('todo').then(resp => context.commit('SET_DATA', resp.data))
      } else if (context.state.tab === 'completed') {
        http.get('todo/completed').then(resp => context.commit('SET_DATA', resp.data))
      }
    },
    add(context, todo: Todo) {
      http.post('todo', todo).then((resp: any) => {
        context.dispatch('reload');
        todo.label = '';
      });
    },
    update(context, todo: Todo) {
      http.put('todo/' + todo.id, todo).then((resp: any) => {
        context.dispatch('reload');
      });
    },
    destroy(context, id: number) {
      http.delete('todo/' + id).then((resp: any) => {
        context.dispatch('reload');
      });
    }
  },
  modules: {}
});
