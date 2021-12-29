<template>
  <div class="w-4/5 flex flex-col gap-2">
    <div v-if="loading"><span>Loading...</span></div>
    <div v-else v-for="todo in todosFilter" :key="todo.id">
      <Todo :todo="todo" />
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";
import { mapState, mapGetters } from "vuex";

export default {
  name: "ListItems",
  components: {
    Todo,
  },
  async beforeMount() {
    await this.$store.dispatch("getTodos");
    console.log("hello 2", this.todos);
  },
  computed: {
    ...mapState(["filter", "loading"]),
    ...mapGetters(["todos"]),
    todosFilter() {
      if (this.filter === "todo") {
        return this.todos.filter((todo) => todo.status === "todo");
      }
      if (this.filter === "inProgress") {
        return this.todos.filter((todo) => todo.status === "inProgress");
      }
      if (this.filter === "done") {
        return this.todos.filter((todo) => todo.status === "done");
      }
      return this.todos;
    },
  },
};
</script>

<style></style>
