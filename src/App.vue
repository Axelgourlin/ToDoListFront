<template>
  <div
    class="container min-w-full bg-gray-100 h-screen text-center mx-auto flex flex-col items-center"
  >
    <h1 class="text-2xl p-8">My Todo</h1>
    <div class="py-2 flex justify-between w-4/5">
      <Input @submitTodo="submitTodo" />
      <Filter />
    </div>
    <TitleBar class="py-1 mt-2" />
    <br />
    <TodoList />
    <TodoInfo />
  </div>
</template>

<script>
import Input from "./components/Input";
import TitleBar from "./components/TitleBar";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import TodoInfo from "./components/TodoInfo";

export default {
  name: "App",
  components: {
    Input,
    TitleBar,
    Filter,
    TodoList,
    TodoInfo,
  },
  methods: {
    submitTodo(text) {
      this.$store.dispatch("addTodo", text);
    },
  },
};
</script>

<style></style>
