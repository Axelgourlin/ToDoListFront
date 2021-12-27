<template>
  <div class="w-4/5 bg-sky-300 flex mt-4 px-4 justify-between rounded-sm">
    <h3>Total Todos : {{ totalTodos }}</h3>
    <div class="flex gap-4">
      <p>Todo : {{ totalTodosTodo }}</p>
      |
      <p>In Progress : {{ totalTodosInProgress }}</p>
      |
      <p>Done : {{ totalTodosDone }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoInfo",
  computed: {
    ...mapGetters([
      "totalTodos",
      "totalTodosTodo",
      "totalTodosInProgress",
      "totalTodosDone",
    ]),
  },
};
</script>
