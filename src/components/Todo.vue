<template>
  <div class="flex relative">
    <div
      class="w-full flex items-center bg-gray-200 rounded-sm"
      :class="handleStatus"
    >
      <h3 v-if="!edit" @click="handleChangeText" class="w-2/4 pl-4 text-left">
        {{ todo.text }}
      </h3>
      <div v-else class="w-2/4 pl-4 text-left">
        <input
          type="text"
          name="todoText"
          id="todoText"
          class="w-11/12 pl-4 h-7 outline-none"
          :value="todo.text"
          @focusout="handleFocusOut"
        />
      </div>
      |
      <p class="w-1/4">{{ todo.createdAt }}</p>
      |
      <div class="w-1/4">
        <Select
          :todoStatus="todo.status"
          @handleChangeSelect="handleChangeSelect"
        />
      </div>
    </div>
    <button @click="handleDelete" class="absolute right-3 top-4">
      <img class="w-4" src="@/assets/deleteIcon.png" alt="deleteIcon" />
    </button>
  </div>
</template>

<script>
import Select from "./Select";
export default {
  name: "ListItems",
  components: {
    Select,
  },
  props: ["todo"],
  data() {
    return {
      edit: false,
    };
  },
  computed: {
    handleStatus() {
      if (this.todo.status === "done") {
        return "bg-green-200 line-through";
      } else if (this.todo.status === "inProgress") {
        return "bg-sky-200";
      }
      return "";
    },
  },
  methods: {
    handleChangeText() {
      this.edit = !this.edit;
    },
    handleChangeSelect(value) {
      this.$store.dispatch("updateTodoStatus", {
        ...this.todo,
        status: value,
      });
    },
    handleFocusOut(e) {
      this.edit = !this.edit;
      this.$store.dispatch("updateTodoText", {
        ...this.todo,
        text: e.target.value,
      });
    },
    handleDelete() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
  },
};
</script>
