<template>
  <div class="inline-block relative w-26 m-2">
    <select
      name="Filter"
      id="Filter"
      v-model="selected"
      @change="handleChangeSelect"
      class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 pr-8 rounded shadow leading-normal focus:outline-none focus:shadow-outline"
      :class="handleStatus()"
    >
      <option
        v-for="(stat, i) of status"
        :key="i"
        :selected="stat.value === todoStatus"
        :value="stat.value"
      >
        {{ stat.text }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg
        class="fill-current h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter",
  props: ["todoStatus"],
  data() {
    return {
      status: [
        { value: "todo", text: "Todo" },
        { value: "inProgress", text: "In Progress" },
        { value: "done", text: "Done" },
      ],
      selected: this.todoStatus,
    };
  },
  methods: {
    handleChangeSelect() {
      this.$emit("handleChangeSelect", this.selected);
    },
    handleStatus() {
      if (this.selected === "done") {
        return "bg-green-200 line-through";
      } else if (this.selected === "inProgress") {
        return "bg-sky-200";
      }
    },
  },
};
</script>
