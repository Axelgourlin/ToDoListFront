<template>
  <div class="w-4/5" v-for="todo in todosFilter(filterData)" :key="todo.id">
    <Todo :todo="todo" />
  </div>
</template>

<script>
import Todo from "./Todo";
import { mapState } from "vuex";

export default {
  name: "ListItems",
  components: {
    Todo,
  },
  data() {
    return {
      filterData: this.filter,
      todosData: this.todos,
    };
  },
  computed: {
    ...mapState(["todos", "filter"]),
    todosFilter(filter) {
      if (this.filter === "") {
        return this.todos;
      }
      return this.todosData.filter((todo) => todo.status === filter);
    },
  },
};
</script>

<style></style>
