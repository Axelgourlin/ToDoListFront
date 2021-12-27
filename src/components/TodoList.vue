<template>
  <div class="w-4/5" v-for="todo in todos" :key="todo.id">
    <Todo :todo="todo" @refreshTodo="refreshTodo" />
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

  computed: {
    ...mapState(["todos"]),
  },
  methods: {
    onChange(e) {
      this.$emit("handleStatus", e.target.value);
    },
    refreshTodo() {
      this.$forceUpdate();
    },
  },
};
</script>

<style></style>
