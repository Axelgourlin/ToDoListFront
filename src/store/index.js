import { createStore } from "vuex";
import { fetchData } from "@/utils/fetch";

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        text: "My First todo",
        createdAt: "27/12/2021",
        status: "todo",
      },
      {
        id: 2,
        text: "My second todo",
        createdAt: "27/12/2021",
        status: "inProgress",
      },
      {
        id: 3,
        text: "My third tidi",
        createdAt: "27/12/2021",
        status: "done",
      },
    ],
    filter: "",
    loading: false,
  },
  getters: {
    // eslint-disable-next-line
    totalTodos: (state) => state.todos.length,
    totalTodosTodo(state) {
      // eslint-disable-next-line
      return state.todos.filter((todo) => todo.status === "todo").length;
    },
    totalTodosInProgress(state) {
      // eslint-disable-next-line
      return state.todos.filter((todo) => todo.status === "inProgress").length;
    },
    totalTodosDone(state) {
      // eslint-disable-next-line
      return state.todos.filter((todo) => todo.status === "done").length;
    },
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    ADD_TODO(state, text) {
      const date = new Date().toLocaleString("fr-FR").split(",")[0];
      const newTodo = {
        id: state.todos.length + 1,
        text: text,
        createdAt: date,
        status: "todo",
      };
      state.todos.push(newTodo);
    },
    GET_TODOS(state, todos) {
      state.todos = todos;
    },
    UPDATE_STATUS(state, todo) {
      state.todos[todo.id - 1].status = todo.status;
    },
    UPDATE_TEXT(state, todo) {
      state.todos[todo.id - 1].text = todo.text;
    },
    DELETED_TODO(state, todo) {
      fetchData("DELETE");
      state.todos = state.todos.filter((t) => t !== todo);
    },
    UPDATE_FILTER(state, value) {
      state.filter = value;
    },
  },
  actions: {
    getTodos({ commit }) {
      commit;
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
    updateFilter({ commit }, payload) {
      commit("UPDATE_FILTER", payload);
    },
  },
});
