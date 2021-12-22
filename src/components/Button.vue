<template>
  <button
    class="shadow bg-sky-300 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
    type="button"
  >
    New Todo
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
  },
};
</script>
