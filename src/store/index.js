import { createStore } from "vuex";

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
  },
  getters: {
    // eslint-disable-next-line
    totalTodos: state => state.todos.length,
    totalTodosTodo(state) {
      // eslint-disable-next-line
      return state.todos.filter(todo => todo.status === "todo").length;
    },
    totalTodosInProgress(state) {
      // eslint-disable-next-line
      return state.todos.filter(todo => todo.status === "inProgress").length;
    },
    totalTodosDone(state) {
      // eslint-disable-next-line
      return state.todos.filter(todo => todo.status === "done").length;
    },
  },
  mutations: {
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
    UPDATE_STATUS(state, todo) {
      state.todos[todo.id - 1].status = todo.status;
    },
    UPDATE_TEXT(state, todo) {
      state.todos[todo.id - 1].text = todo.text;
    },
    DELETED_TODO(state, todo) {
      // eslint-disable-next-line
      const todoId = state.todos.findIndex(t => t.id === todo.id);
      console.log(todoId);
      state.todos[todoId] = state.todos.slice(todoId, 1);
    },
  },
  actions: {
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
  },
});
