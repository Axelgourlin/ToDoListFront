<template>
  <div class="w-6/12 text-left">
    <input
      type="text"
      placeholder="My new todo"
      v-model="todo"
      class="w-9/12 mr-3 shadow bg-gray-200 focus:shadow-outline focus:outline-none text-gray-600 font-bold py-2 px-4 rounded focus:bg-sky-300 focus:text-white"
    />
    <button
      @click="submitTodo"
      type="submit"
      id="addTodo"
      class="hover:bg-sky-300 p-2 rounded border"
    >
      <img class="w-4" src="@/assets/addIcon.png" alt="addIcon" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    submitTodo() {
      if (this.todo === "") {
        alert("Please enter a todo");
      } else {
        this.$emit("submitTodo", this.todo);
      }
    },
  },
};
</script>
