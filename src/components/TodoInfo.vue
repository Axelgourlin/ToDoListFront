<template>
  <div
    class="w-4/5 bg-sky-300 flex mt-4 px-4 justify-between items-center rounded-sm"
  >
    <h3>Total Todos : {{ totalTodos }}</h3>
    <div class="flex gap-4">
      <p>Todo : {{ totalTodo }}</p>
      |
      <p>In Progress : {{ totalInProgress }}</p>
      |
      <p>Done : {{ totalDone }}</p>
    </div>
    <button
      @click="clearAllDone"
      class="my-1 px-2 -py-1 bg-gray-200 rounded border-black border"
    >
      Clear all done
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoInfo",
  computed: {
    ...mapGetters(["todos"]),
    totalTodos() {
      return this.todos.length;
    },
    totalTodo() {
      return this.todos.filter((todo) => todo.status === "todo").length;
    },
    totalInProgress() {
      return this.todos.filter((todo) => todo.status === "inProgress").length;
    },
    totalDone() {
      return this.todos.filter((todo) => todo.status === "done").length;
    },
  },
  methods: {
    clearAllDone() {
      this.$store.dispatch("deleteAllDone");
    },
  },
};
</script>
