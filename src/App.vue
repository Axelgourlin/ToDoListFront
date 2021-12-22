<template>
  <div
    class="container min-w-full bg-gray-100 h-screen text-center mx-auto flex flex-col items-center"
  >
    <h1 class="text-2xl p-8">My Todo</h1>
    <div class="py-2 flex gap-4 w-4/5">
      <Button title="New Todo" />
      <Filter />
    </div>
    <TitleBar />
    <ListItems />
  </div>
</template>

<script>
import Button from "./components/Button";
import TitleBar from "./components/TitleBar";
import Filter from "./components/Filter";
import ListItems from "./components/ListItems";

export default {
  name: "App",
  components: {
    Button,
    TitleBar,
    Filter,
    ListItems,
  },
};
</script>

<style></style>
