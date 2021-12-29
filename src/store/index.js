import { createStore } from "vuex";
import { fetchData } from "@/utils/fetch";

const url = "http://localhost:3000/todos";

export default createStore({
  state: {
    todos: [],
    filter: "all",
    loading: false,
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    GET_TODOS(state, todosData) {
      state.todos = todosData;
      // console.log("todosData 2:", state.todos);
    },
    ADD_TODO(state, text) {
      const date = new Date().toLocaleString("fr-FR").split(",")[0];
      const newTodo = {
        text: text,
        createdAt: date,
        status: "todo",
      };
      fetchData(url, "POST", newTodo);
    },
    UPDATE_TODO(todo) {
      fetchData(url, "PUT", todo);
    },
    DELETED_TODO(todo) {
      const id = todo.id;
      fetchData(url, "DELETE", id);
    },
    DELETE_ALL_DONE() {
      fetchData(url + "/deleteAll", "DELETE");
    },
    UPDATE_FILTER(state, value) {
      state.filter = value;
    },
  },
  actions: {
    async getTodos({ commit }) {
      commit("SET_LOADING", true);
      return await fetchData("http://localhost:3000/todos", "GET").then(
        (todos) => {
          commit("GET_TODOS", todos);
          commit("SET_LOADING", false);
        }
      );
    },
    addTodo({ commit }, payload) {
      commit("ADD_TODO", payload);
    },
    updateTodoStatus({ commit }, payload) {
      commit("UPDATE_STATUS", payload);
    },
    updateTodoText({ commit }, payload) {
      commit("UPDATE_TEXT", payload);
    },
    deleteTodo({ commit }, payload) {
      commit("DELETED_TODO", payload);
    },
    deleteAllDone({ commit }, payload) {
      commit("DELETE_ALL_DONE", payload);
    },
    updateFilter({ commit }, payload) {
      commit("UPDATE_FILTER", payload);
    },
  },
});
